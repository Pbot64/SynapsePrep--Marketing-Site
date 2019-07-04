const { Router } = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const Email = require("email-templates");
const path = require("path");
const mongoose = require("../../lib/mongoose");

//Load Contact model
const Contact = require("../../models/Contact");

const router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Load Input Validation
const validateContactInput = require("../../validation/contact");

// @route Get api/posts/test
// @desc Tests post route
// @access Public
router.post("*", async (req, res) => {
  console.log("req.body:", req.body);
  const { errors, isValid } = validateContactInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  await mongoose();

  const newContact = new Contact({
    email: req.body.email,
    tel: req.body.tel
  });

  newContact
    .save()
    .then(contact => {
      console.log("contact:", contact);

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: "synapseprep@gmail.com",
          pass: `${process.env.EMAIL_PASSWORD}`
        }
      });

      const email = new Email({
        transport: transporter,
        message: {
          from: "support@synapseprep.net"
        },
        // uncomment below to send emails in development/test env:
        send: true
      });

      email
        .send({
          template: path.join(__dirname, "..", "..", "emails"),
          message: {
            to: `${contact.email}`
          },
          locals: {
            title: "We'll Call You Soon!"
          }
        })
        .then(res.status(200).json("email sent"))
        .catch(console.error);

      // const mailOptions = {
      //   from: 'support@synapseprep.net',
      //   to: `${contact.email}`,
      //   subject: 'Hello!',
      //   text: 'Hello World.\n\n',
      //   html: '<div><h1>Hello</h1></div>',
      // };

      // transporter.sendMail(mailOptions, (err, response) => {
      //   if (err) {
      //     console.error('there was an error: ', err);
      //   } else {
      //     console.log('here is the res: ', response);
      //     res.status(200).json('email sent');
      //   }
      // });
    })
    .catch(err => console.log(err));
});

module.exports = router;

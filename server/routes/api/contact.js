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
          subject: "Hey, We'll Call You Soon",
          from: "support@synapseprep.net"
        },
        // uncomment below to send emails in development/test env:
        send: true
      });

      console.log(email);

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
        .then(email => {
          res.status(200).send(email);
        })
        .catch(console.error);
    })
    .catch(err => console.log(err));
});

module.exports = router;

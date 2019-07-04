const { Router } = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const Email = require("email-templates");
const path = require("path");
const mongoose = require("../../lib/mongoose");

//Load Contact model
const PreferredContact = require("../../models/PreferredContact");

const router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Load Input Validation
const validatePreferredContactInput = require("../../validation/preferredContact");

// @route Get api/posts/test
// @desc Tests post route
// @access Public
router.post("*", async (req, res) => {
  const { errors, isValid } = validatePreferredContactInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  await mongoose();
  const newPreferredContact = new PreferredContact({
    course: req.body.course,
    program: req.body.program,
    location: req.body.location,
    whoNeeds: req.body.whoNeeds,
    name: req.body.name,
    email: req.body.email,
    tel: req.body.tel,
    when: req.body.when
  });

  newPreferredContact
    .save()
    .then(preferredContact => {
      console.log("preferredContact:", preferredContact);

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
            to: preferredContact.email
          },
          locals: {
            name: preferredContact.name
              .split(" ")
              .slice(0, -1)
              .join(" "),
            title: "We'll Call You Soon!"
          }
        })
        .then(res.status(200).json("email sent"))
        .catch(console.error);
    })
    .catch(err => console.log(err));
});

module.exports = router;

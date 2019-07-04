import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import Email from "email-templates";
import path from "path";
import mongoose from "../lib/mongoose";

//Load Contact model
import PreferredContact from "../models/PreferredContact";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// View engine setup
app.set("view engine", "pug");
app.set("views", "../");

// Load Input Validation
import validatePreferredContactInput from "../validation/preferredContact";

// @route Get api/posts/test
// @desc Tests post route
// @access Public
app.post("*", async (req, res) => {
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
          subject: `Hey ${preferredContact.name
            .split(" ")
            .slice(0, -1)
            .join(" ")}, We'll Call You Soon!`,
          from: "support@synapseprep.net"
        },
        // uncomment below to send emails in development/test env:
        send: true
      });

      email
        .send({
          template: path.join(__dirname, "..", "emails"),
          message: {
            to: preferredContact.email
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

export default app;

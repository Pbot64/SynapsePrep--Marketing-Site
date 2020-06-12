// Node modules
import express from "express";
import bodyParser from "body-parser";
import mongoose from "../lib/mongoose";
import nodemailer from "nodemailer";
import Email from "email-templates";
import path from "path";

//Load Subscriber model
import Subscriber from "../models/Subscriber";

// Load input validation
import validateSubscriberInput from "../validation/subscriber";

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// View engine setup
app.set("view engine", "pug");
app.set("views", "../");

// @route Get api/posts/test
// @desc Tests post route
// @access Public
app.post("*", async (req, res) => {
  const { errors, isValid } = validateSubscriberInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  await mongoose();
  const newSubscriber = new Subscriber({
    email: req.body.email,
    name: req.body.name
  });
  newSubscriber
    .save()
    .then(subscriber => {
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
          subject: `Hey ${subscriber.name
            .split(" ")
            .slice(0, -1)
            .join(" ")}, Welcome to Synapse Prep!`,
          from: "support@synapseprep.net"
        },
        // uncomment below to send emails in development/test env:
        send: true
      });

      email
        .send({
          template: path.join(__dirname, "..", "emails"),
          message: {
            to: `${subscriber.email}`
          },
          locals: {
            title: "We've Got Your Back!",
            message:
              "We're super excited you visited us. You can access our SAT prep book at this link:",
            link: "Click here for Prep Book"
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

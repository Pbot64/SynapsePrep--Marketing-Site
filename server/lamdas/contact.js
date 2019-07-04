// Node Modules
import express from "express";
import bodyParser from "body-parser";
import mongoose from "../lib/mongoose";
import nodemailer from "nodemailer";
import Email from "email-templates";
import path from "path";

//Load Contact model
import Contact from "../models/Contact";

// Load Input Validation
import validateContactInput from "../validation/contact";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// View engine setup
app.set("view engine", "pug");
app.set("views", "../");

// @route Get api/posts/test
// @desc Tests post route
// @access Public
app.post("*", async (req, res) => {
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
          subject: "Hey, We'll Call You Soon",
          from: "support@synapseprep.net"
        },
        // uncomment below to send emails in development/test env:
        send: true
      });

      console.log(email);

      email
        .send({
          template: path.join(__dirname, "..", "emails"),
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

export default app;

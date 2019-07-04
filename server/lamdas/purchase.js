import express from "express";
import bodyParser from "body-parser";
import mongoose from "../lib/mongoose";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//Load Contact model
import Purchase from "../models/Purchase";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Load Input Validation
import validatePurchaseInput from "../validation/purchase";

// @route Get api/posts/test
// @desc Tests post route
// @access Public
app.post("*", async (req, res) => {
  const { errors, isValid } = validatePurchaseInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  await mongoose();
  const newPurchase = new Purchase({
    course: req.body.course,
    program: req.body.program,
    programLevel: req.body.programLevel,
    location: req.body.location,
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    tel: req.body.tel,
    grade: req.body.grade,
    subjects: req.body.subjects,
    venue: req.body.venue,
    date: req.body.date
  });

  const promise1 = stripe.charges.create({
    amount: req.body.totalPrice,
    currency: "usd",
    description: `${req.body.programLevel} ${req.body.course} ${
      req.body.program
    }`,
    source: req.body.id,
    receipt_email: req.body.email
  });

  let promise2 = newPurchase.save();

  Promise.all([promise1, promise2])
    .then(([stripeData, purchaseData]) => {
      console.log(stripeData);

      res.status(200).json({ data: { stripeData, purchaseData } });
    })
    .catch(err => res.send(err));
});

export default app;

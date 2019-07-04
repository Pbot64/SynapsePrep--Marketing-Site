const { Router } = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mongoose = require("../../lib/mongoose");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//Load Contact model
const Purchase = require("../../models/Purchase");

const router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Load Input Validation
const validatePurchaseInput = require("../../validation/purchase");

// @route Get api/posts/test
// @desc Tests post route
// @access Public
router.post("*", async (req, res) => {
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

      // const transporter = nodemailer.createTransport({
      //   host: 'smtp.gmail.com',
      //   port: 587,
      //   secure: false,
      //   requireTLS: true,
      //   auth: {
      //     user: 'synapseprep@gmail.com',
      //     pass: `${process.env.EMAIL_PASSWORD}`,
      //   },
      // });

      // const mailOptions = {
      //   from: 'support@synapseprep.net',
      //   to: `${purchaseData.email}`,
      //   subject: 'Thank you for your purchase',
      //   text: 'Hello World.\n\n',
      // };

      // transporter.sendMail(mailOptions, (err, response) => {
      //   if (err) {
      //     console.error('there was an error: ', err);
      //   } else {
      //     console.log('here is the res: ', response);
      //     res.status(200).json('email sent');
      //   }
      // });

      res.status(200).json({ data: { stripeData, purchaseData } });
    })
    .catch(err => res.send(err));
});

module.exports = router;

//Load Contact model
const PreferredContact = require('../../../models/PreferredContact');

const bodyParser = require('body-parser');
const { Router } = require('express');
const express = require('express');

const router = Router();

// Load Input Validation
const validatePreferredContactInput = require('../../../validation/preferredContact');

// @route Get api/posts/test
// @desc Tests post route
// @access Public
router.post('/', (req, res) => {
  const { errors, isValid } = validatePreferredContactInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newPreferredContact = new PreferredContact({
    name: req.body.name,
    email: req.body.email,
    tel: req.body.tel,
    when: req.body.when,
  });

  newPreferredContact
    .save()
    .then(preferredContact => res.json(preferredContact))
    .catch(err => console.log(err));
});

module.exports = router;

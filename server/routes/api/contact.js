//Load Contact model
const Contact = require('../../models/Contact');
const bodyParser = require('body-parser');
const { Router } = require('express');

const router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const validateContactInput = require('../../validation/contact');

// @route Get api/posts/test
// @desc Tests post route
// @access Public
router.post('/', (req, res) => {
  const { errors, isValid } = validateContactInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newContact = new Contact({
    email: req.body.email,
    tel: req.body.tel,
  });

  newContact
    .save()
    .then(contact => res.json(contact))
    .catch(err => console.log(err));
});

module.exports = router;

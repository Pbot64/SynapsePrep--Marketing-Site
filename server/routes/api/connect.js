const { Router } = require("express");
const bodyParser = require("body-parser");
const mongoose = require("../../lib/mongoose");

const router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// @route Get api/posts/test
// @desc Tests post route
// @access Public
router.get("*", async (req, res) => {
  await mongoose();

  res.send("Mongo Conneced");
});

module.exports = router;

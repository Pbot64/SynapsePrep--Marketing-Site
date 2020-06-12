const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSubscriberInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.tel = !isEmpty(data.tel) ? data.tel : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

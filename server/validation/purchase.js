const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePurchaseInput(data) {
  let errors = {};

  data.parentFirstName = !isEmpty(data.parentFirstName)
    ? data.parentFirstName
    : "";
  data.parentLastName = !isEmpty(data.parentLastName)
    ? data.parentLastName
    : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.tel = !isEmpty(data.tel) ? data.tel : "";

  if (!Validator.isLength(data.parentFirstName, { min: 2, max: 30 })) {
    errors.name = "First Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.parentFirstName)) {
    errors.name = "First Name is required";
  }

  if (!Validator.isLength(data.parentLastName, { min: 2, max: 30 })) {
    errors.name = "Last Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.parentLastName)) {
    errors.name = "Last Name is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!Validator.isMobilePhone(data.tel)) {
    errors.tel = "Number is invalid";
  }

  if (Validator.isEmpty(data.tel)) {
    errors.tel = "Number is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

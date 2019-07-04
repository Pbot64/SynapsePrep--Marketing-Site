const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateContactInput(data) {
  let errors = {};

  data.fname = !isEmpty(data.fname) ? data.fname : '';
  data.lname = !isEmpty(data.lname) ? data.lname : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.tel = !isEmpty(data.tel) ? data.tel : '';

  if (!Validator.isLength(data.fname, { min: 2, max: 30 })) {
    errors.name = 'First Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.fname)) {
    errors.name = 'First Name is required';
  }

  if (!Validator.isLength(data.lname, { min: 2, max: 30 })) {
    errors.name = 'Last Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.lname)) {
    errors.name = 'Last Name is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (!Validator.isMobilePhone(data.tel)) {
    errors.tel = 'Number is invalid';
  }

  if (Validator.isEmpty(data.tel)) {
    errors.tel = 'Number is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

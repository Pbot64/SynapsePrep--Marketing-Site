const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateContactInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.tel = !isEmpty(data.tel) ? data.tel : '';

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

const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateZipInput(data) {
  let errors = {};

  data.zip = !isEmpty(data.zip) ? data.zip : '';

  if (Validator.isEmpty(data.zip)) {
    errors.zip = 'Zip is required';
  } else if (data.zip.length != 5) {
    errors.zip = 'Zip is invalid';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

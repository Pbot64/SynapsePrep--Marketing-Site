const mongoose = require('mongoose');

const { Schema } = mongoose;

// Creat Schema
const PreferredContactSchema = new Schema({
  course: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  whoNeeds: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  when: {
    type: String,
    required: true,
  },
});
const PreferredContact = mongoose.model('preferredcontact', PreferredContactSchema);
module.exports = PreferredContact;

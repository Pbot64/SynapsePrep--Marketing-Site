const mongoose = require('mongoose');

const { Schema } = mongoose;

// Creat Schema
const PreferredContactSchema = new Schema({
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

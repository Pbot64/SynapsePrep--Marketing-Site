const mongoose = require('mongoose');

const { Schema } = mongoose;

// Creat Schema
const ContactSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
});
const Contact = mongoose.model('contact', ContactSchema);
module.exports = Contact;

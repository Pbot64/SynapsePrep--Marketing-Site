const mongoose = require('mongoose');

const { Schema } = mongoose;

// Creat Schema
const ContactSchema = new Schema({
  zip: {
    type: String,
    required: true,
  },
});
const Zip = mongoose.model('zip', zipSchema);
module.exports = Zip;

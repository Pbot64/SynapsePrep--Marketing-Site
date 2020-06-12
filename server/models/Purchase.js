const mongoose = require("mongoose");

const { Schema } = mongoose;

// Creat Schema
const PurchaseSchema = new Schema({
  course: {
    type: String,
    required: true
  },
  program: {
    type: String,
    required: true
  },
  programLevel: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  parentFirstName: {
    type: String,
    required: true
  },
  parentLastName: {
    type: String,
    required: true
  },
  studentFirstName: {
    type: String,
    required: true
  },
  studentLastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  grade: {
    type: String
  },
  subjects: {
    type: Array
  },
  venue: {
    type: String
  },
  date: {
    type: String
  }
});
const Purchase = mongoose.model("purchase", PurchaseSchema);
module.exports = Purchase;

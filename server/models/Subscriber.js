const mongoose = require("mongoose");

const { Schema } = mongoose;

// Creat Schema
const SubscriberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});
const Subscriber = mongoose.model("subscriber", SubscriberSchema);
module.exports = Subscriber;

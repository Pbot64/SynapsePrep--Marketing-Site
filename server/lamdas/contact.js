const express = require('express');
const mongoose = require('mongoose');
const contact = require('../routes/api/contact');

const app = express();

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(contact);

module.exports = app;

const express = require('express');
const test = require('../routes/api/test');

const app = express();

app.use(test);

module.exports = app;

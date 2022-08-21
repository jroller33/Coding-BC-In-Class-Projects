const express = require('express');

// improt our mod routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');

const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);

module.exports = app;

// done
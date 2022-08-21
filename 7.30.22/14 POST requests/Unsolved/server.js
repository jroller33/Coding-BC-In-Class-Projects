const express = require('express');

const PORT = 3001;

const app = express();

// done: GET method for `/api/reviews` that logs when request received
app.get('/api/reviews', (req, res) => {
res.json(`${req.method} request received to get reviews`);
console.info(`${req.method} request received to get reviews`);
});

// done: POST request for `/api/reviews` that logs when request received
app.post('/api/reviews', (req, res) => {
  res.json(`${req.method} request received to add a review`);
  console.info(`${req} has been received`)
});

// done: GET request for `api/upvotes` that logs when request received
app.get('/api/upvotes', (req, res) => {
  res.json(`${req.method} request received to retrieve upvote count`);
  console.info(`${req.method} request received to retrieve upvote count`);
  });

// done: POST request for `/api/upvotes` that logs when request been received
app.post('/api/upvotes', (req, res) => {
  res.json(`${req.method} request received to upvote`);
  console.info(`${req} request received to upvote`)
});


app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);

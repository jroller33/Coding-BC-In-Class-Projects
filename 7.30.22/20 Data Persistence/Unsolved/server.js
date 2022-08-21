//          ******** done

const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./helpers/uuid'); // helper method for generating unique ids

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for reviews
app.get('/api/reviews', (req, res) => {
  res.status(200).json(`${req.method} request received to get reviews`);
  console.info(`${req.method} request received to get reviews`);
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  console.info(`${req.method} request received to add a review`);

  // destructuring assignment for items in req.body
  const { product, review, username } = req.body;

  if (product && review && username) {
    const newReview = {     // object that's saved
      product,
      review,
      username,
      review_id: uuid(),
    };

    // get existing reviews
    fs.readFile('./db/reviews.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        function parsedReviews(data) {
          JSON.parse(data);
        };   // convert str to json

        parsedReviews.push(newReview);  // add a new review

        // write the updated reviews back to the file
        fs.writeFile(
          './db/reviews.json',
          JSON.stringify(parsedReviews, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully updated reviews!')
        );
      }
    });

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting review');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
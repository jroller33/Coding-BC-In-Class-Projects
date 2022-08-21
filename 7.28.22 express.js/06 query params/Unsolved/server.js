//                  ***** done

const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// GET route to get all the terms or all the terms sorted

app.get('/api/terms/', (req, res) => {
  // console.log(req.params, 'first');
  
  // check and see if there is a query param at all
  const hasQuery = Object.keys(req.query).length > 0;
  
  // if there's a query of 'sort' and its value is 'dsc' send the results in descending order
  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  // if there's a query of 'sort' and its value is 'asc' send the results in ascending order
  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  return res.json(termData);
});

// GET route that returns any specific term
app.get('/api/term/:term', (req, res) => {
  // iterate throught the terms name to check if it matches 'req.params.term
  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// GET route for returning all terms from a given categroy
app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
});


app.get('/api/categories', (req, res) => {
  // make an array with all the categories
  const categories = termData.map((term) => term.category);

  // filter duplicate categories from the array
  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);

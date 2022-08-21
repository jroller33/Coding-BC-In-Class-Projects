// done: Import express
const express = require('express');
// done: Import 'terms.json' file

const termData = require('./terms.json');
const PORT = 3001;

// done: Initialize app variable
const app = express();
// done: Create a route for a GET request that will return the content of our `terms.json` file

app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

app.get('/api', (req, res) => res.json(termData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

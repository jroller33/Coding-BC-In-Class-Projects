const express = require('express');
const pulls = require('./db/repos'); // done: Require the json file located in `/db`

// done: Create an `app` variable set to the value of `express()`
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// done: Create a GET route for `/api` that will return the content of our json file
app.get('/api', (req, res) => res.json(pulls));

// done: Have the app listen on port 3001
app.listen(port, () => console.log(`Express server listening on port ${port}`));

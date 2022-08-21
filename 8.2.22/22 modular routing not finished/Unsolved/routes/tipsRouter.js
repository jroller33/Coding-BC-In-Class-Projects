// GET Route for retrieving all the tips
tips.get('/api/tips', (req, res) => {
    console.info(`${req.method} request received for tips`);
    readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
  });

  module.export = tips;
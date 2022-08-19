const router = require('express').Router();
const User = require('../../models/User');

// done: Use try/catch to catch errors
// done: Return the appropriate HTTP status codes

//  POST a user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    // 200 status code - request is successful
    res.status(200).json(userData);
  } catch (err) {
    // 400 status code - server could not understand the request
    res.status(400).json(err);
  }
});


// GET a user
router.get('/:id', async (req, res) => { 
  try {                                                           // trycatch
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id' });
      return;
    }
    res.status(200).json(userData); // success - 200
  } catch (err) {
    res.status(500).json(err) // error - 500
  }
  
});


// UPDATE a user
router.put('/:id', async (req, res) => {
  const userData = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(userData);
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  const userData = await User.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(userData);
});

module.exports = router;

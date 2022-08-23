const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  try {
    // get all users sorted by name
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    // serialize user data so templates can read it
    const users = userData.map((project) => project.get({ plain: true }));

    // pass serialized data into handlebars template
    res.render('homepage', { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

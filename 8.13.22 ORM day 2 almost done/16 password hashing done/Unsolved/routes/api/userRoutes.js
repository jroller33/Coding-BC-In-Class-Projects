const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// done: Add comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
  try {

    // search the db for a user w the provided email
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {

      // error message shouldn't specify shouldn't specify if the login failed bc of wrong email or pw (protects against hackers)
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }

    // use 'bcrypt.compare()' to compare the provided pw and the hashed pw
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    // if they don't match, return error message
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    
    // if they match, return success message
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

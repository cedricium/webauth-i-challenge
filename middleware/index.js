const Users = require('../users/users-model');
const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};

const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const router = express.Router();
const UserModel = require('./models');

router.post('/register', (req, res) => {
  const { login, email, password } = req.body;
  const errors = [];

  if (!login || !email || !password) {
    errors.push({
      message:
        'One of required fields is empty. Please fill all required fields.',
      status: 'error',
    });
  }
  if (password && password.length < 6) {
    errors.push({
      message: 'Password should be longer than 6 letters.',
      status: 'error',
    });
  }
  if (errors && errors.length) {
    res.status(400).json({ errors });
  } else {
    UserModel.findOne({ email }).then((user) => {
      if (user) {
        errors.push({
          message: 'This email is already in use.',
          status: 'error',
        });
        res.status(400).json({ errors });
      } else {
        const newUser = new UserModel({
          login,
          email,
          password,
        });

        bcrypt.genSalt(10, (saltError, salt) => {
          if (saltError) throw saltError;
          bcrypt.hash(newUser.password, salt, (hashError, hash) => {
            if (hashError) throw hashError;
            newUser.password = hash;

            newUser
              .save()
              .then(response => console.log(response));
          });
        });
      }
    });
  }
});

router.post('/login', (req, res, next) => { next(); },
  passport.authenticate('local'),
  (req, res) => {
    res.json({ message: 'You are successfully logged in!' });
  });

module.exports = router;

const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

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

            newUser.save().then(response => res.status(200).json({ response }));
          });
        });
      }
    });
  }
});

router.post('/login', (req, res, next) => {
  const errors = [];
  passport.authenticate('local', (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      errors.push({
        message: 'User was not found.',
        status: 'error',
      });
      return res.status(400).json({ errors });
    }
    req.logIn(user, (error) => {
      if (error) {
        return next(error);
      }
      const token = jwt.sign(user.toObject(), process.env.SECRET);
      return res.status(200).json({ token });
    });
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  // res.status(200)
});
module.exports = router;

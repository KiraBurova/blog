const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const UserModel = require('./models');

router.post('/register', (req, res) => {
  const { login, email, password } = req.body;
  let errors = [];

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
    UserModel.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({
          message: 'This email is already in use.',
          status: 'error',
        });
        res.status(400).json({ errors });
      } else {
        const user = new UserModel({
          login,
          email,
          password,
        });

        bcrypt.genSalt(10, (error, salt) => {
          if (error) throw error;
          bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) throw error;
            user.password = hash;

            user.save(error => {
              if (error) throw error;
              res
                .send(200)
                .json({ message: 'You are successfully registered!' });
            });
          });
        });
      }
    });
  }
});

module.exports = router;

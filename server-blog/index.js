const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const dbUrl = require('./config/config').url;
const usersRoute = require('./routes/users/users');
const postsRoute = require('./routes/posts/posts');

const app = express();
const PORT = 8080;
require('dotenv').config();

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

mongoose
  .connect(dbUrl, { useNewUrlParser: true })
  .then(() => console.log('MongoDB is connected'));

app.use('/users', usersRoute);
app.use('/posts', postsRoute);

app.listen(PORT, () => console.log(`Listeting on port ${PORT}`));

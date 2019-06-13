const express = require('express');
const mongoose = require('mongoose');
const dbUrl = require('./config/config').url;
const usersRoute = require('./routes/users/users');

const app = express();
const PORT = 8080;
app.use(express.json())

mongoose.connect(dbUrl, { useNewUrlParser: true })
    .then(() => console.log('MongoDB is connected'))


app.use('/users', usersRoute);

app.listen(PORT, () => console.log(`Listeting on port ${PORT}`))
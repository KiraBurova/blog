const mongoose = require('mongoose');
const MongooseSchema = require('mongoose').Schema;

const UserSchema = new MongooseSchema({
    login: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const UserModel = mongoose.model('User', UserSchema, 'users');

module.exports = UserModel;
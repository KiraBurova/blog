const mongoose = require('mongoose');
const MongooseSchema = require('mongoose').Schema;

const PostSchema = new MongooseSchema({
  title: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: true,
  },
});

const PostModel = mongoose.model('Post', PostSchema, 'posts');

module.exports = PostModel;
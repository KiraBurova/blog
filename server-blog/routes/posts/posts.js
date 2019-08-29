const express = require('express');

const router = express.Router();
const PostModel = require('./models');

router.post('/addPost', (req, res) => {
  const { title, body } = req.body;
  const errors = [];

  if (!title || !body) {
    errors.push({
      message:
        'One of required fields is empty. Please fill all required fields.',
      status: 'error',
    });
  }
  if (errors && errors.length) {
    res.status(400).json({ errors });
  } else {
    const newPost = new PostModel({
      title,
      body,
    });
    newPost.save((err) => {
      if (err) throw err;
      else res.status(200).end();
    });
  }
});

router.get('/getPosts', (req, res) => {
  PostModel.find({}).then((posts) => {
    res.send(posts);
  });
});

router.post('/deletePost/:id', (req, res) => {
  PostModel.deleteOne({
    _id: req.params.id,
  }, (err) => {
    if (err) throw err;
    res.status(200).send();
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db = 'mongodb://db_eugene:db_eugene4523455@ds229909.mlab.com:29909/meanapp';

mongoose.Promise = global.Promise;
mongoose.connect(db, (err) => {
  if (err) {
    console.log('Connection db error!');
  }
});

router.get('/posts', (req, res) => {
  console.log('Requesting posts');
  post.find({}).exec((err, posts) => {
    if (err) {
      console.log('Error getting the posts');
    } else {
      res.json(posts);
      console.log(posts);
    }
  });
});

module.exports = router;

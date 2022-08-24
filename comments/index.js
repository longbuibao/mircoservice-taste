const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');

const commentByPostId = {};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { content } = req.body;
  const comments = commentByPostId[req.params.id] || [];
  comments.push({ id, content });

  commentByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.listen(4001, () => console.log('Comments on port 4001'));

const express = require('express');
const cors = require('cors');

const app = express();

const posts = {};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  if (type === 'PostCreate') {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === 'CommentCreate') {
    const { id, content, postId } = data;
    posts[postId].comments.push({ id, content });
  }
  console.log(posts);
  res.send(posts);
});

app.listen(4002, () => console.log('Query running at 4002'));

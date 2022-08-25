const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const posts = {};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = { id, title };

  await axios.post('http://localhost:4005/events', { type: 'PostCreate', data: { id, title } });

  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log(`Received event: ${req.body.type}`);
});

app.listen(4000, () => console.log('Posts on port 4000'));

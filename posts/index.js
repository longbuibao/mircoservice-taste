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

  try {
    await axios.post('http://event-bus-srv:4005/events', { type: 'PostCreate', data: { id, title } });
  } catch (error) {
    console.log(error);
  }

  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {});

app.listen(4000, () => console.log('Posts on port 4000'));

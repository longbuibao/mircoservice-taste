const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post('http://localhost:4000/events', event).catch((e) => console.log(e));
  axios.post('http://localhost:4001/events', event).catch((e) => console.log(e));
  axios.post('http://localhost:4002/events', event).catch((e) => console.log(e));
  axios.post('http://localhost:4003/events', event).catch((e) => console.log(e));

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => console.log('Event bus is listening on port 4005'));

const express = require('serverless-express/express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'hello nigg!' });
});

app.get('/test', (req, res) => {
  res.json({ message: 'hello mga real nig!' });
});

module.exports = app;

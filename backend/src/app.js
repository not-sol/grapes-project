const express = require('serverless-express/express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'hello nigg!' });
});

module.exports = app;

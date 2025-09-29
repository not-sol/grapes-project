const express = require('serverless-express/express');
const app = express();

app.get('/upload-file', (req, res) => {
  res.send('hello world!');
});

module.exports = app;

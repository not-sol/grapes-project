const express = require('serverless-express/express');
const app = require('./app.ts');

exports.handler = express({ app });

const express = require('serverless-express/express');
const app = require('./app');

exports.handler = express({ app });

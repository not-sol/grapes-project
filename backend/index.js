const express = require('serverless-express/express');
const app = require('./src/app');

exports.handler = express({ app });

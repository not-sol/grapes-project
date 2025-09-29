const express = require('@vendia/serverless-express');
const app = require('./src/app');

exports.handler = express({ app });

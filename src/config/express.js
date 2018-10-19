const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('../api/routes/v1');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/v1',routes);

module.exports = app;
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('../api/routes/v1');
const { logs } = require('./vars');
const strategy = require('./passport');

const app = express();
app.use(morgan(logs))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passport.use('jwt', strategy.jwt);

app.use('/v1',routes);

module.exports = app;
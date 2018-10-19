const Joi = require('joi');

const signUp = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().required(0).min(6).max(128),
  }
}

module.exports = {
  signUp
}
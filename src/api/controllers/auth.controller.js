const User = require('../models/user.model');
const httpStatus = require('http-status');

async function signUp(req, res, next) {
  let user = new User({
    email: req.body.email,
    password: req.body.password
  });

  try {
    user = await user.save();
    const token = user.token();
    res.status(httpStatus.CREATED);
    res.json({token})
  } catch(error) {
    return res.send(error);
  }
}

function signIn(req, res, next) {

}

module.exports = {
  signUp,
  signIn
}

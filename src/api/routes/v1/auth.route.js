const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/auth.controller');
const { signUp } = require('../../validate/auth.validation');

const router = express.Router();

router.route('/signup')
  .post(validate(signUp), controller.signUp);

router.route('/signin')
  .post(validate(signUp), controller.signIn);

module.exports = router;

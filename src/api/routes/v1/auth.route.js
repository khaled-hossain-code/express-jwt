const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/auth.controller');
const { signUp } = require('../../validate/auth.validation');

const router = express.Router();

router.route('/signup')
  .post(validate(signUp), controller.signUp);

module.exports = router;

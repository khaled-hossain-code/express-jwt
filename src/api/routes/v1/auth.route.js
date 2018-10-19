const express = require('express');
const controller = require('../../controllers/auth.controller');

const router = express.Router();

router.route('/signup')
  .post(controller.signUp);

module.exports = router;

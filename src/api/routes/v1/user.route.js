const express = require('express');
const { authenticate } = require('../../middleware/auth');

const router = express.Router();


router.route('/')
  .get(authenticate, (req, res, next) => {
    res.send("all users");
  });
  // FIXME setup passport authentication and a n

module.exports = router;

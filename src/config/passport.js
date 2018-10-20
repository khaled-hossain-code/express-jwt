const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../api/models/user.model');
const { jwtSecret } = require('./vars')

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: jwtSecret
};

const jwt = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);

    if(user){ return done(null, user); }

    return done(null, false);
  } catch(err) {
    return done(err, false);
  }
});

module.exports = {
  jwt
}


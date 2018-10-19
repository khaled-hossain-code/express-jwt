const path = require('path');

require('dotenv-safe').load({
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  mongo: {
    uri: process.env.NODE_ENV === 'test'
      ? process.env.MONGO_URI_TEST
      : process.env.MONGO_URI
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
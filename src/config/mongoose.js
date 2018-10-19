const mongoose = require('mongoose');
const { mongo, env } = require('./vars');

mongoose.Promise = Promise;

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose Connection Error: ${err}`);
  process.exit(-1);
});

if (env === 'development') {
  mongoose.set('debug', true);
}

function connect() {
  mongoose.connect(mongo.uri, {
    keepAlive: 1,
    useNewUrlParser: true,
  });
  return mongoose.connection;
}

module.exports = {
  connect
}
const app = require('./config/express');
const { port, env } = require('./config/vars');
const mongoose = require('./config/mongoose');

mongoose.connect();

app.listen(port, () => {
  console.log(`Server Started on port ${port} as ${env}`);
})
const app = require('./config/express');
const { port, env } = require('./config/vars');

app.listen(port, () => {
  console.log(`Server Started on port ${port} as ${env}`);
})
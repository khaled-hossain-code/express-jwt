function signUp(req, res, next) {
  // TODO
  // IT gets an email and pass, check if user exists if it is return
  console.log(req.body.email);
  console.log(req.body.password);
  // create a users and create a token and reply with and token
}

module.exports = {
  signUp
}

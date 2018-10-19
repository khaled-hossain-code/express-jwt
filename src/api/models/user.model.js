const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment-timezone');
const jwt = require('jwt-simple');

const { jwtSecret, env } = require('../../config/vars');


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128
  }
});

userSchema.pre('save',async function save(next) {
  try {
    if(!this.isModified('password')) return next();
    
    const rounds = env === 'test' ? 1 : 10;
    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;
    
    return next();
  } catch(err) {
    return next(err);
  }
});

userSchema.method({
  token(){
    const payload = {
      sub: this._id,
      iat: moment().unix(),
    }

    return jwt.encode(payload, jwtSecret);
  }
})

module.exports = mongoose.model('User', userSchema);

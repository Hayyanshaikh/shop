const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: { type: String, unique: true},
  password: String,
  gender: String,
  address: String,
  city: String,
  zipCode: String,
  country: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;

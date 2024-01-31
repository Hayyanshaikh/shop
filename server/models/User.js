const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
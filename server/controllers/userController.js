const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.json({ message: 'Email already registered' });
      console.error('Email already registered');
      return;
    }

    const newUser = new User({ email, username, password });
    await newUser.save();

    res.json({ message: "Registration Successful", user: newUser });
    console.log('Registration Successful');

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { register };
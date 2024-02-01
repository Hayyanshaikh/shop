const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      password,
      gender,
      address,
      city,
      zipCode,
      country
    } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.json({ message: 'Email already registered' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 2);

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      gender,
      address,
      city,
      zipCode,
      country
    });
    await newUser.save();

    res.json({ message: "Registration Successful", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const getUser = await User.findOne({ email });

    if (!getUser) {
      res.json({ message: 'Email or password invalid', user: null});
      return;
    }

    const isMatch = await bcrypt.compare(password, getUser.password);

    if (!isMatch) {
      res.json({ message: 'Email or password invalid', user: null});
      return;
    }

    res.json({ message: 'Login Successful', user: getUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = { register, login };
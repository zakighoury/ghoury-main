// routes/signup.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { getDatabase } = require('../db');

router.post('/', async (req, res) => {
  try {
    const collection = getDatabase().collection('users');

    // Check if the user already exists
    const existingUser = await collection.findOne({ name: req.body.username });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Insert the new user
    await collection.insertOne({
      name: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).send('Error during signup');
  }
});

module.exports = router;

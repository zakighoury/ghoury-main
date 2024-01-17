// routes/login.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { getDatabase } = require('../db');

router.post('/', async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const collection = getDatabase().collection('users');

    // Use a case-insensitive query for the username
    const user = await collection.findOne({ name: new RegExp('^' + name + '$', 'i') });

    if (!user) {
      console.log('User not found for:', name);
      return res.status(400).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Error during login' });
  }
});

module.exports = router;

// routes/signup.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { getDatabase } = require('../db');

router.post('/', async (req, res) => {
  try {
    // Input validation - check if username, email, and password are provided
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    const collection = getDatabase().collection('users');

    // Check if the user already exists
    const existingUser = await collection.findOne({ name: req.body.username });

    // If user exists, respond with a 400 status and a specific error message
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Insert the new user
    await collection.insertOne({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Generate a token for the newly registered user
    const token = generateToken(req.body.username, req.body.email);

    // Respond with the token in the JSON response
    res.status(200).json({ token, username: req.body.username, email: req.body.email });

  } catch (error) {
    console.error('Error during signup:', error);

    // Handle errors more gracefully and respond with a specific error message
    res.status(500).json({ error: 'Error during signup. Please try again later.' });
  }
});

// Function to generate a JWT token
function generateToken(username, email) {
  const secretKey = 'your_secret_key'; // Replace with your actual secret key
  const payload = { username, email };
  const options = { expiresIn: '1h' }; // Adjust the expiration time as needed

  return jwt.sign(payload, secretKey, options);
}

module.exports = router;

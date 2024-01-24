// routes/login.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { getDatabase } = require('../db');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Input validation - check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const collection = getDatabase().collection('users');

    // Use a case-insensitive query for the email
    const user = await collection.findOne({ email: new RegExp('^' + email + '$', 'i') });

    // If user not found, respond with a 400 status and a specific error message
    if (!user) {
      console.log('User not found for:', email);
      return res.status(400).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = user.password;

    // If passwords match, respond with a success message and generate a token
    if (passwordMatch === password) {
      // Generate a token for the logged-in user
      const token = generateToken(user.username, user.email);

      // Respond with the token and success message in the JSON response
      return res.json({ token, username: user.username, email: user.email, message: 'Login successful' });
    } else {
      // If passwords don't match, respond with a 401 status and a specific error message
      return res.status(401).json({ error: 'Incorrect password' });
    }

  } catch (error) {
    console.error('Error during login:', error);

    // Handle errors more gracefully and respond with a specific error message
    res.status(500).json({ error: 'Error during login. Please try again later.' });
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

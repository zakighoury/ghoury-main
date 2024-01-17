const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Hash password before saving to the database
loginschema.pre('save', async function (next) {
    try {
        // Generate a salt with cost factor 10
        const salt = await bcrypt.genSalt(10);
        
        // Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(this.password, salt);
        
        // Update the password field with the hashed password
        this.password = hashedPassword;
        
        // Move on to the next middleware in the pre-save hook
        next();
    } catch (error) {
        // Call next with an error if there's an issue
        next(error);
    }
});

// Create a Mongoose model named "User" using the defined schema
const User = mongoose.model("User", loginschema);

// Export the User model
module.exports = User;

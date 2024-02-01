const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Add _id field explicitly (though it's added by default)
UserSchema.add({
    _id: mongoose.Schema.Types.ObjectId
});

// No bcrypt pre-save hook

// Create a Mongoose model named "User" using the defined schema
const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;

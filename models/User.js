const mongoose = require('mongoose');

// Defines the schema for a user in the database
const userSchema = new mongoose.Schema({
    googleId: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    displayName: { 
        type: String, 
        required: true 
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
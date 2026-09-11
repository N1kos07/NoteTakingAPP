const mongoose = require('mongoose');

// Defines the schema for a note in the database
const noteSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
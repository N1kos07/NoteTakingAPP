const Note = require('../models/Note');


// gets all notes from the database
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Create a new note and saves it to the database
const createNote = async (req, res) => {    
    try {
        const note = new Note(req.body);
        await note.save();
        res.json(note);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Updates an existing note by its ID
const updateNote = async (req, res) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );
        res.json(updatedNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Deletes a note by its ID
const deleteNote = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
};
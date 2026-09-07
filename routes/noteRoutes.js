const express = require('express');
const Note = require('../models/Note');
const router = express.Router();


// gets all notes from the database
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Create a new note and saves it to the database
router.post('/', async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.json(note);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Updates an existing note by its ID
router.put('/:id', async (req, res) => {
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
});

// Deletes a note by its ID
router.delete('/:id', async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;
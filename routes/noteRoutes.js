const express = require('express');
const Note = require('../models/Note');
const router = express.Router();


// gets all notes from the database
router.get('/', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);

});


// Create a new note and saves it to the database
router.post('/', async (req, res) => {
    const note = new Note(req.body);
    await note.save();
    res.json(note);
});


// Updates an existing note by its ID
router.put('/:id', async (req, res) => {
    const updatedNote = await Note.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true }); 
    res.json(updatedNote);
});

// Deletes a note by its ID
router.delete('/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted successfully' });
});


module.exports = router;
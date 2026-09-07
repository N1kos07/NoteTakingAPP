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


module.exports = router;
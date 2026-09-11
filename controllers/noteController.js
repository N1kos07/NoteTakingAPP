const Note = require('../models/Note');


// gets all notes from the database for the loggedin user  
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({ owner: req.user._id });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Create a new note for the logged-in user and saves it to the database
const createNote = async (req, res) => {
    try {
        const note = new Note({
            title: req.body.title,
            content: req.body.content,
            owner: req.user._id
        });

        await note.save();

        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Updates a note owned by the logged-in user
const updateNote = async (req, res) => {
    try {
        const updatedNote = await Note.findOneAndUpdate(
            {
                _id: req.params.id,
                owner: req.user._id
            },
            {
                title: req.body.title,
                content: req.body.content
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedNote) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Deletes a note owned by the logged-in user
const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id
        });
        
        if (!deletedNote) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json(deletedNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
};
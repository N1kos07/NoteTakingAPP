const express = require('express');
const Note = require('../models/Note');
const router = express.Router();
const noteController = require('../controllers/noteController');


router.get('/', noteController.getAllNotes);


router.post('/', noteController.createNote);


router.put('/:id', noteController.updateNote);


router.delete('/:id', noteController.deleteNote);




module.exports = router;
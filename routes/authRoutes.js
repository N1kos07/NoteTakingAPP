const passport = require('passport');
const express = require('express');
const Note = require('../models/User');
const router = express.Router();


// login
//call back
// logout


router.get('/login', passport.authenticate('google', { scope: ['profile', 'email'] }));


router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/notes'); // Redirect to the home page or any other page after successful login
});



router.post('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }

        res.redirect('/');
    });
});



module.exports = router;
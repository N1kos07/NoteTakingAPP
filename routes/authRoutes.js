const passport = require('passport');
const express = require('express');
const Note = require('../models/User');
const router = express.Router();


// login
// call back
// logout


router.get('/login', passport.authenticate('google', { scope: ['profile', 'email'] }));


router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/'); // Redirect to the home page or any other page after successful login
});



router.post('/logout', (req, res, next) => {
    req.logout((error) => {
        if (error) {
            return next(error);
        }

        res.redirect('/auth/login'); 
    });
});



module.exports = router;
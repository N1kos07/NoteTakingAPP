const configPassport = require('./config/passport');
const passport = require('passport');
const session = require('express-session');
const express = require('express');
const mongoose = require("mongoose");
const noteRoutes = require('./routes/noteRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
const port = 3000;

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
//configPassport(passport);
app.use(passport.initialize());
app.use(passport.session());


// This is my mongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });



// Sends all /note requests to noteRoutes.js
app.use('/notes', noteRoutes);

// Sends all /note requests to authRoutes.js
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Note-taking app is running on http://localhost:${port}`);
});
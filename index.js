const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.static('public'));
const port = 3000;

// This is my mongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });


// Sends all /note requests to noteRoutes.js
const noteRoutes = require('./routes/noteRoutes');
app.use('/notes', noteRoutes);


app.get('/', (req, res) => {
  res.send('Note-taking app is running!');
});

app.listen(port, () => {
  console.log(`Note-taking app is running on http://localhost:${port}`);
});
const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();


const app = express();
const port = 3000;


mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });



app.get('/', (req, res) => {
  res.send('Note-taking app is running!');
});

app.listen(port, () => {
  console.log(`Note-taking app is running on http://localhost:${port}`);
});
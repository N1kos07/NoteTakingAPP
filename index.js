const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Note-taking app is running!');
});

app.listen(port, () => {
  console.log(`Note-taking app is running on http://localhost:${port}`);
});
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect('mongodb://localhost/digitales-notizbuch', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('Backend für das digitale Notizbuch');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
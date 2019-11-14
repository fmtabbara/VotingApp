const express = require ('express');
const mongoose = require('mongoose');
const db = require('./server/config').DB_URI;
const Party = require('./server/models');

const app = express();
const PORT = 4001;

mongoose.connect(db, { useNewUrlParser: true })
  .then((res) =>  console.log("Connected to the database"))
  .catch((err) => console.log(err))

app.get('/data', (req, res) => {
  Party.find({}, (err, data) => {
    res.send(data)
  })
})

app.listen(PORT, console.log(`Server is running on port: ${PORT}`))
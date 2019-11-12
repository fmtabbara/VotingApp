const express = require ('express');
const mongoose = require('mongoose');
const db = require('./server/config').DB_URI;
const Party = require('./server/models');

const app = express();
const PORT = 3000;

mongoose.connect(db, { useNewUrlParser: true })
  .then((res) =>  console.log("Connected to the database"))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  Party.find({name: "Labour"}, (err, res) => {
    console.log(res)
  })
})

app.listen(PORT, console.log(`Server is running on port: ${PORT}`))
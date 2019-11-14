const express = require ('express');
const mongoose = require('mongoose');
const Party = require('./server/models');
require('dotenv').config();

const PORT = process.env.PORT || 4001;
const db = process.env.MONGO_URI;
const app = express();

mongoose.connect(db, { useNewUrlParser: true })
  .then((res) =>  console.log("Connected to the database"))
  .catch((err) => console.log(err))


app.get('/', (req, res) => {
  Party.find({}, (err, data) => {
    if (data) {
      res.send(data);
    }
  })
})

app.listen(PORT, console.log(`Server is running on port: ${PORT}`))
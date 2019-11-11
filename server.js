const express = require ('express');
const mongoose = require('mongoose');
const db = require('./server/config').DB_URI;

const app = express();
const PORT = 3000;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() =>  console.log("Connected to the database"))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  
})

app.listen(PORT, console.log(`Server is running on port: ${PORT}`))
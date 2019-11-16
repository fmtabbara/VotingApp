const express = require ('express');
const mongoose = require('mongoose');
const Party = require('./server/models');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 4001;
const db = process.env.MONGO_URI;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'client/build'), {
  etag: false,
  maxAge: 1000,
}));
app.disable('etag');
mongoose.connect(db, { useNewUrlParser: true })
  .then((res) =>  console.log("Connected to the database"))
  .catch((err) => console.log(err))

app.get('/api', (req, res) => {
  Party.find({}, (err, data) => {
    if (data) {
      res.send(data);
    }
  })
});

app.post('/api', (req, res) => {
  const party = req.body.party;
  Party.findOneAndUpdate({name: party}, {$inc: {votes: 1}}, (err, success) => {
    if (err) {
      res.status(500).send("There was an error updating the database")
    } else {
      res.send({success: true})
    }
  });
});

app.listen(PORT, console.log(`Server is running on port: ${PORT}`))
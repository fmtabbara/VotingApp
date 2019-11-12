const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PartySchema = new Schema({
  name: {type: String},
  votes: {type: Number},
});

module.exports = Party = mongoose.model('party', PartySchema);
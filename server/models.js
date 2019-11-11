const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PartySchema = new Schema({
  name: Schema.Types.String,
  votes: Schema.Types.Number,
});

module.exports = Profile = mongoose.model('party', PartySchema);
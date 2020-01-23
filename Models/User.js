const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  candidatename: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  clientname: {
    type: String,
  },
  currentlocation: {
    type: String,
  },
  preferredlocation: {
    type: String,
  },
  billing: {
    type: Number,
  },
  skillset: {
    type: String,
  },
  yearsofexperience: {
    type: Number,
  },
  proficiency: {
    type: String,
  }


});

module.exports = User = mongoose.model('user', UserSchema);
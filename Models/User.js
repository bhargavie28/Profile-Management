const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  email: {
    type: String,
  },
  workphonenumber: {
    type: Number,
    required: true
  },
  homephonenumber: {
    type: Number,
    required: true
  },
  workpermit: {
    type: Number,
    
  },
  dob: {
    type: String,
  },
  preferredlocation: {
    type: Number,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
  },
  employer: {
    type: String,
  },
  linkedinurl: {
    type: String,
  },
  skypeid: {
    type: String,
  },
  status: {
    type: String,
  },
  relocation: {
    type: String,
  },
  taxterms: {
    type: String,
  },
  gender: {
    type: String,
  },

  source: {
    type: String,
  },
  resume: {
    type: String,
  },
  currentlocation: {
    type: String,
  }


});

module.exports = User = mongoose.model('user', UserSchema);
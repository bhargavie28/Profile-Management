const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  email: {
    type: String,
    unique: true
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
    type: String,
    
  },
  dob: {
    type: Date,
  },
  preferredlocation: {
    type: String,
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
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  primaryskills: {
    type: [String],
  }


});

module.exports = User = mongoose.model('user', UserSchema);
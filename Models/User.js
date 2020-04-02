const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  profileImg: {
    type: String
  },

  name: {
    type: String
  },

  email: {
    type: String
  },
  workphonenumber: {
    type: Number
  },
  homephonenumber: {
    type: Number
  },
  workpermit: {
    type: String
  },
  dob: {
    type: String
  },
  preferredlocation: {
    type: String
  },
  address: {
    type: String
  },
  role: {
    type: String
  },
  employer: {
    type: String
  },
  linkedinurl: {
    type: String
  },
  skypeid: {
    type: String
  },
  status: {
    type: String
  },
  relocation: {
    type: String
  },
  taxterms: {
    type: String
  },
  gender: {
    type: String
  },

  source: {
    type: String
  },
  resume: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  primaryskills: {
    type: [String]
  }
});

module.exports = User = mongoose.model("user", UserSchema);

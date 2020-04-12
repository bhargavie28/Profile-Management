const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
//   avatar: {
//     type: String
//   },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = login = mongoose.model('login', LoginSchema);
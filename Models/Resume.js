const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'resume'
})

module.exports = mongoose.model('Resume', resumeSchema)
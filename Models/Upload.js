const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadSchema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'upload'
})

module.exports = mongoose.model('Upload', uploadSchema)
const mongoose = require('mongoose')

const ReplySchema = new mongoose.Schema({
  post: {
    type: mongoose.ObjectId,
    ref: 'BlogPost',
  },
  message: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Reply = mongoose.model('Reply', ReplySchema)

module.exports = Reply

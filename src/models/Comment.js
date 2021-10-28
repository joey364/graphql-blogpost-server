const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.ObjectId,
    ref: 'User',
  },
  replies: {
    type: [mongoose.ObjectId],
    ref: 'Reply',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment

const mongoose = require('mongoose')

const { Schema } = mongoose

const CommentSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.ObjectId,
    ref: 'BlogPost',
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

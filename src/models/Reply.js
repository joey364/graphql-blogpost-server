const mongoose = require('mongoose')

const { Schema, ObjectId } = mongoose

const ReplySchema = new Schema({
  comment: {
    type: ObjectId,
    ref: 'Comment',
  },
  message: {
    type: String,
    required: true,
  },
  postedBy: {
    type: ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Reply = mongoose.model('Reply', ReplySchema)

module.exports = Reply

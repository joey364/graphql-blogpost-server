const mongoose = require('mongoose')

const { Schema, ObjectId } = mongoose

const LikeSchema = new Schema({
  post: {
    type: ObjectId,
    ref: 'BlogPost',
  },
  user: {
    type: ObjectId,
    ref: 'User',
  },
})

const Like = mongoose.model('Like', LikeSchema)

module.exports = Like

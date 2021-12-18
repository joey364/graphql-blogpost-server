const mongoose = require('mongoose')

const { Schema, ObjectId } = mongoose

const BlogPostSchema = new Schema({
  postText: {
    type: String,
    required: true,
  },
  postedBy: {
    type: ObjectId,
    ref: 'User',
  },
  comments: {
    type: [ObjectId],
    ref: 'Comment',
  },
  likes: {
    type: [ObjectId],
    ref: 'Like',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.exports = BlogPost

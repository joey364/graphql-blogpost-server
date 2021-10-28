const mongoose = require('mongoose')

const BlogPostSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.ObjectId,
    ref: 'User',
  },
  comments: {
    type: [mongoose.ObjectId],
    ref: 'Comment',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.exports = BlogPost

const comment = require('./comment')
const createBlogPost = require('./createBlogPost')
const createUser = require('./createUser')
const deleteBlogPost = require('./deleteBlogPost')
const deleteComment = require('./deleteComment')
const deleteUser = require('./deleteUser')
const likeBlogPost = require('./likeBlogPost')
const replyComment = require('./replyComment')
const unlikeBlogPost = require('./unlikeBlogPost')
const updateBlogPost = require('./updateBlogPost')

module.exports = {
  comment,
  createBlogPost,
  createUser,
  deleteBlogPost,
  deleteComment,
  deleteUser,
  likeBlogPost,
  replyComment,
  unlikeBlogPost,
  updateBlogPost,
}

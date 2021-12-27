const postedBy = {
  description: 'Return user info for the post',
  resolve: async (parent, _args, { models }) => {
    const postAuthor = await models.User.findOne({ _id: parent.postedBy._id })
    return postAuthor
  },
}

const comments = {
  description: 'Return comments for post',
  resolve: async (parent, _args, { models }) => {
    const postComments = await models.Comment.find({
      _id: parent.comments,
    })
    return postComments
  },
}

const likes = {
  description: 'Return likes for post',
  resolve: async (parent, _args, { models }) => {
    const postLikes = await models.Like.find({ post: parent._id })
    return postLikes
  },
}

module.exports = {
  postedBy,
  comments,
  likes,
}

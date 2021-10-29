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
    const postComments = await models.Comments.findone({ _id: parent._id })
    return postComments
  },
}

const likes = {
  description: 'Return likes for post',
  resolve: async (parent, _args, { models }) => {
    const postLikes = await models.Like.find({ _id: parent._id })
    const likeCount = await models.Like.count()
    return {
      postLikes,
      likeCount,
    }
  },
}

module.exports = {
  postedBy,
  comments,
  likes,
}

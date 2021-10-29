const post = {
  description: 'Return info on post',
  resolve: async (parent, args, { models }) => {
    const postParent = models.BlogPost.find({ _id: parent._id })
    return postParent
  },
}

const user = {
  description: 'Return info on user',
  resolve: async (parent, _args, { models }) => {
    const userLikeInfo = models.User.find({ _id: parent._id })
    return userLikeInfo
  },
}

module.exports = {
  post,
  user,
}

const post = {
  description: 'Return info on post',
  resolve: async (parent, _args, { models }) => {
    const postParent = models.BlogPost.findOne({ _id: parent.post })
    return postParent
  },
}

const user = {
  description: 'Return info on user',
  resolve: async (parent, _args, { models }) => {
    const userLikeInfo = models.User.findOne({ _id: parent.user })
    return userLikeInfo
  },
}

module.exports = {
  post,
  user,
}

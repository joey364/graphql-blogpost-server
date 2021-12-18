const post = {
  description: 'Return post being replied to',
  resolve: async (parent, _args, { models }) => {
    const postParent = await models.BlogPost.find({ _id: parent._id })
    return postParent
  },
}

const postedBy = {
  description: 'Return post being replied to',
  resolve: async (parent, _args, { models }) => {
    const postAuthor = await models.User.find({ _id: parent.postedBy._id })
    return postAuthor
  },
}

module.exports = {
  post,
  postedBy,
}

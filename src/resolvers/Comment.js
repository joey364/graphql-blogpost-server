const post = {
  description: 'Return post being replied to',
  resolve: async (parent, _args, { models }) => {
    console.log('Comment parent', parent)
    const postParent = await models.BlogPost.find({ _id: parent._id })
    return postParent
  },
}

const replies = {
  description: 'return replies for post',
  resolve: async (parent, _args, { models }) => {
    const commentParent = models.Reply.find({ _id: parent._id })
    return commentParent
  },
}
const postedBy = {
  description: 'Return user info for comment',
  resolve: async (parent, _args, { models }) => {
    const postAuthor = await models.User.find({ _id: parent.postedBy._id })
    return postAuthor
  },
}

module.exports = {
  post,
  postedBy,
  replies,
}

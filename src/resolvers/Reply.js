const comment = {
  description: 'Return comment being replied to',
  resolve: async (parent, _args, { models }) => {
    const commentParent = await models.Comment.findOne({ comment: parent._id })
    return commentParent
  },
}

const postedBy = {
  description: 'Return user replying',
  resolve: async (parent, _args, { models }) => {
    const postAuthor = await models.User.findOne({ _id: parent.postedBy._id })
    return postAuthor
  },
}

module.exports = {
  comment,
  postedBy,
}

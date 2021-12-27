const post = {
  description: 'Return post being replied to',
  resolve: async (parent, _args, { models }) => {
    // comment document should have a post field
    // that matches a particular post
    const postParent = await models.BlogPost.findOne({ _id: parent.post })
    return postParent
  },
}

const replies = {
  description: 'return replies to comment',
  resolve: async (parent, _args, { models }) => {
    // comment document should have an field
    // that matches a reply document
    const commentParent = models.Reply.find({ comment: parent._id })
    return commentParent
  },
}

const postedBy = {
  description: 'Return user info for comment',
  // comment document should have an id field
  // matching a user id
  resolve: async (parent, _args, { models }) => {
    const postAuthor = await models.User.findOne({ _id: parent.postedBy._id })
    return postAuthor
  },
}

module.exports = {
  post,
  postedBy,
  replies,
}

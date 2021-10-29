const posts = {
  description: 'Returns posts by a particular user',
  resolve: async (_parent, args, { models }) => {
    const userPosts = await models.User.find({ _id: args.id })
    return userPosts
  },
}

module.exports = {
  posts,
}

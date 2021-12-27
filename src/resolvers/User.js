const posts = {
  description: 'Returns posts by a particular user',
  resolve: async (parent, args, { models }) => {
    const userPosts = await models.BlogPost.find({ postedBy: parent.id })
    return userPosts
  },
}

module.exports = {
  posts,
}

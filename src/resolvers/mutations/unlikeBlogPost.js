const unlikeBlogPost = {
  description: 'Unlike a post',
  resolve: async (_parent, args, { models }) => {
    // TODO implement unlikePost
    const postToUnlike = await models.Like.deleteOne({ _id: args.id })
    return postToUnlike
  },
}

module.exports = unlikeBlogPost

const likeBlogPost = {
  description: 'Like a post',
  resolve: async (parent, args, { models, userId }) => {
    // TODO: implement likePost
    const newLike = new models.Like({
      post: args.blogPostId,
      user: userId,
    })

    await newLike.save()
    const likeCount = await models.Like.find({ _id: args.blogPostId }).count()
    return {
      newLike,
      likeCount,
    }
  },
}

module.exports = likeBlogPost

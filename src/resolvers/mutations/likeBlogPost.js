const likeBlogPost = {
  description: 'Like a post',
  resolve: async (parent, args, { models, userId }) => {
    const userLike = await models.Like.findOne({
      post: args.blogPostId,
      user: await userId,
    })

    if (userLike) {
      throw new Error('You have already liked this post')
    }

    const newLike = new models.Like({
      post: args.blogPostId,
      user: await userId,
    })
    await newLike.save()

    return newLike
  },
}

module.exports = likeBlogPost

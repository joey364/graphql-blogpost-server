const comment = {
  description: 'Comment on post',
  resolve: async (parent, args, { models, userId }) => {
    const newComment = new models.Comment({
      post: args.blogPostId,
      message: args.message,
      postedBy: await userId,
    })
    await newComment.save()

    return newComment
  },
}

module.exports = comment

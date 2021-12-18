const comment = {
  description: 'Comment on post',
  resolve: async (parent, args, { models, userId }) => {
    // TODO implement
    console.log(args.blogPostId)
    const newComment = new models.Comment({
      post: args.blogPostId,
      message: args.message,
      postedBy: await userId,
    })

    await newComment.save()

    // update the post to reflect new comment
    await models.BlogPost.updateOne(
      {
        _id: args.blogPostId,
      },
      { comments: [newComment._id] }
    )

    return newComment
  },
}

module.exports = comment

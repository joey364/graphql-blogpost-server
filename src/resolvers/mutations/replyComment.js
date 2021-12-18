const replyComment = {
  description: 'Reply to a comment',
  resolve: async (parent, args, { models, userId }) => {
    // TODO implement replyComment
    const newReply = new models.Reply({
      post: args.blogPostId,
      message: args.message,
      postedBy: userId,
    })
    await newReply.save()

    return newReply
  },
}

module.exports = replyComment

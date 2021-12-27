const replyComment = {
  description: 'Reply a comment',
  resolve: async (parent, args, { models, userId }) => {
    // TODO implement replyComment
    const newReply = new models.Reply({
      comment: args.commentId,
      message: args.message,
      postedBy: await userId,
    })
    await newReply.save()

    return newReply
  },
}

module.exports = replyComment

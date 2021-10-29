const deleteComment = {
  description: 'Delete comment',
  resolve: async (parent, args, { models }) => {
    const commentToDelete = await models.Comment.deleteOne({
      _id: args.commentId,
    })
    return commentToDelete
  },
}

module.exports = deleteComment

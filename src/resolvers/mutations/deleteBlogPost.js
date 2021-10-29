const deleteBlogPost = {
  description: 'Delete blog post',
  resolve: async (parent, args, { models }) => {
    const postToDelete = await models.BlogPost.deleteOne({
      _id: args.blogPostId,
    })
    return postToDelete
  },
}

module.exports = deleteBlogPost

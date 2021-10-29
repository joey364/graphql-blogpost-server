const updateBlogPost = {
  description: 'Update a blog post',
  resolve: async (parent, args, { models }) => {
    const postToUpdate = await models.BlogPost.updateOne(
      { _id: args.blogPostId },
      {
        $set: { postText: args.postText },
        $currentDate: { lastModified: true },
      }
    )
    return postToUpdate
  },
}

module.exports = updateBlogPost

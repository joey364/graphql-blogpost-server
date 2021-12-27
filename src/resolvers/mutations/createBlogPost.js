const createBlogPost = {
  description: 'Create a blog post',
  resolve: async (parent, args, { models, userId }) => {
    // create new post
    const newPost = new models.BlogPost({
      postText: args.postText,
      postedBy: await userId,
    })
    await newPost.save()

    return newPost
  },
}

module.exports = createBlogPost

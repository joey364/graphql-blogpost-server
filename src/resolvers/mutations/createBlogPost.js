const createBlogPost = {
  description: 'Create a blog post',
  resolve: async (parent, args, { models }) => {
    //get user id
    const user = await models.User.findOne({ name: 'Alex' })
    // create new post
    const newPost = new models.BlogPost({
      postText: args.postText,
      postedBy: user._id,
    })
    await newPost.save()

    return newPost
  },
}

module.exports = createBlogPost

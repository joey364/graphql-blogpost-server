const feed = {
  description: 'Return all blogposts',
  resolve: async (_parent, _args, { models }) => {
    const blogposts = await models.BlogPost.find()
    return blogposts
  },
}

module.exports = feed

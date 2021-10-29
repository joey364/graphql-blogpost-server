const user = {
  description: 'Return a single user',
  resolve: async (_parent, args, { models }) => {
    const singleUser = await models.User.findOne({ _id: args.userId })
    return singleUser
  },
}

module.exports = user

const users = {
  description: 'Return all users',
  resolve: async (_parent, _args, { models }) => {
    const allUsers = await models.User.find()
    return allUsers
  },
}

module.exports = users

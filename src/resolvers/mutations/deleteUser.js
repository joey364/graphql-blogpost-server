const deleteUser = {
  description: 'Delete user',
  resolve: async (parent, args, { models }) => {
    const userToDelete = await models.User.deleteOne({
      _id: args.userId,
    })
    return userToDelete
  },
}

module.exports = deleteUser

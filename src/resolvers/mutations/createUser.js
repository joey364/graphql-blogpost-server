const createUser = {
  description: 'Create a user',
  resolve: async (_parent, args, { models }) => {
    const newUser = new models.User({
      name: args.name,
      email: args.email,
    })
    await newUser.save()

    return newUser
  },
}

module.exports = createUser

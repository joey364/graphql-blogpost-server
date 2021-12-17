const getUserId = async ({ User }) => {
  const user = await User.findOne({ name: 'Alex' })
  return user._id ?? ''
}

module.exports = { getUserId }

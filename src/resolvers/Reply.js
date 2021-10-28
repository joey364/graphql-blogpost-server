const post = {
  description: 'Return post being replied to',
  resolve: () => {
    // TODO find post info
    return null
  }
}

const postedBy = {
  description: 'Return post being replied to',
  resolve: () => {
    // TODO find and return user info
    return null
  }
}

module.exports = {
  post,
  postedBy,
}

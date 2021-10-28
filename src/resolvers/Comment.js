const post = {
  description: 'Return post being replied to',
  resolve: () => {
    // TODO return post info
    return null
  }
}

const replies = {
  description: 'return replies for post',
  resolve: () => {
    // TODO return replies for post
    return null
  },
}
const postedBy = {
  description: 'Return user info for comment',
  resolve: () => {
    // TODO return user info for comment
    return null
  }
}

module.exports = {
  post,
  postedBy,
  replies,
}

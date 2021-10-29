const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  posts: {
    type: [mongoose.ObjectId],
    ref: 'BlogPost',
    default: [],
  },
})

const User = mongoose.model('User', UserSchema)

module.exports = User

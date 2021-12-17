const mongoose = require('mongoose')
const { Comment, BlogPost } = require('../models')

// async function main() {
//   const newUser = await User({
//     name: 'test user',
//     email: 'test@email.com',
//   })

//   mongoose.connect(
//     '',
//     () => {
//       console.log('✅ Connected to db!')
//     }
//   )
//   await newUser.save((err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('saved data successfully')
//     }
//   })
//   const allUsers = await User.find()

//   console.log(newUser, allUsers)
// }

// main()
//   .catch((e) => {
//     console.error(e)
//     throw e
//   })
//   .finally(async () => {
//     await mongoose.disconnect()
//   })

const main = async () => {
  // var alex = new User({ name: 'Alex', email: 'lexlutha@email.com' })
  // var mark = new User({ name: 'Mark', email: 'markozucks@email.com' })

  const newComment = new Comment({
    post: '617c0f32690dd239d9161248',
    message: 'This is a comment from script js',
    postedBy: '617be6849a8e16c645ec9bcf',
  })

  mongoose.connect(
    '',
    () => {
      console.log('opened connection')
    }
  )

  const saveResponse = (err) => {
    if (err) {
      console.log('save Failed')
      // console.log(err)
    } else {
      console.log('save success')
    }
  }

  await newComment.save(saveResponse)

  await BlogPost.updateOne(
    {
      _id: '617c0f32690dd239d9161248',
    },
    { comments: [newComment._id] },
    saveResponse
  )
  // await alex.save(saveResponse)
  // await mark.save(saveResponse)
  console.log(newComment)
}

main()

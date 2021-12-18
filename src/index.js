const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config()

const { readFileSync } = require('fs')
const path = require('path')

const models = require('./models')

const PORT = process.env.PORT ?? 4000
const { DATABASE_URL } = process.env

const typeDefs = readFileSync(path.join(__dirname, './schema.graphql'), 'utf-8')

const resolvers = require('./resolvers')
const { getUserId } = require('./utils')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  path: '/',
  context: ({ req, res }) => ({
    ...req,
    ...res,
    models,
    userId: getUserId(models),
  }),
})

mongoose.connect(DATABASE_URL, () => {
  console.log('✅ Connected to db!')
})

server.listen(PORT, () => {
  console.log('🚀 Server up an running')
})

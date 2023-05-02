import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import dotEnv from 'dotenv'
import { connect } from 'mongoose'
import { resolvers } from './graph/resolvers.js'
import { typeDefs } from './graph/typedef.js'

dotEnv.config()
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers
})
await server.start()
server.applyMiddleware({ app, path: '/graphql' })

app.listen(process.env.PORT, async () => {
  console.log(`🚀 Server listening at: ${process.env.PORT}`)
  await connect('mongodb://localhost:27017', { dbName: 'talkify' })
  console.log(` 🔐  Database connected successfully`)
})

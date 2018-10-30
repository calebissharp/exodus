const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const { GraphQLServer } = require('graphql-yoga')
require('dotenv').config({ path: 'variables.env' })
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const db = require('./db')
const { addUrl } = require('./constants')

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: {
    Mutation,
    Query
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({ ...req, db })
})

server.express.use(cookieParser())
server.express.use((req, res, next) => {
  const { token } = req.cookies
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET)
    // put the userId onto the req for future requests to access
    req.userId = userId
  }
  next()
})

server.express.use(async (req, res, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) return next()
  const user = await db.query.user(
    { where: { id: req.userId } },
    '{ id, permissions, email, name }'
  )
  req.user = user
  next()
})

server.express.get('/link', (req, res) => {
  res.send(`Add bot here: <a href="${addUrl}">${addUrl}</a>`)
})

module.exports = server

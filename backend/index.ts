import { PubSub, GraphQLServer } from 'graphql-yoga'
import * as mongoose from 'mongoose'

import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'

import { updateWeather } from './weather'

mongoose.connect('mongodb://172.16.0.252/dashboard', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

const pubsub = new PubSub()
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } })
mongoose.connection.once('open', () =>
  server.start(() => console.log('graphQL runs at localhost:4000')),
)

updateWeather()

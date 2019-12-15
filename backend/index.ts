import { Server } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { execute, subscribe } from 'graphql'
import * as GraphHTTP from 'express-graphql'
import * as express from 'express'

import schema from './schema'

import { updateWeather } from './weather'

const app = express()
const { PORT = 3000 } = process.env

app.use(
  '/api/ql',
  GraphHTTP({
    schema: schema,
    graphiql: true,
  }),
)

const server = new Server(app)

SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
  },
  {
    server: server,
    path: '/api/ws',
  },
)

server.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT)
})

updateWeather()




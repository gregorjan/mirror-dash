import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { ApolloClient } from 'apollo-client';

import { Context } from './context'
import * as S from './styled'
import { Date, Weather } from '../widgets'

const WSClient = new SubscriptionClient(`ws://localhost:3000/api/ws`, {
  reconnect: true,
});

const apolloClient = new ApolloClient({
  link: WSClient as any,
  cache: new InMemoryCache()
});

const viewport = [window.innerWidth, window.innerHeight]
const grid = [16, 9]
const size = viewport.map((d, i) => d / grid[i])

const App: React.FC = () => {
  const [canMove, setCanMove] = React.useState(false)
  return (
    <Context.Provider value={{ viewport, grid, size, canMove }}>
      <ApolloProvider client={apolloClient}>
        <S.App>
          <S.GlobalStyle />
          <Date />
          <Weather />
        </S.App>
      </ApolloProvider>
    </Context.Provider>
  )
}

export default App

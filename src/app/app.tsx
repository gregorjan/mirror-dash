import * as React from 'react'

import { Context } from './context'

import * as S from './styled'

import { Date } from '../widgets'

const viewport = [window.innerWidth, window.innerHeight]
const grid = [16, 9]
const size = viewport.map((d, i) => d / grid[i])

const App: React.FC = () => {
  return (
    <Context.Provider value={{ viewport, grid, size }}>
      <S.App>
        <S.GlobalStyle />
        <Date />
      </S.App>
    </Context.Provider>
  )
}

export default App

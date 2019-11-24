import { useSpring } from 'react-spring'

import { Context } from './context'

import { Date } from '../widgets'
import { Planetoid } from '../atoms'
import { calcCursorPosition, Planetoids } from '../utils'

import * as S from './styled'

const rounder = (num) => Math.floor(num / 100)

const viewport = [window.innerWidth, window.innerHeight]

const grid = viewport.map((d) => rounder(d))

const App = () => {
  const [sprops, set] = useSpring(() => ({
    pos: [0, 0],
    config: { mass: 120, tension: 500, friction: 140 },
  }))
  return (
    <Context.Provider value={{ viewport, grid }}>
      <S.App
        grid={grid}
        onMouseMove={({ clientX: x, clientY: y }) =>
          set({ pos: calcCursorPosition(x, y) })
        }
      >
        <S.GlobalStyle />
        <Date />
        {Planetoids.map(({ translate, key, size, color }) => (
          <Planetoid
            key={key}
            style={{ transform: sprops.pos.interpolate(translate) }}
            color={color}
            size={size}
          />
        ))}
      </S.App>
    </Context.Provider>
  )
}

export default App

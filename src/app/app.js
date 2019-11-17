import { useSpring } from 'react-spring'

import * as S from './styled'

import { Date } from '../widgets'
import { Planetoid } from '../atoms'
import { calcCursorPosition, Planetoids } from '../utils'

const App = () => {
  const [sprops, set] = useSpring(() => ({
    pos: [0, 0],
    config: { mass: 120, tension: 500, friction: 140 },
  }))
  return (
    <S.App
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
  )
}

export default App

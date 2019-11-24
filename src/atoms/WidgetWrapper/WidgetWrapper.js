import { useState, useContext } from 'preact/hooks'
import { useSpring, interpolate } from 'react-spring'
import { add } from 'vec-la'
import { useDrag } from 'react-use-gesture'

import { Context } from '../../app/context'

import * as S from './styled'

export const WidgetWrapper = ({ children }) => {
  const [location, setLocation] = useState([11, 1])
  const { grid, viewport } = useContext(Context)
  const [{ color, pos, scale }, set] = useSpring(() => ({
    color: '#000',
    scale: 1,
    pos: [0, 0],
    immediate: false,
    config: { mass: 5, tension: 500, friction: 100 },
  }))

  const round = (newPos) =>
    newPos.map((d, i) => {
      const size = viewport[i] / grid[i]
      return (d / size).toFixed(0) * size
    })

  const bind = useDrag(({ down, movement, xy, memo = pos.getValue() }) => {
    if (down) {
      set({
        color: 'gray',
        scale: 1.1,
        pos: add(movement, memo),
        immediate: false,
      })
    } else {
      set({
        color: '#000',
        scale: 1,
        pos: [0, 0],
        immediate: true,
      })
      const newGridLoc = xy.map((d, i) =>
        Math.round((d / viewport[i]) * grid[i]),
      )

      setLocation(newGridLoc)
    }
    return memo
  })

  return (
    <S.Wrapper
      location={location}
      dimensions={[2, 2]}
      {...bind()}
      style={{
        borderColor: interpolate([color], (color) => color),
        transform: interpolate(
          [pos, scale],
          ([x, y], scale) => `translate3d(${x}px,${y}px,0) scale(${scale})`,
        ),
      }}
    >
      {children}
    </S.Wrapper>
  )
}

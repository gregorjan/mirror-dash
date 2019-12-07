import * as React from 'react'
import { useSpring, interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import { Context } from '../../app/context'

import * as S from './styled'

interface Props {
  children: React.ReactNode
}

export const WidgetWrapper: React.FC<Props> = ({ children }) => {
  const { size, viewport, grid } = React.useContext(Context)
  const [location] = React.useState([13, 0])
  const [{ position }, setSpringProps] = useSpring(() => ({
    position: [location[0] * size[0], location[1] * size[1]],
  }))

  const [dimensions] = React.useState([3, 2])
  const pixelDimensions = size.map((s, i) => s * dimensions[i])

  const bind = useDrag(({ down, movement, memo = position.getValue() }) => {
    if (down && movement) {
      setSpringProps({
        position: [movement[0] + memo[0], movement[1] + memo[1]],
        immediate: true,
      })
    } else {
      setSpringProps({
        position: [
          size[0] *
            Math.round(((movement[0] + memo[0]) / viewport[0]) * grid[0]),
          size[1] *
            Math.round(((movement[1] + memo[1]) / viewport[1]) * grid[1]),
        ],
        immediate: false,
      })
    }

    return memo
  })
  console.log(position.getValue())
  return (
    <S.Wrapper
      {...bind()}
      style={{
        transform: interpolate(
          [position],
          ([x, y]) => `translate3d(${x}px,${y}px,0)`,
        ),
      }}
      dimensions={pixelDimensions}
    >
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

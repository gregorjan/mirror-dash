import * as React from 'react'
import { useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import { calcPosition } from '../../utils'
import { Context } from '../../app/context'

import * as S from './styled'

interface Props {
  children: React.ReactNode
  location: number[]
  dimensions: number[]
}

export const WidgetWrapper: React.FC<Props> = ({
  children,
  location,
  dimensions,
}) => {
  const { size, viewport, grid, canMove } = React.useContext(Context)
  const [{ position }, setSpringProps] = useSpring(() => ({
    position: [location[0] * size[0], location[1] * size[1]],
  }))

  const pixelDimensions = size.map((s, i) => s * dimensions[i])

  const bind = useDrag(({ down, movement, memo = position.getValue() }) => {
    if (canMove) {
      if (down && movement) {
        setSpringProps({
          position: [movement[0] + memo[0], movement[1] + memo[1]],
          immediate: true,
        })
      } else {
        setSpringProps({
          position: calcPosition(
            movement,
            memo,
            viewport,
            grid,
            size,
            dimensions,
          ),
          immediate: false,
        })
      }
      return memo
    }
  })

  return (
    <S.Wrapper
      {...bind()}
      style={{
        transform: position.to((x, y) => `translate3d(${x}px,${y}px,0)`),
      }}
      canMove={canMove}
      dimensions={pixelDimensions}
    >
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

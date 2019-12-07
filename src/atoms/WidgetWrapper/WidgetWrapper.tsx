import * as React from 'react'
import { useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'

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
  const { size, viewport, grid } = React.useContext(Context)
  const [{ position }, setSpringProps] = useSpring(() => ({
    position: [location[0] * size[0], location[1] * size[1]],
  }))

  const pixelDimensions = size.map((s, i) => s * dimensions[i])

  const calcPosition = (movement: number[], memo: number[]): number[] => {
    return size.map((s, i) => {
      const pos =
        s * Math.round(((movement[i] + memo[i]) / viewport[i]) * grid[i])

      if (pos < 0) {
        return 0
      }
      if (pos > viewport[i]) {
        return viewport[1]
      }
      return pos
    })
  }

  const bind = useDrag(({ down, movement, memo = position.getValue() }) => {
    if (down && movement) {
      setSpringProps({
        position: [movement[0] + memo[0], movement[1] + memo[1]],
        immediate: true,
      })
    } else {
      setSpringProps({
        position: calcPosition(movement, memo),
        immediate: false,
      })
    }

    return memo
  })

  return (
    <S.Wrapper
      {...bind()}
      style={{
        transform: position.to((x, y) => `translate3d(${x}px,${y}px,0)`),
      }}
      dimensions={pixelDimensions}
    >
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

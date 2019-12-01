import * as React from 'react'
import { useSpring, animated } from 'react-spring'

import { Context } from '../../app/context'

import * as S from './styled'

interface Props {
  children: React.ReactNode
}

export const WidgetWrapper: React.FC = ({ children }: Props) => {
  const { size } = React.useContext(Context)
  const [location] = React.useState([11, 1])
  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 1, tension: 1000, friction: 200, precision: 0.01 },
  }))

  const [dimensions] = React.useState([2, 2])
  const pixelDimensions = size.map((s, i) => s * dimensions[i])

  return (
    <S.Wrapper location={location} pixelDimensions={pixelDimensions}>
      <animated.div style={animatedProps}>
        <S.Content>{children}</S.Content>
      </animated.div>
    </S.Wrapper>
  )
}

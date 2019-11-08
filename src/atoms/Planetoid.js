import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

export const Planetoid = styled(animated.div)`
  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
    `}
  border-radius: 50%;
  background-color: ${({ color }) => color && color};
  left: 50%;
  top: 50%;
  position: absolute;
  opacity: 0.6;
`

import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

export const Wrapper = styled.div`
  grid-column: 2 / 11;
  grid-row: 2 / 6;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid coral;
  opacity: 0.6;
`

export const Image = styled(animated.div)`
  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
    `}
  border-radius: 50%;
  background-color: ${({ color }) => color && color};

  position: absolute;
`

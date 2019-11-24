import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

export const Wrapper = styled(animated.section)`
  border-radius: 10px;
  border: 4px solid;
  user-select: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${({ location, dimensions }) =>
    css`
      grid-column: ${location[0]} / ${location[0] + dimensions[0]}
      grid-row: ${location[1]} / ${location[1] + dimensions[1]}
    `}
  place-self: stretch;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

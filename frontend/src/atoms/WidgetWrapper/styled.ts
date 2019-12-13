import styled from 'styled-components'
import { animated } from 'react-spring'

interface Styles {
  dimensions: number[]
  canMove: boolean
}

export const Wrapper = styled(animated.section)<Styles>`
  position: absolute;
  height: ${({ dimensions }): number => dimensions[1]}px;
  width: ${({ dimensions }): number => dimensions[0]}px;
  user-select: none;
  padding: 20px;
  ${({ canMove }): string =>
    canMove
      ? `
          cursor: grab;
          &:active {
            cursor: grabbing;
          }
        `
      : ''};
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

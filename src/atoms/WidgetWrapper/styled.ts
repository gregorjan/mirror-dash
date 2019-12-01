import styled from 'styled-components'

interface Styles {
  location: number[]
  pixelDimensions: number[]
}

export const Wrapper = styled.section<Styles>`
  width: ${({ pixelDimensions }): number => pixelDimensions[0]}px;
  height: ${({ pixelDimensions }): number => pixelDimensions[1]}px;
  user-select: none;
  padding: 20px;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

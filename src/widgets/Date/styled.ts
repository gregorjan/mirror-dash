import styled from 'styled-components'

export const Wrapper = styled.section`
  user-select: none;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  grid-column: 11 / 13;
  grid-row: 1 / 3;
  place-self: stretch;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

export const Time = styled.div`
  font-size: 2.4rem;
`

export const Date = styled.div`
  font-size: 1.6rem;
`

import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: sans-serif;
        color: white;
        background-color: black;
    }
`

export const App = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(${(props) => props.grid[0]}, 1fr);
  grid-template-rows: repeat(${(props) => props.grid[1]}, 1fr);
  grid-gap: 12px;
  height: 100vh;
`

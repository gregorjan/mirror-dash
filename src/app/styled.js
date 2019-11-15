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
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 12px;
  height: 100vh;
`

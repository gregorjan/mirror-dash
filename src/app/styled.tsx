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
  height: 100vh;
`

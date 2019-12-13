import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: sans-serif;
        color: white;
        background-color: black;
        * {
          box-sizing: border-box;
        }
    }
`

export const App = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
`

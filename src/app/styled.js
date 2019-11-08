import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: sans-serif;
        
        color: white;
        background-color: black;

        @media (prefers-color-scheme: dark) {
          color: black;
          background-color: white;
        }
    }
`

export const App = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
`

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
  }

  body, textarea, button, input {
    font-family: 'Nunito', sans-serif;
    line-height: 160%;
    font-weight: 400;
    font-size: 1rem;
  }
`

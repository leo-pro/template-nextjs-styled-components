import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${props =>
      props.theme.title === 'dark'
        ? props.theme.colors.background
        : props.theme.colors.white};
    color: ${props =>
      props.theme.title === 'dark'
        ? props.theme.colors.white
        : props.theme.colors.black};
    font-size: 1rem;
    font-family: ${props => props.theme.typography.fontFamily}, sans-serif;
    transition: background 0.5s;
  }

  a{
    text-decoration: none;
    line-height: 54px;
    font-weight: 600;
    color: ${props =>
      props.theme.title === 'dark'
        ? props.theme.colors.white
        : props.theme.colors.black};
  }
`

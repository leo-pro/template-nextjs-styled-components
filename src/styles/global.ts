import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 1rem "Lato", "Helvetica Neue", Arial, Helvetica, sans-serif;
  }

  a{
    text-decoration: none;
    line-height: 54px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary}
  }
`;
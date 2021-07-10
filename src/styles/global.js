import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.palette.background.paper};
    font-size: 14px;
    color:  ${(props) => props.theme.palette.text.third};
    font-family: sans-serif;
  }
`;
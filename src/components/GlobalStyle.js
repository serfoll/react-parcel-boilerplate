import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';
import Colors from './Colors';
export default createGlobalStyle`
  ${normalize}

  *,
  *:before,
  *:after{
    box-sizing: borde-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
  }

  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    background-color: hsl(216, 12%, 8%);
    color: hsl(0, 0%, 100%);
  }
  p{
    font-size: 15px;
    color: ${Colors['light-grey']}
  }
`;

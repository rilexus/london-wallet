import { createGlobalStyle } from 'styled-components';
import { font } from '../font';
import { primaryContrastTextCSS } from '../colors';
import { bgPrimary } from '../background-color';

const GlobalStyle = createGlobalStyle`
  html{
    font-family: ${font('family.sans')};
  };
  html, body {
    ${bgPrimary};
  };
  p, h1, h2, h3, h4, h5, h6 {
    ${primaryContrastTextCSS};
  }
`;
export { GlobalStyle };

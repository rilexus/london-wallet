import { FC } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme as defaultTheme } from '../theme';
import { GlobalStyle } from './GlobalCSS';
import { NormalizeCSS } from './NormalizeCSS';

const ThemeProvider: FC<{ theme?: any /* TODO: type this */ }> = ({
  theme,
  children,
}) => {
  //
  return (
    <StyledThemeProvider theme={defaultTheme || theme}>
      <NormalizeCSS />
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export { ThemeProvider };

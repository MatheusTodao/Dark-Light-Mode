import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeContext } from './contexts/ThemeContext';
import ThemeProvider from './contexts/ThemeContext';

import Main from './Main';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={theme}>
              <GlobalStyle />
              <Main />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </>
  );
}

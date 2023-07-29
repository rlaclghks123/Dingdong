import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import theme from './styles/theme.ts';
import GlobalStyle from './styles/GlobalStyle.tsx';
import { ThemeProvider } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
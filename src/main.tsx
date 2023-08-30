import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App.tsx';
import { ThemeProvider } from '@emotion/react';

import theme from './styles/theme.ts';
import GlobalStyle from './styles/GlobalStyle.tsx';
import { worker } from './mocks/browser.ts';
const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

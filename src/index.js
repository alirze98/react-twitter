import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theme from './components/theme';



ReactDOM.render(
  <Suspense fallback={<div></div>}>
  <ThemeProvider theme={theme} >
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  </ThemeProvider>
  </Suspense>,
  document.getElementById('root')
);


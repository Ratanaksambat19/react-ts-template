import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { Component } from 'react';
import Home from './pages/Home';
import theme from './theme';

class App extends Component {
  render(): React.ReactNode {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;

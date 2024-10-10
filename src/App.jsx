import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import GlobalStyle from './globalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
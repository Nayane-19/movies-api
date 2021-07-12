import React from 'react';
import { SettingsProvider } from './context/SettingsContext';
import MyThemeProvider from './components/ThemeProvider/MyThemeProvider'; 
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
 

  return (
      <SettingsProvider>
      <MyThemeProvider>           
      <div className="App">
        <GlobalStyle />
        <Header  />
        <Home />
      </div>
      </MyThemeProvider>
    </SettingsProvider>
  );
}

export default App;
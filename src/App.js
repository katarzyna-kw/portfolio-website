import React, { useState } from 'react'
import Header from './components/header/header.component.jsx';
import Body from './components/body/body.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import './App.css';

function App() {

  const [theme, setTheme] = useState('pastel');

  return (
    <div className={`App ${theme}`}
    data-testid="App" 
    style={
      {
      background: `
        linear-gradient(
          95deg, 
          var(--theme-page-background-left) 60%,
          var(--theme-page-background-right) 60%
        )` 
      }
    }
  >
      <Header theme={theme} setTheme={setTheme}/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;

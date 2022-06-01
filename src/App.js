import React, { useState, useEffect } from "react";
import Header from "./components/header/header.component.jsx";
import Footer from "./components/footer/footer.component.jsx";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import PortfolioPage from "./pages/PortfolioPage.js";
import SkillsPage from "./pages/SkillsPage.js";
import ContactPage from "./pages/ContactPage.js";

function App() {

  const [theme, setTheme] = useState('pastel');
  // const [theme, setTheme] = useState((currentTheme) => currentTheme === 'neon' ? 'neon' : 'pastel')

  // useEffect(() => {
  //   console.log("theme: ", theme)
  //   let currentTheme = localStorage.getItem("theme")
  //   if (currentTheme == 'neon') {
  //     setTheme('neon')
  //   }
  //   console.log("current theme: ", currentTheme)
  // }, [theme])

  return (
      <main
        className={`App ${theme}`}
        data-testid="App"
        style={{
          background: `
          linear-gradient(
            95deg, 
            var(--theme-page-background-left) 60%,
            var(--theme-page-background-right) 60%
          )`,
        }}
      >
        <HashRouter>
          <div className="site-content">
            <Header theme={theme} setTheme={setTheme} />
              <Routes>
                <Route exact path="/" element={ <HomePage />} />
                <Route exact path="/portfolio" element={ <PortfolioPage />} />
                <Route exact path="/skills" element={ <SkillsPage />} />
                <Route exact path="/contact" element={ <ContactPage />} />
              </Routes>
          </div>
        </HashRouter>
        <Footer />
      </main>
  );
}

export default App;

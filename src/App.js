import React, { useState, useEffect } from "react";
import Header from "./components/header/header.component.jsx";
import Footer from "./components/footer/footer.component.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import PortfolioPage from "./pages/PortfolioPage.js";
import SkillsPage from "./pages/SkillsPage.js";
import ContactPage from "./pages/ContactPage.js";

function App() {

  const [theme, setTheme] = useState('pastel');

  useEffect(() => {
    console.log("theme: ", theme)
    let currentTheme = localStorage.getItem("theme")
    if (currentTheme !== undefined) {
      setTheme(currentTheme)
    }
    console.log("current theme: ", currentTheme)
  }, [])

  return (
      <main
      // className={`App ${theme}`}

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
        <BrowserRouter>
          <div className="site-content">
            <Header theme={theme} setTheme={setTheme} />
              <Routes>
                <Route exact path="/" element={ <HomePage />} />
                <Route exact path="/portfolio" element={ <PortfolioPage />} />
                <Route exact path="/skills" element={ <SkillsPage />} />
                <Route exact path="/contact" element={ <ContactPage />} />
              </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </main>
  );
}

export default App;

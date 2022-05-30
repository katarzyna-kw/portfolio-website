import './styles.css'
import React from "react";
import About from './About.component/About';
import Portfolio from './Portfolio/index';
import Skills from './Skills.component/Skills';
import Contact from './Contact.component/Contact';
import HomePage from '../../pages/HomePage';
import PortfolioPage from '../../pages/PortfolioPage';
import SkillsPage from '../../pages/SkillsPage';
import ContactPage from '../../pages/ContactPage';


function Body() {
  return (
    <div className="body" data-testid="Body">
      <About/>  
      {/* <Portfolio/>
      <Skills />    
      <Contact /> */}
  </div>
  );
}

export default Body;
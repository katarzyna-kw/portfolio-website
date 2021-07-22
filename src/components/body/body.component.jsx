import './styles.css'
import React from "react";
import About from './About';
import Portfolio from './Portfolio';
// import Skills from './Skills';
import Contact from './Contact';


function Body() {
  return (
    <div className="body" data-testid="Body">
      <About/>  
      <Portfolio/>
      {/* <Skills />     */}
      <Contact />
  </div>
  );
}

export default Body;
import './styles.css'
import React, { Fragment } from "react";
import About from './About';
import Portfolio from './Portfolio';
import Slider from './Slider';
import Contact from './Contact';


function Body() {
  return (
    <div className="body" data-testid="Body">
      <About />  
      <Portfolio />    
      <Contact />
  </div>
  );
}

export default Body;
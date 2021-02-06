import './styles.css'
import React, { Fragment } from "react";
import About from './About';
import Slider from './Slider';


function Body() {
  return (
    <div className="body" data-testid="Body">
      <About />      
      <div id="portfolio">
      <h2>Portfolio</h2>
        <div className="portfolio-container">
        <Slider />

          <a href="https://github.com/katarzyna-kw/election-map-project" target="_blank" rel="noopener noreferrer"><img className="portfolio-images" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-election-map.png?raw=true" alt="election map website screencapture" /></a>
          <p>Election map coded with Javascript given html and css code // <a href="https://skillcrush.com/" target="_blank" rel="noopener noreferrer">Skillcrush project</a></p>
          <a href="https://github.com/katarzyna-kw/quote-generator" target="_blank" rel="noopener noreferrer"><img className="portfolio-images" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-quote-generator.png?raw=true" alt="quote generator screencapture" /></a>
          <p>Responsive quote generator coded with vanilla Javascript</p>
          <a href="https://github.com/katarzyna-kw/lolcat" target="_blank" rel="noopener noreferrer"><img className="portfolio-images" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-cat-clock.png?raw=true" alt="cat clock screencapture" /></a>
          <p>Clock coded with Javascript and styled given html and template css code // <a href="https://skillcrush.com/" target="_blank" rel="noopener noreferrer">Skillcrush project</a></p>
          <a href="https://github.com/katarzyna-kw/fcc-challenge-2" target="_blank" rel="noopener noreferrer"><img className="portfolio-images" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-survey.png?raw=true" alt="survey form screencapture" /></a>
          <p>Responsive mock survey form coded with HTML and CSS // <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freecodecamp project</a></p>
          <a href="https://github.com/katarzyna-kw/fcc-challenge-3" target="_blank" rel="noopener noreferrer"><img className="portfolio-images" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-school-website.png?raw=true" alt="mock school website screencapture" /></a>
          <p>Responsive mock school website for Polish school coded with HTML and CSS // <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freecodecamp project</a></p>
          <a href="https://github.com/katarzyna-kw/fcc-challenge-4" target="blank"><img className="portfolio-images" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-technical-documentation.png?raw=true" alt="mock technical documentation website screencapture" /></a>
          <p>Responsive mock technical documentation website coded with HTML, CSS, and Javascript // <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freecodecamp project</a></p>
          <a href="https://github.com/katarzyna-kw/stretch" target="_blank" rel="noopener noreferrer"><img className="portfolio-images" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/portfolio-stretching-routine.png?raw=true" alt="digital stretching routine website screencapture" /></a>
          <p>Stretching routine website coded with HTML and CSS</p>
        </div>
      </div>

      <div id="contact">
      <h2>Contact Me</h2>
        <ul>
          <li class="icons">
            <a href="mailto: katarzyna.koch@gmail.com" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-envelope"></i>
            </a>
          </li>
          <li class="icons">
            <a href="https://github.com/katarzyna-kw/" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-github"></i>
            </a>
          </li>
          <li class="icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square"></i>
          </a>
          </li>
        </ul>
      </div>
  </div>
  );
}

export default Body;
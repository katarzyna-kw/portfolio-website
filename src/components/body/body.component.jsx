import './styles.css'

function Body() {
  return (
    <div className="body" data-testid="Body">
     <div id="about">
       <h2>About</h2>
        {/* <img className="img" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle.png?raw=true" alt="image of Katarzyna" /> */}
        <img className="img" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle-bw.png?raw=true" alt="Katarzyna Wegrzynowicz" />

        My name is Katarzyna Wegrzynowicz. I am a front-end developer based in Chicago with a background in education and expertise in active listening and communication. My coding skills include React JS, Javascript, HTML, and CSS. I love colors, animals, and Dionne Warwick.
      </div>
      <div id="portfolio">
      <h2>Portfolio</h2>
        <div className="portfolio-container">
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
          <li>
            <a href="mailto: katarzyna.koch@gmail.com" target="_blank" rel="noopener noreferrer">
              <img className="icons" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/icon-envelope.png?raw=true" alt="email envelope icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/katarzyna-kw/" target="_blank" rel="noopener noreferrer">
              <img className="icons" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/icon-github.png?raw=true" alt="github icon" />
            </a>
          </li>
          <li>
            <img className="icons" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/icon-linkedin.png?raw=true" alt="linkedin icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Body;
import './styles.css'
import BootstrapCarousel from './body.carousel.component';


function Body() {
  return (
    <div className="body" data-testid="Body">
     <div id="about">
       <h2>About</h2>
        {/* <img className="img" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle.png?raw=true" alt="image of Katarzyna" /> */}

        <img className="img" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle-bw.png?raw=true" alt="Katarzyna Wegrzynowicz" onMouseOver={e => (e.currentTarget.src = "https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle.png?raw=true")} onMouseOut={e => (e.currentTarget.src = "https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle-bw.png?raw=true")}/>

        My name is Katarzyna Wegrzynowicz. I am a front-end developer based in Chicago with a background in education and expertise in active listening and communication. My coding skills include React JS, Javascript, HTML, and CSS. I love colors, animals, and Dionne Warwick.
      </div>
      <div id="portfolio">
      <h2>Portfolio</h2>
        <div className="portfolio-container">
        <BootstrapCarousel></BootstrapCarousel>  
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
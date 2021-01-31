import './styles.css'

function Body() {
  return (
    <div class="body">
     <div id="about">
       <h2>About</h2>
        {/* <img class="img" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle.png?raw=true" alt="image of Katarzyna" /> */}
        <img class="img" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle-bw.png?raw=true" alt="image of Katarzyna" />

        My name is Katarzyna Wegrzynowicz. I am a front-end developer based in Chicago with expertise in communication skills and background in education. My skills include Javascript React, Javascript, HTML, and CSS. I love colors, animals, and Dionne Warwick.
      </div>
      <div id="portfolio">
        <h2>Portfolio</h2>
      </div>


      <div id="contact">
        <h2>Contact Me</h2>
        <div class="icons-container">
        <ul>
          <li>
            <a href="mailto: katarzyna.koch@gmail.com" target="_blank">
              <img class="icons" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/icon-envelope.png?raw=true" alt="email envelope icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/katarzyna-kw/" target="_blank">
              <img class="icons" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/icon-github.png?raw=true" alt="github icon" />
            </a>
          </li>
          <li>
            <img class="icons" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/icon-linkedin.png?raw=true" alt="linkedin icon" />
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Body;
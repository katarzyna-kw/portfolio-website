import './styles.css'
import '../../App.css'

function About() {
  return (
        <div id="about">
            <h2>About</h2>
            <div className="about-content">
              <img className="img" src={"https://github.com/katarzyna-kw/portfolio-website/blob/main/public/img/headshot-circle-bw.png?raw=true"} alt="Katarzyna Wegrzynowicz" onMouseOver={e => (e.currentTarget.src = "https://github.com/katarzyna-kw/portfolio-website/blob/main/public/img/headshot-circle.png?raw=true")} onMouseOut={e => (e.currentTarget.src = "https://github.com/katarzyna-kw/portfolio-website/blob/main/public/img/headshot-circle-bw.png?raw=true")}/>
              <p>
                My name is Katarzyna Wegrzynowicz. I am a highly-organized and detail-oriented front-end developer based in Round Lake Beach, IL. I love deconstructing problems to develop solutions and have a strong background in education.
              </p>
              <p>
                I get excited about tackling new challenges, lifelong learning, and making things beautiful -- all of which led me down the path of front-end development!
              </p>
              <p>My <a href="#skills">programming skills</a> include Javascript, React, CSS, and HTML. I love colors, animals, and Dionne Warwick.
              </p>
            </div>
            {/* <div class="about-skills">
              <h2>skills</h2>
              <ul>
                <li>Javascript</li>
                <li>React JS</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div> */}
          </div>
  );
}

export default About;
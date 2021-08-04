import './styles.css'
import '../../App.css'

function About() {
  return (
        <div id="about">
            <h2>About</h2>
            <div className="about-content">
              <img className="img" src={"https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/ocean.png"} alt="Katarzyna Wegrzynowicz" onMouseOver={e => (e.currentTarget.src = "https://github.com/katarzyna-kw/portfolio-website/blob/main/public/img/headshot-circle.png?raw=true")} onMouseOut={e => (e.currentTarget.src = "https://github.com/katarzyna-kw/portfolio-website/blob/main/public/img/headshot-circle-bw.png?raw=true")}/>
              <p>
                My name is Katarzyna Wegrzynowicz. I am a front-end developer based in Chicago with a background in education and expertise in active listening and communication. My programming skills include Javascript, React JS, CSS, and HTML. I also have some back-end experience using PostgreSQL. I love colors, animals, solving problems, and Dionne Warwick.
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
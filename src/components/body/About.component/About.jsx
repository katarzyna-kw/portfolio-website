import Headshot from './Headshot'
import AboutText from './AboutText'
import '../styles.css'
import '../../../App.css'

function About() {
  return (
        <div id="about">
            <h2>About</h2>
            <div className="about-content">
              <Headshot />
              <AboutText />
            </div>
          </div>
  );
}

export default About;
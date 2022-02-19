import Headshot from "./Headshot";
import AboutText from "./AboutText";
import "./styles.css";

function About() {
  return (
    <div id="about">
      <h2 className="body__header">About</h2>
      <div className="about__content">
        <Headshot />
        <AboutText />
      </div>
    </div>
  );
}

export default About;
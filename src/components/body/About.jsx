import './styles.css'
import '../../App.css'

function About() {
  return (
        <div id="about">
            <h2>About</h2>
            <img className="img" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle-bw.png?raw=true" alt="Katarzyna Wegrzynowicz" onMouseOver={e => (e.currentTarget.src = "https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle.png?raw=true")} onMouseOut={e => (e.currentTarget.src = "https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle-bw.png?raw=true")}/>

            My name is Katarzyna Wegrzynowicz. I am a front-end developer based in Chicago with a background in education and expertise in active listening and communication. My programming skills include Javascript, React JS, CSS, and HTML5. I also have some back-end experience using PostgreSQL. I love colors, animals, solving problems, and Dionne Warwick.
        </div>
  );
}

export default About;
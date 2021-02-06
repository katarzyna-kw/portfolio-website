import './styles.css'

function About() {
  return (
        <div id="about">
            <h2>About</h2>
            <img className="img" src="https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle-bw.png?raw=true" alt="Katarzyna Wegrzynowicz" onMouseOver={e => (e.currentTarget.src = "https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle.png?raw=true")} onMouseOut={e => (e.currentTarget.src = "https://github.com/katarzyna-kw/portfolio-website/blob/main/img/headshot-circle-bw.png?raw=true")}/>

            My name is Katarzyna Wegrzynowicz. I am a front-end developer based in Chicago with a background in education and expertise in active listening and communication. My coding skills include React JS, Javascript, HTML, and CSS. I love colors, animals, and Dionne Warwick.
        </div>
  );
}

export default About;
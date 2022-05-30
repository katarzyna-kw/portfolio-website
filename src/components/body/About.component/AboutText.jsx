import { Link } from 'react-router-dom';

function AboutText() {
  return (
    <div>
      <p className="about__content--text">
        My name is Katarzyna (or Kat) Wegrzynowicz. I am a highly organized and
        detail-oriented full-stack developer in the Greater Chicago Area. I
        love deconstructing problems to develop solutions and have a strong
        background in education. I get excited about tackling new challenges,
        lifelong learning, and making things beautiful.
      </p>
      <p className="about__content--text">
        My <Link to="/skills" className='about__content--link'>programming skills</Link> include Javascript, React, Python, Django, HTML/CSS, and PostgreSQL. I am bilingual and speak both English and Polish fluently. I love
        colors, animals, and Dionne Warwick.
      </p>
    </div>
  );
}

export default AboutText;

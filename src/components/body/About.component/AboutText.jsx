import React from "react";

function AboutText() {
  return (
    <div>
      <p className="about__content--text">
        My name is Katarzyna Wegrzynowicz. I am a highly-organized and
        detail-oriented full-stack developer based in the greater Chicago area, Illinois. I
        love deconstructing problems to develop solutions and have a strong
        background in education. I get excited about tackling new challenges,
        lifelong learning, and making things beautiful.
      </p>
      <p className="about__content--text">
        My{" "}
        <a className="about__content--link" href="#skills">
          programming skills
        </a>{" "}
        include Javascript, React, Python, Django, HTML/CSS, and PostgreSQL. I love
        colors, animals, and Dionne Warwick.
      </p>
    </div>
  );
}

export default AboutText;

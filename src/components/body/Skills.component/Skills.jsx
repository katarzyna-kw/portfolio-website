import React from 'react'
import skillsData from "./skillsData"
import "./styles.css";

function Skills() {

  return (
    <div id="skills">
      <h2 className="body__header">Skills</h2>
      <div className="skills__content">
        {skillsData.map((item, index) => (
          <div key={index} className="skills__content--col">
            <ul className="skills__content--ul">
              {item.skills.map((skill, i) => (
                <li className="skills__content--li" key={i}>
                 <span className='skills__icon'>{skill.icon}</span>
                 {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

import skillsData from "./skillsData";
import "./styles.css";

function Skills() {
  return (
    <div id="skills">
      <h2 className="body__header">Skills</h2>
      <div className="skills__content">
        {skillsData.map((item, index) => (
          <div key={index} className="skills__content--col">
            <h5 className="skills__content--h5">{item.scope}</h5>
            <ul className="skills__content--ul">
              {item.skills.map((skill) => (
                <li className="skills__content--li">
                  <span>{skill}</span>
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

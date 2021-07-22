import './styles.css'
import '../../App.css'

function Skills() {
  return (
        <div id="skills">
            <h2>Skills</h2>
            <div className="skills-content">
                <div className="skills-content-col">
                    <h5>Proficient</h5>
                    <ul>
                        <li>JavaScript</li>
                        <li>React JS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>Photoshop</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
                <div className="skills-content-col">
                    <h5>Competent</h5>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>Jasmine testing</li>
                    </ul>
                </div>
                <div className="skills-content-col">
                    <h5>Fluent Languages</h5>
                    <ul>
                        <li>English</li>
                        <li>Polish</li>
                    </ul>
                </div>
            </div>
          </div>
  );
}

export default Skills;
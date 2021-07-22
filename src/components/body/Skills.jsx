import './styles.css'
import '../../App.css'

function Skills() {
  return (
        <div id="skills">
            <h2>Skills</h2>
            <div className="skills-content">
                <div className="skills-content-col1">
                    <h5>Proficient</h5>
                    <ul>
                        <li><span>JavaScript</span></li>
                        <li><span>React JS</span></li>
                        <li><span>HTML</span></li>
                        <li><span>CSS</span></li>
                        <li><span>Git</span></li>
                        <li><span>Photoshop</span></li>
                    </ul>
                </div>
                <div className="skills-content-col2">
                    <h5>Competent</h5>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>Jasmine testing</li>
                    </ul>
                </div>
                <div className="skills-content-col3">
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
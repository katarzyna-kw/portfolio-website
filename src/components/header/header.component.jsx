import React, {useState} from 'react';
import { Switch, FormControlLabel, FormGroup } from '@material-ui/core'
import './styles.css';

function Header({setTheme}) {

  const [checked, setChecked] = useState(0);

  const handleToggle = (event) => {
    setChecked(event.target.checked)
    };

  const onModeToggle = () => {
    setTheme((theme) => (theme === 'pastel' ? 'neon' : 'pastel'));
  }

  return (
    <div className="header" data-testid="Header">
      <div className="logo-container">
        <div className="logo">Hi, I'm <span>Katarzyna;</span>
        </div>
        <div className="h2">a front-end developer
        </div>
      </div>
      <div id="navbar">
        <ul className="nav">
          <li>
            <a className="nav-link" href="#about">About</a>
          </li>
          <li>
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          <li>
          <FormGroup>
            <FormControlLabel 
              control={<Switch size="small" checked={checked} onChange={handleToggle} onClick={onModeToggle} className="toggleStyle" />}
            />
          </FormGroup>

          </li>
        </ul>
      </div>
    </div>
  
  );
}

export default Header;
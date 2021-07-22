import React, {useState} from 'react';
import { Switch, FormControlLabel, FormGroup, withStyles } from '@material-ui/core'
import './styles.css';
import Box from "@material-ui/core/Box";

function Header({setTheme}) {

  const [checked, setChecked] = useState(false);

  const handleToggle = (event) => {
    setChecked(event.target.checked)
    };

  const onModeToggle = () => {
    setTheme((theme) => (theme === 'pastel' ? 'neon' : 'pastel'));
  }

  const PurpleSwitch = withStyles({
    switchBase: {
      color: '#B8BEDD',
      '&$checked': {
        color: '#e45ada',
      },
      '&$checked + $track': {
        backgroundColor: '#F0E6EF',
      },
    },
    checked: {},
    track: {},
  })(Switch);
  
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
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li>
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          <li>
          <FormGroup>
            <FormControlLabel 
              control={<PurpleSwitch size="small" checked={checked} onChange={handleToggle} onClick={onModeToggle} className="toggleStyle" />}
            />
          </FormGroup>
          </li>
        </ul>
      </div>
    </div>
  
  );
}

export default Header;
import React, { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import {
  Switch,
  FormControlLabel,
  FormGroup,
  withStyles,
} from "@material-ui/core";
import headerData from "./headerData";
import "./styles.css";

function Header({ theme, setTheme }) {
  const [checked, setChecked] = useState(false);

  const handleToggle = (event) => {
    setChecked(event.target.checked);
  };

  const onModeToggle = () => {
    setTheme((theme) => (theme === "pastel" ? "neon" : "pastel"));
    // localStorage.setItem('theme', theme); // save theme selection 
  };

  const PurpleSwitch = withStyles({
    switchBase: {
      color: "#1E2D24",
      "&$checked": {
        color: "#e45ada",
      },
      "&$checked + $track": {
        backgroundColor: "#F0E6EF",
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <header className="header__container" data-testid="Header">
      <div className="header">
        <Link to="/" className="logo-link">
          <div className="header__logo">
            Hi, I'm <span>Katarzyna;</span>
          </div>
          <div className="header__subhead">a full-stack developer</div>
        </Link>
      </div>
      <div id="navbar">
        <ul className="nav__list">
          {headerData.map((item) => (
            <li className="nav__list--items" key={item.title}>
              <NavLink to={`${item.link}`} className="nav__list--links">
                {item.title}
              </NavLink>
            </li>
          ))}
          <li className="nav__list--items">
            <FormGroup>
              <FormControlLabel
                control={
                  <PurpleSwitch
                    size="small"
                    checked={checked}
                    onChange={handleToggle}
                    onClick={onModeToggle}
                    className="toggleStyle"
                  />
                }
              />
            </FormGroup>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

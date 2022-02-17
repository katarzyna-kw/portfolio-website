import React, { useState } from "react";
import {
  Switch,
  FormControlLabel,
  FormGroup,
  withStyles,
} from "@material-ui/core";
import headerData from "./headerData";
import "./styles.css";

function Header({ setTheme }) {
  const [checked, setChecked] = useState(false);

  const handleToggle = (event) => {
    setChecked(event.target.checked);
  };

  const onModeToggle = () => {
    setTheme((theme) => (theme === "pastel" ? "neon" : "pastel"));
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
    <div className="header__container" data-testid="Header">
      <div className="header">
        <div className="header__logo">
          Hi, I'm <span>Katarzyna;</span>
        </div>
        <div className="header__subhead">a front-end developer</div>
      </div>
      <div id="navbar">
        <ul className="nav__list">
          {headerData.map((item) => (
            <li className="nav__list--items" key={item.title}>
              <a className="nav__list--links" href={item.link}>
                {item.title}
              </a>
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
    </div>
  );
}

export default Header;

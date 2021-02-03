import './styles.css';

function Header() {
  return (
    <div className="header">
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
        </ul>
      </div>
    </div>
  
  );
}

export default Header;
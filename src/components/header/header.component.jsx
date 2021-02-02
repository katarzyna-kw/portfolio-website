import './styles.css';

function Header() {
  return (
    <div class="header">
      <div class="logo-container">
        <div class="logo">Hi, I'm <span>Katarzyna;</span>
        </div>
        <div class="h2">a front-end developer
        </div>
      </div>
      <div id="navbar">
        <ul class="nav">
          <li>
            <a class="nav-link" href="#about">About</a>
          </li>
          <li>
            <a class="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  
  );
}

export default Header;
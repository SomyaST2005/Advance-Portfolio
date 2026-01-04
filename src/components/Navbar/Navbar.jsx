import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">Somya.dev</div>

        <ul className="navbar-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#security">Security</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="neon-btn">Resume</button>
      </nav>
    </header>
  );
}

export default Navbar;

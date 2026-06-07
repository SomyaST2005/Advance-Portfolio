import { useState, forwardRef } from 'react';
import './Navbar.css';

const Navbar = forwardRef(function Navbar(props, ref) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar" ref={ref}>
        <a href="#" className="navbar-logo">
          Somya<span>.dev</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#security" onClick={handleLinkClick}>Security</a></li>
            <li><a href="#achievements" onClick={handleLinkClick}>Achievements</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>

          <a
            href="https://drive.google.com/file/d/YOUR_RESUME_ID/view"
            target="_blank"
            rel="noreferrer"
            className="neon-btn navbar-resume"
            onClick={handleLinkClick}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
});

export default Navbar;

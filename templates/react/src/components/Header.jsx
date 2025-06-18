import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <NavLink to="/">React Template</NavLink>
          </div>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
              <li><NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header; 
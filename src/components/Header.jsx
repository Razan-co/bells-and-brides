import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Closes the menu
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header id="mainHeader">
      <div className="head-grid">
        <div className="logo text-center">
          <img src="/asset/logo-BB.png" width="500" height="100" alt="logo" />
          
        </div>
    <div>
      <div className="logo-name">Bells & Brides</div>
      <div className="wed-name">WEDDINGS & EVENTS</div>
     </div> 
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ol className="list-unstyled" id="link">
            <li><Link to="/" onClick={handleLinkClick}><i className="fa-solid fa-house fa-lg"></i></Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>ABOUT</Link></li>
            <li><Link to="/services" onClick={handleLinkClick}>SERVICES</Link></li>
            <li><Link to="/portfolio" onClick={handleLinkClick}>PORTFOLIO</Link></li>
            <li><Link to="/venues" onClick={handleLinkClick}>VENUES</Link></li>
            <li><Link to="/foods" onClick={handleLinkClick}>FOODS</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>CONTACT</Link></li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;

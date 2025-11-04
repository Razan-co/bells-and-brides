import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header id="mainHeader">
      <div className="head-grid">
        {/* ✅ Logo */}
        <div className="logo text-center">
          <img src="/logo-BB.png" width="500" height="100" alt="Bells & Brides Logo" />
        </div>

        <div>
          <div className="logo-name">Bells & Brides</div>
          <div className="wed-name">WEDDINGS & EVENTS</div>
        </div>

        {/* ✅ Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>

        {/* ✅ Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ol className="list-unstyled" id="link">
            <li>
              <Link to="/homepage" onClick={handleLinkClick}>
                <i className="fa-solid fa-house fa-lg"></i>
              </Link>
            </li>
            <li>
              <Link to="/about-bells-n-brides" onClick={handleLinkClick}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/wedding-planning-services-bangalore" onClick={handleLinkClick}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/portfolio-wedding-planners-bangalore" onClick={handleLinkClick}>
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to="/wedding-venues-in-bangalore" onClick={handleLinkClick}>
                VENUES
              </Link>
            </li>
            <li>
              <Link to="/wedding-caterers-bangalore" onClick={handleLinkClick}>
                FOODS
              </Link>
            </li>
            <li>
              <Link to="/contact-bells-n-brides" onClick={handleLinkClick}>
                CONTACT
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;

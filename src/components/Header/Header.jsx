import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Resume from "../Resume/Resume";
import "./Header.css";
import janLogo from "../images/jan-logo.png";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const [logoActive, setLogoActive] = useState(false);

  const toggleLogo = () => {
    setLogoActive(!logoActive);
  };

  return (
    <div>
      {/* Off-Screen Menu */}

      <div 
        className={`off-screen-logo ${logoActive ? "active" : ""}`}>
        <Resume/>
      </div>

      <div className={`off-screen-menu ${menuActive ? "active" : ""}`}>
        <ul className="links">
          <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
          <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>PROJECTS</Link></li>
        </ul>
      </div>

      {/* Hamburger Menu */}


      <nav className="navbar">
        <div className="name-logo-container">
          <div
          className={`logo ${logoActive ? "active" : ""}`}
          onClick={toggleLogo}>
          <img style={{width: '50px', height: '50px'}} src={janLogo} alt="logo" />
        </div>
        <div className="nav-name-icon">
        PORTFOLIO
        </div>
        </div>

        <div className="nav-menu-icon">
          MENU
        </div>

        <div
          className={`ham-menu ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

    </div>
  );
};

export default Header;
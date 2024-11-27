import React, { useState } from "react";
import "./Header.css";
import janLogo from "../images/jan-logo.png";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
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
        janmeriss
      </div>

      <div className={`off-screen-menu ${menuActive ? "active" : ""}`}>
        <ul>
          <li><a href="#home">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </div>

      {/* Hamburger Menu */}


      <nav className="navbar">
        <div
          className={`logo ${logoActive ? "active" : ""}`}
          onClick={toggleLogo}>
          <img style={{width: '50px', height: '50px'}} src={janLogo} alt="logo" />
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
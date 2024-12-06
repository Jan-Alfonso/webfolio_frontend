import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Resume from "../Resume/Resume";
import "./Header.css";
import janLogo from "../images/jan-logo.png";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [logoActive, setLogoActive] = useState(false);

  // Refs to track the menu and logo elements
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const hamMenuRef = useRef(null);
  const logoIconRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive((prev) => {
      if (!prev) setLogoActive(false); // Close logo menu if opening hamburger menu
      return !prev;
    });
  };

  const toggleLogo = () => {
    setLogoActive((prev) => {
      if (!prev) setMenuActive(false); // Close hamburger menu if opening logo menu
      return !prev;
    });
  };

  const closeMenus = () => {
    setMenuActive(false);
    setLogoActive(false);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        logoRef.current &&
        !logoRef.current.contains(event.target) &&
        hamMenuRef.current &&
        !hamMenuRef.current.contains(event.target) &&
        logoIconRef.current &&
        !logoIconRef.current.contains(event.target)
      ) {
        closeMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="nav-container">
      {/* Off-Screen Menu */}
      <div
        className={`off-screen-logo ${logoActive ? "active" : ""}`}
        ref={logoRef}
      >
        <Resume />
      </div>

      <div
        className={`off-screen-menu ${menuActive ? "active" : ""}`}
        ref={menuRef}
      >
        <ul className="links">
          <li>
            <Link to="/" onClick={closeMenus}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/socials" onClick={closeMenus}>
              SOCIALS
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenus}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <nav className="navbar">
        <div className="name-logo-container">
          <div
            className={`logo ${logoActive ? "active" : ""}`}
            onClick={toggleLogo}
            ref={logoIconRef}
          >
            <img
              style={{ width: "50px", height: "50px" }}
              src={janLogo}
              alt="logo"
            />
          </div>
          <div className="nav-name-icon">PORTFOLIO</div>
        </div>

        <div className="nav-menu-icon">MENU</div>

        <div
          className={`ham-menu ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
          ref={hamMenuRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Header;

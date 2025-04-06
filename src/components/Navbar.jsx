import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../assets/portfolio_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#hero">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      <div className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>

      <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

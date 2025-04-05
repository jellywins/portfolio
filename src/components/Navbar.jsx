// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/portfolio_logo.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Jelena Avramovic Logo" />
      </div>
      <ul className="navbar__links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

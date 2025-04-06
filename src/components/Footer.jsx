import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jelena Avramovic</p>
      <div className="footer__icons">
        <a
          href="https://github.com/jellywins"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/jelenavramovic"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
      <a href="#hero" className="footer__back-to-top">
        ↑ Back to top
      </a>
    </footer>
  );
};

export default Footer;

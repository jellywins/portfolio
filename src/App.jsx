import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="logo">
            Jelena.codes
          </a>
          <ul className="nav-links">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <h1>Jelena Avramovic</h1>
        <p>Web Designer & Developer</p>
        <a href="#projects" className="cta-button">
          View My Work
        </a>
      </header>

      <main className="main">
        <section id="projects">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project-card">
              <h3>Project Title</h3>
              <p>Short description of what the project does.</p>
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Figma</li>
            <li>Node.js</li>
            <li>MySQL</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: jelenacodes@gmail.com</p>
          <p>
            <a href="https://github.com/jellywins">GitHub</a> |{" "}
            <a href="https://linkedin.com/in/jelenavramovic">LinkedIn</a>
          </p>
        </section>
      </main>
      {showButton && (
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;

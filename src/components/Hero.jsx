import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.scss";
import tree from "../assets/tree.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__image-wrapper">
          <img src={tree} alt="Cherry blossom tree" className="hero__image" />
        </div>

        <div className="hero__text">
          <h1>Jelena Avramovic</h1>

          <span className="hero__typed">
            <Typewriter
              words={[
                "I am a developer.",
                "I am a problem solver.",
                "I am a strategist.",
                "I am a marketer.",
                "I am curious.",
                "I am learning Russian.",
                "I am always exploring.",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </span>

          <div className="hero__cta-group">
            <a
              href="https://github.com/jellywins"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jelenavramovic"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

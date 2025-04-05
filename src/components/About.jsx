import React from "react";
import "./About.scss";
import bioPhoto from "../assets/bio_photo.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <img
            src={bioPhoto}
            alt="Jelena and her best friend"
            className="about__image"
          />
          <p className="about__caption">My best friend and I</p>
        </div>

        <div className="about__text">
          <h2>About Me</h2>
          <p>
            I'm a web developer with a background in digital marketing and
            strategy. I spent almost a decade creating cross-channel campaigns
            and leading creative initiatives — now I use that same strategic
            mindset to build websites that are clean, purposeful, and centered
            around the user.
          </p>
          <p>
            I take a problem-solving approach to development, combining design
            and strategy to help businesses capture the opportunities that come
            with an increasingly digital world.
          </p>
          <p>
            Outside of work, you’ll find me skiing, playing tennis, exploring
            the city, or planning my next adventure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

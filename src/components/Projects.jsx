import React from "react";
import { FaGithub } from "react-icons/fa"; // ← Import the icon
import "./Projects.scss";
import Carousel from "./Carousel";

// Image imports for Notes carousel
import notes1 from "../assets/notes_1.jpeg";
import notes2 from "../assets/notes_2.jpeg";
import notes3 from "../assets/notes_3.jpeg";
import notes4 from "../assets/notes_4.jpeg";

const projects = [
  {
    name: "Coffee Shop",
    video: "https://www.youtube.com/embed/_hTJEfOyNws",
    github: "https://github.com/jellywins/jelena-avramovic-coffeeshop",
    description:
      "A stylish landing page for a local coffee shop, built using HTML, CSS, and vanilla JavaScript.",
    type: "video",
  },
  {
    name: "Bandsite",
    video: "https://www.youtube.com/embed/NVFyoBidozY",
    github: "https://github.com/jellywins/jelena-avramovic-bandsite",
    description:
      "A band promotional site featuring a band gallery, tour dates, and a comment section.",
    type: "video",
  },
  {
    name: "BrainFlix",
    video: "https://www.youtube.com/embed/PsIaO40Gvs8",
    github: "https://github.com/jellywins/jelena-avramovic-brainflix",
    description:
      "BrainFlix is a fully responsive video streaming application that allows users to upload, view, and manage content. Built with a custom API and full-stack architecture, it delivers a YouTube-style experience tailored for streamlined video management. The platform emphasizes dynamic routing, efficient data handling, and a seamless user interface.",
    type: "video",
  },
  {
    name: "InStock",
    video: "https://www.youtube.com/embed/ItqonLgpgE0",
    description:
      "InStock is a fully responsive inventory management system developed to streamline warehouse operations. Built in an agile, team-based environment, the project emphasized iterative development and close collaboration. The application integrates both front-end and back-end features, supporting full CRUD functionality and a seamless user experience.",
    type: "video",
  },
  {
    name: "Notes",
    images: [notes1, notes2, notes3, notes4],
    description:
      "A lightweight notes app with a sleek UI, allowing users to create, update, and delete notes.",
    type: "carousel",
    id: "notes",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="projects__card">
          <div className="projects__media">
            {project.type === "video" ? (
              <iframe
                src={project.video}
                title={project.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <Carousel images={project.images} />
            )}
          </div>
          <div className="projects__info">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__icon-button"
              >
                <FaGithub size={24} />
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;

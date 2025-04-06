import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ title, videoUrl, description, githubUrl }) => {
  return (
    <div className="project-card">
      <div className="project-card__video">
        <iframe
          src={videoUrl}
          title={title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__button"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

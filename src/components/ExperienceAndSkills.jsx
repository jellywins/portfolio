import React, { useState } from "react";
import "./ExperienceAndSkills.scss";

const tabs = ["Frontend", "Backend", "Tools", "Marketing"];

const content = {
  Frontend: {
    description:
      "I focus on building clean, responsive user interfaces using React, SCSS, and modern tooling like Vite.",
    skills: [
      "HTML",
      "CSS/SCSS",
      "JavaScript",
      "React",
      "Vite",
      "Responsive Design",
    ],
  },
  Backend: {
    description:
      "I use Node.js and Express to build server-side logic, APIs, and connect to databases like MySQL.",
    skills: ["Node.js", "Express", "REST APIs", "MySQL", "Postman"],
  },
  Tools: {
    description:
      "These are the tools and platforms I use to design, test, and ship projects efficiently.",
    skills: ["Git/GitHub", "Figma", "Netlify", "VS Code", "npm"],
  },
  Marketing: {
    description:
      "Before tech, I led omni-channel campaigns. I now blend that strategy mindset with dev skills to create smart digital experiences.",
    skills: [
      "SEO",
      "Email Marketing",
      "Google Analytics",
      "Content Strategy",
      "Campaign Planning",
    ],
  },
};

const ExperienceAndSkills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2>Experience & Skills</h2>

        <div className="experience__tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`experience__tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <p className="experience__description">
          {content[activeTab].description}
        </p>

        <div className="experience__skills">
          {content[activeTab].skills.map((skill) => (
            <span key={skill} className="experience__badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndSkills;

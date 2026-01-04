import { useState, useEffect } from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Image Steganography System",
    description: "Secure message embedding using multiple encoding techniques.",
    tech: "Python, Flask, LSB, Huffman, Spread Spectrum",
    details: {
      problem: "Securely transmitting sensitive data without detection.",
      solution:
        "Implemented multi-layer steganography using LSB, Huffman encoding, and spread spectrum techniques to enhance security and reduce detection risk.",
      impact:
        "Improved data secrecy while maintaining minimal image distortion.",
      link: "https://github.com/your-repo"
    }
  },
  {
    title: "MERN Web Application",
    description: "Full stack web app with authentication and APIs.",
    tech: "MongoDB, Express, React, Node.js",
    details: {
      problem: "Need for a scalable and secure web platform.",
      solution:
        "Built RESTful APIs, implemented authentication, and designed responsive UI using React.",
      impact:
        "Delivered a scalable, production-ready application.",
      link: "https://github.com/your-repo"
    }
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [activeProject]);

  return (
    <section className="projects" id="projects">
      <h2 className="section-title reveal">Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="glass-card project-card reveal"
            onClick={() => setActiveProject(project)}
          >
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-tech">{project.tech}</p>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="project-overlay">
          <div className="project-modal glass-card">
            <button
              className="close-btn"
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>

            <h3>{activeProject.title}</h3>

            <div className="modal-section">
              <strong>Problem</strong>
              <p>{activeProject.details.problem}</p>
            </div>

            <div className="modal-section">
              <strong>Solution</strong>
              <p>{activeProject.details.solution}</p>
            </div>

            <div className="modal-section">
              <strong>Impact</strong>
              <p>{activeProject.details.impact}</p>
            </div>

            <a
              href={activeProject.details.link}
              target="_blank"
              rel="noreferrer"
              className="neon-btn"
            >
              View Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

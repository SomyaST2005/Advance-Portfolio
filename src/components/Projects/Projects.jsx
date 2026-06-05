import { useState, useEffect, useRef } from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Image Steganography System",
    type: "SECURITY",
    description: "Secure message embedding using multiple encoding techniques.",
    tech: ["Python", "Flask", "LSB", "Huffman", "Spread Spectrum"],
    details: {
      problem: "Securely transmitting sensitive data without detection.",
      solution:
        "Implemented multi-layer steganography using LSB, Huffman encoding, and spread spectrum techniques to enhance security and reduce detection risk.",
      impact:
        "Improved data secrecy while maintaining minimal image distortion.",
      link: "https://github.com/SomyaST2005"
    }
  },
  {
    title: "MERN Web Application",
    type: "WEB DEVELOPMENT",
    description: "Full stack web app with authentication and APIs.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    details: {
      problem: "Need for a scalable and secure web platform.",
      solution:
        "Built RESTful APIs, implemented authentication, and designed responsive UI using React.",
      impact:
        "Delivered a scalable, production-ready application.",
      link: "https://github.com/SomyaST2005"
    }
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [closing, setClosing] = useState(false);

  const sectionRef = useRef(null);
  const [booted, setBooted] = useState(false);

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setActiveProject(null);
      setClosing(false);
    }, 300); // must match CSS animation duration
  };

  // Boot-in animation via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBooted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [activeProject]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && activeProject) closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [activeProject]);

  return (
    <section
      ref={sectionRef}
      className={`projects ${booted ? "projects-boot" : ""}`}
      id="projects"
    >
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Mission-critical projects showcasing engineering and security expertise
      </p>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="glass-card project-card boot-card"
            onClick={() => setActiveProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setActiveProject(project)}
          >
            <div className="project-card-accent" />

            <span className="project-type-badge">
              {project.type}
            </span>

            <h3 className="project-title">
              <span className="mission-id">
                MISSION_{String(index + 1).padStart(2, "0")}
              </span>
              {project.title}
            </h3>

            <p className="project-desc">{project.description}</p>

            <div className="project-tech-pills">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>

            <div className="project-card-footer">
              <span className="project-status">
                <span className="status-dot" />
                COMPLETED
              </span>
              <span className="project-hover-hint">
                OPEN FILE →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ===== MISSION MODAL ===== */}
      {activeProject && (
        <div
          className={`project-overlay ${closing ? "closing" : ""}`}
          onClick={closeModal}
        >
          <div
            className={`project-modal glass-card ${closing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="mission-header">
              <span className="mission-tag">MISSION FILE</span>
              <h3>{activeProject.title}</h3>
              <div className="modal-tech-pills">
                {activeProject.tech.map((t, i) => (
                  <span key={i} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>

            <div className="mission-grid">
              <div className="mission-block problem">
                <h4>
                  <span className="block-icon">⚠</span>
                  Problem
                </h4>
                <p>{activeProject.details.problem}</p>
              </div>

              <div className="mission-block solution">
                <h4>
                  <span className="block-icon">⚡</span>
                  Solution
                </h4>
                <p>{activeProject.details.solution}</p>
              </div>

              <div className="mission-block impact">
                <h4>
                  <span className="block-icon">✦</span>
                  Impact
                </h4>
                <p>{activeProject.details.impact}</p>
              </div>
            </div>

            <div className="mission-footer">
              <a
                href={activeProject.details.link}
                target="_blank"
                rel="noreferrer"
                className="neon-btn"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

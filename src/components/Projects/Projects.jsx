import { useState, useEffect, useRef} from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Image Steganography System",
    type: "SECURITY",
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
    type: "WEB DEVELOPMENT",
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBooted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [activeProject]);

  return (
    <section
      ref={sectionRef}
      className={`projects ${booted ? "projects-boot" : ""}`}
      id="projects"
    >
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="glass-card project-card boot-card"
            onClick={() => setActiveProject(project)}
          >
            <h3 className="project-title">
              MISSION_{String(index + 1).padStart(2, "0")}: {project.title}
            </h3>

            <p className="project-desc">{project.description}</p>

            <div className="project-meta">
              <span>TYPE: {project.type || "ENGINEERING"}</span>
              <span>STATUS: COMPLETED</span>
              <span>YEAR: 2024</span>
            </div>

            <p className="project-tech">{project.tech}</p> 

            <div className="project-hover-hint">
              OPEN MISSION FILE →
            </div>         
          
          </div>
        ))}
      </div>

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
            >
              ✕
            </button>

            <div className="mission-header">
              <span className="mission-tag">MISSION FILE</span>
              <h3>{activeProject.title}</h3>
            </div>

            <div className="mission-grid">
              <div className="mission-block problem">
                <h4>Problem</h4>
                <p>{activeProject.details.problem}</p>
              </div>

              <div className="mission-block solution">
                <h4>Solution</h4>
                <p>{activeProject.details.solution}</p>
              </div>

              <div className="mission-block impact">
                <h4>Impact</h4>
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
                View Project
              </a>

            </div>

          </div>

        </div>
      )}
    </section>
  );
}

import { useState, useRef, useEffect } from "react";
import "./Skills.css";
import { skills } from "./skillsData";
import SkillNode from "./SkillNode";
import SkillConnections from "./SkillConnections";
import CenterNode from "./CenterNode";

export default function Skills() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [networkActivated, setNetworkActivated] = useState(false);

  // Auto-activate the network when the section scrolls into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !networkActivated) {
          setNetworkActivated(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [networkActivated]);

  return (
    <section ref={sectionRef} className="skills" id="skills">
      <h2 className="section-title">Skill Network</h2>
      <p className="section-subtitle">
        An interconnected map of technologies and expertise
      </p>

      <div
        ref={containerRef}
        className={`skills-map ${networkActivated ? "activated" : ""}`}
      >
        {/* SVG LINES */}
        <SkillConnections
          containerRef={containerRef}
          skills={skills}
          hoveredSkill={hoveredSkill}
          networkActivated={networkActivated}
        />

        {/* CENTER NODE */}
        <CenterNode
          activated={networkActivated}
          onActivate={() => setNetworkActivated(true)}
        />

        {/* SKILL NODES */}
        {skills
          .filter(skill => skill.type !== "center")
          .map(skill => (
            <SkillNode
              key={skill.id}
              skill={skill}
              skills={skills}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
              networkActivated={networkActivated}
            />
          ))
        }

        {hoveredSkill?.examples && (
          <div className="skill-info-panel">
            <h3>{hoveredSkill.label}</h3>
            <ul>
              {hoveredSkill.examples.map((ex, i) => (
                <li key={i}>▸ {ex}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Skills.css";
import { skills } from "./skillsData";

const SCAN_TEXT = "> scan --skills";
const OPENING_PREFIX = "> opening ";

export default function Skills() {
  const sectionRef = useRef(null);
  const [booted, setBooted] = useState(false);
  const [scanText, setScanText] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [activatingId, setActivatingId] = useState(null);
  const [openingLabel, setOpeningLabel] = useState("");

  // Intersection observer to boot the section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !booted) setBooted(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [booted]);

  // Typewriter for scan text
  useEffect(() => {
    if (!booted) { setScanText(""); return; }
    let i = 0;
    const t = setInterval(() => {
      i++;
      setScanText(SCAN_TEXT.slice(0, i));
      if (i >= SCAN_TEXT.length) clearInterval(t);
    }, 45);
    return () => clearInterval(t);
  }, [booted]);

  // Typewriter for "opening /category/" and then expand
  useEffect(() => {
    if (!activatingId) return;
    const skill = skills.find(s => s.id === activatingId);
    if (!skill) return;
    const label = `${OPENING_PREFIX}${skill.label}`;
    setOpeningLabel("> opening ");
    const steps = [
      { delay: 150, text: "> opening " },
      { delay: 250, text: "> opening /" },
      { delay: 350, text: label },
    ];
    const timers = steps.map(({ delay, text }) =>
      setTimeout(() => setOpeningLabel(text), delay)
    );
    const expandTimer = setTimeout(() => {
      setExpandedId(activatingId);
      setActivatingId(null);
    }, 500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(expandTimer);
    };
  }, [activatingId]);

  const handleCardClick = useCallback((skillId) => {
    if (expandedId === skillId) {
      setExpandedId(null);
      return;
    }
    setExpandedId(null);
    setActivatingId(skillId);
  }, [expandedId]);

  return (
    <section ref={sectionRef} className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        A comprehensive toolkit spanning development, security, and infrastructure
      </p>

      {/* ── Terminal Header ── */}
      <div className="terminal-header">
        <div className="terminal-chrome">
          <span className="chrome-dot chrome-dot--red" />
          <span className="chrome-dot chrome-dot--yellow" />
          <span className="chrome-dot chrome-dot--green" />
          <span className="chrome-title">skills.sys — Terminal</span>
        </div>
        <div className="terminal-body">
          <p className={`terminal-line ${booted ? "booted" : ""}`}>
            <span className="prompt">{scanText}</span>
            {booted && scanText.length >= SCAN_TEXT.length && (
              <span className="cursor">_</span>
            )}
          </p>
          <AnimatePresence>
            {booted && scanText.length >= SCAN_TEXT.length && (
              <motion.div
                className="scan-bar"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <motion.div
                  className="scan-progress"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {booted && scanText.length >= SCAN_TEXT.length && (
              <motion.p
                className="terminal-result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              >
                {skills.length} skill clusters detected · click to inspect
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Skill Cards Grid ── */}
      <div className="skills-grid">
        {skills.map((skill, i) => {
          const isExpanded = expandedId === skill.id;
          const isActivating = activatingId === skill.id;

          return (
            <motion.div
              key={skill.id}
              className={`skill-card glass-card ${isExpanded ? "expanded" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={booted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 + i * 0.1, duration: 0.4, ease: "easeOut" }}
              style={{ "--accent": skill.color }}
              whileHover={{ y: -6 }}
              onClick={() => handleCardClick(skill.id)}
            >
              {/* Radar ping ring */}
              <span className="radar-ping" />

              {/* Card header */}
              <div className="card-header">
                <span className="folder-icon">{isExpanded ? "▼" : "▶"}</span>
                <h3 className="folder-label">{skill.label}</h3>
                <span className="child-count">{skill.children.length} modules</span>
              </div>

              {/* Overall proficiency */}
              <div className="proficiency-row">
                <div className="progress-track">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={booted ? { width: `${skill.proficiency}%` } : { width: 0 }}
                    transition={{
                      delay: 1.6 + i * 0.1,
                      duration: 0.7,
                      ease: "easeOut"
                    }}
                    style={{ background: skill.color }}
                  />
                </div>
                <span className="proficiency-value">{skill.proficiency}%</span>
              </div>

              {/* Examples */}
              <div className="card-examples">
                {skill.examples.map((ex, j) => (
                  <span key={j} className="example-tag">{ex}</span>
                ))}
              </div>

              {/* Expanded children */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    className="expanded-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <div className="expanded-divider" />

                    {isActivating && openingLabel && (
                      <p className="opening-line">
                        <span className="opening-text">{openingLabel}</span>
                        <span className="cursor">_</span>
                      </p>
                    )}

                    <AnimatePresence>
                      {!isActivating && (
                        <motion.div
                          className="children-list"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            visible: { transition: { staggerChildren: 0.06 } }
                          }}
                        >
                          {skill.children.map((child) => (
                            <motion.div
                              key={child.label}
                              className="child-row"
                              variants={{
                                hidden: { opacity: 0, x: -12 },
                                visible: { opacity: 1, x: 0 }
                              }}
                            >
                              <span className="child-label">
                                <span className="child-bullet">└─</span>
                                {child.label}
                              </span>
                              <div className="child-progress-track">
                                <motion.div
                                  className="child-progress-fill"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${child.proficiency}%` }}
                                  transition={{
                                    delay: 0.15,
                                    duration: 0.6,
                                    ease: "easeOut"
                                  }}
                                  style={{ background: skill.color }}
                                />
                              </div>
                              <span className="child-proficiency-value">
                                {child.proficiency}%
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

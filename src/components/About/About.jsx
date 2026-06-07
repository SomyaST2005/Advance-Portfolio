import "./About.css";
import { motion } from "framer-motion";

const personnelFields = [
  { label: "NAME........", value: "Somya Shekhar Tiwari" },
  { label: "ROLE........", value: "Full Stack Developer" },
  { label: "FOCUS.......", value: "Cybersecurity & Web Technologies" },
  { label: "UNIVERSITY..", value: "VIT Bhopal University" },
  { label: "STATUS......", value: "ACTIVE", statusDot: true },
];

const logEntries = [
  {
    timestamp: "2022.08",
    title: "Programming Foundation Initialized",
    description:
      "Built strong fundamentals in C, C++, and Python alongside core computer science subjects.",
  },
  {
    timestamp: "2023.03",
    title: "Full Stack Protocols Acquired",
    description:
      "Mastered MERN stack and built full-stack applications with real-world use cases.",
  },
  {
    timestamp: "2024.01",
    title: "Security Modules Loaded",
    description:
      "Explored steganography, encryption concepts, and secure data communication protocols.",
  },
  {
    timestamp: "2025.01",
    title: "System Ready for Deployment",
    description:
      "Building scalable, secure, and well-engineered applications for production environments.",
  },
];

const terminalVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fieldContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const fieldItem = {
  hidden: { opacity: 0, x: -14 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const logContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.25 },
  },
};

const logItem = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        The engineer behind the system — credentials and journey log
      </p>

      <div className="about-layout">
        {/* ── LEFT: personnel_record.sys ── */}
        <motion.div
          className="about-terminal personnel-terminal"
          variants={terminalVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="terminal-chrome">
            <span className="chrome-dot chrome-dot--red" />
            <span className="chrome-dot chrome-dot--yellow" />
            <span className="chrome-dot chrome-dot--green" />
            <span className="chrome-title">personnel_record.sys</span>
          </div>

          <div className="terminal-body personnel-body">
            <p className="terminal-line">
              <span className="prompt">$</span> cat /records/personnel/somya_tiwari.sys
            </p>

            {/* Hex address gutter */}
            <div className="record-hex">0x7f8a</div>

            <motion.div
              className="record-grid"
              variants={fieldContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {personnelFields.map((field, i) => (
                <motion.div className="record-row" variants={fieldItem} key={i}>
                  <span className="record-label">{field.label}</span>
                  <span className="record-value">
                    {field.value}
                    {field.statusDot && <span className="record-status-dot" />}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* File footer */}
            <div className="record-footer">
              <span className="record-checksum">
                MD5: a3f2b8c9d1e4f7a2b6c0d3e5f8a1b4c7
              </span>
            </div>

            <p className="terminal-line">
              <span className="prompt">$</span> <span className="cursor">_</span>
            </p>
          </div>
        </motion.div>

        {/* ── RIGHT: engineering_journey.log ── */}
        <motion.div
          className="about-terminal journey-terminal"
          variants={terminalVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="terminal-chrome">
            <span className="chrome-dot chrome-dot--red" />
            <span className="chrome-dot chrome-dot--yellow" />
            <span className="chrome-dot chrome-dot--green" />
            <span className="chrome-title">engineering_journey.log</span>
          </div>

          <div className="terminal-body journey-body">
            <p className="terminal-line">
              <span className="prompt">$</span> tail -f /var/log/engineering_journey.log
            </p>

            {/* Log header divider */}
            <div className="log-divider">
              <span className="log-divider-label">── LOG START ──</span>
            </div>

            <motion.div
              className="log-entries"
              variants={logContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {logEntries.map((entry, i) => (
                <motion.div className="log-entry" variants={logItem} key={i}>
                  <span className="log-timestamp">[{entry.timestamp}]</span>
                  <span className="log-prompt">&gt;</span>
                  <div className="log-content">
                    <span className="log-title">{entry.title}</span>
                    <span className="log-desc">{entry.description}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Log footer */}
            <div className="log-divider">
              <span className="log-divider-label">── END OF LOG ──</span>
            </div>

            <p className="terminal-line">
              <span className="prompt">$</span> <span className="cursor">_</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

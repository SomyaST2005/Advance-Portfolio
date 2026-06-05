import "./About.css";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const bioVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const milestones = [
  {
    year: "2022",
    icon: "🚀",
    title: "Started Coding",
    description:
      "Built a strong foundation in programming and problem-solving with C, C++, and Python.",
  },
  {
    year: "2023",
    icon: "⚡",
    title: "Full Stack Development",
    description:
      "Learned MERN stack and built full-stack applications with real-world use cases.",
  },
  {
    year: "2024",
    icon: "🔐",
    title: "Cybersecurity Focus",
    description:
      "Explored steganography, encryption concepts, and secure data communication.",
  },
  {
    year: "2025",
    icon: "🎯",
    title: "Placement Ready",
    description:
      "Focused on building scalable, secure, and well-engineered applications.",
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Get to know my journey in tech and engineering
      </p>

      {/* Bio Section */}
      <motion.div
        className="about-bio glass-card"
        variants={bioVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="about-bio-content">
          <div className="about-bio-text">
            <h3 className="about-bio-heading">
              <span className="about-bio-wave">👋</span> Hello, I'm Somya
            </h3>
            <p>
              A passionate Computer Science Engineering student at{" "}
              <strong>VIT Bhopal University</strong>, driven by curiosity for
              full-stack development and cybersecurity. I love turning ideas
              into elegant, functional digital experiences and exploring the
              intersection of security and modern web technologies.
            </p>
          </div>
          <div className="about-edu">
            <div className="about-edu-badge">
              <span className="about-edu-icon">🎓</span>
              <div>
                <span className="about-edu-degree">B.Tech — CSE</span>
                <span className="about-edu-school">VIT Bhopal University</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <h3 className="about-timeline-heading">Engineering Journey</h3>

      <motion.div
        className="timeline"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="timeline-line" aria-hidden="true" />

        {milestones.map((m, i) => (
          <motion.div className="timeline-item" variants={item} key={i}>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card glass-card">
              <span className="timeline-year">{m.year}</span>
              <span className="timeline-icon">{m.icon}</span>
              <h4>{m.title}</h4>
              <p>{m.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

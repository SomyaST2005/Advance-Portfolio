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

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">Engineering Journey</h2>

      <motion.div
        className="timeline"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="timeline-item glass-card" variants={item}>
          <span className="timeline-year">2022</span>
          <h3>Started Coding</h3>
          <p>Built a strong foundation in programming and problem-solving.</p>
        </motion.div>

        <motion.div className="timeline-item glass-card" variants={item}>
          <span className="timeline-year">2023</span>
          <h3>Full Stack Development</h3>
          <p>
            Learned MERN stack and built full-stack applications with real-world
            use cases.
          </p>
        </motion.div>

        <motion.div className="timeline-item glass-card" variants={item}>
          <span className="timeline-year">2024</span>
          <h3>Cybersecurity Focus</h3>
          <p>
            Explored steganography, encryption concepts, and secure data
            communication.
          </p>
        </motion.div>

        <motion.div className="timeline-item glass-card" variants={item}>
          <span className="timeline-year">2025</span>
          <h3>Placement Ready</h3>
          <p>
            Focused on building scalable, secure, and well-engineered
            applications.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

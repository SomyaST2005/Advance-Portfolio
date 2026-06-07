import "./Achievements.css";
import { motion } from "framer-motion";

const achievementsData = [
  {
    icon: "🎓",
    title: "B.Tech CSE - 9.0+ CGPA",
    institution: "VIT Bhopal University",
    description: "Consistent academic performance, focusing on Database Management Systems, Computer Networks, and Cryptography.",
    category: "ACADEMICS"
  },
  {
    icon: "🔐",
    title: "Cybersecurity Essentials",
    institution: "Cisco Networking Academy",
    description: "Certified in foundational security protocols, secure communication systems, threat auditing, and data defense mechanisms.",
    category: "CERTIFICATE"
  },
  {
    icon: "⚡",
    title: "250+ Algorithmic Challenges",
    institution: "LeetCode & GFG",
    description: "Solved advanced data structures and algorithms problems in C++ and Java, honing efficient computational problem-solving.",
    category: "DSA"
  },
  {
    icon: "🌐",
    title: "MERN Stack Specialist",
    institution: "Full-Stack Development",
    description: "Built and deployed secure REST APIs, complex React dashboards, session authorization gates, and NoSQL databases.",
    category: "DEVELOPMENT"
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <h2 className="section-title">Achievements</h2>
      <p className="section-subtitle">
        Milestones and certifications attained during my engineering journey
      </p>

      <motion.div
        className="achievements-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {achievementsData.map((item, index) => (
          <motion.div
            key={index}
            className="glass-card achievement-card"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div className="achievement-accent" />
            <div className="achievement-badge">
              <span className="badge-category">{item.category}</span>
              <span className="badge-icon" role="img" aria-label={item.category}>{item.icon}</span>
            </div>
            
            <h3 className="achievement-title">{item.title}</h3>
            <span className="achievement-institution">{item.institution}</span>
            <p className="achievement-desc">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

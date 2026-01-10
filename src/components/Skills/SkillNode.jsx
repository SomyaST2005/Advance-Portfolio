import { motion } from "framer-motion";

export default function SkillNode({ skill }) {
  return (
    <motion.div
      className={`skill-node ${skill.type}`}
      data-id={skill.id}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {skill.label}
    </motion.div>
  );
}


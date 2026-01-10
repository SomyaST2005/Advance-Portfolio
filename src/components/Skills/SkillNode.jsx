import { motion } from "framer-motion";
import { useMemo } from "react";

const randomFloat = () => ({
        x: Math.random() * 40 - 20, // -20 → +20
        y: Math.random() * 40 - 20,
        duration: 6 + Math.random() * 4 // 6–10s
}); 

export default function SkillNode({
  skill,
  hoveredSkill,
  setHoveredSkill,
  networkActivated
}) {

  const float = useMemo(() => randomFloat(), []);
  const isCenter = skill.type === "center";

  const isRelated =
    hoveredSkill?.links?.includes(skill.id);

  const isActive =
    hoveredSkill?.id === skill.id || isRelated;

  const isDimmed =
    hoveredSkill && !isActive;

  return (
    <>
        <motion.div
            className={`skill-node ${skill.type} ${isDimmed ? "dim" : ""}`}
            data-id={skill.id}
            onMouseEnter={() => !isCenter && setHoveredSkill(skill)}
            onMouseLeave={() => !isCenter && setHoveredSkill(null)}
            animate={
                isCenter || networkActivated
                ? { x: 0, y: 0 }
                : {
                    x: [0, float.x, 0],
                    y: [0, float.y, 0],
                    }
            }
            transition={
                isCenter || networkActivated
                ? { duration: 0 }
                : {
                    duration: float.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    }
            }
            whileHover={!isCenter ? { scale: 1.12 } : {}}
        >
            {skill.label}
        </motion.div>
    </>
  );
}

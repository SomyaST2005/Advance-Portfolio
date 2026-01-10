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
  selectedSkill,
  setSelectedSkill,
  networkActivated
}) {

  const float = useMemo(() => randomFloat(), []);
  const isCenter = skill.type === "center";

  const isRelated =
    hoveredSkill?.links?.includes(skill.id) ||
    selectedSkill?.links?.includes(skill.id);

  const isActive =
    hoveredSkill?.id === skill.id ||
    selectedSkill?.id === skill.id ||
    isRelated;

  const isDimmed =
    (hoveredSkill || selectedSkill) && !isActive;

  const isExpanded = selectedSkill?.id === skill.id;

  return (
    <>
        <motion.div
            className={`skill-node ${skill.type} ${isDimmed ? "dim" : ""}`}
            data-id={skill.id}
            onMouseEnter={() => !isCenter && setHoveredSkill(skill)}
            onMouseLeave={() => !isCenter && setHoveredSkill(null)}
            onClick={() => !isCenter && setSelectedSkill(skill)}
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

      {isExpanded && skill.examples && (
        <motion.div
          className="skill-details"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <ul>
            {skill.examples.map((ex, i) => (
              <li key={i}>▸ {ex}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}

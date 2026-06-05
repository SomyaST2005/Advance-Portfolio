import { motion } from "framer-motion";
import { useMemo } from "react";

const randomFloat = () => ({
        x: Math.random() * 40 - 20, // -20 → +20
        y: Math.random() * 40 - 20,
        duration: 6 + Math.random() * 4 // 6–10s
}); 

const CENTER = { x: 50, y: 50 };

function polarToXY(angle, radius) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: CENTER.x + Math.cos(rad) * radius,
    y: CENTER.y + Math.sin(rad) * radius
  };
}

export default function SkillNode({
  skill,
  skills,
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

  let position = CENTER;

  if (skill.type === "core") {
    position = polarToXY(skill.angle, skill.radius);
  }

  if (skill.parent && skills) {
    const parent = skills.find(s => s.id === skill.parent);
    if (parent) {
      const base = polarToXY(parent.angle, parent.radius);
      const dynamicRadius = 20 + Math.abs(skill.offset) * 0.15;
      const spread = polarToXY(parent.angle + skill.offset, dynamicRadius);

      position = {
        x: base.x + (spread.x - CENTER.x),
        y: base.y + (spread.y - CENTER.y)
      };
    }
  }

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
            style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: "translate(-50%, -50%)"
                  }}
            whileHover={!isCenter ? { scale: 1.12 } : {}}
        >
            {skill.label}
        </motion.div>
    </>
  );
}

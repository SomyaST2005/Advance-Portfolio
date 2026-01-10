import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function getEdgePoint(from, to, radius) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.sqrt(dx * dx + dy * dy) || 1;

  return {
    x: from.x + (dx / distance) * radius,
    y: from.y + (dy / distance) * radius
  };
}

// Approximate visual radii (tuned for your design)
const NODE_RADIUS = {
  center: 55,
  core: 42,
  sub: 32
};

export default function SkillConnections({
  containerRef,
  skills,
  hoveredSkill,
  selectedSkill,
  networkActivated
}) {
  const [positions, setPositions] = useState({});
  const [pulseReady, setPulseReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const nodes = containerRef.current.querySelectorAll("[data-id]");
    const parentRect = containerRef.current.getBoundingClientRect();
    const map = {};

    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      map[node.dataset.id] = {
        x: rect.left + rect.width / 2 - parentRect.left,
        y: rect.top + rect.height / 2 - parentRect.top
      };
    });

    const center = containerRef.current.querySelector(".center-node");
    if (center) {
      const rect = center.getBoundingClientRect();
      map["center"] = {
        x: rect.left + rect.width / 2 - parentRect.left,
        y: rect.top + rect.height / 2 - parentRect.top
      };
    }

    setPositions(map);
  }, [networkActivated]);

  useEffect(() => {
    if (!networkActivated) {
        setPulseReady(false);
        return;
    }

    const t = setTimeout(() => setPulseReady(true), 1200);
    return () => clearTimeout(t);
  }, [networkActivated]);


  const shouldPulse = networkActivated && !hoveredSkill && !selectedSkill;

  return (
    <svg className="skill-connections">
      {/* ===============================
          CENTER → CORE SKILLS
      =============================== */}
      {networkActivated &&
        skills
          .filter(skill => skill.type === "core")
          .map(skill => {
            const fromCenter = positions["center"];
            const toCore = positions[skill.id];
            if (!fromCenter || !toCore) return null;

            const start = getEdgePoint(fromCenter, toCore, NODE_RADIUS.center);
            const end = getEdgePoint(toCore, fromCenter, NODE_RADIUS.core);

            return (
                <>
                    <motion.line
                        key={`center-${skill.id}`}
                        x1={start.x}
                        y1={start.y}
                        x2={end.x}
                        y2={end.y}
                        stroke="rgba(0,229,255,0.35)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    {pulseReady && (
                        <motion.line
                            x1={start.x}
                            y1={start.y}
                            x2={end.x}
                            y2={end.y}
                            stroke="rgba(0,255,255,1)"
                            strokeWidth="2.8"
                            strokeLinecap="round"
                            className="pulse-line"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        />
                    )}
                </>
            );
          })}

      {/* ===============================
          CORE → SUB SKILLS
      =============================== */}
      {skills
        .filter(skill => skill.type === "core")
        .flatMap(core =>
          core.links?.map(subId => {
            const fromCore = positions[core.id];
            const toSub = positions[subId];
            if (!fromCore || !toSub) return null;

            const start = getEdgePoint(fromCore, toSub, NODE_RADIUS.core);
            const end = getEdgePoint(toSub, fromCore, NODE_RADIUS.sub);

            const isHighlighted =
              hoveredSkill?.id === core.id ||
              selectedSkill?.id === core.id;

            return (
                <>
                    <motion.line
                        key={`${core.id}-${subId}`}
                        x1={start.x}
                        y1={start.y}
                        x2={end.x}
                        y2={end.y}
                        stroke={
                            isHighlighted
                                ? "rgba(140,180,255,0.55)"
                                : "rgba(140,180,255,0.25)"
                        }
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: networkActivated ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                    />
                    {pulseReady && (
                        <motion.line
                            x1={start.x}
                            y1={start.y}
                            x2={end.x}
                            y2={end.y}
                            stroke="rgba(160,100,255,0.9)"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            className="pulse-line"
                            style={{ animationDelay: "1.4s" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        />
                    )}
              </>
            );
          })
        )}
    </svg>
  );
}

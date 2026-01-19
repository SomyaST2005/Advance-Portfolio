import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThreatSimulation({ active }) {
  const [phase, setPhase] = useState("idle");
  const isIdle = phase === "idle";
  const isAttack = phase === "attack";
  const isDetecting = phase === "detecting";
  const isMitigated = phase === "mitigated";

  useEffect(() => {
    if (!active) return;

    setPhase("attack");
    const t1 = setTimeout(() => setPhase("detecting"), 2000);
    const t2 = setTimeout(() => setPhase("mitigated"), 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active]);

  return (
    <svg className="threat-svg" viewBox="0 0 600 300">
      {/* Nodes */}
      <circle
        cx="100"
        cy="150"
        r="22"
        className={`node protocol ${isAttack ? "active" : ""}`}
      />

        <circle
        cx="260"
        cy="150"
        r="22"
        className={`node encryption ${isDetecting ? "active" : ""}`}
      />

        <circle
        cx="420"
        cy="150"
        r="22"
        className={`node steg ${isMitigated ? "active" : ""}`}
      />


      {/* Static path */}
      <line x1="122" y1="150" x2="238" y2="150" className="path" />
      <line x1="282" y1="150" x2="398" y2="150" className="path" />

      {/* ATTACK pulse */}
      {phase === "attack" && (
        <motion.circle
          r="6"
          fill="#ff4d4d"
          animate={{
            cx: [100, 260, 420],
            cy: [150, 150, 150],
          }}
          transition={{ duration: 2, ease: "linear" }}
        />
      )}

      {/* DETECTION scan */}
      {phase === "detecting" && (
        <motion.circle
          cx="260"
          cy="150"
          r="60"
          fill="none"
          stroke="#4dd0e1"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0.6, 0], scale: 1.4 }}
          transition={{ duration: 1.5 }}
        />
      )}

      {/* MITIGATED state */}
      {phase === "mitigated" && (
        <text x="260" y="220" textAnchor="middle" className="secure-text">
          Threat Neutralized
        </text>
      )}

      {isIdle && (
        <motion.circle
            r="4"
            fill="rgba(77, 208, 225, 0.35)"
            animate={{
            cx: [100, 420],
            cy: [150, 150],
            }}
            transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
            }}
        />
      )}
    </svg>
  );
}

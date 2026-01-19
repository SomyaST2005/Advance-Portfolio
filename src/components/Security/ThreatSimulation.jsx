import { motion } from "framer-motion";
import { useState } from "react";

const LAYER_INFO = {
  protocol: {
    title: "Protocol Layer",
    description:
      "Network protocols define how data travels. Attacks often begin by exploiting weak or unvalidated protocol communication."
  },
  encryption: {
    title: "Encryption Layer",
    description:
      "Encryption ensures intercepted data is unreadable. Even if traffic is captured, content remains protected."
  },
  steg: {
    title: "Steganography Layer",
    description:
      "Steganography hides encrypted data inside innocent-looking media, making detection extremely difficult."
  }
};

export default function ThreatSimulation({ phase }) {
  const [selectedLayer, setSelectedLayer] = useState(null);

  const isIdle = phase === "idle";
  const isAttack = phase === "attack";
  const isDetecting = phase === "detecting";
  const isMitigated = phase === "mitigated";

  return (
    <div className="threat-visual">
      {/* Layer description */}
      {selectedLayer && (
        <div className="layer-info glass-card">
          <h4>{LAYER_INFO[selectedLayer].title}</h4>
          <p>{LAYER_INFO[selectedLayer].description}</p>
        </div>
      )}

      <svg className="threat-svg" viewBox="0 0 600 300">
        {/* Protocol */}
        <circle
          cx="100"
          cy="150"
          r="22"
          className={`node protocol ${isAttack ? "active attack" : ""}`}
          onClick={() => setSelectedLayer("protocol")}
          style={{ cursor: "pointer" }}
        />

        {/* Encryption */}
        <circle
          cx="260"
          cy="150"
          r="22"
          className={`node encryption ${isDetecting ? "active detecting" : ""}`}
          onClick={() => setSelectedLayer("encryption")}
          style={{ cursor: "pointer" }}
        />

        {/* Steganography */}
        <circle
          cx="420"
          cy="150"
          r="22"
          className={`node steg ${isMitigated ? "active mitigated" : ""}`}
          onClick={() => setSelectedLayer("steg")}
          style={{ cursor: "pointer" }}
        />

        {/* Paths */}
        <line x1="122" y1="150" x2="238" y2="150" className="path" />
        <line x1="282" y1="150" x2="398" y2="150" className="path" />

        {/* Attack pulse */}
        {isAttack && (
          <motion.circle
            r="6"
            fill="#ff4d4d"
            animate={{
              cx: [100, 260, 420],
              cy: [150, 150, 150]
            }}
            transition={{
              duration: 3.6,
              times: [0, 0.5, 1],
              ease: "easeInOut"
            }}
          />
        )}

        {/* Detection scan */}
        {isDetecting && (
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

        {/* Mitigated */}
        {isMitigated && (
          <text
            x="260"
            y="220"
            textAnchor="middle"
            className="secure-text"
          >
            Threat Neutralized
          </text>
        )}

        {/* Idle scan */}
        {isIdle && (
          <motion.circle
            r="4"
            fill="rgba(77, 208, 225, 0.35)"
            animate={{ cx: [100, 420], cy: [150, 150] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        )}
      </svg>
    </div>
  );
}

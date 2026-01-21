import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThreatSimulation({
  phase,
  onTamperingDetected
}) {
  const POS = {
    sender: 80,
    security: 350,
    receiver: 620,
    attackerY: 80
  };

  // local animation control
  const [packetAtSecurity, setPacketAtSecurity] = useState(false);
  const [tampering, setTampering] = useState(false);

  // reset when phase changes
  useEffect(() => {
    setPacketAtSecurity(false);
    setTampering(false);
  }, [phase]);

  return (
    <svg className="threat-svg" viewBox="0 0 700 300">

      {/* Labels */}
      <text x="80" y="110" className="node-label">Sender</text>
      <text x="350" y="110" className="node-label">Security</text>
      <text x="620" y="110" className="node-label">Receiver</text>

      {/* Nodes */}
      <circle cx={POS.sender} cy="150" r="22" className="node" />
      <circle cx={POS.security} cy="150" r="30" className="node" />
      <circle cx={POS.receiver} cy="150" r="22" className="node" />

      {/* Paths */}
      <line x1="102" y1="150" x2="320" y2="150" className="path" />
      <line x1="380" y1="150" x2="598" y2="150" className="path" />

      {/* ================= PART 1 ================= */}
      {phase === "NORMAL" && (
        <motion.circle
          r="4"
          fill="#7cffc4"
          initial={{ cx: POS.sender, cy: 150, opacity: 0 }}
          animate={{
            cx: [POS.sender, POS.receiver],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "linear"
          }}
        />
      )}

      {/* ================= PART 2 ================= */}
      {phase === "TAMPERING" && (
        <>
          {/* Packet travels sender → security */}
          {!packetAtSecurity && (
            <motion.circle
              r="4"
              fill="#7cffc4"
              initial={{ cx: POS.sender, cy: 150, opacity: 1 }}
              animate={{ cx: POS.security - 40, opacity: 1 }}
              transition={{ duration: 3, ease: "linear" }}
              onAnimationComplete={() => setPacketAtSecurity(true)}
            />
          )}

          {/* Packet stopped at security */}
          {packetAtSecurity && (
            <>
            
              <motion.circle
                cx={POS.security}
                cy={POS.attackerY}
                r="18"
                className="node attacker"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              <text
                x={POS.security}
                y={POS.attackerY - 25}
                className="node-label attacker-label"
                textAnchor="middle"
              >
                Attacker
              </text>

              {/* Connection line eases in */}
              <motion.line
                x1={POS.security}
                y1={POS.attackerY}
                x2={POS.security - 40}
                y2={150}
                stroke="#ff4d4d"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              />

              {/* Tampering jitter */}
              <motion.circle
                r="4"
                fill="#7cffc4"
                cx={POS.security - 40}
                cy={150}
                animate={
                  !tampering
                    ? { y: [0, -3, 3, -3, 3, -2, 2, 0] }
                    : { y: 0 }
                }
                transition={{
                  delay: !tampering ? 0.8 : 0,
                  duration: !tampering ? 0.6 : 0,
                  repeat: !tampering ? 3 : 0,
                  ease: "linear"
                }}
                onAnimationComplete={() => {
                  if (!tampering) {
                    setTampering(true);
                    onTamperingDetected();
                  }
                }}
              />
            </>
          )}
        </>
      )}
    </svg>
  );
}

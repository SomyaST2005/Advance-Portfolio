import { useEffect, useState } from "react";

export default function ThreatLog({ active }) {
  const [logs, setLogs] = useState([]);
  const THREAT_STEPS = [
    "DETECTED",
    "ANALYZING",
    "ENCRYPTED",
    "HIDDEN",
    "NEUTRALIZED"
  ];

  const [stepIndex, setStepIndex] = useState(0);


  useEffect(() => {
    if (!active) return;

    if (stepIndex < THREAT_STEPS.length - 1) {
        const timer = setTimeout(() => {
        setStepIndex(prev => prev + 1);
        }, 900);

        return () => clearTimeout(timer);
    }
  }, [active, stepIndex]);

  return (
    <div className="threat-log">
      <h4>SYSTEM LOG</h4>
      <ul className="system-log">
        <li className={stepIndex >= 0 ? "active" : ""}>
            ⚠ Suspicious packet detected
        </li>
        <li className={stepIndex >= 1 ? "active" : ""}>
            🔍 Analyzing protocol layer
        </li>
        <li className={stepIndex >= 2 ? "active" : ""}>
            🔐 Encryption applied
        </li>
        <li className={stepIndex >= 3 ? "active" : ""}>
            🫥 Data hidden via steganography
        </li>
        <li className={stepIndex >= 4 ? "active success" : ""}>
            ✅ Threat neutralized successfully
        </li>
      </ul>
    </div>
  );
}

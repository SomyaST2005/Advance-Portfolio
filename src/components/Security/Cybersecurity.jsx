import { useEffect, useRef, useState } from "react";
import ThreatSimulation from "./ThreatSimulation";
import ThreatLog from "./ThreatLog";
import "./Cybersecurity.css";

export default function Cybersecurity() {
  const ref = useRef(null);

  // STORY STATE (single source of truth)
  const [phase, setPhase] = useState("NORMAL");
  const [events, setEvents] = useState([]);

  const handleSuspiciousPacket = () => {
    setEvents(prev => [...prev, "⚠ Suspicious packet detected"]);
  };

  const handleMaliciousBlocked = () => {
    setEvents(prev => [...prev, "❌ Malicious packet blocked"]);
  };

  const handleDataSecured = () => {
    setEvents(prev => [...prev, "🔐 Data secured"]);
  };

  const handleDataProtected = () => {
    setEvents(prev => [...prev, "🛡 Data protected"]);
  };

  // Initialize Part 1 when section mounts
  useEffect(() => {
    setPhase("NORMAL");
    setEvents(["Continuously monitoring network"]);
  }, []);

  // Restart simulation manually
  const runSimulation = () => {
    setEvents(["Continuously monitoring network"]);
    setPhase("TAMPERING");
  };

  // 🔑 visual → log sync
  const handleTamperingDetected = () => {
    setEvents(prev => [...prev, "Data tampering attempt detected"]);
    setTimeout(() => {
      setPhase("ATTACK_PACKET");
    }, 800);
  };

  return (
    <section ref={ref} className="cybersecurity" id="security">
      <h2 className="section-title">Threat Simulation</h2>

      <div className="security-lab">
        <ThreatSimulation
          phase={phase}
          onTamperingDetected={handleTamperingDetected}
          onSuspiciousPacket={handleSuspiciousPacket}
          onMaliciousBlocked={handleMaliciousBlocked}
          onDataSecured={handleDataSecured}
          onDataProtected={handleDataProtected}
        />

        <ThreatLog events={events} />
      </div>

      <button className="run-sim-btn" onClick={runSimulation}>
        Run Simulation
      </button>
    </section>
  );
}

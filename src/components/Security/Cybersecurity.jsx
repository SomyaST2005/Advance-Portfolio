import { useEffect, useRef, useState } from "react";
import ThreatSimulation from "./ThreatSimulation";
import ThreatLog from "./ThreatLog";
import "./Cybersecurity.css";

export default function Cybersecurity() {
  const ref = useRef(null);
  const hasAutoRun = useRef(false);

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

  const handleDataReceived = () => {
    setEvents(prev => [...prev, "✅ Data received safely"]);
    setTimeout(() => {
      setPhase("NORMAL");
      setEvents(prev => [...prev, "Continuously monitoring network"]);
    }, 800);
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

  // Auto-start the simulation when section scrolls into view (once)
  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoRun.current) {
          hasAutoRun.current = true;
          // Small delay so user can see the section before it starts
          setTimeout(() => {
            setEvents(["Continuously monitoring network"]);
            setPhase("TAMPERING");
          }, 600);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

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
      <p className="section-subtitle">
        Watch a real-time network defense scenario unfold
      </p>

      <div className="security-lab">
        <ThreatSimulation
          phase={phase}
          onTamperingDetected={handleTamperingDetected}
          onSuspiciousPacket={handleSuspiciousPacket}
          onMaliciousBlocked={handleMaliciousBlocked}
          onDataSecured={handleDataSecured}
          onDataProtected={() => {
            handleDataProtected();
            setTimeout(() => setPhase("DELIVERING"), 600);
          }}
          onDataReceived={handleDataReceived}
        />

        <ThreatLog events={events} />
      </div>

      <button className="neon-btn run-sim-btn" onClick={runSimulation}>
        Run Simulation
      </button>
    </section>
  );
}

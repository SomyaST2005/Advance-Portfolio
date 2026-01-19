import { useEffect, useRef, useState } from "react";
import ThreatSimulation from "./ThreatSimulation";
import ThreatLog from "./ThreatLog";
import "./Cybersecurity.css";

export default function Cybersecurity() {
  const ref = useRef(null);

  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState("idle");

  // Trigger when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActive(true),
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Phase timeline (SINGLE SOURCE OF TRUTH)
  useEffect(() => {
    if (!active) return;

    setPhase("attack");

    const t1 = setTimeout(() => setPhase("detecting"), 1600);
    const t2 = setTimeout(() => setPhase("mitigated"), 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active]);

  const runSimulation = () => {
    setActive(false);
    setPhase("idle");
    setTimeout(() => setActive(true), 50);
  };

  return (
    <section ref={ref} className="cybersecurity" id="security">
      <h2 className="section-title">Threat Simulation</h2>

      <div className="security-lab">
        <ThreatSimulation phase={phase} />
        <ThreatLog phase={phase} />
      </div>

      <button className="run-sim-btn" onClick={runSimulation}>
        Run Simulation
      </button>
    </section>
  );
}



{/* <div className="glass-card security-card reveal">
            <h3>Steganography</h3>
            <p>
              Secure data hiding using LSB, Huffman Encoding,
              and Spread Spectrum techniques to minimize detection.
            </p>
          </div>

          <div className="glass-card security-card reveal">
            <h3>Encryption Mindset</h3>
            <p>
              Understanding of encryption principles,
              secure communication, and threat mitigation.
            </p>
          </div>

          <div className="glass-card security-card reveal">
            <h3>Secure Design</h3>
            <p>
              Building applications with awareness of vulnerabilities,
              data exposure, and attack surfaces.
            </p>
          </div> */}
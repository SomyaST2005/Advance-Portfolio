export default function ThreatLog({ phase }) {
  return (
    <div className="threat-log">
      <h4>SYSTEM LOG</h4>
      <ul className="system-log">
        <li className={phase !== "idle" ? "active" : ""}>
          ⚠ Suspicious packet detected
        </li>
        <li className={phase === "detecting" || phase === "mitigated" ? "active" : ""}>
          🔍 Analyzing protocol layer
        </li>
        <li className={phase === "detecting" || phase === "mitigated" ? "active" : ""}>
          🔐 Encryption applied
        </li>
        <li className={phase === "mitigated" ? "active" : ""}>
          🫥 Data hidden via steganography
        </li>
        <li className={phase === "mitigated" ? "active success" : ""}>
          ✅ Threat neutralized successfully
        </li>
      </ul>
    </div>
  );
}

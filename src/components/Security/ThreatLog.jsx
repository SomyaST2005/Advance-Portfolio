import { useEffect, useState } from "react";

export default function ThreatLog({ active }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (!active) return;

    setLogs([
      "⚠ Suspicious packet detected",
      "🔍 Analyzing encryption layer",
      "✅ Threat neutralized successfully"
    ]);
  }, [active]);

  return (
    <div className="threat-log">
      <h4>SYSTEM LOG</h4>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

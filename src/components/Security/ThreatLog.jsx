export default function ThreatLog({ events }) {
  return (
    <div className="threat-log">
      <h4>SYSTEM LOG</h4>

      {events.length === 0 ? (
        <p className="log-empty">Awaiting system activity...</p>
      ) : (
        <ul className="system-log">
          {events.map((event, i) => (
            <li key={i} className="active">
              {event}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
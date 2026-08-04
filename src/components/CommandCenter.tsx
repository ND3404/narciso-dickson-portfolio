export function CommandCenter() {
  const kpis = [
    ["10+", "Years Experience"],
    ["PMP", "Certified"],
    ["MS", "Project Management"],
    ["AI", "Leadership"],
  ];

  return (
    <aside className="command-center" aria-label="Portfolio command center visual">
      <div className="command-head">
        <span className="pulse" />
        <strong>Portfolio Command Center</strong>
        <span className="status-chip">Reviewed</span>
      </div>
      <div className="kpi-grid">
        {kpis.map(([value, label]) => (
          <div className="kpi-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="signal-panel">
        <div>
          <span>Project controls</span>
          <strong>Cost + schedule visibility</strong>
        </div>
        <div>
          <span>Analytics layer</span>
          <strong>SQL, Python, BI dashboards</strong>
        </div>
        <div>
          <span>AI leadership</span>
          <strong>Use cases, governance, human review</strong>
        </div>
      </div>
    </aside>
  );
}

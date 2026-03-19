export default function MiniMetrics({ items }) {
  return (
    <div className="mini-metrics">
      {items.map((m, i) => (
        <div className="mini-metrics__item" key={i}>
          <span className="mini-metrics__value">{m.value}</span>
          <span className="mini-metrics__label">{m.label}</span>
        </div>
      ))}
    </div>
  )
}

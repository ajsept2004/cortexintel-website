export default function MiniProcess({ steps }) {
  return (
    <div className="mini-process">
      {steps.map((s, i) => (
        <div className="mini-process__step" key={i}>
          <span className="mini-process__num">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h4 className="mini-process__title">{s.title}</h4>
            <p className="mini-process__desc">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

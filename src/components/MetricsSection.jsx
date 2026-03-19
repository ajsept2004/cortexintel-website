import R from './Reveal'

const metrics = [
  { value: '40%',   label: 'Cost Reduction' },
  { value: '3×',    label: 'Operational Efficiency' },
  { value: '90',    label: 'Day AI Implementation', suffix: '-Day' },
  { value: '£250K+', label: 'Annual Savings' },
]

export default function MetricsSection() {
  return (
    <section className="metrics">
      <div className="metrics__bg" />
      <div className="w">
        <R>
          <span className="section__label">Proven Impact</span>
        </R>
        <R delay={80}>
          <h2 className="section__heading section__heading--lg" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
            Delivering measurable results across every engagement
          </h2>
        </R>
        <div className="metrics__grid">
          {metrics.map((m, i) => (
            <R delay={150 + i * 100} key={i}>
              <div className="metrics__card">
                <div className="metrics__glow" />
                <span className="metrics__value">{m.value}</span>
                <span className="metrics__label">{m.label}</span>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  )
}

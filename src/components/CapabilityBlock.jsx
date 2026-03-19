import { CheckCircle2 } from 'lucide-react'

export default function CapabilityBlock({ items, accent = 'accent' }) {
  return (
    <div className={`capability-block capability-block--${accent}`}>
      <ul className="capability-block__list">
        {items.map((item, i) => (
          <li key={i} className="capability-block__item">
            <CheckCircle2 size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

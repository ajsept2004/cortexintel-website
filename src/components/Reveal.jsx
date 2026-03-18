import { useState, useEffect, useRef } from 'react'
export default function R({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); o.disconnect() } }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' })
    o.observe(el); return () => o.disconnect()
  }, [])
  return <div ref={ref} className={`rv ${vis ? 'rv--v' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

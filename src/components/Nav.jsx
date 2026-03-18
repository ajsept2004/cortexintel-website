import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [loc])

  const links = [
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Work' },
    { to: '/academy', label: 'Academy' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`nav ${scrolled ? 'nav--s' : ''}`}>
      <div className="w nav__inner">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-wrap"><img src="/logo.png" alt="CortexIntel" className="nav__logo-img" /></span>
        </Link>
        <div className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(l => (
            <Link key={l.to} to={l.to} className={loc.pathname === l.to ? 'nav--active' : ''} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="nav__cta" onClick={() => setOpen(false)}>Let's talk</Link>
        </div>
        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  )
}

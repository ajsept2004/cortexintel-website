import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="w footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="nav__logo"><span className="footer__logo-wrap"><img src="/logo.png" alt="CortexIntel" className="nav__logo-img footer__logo-img" /></span></Link>
            <p className="footer__addr">Kemp House, 152-160 City Road<br />London EC1V 2NX</p>
            <p className="footer__addr">Globesta, Vyttila<br />Kochi, Kerala 682019</p>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <h4>Services</h4>
              <Link to="/services">AI Consulting</Link>
              <Link to="/services">Workflow Automation</Link>
              <Link to="/services">Custom AI Development</Link>
              <Link to="/services">AI Agents</Link>
            </div>
            <div className="footer__col">
              <h4>Academy</h4>
              <Link to="/academy">School Students</Link>
              <Link to="/academy">College Students</Link>
              <Link to="/academy">Professionals</Link>
            </div>
            <div className="footer__col">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/case-studies">Case Studies</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2026 CortexIntel. A trading name of Infosec Solution Limited, UK.</p>
          <div className="footer__social">
            <a href="mailto:hello@cortexintel.ai">hello@cortexintel.ai</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

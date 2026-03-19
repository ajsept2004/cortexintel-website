import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Users, Shield, Globe } from 'lucide-react'
import R from '../components/Reveal'
import ContactSection from '../components/ContactSection'

export default function About() {
  const team = [
    { name: "Team Member", role: "Founder & Director", placeholder: true },
    { name: "Team Member", role: "Co-Director, India", placeholder: true },
    { name: "Team Member", role: "Lead AI Instructor", placeholder: true },
    { name: "Team Member", role: "AI Developer", placeholder: true },
    { name: "Team Member", role: "Head of Delivery", placeholder: true },
    { name: "Team Member", role: "Operations Manager", placeholder: true },
  ]

  return (
    <>
      <section className="page-hero">
        <div className="w">
          <R><span className="section__label">About Us</span></R>
          <R delay={100}><h1 className="page-hero__title">Built on a decade of enterprise technology experience.</h1></R>
          <R delay={200}><p className="page-hero__sub">We combine deep expertise in cybersecurity, cloud infrastructure, and AI engineering to help businesses deploy intelligent technology with confidence — and measurable results.</p></R>
        </div>
      </section>

      {/* TEAM */}
      <section className="section section--alt">
        <div className="w">
          <R><span className="section__label">Our Team</span></R>
          <R delay={80}><h2 className="section__heading section__heading--lg">Our team has been working with AI and digital infrastructure for over a decade. We take pride in our work across enterprises, SMEs and startups alike.</h2></R>
          <div className="team-grid">
            {team.map((m, i) => (
              <R delay={150 + i * 60} key={i}>
                <div className="team-card">
                  <div className="team-card__avatar">
                    <span>{m.name.split(' ').map(w => w[0]).join('')}</span>
                  </div>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </R>
            ))}
          </div>
          <R><p className="section__text" style={{ marginTop: 32, textAlign: 'center', opacity: 0.6, fontStyle: 'italic' }}>Team profiles coming soon. We're actively building our team for 2026.</p></R>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="w">
          <R><span className="section__label">Why CortexIntel?</span></R>
          <R delay={80}><h2 className="section__heading">Enterprise-grade expertise. Boutique-level attention.</h2></R>
          <R delay={160}><p className="section__text">We've managed SD-WAN rollouts across 200+ sites, secured enterprise cloud environments, and built AI systems processing millions of data points. Now we bring that same rigour to every AI engagement — whether you're a 10-person startup or a 1,000-person enterprise.</p></R>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section section--alt">
        <div className="w">
          <R><span className="section__label">Our Philosophy</span></R>
          <R delay={80}><h2 className="section__heading">AI that amplifies human potential</h2></R>
          <R delay={120}><p className="section__text" style={{ maxWidth: 680 }}>The most powerful AI implementations don't replace people — they elevate what teams can achieve. We build solutions that automate the repetitive, surface the insights, and free your people to do their best work.</p></R>
          <R delay={180}><p className="section__text" style={{ maxWidth: 680 }}>Every engagement is measured by business outcomes: time saved, costs reduced, revenue generated. If it doesn't move the needle, we don't build it.</p></R>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="w">
          <div className="values-grid">
            {[
              { icon: <Zap size={22} />, title: "Ship, Don't Slide", desc: "We build things that work, not decks that look good. Every engagement produces a working deliverable." },
              { icon: <Users size={22} />, title: "Accessible to All", desc: "AI shouldn't be exclusive to tech giants. Our solutions and courses are designed for real people and real businesses." },
              { icon: <Shield size={22} />, title: "Security First", desc: "With cybersecurity roots, every system we build is designed with data protection and privacy from day one." },
              { icon: <Globe size={22} />, title: "Global Standards, Local Heart", desc: "London-grade quality delivered in Kochi classrooms and SME offices. World-class doesn't mean world-priced." },
            ].map((v, i) => (
              <R delay={100 + i * 80} key={i}>
                <div className="value-card">
                  <div className="value-card__icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="section section--alt">
        <div className="w">
          <div className="split">
            <R>
              <div className="split__content">
                <span className="section__label">Dedicated Delivery</span>
                <h2 className="section__heading">Flexible engagement models built for results</h2>
                <p className="section__text">Whether you need a one-off strategy sprint or ongoing AI implementation support, we adapt to your scale and timeline. Every engagement includes clear milestones, measurable KPIs, and regular progress reporting.</p>
                <p className="section__text">Our relationship doesn't end at go-live. We provide ongoing optimisation, monitoring, and evolution to ensure your AI solutions continue delivering value long-term.</p>
                <Link to="/contact" className="btn btn--accent" style={{ marginTop: 20 }}>Book a Strategy Call <ArrowRight size={14} /></Link>
              </div>
            </R>
            <R delay={150}>
              <div className="split__visual split__visual--gradient3" />
            </R>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown, CheckCircle } from 'lucide-react'
import R from '../components/Reveal'
import ContactSection from '../components/ContactSection'
import MetricsSection from '../components/MetricsSection'

export default function Home() {
  const work = [
    { client: "UK Law Firm", title: "85% faster contract processing", desc: "Automated contract review and extraction — reducing manual review time from days to hours.", metric: "85% faster" },
    { client: "D2C Retail Brand", title: "£120K annual savings unlocked", desc: "End-to-end order processing automation eliminating manual data entry and reducing errors.", metric: "£120K saved" },
    { client: "Healthcare Clinic", title: "24/7 patient booking coverage", desc: "Voice AI receptionist handling appointment scheduling, rescheduling, and patient queries around the clock.", metric: "24/7 coverage" },
    { client: "Financial Services", title: "92% reporting accuracy achieved", desc: "Automated monthly reporting consolidating 6 data sources into actionable dashboards.", metric: "92% accurate" },
  ]

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="w hero__inner">
          <R><span className="section__label">AI Consulting &amp; Automation</span></R>
          <R delay={100}><h1 className="hero__title">We help businesses deploy AI that delivers<br /><em>measurable ROI in under 90 days.</em></h1></R>
          <R delay={200}><p className="hero__sub">From strategy to implementation, we turn AI from a buzzword into a competitive advantage for mid-sized businesses across the UK and India.</p></R>
          <R delay={300}>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--accent">Book a Strategy Call <ArrowRight size={15} /></Link>
              <Link to="/case-studies" className="btn btn--outline">View Case Studies</Link>
            </div>
          </R>
        </div>
        <a href="#stats" className="hero__scroll"><ArrowDown size={20} /></a>
      </section>

      {/* METRICS IMPACT */}
      <MetricsSection />

      {/* AUTHORITY STATS */}
      <section className="section section--alt" id="stats">
        <div className="w">
          <R>
            <div className="stats-grid">
              <div className="stats-grid__item">
                <h3 className="stats-grid__number">85%</h3>
                <p className="stats-grid__label">Average time saved on automated processes</p>
              </div>
              <div className="stats-grid__item">
                <h3 className="stats-grid__number">£2M+</h3>
                <p className="stats-grid__label">Cost savings delivered for clients</p>
              </div>
              <div className="stats-grid__item">
                <h3 className="stats-grid__number">50+</h3>
                <p className="stats-grid__label">AI solutions deployed across industries</p>
              </div>
              <div className="stats-grid__item">
                <h3 className="stats-grid__number">90 days</h3>
                <p className="stats-grid__label">Average time from strategy to production</p>
              </div>
            </div>
          </R>
        </div>
      </section>

      {/* OUR PROCESS TIMELINE */}
      <section className="section">
        <div className="w">
          <R><span className="section__label">Our Process</span></R>
          <R delay={100}><h2 className="section__heading section__heading--lg">From discovery to deployment in 90 days</h2></R>
          <div className="process-timeline">
            <R delay={150}>
              <div className="process-step">
                <span className="process-step__number">01</span>
                <h3>Discovery</h3>
                <p>Deep-dive into your business processes, pain points, and opportunities for AI-driven improvement.</p>
              </div>
            </R>
            <R delay={250}>
              <div className="process-step">
                <span className="process-step__number">02</span>
                <h3>Strategy</h3>
                <p>Define your AI roadmap with clear ROI projections, technology selection, and implementation timeline.</p>
              </div>
            </R>
            <R delay={350}>
              <div className="process-step">
                <span className="process-step__number">03</span>
                <h3>Build</h3>
                <p>Rapid prototyping and validation of AI solutions with real data and measurable outcomes.</p>
              </div>
            </R>
            <R delay={450}>
              <div className="process-step">
                <span className="process-step__number">04</span>
                <h3>Scale</h3>
                <p>Production deployment, team training, and ongoing optimisation to maximise long-term value.</p>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* SERVICES SPLIT — AI Consulting */}
      <section className="section section--alt">
        <div className="w">
          <div className="split">
            <R>
              <div className="split__content">
                <span className="section__label">AI Strategy &amp; Consulting</span>
                <h2 className="section__heading">Reduce operational costs by up to 40% with the right AI strategy</h2>
                <p className="section__text">We cut through the noise to identify exactly where AI will deliver the highest ROI for your business. No generic playbooks — just practical, tailored roadmaps built around your specific processes and challenges.</p>
                <ul className="feature-list">
                  <li><CheckCircle size={16} /> AI opportunity assessment &amp; ROI modelling</li>
                  <li><CheckCircle size={16} /> Process mapping &amp; automation audit</li>
                  <li><CheckCircle size={16} /> Technology selection &amp; architecture planning</li>
                  <li><CheckCircle size={16} /> Change management &amp; team enablement</li>
                </ul>
                <Link to="/contact" className="link-arrow">Get Your AI Roadmap <ArrowRight size={14} /></Link>
              </div>
            </R>
            <R delay={150}>
              <div className="split__visual split__visual--gradient1" />
            </R>
          </div>
        </div>
      </section>

      {/* SERVICES SPLIT — AI Development */}
      <section className="section">
        <div className="w">
          <div className="split split--reverse">
            <R>
              <div className="split__content">
                <span className="section__label">AI Development &amp; Automation</span>
                <h2 className="section__heading">Deploy intelligent automation that works while you sleep</h2>
                <p className="section__text">From autonomous AI agents to custom integrations, we build production-ready solutions that reduce manual work, eliminate errors, and free your team to focus on high-value activities.</p>
                <ul className="feature-list">
                  <li><CheckCircle size={16} /> Autonomous AI workflow automation</li>
                  <li><CheckCircle size={16} /> Custom AI agents &amp; chatbots</li>
                  <li><CheckCircle size={16} /> Voice AI &amp; conversational interfaces</li>
                  <li><CheckCircle size={16} /> API integration &amp; data pipelines</li>
                </ul>
                <Link to="/contact" className="link-arrow">See Your Automation Potential <ArrowRight size={14} /></Link>
              </div>
            </R>
            <R delay={150}>
              <div className="split__visual split__visual--gradient2" />
            </R>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section section--alt">
        <div className="w">
          <R><span className="section__label">Case Studies</span></R>
          <R delay={80}><h2 className="section__heading">Proven results across industries</h2></R>
          <R delay={120}><p className="section__text">Every engagement is measured by business outcomes, not lines of code.</p></R>
          <div className="work-grid">
            {work.map((w, i) => (
              <R delay={150 + i * 80} key={i}>
                <div className="work-card">
                  <span className="work-card__metric">{w.metric}</span>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </R>
            ))}
          </div>
          <R delay={500}><Link to="/case-studies" className="link-arrow" style={{ marginTop: 40, display: 'inline-flex' }}>View all case studies &rarr; <ArrowRight size={14} /></Link></R>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--cta">
        <div className="w" style={{ textAlign: 'center', maxWidth: 700 }}>
          <R><h2 className="section__heading section__heading--lg" style={{ textAlign: 'center' }}>Ready to see what AI can<br />do for your business?</h2></R>
          <R delay={100}><p className="section__text" style={{ textAlign: 'center', margin: '0 auto 40px' }}>Book a free 30-minute strategy call. We'll identify your highest-ROI AI opportunities and outline a clear path to implementation.</p></R>
          <R delay={200}><Link to="/contact" className="btn btn--accent btn--lg">Book Your Free Strategy Call <ArrowRight size={15} /></Link></R>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

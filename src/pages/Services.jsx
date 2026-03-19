import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import R from '../components/Reveal'
import ContactSection from '../components/ContactSection'
import MiniCaseStudy from '../components/MiniCaseStudy'
import MiniMetrics from '../components/MiniMetrics'
import MiniProcess from '../components/MiniProcess'
import CapabilityBlock from '../components/CapabilityBlock'

export default function Services() {
  const services = [
    {
      label: "AI Strategy & Consulting",
      title: "Reduce operational costs by up to 40% with the right AI strategy",
      desc: "We cut through the noise to identify exactly where AI will deliver the highest ROI for your business. No generic playbooks — just practical, tailored roadmaps built around your specific processes and challenges.",
      features: ["AI opportunity assessment & ROI modelling", "Process mapping & automation audit", "Technology selection & architecture planning", "Change management & team enablement"],
      cta: "Get Your AI Roadmap",
      visual: (
        <MiniMetrics items={[
          { value: '40%', label: 'Cost Reduction' },
          { value: '90', label: 'Day Implementation' },
          { value: '£250K+', label: 'Annual Savings' },
          { value: '3×', label: 'Efficiency Gain' },
        ]} />
      ),
    },
    {
      label: "Agentic Automation",
      title: "Deploy intelligent automation that works while you sleep",
      desc: "From autonomous AI agents to custom workflow integrations, we build systems that reduce manual work by up to 80%, eliminate errors, and free your team to focus on high-value activities.",
      features: ["Multi-platform workflow automation", "AI-powered data routing & transformation", "Autonomous AI agents for repetitive tasks", "Error handling & self-healing systems"],
      cta: "See Your Automation Potential",
      visual: (
        <MiniCaseStudy
          industry="D2C Retail Brand"
          metric="£120K"
          problem="Manual order processing across 4 platforms consuming 25+ staff hours weekly."
          result="End-to-end automation eliminated manual data entry — saving £120K annually with zero errors."
        />
      ),
    },
    {
      label: "Custom AI Development",
      title: "Production-ready AI solutions that plug directly into your business",
      desc: "From NLP pipelines and document intelligence to voice AI agents, we build scalable AI software that integrates seamlessly with your existing systems and delivers measurable outcomes.",
      features: ["Natural language processing & document intelligence", "Voice AI agents & conversational interfaces", "Predictive analytics & ML models", "API development & third-party integration"],
      cta: "Discuss Your AI Project",
      visual: (
        <MiniProcess steps={[
          { title: 'Discover', desc: 'Analyse your data, systems & business logic' },
          { title: 'Prototype', desc: 'Build & validate with real data in 2 weeks' },
          { title: 'Integrate', desc: 'Connect to your existing tools & workflows' },
          { title: 'Optimise', desc: 'Monitor, iterate & maximise ROI over time' },
        ]} />
      ),
    },
    {
      label: "AI Academy",
      title: "Teaching the next generation to build with AI",
      desc: "Hands-on AI education for school students, university students, and working professionals. Every programme is project-based, using real AI tools employed by industry leaders.",
      features: ["School track (Ages 14–18)", "University track (Undergrad & Postgrad)", "Professional track (4-week intensive)", "Industry certification & internship pathway"],
      cta: "Explore Programmes",
      visual: (
        <CapabilityBlock
          accent="teal"
          items={[
            "Build & deploy a working AI project",
            "Master 5+ professional AI tools",
            "Create production-ready automations",
            "Earn CortexIntel certification",
          ]}
        />
      ),
    },
  ]

  return (
    <>
      <section className="page-hero">
        <div className="w">
          <R><span className="section__label">Services</span></R>
          <R delay={100}><h1 className="page-hero__title">Practical AI solutions that deliver measurable ROI.</h1></R>
          <R delay={200}><p className="page-hero__sub">From strategy to production deployment, we help businesses identify high-value AI opportunities and turn them into competitive advantages — in weeks, not years.</p></R>
        </div>
      </section>

      {services.map((s, i) => (
        <section className={`section ${i % 2 === 0 ? '' : 'section--alt'}`} key={i}>
          <div className="w">
            <div className={`split ${i % 2 !== 0 ? 'split--reverse' : ''}`}>
              <R>
                <div className="split__content">
                  <span className="section__label">{s.label}</span>
                  <h2 className="section__heading">{s.title}</h2>
                  <p className="section__text">{s.desc}</p>
                  <ul className="feature-list">
                    {s.features.map((f, j) => <li key={j}><CheckCircle2 size={16} /> {f}</li>)}
                  </ul>
                  <Link to="/contact" className="btn btn--accent" style={{ marginTop: 24 }}>{s.cta} <ArrowRight size={14} /></Link>
                </div>
              </R>
              <R delay={150}>
                {s.visual}
              </R>
            </div>
          </div>
        </section>
      ))}

      <ContactSection />
    </>
  )
}

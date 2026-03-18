import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import R from '../components/Reveal'
import ContactSection from '../components/ContactSection'

export default function Services() {
  const services = [
    { label: "AI Consulting", title: "Strategy and roadmaps that cut through the noise",
      desc: "Understanding your business objectives, sector, existing processes and challenges as a basis for rapid prototyping. We help you identify high-value AI use cases and build an actionable implementation plan.",
      features: ["AI opportunity assessment", "Process mapping & automation audit", "ROI forecasting & business case", "Technology selection & architecture", "Change management strategy"],
      image: "/ai-strategy.jpg" },
    { label: "Agentic Automation", title: "Intelligent workflows that work while you sleep",
      desc: "We design autonomous AI workflows that reduce manual work, improve accuracy and help teams focus on higher-value activities. From Make.com integrations to custom AI agent pipelines.",
      features: ["Multi-platform workflow automation", "AI-powered data routing & transformation", "Autonomous AI agents for repetitive tasks", "Error handling & self-healing systems", "Performance monitoring dashboards"],
      image: "/agentic-automation.jpg" },
    { label: "Custom AI Development", title: "Bespoke AI software built for your business",
      desc: "From custom models and integrations to new AI-powered features, we build scalable, production-ready AI solutions that plug directly into your product or platform.",
      features: ["Natural language processing pipelines", "Document intelligence & extraction", "Voice AI agents (Vapi + ElevenLabs)", "Predictive analytics & ML models", "API development & third-party integration"],
      image: "/custom-ai-dev.jpg" },
    { label: "AI Academy", title: "Teaching the next generation to build with AI",
      desc: "Hands-on AI education for school students, college students, and working professionals. Every programme is project-based with real AI tools used by industry.",
      features: ["School track (10th & 12th standard)", "College track (undergrad & postgrad)", "Professional track (intensive)", "Industry-recognised certification", "Internship pathway for top performers"],
      image: "/ai-academy.jpg" },
  ]

  return (
    <>
      <section className="page-hero">
        <div className="w">
          <R><span className="section__label">Services</span></R>
          <R delay={100}><h1 className="page-hero__title">AI services that move the needle.</h1></R>
          <R delay={200}><p className="page-hero__sub">From early exploration to full-scale implementation, we bring clarity, strategy and hands-on expertise to help you adopt AI with confidence.</p></R>
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
                  <Link to="/contact" className="btn btn--accent" style={{ marginTop: 24 }}>Get started <ArrowRight size={14} /></Link>
                </div>
              </R>
              <R delay={150}>
                {s.image ? (
                  <div className="split__visual" style={{ overflow: 'hidden', padding: 0, background: 'none', border: 'none' }}>
                    <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '20px' }} />
                  </div>
                ) : (
                  <div className={`split__visual split__visual--gradient${(i % 3) + 1}`} />
                )}
              </R>
            </div>
          </div>
        </section>
      ))}

      <ContactSection />
    </>
  )
}

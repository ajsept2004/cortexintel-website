import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown, Workflow, Cpu, Bot, BarChart3 } from 'lucide-react'
import R from '../components/Reveal'
import ContactSection from '../components/ContactSection'

export default function Home() {
  const services = [
    { icon: <Workflow size={28} />, title: "AI Consulting", desc: "Strategy, roadmaps, and workshops to identify where AI creates the most value for your business." },
    { icon: <Bot size={28} />, title: "Agentic Automation", desc: "Intelligent workflows, AI agents, and integrations that eliminate manual work." },
    { icon: <Cpu size={28} />, title: "AI Development", desc: "Custom AI software — from document processing to predictive analytics and voice AI." },
    { icon: <BarChart3 size={28} />, title: "AI Academy", desc: "Hands-on AI training for school students, college students, and professionals." },
  ]

  const work = [
    { client: "UK Law Firm", desc: "Automated contract review and extraction — 85% time reduction.", metric: "85% faster" },
    { client: "D2C Retail Brand", desc: "End-to-end order processing automation — £120K annual savings.", metric: "£120K saved" },
    { client: "Healthcare Clinic", desc: "Voice AI receptionist providing 24/7 appointment management.", metric: "24/7 coverage" },
    { client: "Financial Services", desc: "Automated monthly reporting from 6 data sources — 92% accuracy.", metric: "92% accurate" },
  ]

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="w hero__inner">
          <R><h1 className="hero__title">Transform your business with<br /><em>intelligent AI solutions</em></h1></R>
          <R delay={150}><p className="hero__sub">CortexIntel is a boutique AI automation agency with offices in London and Kochi, creating innovative artificial intelligence software and education tailored to your unique requirements.</p></R>
          <R delay={300}>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--accent">Let's talk <ArrowRight size={15} /></Link>
              <Link to="/services" className="btn btn--outline">Our services</Link>
            </div>
          </R>
        </div>
        <a href="#intro" className="hero__scroll"><ArrowDown size={20} /></a>
      </section>

      {/* ABOUT INTRO */}
      <section className="section section--alt" id="intro">
        <div className="w">
          <R><span className="section__label">About CortexIntel</span></R>
          <R delay={100}>
            <h2 className="section__heading section__heading--lg">We work to uncover the potential for AI to boost your operations. Automating your existing tasks and creating new AI-driven tools to accelerate your offering.</h2>
          </R>
          <R delay={200}>
            <div className="section__links">
              <Link to="/services" className="section__link">AI Consulting</Link>
              <Link to="/services" className="section__link">Agentic Automation</Link>
              <Link to="/services" className="section__link">AI Development</Link>
              <Link to="/academy" className="section__link">AI Academy</Link>
            </div>
          </R>
          <R delay={300}>
            <Link to="/services" className="link-arrow">Discover more <ArrowRight size={14} /></Link>
          </R>
        </div>
      </section>

      {/* SERVICES SPLIT */}
      <section className="section">
        <div className="w">
          <div className="split">
            <R>
              <div className="split__content">
                <span className="section__label">AI Consulting & Strategy</span>
                <h2 className="section__heading">AI is exciting, but getting started can be tough. We simplify the journey, guiding you from idea to execution.</h2>
                <p className="section__text">At CortexIntel we help both new and established businesses incorporate AI into their workflows. No project is too big or small. Let's build together.</p>
                <Link to="/services" className="link-arrow">Explore AI Consulting <ArrowRight size={14} /></Link>
              </div>
            </R>
            <R delay={150}>
              <div className="split__visual split__visual--gradient" />
            </R>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="w">
          <div className="split split--reverse">
            <R>
              <div className="split__content">
                <span className="section__label">AI Development & Automation</span>
                <h2 className="section__heading">Our developers create the software that AI-enables your business. No jargon. No nonsense.</h2>
                <p className="section__text">Just tailored AI tools that fit your needs. From workflow automation to voice AI agents, we build what you need and help you create what's next.</p>
                <Link to="/services" className="link-arrow">Explore AI Development <ArrowRight size={14} /></Link>
              </div>
            </R>
            <R delay={150}>
              <div className="split__visual split__visual--gradient2" />
            </R>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section">
        <div className="w">
          <R><span className="section__label">Our Work</span></R>
          <R delay={80}><h2 className="section__heading">Real AI solutions for real businesses.</h2></R>
          <div className="work-grid">
            {work.map((w, i) => (
              <R delay={150 + i * 80} key={i}>
                <div className="work-card">
                  <span className="work-card__metric">{w.metric}</span>
                  <h3>{w.client}</h3>
                  <p>{w.desc}</p>
                </div>
              </R>
            ))}
          </div>
          <R delay={500}><Link to="/projects" className="link-arrow" style={{ marginTop: 40, display: 'inline-flex' }}>See all our work <ArrowRight size={14} /></Link></R>
        </div>
      </section>

      {/* UNLOCK CTA */}
      <section className="section section--cta">
        <div className="w" style={{ textAlign: 'center', maxWidth: 700 }}>
          <R><h2 className="section__heading section__heading--lg" style={{ textAlign: 'center' }}>Unlock your<br />AI potential</h2></R>
          <R delay={100}><p className="section__text" style={{ textAlign: 'center', margin: '0 auto 40px' }}>We automate tasks, create AI-driven tools, and embed smart solutions to accelerate your operations. If you're ready to talk, just get in touch. We offer a <strong>free 1-hour consultation call</strong>.</p></R>
          <R delay={200}><Link to="/contact" className="btn btn--accent btn--lg">Find out how <ArrowRight size={15} /></Link></R>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock, Award, BookOpen, GraduationCap, Briefcase } from 'lucide-react'
import R from '../components/Reveal'
import ContactSection from '../components/ContactSection'

export default function Academy() {
  const [tab, setTab] = useState(0)
  const tracks = [
    { title: "School Students", sub: "Ages 14–18", icon: <BookOpen size={18} />, dur: "4–6 Weeks",
      items: ["Introduction to AI & Machine Learning", "Hands-on with ChatGPT, Claude AI & Gemini", "Build your first AI chatbot", "Creative AI — art, music & stories", "Python programming fundamentals", "Team capstone project"],
      outcomes: ["Use 5+ professional AI tools confidently", "Build and deploy a working AI project", "Present technical work to an audience", "Create a digital portfolio"],
      cert: "CortexIntel Certificate + Digital Portfolio" },
    { title: "College Students", sub: "Undergrad & Postgrad", icon: <GraduationCap size={18} />, dur: "8 Weeks",
      items: ["Deep dive into ML & Neural Networks", "Python for Data Science & AI", "AI Workflow Automation (no-code)", "Prompt Engineering masterclass", "API integration & deployment", "Industry capstone with real client"],
      outcomes: ["Build and train ML models", "Create production-ready automations", "Deploy AI solutions via APIs", "Collaborate on industry projects"],
      cert: "CortexIntel Certificate + Internship Pathway" },
    { title: "Professionals", sub: "Working Professionals", icon: <Briefcase size={18} />, dur: "4 Weeks",
      items: ["AI tools for business productivity", "Automating with Make & Zapier", "Building AI agents for your domain", "Data analysis with AI", "Strategy: AI in your business", "1-on-1 implementation coaching"],
      outcomes: ["Automate 3+ business workflows", "Build a custom AI assistant", "Create a 90-day AI plan", "Measure ROI on automation"],
      cert: "CortexIntel Certificate + Implementation Plan" },
  ]
  const t = tracks[tab]

  return (
    <>
      <section className="page-hero">
        <div className="w">
          <R><span className="section__label">AI Academy</span></R>
          <R delay={100}><h1 className="page-hero__title">Learn AI by building.<br />Not by watching.</h1></R>
          <R delay={200}><p className="page-hero__sub">Three tracks for different experience levels. Every programme is 100% hands-on with real AI tools used by industry professionals.</p></R>
        </div>
      </section>

      <section className="section">
        <div className="w">
          <R>
            <div className="tab-bar">
              {tracks.map((tr, i) => (
                <button key={i} className={`tab-btn ${tab === i ? 'tab-btn--active' : ''}`} onClick={() => setTab(i)}>
                  {tr.icon} <span>{tr.title}</span>
                </button>
              ))}
            </div>
          </R>

          <div className="academy-detail" key={tab}>
            <R>
              <div className="academy-main">
                <div className="academy-main__head">
                  <div><h2>{t.title}</h2><p className="academy-main__sub">{t.sub}</p></div>
                  <span className="academy-main__dur"><Clock size={14} /> {t.dur}</span>
                </div>
                <h3 className="academy-main__label">Curriculum</h3>
                <div className="academy-items">
                  {t.items.map((item, j) => (
                    <div className="academy-item" key={j} style={{ animationDelay: `${j * 60}ms` }}>
                      <CheckCircle2 size={16} /> <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="academy-cert"><Award size={16} /> {t.cert}</div>
                <Link to="/contact" className="btn btn--accent" style={{ marginTop: 24 }}>Enrol now <ArrowRight size={14} /></Link>
              </div>
            </R>
            <R delay={150}>
              <div className="academy-side">
                <div className="academy-side__block">
                  <h4>Learning Outcomes</h4>
                  <ul>{t.outcomes.map((o, j) => <li key={j}><CheckCircle2 size={13} /> {o}</li>)}</ul>
                </div>
                <div className="academy-side__block">
                  <h4>Details</h4>
                  <div className="academy-info-row"><span>Duration</span><span>{t.dur}</span></div>
                  <div className="academy-info-row"><span>Format</span><span>In-person, Kochi</span></div>
                  <div className="academy-info-row"><span>Batch Size</span><span>Max 20</span></div>
                  <div className="academy-info-row"><span>Starting</span><span>Summer 2026</span></div>
                </div>
              </div>
            </R>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

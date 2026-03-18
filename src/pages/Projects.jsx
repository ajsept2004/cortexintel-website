import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import R from '../components/Reveal'
import ContactSection from '../components/ContactSection'

export default function Projects() {
  const projects = [
    { client: "UK Law Firm", industry: "Legal", metric: "85%", metricLabel: "time saved", desc: "Automated contract review and extraction for a 50-person law firm, reducing document processing from 4 hours to 35 minutes.", before: "4 hrs per document", after: "35 min per document", tech: ["OpenAI API", "Python", "Make.com"] },
    { client: "D2C Retail Brand", industry: "Retail", metric: "£120K", metricLabel: "annual savings", desc: "End-to-end order processing automation — from intake to fulfilment notifications, eliminating 12 manual steps.", before: "12 manual steps", after: "Fully automated", tech: ["Zapier", "Shopify API", "Claude AI"] },
    { client: "Multi-Location Clinic", industry: "Healthcare", metric: "24/7", metricLabel: "availability", desc: "Voice AI receptionist handling appointments, rescheduling, and patient queries around the clock.", before: "9am–5pm coverage", after: "Round-the-clock AI", tech: ["Vapi.ai", "ElevenLabs", "GoHighLevel"] },
    { client: "Financial Services Firm", industry: "Finance", metric: "92%", metricLabel: "accuracy", desc: "Automated monthly financial reporting from 6 data sources with natural language analysis.", before: "2 days manual work", after: "15 min automated", tech: ["Python", "OpenAI", "Google Sheets API"] },
    { client: "Education Academy", industry: "Education", metric: "3x", metricLabel: "conversion lift", desc: "AI chatbot handling prospective student queries, qualification checks, and campus visit bookings.", before: "48hr response time", after: "Instant AI response", tech: ["Claude AI", "Voiceflow", "WhatsApp API"] },
  ]

  return (
    <>
      <section className="page-hero">
        <div className="w">
          <R><span className="section__label">Our Work</span></R>
          <R delay={100}><h1 className="page-hero__title">Real AI solutions for real businesses.</h1></R>
          <R delay={200}><p className="page-hero__sub">Every project starts with understanding the problem. Here's how we solved them.</p></R>
        </div>
      </section>

      <section className="section">
        <div className="w">
          {projects.map((p, i) => (
            <R delay={i * 80} key={i}>
              <div className="project-card">
                <div className="project-card__head">
                  <div>
                    <span className="project-card__industry">{p.industry}</span>
                    <h3>{p.client}</h3>
                  </div>
                  <div className="project-card__metric">
                    <span className="project-card__metric-n">{p.metric}</span>
                    <span className="project-card__metric-l">{p.metricLabel}</span>
                  </div>
                </div>
                <p>{p.desc}</p>
                <div className="project-card__compare">
                  <div><span className="project-card__label">Before</span><span>{p.before}</span></div>
                  <span className="project-card__arrow">→</span>
                  <div><span className="project-card__label">After</span><span className="project-card__after">{p.after}</span></div>
                </div>
                <div className="project-card__tech">
                  {p.tech.map((t, j) => <span key={j}>{t}</span>)}
                </div>
              </div>
            </R>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  )
}

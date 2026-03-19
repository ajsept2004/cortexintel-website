import R from '../components/Reveal'
import ContactSection from '../components/ContactSection'

const caseStudies = [
  {
    industry: "Legal",
    title: "How a London Law Firm Cut Contract Review Time by 85%",
    challenge: "A 50-person London law firm was drowning in manual contract review. Each document took over 4 hours to process, creating costly bottlenecks that delayed deals and frustrated clients. Senior associates were spending more time on repetitive clause checking than on high-value advisory work.",
    solution: "We deployed an AI-powered contract analysis pipeline that automatically extracts, categorises, and flags key clauses across hundreds of document types. The system integrates directly into the firm's existing workflow, delivering structured outputs that lawyers can review and approve in minutes.",
    metrics: [
      { value: "85%", label: "Time Reduction" },
      { value: "£180K", label: "Annual Savings" },
      { value: "3x", label: "Document Throughput" },
    ],
  },
  {
    industry: "Retail",
    title: "Saving £120K Annually Through Intelligent Order Processing",
    challenge: "A fast-growing D2C brand was manually routing orders across 6 warehouses, leading to frequent shipping errors, delayed fulfilment, and rising customer complaints. The 12-step manual process couldn't keep pace with seasonal demand spikes.",
    solution: "We built an automated order orchestration system with AI-driven demand prediction. Orders are now intelligently routed to the optimal warehouse based on stock levels, proximity, and delivery speed — with zero manual intervention from intake to dispatch.",
    metrics: [
      { value: "£120K", label: "Annual Savings" },
      { value: "94%", label: "Fewer Errors" },
      { value: "2 Days", label: "Faster Fulfilment" },
    ],
  },
  {
    industry: "Healthcare",
    title: "24/7 Patient Access Without Hiring a Single Receptionist",
    challenge: "A multi-location clinic with 4 sites was losing patients due to missed calls and zero out-of-hours coverage. Staff were overwhelmed during peak hours, and evenings and weekends meant voicemail — a dead end for urgent patient needs.",
    solution: "We implemented a Voice AI receptionist that handles appointment bookings, rescheduling, patient queries, and basic triage around the clock. The system speaks naturally, understands context, and escalates complex cases to on-call staff when needed.",
    metrics: [
      { value: "24/7", label: "Patient Coverage" },
      { value: "67%", label: "Fewer Missed Appts" },
      { value: "40%", label: "Cost Reduction" },
    ],
  },
  {
    industry: "Finance",
    title: "From 3-Day Reports to Real-Time Financial Intelligence",
    challenge: "A financial services firm spent 3 days each month compiling compliance reports from 6 disconnected data sources. The manual process was error-prone, stressful, and left no time for the analysis that actually drives decisions.",
    solution: "We automated the entire reporting pipeline — from data extraction and cross-source validation to formatted report generation with natural language summaries. What once took days now runs in minutes with higher accuracy than manual compilation ever achieved.",
    metrics: [
      { value: "92%", label: "Accuracy Rate" },
      { value: "95%", label: "Time Saved" },
      { value: "0", label: "Compliance Penalties" },
    ],
  },
  {
    industry: "Education",
    title: "Tripling Student Enrollment with an AI Admissions Assistant",
    challenge: "An education academy was losing prospective students to faster-responding competitors. With a 48-hour average response time, enquiries went cold before the admissions team could follow up. Manual qualification and scheduling added further delays.",
    solution: "We deployed an AI admissions assistant across web and WhatsApp that instantly handles enquiries, qualifies prospects, answers programme questions, and books campus visits — all in a natural, conversational experience available day and night.",
    metrics: [
      { value: "3x", label: "Conversion Lift" },
      { value: "89%", label: "Query Resolution" },
      { value: "60%", label: "Less Admin Time" },
    ],
  },
]

export default function CaseStudies() {
  return (
    <>
      <section className="page-hero">
        <div className="w">
          <R><span className="section__label">Case Studies</span></R>
          <R delay={100}><h1 className="page-hero__title">Real results. Measurable impact.</h1></R>
          <R delay={200}><p className="page-hero__sub">See how we've helped businesses across industries deploy practical AI solutions that deliver ROI in weeks, not years.</p></R>
        </div>
      </section>

      <section className="section">
        <div className="w">
          {caseStudies.map((cs, i) => (
            <R delay={i * 80} key={i}>
              <div className="case-study-card">
                <span className="case-study-card__tag">{cs.industry}</span>
                <h3 className="case-study-card__title">{cs.title}</h3>

                <div className="case-study-card__body">
                  <div className="case-study-card__section">
                    <h4 className="case-study-card__heading">Challenge</h4>
                    <p>{cs.challenge}</p>
                  </div>

                  <div className="case-study-card__section">
                    <h4 className="case-study-card__heading">Solution</h4>
                    <p>{cs.solution}</p>
                  </div>
                </div>

                <div className="case-study-card__metrics">
                  {cs.metrics.map((m, j) => (
                    <div className="metric-highlight" key={j}>
                      <span className="metric-highlight__number">{m.value}</span>
                      <span className="metric-highlight__label">{m.label}</span>
                    </div>
                  ))}
                </div>

                <span className="case-study-card__link">Read full case study &rarr;</span>
              </div>
            </R>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  )
}

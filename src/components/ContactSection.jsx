import { Send } from 'lucide-react'
import R from './Reveal'

export default function ContactSection() {
  return (
    <section className="contact-cta">
      <div className="w contact-cta__inner">
        <R>
          <div className="contact-cta__text">
            <h2>Ready to see what AI can do for your business?</h2>
            <p>Book a free 30-minute strategy call. We'll identify your highest-ROI AI opportunities and outline a clear path to implementation.</p>
          </div>
        </R>
        <R delay={150}>
          <form className="contact-cta__form" onSubmit={e => e.preventDefault()}>
            <div className="form__row">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email address" />
            </div>
            <input type="text" placeholder="Company (optional)" />
            <select defaultValue="">
              <option value="" disabled>What are you looking for?</option>
              <option>AI Strategy & Consulting</option>
              <option>Workflow Automation</option>
              <option>Custom AI Development</option>
              <option>AI Academy Enrolment</option>
              <option>General Enquiry</option>
            </select>
            <textarea rows={3} placeholder="Tell us about your business challenge..." />
            <button type="submit" className="btn btn--accent btn--lg">
              <Send size={15} /> <span>Book Your Free Strategy Call</span>
            </button>
          </form>
        </R>
      </div>
    </section>
  )
}

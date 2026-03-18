import { Send } from 'lucide-react'
import R from './Reveal'

export default function ContactSection() {
  return (
    <section className="contact-cta">
      <div className="w contact-cta__inner">
        <R>
          <div className="contact-cta__text">
            <h2>Let's build together</h2>
            <p>Call us or fill in your details and we'll be in touch right away.</p>
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
              <option value="" disabled>What can we help with?</option>
              <option>Workflow Automation</option>
              <option>Custom AI Solution</option>
              <option>AI Academy Enrolment</option>
              <option>General Enquiry</option>
            </select>
            <textarea rows={3} placeholder="Tell us a bit about your project..." />
            <button type="submit" className="btn btn--accent">
              <Send size={15} /> <span>Send</span>
            </button>
          </form>
        </R>
      </div>
    </section>
  )
}

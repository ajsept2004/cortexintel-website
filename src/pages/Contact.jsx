import { Mail, Globe, MapPin, Send } from 'lucide-react'
import R from '../components/Reveal'

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="w">
          <R><span className="section__label">Get in Touch</span></R>
          <R delay={100}><h1 className="page-hero__title">Book your free AI strategy call.</h1></R>
          <R delay={200}><p className="page-hero__sub">Tell us about your business challenge and we'll show you where AI can deliver the biggest impact. No commitment, no sales pitch — just practical advice from people who've done it.</p></R>
        </div>
      </section>

      <section className="section">
        <div className="w contact-page">
          <R>
            <div className="contact-page__info">
              <div className="contact-page__loc">
                <h3>London, UK</h3>
                <p><MapPin size={15} /> Kemp House, 152-160 City Road<br />London EC1V 2NX</p>
              </div>
              <div className="contact-page__loc">
                <h3>Kochi, India</h3>
                <p><MapPin size={15} /> Globesta, Sahakarana Road, NH 66<br />Near Broad Bean Hotel, Vyttila<br />Kochi, Kerala 682019</p>
              </div>
              <div className="contact-page__links">
                <p><Mail size={15} /> <a href="mailto:hello@cortexintel.ai">hello@cortexintel.ai</a></p>
                <p><Globe size={15} /> <a href="https://cortexintel.ai">cortexintel.ai</a></p>
              </div>
            </div>
          </R>
          <R delay={150}>
            <form className="contact-page__form" onSubmit={e => e.preventDefault()}>
              <div className="form__row">
                <div className="form__group"><label>Name</label><input type="text" placeholder="Your name" /></div>
                <div className="form__group"><label>Email</label><input type="email" placeholder="you@company.com" /></div>
              </div>
              <div className="form__row">
                <div className="form__group"><label>Phone</label><input type="tel" placeholder="+44 or +91" /></div>
                <div className="form__group"><label>Company</label><input type="text" placeholder="Your company" /></div>
              </div>
              <div className="form__group"><label>I'm interested in</label>
                <select defaultValue=""><option value="" disabled>Select an option</option><option>AI Consulting</option><option>Workflow Automation</option><option>Custom AI Development</option><option>AI Academy</option><option>General Enquiry</option></select>
              </div>
              <div className="form__group"><label>Message</label><textarea rows={5} placeholder="Tell us about your business challenge and what you're hoping to achieve..." /></div>
              <button type="submit" className="btn btn--accent btn--lg btn--full"><Send size={15} /> Book Your Free Strategy Call</button>
            </form>
          </R>
        </div>
      </section>
    </>
  )
}

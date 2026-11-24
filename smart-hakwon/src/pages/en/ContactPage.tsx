import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { DemoForm } from '../../components/DemoForm';

/**
 * Contact — Smart Hakwon
 * Converted from the Claude Design artboard "Contact.dc.html".
 */
export default function ContactPage() {
  return (
    <Layout locale="en" page="contact" title="Contact — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/">Home /{' '}<b>Contact</b></Link>
        <h1>Contact us</h1>
        <p>Questions about classes, placement or the timetable — we're happy to help.</p>
      </section>
      <section className="section">
        <div className="wrap split">
          <div className="info">
            <span className="eyebrow">Contact</span>
            <h2>Let's talk about your child's next step</h2>
            <p lang="ko" style={{ margin: 0, color: "#3B4A63" }}>KakaoTalk is the fastest way to reach us. KakaoTalk ID{' '}<b style={{ color: "var(--navy)" }}>smarthakwon</b></p>
            <a className="row" href={"https://www.google.com/maps/search/?api=1&query=545+Orchard+Road+%2308-10+Far+East+Shopping+Centre+Singapore+238882"}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
  <circle cx="12" cy="9.5" r="2.3" />
</svg><span>545 Orchard Road, #08-10,<br />Far East Shopping Centre, Singapore 238882<br /><b className="link">Open in Google Maps →</b></span></a>
            <a className="row" href="tel:+6583821389"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 2-2Z" /></svg><span>+65 8382 1389{' '}<span style={{ color: "var(--muted)" }}>(Call · WhatsApp)</span></span></a>
            <a className="row" href="mailto:enquiry@smarthakwon.com"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16v12H4V6Z" /><path d="M4 7l8 6 8-6" /></svg><span>enquiry@smarthakwon.com</span></a>
            <div className="chips"><a className="btn btn-primary btn-sm" href="https://wa.me/6583821389">WhatsApp</a><a className="btn btn-ghost btn-sm" href="https://www.instagram.com/smarthakwon_/">Instagram</a><a className="btn btn-ghost btn-sm" href="https://blog.naver.com/smarthakwon">Naver Blog</a></div>
            <div className="photo" style={{ aspectRatio: "16/9", marginTop: "8px" }}>[Wix Google Maps 요소 자리]</div>
          </div>
          <DemoForm name="contact" locale="en" className="f">
            <div className="fr">
              <div className="fld">
                <label htmlFor="c-first">First name</label>
                <input id="c-first" autoComplete="given-name" name="c-first" />
              </div>
              <div className="fld">
                <label htmlFor="c-last">Last name</label>
                <input id="c-last" autoComplete="family-name" name="c-last" />
              </div>
            </div>
            <div className="fr">
              <div className="fld">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" type="email" autoComplete="email" name="c-email" />
              </div>
              <div className="fld">
                <label htmlFor="c-phone">Contact number</label>
                <input id="c-phone" type="tel" autoComplete="tel" name="c-phone" />
              </div>
            </div>
            <div className="fr">
              <div className="fld">
                <label htmlFor="c-rel">Relationship to student</label>
                <select id="c-rel" name="c-rel">
                  <option>Parent</option>
                  <option>Student</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="fld">
                <label htmlFor="c-grade">Grade</label>
                <input id="c-grade" placeholder="e.g. G10" name="c-grade" />
              </div>
            </div>
            <div className="fr">
              <div className="fld">
                <label htmlFor="c-school">School</label>
                <input id="c-school" placeholder="e.g. UWC Dover" name="c-school" />
              </div>
              <div className="fld">
                <label htmlFor="c-subject">Subject</label>
                <input id="c-subject" placeholder="e.g. IB Math AA HL" name="c-subject" />
              </div>
            </div>
            <div className="fld">
              <label htmlFor="c-msg">Message</label>
              <textarea id="c-msg" name="c-msg" />
            </div>
            <p className="consent">By submitting, you agree to our{' '}<Link to="/privacy">Privacy Policy</Link>{' '}(PDPA).</p>
            <button className="btn btn-primary" type="submit">Send Enquiry</button>
          </DemoForm>
        </div>
      </section>
    </Layout>
  );
}

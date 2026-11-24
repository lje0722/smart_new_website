import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { DemoForm } from '../../components/DemoForm';

/**
 * Careers — Smart Hakwon
 * Converted from the Claude Design artboard "Hiring.dc.html".
 */
export default function CareersPage() {
  return (
    <Layout locale="en" page="careers" title="Careers — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/">Home /{' '}<b>Careers</b></Link>
        <h1>Teach Math with Smart Hakwon</h1>
        <p>We're looking for experienced IB and IGCSE Math teachers who design their own lessons and care about every student's progress.</p>
      </section>
      <section className="section" style={{ paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="wrap">
          <div className="jobcard">
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span className="eyebrow">Now hiring</span>
              <h2 className="serif" style={{ fontSize: "28px" }}>Math Tutor — IB / IGCSE</h2>
            </div>
            <dl className="facts-row">
              <div>
                <dt>Subject</dt>
                <dd>Math — IB AA HL/SL, IGCSE Additional &amp; Extended, Primary–G8</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>[Part-time / Full-time]</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Orchard Road, Singapore</dd>
              </div>
              <div>
                <dt>Probation</dt>
                <dd>3 months</dd>
              </div>
            </dl>
            <a className="btn btn-primary" href="#apply">Apply now</a>
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Who we're looking for</span>
            <h2 className="serif" style={{ fontSize: "26px", margin: "10px 0 16px" }}>Qualifications</h2>
            <ul className="list">
              <li>At least 5 years of IB/IGCSE Math teaching experience</li>
              <li>Bachelor's degree in education or a related field</li>
              <li>Singapore citizen or permanent resident</li>
              <li>Able to create your own syllabi and materials</li>
              <li>Strong English proficiency</li>
            </ul>
          </div>
          <div>
            <span className="eyebrow">What you'll do</span>
            <h2 className="serif" style={{ fontSize: "26px", margin: "10px 0 16px" }}>Responsibilities</h2>
            <ul className="list">
              <li>Plan and teach IB/IGCSE Math lessons</li>
              <li>Assess student performance and give feedback</li>
              <li>Keep records of student progress and attendance</li>
              <li>Take part in curriculum development and team meetings</li>
              <li>Create online video content</li>
              <li>Support students outside class, including WhatsApp queries</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section navy" id="apply">
        <div className="wrap split" style={{ alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: "1 1 320px", position: "sticky", top: "100px" }}>
            <span className="eyebrow">How to apply</span>
            <h2 className="serif" style={{ color: "#fff", fontSize: "28px" }}>Application form</h2>
            <ol className="list" style={{ color: "#D3DDF0", fontSize: "15px" }}>
              <li>Record a 20-minute sample lesson on a Math topic of your choice and upload it to Google Drive.</li>
              <li>Submit this form with your CV and the video link.</li>
            </ol>
            <p style={{ margin: 0, color: "#9FB3D6", fontSize: "13.5px" }}>Questions about the role? Email{' '}<b style={{ color: "#fff" }}>enquiry@smarthakwon.com</b></p>
          </div>
          <DemoForm name="careers" locale="en" className="f" style={{ flex: "1 1 560px" }}>
            <p className="fgroup">About you</p>
            <div className="fr">
              <div className="fld">
                <label htmlFor="a-name">Full name *</label>
                <input id="a-name" autoComplete="name" required name="a-name" />
              </div>
              <div className="fld">
                <label htmlFor="a-email">Email *</label>
                <input id="a-email" type="email" autoComplete="email" required name="a-email" />
              </div>
            </div>
            <div className="fr">
              <div className="fld">
                <label htmlFor="a-phone">Phone / WhatsApp *</label>
                <input id="a-phone" type="tel" autoComplete="tel" required name="a-phone" />
              </div>
              <div className="fld">
                <label htmlFor="a-res">Residency status *</label>
                <select id="a-res" required name="a-res">
                  <option value="">Select</option>
                  <option>Singapore Citizen</option>
                  <option>Permanent Resident</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <p className="fgroup">Teaching background</p>
            <div className="fr">
              <div className="fld">
                <label htmlFor="a-years">Years teaching IB/IGCSE Math *</label>
                <input id="a-years" type="number" min="0" required name="a-years" />
              </div>
              <div className="fld">
                <label htmlFor="a-degree">Highest degree &amp; university *</label>
                <input id="a-degree" placeholder="e.g. BSc Mathematics, NUS" required name="a-degree" />
              </div>
            </div>
            <fieldset className="fld">
              <legend>Levels you can teach *</legend>
              <div className="checks">
                <label>
                  <input type="checkbox" />
                  {' '}Primary – G8
                </label>
                <label>
                  <input type="checkbox" />
                  {' '}IGCSE (Add / Extended)
                </label>
                <label>
                  <input type="checkbox" />
                  {' '}IB AA SL
                </label>
                <label>
                  <input type="checkbox" />
                  {' '}IB AA HL
                </label>
              </div>
            </fieldset>
            <p className="fgroup">Availability</p>
            <div className="fr">
              <div className="fld">
                <label htmlFor="a-type">Preferred type *</label>
                <select id="a-type" required name="a-type">
                  <option value="">Select</option>
                  <option>Part-time</option>
                  <option>Full-time</option>
                  <option>Either</option>
                </select>
              </div>
              <div className="fld">
                <label htmlFor="a-start">Earliest start date *</label>
                <input id="a-start" placeholder="e.g. January 2027" required name="a-start" />
              </div>
            </div>
            <fieldset className="fld">
              <legend>When can you teach? *</legend>
              <div className="checks">
                <label>
                  <input type="checkbox" />
                  {' '}Weekday evenings (17:00–21:15)
                </label>
                <label>
                  <input type="checkbox" />
                  {' '}Saturday
                </label>
                <label>
                  <input type="checkbox" />
                  {' '}Sunday
                </label>
              </div>
            </fieldset>
            <p className="fgroup">Documents</p>
            <div className="fld">
              <label htmlFor="a-video">Sample lesson video (Google Drive link) *</label>
              <input id="a-video" type="url" placeholder="https://drive.google.com/…" required name="a-video" />
            </div>
            <div className="fr">
              <div className="fld">
                <label htmlFor="a-cv">CV (PDF) *</label>
                <input id="a-cv" type="file" accept=".pdf,.doc,.docx" required name="a-cv" />
              </div>
              <div className="fld">
                <label htmlFor="a-cover">Cover letter (optional)</label>
                <input id="a-cover" type="file" accept=".pdf,.doc,.docx" name="a-cover" />
              </div>
            </div>
            <div className="fld">
              <label htmlFor="a-heard">How did you hear about us?</label>
              <select id="a-heard" name="a-heard">
                <option value="">Select</option>
                <option>Our website</option>
                <option>LinkedIn</option>
                <option>Job portal</option>
                <option>Referral</option>
                <option>Other</option>
              </select>
            </div>
            <label className="agree">
              <input type="checkbox" required />
              {' '}I agree to the{' '}
              <Link to="/privacy">Privacy Policy</Link>
              {' '}(PDPA) for the use of my data in this application. *
            </label>
            <button className="btn btn-primary" type="submit">Submit Application</button>
          </DemoForm>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">After you apply</span>
            <h2>Interview process</h2>
          </div>
          <div className="grid g3 steps">
            <div className="card">
              <span className="serif" style={{ fontSize: "22px", fontWeight: "700", color: "var(--primary)" }}>01</span>
              <h3>Screening call</h3>
              <p>An initial screening call or Zoom meeting may precede the interview.</p>
            </div>
            <div className="card">
              <span className="serif" style={{ fontSize: "22px", fontWeight: "700", color: "var(--primary)" }}>02</span>
              <h3>On-site interview</h3>
              <p>On-site interviews typically last 1 hour, including a 5–10 minute sample lesson towards the end.</p>
            </div>
            <div className="card">
              <span className="serif" style={{ fontSize: "22px", fontWeight: "700", color: "var(--primary)" }}>03</span>
              <h3>Second round</h3>
              <p>A second round of interviews may be required in some cases.</p>
            </div>
          </div>
          <p className="interview-note"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16v11H8l-4 4V4Z" /></svg><span>Questions will focus on your teaching experience and personal qualities.</span></p>
        </div>
      </section>
    </Layout>
  );
}

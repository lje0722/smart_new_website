import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';

/**
 * Tutors — Smart Hakwon
 * Converted from the Claude Design artboard "Tutors.dc.html".
 */
export default function TutorsPage() {
  return (
    <Layout locale="en" page="tutors" title="Tutors — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/">Home /{' '}<b>Tutors</b></Link>
        <h1>Meet our tutors</h1>
        <p>Highly experienced and knowledgeable educators, dedicated to personalised education tailored to each student's needs.</p>
      </section>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap split" style={{ alignItems: "center", paddingBottom: "56px", borderBottom: "1px solid var(--line)" }}>
          <div className="photo" style={{ aspectRatio: "4/5", maxWidth: "360px", flex: "0 1 360px", margin: "0 auto" }}>[원장님 사진 — DSC01398.jpg]</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span className="eyebrow">Founder &amp; Director</span>
            <h2 className="serif" style={{ fontSize: "32px" }}>Lee Sungyoon{' '}<span style={{ color: "var(--muted)", fontSize: "22px" }}>(Sunny)</span></h2>
            <ul className="list">
              <li>Bachelor's degree in Mathematics from Imperial College London</li>
              <li>Finance MBA from KAIST</li>
              <li>4 years of experience in the finance industry</li>
              <li>Over 15 years of teaching experience</li>
            </ul>
            <p style={{ margin: "8px 0 0", color: "var(--body)" }}>[원장님 인사말 2–3문장 — 선택 사항]</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: "56px" }}>
        <div className="wrap">
          <div className="grid g3">
            <div className="tutor">
              <div className="photo">[사진 — Alex Koo Profile photo]</div>
              <div className="body">
                <span className="name">Alex Koo</span>
                <span className="role">Math</span>
                <ul>
                  <li>Bachelor's degree in Physics from Korea University</li>
                  <li>Master's degree in Electrical Engineering from Columbia University; serves as an Alumni Interviewer</li>
                  <li>16 years of teaching experience in IB, IGCSE and AP curricula</li>
                </ul>
              </div>
            </div>
            <div className="tutor">
              <div className="photo">[사진 — Shresht Grover Profile Photo]</div>
              <div className="body">
                <span className="name">Shresht Grover</span>
                <span className="role">Math</span>
                <ul>
                  <li>Master's and Bachelor's degrees in Mathematics from the University of Oxford</li>
                  <li>Cambridge Award for the highest mark worldwide in IGCSE Additional Mathematics</li>
                  <li>Tutoring experience in IB, A-Level and Oxford MAT</li>
                  <li>Skilled in identifying conceptual gaps and giving clear, level-appropriate explanations</li>
                </ul>
              </div>
            </div>
            <div className="tutor">
              <div className="photo">[사진 — Serena]</div>
              <div className="body">
                <span className="name">Serena</span>
                <span className="role">Math</span>
                <ul>
                  <li>Bachelor's degree in Civil Engineering (Hons), National University of Singapore</li>
                  <li>Master's degree in Education (Secondary Education), University of the People</li>
                  <li>5+ years teaching IB &amp; IGCSE Math and Science</li>
                  <li>Guided 100+ students with proven grade improvement</li>
                </ul>
              </div>
            </div>
            <div className="tutor">
              <div className="photo">[사진 — Sun yuan]</div>
              <div className="body">
                <span className="name">Low Sun Yuan</span>
                <span className="role">Math</span>
                <ul>
                  <li>Bachelor's in Mathematics with a Second Major in Data Analytics, NUS</li>
                  <li>Graduate of the School of the Arts, Singapore (SOTA)</li>
                  <li>Over 5 years of teaching Math and Science, specialising in IB and IGCSE</li>
                  <li>Took part in NUS Teach SG and MOE internships in Math and Science</li>
                </ul>
              </div>
            </div>
            <div className="tutor">
              <div className="photo">[사진 — Nidhi]</div>
              <div className="body">
                <span className="name">Nidhi Dileep Kaneri</span>
                <span className="role">Math</span>
                <ul>
                  <li>Over 4 years of tutoring in IB, IGCSE and Pearson Edexcel curricula</li>
                  <li>Studying at Singapore Management University (SMU); Operations Secretary, SMU Students' Association</li>
                  <li>International tutoring experience, including Math and English support for underprivileged students and a robotics training program</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

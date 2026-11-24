import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import heroImg from '../../assets/hero-student-worksheet.jpg';

/**
 * Home — Smart Hakwon
 * Converted from the Claude Design artboard "Main.dc.html".
 */
export default function HomePage() {
  return (
    <Layout locale="en" page="home" title="Home — Smart Hakwon">
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <span className="pill">ORCHARD ROAD, SINGAPORE · SINCE 2016</span>
            <h1>IB &amp; IGCSE Math, taught by people who know the syllabus</h1>
            <p className="ko" lang="ko">IB/IGCSE Math specialists since 2017 — small regular classes for international-school students</p>
            <p className="lead">Small-group Math classes for international-school students from Primary to Grade 12 — from IGCSE Additional Math to IB Math AA HL — at Far East Shopping Centre.</p>
            <div className="actions"><Link className="btn btn-primary" to="/timetable">View Timetable</Link><Link className="btn btn-ghost" to="/contact">Contact Us</Link></div>
          </div>
          <img className="photo hero-img" src={heroImg} alt="A student working through a graph transformations worksheet with a pencil" width="1343" height="1264" />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Why Smart Hakwon</span>
            <h2>Everything IB &amp; IGCSE families ask for, in one place</h2>
          </div>
          <div className="grid g4">
            <div className="card">
              <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" /></svg></div>
              <h3>IB &amp; IGCSE specialists</h3>
              <p>Focused on IB and IGCSE Math since 2017 — lessons follow the actual syllabus and assessment style.</p>
            </div>
            <div className="card">
              <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <rect x="3" y="4.5" width="18" height="16" rx="2" />
  <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
</svg></div>
              <h3>Classes by school &amp; exam session</h3>
              <p>Separate groups for UWC, OFS and November-session schools, so pacing matches your child's school calendar.</p>
            </div>
            <div className="card">
              <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5V6a2 2 0 0 1 2-2h13v14.5" /><path d="M6 19.5h13" /><path d="M4 19.5A2 2 0 0 0 6 21.5" /></svg></div>
              <h3>Tutors from top universities</h3>
              <p>Imperial College London, Oxford, Columbia and NUS — every tutor's background is published.</p>
            </div>
            <div className="card">
              <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 11l3 3 8-8" /><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" /></svg></div>
              <h3>Final exam preparation</h3>
              <p>Unit-specific questions, curated notes, mock exams, final summaries and Tuesday tutorials before finals.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Explore</span>
            <h2>Where would you like to start?</h2>
          </div>
          <div className="grid g4"><Link className="card gate" to="/timetable">
  <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <rect x="3" y="4.5" width="18" height="16" rx="2" />
  <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
</svg></div>
  <h3>Timetable</h3>
  <p>Find your grade band and see every class, day, time and tutor.</p>
  <span className="link">View timetable →</span>
</Link><Link className="card gate" to="/tutors">
  <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5V6a2 2 0 0 1 2-2h13v14.5" /><path d="M6 19.5h13" /><path d="M4 19.5A2 2 0 0 0 6 21.5" /></svg></div>
  <h3>Tutors</h3>
  <p>See each tutor's degrees, curricula and teaching experience.</p>
  <span className="link">Meet the tutors →</span>
</Link><Link className="card gate" to="/intensive">
  <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" /></svg></div>
  <h3>Intensive Class</h3>
  <p>Focused math courses for Grade 5–12 during the school holidays, online and in-centre.</p>
  <span className="link">See intensive class →</span>
</Link><Link className="card gate" to="/contact">
  <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16v11H8l-4 4V4Z" /></svg></div>
  <h3>Contact</h3>
  <p>Ask about placement or classes — KakaoTalk, WhatsApp or the enquiry form.</p>
  <span className="link">Get in touch →</span>
</Link></div>
        </div>
      </section>
      <section className="section navy">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Testimonials</span>
            <h2>Listen to the stories of students who achieved their goals</h2>
          </div>
          <div className="testi">
            <p className="quote">“Smart Hakwon was a place where I nurtured and expanded my love for math, and had influenced my life in many ways.”</p>
            <p className="who">—{' '}<b>Kim</b>{' '}· Imperial College London · Mathematics</p>
            <details className="more">
              <summary>Read the full story{' '}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></summary>
              <div className="full">
                <p>I attended the Hakwon for around 2 and a half years, and every Saturday, I was excited to go meet Sunny and learn math. He always encouraged questions, and would ensure we got plenty of time every lesson to clear them up. I feel like it helped us target the specific things that were hindering our progress, but it also allowed us to listen to what other people found difficult, preparing us even more.</p>
                <p>As for exam prep, the plethora of unit specific questions available, as well as the carefully curated unit notes were very helpful. There were also many extra sessions to prepare for exams such as Mock exams, final summaries, and Tuesday Tutorial sessions, which allowed students to devote as much or as little time they needed.</p>
                <p>Ultimately, what makes Smart Hakwon a special place for me is Sunny’s care and attention to every student and their progress, where you truly feel encouraged and shameless in trying harder. He is a role model for all students, and also a friend who will always be there for you.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </Layout>
  );
}

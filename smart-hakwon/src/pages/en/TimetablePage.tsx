import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { GradeTabs } from '../../components/GradeTabs';
import { timetableTimetableEn } from '../../content/timetables';

/**
 * Timetable — Smart Hakwon
 * Converted from the Claude Design artboard "Timetable.dc.html".
 */
export default function TimetablePage() {
  return (
    <Layout locale="en" page="timetable" title="Timetable — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/">Home /{' '}<b>Timetable</b></Link>
        <h1>Regular timetable · Aug – Dec 2026</h1>
        <p>Pick your grade band to see every regular class, day, time and tutor.</p>
      </section>
      <section className="section tint" id="timetable">
        <div className="wrap">
          <GradeTabs ariaLabel="Grade band" bands={timetableTimetableEn} />
          <div className="notes">
            <div className="note"><b>What are "Nov" classes?</b>For students taking the IB in the November session — January-intake schools such as ACSI, SJII and HCIS.</div>
            <div className="note"><b>How to register</b>Message us on KakaoTalk (smarthakwon) or WhatsApp (+65 8382 1389). Each class opens once it reaches the minimum number of students.</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

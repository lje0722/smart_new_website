import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { GradeTabs } from '../../components/GradeTabs';
import { intensiveTimetableEn } from '../../content/timetables';

/**
 * Intensive Class — Smart Hakwon
 * Converted from the Claude Design artboard "Summer.dc.html".
 */
export default function IntensivePage() {
  return (
    <Layout locale="en" page="intensive" title="Intensive Class — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/">Home /{' '}<b>Intensive Class</b></Link>
        <h1>Intensive Class</h1>
        <p>Focused IB and IGCSE Math courses for Grade 5–12 during the school holidays, online and in-centre.</p>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Schedule</span>
            <h2>[2027] Intensive Class timetable</h2>
            <p>Shown: 2026 schedule for reference — update before opening registration.</p>
          </div>
          <GradeTabs ariaLabel="Grade band" bands={intensiveTimetableEn} />
          <div className="notes">
            <div className="note"><b>Registration</b>KakaoTalk (smarthakwon) or call 8382-1389. Current regular-course students get priority, and some classes may fill before the program starts.</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

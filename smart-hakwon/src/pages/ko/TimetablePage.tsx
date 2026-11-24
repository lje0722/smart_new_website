import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { GradeTabs } from '../../components/GradeTabs';
import { timetableTimetableKo } from '../../content/timetables';

/**
 * 시간표 — Smart Hakwon
 * Converted from the Claude Design artboard "Timetable-ko.dc.html".
 */
export default function TimetablePage() {
  return (
    <Layout locale="ko" page="timetable" title="시간표 — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/ko">홈 /{' '}<b>시간표</b></Link>
        <h1>정규반 시간표 · 2026년 8월–12월</h1>
        <p>학년을 선택하면 모든 정규반의 요일·시간·담당 강사를 볼 수 있습니다.</p>
      </section>
      <section className="section tint" id="timetable">
        <div className="wrap">
          <GradeTabs ariaLabel="학년 선택" bands={timetableTimetableKo} />
          <div className="notes">
            <div className="note"><b>"Nov"반이란?</b>11월에 IB 시험을 보는 학생(ACSI, SJII, HCIS 등 1월 학기 시작 학교)을 위한 반입니다.</div>
            <div className="note"><b>등록 방법</b>카카오톡(smarthakwon) 또는 WhatsApp(+65 8382 1389)으로 문의해 주세요. 각 반은 최소 인원이 모이면 개강합니다.</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { GradeTabs } from '../../components/GradeTabs';
import { intensiveTimetableKo } from '../../content/timetables';

/**
 * 방학 특강 — Smart Hakwon
 * Converted from the Claude Design artboard "Summer-ko.dc.html".
 */
export default function IntensivePage() {
  return (
    <Layout locale="ko" page="intensive" title="방학 특강 — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/ko">홈 /{' '}<b>방학 특강</b></Link>
        <h1>방학 특강</h1>
        <p>Grade 5–12 대상 방학 기간 IB·IGCSE 수학 집중 과정 (온라인·학원 수업).</p>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">시간표</span>
            <h2>[2027] 방학 특강 시간표</h2>
            <p>참고용 2026년 시간표입니다 — 등록 시작 전 업데이트 예정.</p>
          </div>
          <GradeTabs ariaLabel="학년 선택" bands={intensiveTimetableKo} />
          <div className="notes">
            <div className="note"><b>등록 안내</b>카카오톡(smarthakwon) 또는 전화 8382-1389로 문의해 주세요. 정규반 재원생이 우선 등록되며, 일부 반은 개강 전 마감될 수 있습니다.</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import heroImg from '../../assets/hero-student-worksheet.jpg';

/**
 * 홈 — Smart Hakwon
 * Converted from the Claude Design artboard "Main-ko.dc.html".
 */
export default function HomePage() {
  return (
    <Layout locale="ko" page="home" title="홈 — Smart Hakwon">
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <span className="pill">싱가포르 오차드 로드 · 2016년 설립</span>
            <h1>IB·IGCSE 수학, 커리큘럼을 정확히 아는 강사에게</h1>
            <p className="ko" lang="ko">2017년부터 IB·IGCSE 수학 전문 — 국제학교 학생을 위한 소규모 정규반</p>
            <p className="lead">초등부터 Grade 12까지, IGCSE Additional Math부터 IB Math AA HL까지 소규모 수학 수업을 Far East Shopping Centre에서 진행합니다.</p>
            <div className="actions"><Link className="btn btn-primary" to="/ko/timetable">시간표 보기</Link><Link className="btn btn-ghost" to="/ko/contact">상담 문의</Link></div>
          </div>
          <img className="photo hero-img" src={heroImg} alt="A student working through a graph transformations worksheet with a pencil" width="1343" height="1264" />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">스마트학원을 선택하는 이유</span>
            <h2>IB·IGCSE 학부모님이 찾는 모든 것을 한곳에서</h2>
          </div>
          <div className="grid g4">
            <div className="card">
              <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" /></svg></div>
              <h3>IB·IGCSE 전문</h3>
              <p>2017년부터 IB·IGCSE 수학에 집중해 왔습니다. 실제 시험 범위와 평가 방식에 맞춰 수업합니다.</p>
            </div>
            <div className="card">
              <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <rect x="3" y="4.5" width="18" height="16" rx="2" />
  <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
</svg></div>
              <h3>학교·시험 시기별 분반</h3>
              <p>UWC, OFS, 11월 시험 학교별로 반을 나눠 자녀의 학교 진도와 일정에 맞춥니다.</p>
            </div>
            <div className="card">
              <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5V6a2 2 0 0 1 2-2h13v14.5" /><path d="M6 19.5h13" /><path d="M4 19.5A2 2 0 0 0 6 21.5" /></svg></div>
              <h3>명문대 출신 강사진</h3>
              <p>Imperial College London, Oxford, Columbia, NUS 출신. 모든 강사의 경력을 공개합니다.</p>
            </div>
            <div className="card">
              <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 11l3 3 8-8" /><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" /></svg></div>
              <h3>기말·최종 시험 대비</h3>
              <p>단원별 문제와 정리 노트, 모의고사, 파이널 요약, 화요일 보충 튜토리얼까지 시험 전 집중 대비합니다.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">바로가기</span>
            <h2>어떤 정보를 찾으세요?</h2>
          </div>
          <div className="grid g4"><Link className="card gate" to="/ko/timetable">
  <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <rect x="3" y="4.5" width="18" height="16" rx="2" />
  <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
</svg></div>
  <h3>시간표</h3>
  <p>학년별로 모든 반의 요일·시간·담당 강사를 확인하세요.</p>
  <span className="link">시간표 보기 →</span>
</Link><Link className="card gate" to="/ko/tutors">
  <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5V6a2 2 0 0 1 2-2h13v14.5" /><path d="M6 19.5h13" /><path d="M4 19.5A2 2 0 0 0 6 21.5" /></svg></div>
  <h3>강사진</h3>
  <p>강사별 학력, 담당 커리큘럼, 강의 경력을 확인하세요.</p>
  <span className="link">강사진 보기 →</span>
</Link><Link className="card gate" to="/ko/intensive">
  <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" /></svg></div>
  <h3>방학 특강</h3>
  <p>Grade 5–12 대상 방학 기간 수학 집중 프로그램 (온라인·학원 수업).</p>
  <span className="link">방학 특강 보기 →</span>
</Link><Link className="card gate" to="/ko/contact">
  <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16v11H8l-4 4V4Z" /></svg></div>
  <h3>상담 문의</h3>
  <p>반 배정·수업 문의는 카카오톡, WhatsApp, 문의 양식으로 남겨주세요.</p>
  <span className="link">문의하기 →</span>
</Link></div>
        </div>
      </section>
      <section className="section navy">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">수강 후기</span>
            <h2>목표를 이룬 학생들의 이야기</h2>
          </div>
          <div className="testi">
            <p className="quote">“스마트학원은 수학에 대한 애정을 키우고 넓힌 곳이자, 제 삶에 여러모로 영향을 준 곳이었습니다.”</p>
            <p className="who">—{' '}<b>Kim</b>{' '}· Imperial College London 수학과</p>
            <details className="more">
              <summary>전체 후기 읽기{' '}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></summary>
              <div className="full">
                <p>약 2년 반 동안 학원에 다녔는데, 매주 토요일 Sunny 선생님을 만나 수학을 배우러 가는 날이 늘 기다려졌습니다. 선생님은 언제나 질문을 장려하셨고, 매 수업마다 질문을 해결할 시간을 충분히 주셨습니다. 덕분에 각자의 발목을 잡던 부분을 정확히 짚을 수 있었고, 다른 친구들이 어려워하는 부분도 함께 들으며 더 철저히 준비할 수 있었습니다.</p>
                <p>시험 대비로는 풍부한 단원별 문제와 꼼꼼하게 정리된 단원 노트가 큰 도움이 되었습니다. 모의고사, 파이널 요약, 화요일 튜토리얼 같은 추가 세션도 많아서 각자 필요한 만큼 시간을 들여 준비할 수 있었습니다.</p>
                <p>무엇보다 스마트학원이 제게 특별한 이유는 모든 학생과 그 성장을 살피는 Sunny 선생님의 관심과 배려입니다. 그 안에서 더 노력하는 것이 전혀 부끄럽지 않고 진심으로 응원받는다고 느꼈습니다. 선생님은 모든 학생의 롤모델이자 언제나 곁에 있어 주는 친구 같은 분입니다.</p>
                <p className="note-src">원문 영어, 번역</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </Layout>
  );
}

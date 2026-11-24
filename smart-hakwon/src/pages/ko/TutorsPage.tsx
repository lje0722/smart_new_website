import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';

/**
 * 강사진 — Smart Hakwon
 * Converted from the Claude Design artboard "Tutors-ko.dc.html".
 */
export default function TutorsPage() {
  return (
    <Layout locale="ko" page="tutors" title="강사진 — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/ko">홈 /{' '}<b>강사진</b></Link>
        <h1>강사진 소개</h1>
        <p>풍부한 경험과 전문성을 갖춘 강사진이 학생 한 명 한 명에게 맞춘 수업을 제공합니다.</p>
      </section>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap split" style={{ alignItems: "center", paddingBottom: "56px", borderBottom: "1px solid var(--line)" }}>
          <div className="photo" style={{ aspectRatio: "4/5", maxWidth: "360px", flex: "0 1 360px", margin: "0 auto" }}>[원장님 사진 — DSC01398.jpg]</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span className="eyebrow">원장</span>
            <h2 className="serif" style={{ fontSize: "32px" }}>Lee Sungyoon{' '}<span style={{ color: "var(--muted)", fontSize: "22px" }}>(Sunny)</span></h2>
            <ul className="list">
              <li>Imperial College London 수학 학사</li>
              <li>KAIST 금융 MBA</li>
              <li>금융업계 경력 4년</li>
              <li>강의 경력 15년 이상</li>
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
                <span className="role">수학</span>
                <ul>
                  <li>고려대학교 물리학 학사</li>
                  <li>Columbia University 전기공학 석사, 동문 면접관 활동</li>
                  <li>IB·IGCSE·AP 강의 경력 16년</li>
                </ul>
              </div>
            </div>
            <div className="tutor">
              <div className="photo">[사진 — Shresht Grover Profile Photo]</div>
              <div className="body">
                <span className="name">Shresht Grover</span>
                <span className="role">수학</span>
                <ul>
                  <li>University of Oxford 수학 학사·석사</li>
                  <li>IGCSE Additional Mathematics 전 세계 최고점 Cambridge Award 수상</li>
                  <li>IB, A-Level, Oxford MAT 지도 경력</li>
                  <li>개념의 빈틈을 정확히 찾아 수준에 맞게 명쾌하게 설명</li>
                </ul>
              </div>
            </div>
            <div className="tutor">
              <div className="photo">[사진 — Serena]</div>
              <div className="body">
                <span className="name">Serena</span>
                <span className="role">수학</span>
                <ul>
                  <li>싱가포르국립대(NUS) 토목공학 학사 (Hons)</li>
                  <li>University of the People 교육학 석사 (중등교육)</li>
                  <li>IB·IGCSE 수학·과학 강의 경력 5년 이상</li>
                  <li>100명 이상 지도, 성적 향상 실적</li>
                </ul>
              </div>
            </div>
            <div className="tutor">
              <div className="photo">[사진 — Sun yuan]</div>
              <div className="body">
                <span className="name">Low Sun Yuan</span>
                <span className="role">수학</span>
                <ul>
                  <li>싱가포르국립대(NUS) 수학 학사, 데이터 분석 복수전공</li>
                  <li>School of the Arts, Singapore (SOTA) 졸업</li>
                  <li>IB·IGCSE 중심 수학·과학 강의 경력 5년 이상</li>
                  <li>NUS Teach SG 및 싱가포르 교육부(MOE) 수학·과학 인턴십 참여</li>
                </ul>
              </div>
            </div>
            <div className="tutor">
              <div className="photo">[사진 — Nidhi]</div>
              <div className="body">
                <span className="name">Nidhi Dileep Kaneri</span>
                <span className="role">수학</span>
                <ul>
                  <li>IB·IGCSE·Pearson Edexcel 지도 경력 4년 이상</li>
                  <li>싱가포르경영대(SMU) 재학, SMU 학생회 운영 담당</li>
                  <li>소외계층 학생 수학·영어 지도, 로보틱스 교육 프로그램 등 해외 교육 경험</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

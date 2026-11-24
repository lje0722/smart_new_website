import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { DemoForm } from '../../components/DemoForm';

/**
 * 채용 — Smart Hakwon
 * Converted from the Claude Design artboard "Hiring-ko.dc.html".
 */
export default function CareersPage() {
  return (
    <Layout locale="ko" page="careers" title="채용 — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/ko">홈 /{' '}<b>채용</b></Link>
        <h1>스마트학원 수학 강사 채용</h1>
        <p>직접 수업을 설계하고, 학생 한 명 한 명의 성장을 챙기는 경력 있는 IB·IGCSE 수학 강사를 모십니다.</p>
      </section>
      <section className="section" style={{ paddingTop: "56px", paddingBottom: "56px" }}>
        <div className="wrap">
          <div className="jobcard">
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span className="eyebrow">채용 중</span>
              <h2 className="serif" style={{ fontSize: "28px" }}>수학 강사 — IB / IGCSE</h2>
            </div>
            <dl className="facts-row">
              <div>
                <dt>과목</dt>
                <dd>수학 — IB AA HL/SL, IGCSE Additional·Extended, 초등–G8</dd>
              </div>
              <div>
                <dt>고용 형태</dt>
                <dd>[파트타임 / 풀타임]</dd>
              </div>
              <div>
                <dt>근무지</dt>
                <dd>싱가포르 오차드 로드</dd>
              </div>
              <div>
                <dt>수습 기간</dt>
                <dd>3개월</dd>
              </div>
            </dl>
            <a className="btn btn-primary" href="#apply">지원하기</a>
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap split">
          <div>
            <span className="eyebrow">지원 자격</span>
            <h2 className="serif" style={{ fontSize: "26px", margin: "10px 0 16px" }}>자격 요건</h2>
            <ul className="list">
              <li>IB·IGCSE 수학 강의 경력 5년 이상</li>
              <li>교육학 또는 관련 분야 학사 학위</li>
              <li>싱가포르 시민권자 또는 영주권자</li>
              <li>강의계획서 및 교재 직접 제작 가능</li>
              <li>능숙한 영어 구사</li>
            </ul>
          </div>
          <div>
            <span className="eyebrow">담당 업무</span>
            <h2 className="serif" style={{ fontSize: "26px", margin: "10px 0 16px" }}>담당 업무</h2>
            <ul className="list">
              <li>IB·IGCSE 수학 수업 계획 및 강의</li>
              <li>학생 평가 및 피드백</li>
              <li>학생 진도 및 출결 기록 관리</li>
              <li>커리큘럼 개발 및 팀 회의 참여</li>
              <li>온라인 영상 콘텐츠 제작</li>
              <li>수업 외 학생 응대 (WhatsApp 문의 포함)</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section navy" id="apply">
        <div className="wrap split" style={{ alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: "1 1 320px", position: "sticky", top: "100px" }}>
            <span className="eyebrow">지원 방법</span>
            <h2 className="serif" style={{ color: "#fff", fontSize: "28px" }}>지원서 작성</h2>
            <ol className="list" style={{ color: "#D3DDF0", fontSize: "15px" }}>
              <li>자유로운 수학 주제로 20분 시범 강의를 녹화해 Google Drive에 올려주세요.</li>
              <li>이력서와 영상 링크를 이 양식으로 제출해 주세요.</li>
            </ol>
            <p style={{ margin: 0, color: "#9FB3D6", fontSize: "13.5px" }}>채용 관련 문의:{' '}<b style={{ color: "#fff" }}>enquiry@smarthakwon.com</b></p>
          </div>
          <DemoForm name="careers" locale="ko" className="f" style={{ flex: "1 1 560px" }}>
            <p className="fgroup">기본 정보</p>
            <div className="fr">
              <div className="fld">
                <label htmlFor="a-name">이름 *</label>
                <input id="a-name" autoComplete="name" required name="a-name" />
              </div>
              <div className="fld">
                <label htmlFor="a-email">이메일 *</label>
                <input id="a-email" type="email" autoComplete="email" required name="a-email" />
              </div>
            </div>
            <div className="fr">
              <div className="fld">
                <label htmlFor="a-phone">전화 / WhatsApp *</label>
                <input id="a-phone" type="tel" autoComplete="tel" required name="a-phone" />
              </div>
              <div className="fld">
                <label htmlFor="a-res">체류 자격 *</label>
                <select id="a-res" required name="a-res">
                  <option value="">선택</option>
                  <option>싱가포르 시민권자</option>
                  <option>영주권자</option>
                  <option>기타</option>
                </select>
              </div>
            </div>
            <p className="fgroup">강의 경력</p>
            <div className="fr">
              <div className="fld">
                <label htmlFor="a-years">IB·IGCSE 수학 강의 경력 (년) *</label>
                <input id="a-years" type="number" min="0" required name="a-years" />
              </div>
              <div className="fld">
                <label htmlFor="a-degree">최종 학위 및 학교 *</label>
                <input id="a-degree" placeholder="예: NUS 수학 학사" required name="a-degree" />
              </div>
            </div>
            <fieldset className="fld">
              <legend>강의 가능 레벨 *</legend>
              <div className="checks">
                <label>
                  <input type="checkbox" />
                  {' '}초등 – G8
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
            <p className="fgroup">근무 가능 조건</p>
            <div className="fr">
              <div className="fld">
                <label htmlFor="a-type">희망 고용 형태 *</label>
                <select id="a-type" required name="a-type">
                  <option value="">선택</option>
                  <option>파트타임</option>
                  <option>풀타임</option>
                  <option>무관</option>
                </select>
              </div>
              <div className="fld">
                <label htmlFor="a-start">근무 시작 가능일 *</label>
                <input id="a-start" placeholder="예: 2027년 1월" required name="a-start" />
              </div>
            </div>
            <fieldset className="fld">
              <legend>수업 가능 시간 *</legend>
              <div className="checks">
                <label>
                  <input type="checkbox" />
                  {' '}평일 저녁 (17:00–21:15)
                </label>
                <label>
                  <input type="checkbox" />
                  {' '}토요일
                </label>
                <label>
                  <input type="checkbox" />
                  {' '}일요일
                </label>
              </div>
            </fieldset>
            <p className="fgroup">제출 서류</p>
            <div className="fld">
              <label htmlFor="a-video">시범 강의 영상 (Google Drive 링크) *</label>
              <input id="a-video" type="url" placeholder="https://drive.google.com/…" required name="a-video" />
            </div>
            <div className="fr">
              <div className="fld">
                <label htmlFor="a-cv">이력서 (PDF) *</label>
                <input id="a-cv" type="file" accept=".pdf,.doc,.docx" required name="a-cv" />
              </div>
              <div className="fld">
                <label htmlFor="a-cover">자기소개서 (선택)</label>
                <input id="a-cover" type="file" accept=".pdf,.doc,.docx" name="a-cover" />
              </div>
            </div>
            <div className="fld">
              <label htmlFor="a-heard">저희를 어떻게 알게 되셨나요?</label>
              <select id="a-heard" name="a-heard">
                <option value="">선택</option>
                <option>학원 웹사이트</option>
                <option>LinkedIn</option>
                <option>구인 사이트</option>
                <option>지인 추천</option>
                <option>기타</option>
              </select>
            </div>
            <label className="agree">
              <input type="checkbox" required />
              {' '}지원 정보 처리를 위한{' '}
              <Link to="/ko/privacy">개인정보처리방침</Link>
              {' '}(PDPA)에 동의합니다. *
            </label>
            <button className="btn btn-primary" type="submit">지원서 제출</button>
          </DemoForm>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">지원 이후</span>
            <h2>면접 절차</h2>
          </div>
          <div className="grid g3 steps">
            <div className="card">
              <span className="serif" style={{ fontSize: "22px", fontWeight: "700", color: "var(--primary)" }}>01</span>
              <h3>사전 통화</h3>
              <p>면접 전에 전화 또는 Zoom으로 사전 면담을 진행할 수 있습니다.</p>
            </div>
            <div className="card">
              <span className="serif" style={{ fontSize: "22px", fontWeight: "700", color: "var(--primary)" }}>02</span>
              <h3>대면 면접</h3>
              <p>대면 면접은 보통 1시간 정도이며, 마지막에 5–10분간 시범 강의를 진행합니다.</p>
            </div>
            <div className="card">
              <span className="serif" style={{ fontSize: "22px", fontWeight: "700", color: "var(--primary)" }}>03</span>
              <h3>2차 면접</h3>
              <p>경우에 따라 2차 면접이 있을 수 있습니다.</p>
            </div>
          </div>
          <p className="interview-note"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16v11H8l-4 4V4Z" /></svg><span>면접 질문은 강의 경험과 개인 역량을 중심으로 진행됩니다.</span></p>
        </div>
      </section>
    </Layout>
  );
}

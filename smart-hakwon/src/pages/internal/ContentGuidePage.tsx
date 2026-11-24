import { useEffect } from 'react';
import './ContentGuidePage.css';

/**
 * Internal page (not linked from the site menu): the "콘텐츠 모음 · Wix 가이드"
 * artboard — the old-site content inventory and Wix migration notes.
 * Route: /internal/content-guide
 */
export default function ContentGuidePage() {
  useEffect(() => {
    document.documentElement.lang = 'ko';
    document.title = '콘텐츠 모음 · Wix 이전 가이드';
  }, []);
  return (
    <div className="content-guide" style={{ width: "100%", minHeight: "100%", boxSizing: "border-box", padding: "72px 80px 96px 80px", display: "flex", flexDirection: "column", gap: "56px", background: "#F6F8FC", color: "#12213B", fontFamily: "'Pretendard Variable',Pretendard,sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "900px" }}>
        <span style={{ fontSize: "13px", fontWeight: "700", color: "#2E4F87", letterSpacing: "0.08em" }}>CONTENT LIBRARY · smarthakwon.com 기준 (2026.11.07 수집)</span>
        <h1 className="sh-serif" style={{ margin: 0, fontSize: "44px", fontWeight: "700", color: "#0B1B33" }}>기존 사이트 콘텐츠 모음 &amp; Wix 이전 가이드</h1>
        <p style={{ margin: 0, fontSize: "15.5px", lineHeight: "1.7", color: "#5B6472" }}>기존 사이트 6개 페이지(Home · About · Timetable · Summer program · Tutors · Careers · Contact)에서 새 디자인에 옮길 수 있는 내용을 정리했습니다. 각 항목 오른쪽의 파란 태그가 새 디자인에서 들어갈 위치입니다. 이미 디자인에 반영된 항목은{' '}<strong>반영됨</strong>으로 표시했습니다.</p>
      </div>
      <section style={{ background: "#FFFFFF", border: "1px solid #E2ECFB", borderRadius: "18px", padding: "36px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#0B1B33" }}>1. 공통 정보 (헤더 · 푸터 · SEO)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "200px minmax(0,1fr) 200px", columnGap: "24px", rowGap: "16px", fontSize: "14.5px", lineHeight: "1.6" }}>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>학원명</span>
          <span>SMART HAKWON / Smart Hakwon</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>헤더 로고 · 푸터</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>로고 이미지</span>
          <span className="c-url">https://static.wixstatic.com/media/7ba3d2_4aa5492ecc084721a37efd5041302322~mv2.png</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>헤더 "S" 박스 + 텍스트 자리 교체</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>주소</span>
          <span>545 Orchard Road, #08-10, Far East Shopping Centre, Singapore 238882</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Contact · 푸터 · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>전화</span>
          <span>+65 8382 1389</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Contact · 푸터 · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>이메일</span>
          <span>enquiry@smarthakwon.com{' '}<span style={{ color: "#B42318" }}>(홈 화면에는 smart@smarthakwon.com — 확인 필요)</span></span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Contact · 푸터 · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>카카오톡 ID</span>
          <span>smarthakwon</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Contact · 푸터 · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>Instagram</span>
          <span className="c-url">https://www.instagram.com/smarthakwon_/</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Contact · 푸터 · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>Naver 블로그</span>
          <span className="c-url">https://blog.naver.com/smarthakwon</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Contact · 푸터 · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>SEO 페이지 제목</span>
          <span>SMARTHAKWON | Singapore IB tuition | Academic center specialized in IB/IGCSE</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Wix › 페이지 SEO 설정</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>SEO 설명문</span>
          <span>SMART HAKWON is an IB/IGCSE Math and Economics tuition centre in Orchard, Singapore. Expert tutors help international school students (Grades 6–12) excel in IB exams.</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Wix › 페이지 SEO 설정 (요지 · 원문 확인)</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>공유 썸네일(OG)</span>
          <span className="c-url">https://static.wixstatic.com/media/cf08af_00a889c0966e46b199ed73e44e36c6ba~mv2.png</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Wix › 소셜 공유 이미지</span>
        </div>
      </section>
      <section style={{ background: "#FFFFFF", border: "1px solid #E2ECFB", borderRadius: "18px", padding: "36px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#0B1B33" }}>2. Home</h2>
        <div style={{ display: "grid", gridTemplateColumns: "200px minmax(0,1fr) 200px", columnGap: "24px", rowGap: "16px", fontSize: "14.5px", lineHeight: "1.6" }}>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>기존 메인 문구</span>
          <span>Since 2017, SMARTHAKWON has been providing the best quality education</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Hero 보조 문구 대안</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>기존 태그라인</span>
          <span>Specializing in IB/IGCSE teaching</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Hero 배지 대안</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>About 요약</span>
          <span>SMART HAKWON specializes in IB program. We offer top-notch educational courses to help students prepare for a successful future.</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Why 섹션 소제목 대안</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>강사진 소개 문구</span>
          <span>Our tutors are composed of experts with a deep understanding of the IB program and extensive teaching experience.</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Tutors 섹션 설명 · 반영됨(요약)</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>후기 소개 문구</span>
          <span>Listen to the stories of students who have achieved their goals through Smart Hakwon</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Testimonial 섹션 제목</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>후기 (Kim)</span>
          <span>Kim · Imperial College London, Mathematics · 약 2.5년 수강. 원문 첫 문장: "Smart Hakwon was a place where I nurtured and expanded my love for math." 본문 요지: Sunny 선생님이 질문을 적극 장려, 단원별 연습문제·노트 제공, 모의고사와 화요일 보충 튜토리얼 등 시험 대비 세션. 원문 세 문단 전체 반영</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Home 후기 · 전문 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>후기 하위 항목</span>
          <span>SMART HAKWON FINAL EXAM PREPARATION · SMART HAKWON MATH CLASS · MOST HELPFUL PART OF SMART HAKWON</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>후기 카드 소제목 (후기 추가 시)</span>
        </div>
      </section>
      <section style={{ background: "#FFFFFF", border: "1px solid #E2ECFB", borderRadius: "18px", padding: "36px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#0B1B33" }}>3. About</h2>
        <div style={{ display: "grid", gridTemplateColumns: "200px minmax(0,1fr) 200px", columnGap: "24px", rowGap: "16px", fontSize: "14.5px", lineHeight: "1.6" }}>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>메인 배너</span>
          <span>Students deserve to receive an education at the best academy.</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>About 상단 대형 제목 · 원문 반영</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>Vision 요지</span>
          <span>학생은 지금보다 더 잘할 수 있다는 믿음 · 학생과 연결되어 성공할 수 있다는 자신감을 심어줌 · 지원 방법을 계속 새로 찾음</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>About › Vision · 원문 반영</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>Why 1</span>
          <span>Specialization in IB/IGCSE Math — quality teaching, personalized attention (경제는 삭제)</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>About › Why SMARTHAKWON? · 원문 반영</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>Why 2</span>
          <span>Continuous Learning and Improvement — professional development, educational research</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>About › Why SMARTHAKWON? · 원문 반영</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>연혁</span>
          <span>2016 설립 · 2017년부터 IB/IGCSE 수학 전문</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Our Story · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>대상</span>
          <span>싱가포르 국제학교 Grade 6–12 학생 (실제 시간표는 P3 · G5부터 운영)</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Hero · Trust bar</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>About 사진</span>
          <span className="c-url">https://static.wixstatic.com/media/7ba3d2_5691ef0f50e040c697c41d82561f9df1~mv2.jpg (DSC01934.jpg)</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Home Hero 사진 (4:3)</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>보조 사진</span>
          <span className="c-url">https://static.wixstatic.com/media/7ba3d2_a41ac81b41174956aae55c85ab38c70b~mv2.jpg (DSC01621_edited.jpg)</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Careers Hero 사진 후보</span>
        </div>
      </section>
      <section style={{ background: "#FFFFFF", border: "1px solid #E2ECFB", borderRadius: "18px", padding: "36px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#0B1B33" }}>4. Tutors (6명) — Tutors 페이지 · 반영됨</h2>
          <span style={{ fontSize: "13px", color: "#5B6472" }}>사진 비율 4:5 · 원본 크롭 372×464 → Wix에는 원본 고해상도로 업로드</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid #E2ECFB", borderRadius: "12px", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "180px 120px minmax(0,1.4fr) minmax(0,1fr)", gap: "20px", padding: "12px 20px", background: "#F8FAFF", fontSize: "12px", fontWeight: "700", color: "#5B6472", textTransform: "uppercase", letterSpacing: "0.04em" }}><span>Name</span><span>Subject</span><span>Credentials · Experience</span><span>Photo URL</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "180px 120px minmax(0,1.4fr) minmax(0,1fr)", gap: "20px", padding: "14px 20px", borderTop: "1px solid #EEF3FC", fontSize: "14px", lineHeight: "1.55" }}><span style={{ fontWeight: "700" }}>Lee Sungyoon (Sunny)</span><span>Math · Director</span><span>Bachelor's in Mathematics, Imperial College London · Finance MBA, KAIST · 금융업 4년 · 강의 15년+</span><span className="c-url">7ba3d2_ccb58c8d1ccb4e5e9e1018cbee82ea7e~mv2.jpg</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "180px 120px minmax(0,1.4fr) minmax(0,1fr)", gap: "20px", padding: "14px 20px", borderTop: "1px solid #EEF3FC", fontSize: "14px", lineHeight: "1.55" }}><span style={{ fontWeight: "700" }}>Alex Koo</span><span>Math</span><span>Bachelor's in Physics, Korea University · Master's in Electrical Engineering, Columbia University · Alumni Interviewer · IB/IGCSE/AP 16년</span><span className="c-url">cf08af_3291c99cea57461d8835348351a428ae~mv2.jpg</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "180px 120px minmax(0,1.4fr) minmax(0,1fr)", gap: "20px", padding: "14px 20px", borderTop: "1px solid #EEF3FC", fontSize: "14px", lineHeight: "1.55" }}><span style={{ fontWeight: "700" }}>Serena</span><span>Math · Science</span><span>Bachelor's in Civil Engineering (Hons), NUS · Master's in Education (Secondary), University of the People · IB/IGCSE 5년+ · 100명+ 지도</span><span className="c-url">7ba3d2_dfb182b8a5f240b6954c34fecb6f041c~mv2.png</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "180px 120px minmax(0,1.4fr) minmax(0,1fr)", gap: "20px", padding: "14px 20px", borderTop: "1px solid #EEF3FC", fontSize: "14px", lineHeight: "1.55" }}><span style={{ fontWeight: "700" }}>Shresht Grover</span><span>Math</span><span>Bachelor's &amp; Master's in Mathematics, University of Oxford · Cambridge Award (IGCSE Add Math 세계 최고점) · IB, A-Level, Oxford MAT</span><span className="c-url">cf08af_a885b54a97ce42bf85aaa5aab87a4f7a~mv2.jpg</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "180px 120px minmax(0,1.4fr) minmax(0,1fr)", gap: "20px", padding: "14px 20px", borderTop: "1px solid #EEF3FC", fontSize: "14px", lineHeight: "1.55" }}><span style={{ fontWeight: "700" }}>Nidhi Dileep Kaneri</span><span>Math</span><span>Singapore Management University 재학 · SMU Students' Association Operations Secretary · IB/IGCSE/Edexcel 4년+</span><span className="c-url">7ba3d2_e6ac6f0ebb7c4903ae3e715b6a0affd8~mv2.jpg</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "180px 120px minmax(0,1.4fr) minmax(0,1fr)", gap: "20px", padding: "14px 20px", borderTop: "1px solid #EEF3FC", fontSize: "14px", lineHeight: "1.55" }}><span style={{ fontWeight: "700" }}>Low Sun Yuan</span><span>Math · Science</span><span>Bachelor's in Mathematics (2nd major Data Analytics), NUS · School of the Arts, Singapore 졸업 · 5년+ · NUS Teach SG, MOE 인턴십</span><span className="c-url">7ba3d2_8f9d9311d7744c87a941c0eb00c0f405~mv2.jpg</span></div>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: "#5B6472" }}>사진 URL 앞부분은 모두{' '}<span className="c-url">https://static.wixstatic.com/media/</span>{' '}입니다. 같은 Wix 계정이라면 미디어 관리자에 이미 있으니 그대로 선택하면 됩니다.</p>
      </section>
      <section style={{ background: "#FFFFFF", border: "1px solid #E2ECFB", borderRadius: "18px", padding: "36px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#0B1B33" }}>5. Timetable &amp; Summer Program</h2>
        <div style={{ display: "grid", gridTemplateColumns: "200px minmax(0,1fr) 200px", columnGap: "24px", rowGap: "16px", fontSize: "14.5px", lineHeight: "1.6" }}>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>정규 시간표</span>
          <span>2026.08–12 정규반 34개 (G11–12 IB 13 · G9–10 IGCSE 11 · Primary–G8 10). 전체 데이터는 Home 시간표 탭에 그대로 입력되어 있음</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Timetable · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>Nov 반 설명</span>
          <span>November 세션 IB 응시 학생(ACSI, SJII, HCIS 등 1월 학기 시작 학교)을 위한 반</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Timetable 페이지 하단 · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>등록 안내</span>
          <span>WhatsApp 또는 KakaoTalk으로 문의 · 최소 인원 충족 시 개강</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Timetable 페이지 하단 · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>Summer 2026 일정</span>
          <span>2026.06.29(월) – 08.09(일), 6주 · 온라인/오프라인 병행 · G5–12 · 8월 기준 학년으로 반 배정</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Summer 페이지 (2027 날짜로 교체)</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>Summer 과목</span>
          <span>IB AA HL/SL (G11–12) · Additional Math (G9–10) · Math (G8) · Pre-Algebra (G5)</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Summer 페이지 · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>Summer 규정</span>
          <span>재원생 우선 등록 · 반별 최소 3명 개강 · 문의 KakaoTalk smarthakwon / 8382-1389</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Summer 페이지 · 반영됨</span>
        </div>
      </section>
      <section style={{ background: "#FFFFFF", border: "1px solid #E2ECFB", borderRadius: "18px", padding: "36px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#0B1B33" }}>6. Careers &amp; 문의 양식</h2>
        <div style={{ display: "grid", gridTemplateColumns: "200px minmax(0,1fr) 200px", columnGap: "24px", rowGap: "16px", fontSize: "14.5px", lineHeight: "1.6" }}>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>채용 포지션</span>
          <span>Math tutor — IB / IGCSE (수학 전용. 기존 사이트의 타 과목 포지션은 삭제)</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Careers · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>담당 업무 · 자격</span>
          <span>업무 6개, 자격 5개, 수습 3개월 — 기존 페이지 그대로</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Careers · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>면접 절차</span>
          <span>스크리닝 콜/Zoom → 현장 면접 약 1시간(마지막 5–10분 시범강의) → 일부 2차</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Careers · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>지원 방법</span>
          <span>지원서 작성 → 20분 시범강의 녹화 → Google Drive 공유 → 링크 · CV · 커버레터 이메일 발송</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Careers · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>채용 지원서 항목</span>
          <span>이름 · 연락처 · 경력 연수 · 가르친 커리큘럼(PSLE/IB/IGCSE/Other) · 시작 가능일 · 알게 된 경로</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Careers 폼 · 반영됨</span>
          <span style={{ fontWeight: "700", color: "#3B4A63" }}>상담 문의 양식 항목</span>
          <span>First name · Last name · Email · Contact number · Relationship to student · School · Grade · Subject · Message</span>
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#2E4F87" }}>Contact 폼 · 반영됨</span>
        </div>
      </section>
      <section style={{ background: "#FFF8F6", border: "1px solid #F3D6CF", borderRadius: "18px", padding: "36px 40px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#0B1B33" }}>7. 이전 전에 확인할 것 (기존 사이트 불일치)</h2>
        <ul style={{ margin: 0, paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14.5px", lineHeight: "1.6", color: "#33425D" }}>
          <li>대표 이메일: 홈은{' '}<strong>smart@</strong>, Contact·Careers는{' '}<strong>enquiry@</strong>{' '}— 하나로 통일 (디자인은 enquiry@로 반영)</li>
          <li>Careers 페이지 링크 표기 오류: "atenquiry@smarthakwon.com"</li>
          <li>경제(Economics): 수학 전용으로 확정 → 새 사이트 전체에서 경제·타 과목 언급 삭제함. Wix SEO 설명문에서도 Economics 빼기</li>
          <li>설립 연도: 홈 "Since 2017" vs About "2016 설립, 2017년부터 IB 전문" — 디자인은 후자 기준</li>
          <li>대상 학년: SEO "Grades 6–12" vs 실제 P3 · G5 반 운영 — 디자인은 "Primary – G12"</li>
          <li>강사 이름 표기: 시간표 "Nidihi" / "Nidhi" 혼용 → Nidhi로 통일함. 원장님은 시간표 "Sunny", 강사 페이지 "Lee Sungyoon"</li>
          <li>시간표 "최소 인원" 숫자가 기존 페이지에서 잘려 보임 (Summer는 3명)</li>
          <li>Summer Program은 2026년 일정 — 2027 일정 확정 전까지 섹션 숨김 권장</li>
        </ul>
      </section>
      <section style={{ background: "#0B1B33", borderRadius: "18px", padding: "40px", display: "flex", flexDirection: "column", gap: "22px", color: "#D3DDF0" }}>
        <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#FFFFFF" }}>8. Wix 이전 가이드 — 섹션별 요소 매핑</h2>
        <div style={{ display: "grid", gridTemplateColumns: "220px minmax(0,1fr)", columnGap: "24px", rowGap: "14px", fontSize: "14.5px", lineHeight: "1.6" }}>
          <span style={{ fontWeight: "700", color: "#FFFFFF" }}>디자인 토큰</span>
          <span>Site Theme 색상: Navy #0B1B33 · Primary #1B3B6F · Accent #2E4F87 · Tint #F3F8FF · Line #E2ECFB · Text #12213B / #5B6472. 본문 폰트 Pretendard, 제목 나눔명조 (영문·한글 동일. Wix 폰트 목록에 없으면 "Upload Fonts"로 업로드)</span>
          <span style={{ fontWeight: "700", color: "#FFFFFF" }}>레이아웃</span>
          <span>모든 섹션 콘텐츠 최대폭 1200px, 좌우 여백 64px, 섹션 상하 96px. Wix Studio면 섹션 그리드 그대로, Wix Editor면 섹션 + 스트립으로 구성</span>
          <span style={{ fontWeight: "700", color: "#FFFFFF" }}>Header</span>
          <span>Header → Freeze(고정) ON. 메뉴는 페이지 링크 6개 (/about, /timetable, /intensive-program, /tutors, /contact, /careers) + 오른쪽에 언어 메뉴 EN | 한국어</span>
          <span style={{ fontWeight: "700", color: "#FFFFFF" }}>Timetable</span>
          <span>CMS 컬렉션 "Classes" (course, grade, class, day, time, tutor, band) → Tabs 요소 3개 각각에 Repeater/Table 연결, band로 필터. 학기마다 CMS만 수정하면 페이지 자동 갱신</span>
          <span style={{ fontWeight: "700", color: "#FFFFFF" }}>Tutors</span>
          <span>CMS 컬렉션 "Tutors" (Tutors.csv 가져오기) → 원장님은 상단 큰 프로필, 나머지는 Repeater 3열. 강사 추가·변경 시 디자인 손댈 필요 없음</span>
          <span style={{ fontWeight: "700", color: "#FFFFFF" }}>Summer</span>
          <span>별도 페이지(/intensive-program). 비시즌엔 메뉴 항목만 숨기고 홈 바로가기 카드 문구를 정규반 안내로 교체</span>
          <span style={{ fontWeight: "700", color: "#FFFFFF" }}>Contact · Careers 폼</span>
          <span>Wix Forms로 생성 → 제출 알림 이메일 설정, Relationship은 Dropdown, Careers 커리큘럼은 Checkbox. 카카오톡·WhatsApp은 버튼 링크(https://wa.me/6583821389)</span>
          <span style={{ fontWeight: "700", color: "#FFFFFF" }}>Hover 효과</span>
          <span>카드 hover 떠오름 효과는 Wix Studio의 Hover 상태 / Editor의 Hover box로 대체 가능 (없어도 무방)</span>
          <span style={{ fontWeight: "700", color: "#FFFFFF" }}>다국어</span>
          <span>Wix Multilingual — 기본 English, 추가 Korean. Language Menu 요소를 헤더 상담 버튼 왼쪽에 텍스트형(국기 끄기)으로 배치. 번역은 코드 zip의 Translations-EN-KO.csv 기준, 제목 폰트 나눔명조 · 본문 Pretendard (영문과 동일)</span>
          <span style={{ fontWeight: "700", color: "#FFFFFF" }}>모바일</span>
          <span>Wix는 모바일 레이아웃을 따로 조정해야 함: 4열·3열 카드 → 1열, 시간표 6열 → 3줄 카드형 (Mobile 페이지의 Timetable 시안 참고)</span>
        </div>
      </section>
    </div>
  );
}

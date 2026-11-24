import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { DemoForm } from '../../components/DemoForm';

/**
 * 상담 문의 — Smart Hakwon
 * Converted from the Claude Design artboard "Contact-ko.dc.html".
 */
export default function ContactPage() {
  return (
    <Layout locale="ko" page="contact" title="상담 문의 — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/ko">홈 /{' '}<b>상담 문의</b></Link>
        <h1>상담 문의</h1>
        <p>수업, 반 배정, 시간표 등 궁금한 점을 편하게 문의해 주세요.</p>
      </section>
      <section className="section">
        <div className="wrap split">
          <div className="info">
            <span className="eyebrow">상담 문의</span>
            <h2>자녀의 다음 단계를 함께 이야기해요</h2>
            <p lang="ko" style={{ margin: 0, color: "#3B4A63" }}>상담·등록은 카카오톡이 가장 빠릅니다. 카카오톡 ID{' '}<b style={{ color: "var(--navy)" }}>smarthakwon</b></p>
            <a className="row" href={"https://www.google.com/maps/search/?api=1&query=545+Orchard+Road+%2308-10+Far+East+Shopping+Centre+Singapore+238882"}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
  <circle cx="12" cy="9.5" r="2.3" />
</svg><span>545 Orchard Road, #08-10,<br />Far East Shopping Centre, Singapore 238882<br /><b className="link">Google 지도에서 보기 →</b></span></a>
            <a className="row" href="tel:+6583821389"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 2-2Z" /></svg><span>+65 8382 1389{' '}<span style={{ color: "var(--muted)" }}>(전화 · WhatsApp)</span></span></a>
            <a className="row" href="mailto:enquiry@smarthakwon.com"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16v12H4V6Z" /><path d="M4 7l8 6 8-6" /></svg><span>enquiry@smarthakwon.com</span></a>
            <div className="chips"><a className="btn btn-primary btn-sm" href="https://wa.me/6583821389">WhatsApp</a><a className="btn btn-ghost btn-sm" href="https://www.instagram.com/smarthakwon_/">Instagram</a><a className="btn btn-ghost btn-sm" href="https://blog.naver.com/smarthakwon">네이버 블로그</a></div>
            <div className="photo" style={{ aspectRatio: "16/9", marginTop: "8px" }}>[Wix Google Maps 요소 자리]</div>
          </div>
          <DemoForm name="contact" locale="ko" className="f">
            <div className="fr">
              <div className="fld">
                <label htmlFor="c-first">이름</label>
                <input id="c-first" autoComplete="given-name" name="c-first" />
              </div>
              <div className="fld">
                <label htmlFor="c-last">성</label>
                <input id="c-last" autoComplete="family-name" name="c-last" />
              </div>
            </div>
            <div className="fr">
              <div className="fld">
                <label htmlFor="c-email">이메일</label>
                <input id="c-email" type="email" autoComplete="email" name="c-email" />
              </div>
              <div className="fld">
                <label htmlFor="c-phone">연락처</label>
                <input id="c-phone" type="tel" autoComplete="tel" name="c-phone" />
              </div>
            </div>
            <div className="fr">
              <div className="fld">
                <label htmlFor="c-rel">학생과의 관계</label>
                <select id="c-rel" name="c-rel">
                  <option>학부모</option>
                  <option>학생</option>
                  <option>기타</option>
                </select>
              </div>
              <div className="fld">
                <label htmlFor="c-grade">학년</label>
                <input id="c-grade" placeholder="예: G10" name="c-grade" />
              </div>
            </div>
            <div className="fr">
              <div className="fld">
                <label htmlFor="c-school">학교</label>
                <input id="c-school" placeholder="예: UWC Dover" name="c-school" />
              </div>
              <div className="fld">
                <label htmlFor="c-subject">과목</label>
                <input id="c-subject" placeholder="예: IB Math AA HL" name="c-subject" />
              </div>
            </div>
            <div className="fld">
              <label htmlFor="c-msg">문의 내용</label>
              <textarea id="c-msg" name="c-msg" />
            </div>
            <p className="consent">제출하시면{' '}<Link to="/ko/privacy">개인정보처리방침</Link>{' '}(PDPA)에 동의하는 것으로 간주됩니다.</p>
            <button className="btn btn-primary" type="submit">문의 보내기</button>
          </DemoForm>
        </div>
      </section>
    </Layout>
  );
}

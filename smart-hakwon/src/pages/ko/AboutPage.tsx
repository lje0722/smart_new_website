import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import aboutImg from '../../assets/about-classroom.jpg';

/**
 * 학원 소개 — Smart Hakwon
 * Converted from the Claude Design artboard "About-ko.dc.html".
 */
export default function AboutPage() {
  return (
    <Layout locale="ko" page="about" title="학원 소개 — Smart Hakwon">
      <section className="about-hero">
        <div className="wrap">
          <Link className="crumb" to="/ko">홈 /{' '}<b>학원 소개</b></Link>
          <span className="eyebrow">스마트학원 소개</span>
          <h1>학생들은 최고의 학원에서 교육받을 자격이 있습니다.</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="about-intro">
            <p className="about-lead">2016년에 설립된 스마트학원은 싱가포르 국제학교에 다니는 Grade 6–12 학생들에게 IB·IGCSE 수학 수업을 제공합니다.</p>
            <div className="about-body">
              <p>2017년부터 IB·IGCSE 수학을 전문으로, 학생들이 글로벌 리더로 성장할 수 있도록 최고 수준의 교육을 제공하는 데 전념해 왔습니다.</p>
              <p>최선의 수업을 통해 학생과 학부모님께 저희 교육 방식에 대한 확신을 드리고자 노력합니다.</p>
            </div>
          </div>
          <div className="about-facts">
            <div><b>2016</b><span>설립</span></div>
            <div><b>2017</b><span>IB·IGCSE 전문화</span></div>
            <div><b>Grade 6–12</b><span>국제학교 재학생 대상</span></div>
            <div><b>오차드 로드</b><span>Far East Shopping Centre</span></div>
          </div>
          <img className="about-photo" src={aboutImg} alt="스마트학원 강사가 소규모 반 학생들을 지도하는 모습" width="2541" height="1000" />
        </div>
      </section>
      <section className="section tint">
        <div className="wrap vision">
          <div>
            <span className="eyebrow">교육 철학</span>
            <h2 className="serif">비전</h2>
          </div>
          <div className="vision-text">
            <p className="big">아이들은 지금보다 더 잘하고 싶어 하며, 성장할 잠재력을 가지고 있습니다.</p>
            <p>저희는 아이들과 소통하고 교감하며 해낼 수 있다는 믿음을 심어주는 것을 가장 기본적인 원칙으로 삼습니다. 학생들을 도울 방법은 아직 많다고 믿으며, 그 방법을 찾기 위해 끊임없이 노력합니다.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">스마트학원의 강점</span>
            <h2>왜 스마트학원인가?</h2>
          </div>
          <div className="grid g2">
            <div className="why-card">
              <div className="why-top">
                <span className="num">01</span>
                <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" /></svg></div>
              </div>
              <h3>IB·IGCSE 수학 전문</h3>
              <p>저희의 전문성은 IB·IGCSE 수학을 깊이 있고 폭넓게 가르쳐 학생들이 탄탄한 기초를 쌓도록 하는 데 있습니다. 수준 높은 수업과 학생별 맞춤 관리에 집중하여, 이 중요한 과목에서 학생들의 이해도와 성적을 끌어올립니다.</p>
            </div>
            <div className="why-card">
              <div className="why-top">
                <span className="num">02</span>
                <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5V6a2 2 0 0 1 2-2h13v14.5" /><path d="M6 19.5h13" /><path d="M4 19.5A2 2 0 0 0 6 21.5" /></svg></div>
              </div>
              <h3>끊임없는 연구와 개선</h3>
              <p>저희는 교수법을 꾸준히 발전시키고 최신 교육 흐름을 놓치지 않기 위해 노력합니다.</p>
              <p>정기적인 연수와 교육 연구를 통해 학생들에게 더 풍부한 배움의 경험을 제공하고자 합니다.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';

/**
 * 개인정보처리방침 — Smart Hakwon
 * Converted from the Claude Design artboard "Privacy-ko.dc.html".
 */
export default function PrivacyPage() {
  return (
    <Layout locale="ko" page="privacy" title="개인정보처리방침 — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/ko">홈 /{' '}<b>개인정보처리방침</b></Link>
        <h1>개인정보처리방침</h1>
        <p>싱가포르 개인정보보호법(PDPA)에 따른 개인정보 처리 안내.</p>
      </section>
      <section className="section">
        <div className="prose">
          <p><b>개인정보 보호 안내.</b>{' '}스마트학원은 여러분의 개인정보를 소중히 여깁니다. 본 안내는 싱가포르 개인정보보호법(PDPA)에 따라 개인정보를 수집·이용·제공·관리하는 방법을 설명합니다.</p>
          <h2>수집 목적</h2>
          <p>학생 등록, 학업 진도 관리, 학부모·보호자와의 소통을 위해 개인정보를 수집합니다.</p>
          <h2>수집 항목</h2>
          <p>이름, 연락처, 이메일 주소, 학생 학업 기록.</p>
          <h2>이용 및 제공</h2>
          <p>개인정보는 학원 운영 목적으로 내부에서만 이용됩니다.</p>
          <h2>보유 기간</h2>
          <p>명시된 목적 달성 또는 법령상 요구되는 기간 동안 보관합니다.</p>
          <h2>정보주체의 권리</h2>
          <p>본인의 개인정보에 대한 열람, 정정, 삭제를 요청할 수 있습니다. 개인정보 보호책임자에게 문의해 주세요.</p>
          <h2>개인정보 보호책임자</h2>
          <p>이메일: dataprotection@smarthakwon.com<br />전화: +65 8382 1389</p>
          <h2>방침 변경</h2>
          <p>본 안내는 수시로 변경될 수 있습니다. 최신 내용은 이 페이지에서 확인해 주세요.</p>
        </div>
      </section>
    </Layout>
  );
}

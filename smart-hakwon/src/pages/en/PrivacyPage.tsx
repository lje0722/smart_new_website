import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';

/**
 * Privacy Policy — Smart Hakwon
 * Converted from the Claude Design artboard "Privacy.dc.html".
 */
export default function PrivacyPage() {
  return (
    <Layout locale="en" page="privacy" title="Privacy Policy — Smart Hakwon">
      <section className="page-hero">
        <Link className="crumb" to="/">Home /{' '}<b>Privacy Policy</b></Link>
        <h1>Privacy Policy</h1>
        <p>Data protection notice under Singapore's PDPA.</p>
      </section>
      <section className="section">
        <div className="prose">
          <p><b>Data Protection Notice.</b>{' '}At Smart Hakwon Academic Centre, we value your privacy. This notice outlines how we collect, use, disclose and manage your personal data in accordance with the Personal Data Protection Act (PDPA).</p>
          <h2>Purpose of collection</h2>
          <p>We collect your personal data for student registration, academic progress tracking, and communication with parents/guardians.</p>
          <h2>Types of data collected</h2>
          <p>Name, contact information, email address, student academic records.</p>
          <h2>Usage and disclosure</h2>
          <p>Your personal data will be used internally for operational purposes.</p>
          <h2>Data retention</h2>
          <p>Your data will be retained for as long as required to fulfil the purposes stated or as required by law.</p>
          <h2>Your rights</h2>
          <p>You have the right to access, correct, or request the deletion of your personal data. Please contact our Data Protection Officer for assistance.</p>
          <h2>Data Protection Officer</h2>
          <p>Email: dataprotection@smarthakwon.com<br />Phone: +65 8382 1389</p>
          <h2>Policy updates</h2>
          <p>This notice may be updated periodically. Please visit this page for the latest version.</p>
        </div>
      </section>
    </Layout>
  );
}

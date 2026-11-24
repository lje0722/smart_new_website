import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import aboutImg from '../../assets/about-classroom.jpg';

/**
 * About — Smart Hakwon
 * Converted from the Claude Design artboard "About.dc.html".
 */
export default function AboutPage() {
  return (
    <Layout locale="en" page="about" title="About — Smart Hakwon">
      <section className="about-hero">
        <div className="wrap">
          <Link className="crumb" to="/">Home /{' '}<b>About</b></Link>
          <span className="eyebrow">About Smart Hakwon</span>
          <h1>Students deserve to receive an education at the best academy.</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="about-intro">
            <p className="about-lead">First established in 2016, SMARTHAKWON provides IB/IGCSE Mathematics classes for Grade 6–12 students attending international schools in Singapore.</p>
            <div className="about-body">
              <p>Since 2017, we have been dedicated to offering the best quality education to help students grow into global leaders, specializing in IB/IGCSE math.</p>
              <p>We strive to provide students and parents with confidence in our methods by delivering the best lectures possible.</p>
            </div>
          </div>
          <div className="about-facts">
            <div><b>2016</b><span>First established</span></div>
            <div><b>2017</b><span>Specialising in IB/IGCSE</span></div>
            <div><b>Grade 6–12</b><span>International-school students</span></div>
            <div><b>Orchard Road</b><span>Far East Shopping Centre</span></div>
          </div>
          <img className="about-photo" src={aboutImg} alt="A Smart Hakwon tutor teaching a small group of students in a classroom" width="2541" height="1000" />
        </div>
      </section>
      <section className="section tint">
        <div className="wrap vision">
          <div>
            <span className="eyebrow">Our belief</span>
            <h2 className="serif">Vision</h2>
          </div>
          <div className="vision-text">
            <p className="big">Children want to do better than they currently are and have the potential to improve.</p>
            <p>We consider it a fundamental principle to communicate and connect with them to instill a belief that they can succeed. We believe there are still many ways to support our students, and we continuously strive to find those methods.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">What sets us apart</span>
            <h2>Why SMARTHAKWON?</h2>
          </div>
          <div className="grid g2">
            <div className="why-card">
              <div className="why-top">
                <span className="num">01</span>
                <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" /></svg></div>
              </div>
              <h3>Specialization in IB/IGCSE Math</h3>
              <p>Our expertise lies in delivering comprehensive education in IB/IGCSE math, ensuring that students develop a strong foundation in this subject. With a focus on quality teaching and personalized attention, we aim to enhance students' understanding and performance in this critical area of study.</p>
            </div>
            <div className="why-card">
              <div className="why-top">
                <span className="num">02</span>
                <div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B3B6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5V6a2 2 0 0 1 2-2h13v14.5" /><path d="M6 19.5h13" /><path d="M4 19.5A2 2 0 0 0 6 21.5" /></svg></div>
              </div>
              <h3>Continuous Learning and Improvement</h3>
              <p>We are committed to continuously enhancing our teaching methodologies and staying updated with the latest educational practices.</p>
              <p>Through regular professional development and educational research, we strive to provide an enriching learning experience for our students.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

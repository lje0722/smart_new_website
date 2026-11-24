import { Navigate, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';

import HomeEn from './pages/en/HomePage';
import AboutEn from './pages/en/AboutPage';
import TimetableEn from './pages/en/TimetablePage';
import IntensiveEn from './pages/en/IntensivePage';
import TutorsEn from './pages/en/TutorsPage';
import CareersEn from './pages/en/CareersPage';
import ContactEn from './pages/en/ContactPage';
import PrivacyEn from './pages/en/PrivacyPage';

import HomeKo from './pages/ko/HomePage';
import AboutKo from './pages/ko/AboutPage';
import TimetableKo from './pages/ko/TimetablePage';
import IntensiveKo from './pages/ko/IntensivePage';
import TutorsKo from './pages/ko/TutorsPage';
import CareersKo from './pages/ko/CareersPage';
import ContactKo from './pages/ko/ContactPage';
import PrivacyKo from './pages/ko/PrivacyPage';

import ContentGuidePage from './pages/internal/ContentGuidePage';
import TimetableCmsPage from './pages/demo/TimetableCmsPage';

/**
 * Routes. English lives at the root, Korean under /ko.
 * The design's separate "Mobile" artboards are the same pages — they are
 * served by these routes and adapt through the responsive CSS.
 */
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeEn />} />
        <Route path="/about" element={<AboutEn />} />
        <Route path="/timetable" element={<TimetableEn />} />
        <Route path="/intensive" element={<IntensiveEn />} />
        <Route path="/tutors" element={<TutorsEn />} />
        <Route path="/careers" element={<CareersEn />} />
        <Route path="/contact" element={<ContactEn />} />
        <Route path="/privacy" element={<PrivacyEn />} />

        <Route path="/ko" element={<HomeKo />} />
        <Route path="/ko/about" element={<AboutKo />} />
        <Route path="/ko/timetable" element={<TimetableKo />} />
        <Route path="/ko/intensive" element={<IntensiveKo />} />
        <Route path="/ko/tutors" element={<TutorsKo />} />
        <Route path="/ko/careers" element={<CareersKo />} />
        <Route path="/ko/contact" element={<ContactKo />} />
        <Route path="/ko/privacy" element={<PrivacyKo />} />

        <Route path="/internal/content-guide" element={<ContentGuidePage />} />
        <Route path="/demo/timetable-cms" element={<TimetableCmsPage />} />

        {/* Old Wix URLs and unknown paths */}
        <Route path="/summer-program" element={<Navigate to="/intensive" replace />} />
        <Route path="/intensive-program" element={<Navigate to="/intensive" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

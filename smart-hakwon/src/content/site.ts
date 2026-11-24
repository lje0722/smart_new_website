/**
 * Site-wide content: routes, navigation labels, contact details.
 *
 * Everything a non-developer is likely to change (menu names, phone number,
 * address, social links) lives here, separate from layout code. This also makes
 * it easy to map the content onto Wix CMS collections or Wix Studio text
 * elements later (see README → "Wix Studio Two").
 */

export type Locale = 'en' | 'ko';

export type PageKey =
  | 'home'
  | 'about'
  | 'timetable'
  | 'intensive'
  | 'tutors'
  | 'contact'
  | 'careers'
  | 'privacy';

const slugs: Record<PageKey, string> = {
  home: '',
  about: 'about',
  timetable: 'timetable',
  intensive: 'intensive',
  tutors: 'tutors',
  contact: 'contact',
  careers: 'careers',
  privacy: 'privacy',
};

/** URL for a page in a given language: en → /about, ko → /ko/about */
export function pathFor(page: PageKey, locale: Locale): string {
  const slug = slugs[page];
  if (locale === 'ko') return slug ? `/ko/${slug}` : '/ko';
  return slug ? `/${slug}` : '/';
}

export const pageSlugs = slugs;

/** Labels used in the header menu, mobile menu and footer. */
export const navLabels: Record<Locale, Record<Exclude<PageKey, 'home'>, string>> = {
  en: {
    about: 'About',
    timetable: 'Timetable',
    intensive: 'Intensive Class',
    tutors: 'Tutors',
    contact: 'Contact',
    careers: 'Careers',
    privacy: 'Privacy Policy',
  },
  ko: {
    about: '학원 소개',
    timetable: '시간표',
    intensive: '방학 특강',
    tutors: '강사진',
    contact: '상담 문의',
    careers: '채용',
    privacy: '개인정보처리방침',
  },
};

/** Order of the items in the main menu (header + mobile menu). */
export const mainNav: Exclude<PageKey, 'home' | 'privacy'>[] = [
  'about',
  'timetable',
  'intensive',
  'tutors',
  'contact',
  'careers',
];

/** Order of the items in the footer menu. */
export const footerNav: Exclude<PageKey, 'home'>[] = [...mainNav, 'privacy'];

export const ui: Record<
  Locale,
  {
    cta: string;
    openMenu: string;
    switchLabel: string;
    switchAria: string;
    homeAria: string;
    naverBlog: string;
    kakao: string;
    formNotice: string;
  }
> = {
  en: {
    cta: 'Book a Consultation',
    openMenu: 'Open menu',
    switchLabel: '한국어',
    switchAria: '한국어로 보기',
    homeAria: 'Smart Hakwon home',
    naverBlog: 'Naver Blog',
    kakao: 'KakaoTalk: smarthakwon',
    formNotice:
      'Thank you! (Preview build: this form is not connected yet — please message us on KakaoTalk or WhatsApp.)',
  },
  ko: {
    cta: '상담 신청',
    openMenu: '메뉴 열기',
    switchLabel: 'English',
    switchAria: 'View in English',
    homeAria: 'Smart Hakwon home',
    naverBlog: '네이버 블로그',
    kakao: '카카오톡: smarthakwon',
    formNotice:
      '감사합니다! (미리보기 버전: 아직 폼이 연결되지 않았습니다 — 카카오톡 또는 WhatsApp으로 문의해 주세요.)',
  },
};

export const contact = {
  brand: 'Smart Hakwon',
  addressLine1: '545 Orchard Road, #08-10,',
  addressLine2: 'Far East Shopping Centre, Singapore 238882',
  phone: '+65 8382 1389',
  email: 'enquiry@smarthakwon.com',
  instagram: 'https://www.instagram.com/smarthakwon_/',
  naverBlog: 'https://blog.naver.com/smarthakwon',
  copyright: '© 2026 Smart Hakwon Academic Centre. All rights reserved.',
};

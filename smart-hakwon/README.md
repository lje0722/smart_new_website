# Smart Hakwon website — React + TypeScript

This is a full rebuild of the **SMARTHAKWON 랜딩페이지 개선안** Claude Design canvas as a
React 18 + TypeScript project, built with Vite and React Router. It includes every page in
English and Korean, the responsive (tablet/phone) layouts, the logo, and the photos.

## Run it locally

Requires Node.js 18 or newer (20+ recommended).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run typecheck  # TypeScript only
```

## Pages and URLs

| Page | English | Korean | Design artboards |
|---|---|---|---|
| Home | `/` | `/ko` | Main, Main-ko, Main-m, Main-ko-m |
| About | `/about` | `/ko/about` | About, About-ko |
| Timetable | `/timetable` | `/ko/timetable` | Timetable, Timetable-ko, Timetable-m, Timetable-ko-m |
| Intensive Class (방학 특강) | `/intensive` | `/ko/intensive` | Summer, Summer-ko |
| Tutors | `/tutors` | `/ko/tutors` | Tutors, Tutors-ko |
| Careers | `/careers` | `/ko/careers` | Hiring, Hiring-ko |
| Contact | `/contact` | `/ko/contact` | Contact, Contact-ko |
| Privacy Policy | `/privacy` | `/ko/privacy` | Privacy, Privacy-ko |
| Content library & Wix guide (internal, not in the menu) | `/internal/content-guide` | — | Content |

The design had separate **Mobile** artboards. Those are not separate pages here: the same
route adapts with CSS at **≤1024px (tablet)** and **≤720px (phone)**, matching the mobile
artboards' layout (hamburger menu, stacked sections, card-style timetable rows).

`/summer-program` and `/intensive-program` redirect to `/intensive`. Any unknown URL
redirects to the home page.

## Project structure

```
src/
  main.tsx                 entry: router + global CSS
  App.tsx                  all routes
  styles/global.css        design tokens (:root) + all site styles, merged from the artboards
  assets/                  logo.svg, hero photo, About classroom photo
  content/
    site.ts                menu labels (EN/KO), page URLs, address/phone/social links
    timetables.ts          Timetable + Intensive Class tables (edit classes here)
  components/
    Layout.tsx             page shell: header + <main> + footer, sets <html lang> and title
    SiteHeader.tsx         logo, main menu, language switch, CTA, mobile menu
    SiteFooter.tsx         footer
    GradeTabs.tsx          grade-band tab buttons (keyboard arrows supported)
    ScheduleTable.tsx      one timetable table
    DemoForm.tsx           wrapper for the enquiry and application forms
    Icons.tsx, ScrollToTop.tsx
  lib/forms.ts             submitForm(): the single place to connect a real form backend
  pages/en/*.tsx           one file per English page
  pages/ko/*.tsx           one file per Korean page
  pages/internal/          the content-library artboard
public/favicon.svg         the book mark from the logo
```

### Common edits

- **Menu names, phone number, address, social links:** `src/content/site.ts`
- **Timetable rows (both pages, both languages):** `src/content/timetables.ts`
- **Colours, fonts, content width (`--max: 1200px`), side padding:** `:root` in `src/styles/global.css`
- **Page text:** the matching file in `src/pages/en` or `src/pages/ko`
- **Images:** replace a file in `src/assets/` and keep the same name, or import a new file in the page

## Interactions carried over

- Main menu and footer links, the logo link to the home page, and every in-page button and card link
- The **EN ⇄ KO switch**, which keeps you on the same page in the other language
- The **mobile hamburger menu** (a `<details>` element that closes after you navigate)
- **Grade tabs** on the Timetable and Intensive Class pages
- **"Read the full story"** on the home-page testimonial, which expands and collapses
- **Forms** (Contact enquiry and Careers application): they validate and submit through
  `src/lib/forms.ts` (see "Not transferred exactly" below)

## Not transferred exactly

1. **Forms are not connected to a backend.** The design had none. Submitting shows a
   "preview" notice and logs the values to the console. To go live, connect
   `submitForm()` in `src/lib/forms.ts` to Wix Forms or Wix CMS (via the Wix SDK or REST API),
   or to an email service.
2. **The logo is a recreation.** The book symbol is redrawn as vector shapes in navy tones.
   The "SMART HAKWON / ACADEMIC CENTRE" lettering is traced from a photo of the sign, so its
   edges may look slightly uneven at very large sizes. Replace `src/assets/logo.svg` with the
   original vector file when you have it.
3. **Placeholders that were already in the design are kept as placeholders.** These are the
   photo boxes for the director (DSC01398.jpg) and five tutors on the Tutors page, the map box
   on the Contact page ("Wix Google Maps 요소 자리"), and the "[2027]" schedule labels on the
   Intensive Class page.
4. **The separate mobile artboards (Main-m, Timetable-m and the KO versions)** are served by
   the responsive versions of the desktop pages. Where the older mobile artboards differed in
   content, the newer desktop content is used.
5. **Fonts** (same for EN and KO): headings Nanum Myeongjo (Google Fonts), body Pretendard
   (jsDelivr CDN, SIL OFL). Both are free and can be uploaded to Wix. They need an
   internet connection. To self-host them, download the fonts into `src/assets/fonts` and
   swap the `<link>` in `index.html` for `@font-face` rules.
6. **Editor-only canvas features** have no website equivalent and are not included: sticky
   notes, comments, Tweaks panel properties, and the canvas layout itself.

## Preparing for Wix Studio Two (via Wix MCP)

Wix Studio Two cannot import standard React components as editable Wix elements, and this
project does not assume it can. It is organised so that a later move is mostly a mapping job:

- **Content is separated from layout.** Navigation labels, contact details and all timetable
  rows sit in plain TypeScript data (`src/content/*`). They map directly onto Wix CMS
  collections, for example `Timetable` with fields band, course, grade, class, day, time and
  tutor, and onto site-wide text.
- **Design tokens are centralised** in `:root` in `global.css` (colours, serif/sans fonts,
  1200px content width, padding). Recreate them as the Wix site's theme colours and text
  styles first.
- **Sections are consistent.** Every page is built from repeated blocks: `page-hero`,
  `section` / `section tint` / `section navy`, `.head` (eyebrow + h2), `.grid g2–g5` of
  `.card`s, `.table`, and `.notes`. Each block corresponds to one Wix section or strip with
  a repeater.
- **Assets are local files** in `src/assets/`, ready to upload to the Wix Media Manager.
- **The form backend is one function** (`submitForm`), so it can be pointed at Wix Forms or
  Wix Data later without touching the pages.
- **Interactive parts are small and isolated.** `GradeTabs` and the mobile menu can be rebuilt
  with Wix's native tabs and menu elements, or kept as a custom element / Velo code.

A suggested order when the time comes: theme tokens → header/footer → page sections →
CMS collections (timetables, tutors) → forms → redirects from old URLs.

**Nothing has been published to Wix.**

## Hosting this build elsewhere

`npm run build` produces a static `dist/` folder. Because the site uses client-side routing,
the host must serve `index.html` for unknown paths (an SPA fallback). This is the default on
Netlify and Vercel with a rewrite rule; for other hosts, add an equivalent rewrite.

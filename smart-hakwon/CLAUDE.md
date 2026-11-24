# CLAUDE.md — Smart Hakwon website

React 18 + TypeScript + Vite + React Router v6. Bilingual site: English at `/`, Korean at `/ko`.

## Commands
- `npm run dev`: dev server
- `npm run build`: runs `tsc -b`, then `vite build` (must pass before you finish a change)
- `npm run typecheck`

## Conventions
- Every EN page has a KO twin in `src/pages/ko/` with the same file name. When you change
  the layout or structure of one, make the same change in the other.
- Shared copy and data go in `src/content/`: `site.ts` holds nav, contact and UI strings;
  `timetables.ts` holds the timetable rows. Don't hard-code those values in pages.
- Styling is plain CSS in `src/styles/global.css`, using class names from the original design
  (`section`, `head`, `card`, `grid g4`, `table`/`tr`, `page-hero`…). Reuse existing classes
  before adding new ones, and use the `:root` tokens (`--navy`, `--primary`, `--serif`,
  `--max`…) instead of raw values.
- Breakpoints: `max-width:1024px` (tablet) and `max-width:720px` (phone). Check both views.
- Korean typography is switched by `<html lang="ko">`, which `Layout` sets
  (`:root:lang(ko)` rules at the end of `global.css`).
- Internal links use `<Link to="...">`, and the language switch uses `pathFor(page, locale)`.
- Forms submit through `submitForm()` in `src/lib/forms.ts`. Inputs carry `name` = `id`.
- The site will later be migrated to Wix Studio Two through Wix MCP. Keep content in data
  files and keep components small and presentational, so they map onto Wix sections,
  repeaters and CMS collections. Don't publish to Wix unless the user explicitly asks.

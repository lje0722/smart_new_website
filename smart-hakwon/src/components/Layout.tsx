import { useEffect, type ReactNode } from 'react';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import type { Locale, PageKey } from '../content/site';

interface LayoutProps {
  locale: Locale;
  page: PageKey;
  /** Browser tab title, e.g. "About — Smart Hakwon". */
  title: string;
  children: ReactNode;
}

/**
 * Page shell shared by every public page: header, <main>, footer.
 * Also sets <html lang> (drives the Korean font + line-breaking rules in global.css)
 * and the document title.
 */
export function Layout({ locale, page, title, children }: LayoutProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = title;
  }, [locale, title]);

  return (
    <div
      className="page-root"
      style={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#FFFFFF',
        color: '#12213B',
      }}
    >
      <SiteHeader locale={locale} page={page} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}

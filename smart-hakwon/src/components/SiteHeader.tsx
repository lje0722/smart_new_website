import { useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoUrl from '../assets/logo.svg';
import { GlobeIcon, MenuIcon } from './Icons';
import { mainNav, navLabels, pathFor, ui, type Locale, type PageKey } from '../content/site';

interface SiteHeaderProps {
  locale: Locale;
  /** The page being shown, used to point the language switch at the same page. */
  page: PageKey;
}

/** Sticky top bar: logo, main menu, language switch, CTA and the mobile menu. */
export function SiteHeader({ locale, page }: SiteHeaderProps) {
  const t = ui[locale];
  const other: Locale = locale === 'en' ? 'ko' : 'en';
  const menuRef = useRef<HTMLDetailsElement>(null);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    if (menuRef.current) menuRef.current.open = false;
  }, [location.pathname]);

  const links = mainNav.map((key) => (
    <NavLink
      key={key}
      to={pathFor(key, locale)}
      end
      aria-current={key === page ? 'page' : undefined}
    >
      {navLabels[locale][key]}
    </NavLink>
  ));

  return (
    <header className="site-header">
      <div className="bar" style={{ position: 'relative' }}>
        <Link className="logo" to={pathFor('home', locale)} aria-label={t.homeAria}>
          <img
            className="logo-img"
            src={logoUrl}
            alt="Smart Hakwon Academic Centre"
            width={132}
            height={64}
          />
        </Link>
        <nav className="nav" aria-label="Main">
          {links}
        </nav>
        <div className="right">
          <Link
            className="lang"
            to={pathFor(page, other)}
            hrefLang={other}
            lang={other}
            aria-label={t.switchAria}
          >
            <GlobeIcon />
            <span>{t.switchLabel}</span>
          </Link>
          <Link className="btn btn-primary header-cta" to={pathFor('contact', locale)}>
            {t.cta}
          </Link>
          <details className="menu" ref={menuRef}>
            <summary aria-label={t.openMenu}>
              <MenuIcon />
            </summary>
            <div className="menu-panel">
              {mainNav.map((key) => (
                <Link key={key} to={pathFor(key, locale)}>
                  {navLabels[locale][key]}
                </Link>
              ))}
              <Link className="btn btn-primary" to={pathFor('contact', locale)}>
                {t.cta}
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

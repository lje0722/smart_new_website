import { Link } from 'react-router-dom';
import { contact, footerNav, navLabels, pathFor, ui, type Locale } from '../content/site';

/** Navy footer: address, footer menu, social links and copyright. */
export function SiteFooter({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <span className="brand">{contact.brand}</span>
          {contact.addressLine1}
          <br />
          {contact.addressLine2}
          <br />
          {contact.phone} · {contact.email}
        </div>
        <nav aria-label="Footer">
          {footerNav.map((key) => (
            <Link key={key} to={pathFor(key, locale)}>
              {navLabels[locale][key]}
            </Link>
          ))}
        </nav>
        <div>
          <div style={{ display: 'flex', gap: 18, marginBottom: 10 }}>
            <a href={contact.instagram}>Instagram</a>
            <a href={contact.naverBlog}>{t.naverBlog}</a>
            <span>{t.kakao}</span>
          </div>
          <span className="copy">{contact.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

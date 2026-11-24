import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to the top on page change, or to #anchor when the URL has one. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

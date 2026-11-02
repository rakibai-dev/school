import { href, type RoutePath } from '../router';
import { school } from '../data/school';
import { TernMark } from './TernMark';
import { useVisit } from './VisitProvider';
import './SiteHeader.css';
import { useEffect, useRef, useState } from 'react';

const links: { path: RoutePath; label: string }[] = [
  { path: '/about', label: 'About' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/news', label: 'News' },
];

export function SiteHeader({ current }: { current: RoutePath }) {
  const { openVisit } = useVisit();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [current]);

  useEffect(() => {
    document.documentElement.classList.toggle('no-scroll', menuOpen);
    if (!menuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('no-scroll');
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      const first = panelRef.current?.querySelector<HTMLElement>('a, button');
      first?.focus();
    }
  }, [menuOpen]);

  const onVisit = () => {
    setMenuOpen(false);
    openVisit();
  };

  return (
    <header className="site-header" data-menu={menuOpen ? 'open' : 'closed'}>
      <div className="site-header__inner wrap">
        <a className="brand" href={href('/')} aria-label={`${school.name}, home`}>
          <TernMark className="brand__mark" />
          <span className="brand__name">Tern Point</span>
        </a>

        <nav className="site-nav" aria-label="Main">
          <ul role="list" className="site-nav__list">
            {links.map((link) => (
              <li key={link.path}>
                <a
                  className="site-nav__link"
                  href={href(link.path)}
                  aria-current={current === link.path ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <button type="button" className="btn btn--solid site-header__cta" onClick={openVisit}>
            Book a visit
          </button>
          <button
            type="button"
            ref={menuButtonRef}
            className="site-header__menu"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="site-header__menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <div
        id="site-menu"
        ref={panelRef}
        className="site-menu"
        hidden={!menuOpen}
        aria-label="Menu"
      >
        <div className="site-menu__inner wrap">
          <nav aria-label="Pages">
            <ul role="list" className="site-menu__list">
              {[{ path: '/' as RoutePath, label: 'Home' }, ...links].map((link) => (
                <li key={link.path}>
                  <a
                    className="site-menu__link"
                    href={href(link.path)}
                    aria-current={current === link.path ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-menu__aside">
            <button type="button" className="btn btn--solid" onClick={onVisit}>
              Book a visit
            </button>
            <p className="site-menu__contact">
              {school.address.street}, {school.address.town}
              <br />
              <a className="text-link" href={school.phoneHref}>
                {school.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

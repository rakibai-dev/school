import { useCallback, useEffect, useRef } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { VisitProvider } from './components/VisitProvider';
import { routeTitles, useRoute } from './router';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import News from './pages/News';

const pages = {
  '/': Home,
  '/about': About,
  '/admissions': Admissions,
  '/news': News,
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  const route = useRoute();
  const mainRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);
  const Page = pages[route.path];

  useEffect(() => {
    document.title = routeTitles[route.path];
  }, [route.path]);

  // Keep the browser out of scroll restoration: the router owns this.
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    const behaviour: ScrollBehavior = prefersReducedMotion() ? 'auto' : 'smooth';
    let cancelled = false;

    const scrollToTarget = (smooth: boolean) => {
      const target = route.anchor ? document.getElementById(route.anchor) : null;

      if (target) {
        target.scrollIntoView({ block: 'start', behavior: smooth ? behaviour : 'auto' });
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: smooth ? behaviour : 'auto' });
    };

    if (route.anchor) {
      scrollToTarget(!isFirstRender.current);
    } else if (!isFirstRender.current) {
      window.scrollTo({ top: 0, left: 0 });
      mainRef.current?.querySelector<HTMLElement>('h1')?.focus({ preventScroll: true });
    }
    isFirstRender.current = false;

    // Images and fonts above the anchor can shift the layout after we scroll,
    // so correct the position once the page has settled.
    if (route.anchor) {
      const settle = () => {
        if (!cancelled) scrollToTarget(false);
      };
      const timers = [window.setTimeout(settle, 180), window.setTimeout(settle, 600)];
      window.addEventListener('load', settle, { once: true });
      document.fonts?.ready.then(settle).catch(() => undefined);

      return () => {
        cancelled = true;
        timers.forEach((timer) => window.clearTimeout(timer));
        window.removeEventListener('load', settle);
      };
    }

    return undefined;
  }, [route.path, route.anchor]);

  const skipToContent = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    mainRef.current?.focus();
    mainRef.current?.scrollIntoView({ block: 'start', behavior: 'auto' });
  }, []);

  return (
    <VisitProvider>
      <div className="paper-grain" aria-hidden="true" />
      <a className="skip-link" href="#main" onClick={skipToContent}>
        Skip to content
      </a>
      <SiteHeader current={route.path} />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Page key={route.path} />
      </main>
      <SiteFooter />
    </VisitProvider>
  );
}

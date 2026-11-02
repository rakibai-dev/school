import { useEffect, useMemo, useState } from 'react';

export type RoutePath = '/' | '/about' | '/admissions' | '/news';

const ROUTES: RoutePath[] = ['/', '/about', '/admissions', '/news'];

export type Route = {
  path: RoutePath;
  /** Optional in-page target, e.g. #/admissions#apply */
  anchor: string | null;
};

function normalize(raw: string): Route {
  const cleaned = raw.replace(/^#/, '');
  const [rawPath, rawAnchor] = cleaned.split('#');
  const candidate = (rawPath === '' ? '/' : rawPath) as RoutePath;
  const path = ROUTES.includes(candidate) ? candidate : '/';
  return { path, anchor: rawAnchor || null };
}

export function useRoute(): Route {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return useMemo(() => normalize(hash), [hash]);
}

export function href(path: RoutePath, anchor?: string): string {
  return `#${path}${anchor ? `#${anchor}` : ''}`;
}

export const routeTitles: Record<RoutePath, string> = {
  '/': 'Tern Point School — a day school on Sablewick Harbor',
  '/about': 'About Tern Point School',
  '/admissions': 'Admissions — Tern Point School',
  '/news': 'Letters from the harbor — Tern Point School',
};

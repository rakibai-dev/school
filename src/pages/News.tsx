import { useEffect, useMemo, useRef, useState } from 'react';
import { posts, type Post } from '../data/news';
import { useVisit } from '../components/VisitProvider';
import './pages.css';

const terms = ['All', 'Autumn 2026', 'Spring 2026', 'Winter 2026', 'Autumn 2025'] as const;

function PostBody({ post, onClose }: { post: Post; onClose: () => void }) {
  return (
    <article className="post" aria-labelledby="post-title">
      <button type="button" className="post__back" onClick={onClose}>
        All letters
      </button>
      <p className="post__meta">
        {post.date} · {post.term}
      </p>
      <h2 className="post__title" id="post-title">
        {post.title}
      </h2>
      <p className="post__byline">{post.byline}</p>
      {post.image ? (
        <figure className="post__figure">
          <img src={post.image} alt="" width={1200} height={900} />
        </figure>
      ) : null}
      <div className="post__body">
        <p className="post__lead">{post.excerpt}</p>
        {post.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <p className="post__signoff">— {post.byline}</p>
    </article>
  );
}

export default function News() {
  const [term, setTerm] = useState<(typeof terms)[number]>('All');
  const [openId, setOpenId] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const { openVisit } = useVisit();

  const filtered = useMemo(
    () => (term === 'All' ? posts : posts.filter((post) => post.term === term)),
    [term],
  );
  const openPost = posts.find((post) => post.id === openId) ?? null;

  useEffect(() => {
    if (!openId) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenId(null);
    };
    document.addEventListener('keydown', onKey);
    window.scrollTo({ top: 0 });
    return () => document.removeEventListener('keydown', onKey);
  }, [openId]);

  return (
    <>
      <section className="letters-head" aria-labelledby="letters-title">
        <div className="wrap">
          <h1 className="letters-head__title" id="letters-title">
            Letters from the harbor.
          </h1>
          <div className="letters-head__aside">
            <p>
              Short reports from the school, written by whoever was there: what the water was doing,
              what the children noticed, and what we got wrong. Roughly one letter a month during
              term.
            </p>
            <div className="letters-head__filters" role="group" aria-label="Filter letters by term">
              {terms.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="chip"
                  aria-pressed={term === option}
                  onClick={() => {
                    setTerm(option);
                    setOpenId(null);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="wrap letters">
        {openPost ? (
          <PostBody post={openPost} onClose={() => setOpenId(null)} />
        ) : (
          <>
            <p className="letters__count" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? 'letter' : 'letters'}
              {term === 'All' ? ' so far' : ` from ${term}`}
            </p>
            {filtered.length === 0 ? (
              <div className="letters__empty">
                <h2>Nothing filed under {term} yet.</h2>
                <p>
                  Try another term, or{' '}
                  <button type="button" className="text-link" onClick={() => setTerm('All')}>
                    read all the letters
                  </button>
                  .
                </p>
              </div>
            ) : (
              <ul className="letters__list" role="list" ref={listRef}>
                {filtered.map((post) => (
                  <li key={post.id} className="letter" data-with-image={Boolean(post.image)}>
                    {post.image ? (
                      <button
                        type="button"
                        className="letter__thumb"
                        onClick={() => setOpenId(post.id)}
                        aria-label={`Read “${post.title}”`}
                        tabIndex={-1}
                      >
                        <img src={post.image} alt="" width={1200} height={900} loading="lazy" />
                      </button>
                    ) : null}
                    <div className="letter__text">
                      <p className="letter__meta">
                        {post.date} · {post.byline}
                      </p>
                      <h2 className="letter__title">
                        <button type="button" onClick={() => setOpenId(post.id)}>
                          {post.title}
                        </button>
                      </h2>
                      <p className="letter__excerpt">{post.excerpt}</p>
                      <button
                        type="button"
                        className="letter__more"
                        onClick={() => setOpenId(post.id)}
                      >
                        Read the letter
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>

      <section className="apply-band section" aria-labelledby="letters-cta">
        <div className="wrap apply-band__inner">
          <div>
            <h2 className="apply-band__title" id="letters-cta">
              Come and see the thing itself.
            </h2>
            <p className="apply-band__body">
              Letters are a poor substitute for standing on the dock in a cold wind while a Class 7
              student explains the transect.
            </p>
          </div>
          <div className="apply-band__actions">
            <button type="button" className="btn btn--solid" onClick={openVisit}>
              Book a visiting morning
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

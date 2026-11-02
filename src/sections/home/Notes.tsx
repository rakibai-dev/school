import { href } from '../../router';
import { posts } from '../../data/news';
import { SectionHead } from '../../components/SectionHead';

export function Notes() {
  const [featured, ...rest] = posts;

  return (
    <section className="notes section" aria-labelledby="notes-title">
      <div className="wrap">
        <SectionHead
          id="notes-title"
          title="Letters from the harbor."
          intro="Short reports from the school: what the water was doing, what the children noticed, and what we got wrong."
          action={{ label: 'All letters', to: href('/news') }}
        />

        <div className="notes__layout">
          <a className="notes__featured" href={href('/news', featured.id)}>
            <div className="notes__image">
              <img
                src={featured.image ?? '/assets/notebook.png'}
                alt="A bound field notebook open to a page of eelgrass drawings and depth readings."
                width={1200}
                height={900}
                loading="lazy"
              />
            </div>
            <p className="notes__meta">
              {featured.date} · {featured.byline}
            </p>
            <h3 className="notes__featured-title">{featured.title}</h3>
            <p className="notes__excerpt">{featured.excerpt}</p>
          </a>

          <ul className="notes__list" role="list">
            {rest.map((post) => (
              <li key={post.id}>
                <a className="notes__row" href={href('/news', post.id)}>
                  <p className="notes__row-date">{post.date}</p>
                  <h3 className="notes__row-title">{post.title}</h3>
                  <p className="notes__row-excerpt">{post.excerpt}</p>
                  <span className="notes__row-more" aria-hidden="true">
                    Read
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

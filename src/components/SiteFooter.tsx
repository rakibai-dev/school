import { href } from '../router';
import { school } from '../data/school';
import { TernMark } from './TernMark';
import { useVisit } from './VisitProvider';
import './SiteFooter.css';

const columns = [
  {
    title: 'School',
    links: [
      { label: 'About Tern Point', to: href('/about') },
      { label: 'Harbor studies', to: href('/about', 'harbor') },
      { label: 'Faculty', to: href('/about', 'faculty') },
      { label: 'Letters from the harbor', to: href('/news') },
    ],
  },
  {
    title: 'Admission',
    links: [
      { label: 'How to apply', to: href('/admissions', 'steps') },
      { label: 'Tuition and aid', to: href('/admissions', 'tuition') },
      { label: 'Key dates', to: href('/admissions', 'dates') },
      { label: 'Questions', to: href('/admissions', 'questions') },
    ],
  },
  {
    title: 'Practical',
    links: [
      { label: 'Term dates', to: href('/', 'year') },
      { label: 'Directions', to: href('/', 'visit') },
      { label: 'The Gull Lane Gazette', to: href('/news') },
      { label: 'Contact the office', to: `mailto:${school.email}` },
    ],
  },
];

export function SiteFooter() {
  const { openVisit } = useVisit();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer on-ink" id="contact">
      <div className="wrap">
        <div className="site-footer__lead">
          <h2 className="site-footer__heading">The gate is open most mornings.</h2>
          <div className="site-footer__lead-aside">
            <p>
              Come and stand on the dock, sit in the back of a class, or just ask us a hard question.
              Visiting mornings run twice a week through the autumn.
            </p>
            <button type="button" className="btn btn--solid" onClick={openVisit}>
              Book a visit
            </button>
          </div>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__identity">
            <p className="site-footer__wordmark">
              <TernMark className="site-footer__mark" withSun />
              <span>Tern Point School</span>
            </p>
            <p className="site-footer__address">
              {school.address.street}
              <br />
              {school.address.town}
              <br />
              <a href={school.phoneHref}>{school.phone}</a>
              <br />
              <a href={`mailto:${school.email}`}>{school.email}</a>
            </p>
            <p className="site-footer__hours">{school.hours}</p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="site-footer__col-title">{column.title}</h3>
                <ul role="list" className="site-footer__col-list">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a className="site-footer__link" href={link.to}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="site-footer__base">
          <p>
            © {year} Tern Point School, Sablewick. Founded {school.founded}.
          </p>
          <p className="site-footer__fine">
            A fictional school, built as a design demonstration. {school.coordinates}
          </p>
        </div>
      </div>
    </footer>
  );
}

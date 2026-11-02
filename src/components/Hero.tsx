import { href } from '../router';
import { useVisit } from './VisitProvider';
import { TideStrip } from './TideStrip';
import './Hero.css';

export function Hero() {
  const { openVisit } = useVisit();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__place">Sablewick Harbor, Maine. Founded 1978.</p>
          <h1 className="hero__title" id="hero-title">
            <span>Notice</span>
            <span>things.</span>
          </h1>
          <p className="hero__lede">
            Tern Point is a day school for 214 children, nursery through Class 8, on the north shore
            of Sablewick Harbor. Twelve to a class, a great deal of time outdoors, and a habit of
            looking closely at what is in front of you.
          </p>
          <div className="hero__actions">
            <button type="button" className="btn btn--solid" onClick={openVisit}>
              Book a visiting morning
            </button>
            <a className="btn btn--ghost" href={href('/about')}>
              How the school works
            </a>
          </div>
          <p className="hero__deadline">
            Applications for September 2027 close on 15 January.{' '}
            <a className="text-link" href={href('/admissions', 'steps')}>
              How to apply
            </a>
            .
          </p>
        </div>

        <figure className="chart-panel">
          <div className="chart-panel__window">
            <img
              className="chart-panel__image"
              src="/assets/harbor-chart.png"
              width={1200}
              height={1500}
              alt="A hand-drawn chart of Sablewick Harbor: the north shore, the school dock, depth soundings, an inset of the dock, and a compass rose."
            />
            <span className="chart-panel__pin" aria-hidden="true">
              <span className="chart-panel__pin-dot" />
            </span>
          </div>
          <figcaption className="chart-panel__caption">
            <span className="chart-panel__caption-main">The shore at 44° 12′ N, and the school dock</span>
            <span className="chart-panel__caption-sub">Drawn by Class 8, spring 2026</span>
            <span className="chart-panel__caption-icon" aria-hidden="true">
              <svg viewBox="0 0 28 22" fill="none">
                <path d="M1 20V9.4a1.6 1.6 0 0 1 .5-1.1l6.3-6.2a1.6 1.6 0 0 1 2.3 0L16.3 8a1.6 1.6 0 0 1 .5 1.2V20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M19 20v-7.6l3.6-3.5a1.6 1.6 0 0 1 2.3 0L27 11V20M4 20v-6.4a1.6 1.6 0 0 1 .5-1.1L8 8.9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M1 20h26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="wrap">
        <TideStrip />
      </div>
    </section>
  );
}

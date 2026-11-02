import { href } from '../../router';

const reasons = [
  {
    title: 'A study site for every class',
    body: 'Nursery has the garden gate. Class 3 has the town landing. Class 7 has the eelgrass transect off the dock, measured four times a year since 2019.',
  },
  {
    title: 'A wet lab with running seawater',
    body: 'Two touch tanks, a wet sink, and a wall of jars that children label themselves. The lab is small, cold in February, and in use most days.',
  },
  {
    title: 'Two boats and someone to teach you',
    body: 'Sailing starts in Class 5 and continues until Class 8 leaves. Everyone rows in autumn. Nobody has to own a thing to take part.',
  },
  {
    title: 'One notebook, kept for two years',
    body: 'Each student keeps a bound field notebook from Class 7. It becomes the record they present to the harbor commission in June.',
  },
];

export function HarborBand() {
  return (
    <section className="harbor on-ink section" aria-labelledby="harbor-band-title">
      <div className="wrap">
        <div className="harbor__top">
          <h2 className="harbor__title" id="harbor-band-title">
            The harbor is not a field trip.
          </h2>
          <div className="harbor__top-aside">
            <p>
              It is a laboratory, a weather system, a history, and a reason to write something down.
              Classes return to the same shore for years, which is how children learn to see change
              that happens slowly.
            </p>
            <a className="harbor__link" href={href('/about', 'harbor')}>
              Harbor studies in detail
            </a>
          </div>
        </div>

        <ul className="harbor__list" role="list">
          {reasons.map((reason) => (
            <li className="harbor__item" key={reason.title}>
              <h3 className="harbor__item-title">{reason.title}</h3>
              <p>{reason.body}</p>
            </li>
          ))}
        </ul>

        <p className="harbor__foot">
          The dock sits at 44° 12′ 30″ N, 68° 52′ 05″ W. Mean tidal range 3.1 m.
        </p>
      </div>
    </section>
  );
}

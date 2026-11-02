import { school } from '../../data/school';
import { useVisit } from '../../components/VisitProvider';

const ways = [
  {
    label: 'By car',
    body: 'Route 1 to Sablewick, then Harbor Road for a mile. Turn left at the boatyard; Gull Lane is the gravel track just past the net loft. Park in the field on your right.',
  },
  {
    label: 'By boat',
    body: 'There is a float at the town landing, a ten-minute walk along the shore path. Call ahead and someone will meet you at the top of the ramp.',
  },
  {
    label: 'By bus',
    body: 'The 4:15 from Ellsworth stops at the end of Gull Lane on school days. It leaves town at 3:40 and takes about twenty minutes.',
  },
];

export function Visit() {
  const { openVisit } = useVisit();

  return (
    <section className="visit-band section" aria-labelledby="visit-title" id="visit">
      <div className="wrap">
        <div className="visit-band__grid">
          <div className="visit-band__main">
            <h2 className="visit-band__title" id="visit-title">
              Come and stand on the dock.
            </h2>
            <p className="visit-band__lede">
              The office is in the net loft, the low building past the flagpole. There is coffee, a
              tide table on the wall, and usually someone who can leave what they are doing.
            </p>
            <div className="visit-band__actions">
              <button type="button" className="btn btn--solid" onClick={openVisit}>
                Book a visiting morning
              </button>
              <a className="btn btn--outline" href={school.phoneHref}>
                Call {school.phone}
              </a>
            </div>
            <address className="visit-band__address">
              {school.name}
              <br />
              {school.address.street}
              <br />
              {school.address.town}
            </address>
            <p className="visit-band__hours">{school.hours}</p>
          </div>

          <div className="visit-band__ways">
            <h3 className="visit-band__sub">Getting here</h3>
            <dl className="ways">
              {ways.map((way) => (
                <div className="ways__item" key={way.label}>
                  <dt className="ways__label">{way.label}</dt>
                  <dd className="ways__body">{way.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

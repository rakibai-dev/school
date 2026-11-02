import { href } from '../../router';
import { stats } from '../../data/school';
import { Plate } from '../../components/Plate';

export function Welcome() {
  return (
    <section className="welcome section" aria-labelledby="welcome-title">
      <div className="wrap">
        <div className="welcome__grid">
          <Plate
            className="welcome__figure"
            src="/assets/garden.png"
            alt="A survey plan of the walled garden: raised beds labelled a to e, cold frames, a glasshouse, a shed, and a key to what is growing."
            width={1200}
            height={900}
            ratio="4 / 3"
            caption="The walled garden, surveyed by Class 2 in April. Nursery keeps the gate to the field."
          />

          <div className="welcome__copy">
            <h2 className="welcome__title" id="welcome-title">
              A small school with a long memory.
            </h2>
            <p className="standfirst">
              We have taught beside this harbor since 1978. The school has grown from nine children
              in a net loft to 214, and not much else has changed on purpose.
            </p>
            <p>
              There is no entrance test and no ranking. Children stay with the same teacher for two
              years, so the teacher knows what a child was like in September and what to do about it
              in March. We keep the school small enough that nobody can disappear into the middle of
              a room.
            </p>
            <p>
              The harbor is why we are here, and it is why the curriculum looks the way it does: a
              field notebook in every bag, a study site for every class, and enough time outdoors
              that the weather is part of the plan rather than an interruption to it.
            </p>
            <a className="link-underline" href={href('/about')}>
              More about the school
            </a>
          </div>
        </div>

        <dl className="facts">
          {stats.map((stat) => (
            <div className="facts__item" key={stat.label}>
              <dt className="facts__value num">{stat.value}</dt>
              <dd className="facts__label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

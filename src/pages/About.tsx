import { href } from '../router';
import { curriculum, faculty, places, principles, roll, school, trustees } from '../data/school';
import { SectionHead } from '../components/SectionHead';
import { useVisit } from '../components/VisitProvider';
import { Plate } from '../components/Plate';
import './pages.css';

export default function About() {
  const { openVisit } = useVisit();

  return (
    <>
      <section className="page-hero" aria-labelledby="about-title">
        <div className="wrap page-hero__grid">
          <div>
            <p className="page-hero__place">{school.tagline}</p>
            <h1 className="page-hero__title" id="about-title">
              A small school with a long memory.
            </h1>
            <p className="page-hero__lede">
              Tern Point began in 1978 with nine children in a borrowed net loft and a teacher who
              thought the harbor was the best classroom in the county. We have kept the loft, the
              idea, and the habit of not doing very much at once.
            </p>
            <dl className="glance">
              <div>
                <dt>Founded</dt>
                <dd className="num">1978</dd>
              </div>
              <div>
                <dt>Children</dt>
                <dd className="num">214</dd>
              </div>
              <div>
                <dt>Grades</dt>
                <dd>Nursery to 8</dd>
              </div>
              <div>
                <dt>Campus</dt>
                <dd>Nine acres, one dock</dd>
              </div>
            </dl>
          </div>
          <Plate
            className="page-hero__figure"
            src="/assets/netloft.png"
            alt="A two-colour print of the net loft: a tall timber building on pilings over the water, a dark roof, a flag, and a dory below."
            width={900}
            height={1125}
            ratio="4 / 5"
            loading="eager"
            caption="A two-colour print from the school press, on the wall by the library door."
          />
        </div>
      </section>

      <section className="about-principles section" aria-labelledby="principles-title">
        <div className="wrap">
          <SectionHead
            id="principles-title"
            title="Four things we keep coming back to."
            intro="These are not slogans on a wall. They are the arguments we have every spring when we plan the following year."
          />
          <ol className="principles" role="list">
            {principles.map((principle) => (
              <li className="principles__item" key={principle.title}>
                <h3 className="principles__title">{principle.title}</h3>
                <p className="principles__body">{principle.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="harbor-studies section on-ink" id="harbor" aria-labelledby="harbor-title">
        <div className="wrap">
          <div className="harbor-studies__grid">
            <div>
              <h2 className="harbor-studies__title" id="harbor-title">
                Harbor studies, in practice.
              </h2>
              <p className="harbor-studies__lede">
                Every class has a study site on the water and a notebook to keep about it. What
                follows is roughly how the decade goes.
              </p>
            </div>
            <ol className="harbor-studies__list" role="list">
              <li>
                <h3>Nursery and Kindergarten</h3>
                <p>
                  The garden gate and the top of the beach. Weather, tides, mud, and the creatures
                  that live in both. The record is drawings and three-word captions.
                </p>
              </li>
              <li>
                <h3>Classes 1 to 4</h3>
                <p>
                  A chosen shore, visited weekly. Children learn to measure, name, draw to scale, and
                  keep a tide table. By Class 4 they can explain what a spring tide is.
                </p>
              </li>
              <li>
                <h3>Classes 5 and 6</h3>
                <p>
                  The school boats, the wet lab, and the first proper field study: water quality,
                  sediment, and the small animals in it. Writing becomes reporting.
                </p>
              </li>
              <li>
                <h3>Classes 7 and 8</h3>
                <p>
                  A two-year study, designed by the student, defended in public. Past subjects have
                  included eelgrass recovery, harbor noise, and the habits of the local horseshoe
                  crab.
                </p>
              </li>
            </ol>
          </div>

          <Plate
            className="harbor-studies__plate"
            src="/assets/notebook.png"
            alt="An open field notebook: handwritten notes on a transect, a line graph of eelgrass cover, a plan of the measured band, and a pencil sketch of a crab."
            width={1200}
            height={900}
            ratio="4 / 3"
            caption="A Class 7 page from October: transect 4, the eelgrass cover, and the gap nobody could explain yet."
          />
        </div>
      </section>

      <section className="curriculum section" aria-labelledby="curriculum-title">
        <div className="wrap">
          <SectionHead
            id="curriculum-title"
            title="What children actually do all day."
            intro="Six subjects, in plain language, with the part that matters most in the last line of each."
          />
          <div className="curriculum__grid">
            {curriculum.map((subject) => (
              <article className="subject" key={subject.id}>
                <h3 className="subject__title">{subject.title}</h3>
                <p className="subject__body">{subject.body}</p>
                <p className="subject__detail">{subject.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="places section" aria-labelledby="places-title">
        <div className="wrap">
          <SectionHead
            id="places-title"
            title="Nine acres, one dock, two boats."
            intro="The campus is small enough that a child can cross it in five minutes and find someone they know at the other end."
          />
          <div className="places__layout">
            <Plate
              className="places__figure"
              src="/assets/garden.png"
              alt="A survey plan of the walled garden, with raised beds labelled a to e, a glasshouse, cold frames, a shed, and a key to what is growing."
              width={1200}
              height={900}
              ratio="4 / 3"
              caption="The walled garden, surveyed by Class 2 in April."
            />
            <dl className="places__list">
              {places.map((place) => (
                <div className="places__item" key={place.name}>
                  <dt>{place.name}</dt>
                  <dd>{place.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="faculty section" id="faculty" aria-labelledby="faculty-title">
        <div className="wrap">
          <SectionHead
            id="faculty-title"
            title="The people in the rooms."
            intro="Twenty-six faculty, nineteen of them full time. Most have been here longer than their own children were."
            action={{ label: 'Ask about a teacher', to: href('/admissions', 'questions') }}
          />
          <ul className="faculty__list" role="list">
            {faculty.map((person) => (
              <li className="person" key={person.name}>
                <p className="person__name">{person.name}</p>
                <p className="person__role">{person.role}</p>
                <p className="person__since num">Since {person.since}</p>
                <p className="person__note">{person.note}</p>
              </li>
            ))}
          </ul>

          <div className="governance">
            <h3 className="governance__title">Board of trustees</h3>
            <p className="governance__note">
              Six trustees, a term of three years, and a standing invitation to any parent who wants
              to sit in. The board meets five times a year in the library.
            </p>
            <ul className="governance__list" role="list">
              {trustees.map((trustee) => (
                <li key={trustee}>{trustee}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="roll section" aria-labelledby="roll-title">
        <div className="wrap">
          <div className="roll__head">
            <h2 className="roll__title" id="roll-title">
              The school roll, 2026–27.
            </h2>
            <p className="roll__note">
              Counted on the first Monday of October, as we have every year since 1979. The
              headcount is the only number the board asks for at every meeting.
            </p>
          </div>
          <table className="roll__table">
            <caption className="sr-only">Children and staff by class, October 2026</caption>
            <thead>
              <tr>
                <th scope="col">Class</th>
                <th scope="col">Children</th>
                <th scope="col">Teacher</th>
                <th scope="col">New this year</th>
              </tr>
            </thead>
            <tbody>
              {roll.map((row) => (
                <tr key={row.group}>
                  <th scope="row">{row.group}</th>
                  <td className="num">{row.children}</td>
                  <td>{row.teacher}</td>
                  <td className="num">{row.fresh}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Whole school</th>
                <td className="num">214</td>
                <td>26 faculty</td>
                <td className="num">31</td>
              </tr>
            </tfoot>
          </table>
          <div className="roll__cta">
            <p>Reading a table is not the same as standing on the dock.</p>
            <button type="button" className="btn btn--solid" onClick={openVisit}>
              Book a visiting morning
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

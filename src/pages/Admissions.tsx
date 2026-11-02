import { useId, useMemo, useState } from 'react';
import { href } from '../router';
import { admissionsIntro, admissionSteps, faqs, keyDates, tuition, tuitionNotes } from '../data/admissions';
import { school } from '../data/school';
import { SectionHead } from '../components/SectionHead';
import { useVisit } from '../components/VisitProvider';
import { Plate } from '../components/Plate';
import './pages.css';

function Question({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="question" data-open={open}>
      <h3 className="question__heading">
        <button
          type="button"
          className="question__button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{question}</span>
          <span className="question__sign" aria-hidden="true" />
        </button>
      </h3>
      <div
        className="question__panel"
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        hidden={!open}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

function AidCalculator() {
  const [children, setChildren] = useState(1);
  const [band, setBand] = useState(3);

  const base = [12600, 19800, 22400, 24900, 24900];
  const discount = useMemo(() => {
    if (children === 1) return 0;
    if (children === 2) return 0.12;
    return 0.18;
  }, [children]);

  const first = base[band];
  const second = children > 1 ? base[band] * (1 - 0.12) : 0;
  const third = children > 2 ? base[band] * (1 - 0.18) * (children - 2) : 0;
  const total = first + second + third;

  const money = (value: number) =>
    value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <div className="aid">
      <p className="aid__intro">
        The sibling discount, worked out. Aid is separate and can be combined with it; this only
        shows what a family with two or three children here pays before aid.
      </p>
      <div className="aid__controls">
        <label className="aid__field">
          <span>Children at Tern Point</span>
          <select value={children} onChange={(event) => setChildren(Number(event.target.value))}>
            {[1, 2, 3].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label className="aid__field">
          <span>Class band</span>
          <select value={band} onChange={(event) => setBand(Number(event.target.value))}>
            <option value={0}>Nursery, five mornings</option>
            <option value={1}>Kindergarten</option>
            <option value={2}>Classes 1–4</option>
            <option value={3}>Classes 5–8</option>
          </select>
        </label>
      </div>
      <dl className="aid__out">
        <div>
          <dt>First child</dt>
          <dd className="num">{money(first)}</dd>
        </div>
        {children > 1 ? (
          <div>
            <dt>Second child, less 12%</dt>
            <dd className="num">{money(second)}</dd>
          </div>
        ) : null}
        {children > 2 ? (
          <div>
            <dt>Each further child, less 18%</dt>
            <dd className="num">{money(third)}</dd>
          </div>
        ) : null}
        <div className="aid__total">
          <dt>Tuition before aid</dt>
          <dd className="num">{money(total)}</dd>
        </div>
      </dl>
      <p className="aid__note">
        {discount > 0
          ? `Siblings are discounted by ${Math.round(discount * 100)}% on the second child and 18% on any after that.`
          : 'One child, full tuition. About one family in four receives aid on top of this.'}
      </p>
    </div>
  );
}

export default function Admissions() {
  const { openVisit } = useVisit();

  return (
    <>
      <section className="page-hero" aria-labelledby="admissions-title">
        <div className="wrap page-hero__grid page-hero__grid--reverse">
          <div>
            <p className="page-hero__place">Admission for September 2027</p>
            <h1 className="page-hero__title" id="admissions-title">
              {admissionsIntro.heading}
            </h1>
            <p className="page-hero__lede">{admissionsIntro.body}</p>
            <div className="page-hero__actions">
              <button type="button" className="btn btn--solid" onClick={openVisit}>
                Book a visiting morning
              </button>
              <a className="btn btn--outline" href={href('/admissions', 'steps')}>
                Read the five steps
              </a>
            </div>
            <p className="page-hero__deadline">
              Applications close 15 January. There is no test, no essay, and no ranking.
            </p>
          </div>
          <Plate
            className="page-hero__figure page-hero__figure--wide"
            src="/assets/dock.png"
            alt="An ink drawing of the school dock at half tide: the net loft on its pilings, a dory tied beside a ladder, and a sloop under sail in the harbor."
            width={1400}
            height={1050}
            ratio="4 / 3"
            loading="eager"
            caption="The dock at half tide, from the float, looking east."
          />
        </div>
      </section>

      <section className="steps section" id="steps" aria-labelledby="steps-title">
        <div className="wrap">
          <SectionHead
            id="steps-title"
            title="Five steps, no mystery."
            intro="The whole process takes about four months and one morning of your time. We tell you where you stand at every stage."
          />
          <ol className="steps__list" role="list">
            {admissionSteps.map((step) => (
              <li className="step" key={step.title}>
                <p className="step__timing">{step.timing}</p>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="dates section on-ink" id="dates" aria-labelledby="dates-title">
        <div className="wrap">
          <SectionHead
            id="dates-title"
            title="Dates for the 2027 entry round."
            intro="Put these in a calendar. We send one reminder email per date and no other marketing."
            tone="ink"
          />
          <table className="dates__table">
            <caption className="sr-only">Key admission dates for 2027 entry</caption>
            <tbody>
              {keyDates.map((row) => (
                <tr key={row.event}>
                  <th scope="row" className="dates__date num">
                    {row.date}
                  </th>
                  <td className="dates__event">{row.event}</td>
                  <td className="dates__note">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="money section" id="tuition" aria-labelledby="tuition-title">
        <div className="wrap">
          <SectionHead
            id="tuition-title"
            title="Tuition, plainly."
            intro="One fee, billed in two instalments. There is no capital campaign, no annual fund drive, and no charge for sailing, lunch, or the yearbook."
          />
          <div className="money__layout">
            <table className="money__table">
              <caption className="sr-only">Tuition for 2026–27</caption>
              <thead>
                <tr>
                  <th scope="col">Band</th>
                  <th scope="col">Year</th>
                  <th scope="col">Term</th>
                </tr>
              </thead>
              <tbody>
                {tuition.map((row) => {
                  const yearly = Number(row.tuition.replace(/[$,]/g, ''));
                  const term = Math.round(yearly / 3);
                  return (
                    <tr key={row.band}>
                      <th scope="row">
                        {row.band}
                        <span className="money__note">{row.notes}</span>
                      </th>
                      <td className="num">{row.tuition}</td>
                      <td className="num">
                        {term.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                          maximumFractionDigits: 0,
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="money__aside">
              <ul className="money__notes" role="list">
                {tuitionNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <AidCalculator />
            </div>
          </div>
        </div>
      </section>

      <section className="questions section" id="questions" aria-labelledby="questions-title">
        <div className="wrap">
          <SectionHead
            id="questions-title"
            title="Questions we are asked most."
            intro="If yours is not here, call the office. Somebody will pick up, and it will probably be Marisol."
            action={{ label: 'Email the office', to: `mailto:${school.email}` }}
          />
          <div className="questions__list">
            {faqs.map((faq) => (
              <Question key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="apply-band section" aria-labelledby="apply-title">
        <div className="wrap apply-band__inner">
          <div>
            <h2 className="apply-band__title" id="apply-title">
              Start with a morning, not a form.
            </h2>
            <p className="apply-band__body">
              Come for two hours, sit in a class, and walk down to the water. If it feels right, we
              will send you the application the same day.
            </p>
          </div>
          <div className="apply-band__actions">
            <button type="button" className="btn btn--solid" onClick={openVisit}>
              Book a visiting morning
            </button>
            <a className="btn btn--outline" href={school.phoneHref}>
              Call {school.phone}
            </a>
            <p className="apply-band__small">
              Office open 7:45 a.m. to 4:15 p.m., Monday to Friday.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

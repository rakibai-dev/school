import { terms } from '../../data/school';
import { SectionHead } from '../../components/SectionHead';

export function YearCalendar() {
  return (
    <section className="year section" aria-labelledby="year-title" id="year">
      <div className="wrap">
        <SectionHead
          id="year-title"
          title="The year, as it actually runs."
          intro="Three terms, a proper March break, and a June that ends at the dock. These are the 2026–27 dates; the tide table for September goes out with the class list."
        />

        <div className="year__grid">
          {terms.map((term) => (
            <article className="term" key={term.id}>
              <h3 className="term__name">{term.name}</h3>
              <p className="term__dates">
                <span className="num">{term.start}</span> to <span className="num">{term.end}</span>
              </p>
              <p className="term__weeks num">
                {term.weeks} weeks · {term.id === 'autumn' ? 2026 : 2027}
              </p>

              <dl className="term__notes">
                {term.notes.map((note) => (
                  <div className="term__note" key={note.label}>
                    <dt>{note.label}</dt>
                    <dd className="num">{note.date}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

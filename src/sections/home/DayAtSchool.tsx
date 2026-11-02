import { useRef, useState } from 'react';
import { programmes } from '../../data/school';
import { SectionHead } from '../../components/SectionHead';

export function DayAtSchool() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = programmes[active];

  const focusTab = (index: number) => {
    const next = (index + programmes.length) % programmes.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const focused = (event.target as HTMLElement).closest<HTMLButtonElement>('[role="tab"]');
    const from = focused ? programmes.findIndex((p) => `day-tab-${p.id}` === focused.id) : active;
    const start = from === -1 ? active : from;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      focusTab(start + 1);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      focusTab(start - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      focusTab(programmes.length - 1);
    }
  };

  return (
    <section className="day section" aria-labelledby="day-title" id="day">
      <div className="wrap">
        <SectionHead
          id="day-title"
          title="A day here has a shape."
          intro="Mornings carry the work that needs quiet. Afternoons open out. What follows is the ordinary Tuesday version, which is the one we plan around."
        />

        <div className="day__layout">
          <div className="day__tabs" role="tablist" aria-label="Choose a part of the school" onKeyDown={onKeyDown}>
            {programmes.map((programme, index) => (
              <button
                key={programme.id}
                type="button"
                role="tab"
                id={`day-tab-${programme.id}`}
                aria-selected={index === active}
                aria-controls={`day-panel-${programme.id}`}
                tabIndex={index === active ? 0 : -1}
                ref={(element) => {
                  tabs.current[index] = element;
                }}
                className="day__tab"
                onClick={() => setActive(index)}
              >
                <span className="day__tab-name">{programme.name}</span>
                <span className="day__tab-ages">{programme.ages}</span>
              </button>
            ))}
          </div>

          <div
            className="day__panel"
            role="tabpanel"
            id={`day-panel-${current.id}`}
            aria-labelledby={`day-tab-${current.id}`}
          >
            <div className="day__intro">
              <h3 className="day__headline">{current.headline}</h3>
              <p>{current.body}</p>
            </div>

            <ol className="day__list" role="list">
              {current.day.map((entry) => (
                <li className="day__row" key={`${current.id}-${entry.time}-${entry.what}`}>
                  <span className="day__time num">{entry.time}</span>
                  <span className="day__what">{entry.what}</span>
                  <span className="day__where">{entry.where}</span>
                </li>
              ))}
            </ol>
            <p className="day__note">
              Wednesday afternoons belong to the whole school: a long walk, the boats, or a project
              that has spilled out of a classroom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

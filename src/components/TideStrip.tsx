import { useEffect, useMemo, useState } from 'react';
import {
  buildTideDay,
  formatClock,
  formatHourLabel,
  metres,
  tideState,
  tideScale,
} from '../lib/tides';
import './TideStrip.css';

const WIDTH = 1000;
const HEIGHT = 150;
const TOP = 10;
const BASELINE = 134;

function heightToY(height: number): number {
  const { datum, ceiling } = tideScale;
  const clamped = Math.min(Math.max(height, datum), ceiling);
  return BASELINE - ((clamped - datum) / (ceiling - datum)) * (BASELINE - TOP);
}

function timeToX(minutes: number): number {
  return (minutes / 1440) * WIDTH;
}

const hours = [0, 6, 12, 18, 24];

export function TideStrip() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const day = useMemo(() => buildTideDay(now), [now.getFullYear(), now.getMonth(), now.getDate()]);

  const line = day.points
    .map((point, index) => {
      const x = timeToX(point.minutes).toFixed(2);
      const y = heightToY(point.height).toFixed(2);
      return `${index === 0 ? 'M' : 'L'}${x} ${y}`;
    })
    .join(' ');

  const area = `${line} L${WIDTH} ${BASELINE + 8} L0 ${BASELINE + 8} Z`;

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const state = tideState(now, now);
  const nowX = timeToX(nowMinutes);
  const nowY = heightToY(state.height);

  const dateLabel = now.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <figure className="tide" aria-labelledby="tide-title">
      <div className="tide__meta">
        <figcaption className="tide__title" id="tide-title">
          Sablewick Harbor
        </figcaption>
        <p className="tide__date">{dateLabel}</p>
        <p className="tide__state">
          {state.rising ? 'Flooding' : 'Ebbing'} · {metres(state.height)} now
        </p>
      </div>

      <div className="tide__plot" aria-hidden="true">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="tide__svg" role="presentation">
          <defs>
            <linearGradient id="tide-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--tide)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--tide)" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {hours.map((hour) => (
            <g key={hour}>
              <line
                x1={timeToX(hour * 60)}
                x2={timeToX(hour * 60)}
                y1={TOP}
                y2={BASELINE + 8}
                className="tide__grid"
              />
              <text
                x={timeToX(hour * 60) + (hour === 24 ? -4 : 4)}
                y={BASELINE + 24}
                textAnchor={hour === 24 ? 'end' : 'start'}
                className="tide__tick"
              >
                {formatHourLabel(hour * 60)}
              </text>
            </g>
          ))}

          <path d={area} fill="url(#tide-fill)" />
          <path d={line} className="tide__curve" />
          <line x1={0} x2={WIDTH} y1={BASELINE + 8} y2={BASELINE + 8} className="tide__axis" />

          {nowX >= 0 && nowX <= WIDTH ? (
            <g>
              <line
                x1={nowX}
                x2={nowX}
                y1={TOP - 2}
                y2={BASELINE + 8}
                className="tide__now-line"
              />
              <circle cx={nowX} cy={nowY} r="4.5" className="tide__now-dot" />
            </g>
          ) : null}
        </svg>
      </div>

      <dl className="tide__times">
        {day.events.map((event) => (
          <div className="tide__time" key={`${event.kind}-${event.minutes}`}>
            <dt>{event.kind === 'high' ? 'High' : 'Low'}</dt>
            <dd className="num">{formatClock(event.minutes)}</dd>
            <dd className="num tide__height">{metres(event.height)}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}

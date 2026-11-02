/**
 * A small harmonic tide model for Sablewick Harbor.
 * Two constituents — the principal lunar semidiurnal (M2) and the
 * lunar-solar diurnal (K1) — with a spring/neap modulation on M2.
 * Fictional water, plausible curve.
 */

const M2_PERIOD = 745.236; // minutes, 12h 25m
const K1_PERIOD = 1490.468; // minutes, 24h 50m
const SPRING_NEAP = 14.77 * 1440; // minutes

const EPOCH = new Date(2026, 0, 1).getTime();
const M2_REF = 310; // 05:10 on 1 January 2026, minutes from midnight
const K1_REF = 880;
const MEAN_LEVEL = 2.45;
const DATUM_Y = 0.55;

export type TideEvent = {
  kind: 'high' | 'low';
  minutes: number;
  height: number;
};

export type TideDay = {
  events: TideEvent[];
  points: { minutes: number; height: number }[];
  min: number;
  max: number;
};

function absoluteMinutes(date: Date, minutes = 0): number {
  const midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  return (midnight - EPOCH) / 60000 + minutes;
}

export function tideHeight(minutes: number, date: Date): number {
  const t = absoluteMinutes(date, minutes);
  const m2Amplitude = 1.18 + 0.26 * Math.cos((2 * Math.PI * t) / SPRING_NEAP);
  const m2 = m2Amplitude * Math.cos((2 * Math.PI * (t - M2_REF)) / M2_PERIOD);
  const k1 = 0.3 * Math.cos((2 * Math.PI * (t - K1_REF)) / K1_PERIOD);
  return MEAN_LEVEL + m2 + k1;
}

export function buildTideDay(date: Date): TideDay {
  const points: { minutes: number; height: number }[] = [];
  const events: TideEvent[] = [];

  for (let minutes = 0; minutes <= 1440; minutes += 4) {
    points.push({ minutes, height: tideHeight(minutes, date) });
  }

  const heights = points.map((point) => point.height);
  const min = Math.min(...heights);
  const max = Math.max(...heights);

  for (let minutes = 2; minutes < 1438; minutes += 2) {
    const before = tideHeight(minutes - 2, date);
    const here = tideHeight(minutes, date);
    const after = tideHeight(minutes + 2, date);

    if (here > before && here > after) {
      events.push({ kind: 'high', minutes, height: here });
    } else if (here < before && here < after) {
      events.push({ kind: 'low', minutes, height: here });
    }
  }

  return { events, points, min, max };
}

export function formatClock(minutes: number): string {
  const total = ((Math.round(minutes) % 1440) + 1440) % 1440;
  const hours24 = Math.floor(total / 60);
  const mins = total % 60;
  const suffix = hours24 < 12 ? 'a.m.' : 'p.m.';
  const hours = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return `${hours}:${`${mins}`.padStart(2, '0')} ${suffix}`;
}

export function formatHourLabel(minutes: number): string {
  if (minutes === 0 || minutes === 1440) return '12 a.m.';
  const hours24 = Math.floor(minutes / 60) % 24;
  const suffix = hours24 < 12 ? 'a.m.' : 'p.m.';
  const hours = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return `${hours} ${suffix}`;
}

export function metres(value: number, digits = 1): string {
  return `${value.toFixed(digits)} m`;
}

export function tideState(date: Date, now: Date): { height: number; rising: boolean } {
  const minutes = now.getHours() * 60 + now.getMinutes();
  const here = tideHeight(minutes, date);
  const soon = tideHeight(Math.min(minutes + 10, 1440), date);
  return { height: here, rising: soon > here };
}

export const tideScale = { datum: DATUM_Y, ceiling: 4.3 };

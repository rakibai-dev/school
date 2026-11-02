# Tern Point School

A single-page site for a fictional day school on Sablewick Harbor, Maine. React + Vite + TypeScript, no UI framework, no runtime CSS library.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check, then bundle to dist/
npm run preview  # serve the built bundle
```

## The design

Every choice comes from the subject: a small school that keeps field notebooks on a harbor.

- **Type** — Eczar (display) and Alegreya Sans (text), both drawn in the humanist, slightly calligraphic register of a well-kept logbook. They ship locally via `@fontsource`, so there are no third-party font requests.
- **Colour** — fog-white paper (`#eff1e9`), tidewater ink (`#10312e`), buoy marigold (`#e2a33c`), sea glass. Marigold is reserved for the sun, buoys, and the one thing a reader should notice in each section.
- **Structure** — hairline rules, margins, and section heads that behave like chart furniture rather than cards. No rounded card kit, no gradient washes, no drop shadows (one, on the visit dialog).
- **Motion** — the hero settles once on load. Everything else responds to the reader: the tab panel on the day-in-the-life section, accordions, the plate viewer, tide line redrawn each minute.

## Assets

All artwork in `public/assets` was drawn for this project as vector linework and rendered to PNG. The plates:

| File | What it is |
| --- | --- |
| `harbor-chart.png` | A hand-surveyed chart of Sablewick Harbor, with soundings, a dock inset, and a compass rose |
| `garden.png` | Plan of the walled garden, "surveyed by Class 2" |
| `dock.png` | The dock at half tide, looking east |
| `notebook.png` | A Class 7 field notebook spread with a real plot |
| `netloft.png` | A two-colour print of the net loft |
| `og.png` | Social card |

The favicon and the tern mark are inline SVG.

## Structure

```
src/
  App.tsx              hash router + scroll handling
  router.ts            route parsing, titles, link helpers
  data/                all copy and numbers, in one place
  components/          header, footer, hero, tide strip, plate viewer, visit dialog
  sections/home/       the home page, one file per section
  pages/               About, Admissions, News
  styles/              tokens, base, shared
  lib/                 tide model, form validation
```

Copy lives in `src/data`. Changing a date, a fee, or a teacher does not require touching a component.

## Details worth knowing

- **The tide chart is computed, not decorative.** `src/lib/tides.ts` sums an M2 and a K1 constituent with a spring/neap term. The line, the "now" marker, and the high/low times all come from that function and update every minute.
- **The visit form validates for real.** Visiting mornings are Tuesdays and Thursdays; picking another day returns the next valid one, in words. There is no backend — the confirmation screen is the end of the flow, so a real deployment needs the submit wired to an endpoint.
- **Deep links work.** `#/admissions#tuition` loads the page and lands on the section, correcting after fonts and images settle.
- **The plates open.** On a phone the chart and the garden plan are unreadable at 390px, so each one has a "look closer" viewer.
- **Keyboard and screen readers.** Tabs have roving focus and arrow keys, accordions announce their state, the dialog traps focus and returns it, and the skip link bypasses the header.
- **Reduced motion** is respected throughout.

Everything here is placeholder content, including the people, the prices, and the harbor.

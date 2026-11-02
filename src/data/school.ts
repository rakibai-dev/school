export const school = {
  name: 'Tern Point School',
  shortName: 'Tern Point',
  founded: 1978,
  tagline: 'A day school on Sablewick Harbor',
  grades: 'Nursery through Class 8',
  enrollment: 214,
  address: {
    street: '1 Gull Lane',
    town: 'Sablewick, ME 04611',
    note: 'The office is in the net loft, the low building past the flagpole.',
  },
  coordinates: '44° 12′ 30″ N, 68° 52′ 05″ W',
  phone: '(207) 555-0148',
  phoneHref: 'tel:+12075550148',
  email: 'office@ternpointschool.org',
  hours: 'Office open 7:45 a.m. to 4:15 p.m., Monday to Friday',
  head: 'Marisol Okonkwo',
} as const;

export const stats = [
  { value: '214', label: 'children, nursery through Class 8' },
  { value: '12', label: 'average class size' },
  { value: '26', label: 'faculty, 19 of them full time' },
  { value: '40%', label: 'of the school day spent outdoors' },
  { value: '9', label: 'acres, one dock, two boats' },
] as const;

export type Term = {
  id: string;
  name: string;
  start: string;
  end: string;
  weeks: number;
  notes: { label: string; date: string }[];
};

export const terms: Term[] = [
  {
    id: 'autumn',
    name: 'Autumn term',
    start: 'September 8',
    end: 'December 18',
    weeks: 14,
    notes: [
      { label: 'Open house', date: '14 November' },
      { label: 'Harvest supper', date: '22 October' },
      { label: 'Winter break begins', date: '19 December' },
    ],
  },
  {
    id: 'winter',
    name: 'Winter term',
    start: 'January 6',
    end: 'March 27',
    weeks: 11,
    notes: [
      { label: 'Application deadline', date: '15 January' },
      { label: 'Visiting mornings', date: '3–21 February' },
      { label: 'March break begins', date: '28 March' },
    ],
  },
  {
    id: 'spring',
    name: 'Spring term',
    start: 'April 6',
    end: 'June 12',
    weeks: 10,
    notes: [
      { label: 'Decision letters', date: '12 March' },
      { label: 'Launch day at the dock', date: '21 May' },
      { label: 'Last day of school', date: '12 June' },
    ],
  },
];

export type Programme = {
  id: string;
  name: string;
  ages: string;
  headline: string;
  body: string;
  day: { time: string; what: string; where: string }[];
};

export const programmes: Programme[] = [
  {
    id: 'nursery',
    name: 'Nursery',
    ages: 'Ages 3 and 4',
    headline: 'Mostly outside, with mud on purpose.',
    body: 'Two teachers, sixteen children, and a garden gate that opens straight onto the field. The morning has a shape, but the shape bends: if the tide is out and the flats are steaming, we go.',
    day: [
      { time: '8:20', what: 'Drop-off at the garden gate', where: 'Walled garden' },
      { time: '8:30', what: 'Outside, whatever the weather', where: 'Field and flats' },
      { time: '9:45', what: 'Snack, then a story read slowly', where: 'Nursery room' },
      { time: '10:30', what: 'Workrooms: clay, water, wood, cloth', where: 'Making room' },
      { time: '11:45', what: 'Lunch, served family-style', where: 'Net loft' },
      { time: '12:30', what: 'Rest and quiet books', where: 'Nursery room' },
      { time: '1:30', what: 'Harbor walk, or the long way to the garden', where: 'Dock road' },
      { time: '2:30', what: 'Pick-up', where: 'Garden gate' },
    ],
  },
  {
    id: 'kindergarten',
    name: 'Kindergarten',
    ages: 'Ages 5 and 6',
    headline: 'Learning to keep a record of things.',
    body: 'Kindergarten starts a field notebook. Entries begin as drawings with three words and end the year as drawings with thirty. Reading arrives on its own schedule, which in our experience is usually a Thursday in February.',
    day: [
      { time: '8:10', what: 'Drop-off and morning jobs', where: 'Classroom' },
      { time: '8:30', what: 'Meeting, weather log, tide check', where: 'Classroom' },
      { time: '9:00', what: 'Reading and writing, in small groups', where: 'Classroom' },
      { time: '10:15', what: 'Recess and snack', where: 'Field' },
      { time: '11:00', what: 'Numbers: counting, sorting, measuring', where: 'Classroom' },
      { time: '12:00', what: 'Lunch', where: 'Net loft' },
      { time: '12:45', what: 'Harbor study, twice a week', where: 'Flats and wet lab' },
      { time: '1:45', what: 'Music, art, or movement', where: 'Studio' },
      { time: '2:45', what: 'Pick-up', where: 'Front steps' },
    ],
  },
  {
    id: 'lower',
    name: 'Lower school',
    ages: 'Classes 1 to 4',
    headline: 'The year is built around water.',
    body: 'Each class keeps a place on the harbor and visits it every week from September to June. By Class 4, children can read a tide table, name nine kinds of seaweed, and write a paragraph that someone else wants to finish.',
    day: [
      { time: '8:00', what: 'Drop-off, free reading', where: 'Classrooms' },
      { time: '8:20', what: 'Morning meeting', where: 'Classrooms' },
      { time: '8:45', what: 'Mathematics', where: 'Classrooms' },
      { time: '10:00', what: 'Break', where: 'Field' },
      { time: '10:20', what: 'Reading and writing workshop', where: 'Classrooms' },
      { time: '11:40', what: 'Harbor studies, weekly', where: 'Dock and wet lab' },
      { time: '12:30', what: 'Lunch and recess', where: 'Net loft' },
      { time: '1:20', what: 'Spanish or making', where: 'Studio' },
      { time: '2:15', what: 'Chorus, library, or games', where: 'Various' },
      { time: '3:05', what: 'Pick-up', where: 'Front steps' },
    ],
  },
  {
    id: 'upper',
    name: 'Upper school',
    ages: 'Classes 5 to 8',
    headline: 'The work gets longer, and so does the walk.',
    body: 'Upper school students keep a two-year field study going, take the school’s boat out in spring, and present their work to the harbor commission in June. Class 8 leaves with a bound notebook and a public defense of it.',
    day: [
      { time: '7:50', what: 'Drop-off and advisor check-in', where: 'Classrooms' },
      { time: '8:10', what: 'Mathematics', where: 'Classrooms' },
      { time: '9:20', what: 'Humanities: reading, writing, history', where: 'Classrooms' },
      { time: '10:50', what: 'Break', where: 'Field' },
      { time: '11:05', what: 'Science: field or lab block', where: 'Wet lab' },
      { time: '12:30', what: 'Lunch', where: 'Net loft' },
      { time: '1:10', what: 'Spanish, music, or art', where: 'Studio' },
      { time: '2:20', what: 'Independent project studio', where: 'Library and shop' },
      { time: '3:15', what: 'Athletics or sailing', where: 'Dock' },
      { time: '4:15', what: 'Pick-up', where: 'Front steps' },
    ],
  },
];

export const curriculum = [
  {
    id: 'harbor',
    title: 'Harbor studies',
    body: 'Every class from Nursery to Class 8 has a study site on the water and a notebook to keep about it. We count, draw, measure, and return to the same ten metres of shore for years.',
    detail: 'Weekly field blocks · two boats · a wet lab with running seawater',
  },
  {
    id: 'language',
    title: 'Reading and writing',
    body: 'Children read real books and write for real readers: letters to the harbormaster, field guides for the library, a newspaper in Class 5. Grammar is taught where it makes the sentence better.',
    detail: 'Workshop model · class libraries · a visiting writer each spring',
  },
  {
    id: 'maths',
    title: 'Mathematics',
    body: 'Numbers begin with things you can hold and end with proofs you can argue. By Class 8 students have a working grasp of algebra, geometry, and statistics they gathered themselves.',
    detail: 'Small-group instruction · measurement in the field · no tracking before Class 6',
  },
  {
    id: 'making',
    title: 'Making and art',
    body: 'The shop has hand tools, the studio has a press, and both are open most afternoons. Children make things that are used: benches, signs, stuffed terns for the library, and the annual yearbook.',
    detail: 'Woodshop · printmaking · clay · textiles',
  },
  {
    id: 'music',
    title: 'Music',
    body: 'Everyone sings until Class 6 and everyone plays something until Class 8. The chorus sings at the winter assembly and, in good weather, on the dock at the end of the year.',
    detail: 'Chorus · recorder in Class 3 · two instrument choices in Class 5',
  },
  {
    id: 'movement',
    title: 'Movement and games',
    body: 'Games are taught for the pleasure of playing them. We sail in spring, row in autumn, and run the field in every season. Nobody sits out for long.',
    detail: 'Sailing on the school boats · cross-country · daily recess',
  },
] as const;

export const principles = [
  {
    title: 'Small groups, long relationships',
    body: 'Twelve children to a class and a teacher who stays with them for two years. Nobody here is anonymous, which is the point and also the work.',
  },
  {
    title: 'The harbor is a subject, not a backdrop',
    body: 'Sablewick Harbor gives us a laboratory, a weather system, a history, and a reason to write. We return to the same shore for years so that children can see change happen slowly.',
  },
  {
    title: 'Attention is teachable',
    body: 'We teach children how to sit with something and look at it: a shell, a paragraph, a problem, a friend who is upset. Notice first; answer second.',
  },
  {
    title: 'Rigor, without the hurry',
    body: 'We keep expectations high and the pace human. There are no rankings, no class ranks, no exam-prep terms. There is a great deal of reading and a great deal of revision.',
  },
] as const;

export const places = [
  { name: 'The net loft', note: 'Built in 1911 for a fishing co-op. Now the lunch room, assembly hall, and rainy-day gym.' },
  { name: 'The wet lab', note: 'Running seawater, a wet sink, and a wall of jars labelled by the children.' },
  { name: 'The dock', note: 'Two boats, a ladder, a handline, and the school’s tide gauge.' },
  { name: 'The walled garden', note: 'Nursery’s gate to the field, and the only place on campus that is properly sheltered.' },
  { name: 'The field', note: 'Two acres of rough grass between the buildings and the water. Recess, games, and the harvest supper.' },
  { name: 'The library', note: 'Four thousand books, a chart table, and the school’s own field guides on the low shelf.' },
] as const;

export const faculty = [
  { name: 'Marisol Okonkwo', role: 'Head of school', since: 2015, note: 'Taught Class 5 for nine years before the office found her.' },
  { name: 'Peter Nakamura', role: 'Harbor studies, Classes 6–8', since: 2011, note: 'Marine biologist; keeper of the school’s eelgrass transect.' },
  { name: 'Ines Varga', role: 'Kindergarten lead', since: 2018, note: 'Keeps a weather chart that the whole school reads.' },
  { name: 'Daniel Boateng', role: 'Mathematics, Classes 4–8', since: 2016, note: 'Believes every theorem starts as a good argument.' },
  { name: 'Ruth Ahlgren', role: 'Reading and writing, Classes 1–4', since: 2004, note: 'Has taught the parent of at least one current student.' },
  { name: 'Yara Haddad', role: 'Art and making', since: 2019, note: 'Runs the print studio and the yearbook.' },
  { name: 'Tobias Reiner', role: 'Music and chorus', since: 2013, note: 'Plays the accordion badly and the piano well.' },
  { name: 'June Castellano', role: 'Nursery lead', since: 2009, note: 'Knows which puddles are worth the boots.' },
  { name: 'Sam Whitlock', role: 'Outdoor programme and dock', since: 2017, note: 'Sailing instructor, boatwright, first-aider.' },
  { name: 'Nadia Farouk', role: 'Class 3 lead', since: 2020, note: 'Started the school newspaper, The Gull Lane Gazette.' },
] as const;

export const trustees = [
  'Elena Marsh, chair',
  'Thomas Ayer',
  'Priya Raman',
  'Owen Sable',
  'Celia Voss',
  'Marcus Hale',
] as const;

export const roll = [
  { group: 'Nursery', children: 22, teacher: 'June Castellano', fresh: 9 },
  { group: 'Kindergarten', children: 24, teacher: 'Ines Varga', fresh: 11 },
  { group: 'Class 1', children: 23, teacher: 'Ada Mbeki', fresh: 2 },
  { group: 'Class 2', children: 24, teacher: 'Lior Shalev', fresh: 3 },
  { group: 'Class 3', children: 25, teacher: 'Nadia Farouk', fresh: 2 },
  { group: 'Class 4', children: 24, teacher: 'Ruth Ahlgren', fresh: 1 },
  { group: 'Class 5', children: 26, teacher: 'Fiona Reyes', fresh: 0 },
  { group: 'Class 6', children: 24, teacher: 'Daniel Boateng', fresh: 2 },
  { group: 'Class 7', children: 12, teacher: 'Peter Nakamura', fresh: 1 },
  { group: 'Class 8', children: 10, teacher: 'Marisol Okonkwo', fresh: 0 },
] as const;

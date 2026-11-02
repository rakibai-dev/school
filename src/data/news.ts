export type Post = {
  id: string;
  title: string;
  date: string;
  term: 'Autumn 2026' | 'Spring 2026' | 'Winter 2026' | 'Autumn 2025';
  byline: string;
  excerpt: string;
  body: string[];
  image?: string;
};

export const posts: Post[] = [
  {
    id: 'eelgrass-week-seven',
    title: 'Week seven: the eelgrass is holding',
    date: 'October 23, 2026',
    term: 'Autumn 2026',
    byline: 'Peter Nakamura, harbor studies',
    excerpt:
      'Class 7 ran the autumn transect off the dock on Tuesday. The same ten metres we have measured since 2019. The eelgrass came back thicker than last year, though not quite where we expected.',
    body: [
      'Class 7 ran the autumn transect off the dock on Tuesday, the same ten metres we have measured since 2019. Water temperature was 11.4°C, a degree warmer than the October average. The eelgrass came back thicker than last year, in a band about four metres wider than we marked in the spring.',
      'What we cannot yet say is why. The children’s first theory was the new mooring field; their second was the mild September. Both are plausible. This is the useful part of a two-year study: an answer you can check against the same shore, next October, with your own measurements.',
      'The full data sheet, including the two afternoons we were rained off, is pinned to the wet lab door. Visitors are welcome to argue with it.',
    ],
    image: '/assets/notebook.png',
  },
  {
    id: 'harvest-supper',
    title: 'Harvest supper, and what the garden did',
    date: 'October 12, 2026',
    term: 'Autumn 2026',
    byline: 'Yara Haddad, art and making',
    excerpt:
      'Fourteen families, three pots of chowder, and a great deal of bread. The walled garden gave us 41 kilograms of tomatoes, which is a fact the Nursery class can now recite.',
    body: [
      'Fourteen families came on Friday for the harvest supper, which is fewer than last year and easier to seat. The walled garden produced 41 kilograms of tomatoes, nine pumpkins, and a quantity of chard that nobody could finish. The Nursery class weighed every load and kept a tally on the door of the shed.',
      'The tables were built in the shop last spring by Classes 5 and 6 and have already warped in one corner. We are calling that a design lesson and plan to fix it in January, with the same children.',
      'Thank you to everyone who carried a chair across the field in the dark.',
    ],
    image: '/assets/garden.png',
  },
  {
    id: 'boat-refit',
    title: 'The second boat comes back wet',
    date: 'May 21, 2026',
    term: 'Spring 2026',
    byline: 'Sam Whitlock, outdoor programme',
    excerpt:
      'Launch day. The old dory we spent the winter refitting floated exactly where it should, which is more than most of us expected.',
    body: [
      'Launch day went off at 2 p.m. with the tide coming in. The dory we spent the winter refitting floated exactly where it should, which is more than most of us expected by March.',
      'Eighteen children in Classes 6 to 8 worked on it: pulling the old paint, patching two seams, and arguing about the colour. It is now green. The argument is not settled.',
      'Both boats will come out of the water in late October. If you would like to help with the winter refit, Sam runs working Saturdays once a month and will give anyone a scraper.',
    ],
    image: '/assets/dock.png',
  },
  {
    id: 'class-eight-defends',
    title: 'Class 8 defends its notebooks',
    date: 'June 9, 2026',
    term: 'Spring 2026',
    byline: 'Marisol Okonkwo, head of school',
    excerpt:
      'Fifteen children, fifteen bound notebooks, two hours, and a room of parents and neighbors asking hard questions about horseshoe crabs.',
    body: [
      'Each June, our Class 8 sits down with the work they have kept for two years and defends it in front of an audience that did not have to be there. This is my favourite evening of the school year.',
      'This year the questions ranged from crab genetics to whether the school should moor fewer boats, and two children argued with each other productively for six minutes while everyone listened.',
      'What I noticed most was how they answered the question they were actually asked, and said "I don’t know yet" when that was the true answer. That is the habit we are trying to build. The notebooks are on display in the library until October.',
    ],
  },
  {
    id: 'storm-window',
    title: 'The storm window, and the week after',
    date: 'February 9, 2026',
    term: 'Winter 2026',
    byline: 'Ines Varga, kindergarten',
    excerpt:
      'We lost power for two days and gained a unit of study. Kindergarten’s weather chart now has a column for "wind that moved the chairs".',
    body: [
      'We lost power for two days in January and gained a unit of study. Kindergarten’s weather chart now has a column for "wind that moved the chairs", coded with tally marks, and a section for what the harbor did when the tide and the wind arrived together.',
      'The wet lab lost its chiller and one of the touch tanks, which we will not replace. The children wrote a letter to the harbormaster asking what happens to the animals during a storm, and he wrote back, at length. It is on the wall by the door.',
      'Thank you to the families who brought lanterns, and to the night crew who kept the pipes from freezing.',
    ],
    image: '/assets/netloft.png',
  },
];

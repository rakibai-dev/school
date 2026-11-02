export const admissionsIntro = {
  heading: 'Admission starts with a morning here.',
  body: 'We admit children into Nursery, Kindergarten, and the occasional open place in Classes 1 through 8. There is no test and no ranking. What we want to know is simple: who is your child, and is this a good place for them to spend a decade?',
};

export const admissionSteps = [
  {
    title: 'Come and see a normal Tuesday',
    body: 'Book a visiting morning. You will sit in on a class, walk the shore with whoever is teaching harbor studies that day, and have twenty minutes with Marisol, our head of school. Children are welcome and usually end up outside.',
    timing: 'September to January',
  },
  {
    title: 'Send the application',
    body: 'Six short questions, a records release, and a $75 fee that we waive on request. There is no essay and no portfolio. The deadline for the following September is January 15.',
    timing: 'By January 15',
  },
  {
    title: 'Your child spends the morning',
    body: 'Children applying for Kindergarten and above spend a morning with their class, without parents. They join the ordinary day: meeting, reading, recess, whatever is on. We watch how they settle, not how they perform.',
    timing: 'February 3 to 21',
  },
  {
    title: 'We talk, then write',
    body: 'A conversation with the class teacher and the head of school, then a decision letter on March 12. Siblings and children of employees are considered first, then everyone else in one pool.',
    timing: 'March 12',
  },
  {
    title: 'Sign and start',
    body: 'Contracts and a deposit are due April 1. In June we send the class list, the tide table for September, and a short note from your child’s teacher.',
    timing: 'April 1',
  },
] as const;

export const keyDates = [
  { date: 'November 14, 2026', event: 'Open house, 10 a.m. to noon', note: 'Whole school, no booking needed' },
  { date: 'December 4, 2026', event: 'Application portal opens', note: 'For entry in September 2027' },
  { date: 'January 15, 2027', event: 'Application deadline', note: 'Fee waivers available' },
  { date: 'February 3–21, 2027', event: 'Visiting mornings', note: 'Children only, by appointment' },
  { date: 'March 12, 2027', event: 'Decision letters sent', note: 'By email and post' },
  { date: 'April 1, 2027', event: 'Contracts and deposit due', note: '10% of tuition' },
] as const;

export const tuition = [
  { band: 'Nursery, three mornings', tuition: '$8,400', notes: 'Tuesday to Thursday, 8:20–12:30' },
  { band: 'Nursery, five mornings', tuition: '$12,600', notes: 'Monday to Friday, 8:20–12:30' },
  { band: 'Kindergarten', tuition: '$19,800', notes: 'Full day, 8:10–2:45' },
  { band: 'Classes 1–4', tuition: '$22,400', notes: 'Full day, 8:00–3:05' },
  { band: 'Classes 5–8', tuition: '$24,900', notes: 'Full day, 7:50–4:15' },
] as const;

export const tuitionNotes = [
  'Tuition includes lunch, books, materials, field trips within the county, and sailing.',
  'Aftercare until 5:30 p.m. is $1,450 a year, billed in two instalments.',
  'About one family in four receives need-based aid. We award it from a separate pool and do not consider ability to pay in admission decisions.',
  'Sibling discount: 12% on the second child, 18% on the third.',
] as const;

export const faqs = [
  {
    q: 'What does a visiting morning actually involve?',
    a: 'You arrive at 8:30, sign in at the net loft, and join a current class for the first block of the day. Afterwards you walk the campus with the head of school and sit down for questions. It lasts about two hours. Bring boots in wet weather; we usually end up on the flats.',
  },
  {
    q: 'Do you take children mid-year?',
    a: 'Sometimes. Places open when families move, most often in Classes 1 through 6. We keep a small waiting list and will call you if something opens. Mid-year admission follows the same visiting process, compressed into about two weeks.',
  },
  {
    q: 'How do you handle learning differences?',
    a: 'Our learning specialist works with about thirty children a week, in class and in small groups. We do not have a separate room or a separate curriculum. If a child needs more support than we can give well, we will say so early and help you find a better fit.',
  },
  {
    q: 'Is there a uniform or a phone policy?',
    a: 'No uniform. Clothes should survive dirt and water. Children in Classes 1 through 8 leave phones in their cubbies during the day; Class 8 may use them for field photography with a teacher’s permission.',
  },
  {
    q: 'What happens after Class 8?',
    a: 'Our graduates go on to eight or nine different schools, mostly day schools within an hour. We begin the secondary school conversation in Class 7 and help with applications, visits, and interviews through the autumn of Class 8.',
  },
  {
    q: 'Do you offer financial aid?',
    a: 'Yes. About one family in four receives aid, ranging from a few hundred dollars to more than half of tuition. Applications are made through Clarity and are considered separately from admission. The deadline is February 1.',
  },
] as const;

export const applicationQuestions = [
  'Tell us about your child in a few sentences.',
  'What do they love doing for a long time without being asked?',
  'What has been hard for them this year?',
] as const;

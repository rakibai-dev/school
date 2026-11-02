export type VisitFields = {
  name: string;
  email: string;
  childClass: string;
  date: string;
  notes: string;
};

export type VisitErrors = Partial<Record<keyof VisitFields, string>>;

export const classOptions = [
  'Nursery (age 3)',
  'Nursery (age 4)',
  'Kindergarten',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Not sure yet',
];

/** Visiting mornings run on Tuesdays and Thursdays. */
export function isVisitingDay(date: Date): boolean {
  const day = date.getDay();
  return day === 2 || day === 4;
}

export function nextVisitingDay(from: Date = new Date()): Date {
  const date = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  for (let i = 0; i < 14; i += 1) {
    if (isVisitingDay(date)) return date;
    date.setDate(date.getDate() + 1);
  }
  return date;
}

export function toInputValue(date: Date): string {
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

export function parseInputValue(value: string): Date | null {
  if (!value) return null;
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

export function formatLongDate(value: string | Date): string {
  const date = typeof value === 'string' ? parseInputValue(value) : value;
  if (!date) return 'the chosen morning';
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateVisit(fields: VisitFields): VisitErrors {
  const errors: VisitErrors = {};

  if (!fields.name.trim()) {
    errors.name = 'Add the name we should ask for at the door.';
  }

  if (!fields.email.trim()) {
    errors.email = 'Add an email address so we can confirm the morning.';
  } else if (!emailPattern.test(fields.email.trim())) {
    errors.email = 'That email address looks incomplete. Check it and try again.';
  }

  if (!fields.childClass) {
    errors.childClass = 'Choose the class your child would be joining.';
  }

  const date = parseInputValue(fields.date);
  if (!date) {
    errors.date = 'Choose a morning for your visit.';
  } else if (!isVisitingDay(date)) {
    const next = nextVisitingDay(date);
    errors.date = `Visiting mornings run on Tuesdays and Thursdays. The next one after that is ${formatLongDate(next)}.`;
  }

  return errors;
}

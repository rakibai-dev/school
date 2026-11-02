type TernMarkProps = {
  className?: string;
  withSun?: boolean;
};

/**
 * The school's mark: a tern riding still air, drawn as one continuous
 * line, with the midday sun kept as a small marigold note.
 */
export function TernMark({ className, withSun = false }: TernMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 24"
      role="img"
      aria-label="Tern Point mark"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {withSun ? <circle cx="25.6" cy="6.4" r="2.1" fill="var(--sun)" /> : null}
      <path
        d="M1.6 15.4C5.1 9.9 8.5 8.4 11.2 11.6c.9 1.1 1.4 2.5 1.7 4.3.3-2.9 1-5 2.3-6.3 2.6-2.6 5.9-1 9.4 4.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M13 15.9 15.6 21l2.4-4.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

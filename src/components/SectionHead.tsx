import type { ReactNode } from 'react';
import './SectionHead.css';

type SectionHeadProps = {
  id: string;
  title: ReactNode;
  intro?: ReactNode;
  action?: { label: string; to: string };
  tone?: 'paper' | 'ink';
};

export function SectionHead({ id, title, intro, action, tone = 'paper' }: SectionHeadProps) {
  return (
    <header className="section-head" data-tone={tone}>
      <h2 className="section-head__title" id={id}>
        {title}
      </h2>
      <div className="section-head__aside">
        {intro ? <p className="section-head__intro">{intro}</p> : null}
        {action ? (
          <a className="section-head__action" href={action.to}>
            {action.label}
          </a>
        ) : null}
      </div>
    </header>
  );
}

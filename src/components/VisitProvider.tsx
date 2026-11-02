import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { VisitDialog } from './VisitDialog';

type VisitContextValue = { openVisit: () => void };

const VisitContext = createContext<VisitContextValue | null>(null);

export function VisitProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openVisit = useCallback(() => setOpen(true), []);
  const closeVisit = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ openVisit }), [openVisit]);

  return (
    <VisitContext.Provider value={value}>
      {children}
      <VisitDialog open={open} onClose={closeVisit} />
    </VisitContext.Provider>
  );
}

export function useVisit(): VisitContextValue {
  const ctx = useContext(VisitContext);
  if (!ctx) throw new Error('useVisit must be used inside VisitProvider');
  return ctx;
}

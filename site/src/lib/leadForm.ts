import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import { scrollToId } from './scroll';

export type LeadFormFocus = 'name' | 'email' | 'company' | 'service' | 'message';

export interface LeadFormPrefill {
  service?: string;
  message?: string;
  focus?: LeadFormFocus;
}

interface LeadFormContextValue {
  prefill: LeadFormPrefill | null;
  open: (prefill?: LeadFormPrefill) => void;
  consume: () => void;
}

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [prefill, setPrefill] = useState<LeadFormPrefill | null>(null);

  const open = useCallback((next?: LeadFormPrefill) => {
    setPrefill(next ?? {});
    scrollToId('kontakt');
  }, []);

  const consume = useCallback(() => setPrefill(null), []);

  return createElement(
    LeadFormContext.Provider,
    { value: { prefill, open, consume } },
    children,
  );
};

export const useLeadForm = (): LeadFormContextValue => {
  const ctx = useContext(LeadFormContext);
  if (!ctx) throw new Error('useLeadForm must be used inside <LeadFormProvider>');
  return ctx;
};

import { useEffect, useRef, useState, type ReactNode } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const inView = rect.top < (window.innerHeight || 1000) && rect.bottom > 0;
    if (inView) {
      setShown(true);
      return;
    }

    const fallback = window.setTimeout(() => setShown(true), 600);
    let io: IntersectionObserver | undefined;
    try {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setShown(true);
              window.clearTimeout(fallback);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
      );
      io.observe(el);
    } catch {
      // ignore — fallback timer handles it
    }

    return () => {
      window.clearTimeout(fallback);
      io?.disconnect();
    };
  }, []);

  return [ref, shown] as const;
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, delay = 0, className = '' }: RevealProps) => {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

import { useEffect, useState, type MouseEvent } from 'react';
import { DTCLogo } from './Doodle';
import { useLeadForm } from '../lib/leadForm';
import { scrollToId } from '../lib/scroll';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'usluge', label: 'Usluge' },
  { id: 'proces', label: 'Proces' },
  { id: 'radovi', label: 'Radovi' },
  { id: 'o-nama', label: 'O nama' },
];

export const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(NAV_ITEMS[0].id);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { open: openLeadForm } = useLeadForm();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const elements = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [drawerOpen]);

  const onLinkClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActive(id);
    setDrawerOpen(false);
    scrollToId(id);
  };

  const onCtaClick = () => {
    setDrawerOpen(false);
    openLeadForm();
  };

  const onLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', window.location.pathname);
  };

  return (
    <>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          padding: scrolled ? '12px 24px' : '18px 32px',
          transition: 'padding 0.3s, background 0.3s, border-color 0.3s',
          background: scrolled ? 'rgba(245, 240, 230, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(26,22,20,0.1)' : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <a
            href="#"
            onClick={onLogoClick}
            aria-label="DTC — povratak na vrh"
            style={{ textDecoration: 'none', display: 'inline-flex' }}
          >
            <DTCLogo size={scrolled ? 20 : 22} />
          </a>

          <nav
            className="nav-links"
            aria-label="Glavna navigacija"
            style={{
              display: 'flex',
              gap: 4,
              padding: 5,
              background: '#fff',
              border: '1.5px solid var(--line)',
              borderRadius: 999,
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => onLinkClick(e, item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 99,
                    fontSize: 13,
                    fontWeight: 500,
                    background: isActive ? 'var(--accent)' : 'transparent',
                    color: isActive ? '#fff' : 'var(--ink)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="btn primary nav-cta"
            onClick={onCtaClick}
          >
            Zatraži ponudu →
          </button>

          <button
            type="button"
            className="nav-burger"
            aria-label={drawerOpen ? 'Zatvori meni' : 'Otvori meni'}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen((v) => !v)}
            style={{
              display: 'none',
              width: 44,
              height: 44,
              borderRadius: 999,
              border: '2px solid var(--line)',
              background: '#fff',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 18,
                height: 14,
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: 2,
                  background: 'var(--ink)',
                  borderRadius: 2,
                  top: drawerOpen ? 6 : 0,
                  transform: drawerOpen ? 'rotate(45deg)' : 'none',
                  transition: 'all 0.2s',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: 2,
                  top: 6,
                  background: 'var(--ink)',
                  borderRadius: 2,
                  opacity: drawerOpen ? 0 : 1,
                  transition: 'opacity 0.2s',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: 2,
                  background: 'var(--ink)',
                  borderRadius: 2,
                  bottom: drawerOpen ? 6 : 0,
                  transform: drawerOpen ? 'rotate(-45deg)' : 'none',
                  transition: 'all 0.2s',
                }}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobilni meni"
        hidden={!drawerOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          background: 'var(--paper)',
          padding: '24px 24px 32px',
          display: drawerOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: 24,
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <DTCLogo size={22} />
          <button
            type="button"
            aria-label="Zatvori meni"
            onClick={() => setDrawerOpen(false)}
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              border: '2px solid var(--line)',
              background: '#fff',
              cursor: 'pointer',
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <nav aria-label="Glavna navigacija (mobilna)">
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 4 }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => onLinkClick(e, item.id)}
                  style={{
                    display: 'block',
                    padding: '20px 16px',
                    fontSize: 32,
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: 'var(--ink)',
                    textDecoration: 'none',
                    borderBottom: '1.5px solid rgba(26,22,20,0.1)',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ marginTop: 'auto' }}>
          <button
            type="button"
            className="btn primary lg"
            onClick={onCtaClick}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Zatraži ponudu →
          </button>
          <a
            href="mailto:hello@dtc.hr"
            className="btn"
            style={{
              width: '100%',
              justifyContent: 'center',
              marginTop: 12,
              textDecoration: 'none',
            }}
          >
            hello@dtc.hr
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-burger { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
};

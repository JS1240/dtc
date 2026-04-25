import { useState } from 'react';
import { Doodle } from '../components/Doodle';
import { FAQS } from '../content/data';
import { useLeadForm } from '../lib/leadForm';

export const FAQSection = () => {
  const [open, setOpen] = useState(0);
  const { open: openLeadForm } = useLeadForm();

  return (
    <section>
      <div
        className="faq-grid"
        style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '360px 1fr', gap: 64 }}
      >
        <div>
          <div className="eyebrow">pitanja</div>
          <h2 className="h-lg" style={{ fontSize: 48, marginTop: 8 }}>
            Najčešće dileme, brzi odgovori.
          </h2>
          <div className="body" style={{ marginTop: 20, maxWidth: 300 }}>
            Ne vidite svoje pitanje? Pošaljite nam poruku — odgovaramo u roku od 24h.
          </div>
          <button
            type="button"
            className="btn"
            style={{ marginTop: 24 }}
            onClick={() => openLeadForm({ focus: 'message' })}
          >
            <Doodle.Chat size={18} color="currentColor" /> Postavi pitanje
          </button>
        </div>
        <div>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div
                key={f.q}
                style={{
                  borderBottom: '1.5px solid var(--line)',
                  borderTop: i === 0 ? '1.5px solid var(--line)' : 'none',
                }}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: '20px 4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 20,
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: 'var(--ink)',
                    fontFamily: 'inherit',
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em' }}>{f.q}</span>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 99,
                      background: isOpen ? 'var(--accent)' : 'transparent',
                      border: '1.5px solid var(--line)',
                      color: isOpen ? '#fff' : 'var(--ink)',
                      display: 'grid',
                      placeItems: 'center',
                      fontSize: 18,
                      flexShrink: 0,
                      transition: 'all 0.2s',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  style={{
                    maxHeight: isOpen ? 600 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s',
                  }}
                >
                  <div
                    style={{
                      fontSize: 14.5,
                      color: 'var(--ink-2)',
                      lineHeight: 1.6,
                      paddingBottom: 20,
                      paddingRight: 48,
                    }}
                  >
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`@media (max-width: 820px) {
        .faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      }`}</style>
    </section>
  );
};

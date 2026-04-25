import { Reveal } from '../components/Reveal';
import { Doodle } from '../components/Doodle';
import { CASE_HERO } from '../content/data';
import { useLeadForm } from '../lib/leadForm';

const STAT_BG = ['var(--accent-soft)', 'var(--blue)', 'var(--yellow)', 'var(--green)'];

const SOLUTION_POINTS = [
  'AI agent za obradu narudžbi 24/7',
  'Automatizacija fakturiranja i CRM sync',
  'Redizajn checkout flow-a',
  'Integracija s Shopify i HubSpot',
];

export const CaseStudyDetail = () => {
  const { open } = useLeadForm();

  const onAskAboutCase = () => {
    open({
      service: 'AI agenti',
      message: `Zanima me case study ${CASE_HERO.client} (${CASE_HERO.tag}). Možete li mi poslati više detalja o pristupu i implementaciji?`,
      focus: 'message',
    });
  };

  return (
    <section>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div className="eyebrow">case study</div>
          <h2 className="h-lg" style={{ fontSize: 52, marginTop: 8, maxWidth: 900 }}>
            {CASE_HERO.title}
          </h2>
        </Reveal>

        <div
          className="case-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 40, marginTop: 48 }}
        >
          <Reveal>
            <div className="sticker" style={{ padding: 28, background: '#fff' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 24,
                }}
              >
                <span className="tag accent">{CASE_HERO.tag}</span>
                <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>
                  CASE /01
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {CASE_HERO.stats.map((s, i) => (
                  <div
                    key={s.l}
                    style={{
                      padding: '20px 16px',
                      background: STAT_BG[i],
                      border: '1.5px solid var(--line)',
                      borderRadius: 10,
                    }}
                  >
                    <div className="h-display" style={{ fontSize: 44, letterSpacing: '-0.04em' }}>
                      {s.n}
                    </div>
                    <div style={{ fontSize: 13, marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 24,
                  padding: 20,
                  background: 'var(--paper-2)',
                  borderRadius: 10,
                  borderLeft: '3px solid var(--accent)',
                }}
              >
                <div className="hand" style={{ fontSize: 17, lineHeight: 1.5 }}>
                  "{CASE_HERO.quote}"
                </div>
                <div style={{ fontSize: 12, marginTop: 12, color: 'var(--ink-2)', fontWeight: 600 }}>
                  — {CASE_HERO.by}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="stack gap-24">
              <div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>
                  KLIJENT
                </div>
                <div style={{ fontWeight: 700, fontSize: 18 }}>{CASE_HERO.client}</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>
                  KONTEKST
                </div>
                <div className="body">{CASE_HERO.context}</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>
                  RJEŠENJE
                </div>
                <div className="stack gap-8">
                  {SOLUTION_POINTS.map((x) => (
                    <div
                      key={x}
                      style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14 }}
                    >
                      <Doodle.Check size={18} color="var(--accent)" />
                      {x}
                    </div>
                  ))}
                </div>
              </div>
              <button type="button" className="btn" onClick={onAskAboutCase}>
                Pitaj o ovom projektu →
              </button>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@media (max-width: 820px) {
        .case-grid { grid-template-columns: 1fr !important; }
      }`}</style>
    </section>
  );
};

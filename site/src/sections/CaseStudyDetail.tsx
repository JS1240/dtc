import { Reveal } from '../components/Reveal';
import { Doodle } from '../components/Doodle';
import { CASE_HERO, CASE_SECONDARY } from '../content/data';
import { useLeadForm } from '../lib/leadForm';

const STAT_BG = ['var(--accent-soft)', 'var(--blue)', 'var(--yellow)', 'var(--green)'];

export const CaseStudyDetail = () => {
  const { open } = useLeadForm();

  const onAskAboutCase = () => {
    open({
      service: 'Custom software',
      message: `Zanima me projekt ${CASE_HERO.client} (${CASE_HERO.tag}). Možete li mi poslati više detalja o pristupu i implementaciji?`,
      focus: 'message',
    });
  };

  return (
    <section>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div className="eyebrow">odabrani radovi</div>
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
                  gap: 12,
                  flexWrap: 'wrap',
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
                    <div className="h-display" style={{ fontSize: 34, letterSpacing: '-0.04em' }}>
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <img
                  src={CASE_HERO.logo}
                  alt={`${CASE_HERO.client} logo`}
                  style={{ maxHeight: 40, maxWidth: 140, objectFit: 'contain', display: 'block' }}
                />
                <a
                  href={CASE_HERO.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginLeft: 'auto',
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 600,
                    fontSize: 13,
                    color: 'var(--ink)',
                    textDecoration: 'underline',
                  }}
                >
                  {CASE_HERO.url.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗
                </a>
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
                  {CASE_HERO.solution.map((x) => (
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

        <Reveal delay={200}>
          <div
            className="case-card-secondary"
            style={{
              marginTop: 56,
              display: 'grid',
              gridTemplateColumns: '160px 1fr auto',
              gap: 28,
              alignItems: 'center',
              padding: '24px 28px',
              background: '#fff',
              border: '2px solid var(--line)',
              borderRadius: '12px 8px 12px 10px / 10px 12px 8px 12px',
              boxShadow: '4px 4px 0 var(--line)',
            }}
          >
            <img
              src={CASE_SECONDARY.logo}
              alt={`${CASE_SECONDARY.client} logo`}
              style={{ maxHeight: 96, maxWidth: 160, objectFit: 'contain', display: 'block' }}
            />
            <div className="stack gap-8">
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ fontWeight: 800, fontSize: 18 }}>{CASE_SECONDARY.client}</div>
                <span className="tag yellow" style={{ fontSize: 11 }}>
                  {CASE_SECONDARY.tag}
                </span>
              </div>
              <div className="body" style={{ fontSize: 15 }}>
                {CASE_SECONDARY.summary}
              </div>
            </div>
            <a
              href={CASE_SECONDARY.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ fontSize: 13 }}
            >
              Posjeti ↗
            </a>
          </div>
        </Reveal>
      </div>
      <style>{`@media (max-width: 820px) {
        .case-grid { grid-template-columns: 1fr !important; }
        .case-card-secondary { grid-template-columns: 1fr !important; text-align: left; }
      }`}</style>
    </section>
  );
};

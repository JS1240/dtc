import type { CSSProperties } from 'react';
import { Reveal } from '../components/Reveal';
import { PROCESS } from '../content/data';

export const ProcessZigzag = () => (
  <section
    style={{
      background: 'var(--paper-2)',
      borderTop: '2px solid var(--line)',
      borderBottom: '2px solid var(--line)',
    }}
  >
    <div style={{ maxWidth: 980, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Reveal>
          <div className="eyebrow">kako radimo</div>
          <h2 className="h-lg" style={{ fontSize: 52, marginTop: 8 }}>
            Pet koraka do{' '}
            <span className="squiggle">
              lansiranja
              <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                <path
                  d="M2 14 Q 50 2, 100 10 T 198 6"
                  stroke="var(--accent)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            .
          </h2>
        </Reveal>
      </div>

      <div className="stack gap-16" style={{ position: 'relative' }}>
        {PROCESS.map((p, i) => (
          <Reveal key={p.n} delay={i * 80}>
            <div
              className="proc-row"
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'center',
                flexDirection: i % 2 ? 'row-reverse' : 'row',
              }}
            >
              <div
                className="sticker tilt"
                style={{
                  flex: 1,
                  maxWidth: 520,
                  padding: '22px 26px',
                  background: '#fff',
                  transform: `rotate(${i % 2 ? 1.2 : -1.2}deg)`,
                  position: 'relative',
                }}
              >
                {i === 0 && <div className="tape" style={{ top: -11, left: 40, transform: 'rotate(-4deg)' }} />}
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 99,
                      background: 'var(--accent)',
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      fontFamily: 'var(--font-ui)',
                      fontWeight: 800,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {p.n}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        gap: 12,
                        flexWrap: 'wrap',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-ui)',
                          fontWeight: 800,
                          fontSize: 22,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {p.t}
                      </div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>
                        {p.dur}
                      </div>
                    </div>
                    <div style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 4, lineHeight: 1.5 }}>
                      {p.d}
                    </div>
                  </div>
                </div>
              </div>
              {i < PROCESS.length - 1 && (
                <div className="proc-arrow" style={{ width: 100, display: 'grid', placeItems: 'center' }}>
                  <svg
                    width="80"
                    height="48"
                    className="draw in"
                    style={{ ['--dash' as string]: 120 } as CSSProperties}
                  >
                    <path
                      d={i % 2 ? 'M75 8 Q 40 48, 5 32' : 'M5 8 Q 40 48, 75 32'}
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="5 5"
                    />
                  </svg>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
    <style>{`@media (max-width: 820px) {
      .proc-row { flex-direction: column !important; }
      .proc-arrow { transform: rotate(90deg); }
    }`}</style>
  </section>
);

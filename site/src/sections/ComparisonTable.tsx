import { Reveal } from '../components/Reveal';
import { Doodle } from '../components/Doodle';
import { COMPARISON } from '../content/data';

export const ComparisonTable = () => (
  <section>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="eyebrow">zašto DTC</div>
          <h2 className="h-lg" style={{ fontSize: 52, marginTop: 8 }}>
            Jedan partner &gt;{' '}
            <span style={{ fontFamily: 'var(--font-script)', color: 'var(--accent)', fontWeight: 600 }}>
              pet freelancera
            </span>
            .
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="sticker" style={{ padding: 0, overflow: 'hidden', background: '#fff' }}>
          <div
            className="comp-head"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.7fr repeat(3, 1fr)',
              borderBottom: '2px solid var(--line)',
            }}
          >
            <div style={{ padding: '18px 20px' }} />
            {COMPARISON.cols.map((c, i) => (
              <div
                key={c}
                style={{
                  padding: '18px 16px',
                  textAlign: 'center',
                  background: i === 0 ? 'var(--ink)' : 'transparent',
                  color: i === 0 ? '#fff' : 'var(--ink)',
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: '-0.01em',
                  borderLeft: '2px solid var(--line)',
                }}
              >
                {i === 0 ? (
                  <span>
                    DTC{' '}
                    <Doodle.Sparkle
                      size={14}
                      color="var(--accent)"
                      style={{ verticalAlign: 'middle', marginLeft: 4 }}
                    />
                  </span>
                ) : (
                  c
                )}
              </div>
            ))}
          </div>
          {COMPARISON.rows.map((r, i) => (
            <div
              key={r.feat}
              className="comp-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.7fr repeat(3, 1fr)',
                borderBottom:
                  i === COMPARISON.rows.length - 1 ? 'none' : '1px solid rgba(26,22,20,0.08)',
              }}
            >
              <div style={{ padding: '16px 20px', fontSize: 15 }}>{r.feat}</div>
              {r.vals.map((v, j) => (
                <div
                  key={j}
                  style={{
                    padding: 16,
                    textAlign: 'center',
                    background: j === 0 ? 'var(--accent-soft)' : 'transparent',
                    borderLeft: '2px solid var(--line)',
                  }}
                >
                  {v === true ? (
                    <Doodle.Check size={22} color={j === 0 ? 'var(--accent)' : 'var(--ink-2)'} />
                  ) : v === false ? (
                    <Doodle.Cross size={22} />
                  ) : (
                    <span
                      style={{
                        color: 'var(--muted)',
                        fontFamily: 'var(--font-script)',
                        fontSize: 18,
                      }}
                    >
                      djelomično
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
    <style>{`@media (max-width: 820px) {
      .comp-head, .comp-row { grid-template-columns: 1fr 60px 60px 60px !important; }
      .comp-head > div, .comp-row > div { font-size: 12px !important; padding: 10px 8px !important; }
    }`}</style>
  </section>
);

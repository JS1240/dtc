// Variation B — "Playful Sketch"
// Mood: warm, hand-drawn, friendly, with arrows and annotations everywhere
// Layout: asymmetric, overlapping cards, bento-style services
// Interaction: cards tilt on hover, scroll-triggered annotation reveal

const VariationB = () => {
  const [hoverService, setHoverService] = React.useState(-1);
  return (
    <div className="wf wf-scroll" style={{ background: 'var(--paper)' }}>
      {/* NAV — more casual */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 40px',
      }}>
        <Logo />
        <div style={{
          display: 'flex', gap: 8, padding: 6,
          background: '#fff', border: '2px solid var(--line)', borderRadius: 999,
        }}>
          {['Usluge', 'Proces', 'Radovi', 'Kontakt'].map((l, i) =>
            <span key={i} style={{ padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 500, background: i === 0 ? 'var(--accent)' : 'transparent', color: i === 0 ? '#fff' : 'var(--ink)' }}>{l}</span>
          )}
        </div>
        <button className="wf-btn primary">Razgovarajmo →</button>
      </div>

      {/* HERO — asymmetric with overlap */}
      <section style={{ padding: '60px 40px 120px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div className="wf-tag accent" style={{ marginBottom: 24 }}>✦ Studio iz Zagreba</div>
            <h1 className="wf-h1" style={{ fontSize: 88, lineHeight: 0.95 }}>
              Gradimo vašu <br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                digitalnu
                <svg style={{ position: 'absolute', left: -6, bottom: -14, width: '105%', height: 20 }} viewBox="0 0 400 20" preserveAspectRatio="none">
                  <path d="M0 12 Q 100 0, 200 10 T 400 8" fill="none" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span><br />
              budućnost.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--ink-2)', marginTop: 32, maxWidth: 480 }}>
              Web stranice, AI agenti, automatizacije i custom software —
              sve što vaš biznis treba pod jednim krovom.
            </p>
            <div className="row gap-12" style={{ marginTop: 32 }}>
              <button className="wf-btn accent">Zakaži razgovor →</button>
              <button className="wf-btn ghost" style={{ border: 'none' }}>
                <span style={{ fontFamily: 'var(--font-script)', fontSize: 20 }}>ili pogledajte naš rad ↗</span>
              </button>
            </div>

            <Annotation style={{ top: -20, left: 280, fontSize: 26, transform: 'rotate(-6deg)' }}>
              besplatna prva konzultacija!
            </Annotation>
            <Arrow style={{ top: 10, left: 360, transform: 'rotate(140deg)' }} />
          </div>

          {/* Collage of sketchy cards */}
          <div style={{ position: 'relative', height: 480 }}>
            <div className="wf-box rough" style={{ position: 'absolute', top: 0, right: 40, width: 220, height: 160, padding: 16, background: 'var(--yellow)', transform: 'rotate(4deg)' }}>
              <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.6, marginBottom: 8 }}>AI CHATBOT</div>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: 22, lineHeight: 1.1 }}>"Bok! Kako vam mogu pomoći?"</div>
              <div style={{ position: 'absolute', bottom: 12, right: 12, fontSize: 32 }}>✦</div>
            </div>
            <div className="wf-box rough" style={{ position: 'absolute', top: 120, left: 20, width: 240, height: 200, background: '#fff', transform: 'rotate(-3deg)', padding: 16 }}>
              <div className="wf-img" style={{ height: '100%', borderRadius: 4 }}>screenshot: dashboard</div>
            </div>
            <div className="wf-box rough" style={{ position: 'absolute', top: 200, right: 0, width: 260, height: 140, background: 'var(--accent)', color: '#fff', padding: 18, transform: 'rotate(5deg)' }}>
              <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.8, marginBottom: 4 }}>REZULTAT</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 36, lineHeight: 1 }}>+250%</div>
              <div style={{ fontSize: 13, marginTop: 4 }}>konverzija na landing page</div>
            </div>
            <div className="wf-box rough" style={{ position: 'absolute', bottom: 0, left: 80, width: 180, height: 110, background: 'var(--blue-soft)', padding: 14, transform: 'rotate(-2deg)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, marginBottom: 6 }}>AUTOMATIZACIJA</div>
              <div className="stack gap-4">
                <div style={{ fontSize: 12 }}>✓ Sync CRM</div>
                <div style={{ fontSize: 12 }}>✓ Email flow</div>
                <div style={{ fontSize: 12, color: 'var(--accent)' }}>↻ Running…</div>
              </div>
            </div>
            <Annotation style={{ top: 60, left: 150, fontSize: 18, transform: 'rotate(8deg)', color: 'var(--blue)' }}>AI agent ↘</Annotation>
          </div>
        </div>
      </section>

      <div className="wf-squiggle" style={{ margin: '0 40px' }} />

      {/* SERVICES — bento */}
      <section style={{ padding: '80px 40px' }}>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 32, color: 'var(--accent)' }}>što radimo</div>
            <h2 className="wf-h2" style={{ fontSize: 52 }}>Sve na jednom mjestu.</h2>
          </div>
          <div style={{ fontSize: 13, color: 'var(--ink-2)', maxWidth: 280, textAlign: 'right' }}>
            Jedan partner umjesto pet agencija.<br/>Manje koordinacije, više rezultata.
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridAutoRows: 180,
          gap: 16,
        }}>
          {SERVICES.map((s, i) => {
            // bento sizing
            const spans = [
              { grid: 'span 3 / span 3', bg: 'var(--accent)', color: '#fff' },
              { grid: 'span 3 / span 3', bg: '#fff' },
              { grid: 'span 2 / span 2', bg: 'var(--blue-soft)' },
              { grid: 'span 2 / span 2', bg: 'var(--green-soft)' },
              { grid: 'span 2 / span 2', bg: 'var(--ink)', color: '#fff' },
            ];
            const cfg = spans[i] || spans[0];
            return (
              <div
                key={i}
                onMouseEnter={() => setHoverService(i)}
                onMouseLeave={() => setHoverService(-1)}
                className="wf-box rough"
                style={{
                  gridColumn: cfg.grid, padding: 24,
                  background: cfg.bg, color: cfg.color || 'var(--ink)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  transform: hoverService === i ? 'translate(-4px, -4px) rotate(-0.5deg)' : 'none',
                  boxShadow: hoverService === i ? '8px 8px 0 var(--line)' : 'none',
                  position: 'relative',
                  cursor: 'pointer',
                }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 24, marginBottom: 8 }}>{s.t}</div>
                <div style={{ fontSize: 13, opacity: 0.85 }}>{s.d}</div>
                <div style={{ position: 'absolute', bottom: 16, right: 16, fontSize: 20 }}>→</div>
              </div>
            );
          })}
        </div>
        <Annotation style={{ position: 'static', display: 'block', marginTop: 24, fontSize: 20, color: 'var(--muted)', transform: 'rotate(-1deg)' }}>
          ↑ hoveraj pa gledaj kako se diže
        </Annotation>
      </section>

      {/* PROCESS — zigzag timeline */}
      <section style={{ padding: '80px 40px', background: 'var(--paper-2)', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: 'var(--font-script)', fontSize: 32, color: 'var(--accent)' }}>kako radimo</div>
          <h2 className="wf-h2" style={{ fontSize: 52 }}>Pet koraka do lansiranja.</h2>
        </div>
        <div className="stack gap-24" style={{ maxWidth: 820, margin: '0 auto', position: 'relative' }}>
          {PROCESS.map((p, i) => (
            <div key={i} className="row gap-24" style={{
              alignItems: 'center',
              flexDirection: i % 2 ? 'row-reverse' : 'row',
            }}>
              <div className="wf-box rough" style={{
                width: 420, padding: 20, background: '#fff',
                transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)`,
              }}>
                <div className="row gap-12" style={{ alignItems: 'center', marginBottom: 8 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 99, background: 'var(--accent)',
                    color: '#fff', display: 'grid', placeItems: 'center',
                    fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 14,
                  }}>{p.n}</div>
                  <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 22 }}>{p.t}</div>
                </div>
                <div style={{ fontSize: 14, color: 'var(--ink-2)' }}>{p.d}</div>
              </div>
              {i < PROCESS.length - 1 && (
                <svg width="80" height="40" style={{ opacity: 0.6 }}>
                  <path d={i % 2 ? "M75 5 Q 40 40, 5 30" : "M5 5 Q 40 40, 75 30"} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS — sticky notes */}
      <section style={{ padding: '80px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: 'var(--font-script)', fontSize: 32, color: 'var(--accent)' }}>što kažu klijenti</div>
          <h2 className="wf-h2" style={{ fontSize: 52 }}>Rezultati govore.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="wf-box rough" style={{
              padding: 24,
              background: ['var(--yellow)', 'var(--pink)', 'var(--blue-soft)'][i],
              transform: `rotate(${[-2, 1, -1][i]}deg)`,
              boxShadow: '4px 4px 0 rgba(0,0,0,0.1)',
            }}>
              <div style={{ fontSize: 32, opacity: 0.4, lineHeight: 1 }}>"</div>
              <div style={{ fontFamily: 'var(--font-hand)', fontSize: 18, lineHeight: 1.4, marginTop: -8, marginBottom: 20 }}>
                {t.q}
              </div>
              <div className="row gap-12" style={{ alignItems: 'center' }}>
                <div style={{ width: 36, height: 36, borderRadius: 99, background: 'rgba(0,0,0,0.15)' }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{t.a}</div>
                  <div style={{ fontSize: 11, opacity: 0.7 }}>{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 40px', textAlign: 'center', background: 'var(--ink)', color: '#fff', position: 'relative' }}>
        <div style={{ fontFamily: 'var(--font-script)', fontSize: 32, color: 'var(--accent)', marginBottom: 12 }}>što kažete?</div>
        <h2 className="wf-h1" style={{ fontSize: 80, maxWidth: 800, margin: '0 auto' }}>
          Napravimo nešto zajedno.
        </h2>
        <div className="row gap-16" style={{ justifyContent: 'center', marginTop: 40 }}>
          <button className="wf-btn accent" style={{ padding: '16px 28px', fontSize: 15 }}>Zakaži besplatan razgovor →</button>
        </div>
        <div style={{ marginTop: 24, fontSize: 13, opacity: 0.6 }}>30 minuta · bez obveze · odgovor u 24h</div>
      </section>
    </div>
  );
};

window.VariationB = VariationB;

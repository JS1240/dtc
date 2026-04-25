// Variation A — "Editorial / Bold typography"
// Mood: minimal premium, black on cream, big type, quiet interactions
// Layout: classic top-down with oversized hero type, services as numbered list

const VariationA = () => {
  const [openFaq, setOpenFaq] = React.useState(0);
  return (
    <div className="wf wf-scroll" style={{ background: 'var(--paper)' }}>
      <Nav cta="Zakaži razgovor" soft />

      {/* HERO */}
      <section style={{ padding: '80px 56px 100px', position: 'relative' }}>
        <div className="wf-eyebrow" style={{ marginBottom: 24 }}>DIGITAL TRANSFORMATION COMPANY — EST. 2024</div>
        <h1 className="wf-h1" style={{ fontSize: 120, maxWidth: 1100 }}>
          Gradimo<br />
          vašu <span className="wf-underline" style={{ fontStyle: 'italic', fontWeight: 500 }}>digitalnu</span><br />
          budućnost.
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 56, gap: 48 }}>
          <div style={{ maxWidth: 420 }}>
            <TextBlock lines={3} widths={['100%', '95%', '70%']} />
          </div>
          <div className="row gap-12">
            <button className="wf-btn primary sq" style={{ padding: '14px 24px', fontSize: 14 }}>Zakaži razgovor →</button>
            <button className="wf-btn sq" style={{ padding: '14px 24px', fontSize: 14 }}>Naš rad</button>
          </div>
        </div>
        <Annotation style={{ top: 180, right: 80, fontSize: 24 }}>oversized wordmark ↙</Annotation>
      </section>

      {/* LOGO TICKER */}
      <section style={{ borderTop: '2px solid var(--line)', borderBottom: '2px solid var(--line)', padding: '20px 0', overflow: 'hidden', background: 'var(--paper-2)' }}>
        <div className="wf-ticker" style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 18, opacity: 0.5 }}>
          {['ACME CORP', 'NOVA BANKA', 'STUDIO ART', 'LOGISTIKA+', 'RETAIL CO', 'FINTECH HR', 'ACME CORP', 'NOVA BANKA', 'STUDIO ART', 'LOGISTIKA+', 'RETAIL CO', 'FINTECH HR'].map((l, i) =>
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 48 }}>{l} <span style={{ color: 'var(--accent)' }}>✦</span></span>
          )}
        </div>
      </section>

      {/* SERVICES — numbered list */}
      <section style={{ padding: '80px 56px' }}>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div className="wf-eyebrow" style={{ marginBottom: 12 }}>USLUGE / 01</div>
            <h2 className="wf-h2" style={{ fontSize: 56, maxWidth: 700 }}>Pet stupova digitalne transformacije.</h2>
          </div>
        </div>
        <div className="stack">
          {SERVICES.map((s, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr 2fr 100px',
              alignItems: 'center', gap: 32, padding: '28px 0',
              borderTop: '1.5px solid var(--line)',
              borderBottom: i === SERVICES.length - 1 ? '1.5px solid var(--line)' : 'none',
            }}>
              <div className="wf-eyebrow">0{i + 1}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.02em' }}>{s.t}</div>
              <div style={{ fontSize: 15, color: 'var(--ink-2)', maxWidth: 480 }}>{s.d}</div>
              <div style={{ textAlign: 'right', fontSize: 14 }}>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS — horizontal strip */}
      <section style={{ padding: '80px 56px', background: 'var(--paper-2)', borderTop: '2px solid var(--line)', borderBottom: '2px solid var(--line)' }}>
        <div className="wf-eyebrow" style={{ marginBottom: 12 }}>PROCES / 02</div>
        <h2 className="wf-h2" style={{ fontSize: 56, marginBottom: 56 }}>Od ideje do lansiranja.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24, position: 'relative' }}>
          {PROCESS.map((p, i) => (
            <div key={i} className="stack gap-12">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)' }}>{p.n}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 22 }}>{p.t}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section style={{ padding: '80px 56px' }}>
        <div className="wf-eyebrow" style={{ marginBottom: 12 }}>RADOVI / 03</div>
        <h2 className="wf-h2" style={{ fontSize: 56, marginBottom: 48 }}>Rezultati, ne obećanja.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {CASES.map((c, i) => (
            <div key={i} className="wf-box" style={{ padding: 28, background: c.c }}>
              <div className="row" style={{ justifyContent: 'space-between', marginBottom: 80 }}>
                <span className="wf-tag">{c.tag}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>CASE 0{i + 1}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 28, marginBottom: 8 }}>{c.t}</div>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: 28, color: 'var(--ink)' }}>{c.m}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL — single big quote */}
      <section style={{ padding: '100px 56px', background: 'var(--ink)', color: '#fff' }}>
        <div style={{ fontSize: 80, lineHeight: 1, color: 'var(--accent)' }}>"</div>
        <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 40, lineHeight: 1.2, letterSpacing: '-0.02em', maxWidth: 1100, marginTop: -20 }}>
          {TESTIMONIALS[0].q}
        </div>
        <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 99, background: 'var(--accent)' }} />
          <div>
            <div style={{ fontWeight: 600 }}>{TESTIMONIALS[0].a}</div>
            <div style={{ fontSize: 13, opacity: 0.6 }}>{TESTIMONIALS[0].r}</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 56px' }}>
        <div className="row" style={{ gap: 80 }}>
          <div style={{ flex: '0 0 360px' }}>
            <div className="wf-eyebrow" style={{ marginBottom: 12 }}>FAQ / 04</div>
            <h2 className="wf-h2" style={{ fontSize: 48 }}>Često postavljana pitanja.</h2>
          </div>
          <div className="stack" style={{ flex: 1 }}>
            {FAQ_ITEMS.map((f, i) => (
              <div key={i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ borderTop: '1.5px solid var(--line)', padding: '20px 0', cursor: 'pointer' }}>
                <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 600, fontSize: 18 }}>{f.q}</div>
                  <div style={{ fontSize: 24, color: 'var(--accent)' }}>{openFaq === i ? '−' : '+'}</div>
                </div>
                {openFaq === i && <div style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 12, maxWidth: 500 }}>{f.a}</div>}
              </div>
            ))}
            <div style={{ borderTop: '1.5px solid var(--line)' }} />
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section style={{ padding: '120px 56px 80px', background: 'var(--paper-2)', borderTop: '2px solid var(--line)' }}>
        <h2 className="wf-h1" style={{ fontSize: 96, maxWidth: 900 }}>
          Spremni?<br />
          <span style={{ fontStyle: 'italic', fontWeight: 500 }}>Razgovarajmo.</span>
        </h2>
        <div className="row gap-16" style={{ marginTop: 48 }}>
          <button className="wf-btn accent sq" style={{ padding: '18px 32px', fontSize: 15 }}>Zakaži 30-min razgovor →</button>
          <button className="wf-btn sq" style={{ padding: '18px 32px', fontSize: 15 }}>hello@dtc.hr</button>
        </div>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 120, paddingTop: 32, borderTop: '1.5px solid var(--line)', fontSize: 12, color: 'var(--ink-2)' }}>
          <Logo />
          <div>© 2026 DTC — Digital Transformation Company, Zagreb</div>
          <div className="row gap-16">
            <span>LinkedIn</span><span>Instagram</span><span>GitHub</span>
          </div>
        </div>
      </section>
    </div>
  );
};

window.VariationA = VariationA;

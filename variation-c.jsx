// Variation C — "Dark / Technical / AI-forward"
// Mood: futuristic, dark, monospace accents, terminal vibes
// Layout: grid-heavy, diagram-driven, code snippets visible
// Interaction: animated scanlines, typing effect simulated, hover glow

const VariationC = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <div className="wf wf-scroll dark" style={{ background: '#0a0a0a' }}>
      {/* NAV */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 40px', borderBottom: '1px solid #222',
        fontFamily: 'var(--font-mono)', fontSize: 12,
      }}>
        <div className="row gap-24" style={{ alignItems: 'center' }}>
          <Logo dark />
          <span style={{ color: '#4ade80' }}>● online</span>
        </div>
        <div className="row gap-24" style={{ color: '#999' }}>
          <span>~/usluge</span><span>~/proces</span><span>~/radovi</span><span>~/kontakt</span>
        </div>
        <button className="wf-btn" style={{ background: '#fff', color: '#000', fontFamily: 'var(--font-mono)', fontSize: 12 }}>$ book --consult</button>
      </div>

      {/* HERO */}
      <section style={{ padding: '80px 40px', position: 'relative', overflow: 'hidden' }}>
        {/* grid backdrop */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
          backgroundSize: '40px 40px', opacity: 0.5,
        }} />
        {/* glow */}
        <div style={{
          position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,91,46,0.3), transparent 70%)',
        }} />

        <div style={{ position: 'relative', maxWidth: 1100 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#4ade80', marginBottom: 24 }}>
            $ dtc init --mission<span style={{ animation: 'blink 1s infinite' }}>_</span>
          </div>
          <h1 className="wf-h1" style={{ fontSize: 96, color: '#fff', lineHeight: 0.95 }}>
            Gradimo vašu <br />
            <span style={{ color: 'var(--accent)' }}>digitalnu budućnost</span>
            <span style={{ color: '#4ade80' }}>.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: '#999', maxWidth: 600, marginTop: 32, lineHeight: 1.7 }}>
            {'> '}Web · AI agenti · Automatizacije · Custom software<br />
            {'> '}Jedan partner. Jedan ugovor. Mjerljivi rezultati.
          </p>
          <div className="row gap-12" style={{ marginTop: 40 }}>
            <button className="wf-btn primary sq" style={{ background: 'var(--accent)', border: '1px solid var(--accent)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 13 }}>$ book_consult →</button>
            <button className="wf-btn sq" style={{ border: '1px solid #444', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 13 }}>$ view_cases</button>
          </div>

          {/* Stat grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#222', border: '1px solid #222', marginTop: 80 }}>
            {[
              { k: 'Projekata', v: '47+' },
              { k: 'AI agenata', v: '120+' },
              { k: 'Zadovoljnih klijenata', v: '98%' },
              { k: 'Prosječna ušteda', v: '32h/tj' },
            ].map((s, i) => (
              <div key={i} style={{ padding: 24, background: '#0a0a0a' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#666', marginBottom: 8 }}>{`{ ${s.k.toLowerCase().replace(' ', '_')} }`}</div>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 40, color: '#fff' }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — tabbed terminal */}
      <section style={{ padding: '80px 40px', borderTop: '1px solid #222' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#666', marginBottom: 8 }}>// 01 / usluge</div>
        <h2 className="wf-h2" style={{ fontSize: 56, color: '#fff', marginBottom: 40 }}>Stack koji pokrećemo.</h2>

        <div className="row" style={{ gap: 2, marginBottom: 0, flexWrap: 'wrap' }}>
          {SERVICES.map((s, i) => (
            <button key={i} onClick={() => setTab(i)} style={{
              padding: '12px 20px', border: 'none',
              background: tab === i ? '#1a1a1a' : 'transparent',
              color: tab === i ? '#fff' : '#666',
              fontFamily: 'var(--font-mono)', fontSize: 12,
              borderTop: tab === i ? '2px solid var(--accent)' : '2px solid transparent',
              cursor: 'pointer',
            }}>
              {s.icon} {s.t.toLowerCase()}
            </button>
          ))}
        </div>

        <div style={{
          background: '#1a1a1a', border: '1px solid #222', padding: 32,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40,
        }}>
          <div>
            <div className="wf-tag" style={{ background: 'rgba(255,91,46,0.15)', border: '1px solid var(--accent)', color: 'var(--accent)', marginBottom: 20 }}>
              ✦ {SERVICES[tab].t}
            </div>
            <h3 style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 28, color: '#fff', marginBottom: 12 }}>{SERVICES[tab].d}</h3>
            <div className="stack gap-8" style={{ marginTop: 24 }}>
              {['Discovery i spec', 'Arhitektura i design', 'Implementacija', 'Testiranje i QA', 'Deployment i održavanje'].map((x, i) =>
                <div key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#ccc' }}>
                  <span style={{ color: '#4ade80' }}>✓</span> {x}
                </div>
              )}
            </div>
            <button className="wf-btn sq" style={{ border: '1px solid #444', color: '#fff', marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 12 }}>$ saznaj_više →</button>
          </div>
          <div style={{ background: '#0a0a0a', border: '1px solid #222', borderRadius: 4, padding: 20, fontFamily: 'var(--font-mono)', fontSize: 12, color: '#ccc' }}>
            <div style={{ color: '#666', marginBottom: 12 }}>$ dtc.{SERVICES[tab].t.toLowerCase().replace(/\s/g, '_')}.deploy()</div>
            <div style={{ color: '#4ade80' }}>▸ Inicijalizacija...</div>
            <div style={{ color: '#4ade80' }}>▸ Analiza zahtjeva ✓</div>
            <div style={{ color: '#4ade80' }}>▸ Integracija sistema ✓</div>
            <div style={{ color: 'var(--accent)' }}>▸ Live agent spreman ✓</div>
            <div style={{ color: '#666', marginTop: 12 }}>// output:</div>
            <div style={{ color: '#fff', background: '#1a1a1a', padding: 8, marginTop: 4, borderLeft: '2px solid var(--accent)' }}>
              {'{ status: "running", uptime: "99.98%" }'}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — vertical pipeline */}
      <section style={{ padding: '80px 40px', borderTop: '1px solid #222' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#666', marginBottom: 8 }}>// 02 / proces</div>
        <h2 className="wf-h2" style={{ fontSize: 56, color: '#fff', marginBottom: 40 }}>Pipeline isporuke.</h2>
        <div style={{ position: 'relative', maxWidth: 900 }}>
          <div style={{ position: 'absolute', left: 19, top: 20, bottom: 20, width: 2, background: '#222' }} />
          {PROCESS.map((p, i) => (
            <div key={i} className="row gap-24" style={{ padding: '20px 0', position: 'relative' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 99,
                background: '#0a0a0a', border: `2px solid ${i === 0 ? 'var(--accent)' : '#444'}`,
                display: 'grid', placeItems: 'center',
                fontFamily: 'var(--font-mono)', fontSize: 11, color: '#fff',
                flexShrink: 0, zIndex: 1,
              }}>{p.n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 22, color: '#fff' }}>{p.t}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#999', marginTop: 4 }}>{p.d}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#666' }}>week {i + 1}-{i + 2}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CASES */}
      <section style={{ padding: '80px 40px', borderTop: '1px solid #222' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#666', marginBottom: 8 }}>// 03 / radovi</div>
        <h2 className="wf-h2" style={{ fontSize: 56, color: '#fff', marginBottom: 40 }}>Deployed & running.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {CASES.map((c, i) => (
            <div key={i} style={{
              background: '#1a1a1a', border: '1px solid #222', padding: 24,
              position: 'relative', overflow: 'hidden',
            }}>
              <div className="row" style={{ justifyContent: 'space-between', marginBottom: 40 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)' }}>[CASE_0{i + 1}]</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#4ade80' }}>● LIVE</span>
              </div>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 24, color: '#fff' }}>{c.t}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#666', marginTop: 4 }}>// {c.tag}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 28, color: 'var(--accent)', marginTop: 24 }}>{c.m}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: '80px 40px', borderTop: '1px solid #222' }}>
        <div style={{ background: '#1a1a1a', border: '1px solid #222', padding: 48, position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)' }}>// client_feedback</div>
          <div style={{ fontFamily: 'var(--font-ui)', fontSize: 32, lineHeight: 1.3, color: '#fff', letterSpacing: '-0.01em', marginTop: 16, maxWidth: 900 }}>
            "{TESTIMONIALS[1].q}"
          </div>
          <div className="row gap-16" style={{ alignItems: 'center', marginTop: 32 }}>
            <div style={{ width: 40, height: 40, borderRadius: 99, background: 'var(--accent)' }} />
            <div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{TESTIMONIALS[1].a}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#999' }}>{TESTIMONIALS[1].r}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 40px', borderTop: '1px solid #222', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at center, rgba(255,91,46,0.2), transparent 50%)',
        }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#4ade80', marginBottom: 16 }}>$ ready to transform?</div>
          <h2 className="wf-h1" style={{ fontSize: 80, color: '#fff', maxWidth: 900, margin: '0 auto' }}>
            Pokrenimo vaš <span style={{ color: 'var(--accent)' }}>next release</span>.
          </h2>
          <button className="wf-btn sq" style={{ background: 'var(--accent)', border: '1px solid var(--accent)', color: '#fff', padding: '16px 32px', fontFamily: 'var(--font-mono)', fontSize: 14, marginTop: 40 }}>
            $ book_consult --free →
          </button>
        </div>
      </section>

      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
  );
};

window.VariationC = VariationC;

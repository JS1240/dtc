// Variation D — "Corporate / Trustworthy"
// Mood: clean, blue, enterprise, lots of structure
// Layout: conventional top-down, card-based, lots of whitespace
// Interaction: straightforward, tabs for services, form in hero

const VariationD = () => {
  const [openFaq, setOpenFaq] = React.useState(-1);
  return (
    <div className="wf wf-scroll" style={{ background: '#fff' }}>
      {/* NAV */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 48px', borderBottom: '1px solid #e5e7eb',
        background: '#fff', position: 'sticky', top: 0, zIndex: 10,
      }}>
        <div className="row gap-32" style={{ alignItems: 'center' }}>
          <Logo />
          <div className="wf-nav-links" style={{ fontSize: 14, color: '#4b5563' }}>
            <span>Usluge</span><span>Proces</span><span>Radovi</span><span>O nama</span><span>Blog</span>
          </div>
        </div>
        <div className="row gap-12">
          <button className="wf-btn ghost" style={{ border: 'none', fontSize: 13 }}>Prijava</button>
          <button className="wf-btn" style={{ background: 'var(--blue)', color: '#fff', border: 'none', fontSize: 13 }}>Zakaži razgovor →</button>
        </div>
      </div>

      {/* HERO — split with form */}
      <section style={{ padding: '80px 48px', background: 'linear-gradient(180deg, #f0f4ff 0%, #fff 100%)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div className="wf-tag" style={{ background: 'var(--blue-soft)', border: '1px solid var(--blue)', color: 'var(--blue)', marginBottom: 24 }}>
              ● Prihvaćamo nove projekte za Q3 2026
            </div>
            <h1 className="wf-h1" style={{ fontSize: 68, color: '#111' }}>
              Gradimo vašu <span style={{ color: 'var(--blue)' }}>digitalnu budućnost</span>.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: '#4b5563', marginTop: 24, maxWidth: 540 }}>
              Web stranice, AI agenti, automatizacije i custom software.
              Jedan pouzdan partner za kompletnu digitalnu transformaciju vašeg biznisa.
            </p>
            <div className="row gap-12" style={{ marginTop: 32 }}>
              <button className="wf-btn" style={{ background: 'var(--blue)', color: '#fff', border: 'none', padding: '14px 24px', fontSize: 14 }}>Zakaži besplatan razgovor →</button>
              <button className="wf-btn ghost" style={{ padding: '14px 24px', fontSize: 14 }}>▶ Pogledajte snimku (2 min)</button>
            </div>

            <div className="row gap-32" style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #e5e7eb' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 32, color: '#111' }}>47+</div>
                <div style={{ fontSize: 13, color: '#6b7280' }}>Projekata isporučeno</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 32, color: '#111' }}>98%</div>
                <div style={{ fontSize: 13, color: '#6b7280' }}>Zadovoljnih klijenata</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 32, color: '#111' }}>24h</div>
                <div style={{ fontSize: 13, color: '#6b7280' }}>Prosječan odgovor</div>
              </div>
            </div>
          </div>

          {/* Inline mini form */}
          <div className="wf-box" style={{ padding: 28, borderColor: '#e5e7eb', borderRadius: 12, boxShadow: '0 20px 40px -20px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 4 }}>BESPLATNA KONZULTACIJA</div>
            <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 22, marginBottom: 20 }}>Zakažite 30-min razgovor</div>
            <div className="stack gap-12">
              <div>
                <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 6 }}>Ime i prezime</div>
                <div style={{ height: 40, border: '1px solid #e5e7eb', borderRadius: 6, background: '#fff' }} />
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 6 }}>Email</div>
                <div style={{ height: 40, border: '1px solid #e5e7eb', borderRadius: 6, background: '#fff' }} />
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 6 }}>Što vas zanima?</div>
                <div className="row gap-6" style={{ flexWrap: 'wrap' }}>
                  {['Web', 'AI', 'Automatizacije', 'IT', 'Ostalo'].map((x, i) => (
                    <span key={i} className="wf-tag" style={{ background: i === 1 ? 'var(--blue-soft)' : '#f9fafb', border: '1px solid ' + (i === 1 ? 'var(--blue)' : '#e5e7eb'), color: i === 1 ? 'var(--blue)' : '#4b5563', cursor: 'pointer' }}>{x}</span>
                  ))}
                </div>
              </div>
              <button className="wf-btn" style={{ background: 'var(--blue)', color: '#fff', border: 'none', width: '100%', justifyContent: 'center', padding: '12px', marginTop: 8 }}>Zakaži razgovor →</button>
              <div style={{ fontSize: 11, color: '#9ca3af', textAlign: 'center' }}>Bez obveze · Odgovor u 24h</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section style={{ padding: '32px 48px', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ fontSize: 12, color: '#9ca3af', textAlign: 'center', marginBottom: 16, letterSpacing: '0.1em' }}>POVJERENJE NAM DAJE 50+ TVRTKI</div>
        <div className="row" style={{ justifyContent: 'space-around', alignItems: 'center', opacity: 0.5 }}>
          {['ACME CORP', 'NOVA BANKA', 'STUDIO ART', 'LOGISTIKA+', 'RETAIL CO', 'FINTECH HR'].map((l, i) =>
            <span key={i} style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 16, color: '#6b7280' }}>{l}</span>
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
          <div className="wf-tag" style={{ background: 'var(--blue-soft)', border: '1px solid var(--blue)', color: 'var(--blue)', marginBottom: 16 }}>USLUGE</div>
          <h2 className="wf-h2" style={{ fontSize: 44 }}>Sve što treba za digitalnu transformaciju.</h2>
          <p style={{ fontSize: 16, color: '#6b7280', marginTop: 16 }}>
            Od strategije do implementacije — pokrivamo cijeli put.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {SERVICES.map((s, i) => (
            <div key={i} className="wf-box" style={{
              padding: 28, borderColor: '#e5e7eb', borderRadius: 12,
              borderLeft: `3px solid var(--blue)`, background: '#fff',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'var(--blue-soft)', color: 'var(--blue)',
                display: 'grid', placeItems: 'center', fontSize: 22, marginBottom: 16,
              }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6, marginBottom: 20 }}>{s.d}</div>
              <div className="stack gap-4" style={{ marginBottom: 20 }}>
                {['Discovery & strategija', 'Implementacija', 'Podrška i održavanje'].map((x, j) =>
                  <div key={j} style={{ fontSize: 13, color: '#4b5563' }}>
                    <span style={{ color: 'var(--green)', marginRight: 8 }}>✓</span>{x}
                  </div>
                )}
              </div>
              <div style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 600 }}>Saznaj više →</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS — horizontal */}
      <section style={{ padding: '80px 48px', background: '#f9fafb' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="wf-tag" style={{ background: '#fff', border: '1px solid #e5e7eb', color: '#4b5563', marginBottom: 16 }}>PROCES</div>
          <h2 className="wf-h2" style={{ fontSize: 44 }}>Jasan i strukturiran pristup.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, position: 'relative' }}>
          {PROCESS.map((p, i) => (
            <div key={i} className="wf-box" style={{ padding: 24, background: '#fff', borderColor: '#e5e7eb', borderRadius: 8, position: 'relative' }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'var(--blue)', color: '#fff',
                fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 13,
                display: 'grid', placeItems: 'center', marginBottom: 16,
              }}>{p.n}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 17, marginBottom: 6 }}>{p.t}</div>
              <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.5 }}>{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CASES */}
      <section style={{ padding: '80px 48px' }}>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <div className="wf-tag" style={{ background: 'var(--blue-soft)', border: '1px solid var(--blue)', color: 'var(--blue)', marginBottom: 16 }}>NAŠ RAD</div>
            <h2 className="wf-h2" style={{ fontSize: 44 }}>Stvarni rezultati, stvarnih klijenata.</h2>
          </div>
          <button className="wf-btn ghost" style={{ fontSize: 14 }}>Svi projekti →</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16, gridAutoRows: 'minmax(240px, auto)' }}>
          {CASES.slice(0, 2).map((c, i) => (
            <div key={i} className="wf-box" style={{ padding: 28, background: c.c, borderColor: 'transparent', borderRadius: 12 }}>
              <span className="wf-tag" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)' }}>{c.tag}</span>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 28, marginTop: 80 }}>{c.t}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 36, color: 'var(--blue)', marginTop: 8, letterSpacing: '-0.02em' }}>{c.m}</div>
              <div style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 600, marginTop: 16 }}>Pročitaj case study →</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS — grid */}
      <section style={{ padding: '80px 48px', background: '#f9fafb' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="wf-tag" style={{ background: '#fff', border: '1px solid #e5e7eb', color: '#4b5563', marginBottom: 16 }}>ISKUSTVA KLIJENATA</div>
          <h2 className="wf-h2" style={{ fontSize: 44 }}>Što kažu oni koji su nas odabrali.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="wf-box" style={{ padding: 24, background: '#fff', borderColor: '#e5e7eb', borderRadius: 10 }}>
              <div className="row gap-4" style={{ marginBottom: 12 }}>
                {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#fbbf24' }}>★</span>)}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.5, color: '#111', marginBottom: 20 }}>"{t.q}"</div>
              <div className="row gap-12" style={{ alignItems: 'center', paddingTop: 16, borderTop: '1px solid #f3f4f6' }}>
                <div style={{ width: 40, height: 40, borderRadius: 99, background: 'var(--blue-soft)' }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{t.a}</div>
                  <div style={{ fontSize: 12, color: '#6b7280' }}>{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="wf-tag" style={{ background: 'var(--blue-soft)', border: '1px solid var(--blue)', color: 'var(--blue)', marginBottom: 16 }}>FAQ</div>
          <h2 className="wf-h2" style={{ fontSize: 44 }}>Često postavljana pitanja.</h2>
        </div>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          {FAQ_ITEMS.map((f, i) => (
            <div key={i} className="wf-box" style={{
              borderColor: '#e5e7eb', borderRadius: 8, marginBottom: 8,
              overflow: 'hidden',
            }}>
              <div onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="row" style={{ padding: '18px 20px', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{f.q}</div>
                <div style={{ width: 24, height: 24, borderRadius: 99, background: 'var(--blue-soft)', color: 'var(--blue)', display: 'grid', placeItems: 'center', fontSize: 14 }}>
                  {openFaq === i ? '−' : '+'}
                </div>
              </div>
              {openFaq === i && <div style={{ padding: '0 20px 18px', fontSize: 14, color: '#6b7280' }}>{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 48px', background: 'var(--blue)', color: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 className="wf-h2" style={{ fontSize: 48, color: '#fff' }}>Spremni za sljedeći korak?</h2>
            <p style={{ fontSize: 16, marginTop: 16, opacity: 0.9, maxWidth: 520 }}>
              Zakažite besplatan 30-min razgovor. Analiziramo vaše potrebe i predlažemo konkretna rješenja.
            </p>
          </div>
          <div className="stack gap-12">
            <button className="wf-btn" style={{ background: '#fff', color: 'var(--blue)', border: 'none', padding: '14px 24px', fontSize: 14, justifyContent: 'center' }}>Zakaži razgovor →</button>
            <button className="wf-btn" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', padding: '14px 24px', fontSize: 14, justifyContent: 'center' }}>Preuzmi brošuru (PDF)</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section style={{ padding: '48px 48px 24px', background: '#0f172a', color: '#94a3b8' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 40 }}>
          <div>
            <Logo dark />
            <div style={{ fontSize: 13, marginTop: 16, maxWidth: 280, lineHeight: 1.6 }}>
              Digital Transformation Company — vaš partner za digitalnu budućnost.
            </div>
          </div>
          {[
            { h: 'Usluge', l: ['Web stranice', 'AI rješenja', 'Automatizacije', 'IT podrška'] },
            { h: 'Tvrtka', l: ['O nama', 'Radovi', 'Blog', 'Karijere'] },
            { h: 'Kontakt', l: ['hello@dtc.hr', '+385 1 234 5678', 'Zagreb, HR', 'LinkedIn'] },
          ].map((c, i) => (
            <div key={i}>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: 13, marginBottom: 16 }}>{c.h}</div>
              <div className="stack gap-8">
                {c.l.map((x, j) => <div key={j} style={{ fontSize: 13 }}>{x}</div>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 24, borderTop: '1px solid #1e293b', fontSize: 12 }}>
          © 2026 DTC d.o.o. — Sva prava pridržana.
        </div>
      </section>
    </div>
  );
};

window.VariationD = VariationD;

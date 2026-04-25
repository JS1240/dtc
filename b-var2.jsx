// Sub-variation B2 — "Notebook Grid"
// Hero: centered headline, giant hand-drawn doodle scene below
// Services: horizontal scroll row with sketchy icons
// Vibe: more editorial, single big hero image, notebook feel

const HeroNotebook = () => (
  <section style={{ padding: '56px 40px 80px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }} className="paper-lines" />
    <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
      <Reveal>
        <div className="tag accent" style={{ marginBottom: 28 }}>✦ Digital Transformation Company</div>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="h-display" style={{ fontSize: 112 }}>
          Gradimo vašu<br />
          <span style={{ display: 'inline-block', position: 'relative' }}>
            <span style={{ fontStyle: 'italic', fontWeight: 500 }}>digitalnu</span>
            <svg viewBox="0 0 400 20" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, right: 0, bottom: -18, width: '100%', height: 22 }}>
              <path d="M2 14 Q 80 2, 160 10 T 320 10 T 398 6" stroke="var(--accent)" strokeWidth="8" strokeLinecap="round" fill="none" />
            </svg>
          </span>{' '}
          budućnost.
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <p className="body" style={{ marginTop: 32, maxWidth: 640, margin: '32px auto 0', fontSize: 19 }}>
          Web stranice · AI agenti · automatizacije · custom software.<br />
          Jedan partner za kompletnu digitalnu transformaciju.
        </p>
      </Reveal>
      <Reveal delay={280}>
        <div style={{ display: 'flex', gap: 14, marginTop: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
          <MagneticBtn accent>Zatraži ponudu →</MagneticBtn>
          <button className="btn lg">Pogledaj radove</button>
        </div>
      </Reveal>

      {/* Doodle scene below hero */}
      <Reveal delay={400}>
        <div style={{ marginTop: 80, position: 'relative', height: 360 }} className="hero-scene">
          <svg viewBox="0 0 1000 360" style={{ width: '100%', height: '100%' }} className="draw in">
            {/* Baseline */}
            <path d="M0 300 Q 250 280, 500 295 T 1000 290" stroke="var(--ink)" strokeWidth="1.5" fill="none" strokeDasharray="5 5" />
          </svg>

          {[
            { x: 60, y: 60, r: -4, c: 'var(--yellow)', i: 'Robot', l: 'AI', t: 'chatbot asistent' },
            { x: 240, y: 30, r: 3, c: 'var(--accent)', i: 'Globe', l: 'web', t: 'landing page' },
            { x: 430, y: 80, r: -2, c: 'var(--blue)', i: 'Gear', l: 'auto', t: 'zapier flow' },
            { x: 620, y: 40, r: 4, c: 'var(--pink)', i: 'Code', l: 'app', t: 'custom software' },
            { x: 810, y: 70, r: -3, c: 'var(--green)', i: 'Shield', l: 'IT', t: '24/7 podrška' },
          ].map((card, i) => (
            <div key={i} className="sticker tilt" style={{
              position: 'absolute', left: card.x, top: card.y, width: 140,
              padding: 16, background: card.c,
              transform: `rotate(${card.r}deg)`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                {card.i === 'Robot' && <Doodle.Robot size={40} />}
                {card.i === 'Globe' && <Doodle.Globe size={40} />}
                {card.i === 'Gear' && <Doodle.Gear size={40} />}
                {card.i === 'Code' && <Doodle.Code size={40} />}
                {card.i === 'Shield' && <Doodle.Shield size={40} />}
              </div>
              <div className="mono" style={{ fontSize: 9, opacity: 0.5, textAlign: 'center' }}>{card.l.toUpperCase()}</div>
              <div className="script" style={{ fontSize: 17, textAlign: 'center', fontWeight: 600 }}>{card.t}</div>
            </div>
          ))}

          {/* Arrow annotations */}
          <Doodle.Arrow style={{ top: 180, left: 160, transform: 'rotate(-30deg)' }} w={100} />
          <div className="script" style={{ position: 'absolute', top: 220, left: 200, fontSize: 22, color: 'var(--accent)', transform: 'rotate(-5deg)', fontWeight: 600 }}>
            sve pokrivamo →
          </div>
        </div>
      </Reveal>
    </div>
    <style>{`@media (max-width: 820px) {
      .hero-scene { display: none; }
    }`}</style>
  </section>
);

// Horizontal service scroll row
const ServicesRow = () => (
  <section style={{ padding: '88px 0' }}>
    <div style={{ padding: '0 56px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
        <Reveal>
          <div>
            <div className="eyebrow">što radimo</div>
            <h2 className="h-lg" style={{ fontSize: 56, marginTop: 8 }}>Pet stupova.</h2>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn" style={{ width: 44, padding: 0, height: 44, justifyContent: 'center' }}>←</button>
            <button className="btn primary" style={{ width: 44, padding: 0, height: 44, justifyContent: 'center' }}>→</button>
          </div>
        </Reveal>
      </div>
    </div>

    <div style={{ overflowX: 'auto', overflowY: 'hidden', padding: '8px 56px 24px', scrollSnapType: 'x mandatory' }}>
      <div style={{ display: 'flex', gap: 20, width: 'max-content' }}>
        {B_SERVICES.map((s, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="sticker tilt" style={{
              width: 320, padding: 28, background: '#fff',
              scrollSnapAlign: 'start',
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: 16,
                background: s.bg, display: 'grid', placeItems: 'center', marginBottom: 20,
              }}>
                {s.icon === 'Globe' && <Doodle.Globe size={40} color={s.color} />}
                {s.icon === 'Robot' && <Doodle.Robot size={40} color={s.color} />}
                {s.icon === 'Gear' && <Doodle.Gear size={40} color={s.color} />}
                {s.icon === 'Shield' && <Doodle.Shield size={40} color={s.color} />}
                {s.icon === 'Code' && <Doodle.Code size={40} color={s.color} />}
              </div>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em' }}>{s.t}</div>
              <div style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 8, lineHeight: 1.5 }}>{s.long}</div>
              <div className="stack gap-6" style={{ marginTop: 16, paddingTop: 16, borderTop: '1.5px dashed rgba(0,0,0,0.15)' }}>
                {s.deliverables.slice(0, 3).map((d, j) => (
                  <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13 }}>
                    <Doodle.Check size={14} color={s.color} />{d}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, paddingTop: 14, borderTop: '1.5px solid var(--line)' }}>
                <div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>CIJENA</div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{s.from}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>TRAJANJE</div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{s.time}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const VariationB2 = () => (
  <div className="scroll" style={{ background: 'var(--paper)' }}>
    <StickyNav />
    <HeroNotebook />
    <LogoMarquee />
    <ServicesRow />
    <StatsStrip />
    <ProcessZigzag />
    <CaseStudyDetail />
    <ComparisonTable />
    <FAQSection />
    <FooterCTA />
  </div>
);

window.VariationB2 = VariationB2;

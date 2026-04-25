// Sub-variation B1 — "Collage Studio"
// Hero: big type left + sticky-note collage right (refined original)
// Services: bento with flip cards
// Vibe: warmest, most illustrative

const HeroCollage = () => {
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    const s = document.querySelector('.scroll');
    if (!s) return;
    const on = () => setScrollY(s.scrollTop);
    s.addEventListener('scroll', on);
    return () => s.removeEventListener('scroll', on);
  }, []);

  return (
    <section style={{ paddingTop: 48, paddingBottom: 120, position: 'relative', overflow: 'hidden' }}>
      {/* dotted bg */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.5 }} className="paper-dots" />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 48, alignItems: 'center' }} className="hero-grid">
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <span className="tag accent">✦ Studio iz Zagreba</span>
              <span style={{ fontSize: 12, color: 'var(--muted)' }}>— osnovano 2024</span>
            </div>

            <h1 className="h-display" style={{ fontSize: 92 }}>
              Gradimo vašu<br />
              <span className="squiggle">
                digitalnu
                <svg viewBox="0 0 400 20" preserveAspectRatio="none">
                  <path d="M2 14 Q 80 2, 160 10 T 320 10 T 398 6" stroke="var(--accent)" strokeWidth="7" strokeLinecap="round" fill="none" />
                </svg>
              </span><br />
              budućnost.
            </h1>

            <p className="body" style={{ marginTop: 32, maxWidth: 500, fontSize: 18 }}>
              Web stranice, AI agenti, automatizacije i custom software —{' '}
              <strong style={{ color: 'var(--ink)' }}>jedan partner umjesto pet</strong>.
              Manje koordinacije, brži rezultati.
            </p>

            <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap', alignItems: 'center' }}>
              <MagneticBtn accent>Zatraži ponudu →</MagneticBtn>
              <button className="btn ghost" style={{ padding: '16px 12px' }}>
                <span className="script" style={{ fontSize: 22 }}>ili pogledajte naš rad ↗</span>
              </button>
            </div>

            <div style={{ marginTop: 48, display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex' }}>
                {[0,1,2,3].map(i => <div key={i} style={{
                  width: 36, height: 36, borderRadius: 99, border: '2px solid var(--paper)',
                  background: ['var(--accent)', 'var(--yellow)', 'var(--blue)', 'var(--pink)'][i],
                  marginLeft: i === 0 ? 0 : -10,
                }} />)}
              </div>
              <div style={{ fontSize: 13 }}>
                <div style={{ fontWeight: 700 }}>47+ projekata isporučeno</div>
                <div style={{ color: 'var(--muted)', marginTop: 2 }}>⭐ 4.9/5 prosječna ocjena</div>
              </div>
            </div>

            {/* Annotation with arrow */}
            <div className="script hero-annot" style={{
              position: 'absolute', top: -18, left: 340, fontSize: 26,
              color: 'var(--accent)', transform: 'rotate(-5deg)', fontWeight: 600,
            }}>
              prvi razgovor je besplatan!
            </div>
            <Doodle.Arrow style={{ top: 10, left: 440, transform: 'rotate(135deg)' }} w={90} />
          </div>

          {/* Collage with parallax */}
          <div style={{ position: 'relative', height: 540 }} className="hero-collage">
            {/* AI chat card */}
            <div className="sticker tilt" style={{
              position: 'absolute', top: 0, right: 0, width: 260, padding: 18,
              background: 'var(--yellow)', transform: `rotate(${4 - scrollY * 0.01}deg) translateY(${scrollY * 0.1}px)`,
              transition: 'transform 0.1s linear',
            }}>
              <div className="mono" style={{ fontSize: 10, fontWeight: 600, opacity: 0.6, marginBottom: 8 }}>AI CHATBOT</div>
              <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                <Doodle.Robot size={32} color="var(--ink)" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>Asistent</div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--ink-2)' }}>● online</div>
                </div>
              </div>
              <div style={{
                padding: '10px 12px', background: '#fff', borderRadius: 12,
                border: '1.5px solid var(--ink)', fontSize: 13, marginBottom: 6,
              }}>Bok! Kako vam mogu pomoći?</div>
              <div style={{
                padding: '8px 12px', background: 'var(--ink)', color: '#fff',
                borderRadius: 12, fontSize: 12, marginLeft: 40,
              }}>
                <span className="blink">▍</span>
              </div>
            </div>

            {/* Dashboard */}
            <div className="sticker tilt" style={{
              position: 'absolute', top: 130, left: 0, width: 280, padding: 14,
              background: '#fff', transform: `rotate(${-3 + scrollY * 0.008}deg) translateY(${scrollY * -0.05}px)`,
              transition: 'transform 0.1s linear',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, alignItems: 'center' }}>
                <div className="mono" style={{ fontSize: 10, fontWeight: 600 }}>AUTOMATIZACIJA</div>
                <div style={{ display: 'flex', gap: 4 }}>
                  {[0,1,2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--ink)', opacity: 0.3 }} />)}
                </div>
              </div>
              <Doodle.Chart size={140} color="var(--ink)" />
              <div style={{ fontSize: 11, color: 'var(--ink-2)', marginTop: 8 }}>narudžbe / mj — ↑ 340%</div>
            </div>

            {/* Result card */}
            <div className="sticker tilt" style={{
              position: 'absolute', top: 220, right: -20, width: 280, padding: 20,
              background: 'var(--accent)', color: '#fff',
              transform: `rotate(${5 + scrollY * -0.012}deg) translateY(${scrollY * 0.15}px)`,
              transition: 'transform 0.1s linear',
            }}>
              <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.9, marginBottom: 6 }}>REZULTAT · Q1 2026</div>
              <div className="h-display" style={{ fontSize: 64, color: '#fff' }}>+250<span style={{ fontSize: 40 }}>%</span></div>
              <div style={{ fontSize: 13, marginTop: 4 }}>konverzija na landing page</div>
            </div>

            {/* Tasks card */}
            <div className="sticker tilt" style={{
              position: 'absolute', bottom: 0, left: 70, width: 210, padding: 14,
              background: 'var(--blue)',
              transform: `rotate(${-2 + scrollY * 0.006}deg) translateY(${scrollY * -0.08}px)`,
              transition: 'transform 0.1s linear',
            }}>
              <div className="mono" style={{ fontSize: 10, fontWeight: 600, marginBottom: 8 }}>SYNC STATUS</div>
              <div className="stack gap-6">
                {[['Shopify → CRM', true], ['Email sequence', true], ['AI trening', 'loading']].map(([l, s], i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 12 }}>
                    {s === true ? <Doodle.Check size={14} color="var(--blue-dk)" /> :
                     <span style={{ color: 'var(--accent)' }} className="blink">↻</span>}
                    {l}
                  </div>
                ))}
              </div>
            </div>

            <div className="script" style={{
              position: 'absolute', top: 90, left: 140, fontSize: 18,
              color: 'var(--blue-dk)', transform: 'rotate(6deg)', fontWeight: 600,
            }}>AI agent ↘</div>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 820px) {
        .hero-grid { grid-template-columns: 1fr !important; }
        .hero-grid .h-display { font-size: 56px !important; }
        .hero-annot { display: none; }
        .hero-collage { height: 420px; transform: scale(0.8); transform-origin: top center; }
      }`}</style>
    </section>
  );
};

// Flip service cards — symmetric grid: top row 2 wide (span 3), bottom row 3 (span 2)
const ServiceFlip = ({ s, i }) => {
  const [flipped, setFlipped] = React.useState(false);
  const layouts = ['span 3', 'span 3', 'span 2', 'span 2', 'span 2'];
  const isWide = i < 2;
  return (
    <div
      className={`flip-card ${flipped ? 'is-flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{
        gridColumn: layouts[i] || 'span 2',
        height: isWide ? 280 : 320,
        cursor: 'pointer',
      }}>
      <div className="flip-inner" style={{ height: '100%' }}>
        {/* front */}
        <div className="flip-face sticker" style={{
          padding: isWide ? 28 : 24,
          background: s.bg, color: 'var(--ink)',
          display: 'flex', flexDirection: 'column',
          height: '100%', boxSizing: 'border-box',
        }}>
          {/* top row: icon + number */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'auto' }}>
            <div style={{ color: s.color }}>
              {s.icon === 'Globe' && <Doodle.Globe size={isWide ? 52 : 44} color={s.color} />}
              {s.icon === 'Robot' && <Doodle.Robot size={isWide ? 52 : 44} color={s.color} />}
              {s.icon === 'Gear' && <Doodle.Gear size={44} color={s.color} />}
              {s.icon === 'Shield' && <Doodle.Shield size={44} color={s.color} />}
              {s.icon === 'Code' && <Doodle.Code size={44} color={s.color} />}
            </div>
            <span className="mono" style={{ fontSize: 11, opacity: 0.5 }}>0{i+1}</span>
          </div>
          {/* bottom: title + desc + meta strip */}
          <div style={{ marginTop: 20 }}>
            <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: isWide ? 30 : 24, letterSpacing: '-0.02em', marginBottom: 6, lineHeight: 1.05 }}>{s.t}</div>
            <div style={{ fontSize: isWide ? 15 : 13.5, opacity: 0.8, lineHeight: 1.45, minHeight: isWide ? 42 : 58 }}>{s.d}</div>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginTop: 14, paddingTop: 12, borderTop: '1.5px dashed rgba(0,0,0,0.18)',
            }}>
              <span className="mono" style={{ fontSize: 11, fontWeight: 700, color: s.color }}>{s.from}</span>
              <span className="script" style={{ fontSize: 15, color: s.color, fontWeight: 600 }}>hover →</span>
            </div>
          </div>
        </div>
        {/* back */}
        <div className="flip-face flip-back sticker" style={{
          padding: isWide ? 26 : 22, background: 'var(--ink)', color: '#fff',
          display: 'flex', flexDirection: 'column',
          height: '100%', boxSizing: 'border-box',
        }}>
          <div style={{ marginBottom: 'auto' }}>
            <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: isWide ? 22 : 19 }}>{s.t}</div>
            <div style={{ fontSize: isWide ? 14 : 12.5, opacity: 0.8, marginTop: 8, lineHeight: 1.5 }}>{s.long}</div>
            <div className="stack gap-4" style={{ marginTop: 14, display: 'grid', gridTemplateColumns: isWide ? '1fr 1fr' : '1fr', gap: '6px 12px' }}>
              {s.deliverables.slice(0, isWide ? 4 : 4).map((d, j) => (
                <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 12 }}>
                  <Doodle.Check size={14} color={s.color} />{d}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, marginTop: 14, borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div>
              <div className="mono" style={{ fontSize: 10, opacity: 0.5 }}>CIJENA</div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{s.from}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="mono" style={{ fontSize: 10, opacity: 0.5 }}>TRAJANJE</div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{s.time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesBento = () => (
  <section>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
        <Reveal>
          <div>
            <div className="eyebrow">što radimo</div>
            <h2 className="h-lg" style={{ fontSize: 56, marginTop: 8 }}>Sve na <span style={{ fontFamily: 'var(--font-script)', color: 'var(--accent)', fontWeight: 600 }}>jednom</span> mjestu.</h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="body" style={{ maxWidth: 320, textAlign: 'right' }}>
            Od strategije do lansiranja — pet usluga, jedan ugovor, jasna cijena.
          </div>
        </Reveal>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }} className="bento-grid">
        {B_SERVICES.map((s, i) => (
          <Reveal key={i} delay={i * 60}>
            <ServiceFlip s={s} i={i} />
          </Reveal>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <span className="script" style={{ fontSize: 20, color: 'var(--muted)' }}>↑ hoveraj da vidiš detalje</span>
      </div>
    </div>
    <style>{`@media (max-width: 820px) {
      .bento-grid { grid-template-columns: 1fr !important; }
      .bento-grid .flip-card { grid-column: 1 !important; }
    }`}</style>
  </section>
);

const TestimonialStickies = () => (
  <section>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Reveal>
          <div className="eyebrow">glasovi klijenata</div>
          <h2 className="h-lg" style={{ fontSize: 52, marginTop: 8 }}>
            Stvarne riječi, <span style={{ fontFamily: 'var(--font-script)', color: 'var(--accent)', fontWeight: 600 }}>stvarni</span> rezultati.
          </h2>
        </Reveal>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="t-grid">
        {B_TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="sticker tilt" style={{
              padding: 26,
              background: `var(--${t.c})`,
              transform: `rotate(${[-2.5, 1.5, -1.2][i]}deg)`,
              position: 'relative',
            }}>
              <div className="tape" style={{ top: -11, left: '50%', marginLeft: -45, transform: 'rotate(-2deg)' }} />
              <div style={{ fontSize: 36, lineHeight: 1, color: 'var(--accent)', fontFamily: 'var(--font-script)', fontWeight: 700 }}>"</div>
              <div className="hand" style={{ fontSize: 18, lineHeight: 1.4, marginTop: -4 }}>{t.q}</div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 24, paddingTop: 16, borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 99, background: 'var(--ink)' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{t.a}</div>
                  <div style={{ fontSize: 11, opacity: 0.7 }}>{t.r}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
    <style>{`@media (max-width: 820px) { .t-grid { grid-template-columns: 1fr !important; } }`}</style>
  </section>
);

const VariationB1 = () => (
  <div className="scroll" style={{ background: 'var(--paper)' }}>
    <StickyNav />
    <HeroCollage />
    <LogoMarquee />
    <StatsStrip />
    <ServicesBento />
    <div className="divider-squiggle" style={{ margin: '0 48px' }} />
    <ProcessZigzag />
    <CaseStudyDetail />
    <ComparisonTable />
    <TestimonialStickies />
    <FAQSection />
    <FooterCTA />
  </div>
);

window.VariationB1 = VariationB1;

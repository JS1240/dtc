// Shared sections & components used across all 3 sub-variations

// Sticky nav that animates on scroll
const StickyNav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const scroller = document.querySelector('.scroll');
    if (!scroller) return;
    const onScroll = () => setScrolled(scroller.scrollTop > 40);
    scroller.addEventListener('scroll', onScroll);
    return () => scroller.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 100,
      padding: scrolled ? '12px 24px' : '18px 32px',
      transition: 'padding 0.3s, background 0.3s, border-color 0.3s',
      background: scrolled ? 'rgba(250, 246, 236, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(26,22,20,0.1)' : '1px solid transparent',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <DTCLogo size={scrolled ? 20 : 22} />
        <div style={{
          display: 'flex', gap: 4, padding: 5,
          background: '#fff', border: '1.5px solid var(--line)',
          borderRadius: 999,
        }}>
          {['Usluge', 'Proces', 'Radovi', 'O nama'].map((l, i) => (
            <span key={i} style={{
              padding: '6px 14px', borderRadius: 99,
              fontSize: 13, fontWeight: 500,
              background: i === 0 ? 'var(--accent)' : 'transparent',
              color: i === 0 ? '#fff' : 'var(--ink)',
              cursor: 'pointer',
            }}>{l}</span>
          ))}
        </div>
        <button className="btn primary">Zatraži ponudu →</button>
      </div>
    </div>
  );
};

// Magnetic cursor-follow CTA button
const MagneticBtn = ({ children, className = '', style, accent = false }) => {
  const ref = React.useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    ref.current.style.setProperty('--x', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--y', `${e.clientY - r.top}px`);
  };
  const onLeave = () => { ref.current.style.transform = ''; };
  return (
    <button ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className={`btn lg magnetic cta-follow ${accent ? 'accent' : 'primary'} ${className}`}
      style={style}>
      <span className="blob" />
      {children}
    </button>
  );
};

// Stats strip
const StatsStrip = ({ variant = 'default' }) => (
  <section style={{ padding: '64px 56px', background: variant === 'dark' ? 'var(--ink)' : 'var(--paper-2)', color: variant === 'dark' ? '#fff' : 'var(--ink)', borderTop: '2px solid var(--line)', borderBottom: '2px solid var(--line)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }} className="stats-grid">
          {B_STATS.map((s, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div className="h-display" style={{ fontSize: 88, letterSpacing: '-0.04em' }}>
                {s.n}<span style={{ color: 'var(--accent)' }}>{s.s}</span>
              </div>
              <div style={{ fontSize: 14, marginTop: 4, color: variant === 'dark' ? 'rgba(255,255,255,0.6)' : 'var(--ink-2)' }}>{s.l}</div>
              {i === 1 && (
                <Doodle.Circle style={{ top: -8, left: -12 }} w={140} h={110} color="var(--accent)" />
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
    <style>{`@media (max-width: 820px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; } .stats-grid .h-display { font-size: 56px !important; } }`}</style>
  </section>
);

// Comparison table
const ComparisonTable = () => (
  <section>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="eyebrow">zašto DTC</div>
          <h2 className="h-lg" style={{ fontSize: 52, marginTop: 8 }}>
            Jedan partner &gt;{' '}
            <span style={{ fontFamily: 'var(--font-script)', color: 'var(--accent)', fontWeight: 600 }}>
              pet freelancera
            </span>.
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="sticker" style={{ padding: 0, overflow: 'hidden', background: '#fff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.7fr repeat(3, 1fr)', borderBottom: '2px solid var(--line)' }} className="comp-head">
            <div style={{ padding: '18px 20px' }}></div>
            {B_COMPARISON.cols.map((c, i) => (
              <div key={i} style={{
                padding: '18px 16px', textAlign: 'center',
                background: i === 0 ? 'var(--ink)' : 'transparent',
                color: i === 0 ? '#fff' : 'var(--ink)',
                fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em',
                borderLeft: '2px solid var(--line)',
              }}>
                {i === 0 ? <span>DTC <Doodle.Sparkle size={14} color="var(--accent)" style={{ verticalAlign: 'middle', marginLeft: 4 }} /></span> : c}
              </div>
            ))}
          </div>
          {B_COMPARISON.rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1.7fr repeat(3, 1fr)',
              borderBottom: i === B_COMPARISON.rows.length - 1 ? 'none' : '1px solid rgba(26,22,20,0.08)',
            }} className="comp-row">
              <div style={{ padding: '16px 20px', fontSize: 15 }}>{r.feat}</div>
              {r.vals.map((v, j) => (
                <div key={j} style={{
                  padding: '16px', textAlign: 'center',
                  background: j === 0 ? 'var(--accent-soft)' : 'transparent',
                  borderLeft: '2px solid var(--line)',
                }}>
                  {v === true ? <Doodle.Check size={22} color={j === 0 ? 'var(--accent)' : 'var(--ink-2)'} />
                    : v === false ? <Doodle.Cross size={22} />
                    : <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-script)', fontSize: 18 }}>djelomično</span>}
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

// Process — zigzag w/ draw-in connecting line
const ProcessZigzag = () => (
  <section style={{ background: 'var(--paper-2)', borderTop: '2px solid var(--line)', borderBottom: '2px solid var(--line)' }}>
    <div style={{ maxWidth: 980, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Reveal>
          <div className="eyebrow">kako radimo</div>
          <h2 className="h-lg" style={{ fontSize: 52, marginTop: 8 }}>
            Pet koraka do{' '}
            <span className="squiggle">
              lansiranja
              <svg viewBox="0 0 200 20" preserveAspectRatio="none"><path d="M2 14 Q 50 2, 100 10 T 198 6" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" fill="none" /></svg>
            </span>.
          </h2>
        </Reveal>
      </div>

      <div className="stack gap-16" style={{ position: 'relative' }}>
        {B_PROCESS.map((p, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="proc-row" style={{
              display: 'flex', gap: 20, alignItems: 'center',
              flexDirection: i % 2 ? 'row-reverse' : 'row',
            }}>
              <div className="sticker tilt" style={{
                flex: 1, maxWidth: 520, padding: '22px 26px', background: '#fff',
                transform: `rotate(${i % 2 ? 1.2 : -1.2}deg)`,
                position: 'relative',
              }}>
                {i === 0 && <div className="tape" style={{ top: -11, left: 40, transform: 'rotate(-4deg)' }} />}
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 99, background: 'var(--accent)',
                    color: '#fff', display: 'grid', placeItems: 'center',
                    fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 14,
                    flexShrink: 0,
                  }}>{p.n}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                      <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' }}>{p.t}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>{p.dur}</div>
                    </div>
                    <div style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 4, lineHeight: 1.5 }}>{p.d}</div>
                  </div>
                </div>
              </div>
              {i < B_PROCESS.length - 1 && (
                <div className="proc-arrow" style={{ width: 100, display: 'grid', placeItems: 'center' }}>
                  <svg width="80" height="48" className="draw in" style={{ '--dash': 120 }}>
                    <path d={i % 2 ? "M75 8 Q 40 48, 5 32" : "M5 8 Q 40 48, 75 32"}
                      fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" />
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

// FAQ accordion
const FAQSection = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '360px 1fr', gap: 64 }} className="faq-grid">
        <div>
          <div className="eyebrow">pitanja</div>
          <h2 className="h-lg" style={{ fontSize: 48, marginTop: 8 }}>
            Najčešće dileme, brzi odgovori.
          </h2>
          <div className="body" style={{ marginTop: 20, maxWidth: 300 }}>
            Ne vidite svoje pitanje? Pošaljite nam poruku — odgovaramo u roku od 24h.
          </div>
          <button className="btn" style={{ marginTop: 24 }}>
            <Doodle.Chat size={18} color="currentColor" /> Postavi pitanje
          </button>
        </div>
        <div>
          {B_FAQ.map((f, i) => (
            <div key={i} style={{
              borderBottom: '1.5px solid var(--line)',
              borderTop: i === 0 ? '1.5px solid var(--line)' : 'none',
            }}>
              <div onClick={() => setOpen(open === i ? -1 : i)}
                style={{ padding: '20px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, cursor: 'pointer' }}>
                <div style={{ fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em' }}>{f.q}</div>
                <div style={{
                  width: 32, height: 32, borderRadius: 99,
                  background: open === i ? 'var(--accent)' : 'transparent',
                  border: '1.5px solid var(--line)',
                  color: open === i ? '#fff' : 'var(--ink)',
                  display: 'grid', placeItems: 'center',
                  fontSize: 18, flexShrink: 0,
                  transition: 'all 0.2s',
                  transform: open === i ? 'rotate(180deg)' : 'none',
                }}>{open === i ? '−' : '+'}</div>
              </div>
              <div style={{
                maxHeight: open === i ? 300 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s',
              }}>
                <div style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.6, paddingBottom: 20, paddingRight: 48 }}>
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 820px) {
        .faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      }`}</style>
    </section>
  );
};

// Logo marquee
const LogoMarquee = () => (
  <section style={{ padding: '36px 0', background: 'var(--paper-2)', borderTop: '2px solid var(--line)', borderBottom: '2px solid var(--line)', overflow: 'hidden' }}>
    <div className="marquee-track" style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)', opacity: 0.7 }}>
      {[...B_LOGOS, ...B_LOGOS].map((l, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 48 }}>
          {l} <Doodle.Sparkle size={16} color="var(--accent)" />
        </span>
      ))}
    </div>
  </section>
);

// Case study detail block (featured)
const CaseStudyDetail = () => (
  <section>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <Reveal>
        <div className="eyebrow">case study</div>
        <h2 className="h-lg" style={{ fontSize: 52, marginTop: 8, maxWidth: 900 }}>{B_CASE_HERO.title}</h2>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 40, marginTop: 48 }} className="case-grid">
        <Reveal>
          <div className="sticker" style={{ padding: 28, background: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <span className="tag accent">{B_CASE_HERO.tag}</span>
              <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>CASE /01</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {B_CASE_HERO.stats.map((s, i) => (
                <div key={i} style={{
                  padding: '20px 16px',
                  background: ['var(--accent-soft)', 'var(--blue)', 'var(--yellow)', 'var(--green)'][i],
                  border: '1.5px solid var(--line)', borderRadius: 10,
                }}>
                  <div className="h-display" style={{ fontSize: 44, letterSpacing: '-0.04em' }}>{s.n}</div>
                  <div style={{ fontSize: 13, marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, padding: 20, background: 'var(--paper-2)', borderRadius: 10, borderLeft: '3px solid var(--accent)' }}>
              <div className="hand" style={{ fontSize: 17, lineHeight: 1.5 }}>
                "{B_CASE_HERO.quote}"
              </div>
              <div style={{ fontSize: 12, marginTop: 12, color: 'var(--ink-2)', fontWeight: 600 }}>— {B_CASE_HERO.by}</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="stack gap-24">
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>KLIJENT</div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>{B_CASE_HERO.client}</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>KONTEKST</div>
              <div className="body">{B_CASE_HERO.context}</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>RJEŠENJE</div>
              <div className="stack gap-8">
                {['AI agent za obradu narudžbi 24/7', 'Automatizacija fakturiranja i CRM sync', 'Redizajn checkout flow-a', 'Integracija s Shopify i HubSpot'].map((x, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14 }}>
                    <Doodle.Check size={18} color="var(--accent)" />{x}
                  </div>
                ))}
              </div>
            </div>
            <button className="btn">Pročitaj cijeli case study →</button>
          </div>
        </Reveal>
      </div>
    </div>
    <style>{`@media (max-width: 820px) {
      .case-grid { grid-template-columns: 1fr !important; }
    }`}</style>
  </section>
);

// Footer CTA
const FooterCTA = () => (
  <section style={{ background: 'var(--ink)', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 40, left: 40 }}>
      <Doodle.Sparkle size={36} color="var(--accent)" />
    </div>
    <div style={{ position: 'absolute', top: 80, right: 120 }}>
      <Doodle.Sparkle size={24} color="var(--yellow)" />
    </div>
    <div style={{ position: 'absolute', bottom: 60, left: 120 }}>
      <Doodle.Sparkle size={20} color="var(--pink)" />
    </div>

    <div className="eyebrow" style={{ color: 'var(--accent)' }}>idemo?</div>
    <h2 className="h-display" style={{ fontSize: 88, marginTop: 16, maxWidth: 900, margin: '16px auto 0', color: '#fff' }}>
      Napravimo nešto<br />
      <span style={{ fontFamily: 'var(--font-script)', color: 'var(--accent)', fontWeight: 600, fontSize: 92 }}>odlično</span> zajedno.
    </h2>
    <div style={{ marginTop: 40, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
      <MagneticBtn accent>Zatraži besplatnu ponudu →</MagneticBtn>
      <button className="btn lg" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>hello@dtc.hr</button>
    </div>
    <div className="mono" style={{ fontSize: 12, marginTop: 20, opacity: 0.5 }}>30 min · bez obveze · odgovor u 24h</div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 96, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 12, opacity: 0.6, flexWrap: 'wrap', gap: 16 }}>
      <DTCLogo dark />
      <div>© 2026 DTC · Digital Transformation Company · Zagreb, HR</div>
      <div style={{ display: 'flex', gap: 16 }}><span>LinkedIn</span><span>Instagram</span><span>GitHub</span></div>
    </div>
  </section>
);

Object.assign(window, { StickyNav, MagneticBtn, StatsStrip, ComparisonTable, ProcessZigzag, FAQSection, LogoMarquee, CaseStudyDetail, FooterCTA });

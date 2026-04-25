// Sub-variation B3 — "Split Editorial"
// Hero: split 50/50, big type left, interactive chatbot demo right
// Services: 2-column alternating rows (editorial magazine feel)
// Vibe: more editorial/magazine, still playful but more structured

const ChatDemo = () => {
  const [msgs, setMsgs] = React.useState([
    { from: 'bot', t: 'Bok! Ja sam DTC asistent. Kako vam mogu pomoći?' },
  ]);
  const [typing, setTyping] = React.useState(false);

  React.useEffect(() => {
    const script = [
      { from: 'user', t: 'Treba nam web i AI chatbot za naš shop.', delay: 2000 },
      { from: 'bot', t: 'Odlično! Koji CMS koristite sada?', delay: 1500, typing: 1200 },
      { from: 'user', t: 'Shopify. I imamo 5000 proizvoda.', delay: 2500 },
      { from: 'bot', t: 'Savršeno — radimo custom Shopify teme i RAG agente nad katalogom. Želite li zakazati razgovor?', delay: 2000, typing: 1500 },
    ];
    let cancel = false;
    let delay = 2500;
    script.forEach((m) => {
      delay += m.delay;
      const tDelay = delay - (m.typing || 0);
      if (m.typing) {
        setTimeout(() => { if (!cancel && m.from === 'bot') setTyping(true); }, tDelay);
      }
      setTimeout(() => {
        if (cancel) return;
        setTyping(false);
        setMsgs(prev => [...prev, { from: m.from, t: m.t }]);
      }, delay);
    });
    return () => { cancel = true; };
  }, []);

  return (
    <div className="sticker" style={{
      background: '#fff', padding: 0, overflow: 'hidden',
      maxWidth: 420, margin: '0 auto', transform: 'rotate(1.5deg)',
    }}>
      <div style={{
        background: 'var(--ink)', color: '#fff', padding: '14px 18px',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 99, background: 'var(--accent)',
          display: 'grid', placeItems: 'center',
        }}>
          <Doodle.Robot size={22} color="#fff" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>DTC Asistent</div>
          <div className="mono" style={{ fontSize: 10, opacity: 0.7 }}>● online · odgovara odmah</div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[0,1,2].map(i => <div key={i} style={{ width: 5, height: 5, borderRadius: 99, background: '#fff', opacity: 0.4 }} />)}
        </div>
      </div>
      <div style={{ padding: 18, height: 320, overflowY: 'auto', background: 'var(--paper-2)', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{
            alignSelf: m.from === 'bot' ? 'flex-start' : 'flex-end',
            padding: '10px 14px', borderRadius: 16,
            background: m.from === 'bot' ? '#fff' : 'var(--accent)',
            color: m.from === 'bot' ? 'var(--ink)' : '#fff',
            border: m.from === 'bot' ? '1.5px solid var(--line)' : 'none',
            fontSize: 13, maxWidth: '78%', lineHeight: 1.4,
            animation: 'fadeUp 0.3s',
          }}>{m.t}</div>
        ))}
        {typing && (
          <div style={{
            alignSelf: 'flex-start', padding: '10px 14px', borderRadius: 16,
            background: '#fff', border: '1.5px solid var(--line)',
            display: 'flex', gap: 4,
          }}>
            {[0, 0.2, 0.4].map((d, i) => (
              <span key={i} style={{
                width: 6, height: 6, borderRadius: 99, background: 'var(--ink-2)',
                animation: `blink 1s infinite ${d}s`,
              }} />
            ))}
          </div>
        )}
      </div>
      <div style={{ padding: 14, borderTop: '1.5px solid var(--line)', display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{
          flex: 1, padding: '10px 14px', background: 'var(--paper-2)',
          borderRadius: 99, fontSize: 13, color: 'var(--muted)',
        }}>Napiši poruku…</div>
        <button style={{
          width: 36, height: 36, borderRadius: 99, background: 'var(--accent)', color: '#fff',
          border: 'none', display: 'grid', placeItems: 'center', fontSize: 16,
        }}>→</button>
      </div>
      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
};

const HeroSplit = () => (
  <section style={{ padding: '40px 48px 100px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 56, alignItems: 'center' }} className="hero-split">
        <div style={{ position: 'relative' }}>
          <div className="tag accent" style={{ marginBottom: 28 }}>✦ Zagreb · Hrvatska</div>
          <h1 className="h-display" style={{ fontSize: 96 }}>
            Gradimo<br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              digitalnu
              <svg viewBox="0 0 400 20" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -16, width: '100%', height: 20 }}>
                <path d="M2 14 Q 80 2, 160 10 T 320 10 T 398 6" stroke="var(--accent)" strokeWidth="7" strokeLinecap="round" fill="none" />
              </svg>
            </span><br />
            budućnost.
          </h1>
          <p className="body" style={{ marginTop: 36, maxWidth: 480, fontSize: 18 }}>
            Dizajniramo, razvijamo i održavamo digitalne proizvode koji rade za vaš biznis —
            od landing pagea do AI agenata.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
            <MagneticBtn accent>Zatraži ponudu →</MagneticBtn>
            <button className="btn lg">Naš proces</button>
          </div>
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 480 }}>
            {[
              { n: '47+', l: 'projekata' },
              { n: '98%', l: 'zadovoljstvo' },
              { n: '24h', l: 'odgovor' },
            ].map((s, i) => (
              <div key={i} style={{ paddingLeft: 16, borderLeft: '2px solid var(--accent)' }}>
                <div className="h-display" style={{ fontSize: 32 }}>{s.n}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-2)', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <ChatDemo />
          <div className="script" style={{
            position: 'absolute', bottom: -30, left: 20, fontSize: 22,
            color: 'var(--accent)', transform: 'rotate(-3deg)', fontWeight: 600,
          }}>pravi AI agent u radu →</div>
          <Doodle.Arrow style={{ top: -30, right: 40, transform: 'rotate(50deg)' }} color="var(--blue-dk)" w={80} />
        </div>
      </div>
    </div>
    <style>{`@media (max-width: 820px) {
      .hero-split { grid-template-columns: 1fr !important; }
      .hero-split .h-display { font-size: 64px !important; }
    }`}</style>
  </section>
);

// Editorial alternating rows
const ServicesEditorial = () => (
  <section>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 72 }}>
        <Reveal>
          <div className="eyebrow">usluge</div>
          <h2 className="h-lg" style={{ fontSize: 56, marginTop: 8 }}>
            Pet usluga, <span style={{ fontFamily: 'var(--font-script)', color: 'var(--accent)', fontWeight: 600 }}>jedan</span> tim.
          </h2>
        </Reveal>
      </div>

      <div className="stack" style={{ gap: 72 }}>
        {B_SERVICES.map((s, i) => (
          <Reveal key={i} delay={i * 50}>
            <div className="service-row" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center',
              flexDirection: i % 2 ? 'row-reverse' : 'row',
            }}>
              <div style={{ order: i % 2 ? 2 : 1 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                  <span className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>0{i + 1} /</span>
                  <span className="tag" style={{ background: s.bg, borderColor: s.color, color: s.color }}>{s.icon === 'Globe' ? 'WEB' : s.icon === 'Robot' ? 'AI' : s.icon === 'Gear' ? 'AUTO' : s.icon === 'Shield' ? 'IT' : 'CUSTOM'}</span>
                </div>
                <h3 className="h-lg" style={{ fontSize: 44 }}>{s.t}</h3>
                <p className="body" style={{ marginTop: 16, fontSize: 17 }}>{s.long}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 24 }}>
                  {s.deliverables.map((d, j) => (
                    <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13 }}>
                      <Doodle.Check size={14} color={s.color} />{d}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 24, marginTop: 28, paddingTop: 20, borderTop: '1.5px dashed rgba(0,0,0,0.15)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>CIJENA</div>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{s.from}</div>
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>TRAJANJE</div>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{s.time}</div>
                  </div>
                  <button className="btn" style={{ marginLeft: 'auto' }}>Saznaj više →</button>
                </div>
              </div>

              <div style={{ order: i % 2 ? 1 : 2, position: 'relative' }}>
                <div className="sticker tilt" style={{
                  aspectRatio: '4/3', background: s.bg,
                  display: 'grid', placeItems: 'center',
                  transform: `rotate(${i % 2 ? 2 : -2}deg)`,
                  position: 'relative',
                }}>
                  <div className="tape" style={{ top: -11, left: 30, transform: 'rotate(-4deg)' }} />
                  <div style={{ color: s.color, transform: 'scale(2.2)' }}>
                    {s.icon === 'Globe' && <Doodle.Globe color={s.color} />}
                    {s.icon === 'Robot' && <Doodle.Robot color={s.color} />}
                    {s.icon === 'Gear' && <Doodle.Gear color={s.color} />}
                    {s.icon === 'Shield' && <Doodle.Shield color={s.color} />}
                    {s.icon === 'Code' && <Doodle.Code color={s.color} />}
                  </div>
                  {/* Corner annotations */}
                  <div className="script" style={{ position: 'absolute', bottom: 16, right: 24, fontSize: 18, fontWeight: 600, color: s.color, transform: 'rotate(-3deg)' }}>
                    {['brzo', 'pametno', 'automatski', 'sigurno', 'po mjeri'][i]}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
    <style>{`@media (max-width: 820px) {
      .service-row { grid-template-columns: 1fr !important; gap: 24px !important; }
      .service-row > div { order: unset !important; }
    }`}</style>
  </section>
);

const VariationB3 = () => (
  <div className="scroll" style={{ background: 'var(--paper)' }}>
    <StickyNav />
    <HeroSplit />
    <StatsStrip />
    <LogoMarquee />
    <ServicesEditorial />
    <div className="divider-squiggle" style={{ margin: '0 48px' }} />
    <ProcessZigzag />
    <CaseStudyDetail />
    <ComparisonTable />
    <FAQSection />
    <FooterCTA />
  </div>
);

window.VariationB3 = VariationB3;

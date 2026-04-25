// Shared wireframe building blocks — all Croatian copy
// Assumes styles.css is loaded

const Logo = ({ size = 18, dark = false }) => (
  <div className="wf-logo" style={{ fontSize: size, color: dark ? '#f0f0f0' : undefined }}>
    <span className="dot" />
    <span>DTC<span style={{ color: 'var(--accent)' }}>.</span></span>
  </div>
);

const LogoMark = ({ size = 44 }) => (
  <div style={{
    width: size, height: size, borderRadius: 10,
    background: 'var(--ink)', color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: size * 0.38,
    letterSpacing: '-0.02em', position: 'relative',
  }}>
    DTC
    <span style={{
      position: 'absolute', right: -4, bottom: -4,
      width: 10, height: 10, borderRadius: 99, background: 'var(--accent)',
      border: '2px solid var(--paper)',
    }} />
  </div>
);

const Nav = ({ links = ['Usluge', 'Proces', 'Radovi', 'O nama', 'Kontakt'], cta = 'Zakaži razgovor', soft = false, dark = false }) => (
  <div className={`wf-nav ${soft ? 'soft' : ''}`}>
    <Logo dark={dark} />
    <div className="wf-nav-links">
      {links.map((l, i) => <span key={i}>{l}</span>)}
    </div>
    <button className="wf-btn primary">{cta} →</button>
  </div>
);

const Bar = ({ w = '100%', ...p }) => (
  <span className="wf-bar" style={{ width: w, ...p.style }} />
);

const TextBlock = ({ lines = 3, widths = ['100%', '92%', '64%'] }) => (
  <div className="stack gap-8">
    {Array.from({ length: lines }).map((_, i) => (
      <Bar key={i} w={widths[i] || widths[widths.length - 1]} style={{ height: 8 }} />
    ))}
  </div>
);

const Annotation = ({ children, style }) => (
  <div className="wf-note" style={style}>{children}</div>
);

// Simple SVG arrow (hand-drawn feel)
const Arrow = ({ style, d = "M5 5 C 20 -5, 60 -5, 90 30", color }) => (
  <svg style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none', ...style }} width="100" height="50">
    <path d={d} fill="none" stroke={color || 'var(--accent)'} strokeWidth="2" strokeLinecap="round" />
    <path d="M85 28 L 95 32 L 87 38" fill="none" stroke={color || 'var(--accent)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Service cards (shared content)
const SERVICES = [
  { t: 'Web stranice', d: 'Moderne, brze i optimizirane za konverziju.', icon: '🌐', c: 'blue' },
  { t: 'AI rješenja', d: 'Prilagođeni AI agenti i chatbotovi za vaš tim.', icon: '✦', c: 'accent' },
  { t: 'Automatizacije', d: 'Povežite alate, eliminirajte ručni rad.', icon: '⚙', c: 'green' },
  { t: 'IT podrška', d: 'Pouzdana infrastruktura i konzultacije.', icon: '◉', c: 'blue' },
  { t: 'Custom software', d: 'Aplikacije po mjeri vašeg biznisa.', icon: '◆', c: 'accent' },
];

const PROCESS = [
  { n: '01', t: 'Razgovor', d: 'Upoznajemo vaš biznis, ciljeve i bolne točke.' },
  { n: '02', t: 'Strategija', d: 'Definiramo prioritete i plan realizacije.' },
  { n: '03', t: 'Izrada', d: 'Gradimo u sprintovima, uz vaš feedback.' },
  { n: '04', t: 'Lansiranje', d: 'Puštamo u rad i pratimo rezultate.' },
  { n: '05', t: 'Rast', d: 'Optimiziramo i nadograđujemo.' },
];

const TESTIMONIALS = [
  { q: 'DTC je automatizirao naš prodajni proces — uštedili smo 20 sati tjedno.', a: 'Ana Marković', r: 'Voditeljica prodaje, Nova Trgovina' },
  { q: 'Njihov AI asistent odgovara na 70% upita klijenata bez ljudske intervencije.', a: 'Marko Horvat', r: 'CEO, Logistika Plus' },
  { q: 'Nova web stranica nam je utrostručila broj poslovnih upita u prva 3 mjeseca.', a: 'Ivana Perić', r: 'Osnivačica, Studio Art' },
];

const FAQ_ITEMS = [
  { q: 'Koliko traje izrada web stranice?', a: 'Od 3 do 8 tjedana, ovisno o opsegu.' },
  { q: 'Radite li s malim tvrtkama?', a: 'Da — prilagođavamo opseg svakom budžetu.' },
  { q: 'Koje AI alate koristite?', a: 'OpenAI, Claude, custom LLM i open-source modeli.' },
  { q: 'Što je s održavanjem nakon lansiranja?', a: 'Nudimo mjesečne pakete podrške.' },
  { q: 'Možete li integrirati postojeće alate?', a: 'Da — radimo s 200+ SaaS alata preko API-ja.' },
];

const CASES = [
  { t: 'Retail Chain', tag: 'AI + Automatizacija', m: '−40% vremena obrade narudžbi', c: 'var(--accent-soft)' },
  { t: 'Fintech Startup', tag: 'Web + Software', m: '+250% konverzija na landing page', c: 'var(--blue-soft)' },
  { t: 'B2B SaaS', tag: 'AI Agent', m: '24/7 podrška bez dodatnog tima', c: 'var(--green-soft)' },
  { t: 'Logistika', tag: 'IT + Integracije', m: '−60% ručnog unosa podataka', c: 'var(--yellow)' },
];

Object.assign(window, {
  Logo, LogoMark, Nav, Bar, TextBlock, Annotation, Arrow,
  SERVICES, PROCESS, TESTIMONIALS, FAQ_ITEMS, CASES,
});

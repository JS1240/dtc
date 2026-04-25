// Hand-drawn doodle SVGs for Refined B
// All use currentColor / var(--accent) so they inherit context

const Doodle = {
  // Arrow (curved with arrowhead)
  Arrow: ({ style, color = 'var(--accent)', w = 100 }) => (
    <svg style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none', ...style }} width={w} height={w * 0.5} viewBox="0 0 100 50" fill="none">
      <path d="M5 10 C 25 0, 55 35, 80 30" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M72 22 L82 31 L72 38" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // Underline squiggle
  Underline: ({ color = 'var(--accent)' }) => (
    <svg viewBox="0 0 400 20" preserveAspectRatio="none" fill="none">
      <path d="M2 14 Q 80 2, 160 10 T 320 10 T 398 6" stroke={color} strokeWidth="6" strokeLinecap="round" />
    </svg>
  ),

  // Circle around something
  Circle: ({ style, color = 'var(--accent)', w = 200, h = 80 }) => (
    <svg style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none', ...style }} width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <path d={`M10 ${h/2} Q 10 10, ${w/2} 10 T ${w-10} ${h/2} Q ${w-10} ${h-10}, ${w/2} ${h-10} T 10 ${h/2}`} stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  // Star / sparkle
  Sparkle: ({ size = 24, color = 'var(--accent)', style }) => (
    <svg style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill={color} />
    </svg>
  ),

  // Globe / web icon
  Globe: ({ size = 48, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="19" stroke={color} strokeWidth="2.2" />
      <ellipse cx="24" cy="24" rx="8" ry="19" stroke={color} strokeWidth="2.2" />
      <path d="M5 24 L43 24" stroke={color} strokeWidth="2.2" />
      <path d="M8 15 Q 24 22 40 15" stroke={color} strokeWidth="2" />
      <path d="M8 33 Q 24 26 40 33" stroke={color} strokeWidth="2" />
    </svg>
  ),

  // Robot / AI icon
  Robot: ({ size = 48, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="10" y="14" width="28" height="24" rx="4" stroke={color} strokeWidth="2.2" />
      <circle cx="18" cy="24" r="2.2" fill={color} />
      <circle cx="30" cy="24" r="2.2" fill={color} />
      <path d="M18 32 Q 24 35 30 32" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="4" x2="24" y2="14" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="24" cy="4" r="2.5" fill={color} />
      <line x1="6" y1="22" x2="10" y2="22" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="38" y1="22" x2="42" y2="22" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  // Gears / automation
  Gear: ({ size = 48, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="19" cy="24" r="9" stroke={color} strokeWidth="2.2" />
      <circle cx="19" cy="24" r="3" stroke={color} strokeWidth="2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
        const r = a * Math.PI / 180;
        const x1 = 19 + Math.cos(r) * 10, y1 = 24 + Math.sin(r) * 10;
        const x2 = 19 + Math.cos(r) * 13, y2 = 24 + Math.sin(r) * 13;
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2.5" strokeLinecap="round" />;
      })}
      <circle cx="36" cy="14" r="5" stroke={color} strokeWidth="2" />
      {[0, 72, 144, 216, 288].map(a => {
        const r = a * Math.PI / 180;
        const x1 = 36 + Math.cos(r) * 6, y1 = 14 + Math.sin(r) * 6;
        const x2 = 36 + Math.cos(r) * 8.5, y2 = 14 + Math.sin(r) * 8.5;
        return <line key={'b'+a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" strokeLinecap="round" />;
      })}
    </svg>
  ),

  // Shield / IT support
  Shield: ({ size = 48, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 5 L40 10 V24 C 40 34 32 41 24 43 C 16 41 8 34 8 24 V10 Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M16 23 L22 29 L32 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // Code / custom software
  Code: ({ size = 48, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <polyline points="16,14 6,24 16,34" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="32,14 42,24 32,34" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="28" y1="10" x2="20" y2="38" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  // Rocket
  Rocket: ({ size = 48, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 4 C 32 12, 34 22, 32 32 L16 32 C 14 22, 16 12, 24 4 Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="24" cy="18" r="3.5" stroke={color} strokeWidth="2" />
      <path d="M16 28 L10 34 L10 42 L16 38" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M32 28 L38 34 L38 42 L32 38" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M20 38 L20 44 M24 38 L24 46 M28 38 L28 44" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // Lightbulb
  Bulb: ({ size = 48, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 6 C 15 6, 10 13, 13 22 C 15 28, 18 30, 19 34 L29 34 C 30 30, 33 28, 35 22 C 38 13, 33 6, 24 6 Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
      <line x1="19" y1="38" x2="29" y2="38" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="21" y1="42" x2="27" y2="42" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  // Chat bubble
  Chat: ({ size = 48, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M6 10 H 42 V 32 H 28 L 20 40 V 32 H 6 Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="16" cy="21" r="1.8" fill={color} />
      <circle cx="24" cy="21" r="1.8" fill={color} />
      <circle cx="32" cy="21" r="1.8" fill={color} />
    </svg>
  ),

  // Chart / analytics
  Chart: ({ size = 48, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M6 40 L6 8" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M6 40 L42 40" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <rect x="12" y="28" width="6" height="12" stroke={color} strokeWidth="2" />
      <rect x="22" y="20" width="6" height="20" stroke={color} strokeWidth="2" />
      <rect x="32" y="12" width="6" height="28" stroke={color} strokeWidth="2" fill="var(--accent)" fillOpacity="0.3" />
    </svg>
  ),

  // Check
  Check: ({ size = 20, color = 'var(--accent)' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M4 10 L 8 14 L 16 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // X (for comparison table)
  Cross: ({ size = 20, color = '#b0a89a' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M5 5 L 15 15 M 15 5 L 5 15" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
};

// Simple Logo wordmark
const DTCLogo = ({ dark = false, size = 22 }) => (
  <div style={{
    display: 'flex', alignItems: 'baseline', gap: 6,
    fontFamily: 'var(--font-ui)', fontWeight: 900,
    fontSize: size, letterSpacing: '-0.04em',
    color: dark ? '#fff' : 'var(--ink)',
  }}>
    <span style={{
      width: size * 0.5, height: size * 0.5, borderRadius: 99,
      background: 'var(--accent)', display: 'inline-block',
      transform: 'translateY(2px)',
    }} />
    <span>dtc<span style={{ color: 'var(--accent)' }}>.</span></span>
  </div>
);

// Reveal hook — triggers on intersect OR immediately if already in view OR after short fallback
function useReveal() {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    // Check immediately if already in view
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const inView = rect.top < (window.innerHeight || 1000) && rect.bottom > 0;
    if (inView) { setShown(true); return; }
    // Fallback timer
    const fallback = setTimeout(() => setShown(true), 600);
    let io;
    try {
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { setShown(true); clearTimeout(fallback); } });
      }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });
      io.observe(el);
    } catch (e) { /* ignore */ }
    return () => { clearTimeout(fallback); if (io) io.disconnect(); };
  }, []);
  return [ref, shown];
}

const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`}
         style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

Object.assign(window, { Doodle, DTCLogo, useReveal, Reveal });

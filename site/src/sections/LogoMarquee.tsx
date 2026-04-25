import { Doodle } from '../components/Doodle';
import { LOGOS } from '../content/data';

export const LogoMarquee = () => (
  <section
    style={{
      padding: '36px 0',
      background: 'var(--paper-2)',
      borderTop: '2px solid var(--line)',
      borderBottom: '2px solid var(--line)',
      overflow: 'hidden',
    }}
  >
    <div
      className="marquee-track"
      style={{
        fontFamily: 'var(--font-ui)',
        fontWeight: 800,
        fontSize: 22,
        letterSpacing: '-0.01em',
        color: 'var(--ink)',
        opacity: 0.7,
      }}
    >
      {[...LOGOS, ...LOGOS].map((l, i) => (
        <span key={`${l}-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 48 }}>
          {l} <Doodle.Sparkle size={16} color="var(--accent)" />
        </span>
      ))}
    </div>
  </section>
);

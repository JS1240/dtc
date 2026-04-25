import { Reveal } from '../components/Reveal';
import { Doodle } from '../components/Doodle';
import { STATS } from '../content/data';

export const StatsStrip = () => (
  <section
    style={{
      padding: '64px 56px',
      background: 'var(--paper-2)',
      color: 'var(--ink)',
      borderTop: '2px solid var(--line)',
      borderBottom: '2px solid var(--line)',
    }}
  >
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <Reveal>
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {STATS.map((s, i) => (
            <div key={s.l} style={{ position: 'relative' }}>
              <div className="h-display stat-num" style={{ fontSize: 88, letterSpacing: '-0.04em' }}>
                {s.n}
                <span style={{ color: 'var(--accent)' }}>{s.s}</span>
              </div>
              <div style={{ fontSize: 14, marginTop: 4, color: 'var(--ink-2)' }}>{s.l}</div>
              {i === 1 && <Doodle.Circle style={{ top: -8, left: -12 }} w={140} h={110} color="var(--accent)" />}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
    <style>{`@media (max-width: 820px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
      .stats-grid .stat-num { font-size: 56px !important; }
    }`}</style>
  </section>
);

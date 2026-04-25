import { useState, type KeyboardEvent } from 'react';
import { Doodle } from './Doodle';
import type { Service } from '../content/data';

const ICONS = {
  Globe: Doodle.Globe,
  Robot: Doodle.Robot,
  Gear: Doodle.Gear,
  Shield: Doodle.Shield,
  Code: Doodle.Code,
};

interface ServiceFlipProps {
  s: Service;
  i: number;
}

export const ServiceFlip = ({ s, i }: ServiceFlipProps) => {
  const [flipped, setFlipped] = useState(false);
  const isWide = i < 2;
  const Icon = ICONS[s.icon];

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setFlipped((v) => !v);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${s.t} — ${flipped ? 'sakrij' : 'prikaži'} detalje`}
      className={`flip-card ${flipped ? 'is-flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
      onKeyDown={onKey}
      style={{
        height: isWide ? 320 : 360,
        cursor: 'pointer',
      }}
    >
      <div className="flip-inner" style={{ height: '100%' }}>
        {/* front */}
        <div
          className="flip-face sticker"
          lang="hr"
          style={{
            padding: isWide ? 36 : 30,
            background: s.bg,
            color: 'var(--ink)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 'auto',
            }}
          >
            <div style={{ color: s.color }}>
              <Icon size={isWide ? 56 : 48} color={s.color} />
            </div>
            <span className="mono" style={{ fontSize: 11, opacity: 0.5 }}>
              0{i + 1}
            </span>
          </div>

          <div style={{ marginTop: 28 }}>
            <div
              style={{
                fontFamily: 'var(--font-ui)',
                fontWeight: 800,
                fontSize: isWide ? 30 : 22,
                letterSpacing: '-0.02em',
                marginBottom: 8,
                lineHeight: 1.05,
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
                hyphens: 'auto',
                WebkitHyphens: 'auto',
              }}
            >
              {s.t}
            </div>
            <div
              style={{
                fontSize: isWide ? 15 : 13.5,
                opacity: 0.8,
                lineHeight: 1.5,
                minHeight: isWide ? 44 : 60,
              }}
            >
              {s.d}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
                paddingTop: 16,
                borderTop: '1.5px dashed rgba(0,0,0,0.18)',
              }}
            >
              <span className="mono" style={{ fontSize: 11, fontWeight: 700, color: s.color }}>
                {s.from}
              </span>
              <span className="script" style={{ fontSize: 15, color: s.color, fontWeight: 600 }}>
                {flipped ? 'detalji ↓' : 'hover →'}
              </span>
            </div>
          </div>
        </div>

        {/* back */}
        <div
          className="flip-face flip-back sticker"
          lang="hr"
          style={{
            padding: isWide ? 32 : 28,
            background: 'var(--ink)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ marginBottom: 'auto' }}>
            <div
              style={{
                fontFamily: 'var(--font-ui)',
                fontWeight: 800,
                fontSize: isWide ? 24 : 20,
                letterSpacing: '-0.02em',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                WebkitHyphens: 'auto',
              }}
            >
              {s.t}
            </div>
            <div
              style={{
                fontSize: isWide ? 14 : 12.5,
                opacity: 0.8,
                marginTop: 12,
                lineHeight: 1.55,
              }}
            >
              {s.long}
            </div>
            <div
              style={{
                marginTop: 20,
                display: 'grid',
                gridTemplateColumns: isWide ? '1fr 1fr' : '1fr',
                gap: '10px 16px',
              }}
            >
              {s.deliverables.slice(0, 4).map((d) => (
                <div key={d} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 12.5 }}>
                  <Doodle.Check size={14} color={s.color} />
                  {d}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 18,
              marginTop: 20,
              borderTop: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <div>
              <div className="mono" style={{ fontSize: 10, opacity: 0.5 }}>
                CIJENA
              </div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{s.from}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="mono" style={{ fontSize: 10, opacity: 0.5 }}>
                TRAJANJE
              </div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{s.time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

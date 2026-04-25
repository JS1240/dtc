// Hand-drawn doodle SVGs (ported from b-doodles.jsx)
import type { CSSProperties } from 'react';

interface IconProps {
  size?: number;
  color?: string;
  style?: CSSProperties;
}

interface AbsoluteProps {
  style?: CSSProperties;
  color?: string;
  w?: number;
  h?: number;
}

const Arrow = ({ style, color = 'var(--accent)', w = 100 }: AbsoluteProps) => (
  <svg
    style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none', ...style }}
    width={w}
    height={w * 0.5}
    viewBox="0 0 100 50"
    fill="none"
  >
    <path d="M5 10 C 25 0, 55 35, 80 30" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M72 22 L82 31 L72 38" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Underline = ({ color = 'var(--accent)' }: { color?: string }) => (
  <svg viewBox="0 0 400 20" preserveAspectRatio="none" fill="none">
    <path d="M2 14 Q 80 2, 160 10 T 320 10 T 398 6" stroke={color} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const Circle = ({ style, color = 'var(--accent)', w = 200, h = 80 }: AbsoluteProps) => (
  <svg
    style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none', ...style }}
    width={w}
    height={h}
    viewBox={`0 0 ${w} ${h}`}
    fill="none"
  >
    <path
      d={`M10 ${h / 2} Q 10 10, ${w / 2} 10 T ${w - 10} ${h / 2} Q ${w - 10} ${h - 10}, ${w / 2} ${h - 10} T 10 ${h / 2}`}
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const Sparkle = ({ size = 24, color = 'var(--accent)', style }: IconProps) => (
  <svg style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill={color} />
  </svg>
);

const Globe = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="19" stroke={color} strokeWidth="2.2" />
    <ellipse cx="24" cy="24" rx="8" ry="19" stroke={color} strokeWidth="2.2" />
    <path d="M5 24 L43 24" stroke={color} strokeWidth="2.2" />
    <path d="M8 15 Q 24 22 40 15" stroke={color} strokeWidth="2" />
    <path d="M8 33 Q 24 26 40 33" stroke={color} strokeWidth="2" />
  </svg>
);

const Robot = ({ size = 48, color = 'currentColor' }: IconProps) => (
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
);

const Gear = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="19" cy="24" r="9" stroke={color} strokeWidth="2.2" />
    <circle cx="19" cy="24" r="3" stroke={color} strokeWidth="2" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
      const r = (a * Math.PI) / 180;
      const x1 = 19 + Math.cos(r) * 10;
      const y1 = 24 + Math.sin(r) * 10;
      const x2 = 19 + Math.cos(r) * 13;
      const y2 = 24 + Math.sin(r) * 13;
      return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2.5" strokeLinecap="round" />;
    })}
    <circle cx="36" cy="14" r="5" stroke={color} strokeWidth="2" />
    {[0, 72, 144, 216, 288].map((a) => {
      const r = (a * Math.PI) / 180;
      const x1 = 36 + Math.cos(r) * 6;
      const y1 = 14 + Math.sin(r) * 6;
      const x2 = 36 + Math.cos(r) * 8.5;
      const y2 = 14 + Math.sin(r) * 8.5;
      return <line key={'b' + a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" strokeLinecap="round" />;
    })}
  </svg>
);

const Shield = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path
      d="M24 5 L40 10 V24 C 40 34 32 41 24 43 C 16 41 8 34 8 24 V10 Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M16 23 L22 29 L32 18"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Code = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <polyline points="16,14 6,24 16,34" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="32,14 42,24 32,34" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="28" y1="10" x2="20" y2="38" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const Chat = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 10 H 42 V 32 H 28 L 20 40 V 32 H 6 Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
    <circle cx="16" cy="21" r="1.8" fill={color} />
    <circle cx="24" cy="21" r="1.8" fill={color} />
    <circle cx="32" cy="21" r="1.8" fill={color} />
  </svg>
);

const Chart = ({ size = 48, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M6 40 L6 8" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M6 40 L42 40" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <rect x="12" y="28" width="6" height="12" stroke={color} strokeWidth="2" />
    <rect x="22" y="20" width="6" height="20" stroke={color} strokeWidth="2" />
    <rect x="32" y="12" width="6" height="28" stroke={color} strokeWidth="2" fill="var(--accent)" fillOpacity="0.3" />
  </svg>
);

const Check = ({ size = 20, color = 'var(--accent)' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path d="M4 10 L 8 14 L 16 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Cross = ({ size = 20, color = '#b0a89a' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path d="M5 5 L 15 15 M 15 5 L 5 15" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const Doodle = {
  Arrow,
  Underline,
  Circle,
  Sparkle,
  Globe,
  Robot,
  Gear,
  Shield,
  Code,
  Chat,
  Chart,
  Check,
  Cross,
};

export const DTCLogo = ({ dark = false, size = 22 }: { dark?: boolean; size?: number }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      fontFamily: 'var(--font-ui)',
      fontWeight: 900,
      fontSize: size,
      letterSpacing: '-0.04em',
      color: dark ? '#fff' : 'var(--ink)',
    }}
  >
    <span
      style={{
        width: size * 0.5,
        height: size * 0.5,
        borderRadius: 99,
        background: 'var(--accent)',
        display: 'inline-block',
        transform: 'translateY(2px)',
      }}
    />
    <span>
      dtc<span style={{ color: 'var(--accent)' }}>.</span>
    </span>
  </div>
);

import { useRef, type CSSProperties } from 'react';
import { Reveal } from '../components/Reveal';
import { MagneticBtn } from '../components/MagneticBtn';
import { Doodle } from '../components/Doodle';
import { useLeadForm } from '../lib/leadForm';
import { scrollToId } from '../lib/scroll';

const SCENE_CARDS: { x: number; y: number; r: number; c: string; i: 'Robot' | 'Globe' | 'Gear' | 'Code' | 'Shield'; l: string; t: string }[] = [
  { x: 60, y: 60, r: -4, c: 'var(--yellow)', i: 'Robot', l: 'AI', t: 'chatbot asistent' },
  { x: 240, y: 30, r: 3, c: 'var(--accent)', i: 'Globe', l: 'web', t: 'landing page' },
  { x: 430, y: 80, r: -2, c: 'var(--blue)', i: 'Gear', l: 'auto', t: 'n8n flow' },
  { x: 620, y: 40, r: 4, c: 'var(--pink)', i: 'Code', l: 'app', t: 'custom software' },
  { x: 810, y: 70, r: -3, c: 'var(--green)', i: 'Shield', l: 'IT', t: '24/7 podrška' },
];

const SCENE_ICONS = {
  Robot: Doodle.Robot,
  Globe: Doodle.Globe,
  Gear: Doodle.Gear,
  Code: Doodle.Code,
  Shield: Doodle.Shield,
};

const FLOAT_CLASSES = ['float', 'float d1', 'float d2', 'float d3', 'float d4'];

export const HeroNotebook = () => {
  const { open } = useLeadForm();
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const onSceneMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const scene = sceneRef.current;
    const cursor = cursorRef.current;
    if (!scene) return;
    const r = scene.getBoundingClientRect();
    const cx = e.clientX - r.left;
    const cy = e.clientY - r.top;
    const px = ((cx / r.width) - 0.5) * 16;
    const py = ((cy / r.height) - 0.5) * 12;
    scene.style.setProperty('--px', `${px}px`);
    scene.style.setProperty('--py', `${py}px`);
    if (cursor) {
      cursor.style.left = `${cx}px`;
      cursor.style.top = `${cy}px`;
    }
  };

  const onSceneEnter = () => {
    cursorRef.current?.classList.add('is-active');
  };
  const onSceneLeave = () => {
    const scene = sceneRef.current;
    if (scene) {
      scene.style.setProperty('--px', '0px');
      scene.style.setProperty('--py', '0px');
    }
    cursorRef.current?.classList.remove('is-active');
  };

  return (
    <section style={{ padding: '56px 40px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }} className="paper-lines" />
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        <Reveal>
          <div className="tag accent" style={{ marginBottom: 28 }}>
            ✦ Digital Transformation Company
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="h-display hero-headline" style={{ fontSize: 112 }}>
            Gradimo vašu
            <br />
            <span style={{ display: 'inline-block', position: 'relative' }}>
              <span style={{ fontStyle: 'italic', fontWeight: 500 }}>digitalnu</span>
              <svg
                viewBox="0 0 400 20"
                preserveAspectRatio="none"
                style={{ position: 'absolute', left: 0, right: 0, bottom: -18, width: '100%', height: 22 }}
              >
                <path
                  d="M2 14 Q 80 2, 160 10 T 320 10 T 398 6"
                  stroke="var(--accent)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{' '}
            budućnost.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="body" style={{ maxWidth: 640, margin: '32px auto 0', fontSize: 19 }}>
            Web stranice · AI agenti · automatizacije · custom software.
            <br />
            Jedan partner za kompletnu digitalnu transformaciju.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div style={{ display: 'flex', gap: 14, marginTop: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
            <MagneticBtn accent onClick={() => open()}>
              Zatraži ponudu →
            </MagneticBtn>
            <button
              type="button"
              className="btn lg"
              onClick={() => scrollToId('radovi')}
            >
              Pogledaj radove
            </button>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div
            ref={sceneRef}
            style={{ marginTop: 80, position: 'relative', height: 360 }}
            className="hero-scene"
            onMouseMove={onSceneMouseMove}
            onMouseEnter={onSceneEnter}
            onMouseLeave={onSceneLeave}
          >
            <div className="hero-cursor" ref={cursorRef} />
            <div className="hero-scene-inner">
              <svg viewBox="0 0 1000 360" style={{ width: '100%', height: '100%' }} className="draw in">
                <path
                  d="M0 300 Q 250 280, 500 295 T 1000 290"
                  stroke="var(--ink)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="5 5"
                />
              </svg>

              {SCENE_CARDS.map((card, idx) => {
                const Icon = SCENE_ICONS[card.i];
                return (
                  <div
                    key={card.i}
                    className={FLOAT_CLASSES[idx]}
                    style={{
                      position: 'absolute',
                      left: card.x,
                      top: card.y,
                      width: 140,
                    }}
                  >
                    <div
                      className="sticker tilt"
                      style={{
                        padding: 16,
                        background: card.c,
                        transform: `rotate(${card.r}deg)`,
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                        <Icon size={40} />
                      </div>
                      <div className="mono" style={{ fontSize: 9, opacity: 0.5, textAlign: 'center' }}>
                        {card.l.toUpperCase()}
                      </div>
                      <div className="script" style={{ fontSize: 17, textAlign: 'center', fontWeight: 600 }}>
                        {card.t}
                      </div>
                    </div>
                  </div>
                );
              })}

              <Doodle.Arrow style={{ top: 180, left: 160, transform: 'rotate(-30deg)' }} w={100} />
              <div
                className="script"
                style={{
                  position: 'absolute',
                  top: 220,
                  left: 200,
                  fontSize: 22,
                  color: 'var(--accent)',
                  transform: 'rotate(-5deg)',
                  fontWeight: 600,
                }}
              >
                sve pokrivamo →
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mobile-only stacked variant */}
        <Reveal delay={400}>
          <div className="hero-scene-mobile">
            {SCENE_CARDS.map((card, idx) => {
              const Icon = SCENE_ICONS[card.i];
              return (
                <div
                  key={`m-${card.i}`}
                  className={FLOAT_CLASSES[idx] as string}
                  style={{ display: 'inline-block' } as CSSProperties}
                >
                  <div
                    className="sticker"
                    style={{
                      padding: 12,
                      background: card.c,
                      transform: `rotate(${card.r}deg)`,
                      width: 120,
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
                      <Icon size={32} />
                    </div>
                    <div className="mono" style={{ fontSize: 9, opacity: 0.5, textAlign: 'center' }}>
                      {card.l.toUpperCase()}
                    </div>
                    <div className="script" style={{ fontSize: 14, textAlign: 'center', fontWeight: 600 }}>
                      {card.t}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
      <style>{`
        .hero-scene-mobile { display: none; }
        @media (max-width: 820px) {
          .hero-headline { font-size: 56px !important; }
          .hero-scene { display: none; }
          .hero-scene-mobile {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
            margin-top: 56px;
            justify-items: center;
          }
          .hero-scene-mobile > .float:nth-child(5) { grid-column: 1 / -1; }
        }
      `}</style>
    </section>
  );
};

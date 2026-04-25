import { Reveal } from '../components/Reveal';
import { TESTIMONIALS } from '../content/data';

const ROTATIONS = [-2.5, 1.5, -1.2];

export const TestimonialStickies = () => (
  <section>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Reveal>
          <div className="eyebrow">glasovi klijenata</div>
          <h2 className="h-lg" style={{ fontSize: 52, marginTop: 8 }}>
            Stvarne riječi,{' '}
            <span style={{ fontFamily: 'var(--font-script)', color: 'var(--accent)', fontWeight: 600 }}>
              stvarni
            </span>{' '}
            rezultati.
          </h2>
        </Reveal>
      </div>
      <div className="t-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.a} delay={i * 100}>
            <div
              className="sticker tilt"
              style={{
                padding: 26,
                background: `var(--${t.c})`,
                transform: `rotate(${ROTATIONS[i]}deg)`,
                position: 'relative',
              }}
            >
              <div
                className="tape"
                style={{ top: -11, left: '50%', marginLeft: -45, transform: 'rotate(-2deg)' }}
              />
              <div
                style={{
                  fontSize: 36,
                  lineHeight: 1,
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-script)',
                  fontWeight: 700,
                }}
              >
                "
              </div>
              <div className="hand" style={{ fontSize: 18, lineHeight: 1.4, marginTop: -4 }}>
                {t.q}
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center',
                  marginTop: 24,
                  paddingTop: 16,
                  borderTop: '1.5px dashed rgba(0,0,0,0.2)',
                }}
              >
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

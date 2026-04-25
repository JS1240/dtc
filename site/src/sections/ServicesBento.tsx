import { Reveal } from '../components/Reveal';
import { ServiceFlip } from '../components/ServiceFlip';
import { SERVICES } from '../content/data';

const SPANS = ['span 3', 'span 3', 'span 2', 'span 2', 'span 2'];

export const ServicesBento = () => (
  <section>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 48,
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <Reveal>
          <div>
            <div className="eyebrow">što radimo</div>
            <h2 className="h-lg" style={{ fontSize: 56, marginTop: 8 }}>
              Sve na{' '}
              <span style={{ fontFamily: 'var(--font-script)', color: 'var(--accent)', fontWeight: 600 }}>
                jednom
              </span>{' '}
              mjestu.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="body" style={{ maxWidth: 320, textAlign: 'right' }}>
            Od strategije do lansiranja — pet usluga, jedan ugovor, jasna cijena.
          </div>
        </Reveal>
      </div>

      <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 20 }}>
        {SERVICES.map((s, i) => (
          <div key={s.t} className="bento-cell" style={{ gridColumn: SPANS[i] ?? 'span 2' }}>
            <Reveal delay={i * 60}>
              <ServiceFlip s={s} i={i} />
            </Reveal>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <span className="script" style={{ fontSize: 20, color: 'var(--muted)' }}>
          ↑ hoveraj da vidiš detalje
        </span>
      </div>
    </div>
    <style>{`@media (max-width: 820px) {
      .bento-grid { grid-template-columns: 1fr !important; }
      .bento-cell { grid-column: 1 !important; }
    }`}</style>
  </section>
);

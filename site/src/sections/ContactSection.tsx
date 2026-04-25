import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from 'react';
import { Doodle } from '../components/Doodle';
import { MagneticBtn } from '../components/MagneticBtn';
import { SERVICES } from '../content/data';
import { useLeadForm, type LeadFormFocus } from '../lib/leadForm';
import { SMOOTH_SCROLL_DURATION_MS } from '../lib/scroll';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
};

const inputBase: CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1.5px solid rgba(255,255,255,0.25)',
  background: 'rgba(255,255,255,0.06)',
  color: '#fff',
  borderRadius: 10,
  fontFamily: 'var(--font-ui)',
  fontSize: 15,
  outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
};

const labelBase: CSSProperties = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  marginBottom: 6,
  color: 'rgba(255,255,255,0.7)',
};

export const ContactSection = () => {
  const { prefill, consume } = useLeadForm();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const refs = {
    name: useRef<HTMLInputElement | null>(null),
    email: useRef<HTMLInputElement | null>(null),
    company: useRef<HTMLInputElement | null>(null),
    service: useRef<HTMLSelectElement | null>(null),
    message: useRef<HTMLTextAreaElement | null>(null),
  };

  useEffect(() => {
    if (!prefill) return;
    if (prefill.service !== undefined || prefill.message !== undefined) {
      setForm((prev) => ({
        ...prev,
        ...(prefill.service !== undefined ? { service: prefill.service } : {}),
        ...(prefill.message !== undefined ? { message: prefill.message } : {}),
      }));
    }
    if (prefill.focus) {
      const target: LeadFormFocus = prefill.focus;
      const t = window.setTimeout(() => {
        refs[target].current?.focus({ preventScroll: true });
      }, SMOOTH_SCROLL_DURATION_MS);
      return () => {
        window.clearTimeout(t);
        consume();
      };
    }
    consume();
  }, [prefill, consume]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((p) => ({ ...p, [key]: value }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setStatus('error');
      setErrorMsg(
        'Forma još nije konfigurirana — postavite VITE_FORMSPREE_ID u .env.local i restartajte dev server.',
      );
      return;
    }
    setStatus('submitting');
    setErrorMsg(null);
    try {
      const fd = new FormData(e.currentTarget);
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      });
      if (!res.ok) {
        const data: { errors?: { message?: string }[] } = await res
          .json()
          .catch(() => ({}));
        const detail = data.errors?.[0]?.message ?? `HTTP ${res.status}`;
        throw new Error(detail);
      }
      setStatus('success');
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Nešto je pošlo po zlu.');
    }
  };

  return (
    <section
      style={{
        background: 'var(--ink)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        padding: '96px 56px',
      }}
    >
      <div style={{ position: 'absolute', top: 40, left: 40 }}>
        <Doodle.Sparkle size={36} color="var(--accent)" />
      </div>
      <div style={{ position: 'absolute', top: 80, right: 120 }}>
        <Doodle.Sparkle size={24} color="var(--yellow)" />
      </div>
      <div style={{ position: 'absolute', bottom: 60, left: 120 }}>
        <Doodle.Sparkle size={20} color="var(--pink)" />
      </div>

      <div
        className="contact-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div>
          <div className="eyebrow" style={{ color: 'var(--accent)' }}>
            idemo?
          </div>
          <h2
            className="h-display contact-headline"
            style={{ fontSize: 72, marginTop: 16, color: '#fff' }}
          >
            Napravimo nešto
            <br />
            <span
              style={{
                fontFamily: 'var(--font-script)',
                color: 'var(--accent)',
                fontWeight: 600,
                fontSize: 76,
              }}
            >
              odlično
            </span>{' '}
            zajedno.
          </h2>
          <p
            className="body"
            style={{
              marginTop: 24,
              color: 'rgba(255,255,255,0.7)',
              fontSize: 17,
              maxWidth: 440,
            }}
          >
            Ostavite par detalja i javljamo se u roku od 24h s prijedlogom.
            Razgovor je besplatan i bez obveze.
          </p>
          <div
            className="mono"
            style={{ fontSize: 12, marginTop: 24, opacity: 0.5 }}
          >
            30 min · bez obveze · odgovor u 24h
          </div>
        </div>

        {status === 'success' ? (
          <div
            className="sticker"
            style={{
              padding: 32,
              background: 'var(--accent)',
              color: '#fff',
              border: '2px solid #fff',
              boxShadow: '6px 6px 0 #fff',
            }}
            role="status"
            aria-live="polite"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Doodle.Check size={32} color="#fff" />
              <div className="h-lg" style={{ fontSize: 28 }}>
                Hvala!
              </div>
            </div>
            <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.5 }}>
              Vaša poruka je zaprimljena. Javljamo se u roku od 24h na e-mail koji ste ostavili.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setErrorMsg(null);
              }}
              className="btn"
              style={{ marginTop: 20, background: '#fff', color: 'var(--ink)' }}
            >
              Pošalji još jednu →
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate={false}
            className="sticker contact-form"
            style={{
              padding: 28,
              background: 'rgba(255,255,255,0.04)',
              border: '1.5px solid rgba(255,255,255,0.18)',
              boxShadow: 'none',
              display: 'grid',
              gap: 16,
            }}
            aria-label="Kontakt forma"
          >
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              style={{
                position: 'absolute',
                left: -9999,
                width: 1,
                height: 1,
                opacity: 0,
              }}
              aria-hidden="true"
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
                 className="contact-row">
              <div>
                <label htmlFor="cf-name" style={labelBase}>
                  Ime i prezime
                </label>
                <input
                  ref={refs.name}
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  style={inputBase}
                />
              </div>
              <div>
                <label htmlFor="cf-email" style={labelBase}>
                  Email
                </label>
                <input
                  ref={refs.email}
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  style={inputBase}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
                 className="contact-row">
              <div>
                <label htmlFor="cf-company" style={labelBase}>
                  Tvrtka <span style={{ opacity: 0.5, fontWeight: 400 }}>(opcionalno)</span>
                </label>
                <input
                  ref={refs.company}
                  id="cf-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  style={inputBase}
                />
              </div>
              <div>
                <label htmlFor="cf-service" style={labelBase}>
                  Usluga
                </label>
                <select
                  ref={refs.service}
                  id="cf-service"
                  name="service"
                  value={form.service}
                  onChange={(e) => update('service', e.target.value)}
                  style={inputBase}
                >
                  <option value="">Odaberite…</option>
                  {SERVICES.map((s) => (
                    <option key={s.t} value={s.t}>
                      {s.t}
                    </option>
                  ))}
                  <option value="Drugo">Drugo</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="cf-message" style={labelBase}>
                Poruka
              </label>
              <textarea
                ref={refs.message}
                id="cf-message"
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows={5}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="Ukratko opišite što trebate, postojeće alate, deadline…"
                style={{ ...inputBase, resize: 'vertical', minHeight: 120 }}
              />
            </div>

            {status === 'error' && errorMsg && (
              <div
                role="alert"
                style={{
                  padding: '12px 14px',
                  background: 'rgba(255, 91, 46, 0.15)',
                  border: '1.5px solid var(--accent)',
                  borderRadius: 10,
                  fontSize: 14,
                  color: '#fff',
                }}
              >
                {errorMsg}
              </div>
            )}

            <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 4 }}>
              <MagneticBtn accent>
                {status === 'submitting' ? 'Šaljem…' : 'Pošalji →'}
              </MagneticBtn>
              <a
                href="mailto:hello@dtc.hr"
                className="btn"
                style={{
                  background: 'transparent',
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                }}
              >
                hello@dtc.hr
              </a>
            </div>
          </form>
        )}
      </div>

      <style>{`
        .contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus {
          border-color: var(--accent) !important;
          background: rgba(255,255,255,0.10) !important;
        }
        @media (max-width: 820px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-row { grid-template-columns: 1fr !important; }
          .contact-headline { font-size: 48px !important; }
          .contact-headline span { font-size: 52px !important; }
        }
      `}</style>
    </section>
  );
};

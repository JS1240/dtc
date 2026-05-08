import type { CSSProperties } from 'react';
import { Reveal } from '../components/Reveal';
import { Doodle } from '../components/Doodle';
import { CLIENTS, TECH_STACK } from '../content/data';

const TECH_PATHS: Record<string, string> = {
  // Source: simpleicons.org (CC0). Single-path brand marks normalized to viewBox 0 0 24 24.
  OpenAI:
    'M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.05 6.05 0 0 0 6.515 2.9A5.98 5.98 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.354-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v3l-2.597 1.5-2.607-1.5z',
  Anthropic:
    'M17.3045 3.2978h-3.629l6.6155 17.4044H24Zm-10.609 0L0 20.7022h3.7007l1.3535-3.5121h6.9225l1.3535 3.5121h3.7008L9.6964 3.2978Zm-.3858 10.5611L8.5963 7.227l2.2876 6.6319Z',
  N8n:
    'M21.4727 8.4655c-1.0148 0-1.876.6855-2.135 1.6182h-2.6712c-1.3137 0-2.4288.9594-2.6354 2.2569l-.1437.901c-.1075.6757-.6905 1.1729-1.3753 1.1729h-.4147c-.2589-.9327-1.1201-1.6181-2.135-1.6181s-1.876.6854-2.135 1.6181H6.4063c-.259-.9327-1.1202-1.6181-2.135-1.6181-1.2196 0-2.2089.9892-2.2089 2.209 0 1.2197.9893 2.209 2.209 2.209 1.0148 0 1.876-.6855 2.135-1.6182h1.5208c.2589.9327 1.1201 1.6182 2.135 1.6182s1.876-.6855 2.135-1.6182h.4146c1.3137 0 2.4288-.9594 2.6354-2.2568l.1437-.9011c.1075-.6757.6906-1.1729 1.3754-1.1729h2.6712c.2589.9327 1.1201 1.6181 2.135 1.6181 1.2196 0 2.2089-.9892 2.2089-2.209 0-1.2197-.9893-2.209-2.209-2.209ZM4.2713 15.6817a.7363.7363 0 1 1 0-1.4727.7363.7363 0 0 1 0 1.4727Zm5.9517 0a.7363.7363 0 1 1 0-1.4727.7363.7363 0 0 1 0 1.4727Zm11.25-5.0036a.7363.7363 0 1 1 0-1.4727.7363.7363 0 0 1 0 1.4727Z',
  Vercel: 'M24 22.525H0l12-21.05 12 21.05z',
  Supabase:
    'M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12V23.604a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z',
  NextJs:
    'M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.105.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z',
};

const TechIcon = ({ name, size = 28 }: { name: string; size?: number }) => {
  const path = TECH_PATHS[name];
  if (!path) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
};

const stripStyle: CSSProperties = {
  background: 'var(--paper-2)',
  borderTop: '2px solid var(--line)',
  borderBottom: '2px solid var(--line)',
  padding: '36px 56px',
};

const labelStyle: CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--ink-2)',
  marginBottom: 18,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
};

export const ClientsAndStack = () => (
  <section style={{ padding: 0 }}>
    <div style={stripStyle}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal>
          <div style={labelStyle}>
            <Doodle.Sparkle size={14} color="var(--accent)" />
            Naši klijenti
          </div>
          <div className="clients-row" style={{ display: 'flex', gap: 56, alignItems: 'center', flexWrap: 'wrap' }}>
            {CLIENTS.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.name}
                className="client-logo"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: 56,
                  borderRadius: 8,
                }}
              >
                <img
                  src={c.src}
                  alt={c.name}
                  style={{ maxHeight: 56, maxWidth: 200, objectFit: 'contain', display: 'block' }}
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </div>

    <div style={{ ...stripStyle, borderTop: 'none' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Reveal>
          <div style={labelStyle}>
            <Doodle.Sparkle size={14} color="var(--accent)" />
            Tehnologije
          </div>
          <div
            className="stack-row"
            style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', color: 'var(--ink)' }}
          >
            {TECH_STACK.map((t) => (
              <div
                key={t.name}
                style={{
                  display: 'inline-flex',
                  gap: 10,
                  alignItems: 'center',
                  fontFamily: 'var(--font-ui)',
                  fontWeight: 600,
                  fontSize: 14,
                  opacity: 0.85,
                }}
              >
                <TechIcon name={t.icon} />
                {t.name}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

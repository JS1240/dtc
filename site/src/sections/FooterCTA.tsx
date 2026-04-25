import { DTCLogo } from '../components/Doodle';

interface SocialLink {
  label: string;
  href: string;
}

const SOCIAL: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/dtc-hr' },
  { label: 'Instagram', href: 'https://www.instagram.com/dtc.hr' },
  { label: 'GitHub', href: 'https://github.com/dtc-hr' },
];

export const FooterCTA = () => (
  <footer
    style={{
      background: 'var(--ink)',
      color: '#fff',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '32px 56px',
    }}
  >
    <div
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
        fontSize: 12,
        color: 'rgba(255,255,255,0.6)',
      }}
    >
      <DTCLogo dark />
      <div>© 2026 DTC · Digital Transformation Company · Zagreb, HR</div>
      <div style={{ display: 'flex', gap: 16 }}>
        {SOCIAL.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

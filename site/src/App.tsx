import type { ReactNode } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { LeadFormProvider } from './lib/leadForm';
import { StickyNav } from './components/StickyNav';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroNotebook } from './sections/HeroNotebook';
import { ClientsAndStack } from './sections/ClientsAndStack';
import { ServicesBento } from './sections/ServicesBento';
import { ProcessZigzag } from './sections/ProcessZigzag';
import { CaseStudyDetail } from './sections/CaseStudyDetail';
import { ComparisonTable } from './sections/ComparisonTable';
import { FAQSection } from './sections/FAQSection';
import { ContactSection } from './sections/ContactSection';
import { FooterCTA } from './sections/FooterCTA';

const Anchor = ({ id, children }: { id: string; children: ReactNode }) => (
  <div id={id} style={{ scrollMarginTop: 88 }}>
    {children}
  </div>
);

export const App = () => (
  <LeadFormProvider>
    <a className="skip-link" href="#main">
      Preskoči na sadržaj
    </a>
    <ScrollProgress />
    <StickyNav />
    <main id="main">
      <HeroNotebook />
      <ClientsAndStack />
      <Anchor id="usluge">
        <ServicesBento />
      </Anchor>
      <div className="divider-squiggle" style={{ margin: '0 48px' }} />
      <Anchor id="proces">
        <ProcessZigzag />
      </Anchor>
      <Anchor id="radovi">
        <CaseStudyDetail />
      </Anchor>
      <div className="divider-dots" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>
      <Anchor id="o-nama">
        <ComparisonTable />
      </Anchor>
      <FAQSection />
      <Anchor id="kontakt">
        <ContactSection />
      </Anchor>
    </main>
    <FooterCTA />
    <SpeedInsights />
    <Analytics />
  </LeadFormProvider>
);

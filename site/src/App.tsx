import type { ReactNode } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { LeadFormProvider } from './lib/leadForm';
import { StickyNav } from './components/StickyNav';
import { HeroNotebook } from './sections/HeroNotebook';
import { LogoMarquee } from './sections/LogoMarquee';
import { StatsStrip } from './sections/StatsStrip';
import { ServicesBento } from './sections/ServicesBento';
import { ProcessZigzag } from './sections/ProcessZigzag';
import { CaseStudyDetail } from './sections/CaseStudyDetail';
import { ComparisonTable } from './sections/ComparisonTable';
import { TestimonialStickies } from './sections/TestimonialStickies';
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
    <StickyNav />
    <main id="main">
      <HeroNotebook />
      <LogoMarquee />
      <StatsStrip />
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
      <Anchor id="o-nama">
        <ComparisonTable />
      </Anchor>
      <TestimonialStickies />
      <FAQSection />
      <Anchor id="kontakt">
        <ContactSection />
      </Anchor>
    </main>
    <FooterCTA />
    <SpeedInsights />
  </LeadFormProvider>
);

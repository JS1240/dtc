// Croatian copy and structured content (ported from b-content.jsx)

export type IconName = 'Globe' | 'Robot' | 'Gear' | 'Shield' | 'Code';

export interface Service {
  t: string;
  d: string;
  long: string;
  icon: IconName;
  deliverables: string[];
  from: string;
  time: string;
  color: string;
  bg: string;
}

export interface ProcessStep {
  n: string;
  t: string;
  d: string;
  dur: string;
}

export interface CaseStudy {
  client: string;
  url: string;
  tag: string;
  title: string;
  context: string;
  stats: { n: string; l: string }[];
  solution: string[];
  logo: string;
}

export interface CaseCard {
  client: string;
  url: string;
  tag: string;
  summary: string;
  logo: string;
}

export interface Comparison {
  cols: string[];
  rows: { feat: string; vals: (true | false | 'partial')[] }[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ClientLogo {
  name: string;
  src: string;
  url: string;
}

export interface TechItem {
  name: string;
  icon: 'OpenAI' | 'Anthropic' | 'N8n' | 'Vercel' | 'Supabase' | 'NextJs';
}

export const SERVICES: Service[] = [
  {
    t: 'Web stranice',
    d: 'Brze, moderne i optimizirane za konverziju.',
    long: 'Dizajn, razvoj i hosting web stranica koje se brzo učitavaju, dobro rangiraju na Googleu i pretvaraju posjetitelje u klijente.',
    icon: 'Globe',
    deliverables: ['Custom dizajn', 'CMS po izboru', 'SEO setup', 'Analytics', 'Hosting'],
    from: 'od 500 €',
    time: '3–6 tjedana',
    color: 'var(--accent)',
    bg: 'var(--accent-soft)',
  },
  {
    t: 'AI agenti',
    d: 'Chatbotovi i asistenti koji razumiju vaš biznis.',
    long: 'Gradimo AI rješenja bazirana na vašim podacima — od customer support agenata do internih asistenata za tim.',
    icon: 'Robot',
    deliverables: ['RAG pipeline', 'Custom prompting', 'Multi-channel deploy', 'Analytics', 'Trening tima'],
    from: 'od 2.450 €',
    time: '4–8 tjedana',
    color: 'var(--blue-dk)',
    bg: 'var(--blue)',
  },
  {
    t: 'Automatizacije',
    d: 'Povežite alate, eliminirajte ručni rad.',
    long: 'Automatiziramo repetitivne procese — CRM sync, obrada mailova, fakturiranje, izvještaji. Manje Excel-a, više posla.',
    icon: 'Gear',
    deliverables: ['Audit procesa', 'Tool integracije', 'n8n / custom workflows', 'Monitoring', 'Održavanje'],
    from: 'od 950 €',
    time: '2–4 tjedna',
    color: '#2b7a3e',
    bg: 'var(--green)',
  },
  {
    t: 'IT podrška',
    d: 'Vaš tehnički tim, bez režijskih troškova.',
    long: 'Proaktivna podrška, konzultacije i održavanje infrastrukture — kao da imate internog IT-jevca, ali bolje.',
    icon: 'Shield',
    deliverables: ['24/7 monitoring', 'Hitna intervencija', 'Mjesečni audit', 'Security updates', 'Konzultacije'],
    from: 'od 295 €/mj',
    time: 'trajno',
    color: '#c26a1e',
    bg: 'var(--yellow)',
  },
  {
    t: 'Custom software',
    d: 'Aplikacije po mjeri vašeg biznisa.',
    long: 'Kada off-the-shelf rješenja ne rade — gradimo web i mobilne aplikacije točno onako kako trebate.',
    icon: 'Code',
    deliverables: ['Discovery & specs', 'UX/UI', 'Development', 'QA testiranje', 'Deploy & scale'],
    from: 'od 2.000 €',
    time: '8–16 tjedana',
    color: '#b03a5a',
    bg: 'var(--pink)',
  },
];

export const PROCESS: ProcessStep[] = [
  { n: '01', t: 'Razgovor', d: 'Upoznajemo vaš biznis, ciljeve i bolne točke. Besplatno i bez obveza.', dur: '30 min' },
  { n: '02', t: 'Strategija', d: 'Definiramo prioritete, opseg i plan realizacije. Dobivate konkretan prijedlog.', dur: '3–5 dana' },
  { n: '03', t: 'Izrada', d: 'Radimo u tjednim sprintovima, vi imate potpunu vidljivost procesa.', dur: '2–12 tjedana' },
  { n: '04', t: 'Lansiranje', d: 'Testiramo, pokrećemo i pratimo performanse u prvim tjednima.', dur: '1 tjedan' },
  { n: '05', t: 'Rast', d: 'Optimiziramo, nadograđujemo i skaliramo zajedno s vašim biznisom.', dur: 'trajno' },
];

export const CASE_HERO: CaseStudy = {
  client: 'Lynq',
  url: 'https://lynq.hr/',
  tag: 'Marketplace · Custom platforma · Web',
  title: 'Platforma koja povezuje klijente s agencijama za njihove potrebe.',
  context:
    'Lynq je dvosmjerni marketplace gdje klijenti opisuju svoju potrebu, a agencije i pružatelji usluga predaju ponude. DTC je dizajnirao i razvio cijelu platformu — od UX-a do produkcijskog deploy-a.',
  stats: [
    { n: '2 mj.', l: 'do produkcije' },
    { n: 'Live', l: 'u korištenju' },
    { n: 'Full-stack', l: 'opseg DTC-a' },
    { n: 'Custom', l: 'rješenje' },
  ],
  solution: [
    'Discovery i UX dizajn dvosmjernog marketplace-a',
    'Full-stack razvoj (frontend, backend, autentikacija)',
    'Sustav matchanja klijenata i pružatelja usluga',
    'Produkcijski deploy u 2 mjeseca',
  ],
  logo: '/clients/lynq.png',
};

export const CASE_SECONDARY: CaseCard = {
  client: 'Chubby Chucks',
  url: 'https://chubbychucks.hr/',
  tag: 'Web · Restoran · Brand',
  summary:
    'Web stranica za popularni smash burger lokal u Zagrebu. DTC je odradio cijeli web — od dizajna do deploy-a.',
  logo: '/clients/chubbychucks.png',
};

export const CLIENTS: ClientLogo[] = [
  { name: 'Lynq', src: '/clients/lynq.png', url: 'https://lynq.hr/' },
  { name: 'Chubby Chucks', src: '/clients/chubbychucks.png', url: 'https://chubbychucks.hr/' },
];

export const TECH_STACK: TechItem[] = [
  { name: 'OpenAI', icon: 'OpenAI' },
  { name: 'Anthropic', icon: 'Anthropic' },
  { name: 'n8n', icon: 'N8n' },
  { name: 'Vercel', icon: 'Vercel' },
  { name: 'Supabase', icon: 'Supabase' },
  { name: 'Next.js', icon: 'NextJs' },
];

export const COMPARISON: Comparison = {
  cols: ['DTC', 'Tradicionalna agencija', 'Freelancer'],
  rows: [
    { feat: 'Jedan partner za sve (web, AI, IT)', vals: [true, false, false] },
    { feat: 'Fiksna cijena prije početka', vals: [true, false, true] },
    { feat: 'Tjedni sprint-ovi s vidljivošću', vals: [true, 'partial', false] },
    { feat: 'Vlastiti AI & software expertise', vals: [true, 'partial', 'partial'] },
    { feat: 'Podrška nakon lansiranja', vals: [true, true, false] },
    { feat: 'Odgovor unutar 24h', vals: [true, false, 'partial'] },
    { feat: 'Nema zaključavanja u platforme', vals: [true, false, true] },
  ],
};

export const FAQS: FAQ[] = [
  { q: 'Koliko traje izrada web stranice?', a: 'Ovisno o opsegu, obično između 3 i 8 tjedana. Prezentacijski sajtovi idu brže, kompleksniji portali s integracijama malo dulje. Dobivate precizniji rok nakon discovery poziva.' },
  { q: 'Radite li s malim tvrtkama?', a: 'Da — prilagođavamo opseg svakom budžetu, od jednočlanih obrta do tvrtki srednje veličine. Najbitnije je da imate jasan problem koji tehnologija može riješiti.' },
  { q: 'Koje AI modele i alate koristite?', a: 'OpenAI (GPT-4/5), Anthropic Claude, custom fine-tunirani modeli i open-source LLM-ovi. Biramo što najbolje odgovara konkretnom problemu, nismo vezani za jednu platformu.' },
  { q: 'Što s održavanjem nakon lansiranja?', a: 'Nudimo mjesečne pakete podrške (od 295 €/mj) koji uključuju monitoring, sigurnosne updateove, manje izmjene i mjesečni izvještaj. Bez ugovora na godinu.' },
  { q: 'Možete li integrirati postojeće alate?', a: 'Da — radimo s većinom SaaS alata preko API-ja (HubSpot, Salesforce, Shopify, Notion, Slack, Google Workspace, Microsoft 365…). Ako API postoji, možemo ga povezati.' },
  { q: 'Gdje ste bazirani?', a: 'Zagreb, Hrvatska. Radimo hibridno — u živo u Zagrebu i Splitu, remote s klijentima po cijeloj regiji i EU.' },
  { q: 'Kako izgleda plaćanje?', a: 'Najčešće 40% na početku, 40% u sredini, 20% na kraju. Za veće projekte dijelimo na milestone-ove. Prihvaćamo EUR transfere i kartice.' },
];

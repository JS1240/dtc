// Shared content for Refined B

const B_SERVICES = [
  {
    t: 'Web stranice',
    d: 'Brze, moderne i optimizirane za konverziju.',
    long: 'Dizajn, razvoj i hosting web stranica koje se brzo učitavaju, dobro rangiraju na Googleu i pretvaraju posjetitelje u klijente.',
    icon: 'Globe',
    deliverables: ['Custom dizajn', 'CMS po izboru', 'SEO setup', 'Analytics', 'Hosting'],
    from: 'od 3.500 €',
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
    from: 'od 4.900 €',
    time: '4–8 tjedana',
    color: 'var(--blue-dk)',
    bg: 'var(--blue)',
  },
  {
    t: 'Automatizacije',
    d: 'Povežite alate, eliminirajte ručni rad.',
    long: 'Automatiziramo repetitivne procese — CRM sync, obrada mailova, fakturiranje, izvještaji. Manje Excel-a, više posla.',
    icon: 'Gear',
    deliverables: ['Audit procesa', 'Tool integracije', 'Zapier / n8n / custom', 'Monitoring', 'Održavanje'],
    from: 'od 1.900 €',
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
    from: 'od 590 €/mj',
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
    from: 'od 12.000 €',
    time: '8–16 tjedana',
    color: '#b03a5a',
    bg: 'var(--pink)',
  },
];

const B_PROCESS = [
  { n: '01', t: 'Razgovor', d: 'Upoznajemo vaš biznis, ciljeve i bolne točke. Besplatno i bez obveza.', dur: '30 min' },
  { n: '02', t: 'Strategija', d: 'Definiramo prioritete, opseg i plan realizacije. Dobivate konkretan prijedlog.', dur: '3–5 dana' },
  { n: '03', t: 'Izrada', d: 'Radimo u tjednim sprintovima, vi imate potpunu vidljivost procesa.', dur: '2–12 tjedana' },
  { n: '04', t: 'Lansiranje', d: 'Testiramo, pokrećemo i pratimo performanse u prvim tjednima.', dur: '1 tjedan' },
  { n: '05', t: 'Rast', d: 'Optimiziramo, nadograđujemo i skaliramo zajedno s vašim biznisom.', dur: 'trajno' },
];

const B_STATS = [
  { n: '47', s: '+', l: 'završenih projekata' },
  { n: '120', s: '+', l: 'AI agenata u produkciji' },
  { n: '98', s: '%', l: 'zadovoljnih klijenata' },
  { n: '32', s: 'h', l: 'prosječna tjedna ušteda' },
];

const B_CASE_HERO = {
  client: 'Nova Trgovina d.o.o.',
  tag: 'Retail · E-commerce · AI',
  title: 'Kako smo automatizirali prodajni proces i uštedili 20 sati tjedno.',
  context: 'Obiteljska tvrtka s 45 zaposlenih, rastući B2C brand. Ručna obrada narudžbi i customer supporta postala je uskim grlom.',
  stats: [
    { n: '−40%', l: 'vrijeme obrade narudžbi' },
    { n: '+3×', l: 'brzina odgovora na upite' },
    { n: '20 h', l: 'uštede tjedno' },
    { n: '6 tj.', l: 'do pune implementacije' },
  ],
  quote: 'DTC je u 6 tjedana promijenio način na koji radimo. Prvi put osjećamo da tehnologija radi za nas, a ne protiv nas.',
  by: 'Ana Marković · Voditeljica prodaje',
};

const B_COMPARISON = {
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

const B_TESTIMONIALS = [
  { q: 'DTC je automatizirao naš prodajni proces — uštedili smo 20 sati tjedno.', a: 'Ana Marković', r: 'Voditeljica prodaje · Nova Trgovina', c: 'yellow' },
  { q: 'AI asistent odgovara na 70% upita klijenata bez ljudske intervencije.', a: 'Marko Horvat', r: 'CEO · Logistika Plus', c: 'pink' },
  { q: 'Nova web stranica nam je utrostručila broj poslovnih upita u 3 mjeseca.', a: 'Ivana Perić', r: 'Osnivačica · Studio Art', c: 'blue' },
];

const B_FAQ = [
  { q: 'Koliko traje izrada web stranice?', a: 'Ovisno o opsegu, obično između 3 i 8 tjedana. Prezentacijski sajtovi idu brže, kompleksniji portali s integracijama malo dulje. Dobivate precizniji rok nakon discovery poziva.' },
  { q: 'Radite li s malim tvrtkama?', a: 'Da — prilagođavamo opseg svakom budžetu. Imamo klijente od freelancera do tvrtki s 200+ zaposlenih. Najbitnije je da imate jasan problem koji tehnologija može riješiti.' },
  { q: 'Koje AI modele i alate koristite?', a: 'OpenAI (GPT-4/5), Anthropic Claude, custom fine-tunirani modeli, Llama i drugi open-source LLM-ovi. Biramo što najbolje odgovara konkretnom problemu, nismo vezani za jednu platformu.' },
  { q: 'Što s održavanjem nakon lansiranja?', a: 'Nudimo mjesečne pakete podrške (od 590 €/mj) koji uključuju monitoring, sigurnosne updateove, manje izmjene i mjesečni izvještaj. Bez ugovora na godinu.' },
  { q: 'Možete li integrirati postojeće alate?', a: 'Da — radimo s 200+ SaaS alata preko API-ja (HubSpot, Salesforce, Shopify, Notion, Slack, Google Workspace, Microsoft 365…). Ako API postoji, možemo ga povezati.' },
  { q: 'Gdje ste bazirani?', a: 'Zagreb, Hrvatska. Radimo hibridno — u živo u Zagrebu i Splitu, remote s klijentima po cijeloj regiji i EU.' },
  { q: 'Kako izgleda plaćanje?', a: 'Najčešće 40% na početku, 40% u sredini, 20% na kraju. Za veće projekte dijelimo na milestone-ove. Prihvaćamo EUR, kunski transferi, kartice.' },
];

const B_LOGOS = ['NOVA TRGOVINA', 'LOGISTIKA PLUS', 'STUDIO ART', 'FINTECH HR', 'RETAIL CO', 'ACME GROUP', 'INFOCLOUD', 'MEDIA HOUSE'];

Object.assign(window, { B_SERVICES, B_PROCESS, B_STATS, B_CASE_HERO, B_COMPARISON, B_TESTIMONIALS, B_FAQ, B_LOGOS });

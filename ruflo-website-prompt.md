# RUFLO WEBSITE BUILD PROMPT — TJ-CONSULT

Build a complete, production-ready, multi-page professional consulting website for **TJ-Consult** — the freelance IT and AI consulting business of **Yousaf Javaid**, based in Denmark.

---

## REFERENCE DESIGNS — STUDY BEFORE BUILDING

Study these 5 screenshots of world-class IT consulting firm websites located in `./reference/`. Extract design patterns and apply them to TJ-Consult:

| File | Company | Key Pattern to Extract |
|---|---|---|
| `reference/accenture.png` | Accenture | Massive bold hero headline with brand verb, dark background option, accent color logo |
| `reference/thoughtworks.png` | ThoughtWorks | Direct outcome statement ("We don't just do AI. We do AI that works."), full-bleed imagery |
| `reference/slalom.png` | Slalom | Bold italic hero font, gradient photo backdrop, strong CTA contrast |
| `reference/publicis-sapient.png` | Publicis Sapient | Clean white bg, outcome-first headline ("That Actually Deliver Results"), pill CTA button |
| `reference/nngroup.png` | Nielsen Norman Group | Ultra clean, direct statement hero, no fluff, structured service cards |

**What the best all have in common — apply ALL of these:**
1. **Hero = bold outcome statement**, not the company name (e.g. "IT der virker. AI der leverer.")
2. **Single accent color** used consistently across CTA buttons, icons, underlines — never overused
3. **Clean nav**: Logo left, links center/right, one orange CTA button ("Kontakt")
4. **AI-forward** — AI and automation are front and center, not buried
5. **Results language** — "that actually deliver", "that works", "reel forretningsværdi"
6. **Large, confident typography** in hero — no small text, no hedging
7. **Service categories** visible in navigation dropdown
8. **Professional photography or abstract tech visuals** — no stock photo clichés

---

## UI LIBRARIES & STYLING — MANDATORY

Install these 3 UI component libraries before building:
```
npx skills add emilkowalski/skill
npx skills add pbakaus/impeccable
npx skills add https://github.com/Leonxlnx/taste-skill
```

Use components from these libraries throughout the build — do not build UI primitives from scratch when these libraries provide them.

**Design system:**
- Background: Clean white (#FFFFFF / #F9F9F9)
- Primary accent: Orange (#F97316 or similar warm orange)
- Secondary: Dark navy/charcoal for text (#1A1A2E or #111827)
- Font: Modern sans-serif (Inter, Geist, or similar)
- Style: Clean, professional, minimal — trust-inspiring. Not flashy. Premium feel.
- Subtle orange gradients and borders as accents, not overload
- Fully responsive — mobile first

---

## TECH STACK

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- shadcn/ui components where applicable
- Deploy-ready structure

---

## WEBSITE STRUCTURE

### Pages:
1. `/` — Forside (Hero + Services overview + About teaser + CTA)
2. `/services` — Alle ydelser opdelt i kategorier
3. `/om-mig` — Fuld om-mig side med CV, kompetencer, erfaring, uddannelse
4. `/kontakt` — Kontaktformular + kontaktinfo
5. `/projekter` *(optional)* — Portfolio/cases

---

## OWNER — FULD PROFIL

**Navn:** Yousaf Javaid  
**Virksomhed:** TJ-Consult  
**Lokation:** Brøndby Strand, Danmark  
**Email:** youjav@hotmail.com  
**Telefon:** +45 42 75 56 45  
**Portfolio:** yousaf.tech  
**LinkedIn:** Yousaf Tahir Javaid  

**Personlighed & profil:**
Yousaf er en ekstremt ambitiøs og resultatorienteret IT-specialist med passion for de nyeste teknologier. Han kombinerer dyb teknisk ekspertise med stærke forretnings- og salgskompetencer — og leverer løsninger der skaber reel, målbar forretningsværdi. Han taler direkte, leverer på tid og sætter barren højt i alt han gør.

---

## OM MIG — TEKST TIL SIDEN

### Hero-tekst (kort):
> "Jeg bygger intelligente IT-løsninger der løser rigtige problemer — fra AI-systemer og sikkerhed til skræddersyet software og cloud-infrastruktur."

### Kort bio (til forside):
Yousaf Javaid er en dansk IT-konsulent og AI-specialist med erfaring fra både teknisk produktspecialisering, IT-konsulentarbejde og AI-udvikling. Han kombinerer dyb teknisk viden med en skarp forretningsforståelse og hjælper virksomheder med at implementere fremtidens teknologi i dag.

### Fuld bio (om-mig side):
Jeg hedder Yousaf Javaid og er uddannet datamatiker med en tillægsuddannelse inden for innovation og startup fra Niels Brock. Siden starten af min karriere har jeg arbejdet med alt fra netværkssikkerhed og cloud-infrastruktur til AI-agenter og skræddersyet softwareudvikling.

Jeg har praktisk erfaring fra rollen som Technical Product Specialist hos Agillic, som IT-konsulent hos Permido og som AI-specialist hos SyncoreAI — og jeg bygger løbende egne labs og projekter for at holde mig på forkant med teknologien.

Min tilgang er enkel: Jeg finder ud af hvad din virksomhed faktisk har brug for, og så leverer jeg det — uden unødvendig kompleksitet og med fokus på drift, stabilitet og forretningsværdi.

---

## ERFARING

| Periode | Stilling | Virksomhed |
|---|---|---|
| Nu | Technical Product Specialist | Agillic |
| Nu | Sælger (Top-performer) | POWER A/S |
| Tidligere | AI-specialist | SyncoreAI |
| Tidligere | IT-konsulent | Permido |

**Highlights fra erfaring:**
- Månedens sælger hos POWER A/S — flest solgte abonnementer og strømaftaler
- AI-specialist med fokus på automatisering og AI-workflow design
- IT-konsulenterfaring med rådgivning, drift og infrastruktur

---

## UDDANNELSE & CERTIFIKATER

- **Datamatiker** — EK (praktisk og teoretisk IT, netværk, sikkerhed, systemer)
- **Innovation & Startup** — Niels Brock (business, vækst, marketing, økonomi)
- **Docker Foundations Professional Certificate** — Docker, INC
- **Microsoft Azure AI Essentials** — Microsoft & LinkedIn

---

## TEKNISKE KOMPETENCER

**Programmering:** Java, Python, Node.js, React, JavaScript, HTML/CSS  
**Databaser:** MySQL, CosmosDB  
**Sikkerhed:** GRC, netværkssikkerhed, kryptering, SIEM, firewalls, penetration testing  
**Cloud & DevOps:** Docker, Kubernetes, Terraform, CI/CD, Linux, Azure  
**AI & ML:** RAG-arkitektur, vector-databaser, AI workflow-design, MCP-servere, AI-agenter  
**Netværk & Infrastruktur:** Active Directory, Windows Server, protokoller, firewalls  
**Microsoft:** Exchange, Microsoft 365, Azure AD, Intune  

**Vis teknologi-ikoner/badges for:** Python, Node.js, React, Docker, Kubernetes, Azure, Linux, Terraform, TypeScript, MySQL, GitHub

---

## SERVICES — KOMPLET LISTE

Organiser services i 4 kategorier. Giv hver service et navn, beskrivelse og hvad kunden får ud af det.

---

### KATEGORI 1: AI & AUTOMATISERING

**1.1 AI-Agenter & Workflow-automatisering**
Få bygget intelligente AI-agenter der håndterer gentagne opgaver automatisk — kundeservice, databehandling, lead-kvalificering, rapportering og meget mere. Spar tid, reducer fejl og skaler uden at ansætte.

**1.2 AI Operative System (AI OS)**
Et skræddersyet AI-operativsystem til din virksomhed — en central AI-hub der koordinerer agenter, hukommelse, opgaver og integrationer. Din virksomhed får en intelligent assistent der kender jeres processer, data og mål.

**1.3 MCP-Server Konfiguration & Integration**
Model Context Protocol (MCP) er fremtidens måde at forbinde AI med dine systemer på. Jeg opsætter og konfigurerer MCP-servere der giver dine AI-tools adgang til kalender, filer, databaser, CRM og andet — sikkert og kontrolleret.

**1.4 RAG-Systemer & Vidensbaser**
Byg AI-systemer der kender din virksomheds data. Med RAG (Retrieval-Augmented Generation) kan din AI svare præcist på spørgsmål baseret på jeres egne dokumenter, manualer og databaser.

**1.5 AI-Strategi & Rådgivning**
Ikke sikker på hvor AI passer ind i din forretning? Jeg gennemgår jeres processer og identificerer de steder hvor AI giver reel ROI — og laver en konkret plan for implementering.

---

### KATEGORI 2: SOFTWAREUDVIKLING

**2.1 Hjemmesider & Webapplikationer**
Professionelle, hurtige og mobilvenlige hjemmesider og webapps bygget med moderne teknologi (Next.js, React). Fra landingpages til komplekse systemer — alt er skræddersyet til dit behov.

**2.2 Bookingsystemer**
Skræddersyede bookingløsninger til din branche — med kalenderintegration, automatiske bekræftelser, betaling og brugeradministration. Slut med manuelle bookinger og dobbelttilmeldinger.

**2.3 SaaS & Skræddersyet Systemudvikling**
Har du en idé til et produkt eller et internt system? Jeg bygger det fra bunden — skalerbart, sikkert og med fokus på brugeroplevelse. API-integrationer, dashboards, automatisering og databaser inkluderet.

**2.4 API-Integrationer**
Forbind dine eksisterende systemer med hinanden. Jeg integrerer CRM, regnskabssystemer, betalingsløsninger, kommunikationsplatforme og alt andet via API — så data flyder automatisk.

**2.5 Automatiserede Rapporterings- & Dashboardsystemer**
Få automatiske rapporter og live-dashboards der viser præcis det din virksomhed har brug for at se — salgsdata, driftsstatus, KPI'er — uden manuel opdatering.

---

### KATEGORI 3: IT-SIKKERHED & COMPLIANCE

**3.1 IT-Sikkerhedsrådgivning**
Jeg gennemgår jeres IT-miljø og identificerer sårbarheder, risici og huller i sikkerhedspolitikken — og giver en klar handlingsplan. Ingen teknisk snak for teknologiens skyld — kun konkrete anbefalinger.

**3.2 Penetration Testing (Pen Test)**
Lad mig angribe jeres systemer, før de rigtige hackere gør det. Jeg udfører kontrollerede pen tests og leverer en detaljeret rapport med fund og løsninger.

**3.3 SIEM & Overvågning**
Opsætning af Security Information and Event Management (SIEM) systemer — fx Microsoft Sentinel — der overvåger jeres netværk og advarer ved mistænkelig aktivitet.

**3.4 GRC — Governance, Risk & Compliance**
Hjælp til at strukturere jeres IT-governance, risikovurderinger og compliance-dokumentation. Relevant for virksomheder der skal leve op til GDPR, ISO 27001 eller NIS2.

**3.5 Firewall, Netværk & Adgangsstyring**
Opsætning og hardening af firewall-regler, netværkssegmentering og adgangsstyring. Sørger for at kun de rigtige folk har adgang til de rigtige systemer.

---

### KATEGORI 4: IT-INFRASTRUKTUR & KONSULENT

**4.1 Microsoft 365 & Exchange Opsætning**
Fuld opsætning og konfiguration af Microsoft 365 — Exchange Online, Teams, SharePoint, OneDrive og Azure AD. Inkl. migrering fra eksisterende systemer.

**4.2 Mailserver & Domæne**
Opsætning af professionel mailserver, domæne-konfiguration (DNS, MX, SPF, DKIM, DMARC) og sikkerhed mod phishing og spam.

**4.3 Cloud & Azure Infrastruktur**
Design og implementering af cloud-infrastruktur på Microsoft Azure — virtuelle maskiner, storage, netværk, sikkerhed og skalerbarhed. Infrastructure as Code med Terraform.

**4.4 Active Directory & Windows Server**
Opsætning og administration af Active Directory, Windows Server, Group Policies og brugeradministration. Til virksomheder der har behov for en struktureret IT-miljø.

**4.5 Docker & Containerisering**
Containerisering af applikationer med Docker og Kubernetes — hurtigere deployments, bedre stabilitet og nem skalering.

**4.6 DevOps & CI/CD Pipelines**
Automatisér jeres deployment-proces med CI/CD pipelines. Kode der testes og deployes automatisk — færre fejl, hurtigere releases.

---

## FORSIDE SEKTIONER (i rækkefølge)

1. **Hero** — Navn, titel ("IT-konsulent & AI-specialist"), tagline, 2 CTA-knapper: "Se ydelser" + "Kontakt mig"
2. **Services overview** — 4 kategorikort med ikon, navn og kort beskrivelse + "Læs mere"-link
3. **Om mig teaser** — Kort bio, profilbillede-placeholder, nøgletal (f.eks. "4+ teknologidomæner", "10+ kompetencer", "Klar til projekt")
4. **Teknologi-stack** — Ikonrække med alle teknologier jeg arbejder med
5. **Hvorfor vælge mig** — 3-4 USP'er: Bred ekspertise, Reel forretningsværdi, Hurtig levering, Direkte kommunikation
6. **Kontakt CTA** — Sektion med "Klar til at komme i gang?" + knap til kontaktside

---

## KONTAKT SIDE

- Kontaktformular: Navn, email, telefon (valgfrit), emne (dropdown med service-kategorier), besked, send-knap
- Kontaktinfo vist ved siden af: email, telefon, lokation (Brøndby Strand, Danmark)
- Evt. LinkedIn-link

---

## TONE OF VOICE PÅ SIDEN

- Dansk sprog
- Direkte og tillidsfuld — ingen marketing-fnidder
- Fokus på forretningsværdi og konkrete resultater
- Professionel men tilgængelig — ikke corporate-stiv

---

## VIGTIGE DESIGNDETALJER

- Navigation: Logo (TJ-Consult) til venstre, links til højre, orange CTA-knap "Kontakt"
- Footer: Links, kontaktinfo, copyright "© 2025 TJ-Consult — Yousaf Javaid"
- Animationer: Subtile fade-in og scroll-animationer med Framer Motion
- Hover-effekter på alle kort og knapper
- Ikon-bibliotek: Lucide React eller React Icons
- Ingen stock-fotos — brug abstrakte grafik-elementer eller teknologi-illustrationer

---

## OUTPUT

Byg hele projektet som et komplet Next.js-projekt med:
- `app/` directory struktur (App Router)
- Alle sider som separate filer
- Genbrugelige komponenter i `components/`
- Tailwind config med orange farvepalette
- `README.md` med setup-instruktioner

Start bygningen nu.

<div align="center">

# Alexandre Mayo Esteiro — Portfolio

**Junior Software Developer & IT Engineer** · Galicia, Spain

A fast, bilingual, data-driven portfolio built with Next.js 15 and the App Router.
No CMS, no database — just typed TypeScript files and zero external dependencies at runtime.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![next-intl](https://img.shields.io/badge/i18n-next--intl-6366F1)](https://next-intl-docs.vercel.app)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

</div>

---

## ✦ Overview

This is the source code for my personal portfolio — built to be **fast**, **bilingual** (English/Spanish), and **trivially maintainable**. Every section — experience, education, skills — is driven by typed data files in `/data`. No code changes are ever needed to update content: add a job, ship a deploy.

| | |
|---|---|
| 🌐 **Live site** | _add your deployed URL here_ |
| 🗣️ **Languages** | English / Español, switchable at runtime |
| ⚡ **Rendering** | Server Components + ISR via Vercel |
| 🎨 **Design** | Editorial "engineering logbook" theme — carbon, paper, and a single rust accent |
| 📦 **Dependencies** | Zero runtime API calls, zero database, zero CMS |

---

## ✦ Tech Stack

```
Framework      Next.js 15 (App Router, React Server Components)
Language       TypeScript 5.8 (strict mode)
Styling        Tailwind CSS 3.4
i18n           next-intl 3.x — locale-prefixed routing (/en, /es)
Icons          Lucide React
Animation      CSS transitions + IntersectionObserver scroll reveals
Hosting        Vercel (zero-config, ISR, edge network)
```

No backend. No API keys. No environment variables required. Clone it, run it, deploy it.

---

## ✦ Project Structure

```
portfolio/
├── app/
│   ├── icon.svg              # Favicon (auto-detected by Next.js)
│   ├── apple-icon.png        # iOS home screen icon
│   ├── layout.tsx            # Transparent root layout
│   ├── not-found.tsx         # 404 page
│   └── [locale]/
│       ├── layout.tsx        # Real <html>, fonts, SEO metadata, next-intl provider
│       └── page.tsx          # Page composition
│
├── components/
│   ├── layout/                # Nav, Footer
│   ├── sections/               # Hero, About, Experience, Skills, Education, Contact
│   └── ui/                     # ScrollReveal (intersection observer wrapper)
│
├── data/                      # ✏️ EDIT HERE — single source of truth
│   ├── profile.ts             # Name, bio, links, availability
│   ├── experience.ts          # Work history
│   ├── education.ts           # Degrees & certifications
│   ├── skills.ts              # Categorized skills with proficiency levels
│   └── index.ts               # Re-exports + date formatting utilities
│
├── lib/i18n/                  # next-intl routing, navigation, request config
├── messages/                  # en.json / es.json — UI string translations
├── types/index.ts             # Full TypeScript data model
└── middleware.ts              # Locale detection & routing
```

---

## ✦ Getting Started

```bash
git clone https://github.com/IsNotTheReal/portfolio.git
cd portfolio
npm install
npm run dev
```

Visit `http://localhost:3000` — it redirects to `/es` by default. English lives at `/en`.

```bash
npm run build        # production build
npm run type-check   # TypeScript validation
npm run lint          # ESLint
```

---

## ✦ Editing Content

Everything lives in `/data/*.ts` as typed objects — no JSX, no component edits required.

<details>
<summary><strong>Add a new job</strong></summary>

```ts
// data/experience.ts
{
  id: 'company-2026',
  company: 'New Company',
  role: { en: 'Software Engineer', es: 'Ingeniero de Software' },
  type: 'fulltime',          // internship | fulltime | contract | freelance
  start: '2026-01',
  end: null,                  // null = "Present"
  location: 'Remote',
  summary: { en: '...', es: '...' },
  highlights: [
    { en: 'Shipped X feature', es: 'Lancé la funcionalidad X' },
  ],
  tags: ['TypeScript', 'PostgreSQL'],
}
```
</details>

<details>
<summary><strong>Add a skill or category</strong></summary>

```ts
// data/skills.ts — add to an existing category
{ name: 'Kubernetes', level: 2 }   // 1=Familiar → 5=Expert

// ...or create a new category
{
  id: 'cloud',
  label: { en: 'Cloud', es: 'Cloud' },
  color: 'text-cyan-400',
  bgColor: 'bg-cyan-400/5',
  skills: [{ name: 'AWS', level: 3 }],
}
```
</details>

<details>
<summary><strong>Update bio, availability, or contact info</strong></summary>

Edit `data/profile.ts` directly — every field is bilingual where relevant.
</details>

<details>
<summary><strong>Change UI text (buttons, labels, nav)</strong></summary>

Edit `messages/en.json` and `messages/es.json` — keep both in sync.
</details>

---

## ✦ Deploy to Vercel

This project is built specifically for **Vercel** — Server Components, ISR, and edge middleware all rely on Vercel's runtime.

**Option A — One click**
```bash
npx vercel --prod
```

**Option B — Git integration (recommended)**
1. Push this repo to GitHub
2. [vercel.com/new](https://vercel.com/new) → Import the repository
3. Framework preset: **Next.js** (auto-detected) — no env vars needed
4. Deploy

Every push to `main` redeploys automatically. Pull requests get preview URLs for free.

> **Note:** there's no `output: 'export'` here — this app relies on Next.js Server Components and middleware for locale routing, which need a Node.js-capable runtime like Vercel's. It won't run as static files on plain nginx/Apache.

---

## ✦ Adding a Language

1. Add the locale code to `lib/i18n/routing.ts`
2. Create `messages/<locale>.json` (copy `es.json` as a template)
3. Add the new field to every `LocalizedString` object across `data/*.ts`
4. Add the option to the language switcher in `components/layout/Nav.tsx`

---

## ✦ License

This is my personal portfolio — feel free to fork it for inspiration, but please swap in your own content before deploying it as your own.

---

<div align="center">

**[LinkedIn](https://www.linkedin.com/in/alexandre-mayo-esteiro/)** · **[GitHub](https://github.com/IsNotTheReal)**

</div>

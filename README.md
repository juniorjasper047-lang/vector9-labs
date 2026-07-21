# Vector9 Labs — Website

A premium, production-ready marketing site for **Vector9 Labs**, an AI & software
development agency in Accra, Ghana. Built with Next.js 15 (App Router),
TypeScript, Tailwind CSS, Framer Motion, and Lucide.

- **Dark mode by default** with a light toggle
- **Fully responsive**, mobile-first
- **SEO-ready**: metadata, OpenGraph/Twitter, Organization + LocalBusiness JSON-LD,
  dynamic `sitemap.xml` and `robots.txt`, auto-generated OG image
- **Floating WhatsApp** CTA, contact form (React Hook Form + Zod + Sonner),
  five polished pages

## Tech stack

| Concern        | Choice                                            |
| -------------- | ------------------------------------------------- |
| Framework      | Next.js 15 (App Router) + React 19 + TypeScript   |
| Styling        | Tailwind CSS 3 + `class-variance-authority`       |
| Animation      | Framer Motion                                     |
| Icons          | Lucide React                                      |
| Theming        | `next-themes` (dark default)                      |
| Forms          | React Hook Form + Zod + Sonner toasts             |
| Fonts          | Inter (body) + Sora (display) via `next/font`     |

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  layout.tsx            # root: fonts, theme, nav/footer, JSON-LD, metadata
  page.tsx              # home (Hero, Services, WhyUs, Testimonials, Process, CTA)
  globals.css           # Tailwind layers + design tokens
  services/ about/ testimonials/ contact/   # subpages
  actions.ts            # contact form server action
  sitemap.ts robots.ts  # SEO
  opengraph-image.tsx   # auto-generated branded OG image
  icon.svg              # favicon
components/
  ui/                   # button, card, badge, input, textarea, label, section
  animated-section.tsx  # Reveal / Stagger / StaggerItem
  navbar footer logo theme-* floating-whatsapp
  sections/             # page sections (hero, services, why-us, …)
  contact-form.tsx
content/                # services, testimonials, process, why-us data
lib/
  site.ts               # siteConfig (name, contact, socials, nav, keywords)
  utils.ts              # cn() helper
```

## Customization

- **Business details, contact, socials, keywords** → `lib/site.ts`
  (`siteConfig`). Set the real production domain in `siteConfig.url` before launch.
- **Services / testimonials / process / why-us** → the `content/*.ts` files.
- **Colors** → CSS variables in `app/globals.css` (`.dark` block) and the
  `brand` palette in `tailwind.config.ts`.
- **Fonts** → `app/layout.tsx` (`Inter`, `Sora`).

## Contact form & email

The contact form posts to a Server Action (`app/actions.ts`) that validates with
Zod and (best-effort) stores submissions to `data/contact-submissions.json`
(ignored by git — dev only).

To deliver submissions by email on Vercel, add a
[Resend](https://resend.com) key in your project environment:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

When `RESEND_API_KEY` is present, the action emails `vector9labs@gmail.com`.

## Deploy to Vercel

This project is Vercel-ready with zero config.

1. Push the repo to GitHub/GitLab/Bitbucket.
2. In Vercel, **Import** the repository.
3. Framework preset: **Next.js** (auto-detected). No build settings needed.
4. (Optional) Add `RESEND_API_KEY` under **Environment Variables**.
5. Deploy. Vercel assigns a `.vercel.app` URL; add a custom domain later.

Or from the CLI (requires a Vercel account + token):

```bash
npm i -g vercel
vercel login          # or: vercel --token <YOUR_TOKEN>
vercel --prod
```

## Scripts

```bash
npm run dev      # local dev server
npm run build    # production build
npm run start    # serve production build
npm run lint     # next lint
```

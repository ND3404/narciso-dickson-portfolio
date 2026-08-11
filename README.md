# Narciso M. Dickson Portfolio

Personal portfolio for Narciso M. Dickson, MS, PMP® — construction project and
program management, project controls, and construction data analytics.

Live at **https://narcisodickson.com**.

## Scope

- Personal brand site for construction project delivery, project controls,
  analytics, BI, and responsible AI leadership.
- Separate from the official In Project and In Project AI websites. Nothing here
  deploys to, or configures, those projects.
- Routes: Home, Portfolio, About (About and Résumé merged), and three project
  detail pages. `/expertise`, `/contact` and `/projects` are permanent redirects
  kept alive for links shared before the routes were consolidated.

## Single source of truth

Every fact on the site comes from `src/config/profile.ts`. Change it there, not
in a page — several pages render the same value, and the JSON-LD `Person` schema
reads from it too.

Standing rules, enforced across the site, both résumés and LinkedIn:

| Fact | Value |
|---|---|
| Title | Founder & Senior Construction Project Manager |
| Experience | 15+ years (never 10+) |
| Project types | Residential, commercial, renovation |
| PUBLINTER | 2011 – 2022, two roles: Project Manager then Senior Program Manager |
| Portfolio | $30M+ · 20+ projects/yr · 15+ teams · 25% procurement saving |
| Canonical URL | `https://narcisodickson.com` |

Never publish: credential IDs, phone number, street address or ZIP. Public
location is limited to "Lehi, Utah, United States". The published résumé at
`public/resume/` is a scrubbed variant of the one-page construction résumé and
must stay that way.

Unknown URLs stay as `TODO_` values in `profile.ts`; the UI renders a disabled
state rather than a dead link.

## Content notes

- All three case studies are complete and published, each with its own data,
  SQL, Python, dashboards and full report on GitHub.
- The synthetic-data disclosure is scoped per project, not applied to the
  portfolio as a whole, so later work using real data does not inherit it.
- `content/social-launch.md` holds the canonical public copy for LinkedIn,
  GitHub and email signatures. Update it whenever `profile.ts` changes.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

Run before publishing:

```bash
npm run lint
npm run build
```

## Deployment

Vercel project `narciso-dickson-portfolio`. `narcisodickson.com` is the canonical
host; `www` redirects to the apex with a 308, and the `.vercel.app` URL still
serves so previously shared links keep working.

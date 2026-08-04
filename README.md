# Narciso M. Dickson Portfolio

Professional personal portfolio for Narciso M. Dickson, built with Next.js,
TypeScript, and Tailwind CSS.

## Scope

- Personal brand site for project leadership, construction project controls,
  analytics, BI, and responsible AI leadership.
- Separate from the official In Project and In Project AI websites.
- Includes required routes for About, Projects, three project detail pages,
  Expertise, Resume, and Contact.
- Uses verified local facts for Project 1 and Project 2.
- Keeps missing URLs as documented TODO placeholders in `src/config/profile.ts`.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content Notes

- Project 1 report download is copied from the local public case-study folder.
- Project 2 status is based on local `project_config.json` and process
  validation files showing Ask, Prepare, and Process complete, Analyze next.
- No approved public resume file was found, so the resume download is disabled.
- LinkedIn, Power BI, Tableau, and future project links need owner-supplied URLs.

## Deployment

Target deployment is Vercel under a new separate project:

```text
narciso-dickson-portfolio
```

## Validation

Run before publishing:

```bash
npm run lint
npm run build
```

# Sanxin Jiang (蒋三新) — Academic Homepage

Personal academic site for **Sanxin Jiang / 蒋三新**, Lecturer at Shanghai University of Electric Power.

Built with Astro; deploys to GitHub Pages via GitHub Actions.

## Content sources

- CV (NSFC-style participant résumé)
- Google Scholar: https://scholar.google.com/citations?user=XBs4DqAAAAAJ
- ORCID: https://orcid.org/0000-0002-4840-5635

## Before first deploy

1. Email is set to `samjoe_2018@shiep.edu.cn` in `src/data/site.ts`.
2. Optional: add `public/cv.pdf` and set `cvFile: 'cv.pdf'` in `site.ts`.
3. Optional: set `links.github` if you want a GitHub profile link.

## Local preview

```bash
npm install
npm run dev
```

## Publish to GitHub Pages

1. Create a public repo named `<your-username>.github.io` (or any name).
2. Push this project to the `main` branch.
3. Repo **Settings → Pages → Source → GitHub Actions**.
4. Wait for the **Deploy to GitHub Pages** workflow.

## Edit content later

| File | What to edit |
| --- | --- |
| `src/data/site.ts` | Name, title, affiliation, email, research areas |
| `src/data/publications.json` | Papers and patents |
| `src/pages/projects.astro` | Hosted grants |
| `src/pages/teaching.astro` | Courses |
| `src/pages/cv-contact.astro` | Timeline |
| `public/profile.jpg` | Portrait photo |

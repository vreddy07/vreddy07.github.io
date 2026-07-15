# VJ Portfolio — React + Vite

Personal portfolio site for Vijayanth Reddy Sandhi. Deploys automatically to GitHub Pages via GitHub Actions.

## Edit your content

All content lives in **`src/data.js`** — profile, about, skills, projects, experience, certifications. Edit that one file; the components render from it.

Before publishing, replace in `src/data.js`:
- `you@example.com` → your email
- `YOURUSERNAME` → your GitHub / LinkedIn usernames (profile links + project repo links)

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## Deploy to GitHub Pages

1. Create a repo named `yourusername.github.io`
2. Push this project to `main`
3. In the repo: **Settings → Pages → Source → GitHub Actions**
4. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push

Site goes live at `https://yourusername.github.io` in ~2 minutes.

> Deploying to a project repo instead (e.g. `github.com/you/portfolio`)? Change `base` in `vite.config.js` to `'/portfolio/'`.

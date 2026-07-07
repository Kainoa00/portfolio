# Kainoa Shintaku — Portfolio

A hand-authored static portfolio site. No framework, no build step — just HTML, CSS, and a little vanilla JS, written for craft.

**Design system:** "The Operating Ledger" — warm paper background, deep-Pacific petrol accent, Instrument Serif display type, Instrument Sans body, Spline Sans Mono for data. Numbered editorial sections, hairline rules, scroll reveals, and a live hero card cycling through real shipped metrics.

## Structure

```
├── _site/                      # THE SITE — deployed as-is (edit these files directly)
│   ├── index.html              # Single-page portfolio: hero, about, experience,
│   │                           #   projects, leadership, education/skills,
│   │                           #   writing, open problems, contact
│   ├── styles.css              # The whole design system
│   ├── site.js                 # Header state, mobile nav, scroll reveals
│   ├── projects/               # Case studies: carebridge, compass, eternally
│   ├── writing/                # Essays (3)
│   ├── files/                  # Resume PDF (downloadable)
│   └── images/                 # Profile photo, favicon
├── vercel.json                 # Vercel static deploy config + old-URL redirects
├── .github/workflows/          # Mirrors _site to GitHub Pages on push to main
├── files/, images/             # Source copies of assets
└── legacy-quarto/              # The retired Quarto site (kept for reference)
```

## Editing

Edit the HTML in `_site/` directly and push to `main`. Vercel deploys `_site` automatically (see `vercel.json`); the GitHub Action mirrors the same folder to GitHub Pages.

To update the resume, replace `_site/files/Kainoa_Shintaku_Resume.pdf`.

## History

The site was originally built with Quarto. In July 2026 it was rebuilt by hand for a full aesthetic overhaul; the Quarto sources live in `legacy-quarto/` and are no longer rendered.

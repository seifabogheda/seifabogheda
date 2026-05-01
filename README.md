# Seif Abogheda Portfolio

Static portfolio site for clients and hiring teams, built with semantic HTML, reusable CSS, and minimal vanilla JavaScript.

## Live URL

`https://seifabogheda.github.io/seifabogheda/`

## GitHub Pages

This repository is configured for GitHub Pages deployment through GitHub Actions using `.github/workflows/deploy.yml`.

### Enable Pages Manually

1. Open `Settings`.
2. Open `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Save the setting.
5. Push to `main` or re-run the `Deploy GitHub Pages` workflow from the `Actions` tab.

### Final URL Format

`https://<username>.github.io/<repo-name>/`

For this repository:

`https://seifabogheda.github.io/seifabogheda/`

## Project Structure

- `index.html` - Client-facing landing page
- `hire-me.html` - Hiring/company-focused page
- `.github/workflows/deploy.yml` - GitHub Pages deployment workflow
- `styles.css` - Shared site styles
- `script.js` - Small client-side interactions
- `data.json` - Profile metadata
- `assets/` - Static asset directory

## Local Preview

Open `index.html` directly in a browser or serve the folder with any static server.

## Performance Notes

- Mobile-first layout
- Minimal JavaScript
- Shared reusable CSS
- GitHub Pages friendly static output
- Relative internal paths for Pages-safe routing

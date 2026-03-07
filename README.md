# marra. — Landing Page

## Deploy to Netlify

### Option A: GitHub → Netlify (recommended)

1. Push to GitHub:
```bash
cd marra-landing
git init
git add -A
git commit -m "marra landing page v1"
git remote add origin git@github.com:liamwt-12/marra-landing.git
git push -u origin main
```

2. Go to app.netlify.com → "Add new site" → "Import from Git"
3. Select the repo, Netlify will auto-detect the build settings from `netlify.toml`
4. Deploy — you'll get a `.netlify.app` URL immediately

5. Add custom domain:
   - In Netlify: Domain settings → Add custom domain → `getmarra.com`
   - In your DNS: Add a CNAME record pointing `getmarra.com` to your Netlify subdomain
   - Netlify handles SSL automatically

### Option B: Manual deploy

```bash
cd marra-landing
npm install
npm run build
netlify deploy --prod --dir=dist
```

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Stack

- Vite + React 18
- Single component (`src/App.jsx`)
- Fonts: Satoshi (Fontshare) + Instrument Serif (Google)
- No external dependencies beyond React
- Builds to static HTML/JS/CSS in `dist/`

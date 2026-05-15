<div align="center">

# NEXUS

### Premium News Intelligence

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Lucide](https://img.shields.io/badge/Lucide_React-Icons-F56565?style=flat-square)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)

*Breaking news. Beautifully delivered.*

</div>

---

## Overview

**Nexus** is a premium real-time news application built with React 18. It aggregates top headlines across 7 categories — Business, Entertainment, Health, Science, Sports, Technology, and General — powered by the [NewsAPI](https://newsapi.org). Designed with a luxury editorial aesthetic, Nexus delivers a reading experience that rivals the world's best news platforms.

---

## Features

- **Live news feed** — Real-time top headlines via NewsAPI
- **7 categories** — Business, Entertainment, Health, Science, Sports, Technology, General
- **Infinite scroll** — Seamless content loading as you read
- **Dark / Light mode** — One-click theme toggle, light by default
- **Editorial hero layout** — Featured story card + responsive 3-column grid
- **Skeleton loading** — Polished shimmer placeholders while content loads
- **Top progress bar** — Visual loading indicator on every route transition
- **Scroll-to-top** — Floating button appears after 400px scroll
- **Fully responsive** — Mobile-first, works on all screen sizes
- **Custom favicon** — Nexus logo mark in browser tab
- **PWA-ready** — Manifest configured for home screen install

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18.3 |
| Routing | React Router v6 |
| Styling | Bootstrap 5.3 + Custom CSS design tokens |
| Icons | Lucide React |
| Infinite Scroll | react-infinite-scroll-component |
| Progress Bar | react-top-loading-bar |
| Typography | Inter + Playfair Display (Google Fonts) |
| News Data | NewsAPI.org |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js `>= 16`
- A free API key from [newsapi.org/register](https://newsapi.org/register)

### Installation

```bash
# Clone the repository
git clone https://github.com/abdulsami-1/nexus-news.git
cd nexus-news

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the **project root** (not inside `src/`):

```env
REACT_APP_NEWS_API_KEY=your_api_key_here
```

> **Important:** Never commit `.env.local` — it is listed in `.gitignore`.

### Run Locally

```bash
npm start
```

App runs at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
```

Outputs optimized bundle to `/build`.

---

## Project Structure

```
nexus-news/
├── public/
│   ├── favicon.svg            # Nexus logo mark (custom SVG)
│   ├── index.html             # HTML entry — fonts, Bootstrap CDN
│   └── manifest.json          # PWA manifest
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Glassmorphism nav + dark mode toggle
│   │   ├── News.js            # Data fetching, layout, infinite scroll
│   │   ├── NewsItems.js       # Hero card + regular card variants
│   │   └── Spinner.js         # Skeleton loading cards
│   ├── App.js                 # Router, dark mode state, loading bar
│   ├── index.css              # Design system — CSS variables, animations
│   └── index.js               # React entry + favicon injection
├── .env.local                 # API key — NOT committed
├── .gitignore
└── package.json
```

---

## Design System

Nexus uses CSS custom properties for consistent theming across light and dark modes:

```css
/* Light Mode (default) */
--bg-primary:    #F8FAFC;
--text-primary:  #0F172A;
--accent:        #E11D48;
--font-serif:    'Playfair Display';
--font-sans:     'Inter';

/* Dark Mode — activated via body.dark-mode class */
--bg-primary:    #0A0E1A;
--text-primary:  #F1F5F9;
--accent:        #F43F5E;
```

---

## Deployment on Vercel

1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → Import `abdulsami-1/nexus-news`
3. Vercel auto-detects **Create React App** — no config needed
4. Add environment variable before deploying:
   - Key: `REACT_APP_NEWS_API_KEY`
   - Value: your NewsAPI key
5. Click **Deploy**

> **Note:** The free NewsAPI tier only works on `localhost`. For production, upgrade to a paid plan or route requests through a backend proxy to keep the key server-side.

---

## Security

| Check | Status |
|---|---|
| API key in source code | Removed — env var only |
| `.env.local` committed | No — gitignored |
| `target="_blank"` links | All use `rel="noreferrer"` |
| React Router XSS (CVE) | Patched via `npm audit fix` |
| `dangerouslySetInnerHTML` | Not used anywhere |
| `eval()` usage | Not used anywhere |
| User input rendered | None — data from NewsAPI only |

---

## Author

**Abdul Sami**
GitHub: [@abdulsami-1](https://github.com/abdulsami-1)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with React · Powered by NewsAPI · Deployed on Vercel</sub>
</div>

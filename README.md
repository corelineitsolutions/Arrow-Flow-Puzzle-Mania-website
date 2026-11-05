# Arrow Flow Puzzle Mania – Official Gaming Website

> **Official modern, high-performance website for the casual mobile puzzle game *Arrow Flow Puzzle Mania*.**  
> Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

---

## 🎮 About the Project

**Arrow Flow Puzzle Mania** is an exciting casual mobile puzzle game where players navigate directional arrow grids, foresee multi-step causal paths, and solve satisfying logic challenges.

This repository contains the complete, production-ready official website engineered with:
- **Modern casual mobile gaming visual identity**: Colorful gradients (#6C3BFF Purple, #27B8FF Electric Blue, #FF8B35 Orange, #FFD84D Yellow), glassmorphic elements, soft glow shadows, and arrow motifs.
- **Interactive In-Browser Playable Teaser**: Visitors can tap arrows directly on the homepage interactive board to experience the core mechanics before downloading.
- **Dedicated Player Support Desk (`/support`)**: Full-featured support portal with dynamic category routing, device/OS selectors, ticket generation (`#AFP-2026-XXXXX`), file validation (< 5 MB PNG/JPG/JPEG), and backend endpoint (`POST /api/support`).
- **Comprehensive FAQ Knowledge Base (`/faq`)**: Live-searchable FAQs with category filters (Gameplay, Technical, Progress, Payments).
- **Legally Sound Policy Pages**: `/privacy-policy` and `/terms` with configurable operational placeholders.
- **SEO & Social Optimization**: Dynamic OpenGraph images, Twitter Cards, JSON-LD `VideoGame` Schema, `robots.txt`, and XML `sitemap.xml`.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router, Server & Client Components)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS (Custom gaming palette and animations)
- **Animations**: Framer Motion (Smooth entrance, floating arrows, modals)
- **Icons**: Lucide React
- **Typography**: Outfit (Bold headings) & Fredoka (Casual, rounded game UI)

---

## 📁 Directory Structure

```text
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── support/
│   │   │       └── route.ts          # Backend Support API (POST /api/support)
│   │   ├── faq/
│   │   │   └── page.tsx              # Searchable FAQ Page
│   │   ├── privacy-policy/
│   │   │   └── page.tsx              # Privacy Policy Page
│   │   ├── support/
│   │   │   └── page.tsx              # Dedicated Support Page
│   │   ├── terms/
│   │   │   └── page.tsx              # Terms & Conditions Page
│   │   ├── globals.css               # Global styles & custom scrollbars
│   │   ├── icon.tsx                  # Dynamic App Favicon
│   │   ├── layout.tsx                # Root layout with SEO metadata & JSON-LD
│   │   ├── opengraph-image.tsx       # Dynamic OG Social Share Card
│   │   ├── page.tsx                  # Landing page with all sections
│   │   ├── robots.ts                 # Dynamic robots.txt
│   │   └── sitemap.ts                # Dynamic sitemap.xml
│   ├── components/
│   │   ├── about-game.tsx            # "What is Arrow Flow Puzzle Mania?"
│   │   ├── download-section.tsx      # App Store & Google Play CTAs + QR code
│   │   ├── faq-accordion.tsx         # Reusable Accordion with Search & Filters
│   │   ├── footer.tsx                # Modern gaming footer
│   │   ├── game-features.tsx         # 9 Feature Cards
│   │   ├── game-logo.tsx             # Animated brand logo component
│   │   ├── hero.tsx                  # High-energy hero with floating arrows
│   │   ├── how-to-play.tsx           # 4-step illustrated sequence guide
│   │   ├── interactive-board.tsx     # In-browser playable puzzle teaser
│   │   ├── navbar.tsx                # Sticky responsive navbar & mobile drawer
│   │   ├── screenshots-gallery.tsx   # Gallery with Lightbox modal
│   │   ├── support-form.tsx          # Support ticket submission form
│   │   └── why-play.tsx              # Benefits & player milestone stats
│   ├── config/
│   │   └── site.ts                   # Central brand & store configuration
│   ├── data/
│   │   ├── faqs.ts                   # FAQ database
│   │   ├── features.ts               # 9 Core game features
│   │   └── screenshots.ts            # Screen previews database
│   ├── lib/
│   │   └── utils.ts                  # Class merge utilities (cn)
│   └── types/
│       └── index.ts                  # Shared TypeScript interfaces
├── .env.example                      # Environment variables reference
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Default / Example |
|---|---|---|
| `NEXT_PUBLIC_APP_NAME` | Game Title | `Arrow Flow Puzzle Mania` |
| `NEXT_PUBLIC_SITE_URL` | Canonical Production URL | `https://arrowflowgame.com` |
| `NEXT_PUBLIC_GOOGLE_PLAY_URL` | Google Play Store Download Link | Configurable store URL |
| `NEXT_PUBLIC_APP_STORE_URL` | Apple App Store Download Link | Configurable store URL |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Official Support Inquiries Email | `corelineitsolutions@gmail.com` |
| `NEXT_PUBLIC_SUPPORT_PHONE` | Official Support Helpline Number | `8624851123` |
| `NEXT_PUBLIC_SUPPORT_RESPONSE_TIME` | Expected response SLA | `Within 24-48 hours` |
| `SUPPORT_WEBHOOK_URL` | Optional support ticket webhook | `https://api.yourhelpdesk.com/webhook` |

---

## 🚀 Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+ recommended
- **NPM**: v9+

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🚢 Deployment Instructions (Vercel)

The website is optimized for one-click deployment on **Vercel**:

### Option A: Using the Vercel Dashboard
1. Push this project repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Set the **Framework Preset** to `Next.js`.
5. Under **Environment Variables**, copy the variables from `.env.example`:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
   - `NEXT_PUBLIC_SUPPORT_EMAIL` = `support@your-domain.com`
   - `NEXT_PUBLIC_GOOGLE_PLAY_URL` = your Google Play link
   - `NEXT_PUBLIC_APP_STORE_URL` = your App Store link
6. Click **Deploy**. Vercel will build and assign SSL automatically.

### Option B: Using Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

---

## 📄 License & Attribution

© 2026 Arrow Flow Puzzle Mania. All rights reserved.


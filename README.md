# Mohit Mundke — Portfolio

> AI & Data Science Student · Google Student Ambassador · Aspiring Full-Stack Software Engineer

A premium, production-ready personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

**Live:** [mohitmundke.dev](https://mohitmundke.dev) *(update once deployed)*

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| React Hook Form | Form handling |
| Lucide React | Icons |

---

## Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm, pnpm, or yarn

### Installation

```bash
# Navigate to portfolio directory
cd portfolio

# Install dependencies
npm install
# or
pnpm install

# Start development server (runs on http://localhost:5174)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

| Variable | Required | Description |
|---|---|---|
| `VITE_GITHUB_TOKEN` | No | GitHub PAT for higher API rate limits |
| `VITE_LINKEDIN_API_ENABLED` | No | Enable live LinkedIn API (`true`/`false`) |
| `VITE_AI_PROVIDER` | No | AI provider for Ask Mohit (`gemini`/`openai`) |
| `VITE_AI_API_KEY` | No | API key for Ask Mohit AI provider |
| `VITE_AI_MODEL` | No | Specific AI model to use |
| `VITE_CONTACT_ENDPOINT` | No | Backend endpoint for contact form |

> ⚠️ **Never commit `.env` to version control.** LinkedIn client secrets and OAuth tokens must only be set as server-side environment variables in Vercel/Netlify.

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard or CLI
vercel env add VITE_AI_API_KEY
```

The `vercel.json` file handles SPA routing and cache/security headers automatically.

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

The `netlify.toml` file handles SPA routing and headers automatically.

### Custom Domain

After deploying:
1. Add your custom domain in Vercel/Netlify dashboard
2. Update `https://mohitmundke.dev/` references in `index.html` (canonical, OG URL)
3. Update `sitemap.xml` with your domain
4. No code changes required for the SPA itself

---

## Customization Guide

### Adding Your Profile Photo

1. Place your photo at: `public/images/mohit-profile.jpg`
2. Recommended: square or portrait crop, minimum 600×750px, JPEG format
3. The Hero section automatically uses this path
4. Keep file size under 300KB for performance

### Updating Resume

1. Replace the placeholder with your actual resume: `public/resume.pdf`
2. The Download Resume button automatically points to `/resume.pdf`
3. No code changes needed

### Adding Gallery Photos

1. Place photos in `public/images/gallery/`
2. Open `src/data/gallery.ts`
3. Add or update entries with `imageUrl: '/images/gallery/your-photo.jpg'`
4. Photos without `imageUrl` show elegant placeholder cards

### Adding Projects

1. Open `src/data/projects.ts`
2. Add a new object to the `projects` array following the `Project` type
3. Set `featured: false` for additional projects
4. The Projects section automatically renders all projects

### Adding Certifications

1. Open `src/data/certifications.ts`
2. Add to the `certifications` array following the `Certification` type
3. Include `credentialUrl` for the certificate link

### Updating Personal Info

- Edit `src/data/portfolio.ts` for bio, skills, contact info
- Edit `src/data/achievements.ts` for experience and achievements
- Edit `index.html` for meta tags (title, description, OG tags)

---

## LinkedIn Integration

### Current State
The LinkedIn section uses curated fallback posts from `src/data/linkedin-posts.ts`.

### Enabling Live LinkedIn API
LinkedIn's `r_member_social` permission (for reading posts) requires manual approval from LinkedIn.

Architecture when API access is available:
```
LinkedIn API → OAuth 2.0 → Backend API Route → Portfolio
```

**Steps:**
1. Register a LinkedIn app at [developers.linkedin.com](https://developer.linkedin.com)
2. Request `r_member_social` permission (requires LinkedIn approval)
3. Implement backend route at `/api/linkedin/posts` (Node.js, Vercel Edge Function, etc.)
4. Set server-side environment variables:
   - `LINKEDIN_CLIENT_ID`
   - `LINKEDIN_CLIENT_SECRET`  
   - `LINKEDIN_ACCESS_TOKEN`
   - `LINKEDIN_PERSON_URN`
5. Set `VITE_LINKEDIN_API_ENABLED=true` in frontend env

**Never expose** LinkedIn secrets in frontend code.

### Updating Fallback Posts
Edit `src/data/linkedin-posts.ts` to update curated posts manually.

---

## GitHub Integration

The GitHub section uses the public GitHub API (unauthenticated by default).

**Rate limits:**
- Unauthenticated: 60 requests/hour
- Authenticated (with `VITE_GITHUB_TOKEN`): 5000 requests/hour

The section gracefully falls back to hardcoded repo data if the API is unavailable.

---

## Ask Mohit AI Assistant

The floating "Ask Mohit" assistant works in two modes:

### Mode 1: Local Q&A (default, no API needed)
Answers common questions from a pre-written knowledge base.
Works immediately without any configuration.

### Mode 2: AI-Powered (optional)
Set environment variables to enable a real AI:

**Gemini (Recommended — free tier available):**
```env
VITE_AI_PROVIDER=gemini
VITE_AI_API_KEY=your_gemini_api_key
VITE_AI_MODEL=gemini-1.5-flash
```

**OpenAI:**
```env
VITE_AI_PROVIDER=openai
VITE_AI_API_KEY=your_openai_api_key
VITE_AI_MODEL=gpt-4o-mini
```

The assistant is grounded to portfolio data only and will not fabricate information.

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg              # M monogram favicon
│   ├── resume.pdf               # Replace with actual resume
│   ├── images/
│   │   ├── mohit-profile.jpg    # Add profile photo here
│   │   └── focusnext-screenshot.png
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── main.tsx                 # App entry point
│   ├── App.tsx                  # Main app with lazy loading
│   ├── index.css                # Global styles + design tokens
│   ├── types/index.ts           # TypeScript interfaces
│   ├── data/                    # All content data (separated from UI)
│   │   ├── portfolio.ts
│   │   ├── projects.ts
│   │   ├── achievements.ts
│   │   ├── certifications.ts
│   │   ├── gallery.ts
│   │   └── linkedin-posts.ts
│   ├── lib/                     # API clients and utilities
│   │   ├── utils.ts
│   │   ├── github.ts
│   │   ├── linkedin.ts
│   │   └── ai-assistant.ts
│   ├── hooks/                   # Custom React hooks
│   │   ├── useScrollSpy.ts
│   │   ├── useReducedMotion.ts
│   │   ├── useGitHubData.ts
│   │   └── useLinkedInData.ts
│   └── components/
│       ├── ui/                  # Reusable UI components
│       ├── layout/              # Navbar, Footer, LoadingScreen
│       ├── sections/            # Portfolio sections
│       └── floating/            # AskMohitAssistant
├── index.html                   # SEO meta, OG, schema.org
├── vite.config.ts
├── tsconfig.json
├── package.json
├── .env.example                 # Environment variable documentation
├── vercel.json                  # Vercel deployment config
└── netlify.toml                 # Netlify deployment config
```

---

## License

This portfolio is personal work by Mohit Mundke. Not licensed for reuse.

---

*Built with React, TypeScript, Framer Motion, and Tailwind CSS.*

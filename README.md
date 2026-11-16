# Vishwa Vaidika Sanatan — Hindu Temple Heritage (VVS)

Official corporate web portal for **Vishwa Vaidika Sanatan Hindu Temple Heritage Private Limited**.
Preserving sacred Shilpa Shastra temple architecture, stone craftsmanship, and monumental heritage restoration.

---

## Technical Stack

- **Framework**: React 19 + TypeScript
- **Routing & SSR**: TanStack Start + TanStack Router (File-based routing)
- **Bundler & Dev Server**: Vite 8 + Nitro 3 (Vercel & Cloudflare SSR compatible)
- **Styling**: Tailwind CSS v4 + Design Tokens
- **Icons & Typography**: Material Symbols Outlined, EB Garamond, Manrope
- **Database / Backend**: Supabase integration
- **Primary Local Development Environment**: Google Antigravity

---

## Local Development Workflow

All primary development takes place in:
`C:\Users\tauqe\Documents\VVS_Website`

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The application will be served locally at `http://127.0.0.1:5173/`.

### 3. Run Unit & Routing Tests
```bash
npm run test
```

### 4. Build for Production
```bash
npm run build
```

---

## Project Structure

```
├── public/                     # Static assets (approved circular logos, favicon, robots)
│   ├── vvs-approved-circular.png              # Master original circular emblem
│   ├── vvs-approved-circular-transparent.png  # High-res transparent-corner emblem
│   └── vvs-approved-crest.png                 # Master ornate crest
├── src/
│   ├── assets/temple/          # Heritage photographs and client-provided assets
│   ├── components/
│   │   ├── screens/            # Page body components (Home, About, Services, etc.)
│   │   │   └── scripts/        # DOM scripts executed via useScreenScript
│   │   ├── site/               # Shared chrome: SiteHeader, MobileChrome, SiteFooter
│   │   └── ui/                 # Accessible UI components (Radix primitives)
│   ├── routes/                 # TanStack file-based routes
│   │   ├── __root.tsx          # Root shell layout
│   │   ├── index.tsx           # Home page route
│   │   ├── about.tsx           # About Us route
│   │   ├── services.*.tsx      # Services routes
│   │   ├── architecture.tsx    # Architecture & Craft route
│   │   ├── projects.*.tsx      # Monumental Projects routes
│   │   ├── process.tsx         # Construction Process route
│   │   └── contact.tsx         # Contact & Consultation route
│   ├── styles.css              # Tailwind v4 configuration and design tokens
│   └── test/                   # Vitest unit test suites
├── vite.config.ts              # Independent Vite & TanStack Start configuration
└── package.json
```

---

## Deployment Workflow

**Local Development (`VVS_Website`) → Google Antigravity → Local Testing → PowerShell → GitHub (`main`) → Vercel Automatic Deployment**

1. Code changes and testing are completed locally in `C:\Users\tauqe\Documents\VVS_Website`.
2. Reviewed and approved changes are committed to the GitHub repository:
   `https://github.com/gxatechnology/html-to-visual-gallery`
3. Pushing to branch `main` triggers an automatic production build and deployment on Vercel:
   `https://html-to-visual-gallery.vercel.app/`

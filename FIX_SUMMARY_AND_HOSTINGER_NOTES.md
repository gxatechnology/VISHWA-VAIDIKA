# VVS Temple Heritage — Lovable source audit and minimal correction

This is the **Lovable / TanStack Start original source**, preserving the 13 screen components and existing styling. It is **not** a compiled Hostinger public_html website.

## Confirmed changes
1. Fixed broken header/footer/mobile logo. Previously `images.ts` referenced a Lovable-only URL: `/__l5e/assets-v1/...` through `vvs-emblem.png.asset.json`, absent on Vercel. The approved **unaltered** circular logo is now at `/public/vvs-approved-circular.png`. The separately approved ornate crest is preserved at `/public/vvs-approved-crest.png` for optional future placement. Both image files are byte-for-byte copies of the supplied originals.
2. Both enquiry forms previously displayed fake success after preventDefault without storing or sending. They now open a **WhatsApp prefilled draft**, explicitly requiring the visitor to press **Send**. Attachments are **not uploaded**; visitors are asked to send them in WhatsApp.
3. Removed `.env` from distributed ZIP to avoid publishing account configuration. `.env.example` contains blank public-side configuration placeholders. Existing private Vercel environment settings are not copied.
4. No redesign: all 13 existing `src/components/screens/*.tsx` retained with only minimal contact-copy changes.

## Known production blockers — review before advertising the website as complete
- Fake/unverified claims: a named Mahalakshmi temple case study, certification and 1,000-year structural warranties; these are **not** supported by the client's 16-page brochure. These were **not silently rewritten** because verifying projects requires client approval. The founder portrait asset also needs authentic verification.
- Contact-form submission is *not* stored in any CRM or backend. WhatsApp is a manual handoff and the visitor must press Send.
- The client-supplied historical brochure gives 20+ years, 36+ projects, 10+ states, 350+ artisans; ensure accurate attribution to prior business and confirmation of corporate continuity.
- Confirm published phone number, official email, active services and office address.
- Do not launch real public SEO/advertising or claim readiness until claims and content are verified.

## Vercel update workflow (existing project)
1. Back up existing GitHub repository. Do not make a new project or replace the design.
2. Apply modified files to existing repository, preserving `.env` secrets outside Git.
3. Commit and push to the **same existing `main`** branch connected to Vercel. Check CI/build output, then test header and footer image requests (HTTP 200).
4. Test all pages at desktop/mobile sizes and the WhatsApp draft handoff. No live deployment was performed by this package.

## Hostinger compatibility
This code uses **React 19 + TanStack Start SSR + Nitro server**, not a plain static HTML site. Uploading this source or its ZIP directly into `public_html` will **not** run it. Choose a compatible server runtime (e.g. Hostinger plan with Node server support and correct TanStack/Nitro adapter) and build/test on that target, **or** separately convert to a static Vite/React build with route fallback. Neither conversion is included here; do not assume `dist/` is a static upload.

## Verification status
- Verified approved circular PNG copied without byte changes (SHA-256 equality).
- Verified source reference no longer depends on `/__l5e/`.
- Verified all 13 screen components are retained.
- **Build not verified**: package installation was unavailable/timed out in this environment. Run npm install / npm run build locally or in Vercel CI and inspect any errors.

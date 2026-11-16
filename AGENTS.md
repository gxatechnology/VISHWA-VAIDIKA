# VVS Temple Heritage — Development Guidelines

> [!NOTE]
> **Primary Local Development Environment**: Google Antigravity.
> **Deployment Workflow**: Local edits in `VVS_Website` → Local verification → Git commit/push → Automatic Vercel deployment.

## Project Rules
- **Screen Separation**: Page bodies live in `src/components/screens/*` (one per design screen); routes in `src/routes` only configure `head()` metadata and route desktop/mobile screens. Keeps design markup separate from routing.
- **Shared Chrome**: Shared chrome (desktop header, mobile header, drawer, bottom tab bar, footer) lives in `src/components/site` and wraps every page via `SiteLayout` in `__root.tsx`; screens must not render their own header or footer.
- **Interactive Screen Scripts**: Interactive screen behavior is ported DOM script in `src/components/screens/scripts/*` executed via `useScreenScript` after mount; handlers are wired as `S.current.hN`. Keeps original design interactions intact without rewriting markup as state.
- **Asset Pipeline**: All site photos and temple assets are imported through the `IMG` map in `src/components/site/images.ts`; never hotlink Google-hosted temporary URLs.
- **Design Tokens**: Design tokens (Material-3 palette, EB Garamond / Manrope typography, spacing, radius scale where `rounded-4xl` = 0.75rem) are defined in `src/styles.css`; use token utility classes rather than raw arbitrary hex values.
- **Framework Architecture**: Standard React 19, TypeScript, TanStack Start, TanStack Router, Vite, and Nitro SSR. Fully independent of external proprietary editor tooling.

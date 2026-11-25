import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { QueryClient } from "@tanstack/react-query";
import {
  createRouter,
  createMemoryHistory,
  RouterProvider,
  rootRouteId,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileHeader, NavDrawer } from "@/components/site/MobileChrome";
import { NAV_LINKS } from "@/components/site/nav-links";
import { IMG } from "@/components/site/images";
import type { ReactNode } from "react";

async function renderWithRouter(ui: ReactNode) {
  const rootRoute = createRootRoute({
    component: () => <>{ui}</>,
  });
  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
  });
  const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/about",
  });
  const servicesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/services",
  });
  const contactRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/contact",
  });

  const testTree = rootRoute.addChildren([indexRoute, aboutRoute, servicesRoute, contactRoute]);
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const router = createRouter({
    routeTree: testTree,
    history,
  });

  await act(async () => {
    await router.load();
  });

  return render(<RouterProvider router={router} />);
}

describe("Routing and Navigation Destinations", () => {
  const router = createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
  });

  const coreRoutes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/architecture", label: "Architecture & Craft" },
    { path: "/projects", label: "Projects" },
    { path: "/process", label: "Process" },
    { path: "/contact", label: "Contact / Consultation CTA" },
    { path: "/temple-anatomy", label: "Temple Anatomy" },
    { path: "/leadership", label: "Leadership" },
  ];

  coreRoutes.forEach(({ path, label }) => {
    it(`matches valid route destination for ${label} (${path})`, () => {
      const matches = router.matchRoutes(path);
      expect(matches.length).toBeGreaterThan(0);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    });
  });
});

describe("Logo Asset Integrity", () => {
  it("uses the approved crest derivative with preserved artwork", () => {
    expect(IMG.crest).toBe("/vvs-approved-crest.png");
    expect(IMG.crestWebp).toBe("/vvs-approved-crest.webp");
    expect(IMG.logoOriginal).toBe("/vvs-approved-crest-original.png");
    expect(IMG.legacyCircularLogo).toBe("/vvs-approved-circular-transparent.png");
  });
});

describe("SiteHeader Desktop Component", () => {
  it("renders circular logo, brand title, 7 nav links, and CTA", async () => {
    const onOpenMenu = vi.fn();
    await renderWithRouter(<SiteHeader onOpenMenu={onOpenMenu} isMenuOpen={false} />);

    // Brand and logo
    const emblem = screen.getByAltText(/Vishwa Vaidika Sanatan Hindu Temple Heritage Crest/i);
    expect(emblem).toBeDefined();
    expect(emblem.getAttribute("src")).toBe(IMG.crest);
    expect(emblem.className).toContain("object-contain");

    expect(screen.getByText(/Vishwa Vaidika Sanatan/i)).toBeDefined();
    expect(screen.getByText(/Hindu Temple Heritage Private Limited/i)).toBeDefined();

    // 7 navigation links
    NAV_LINKS.forEach((link) => {
      expect(screen.getByText(link.label)).toBeDefined();
    });

    // Prominent CTA
    const cta = screen.getByText(/Discuss Your Project/i);
    expect(cta).toBeDefined();
    expect(cta.closest("a")?.getAttribute("href")).toBe("/contact");

    // Hamburger button for tablet/compact widths
    const menuBtn = screen.getByRole("button", { name: /Open navigation menu/i });
    expect(menuBtn).toBeDefined();
    fireEvent.click(menuBtn);
    expect(onOpenMenu).toHaveBeenCalledTimes(1);
  });
});

describe("MobileHeader Component", () => {
  it("renders compact brand identity and accessible hamburger trigger", async () => {
    const onOpenMenu = vi.fn();
    await renderWithRouter(<MobileHeader onOpenMenu={onOpenMenu} isMenuOpen={false} />);

    const emblem = screen.getByAltText(/Vishwa Vaidika Sanatan Hindu Temple Heritage Crest/i);
    expect(emblem).toBeDefined();
    expect(emblem.className).toContain("object-contain");

    expect(screen.getByText(/VVS Temple Heritage/i)).toBeDefined();

    const menuBtn = screen.getByRole("button", { name: /Open navigation menu/i });
    expect(menuBtn.getAttribute("aria-expanded")).toBe("false");
    expect(menuBtn.getAttribute("aria-controls")).toBe("mobile-nav-drawer");

    fireEvent.click(menuBtn);
    expect(onOpenMenu).toHaveBeenCalledTimes(1);
  });
});

describe("NavDrawer Component", () => {
  it("renders all 7 navigation items, close button, CTA, and handles interactions", async () => {
    const onClose = vi.fn();
    await renderWithRouter(<NavDrawer open={true} onClose={onClose} />);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeDefined();
    expect(dialog.getAttribute("aria-modal")).toBe("true");

    // All 7 navigation links present
    NAV_LINKS.forEach((link) => {
      const el = screen.getAllByText(link.label);
      expect(el.length).toBeGreaterThan(0);
    });

    // Consultation CTA present
    const cta = screen.getByText(/Discuss Your Project/i);
    expect(cta).toBeDefined();
    expect(cta.closest("a")?.getAttribute("href")).toBe("/contact");

    // Close button works
    const closeBtn = screen.getByRole("button", { name: /Close navigation menu/i });
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalledTimes(1);

    // Escape key works
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(2);

    // Clicking a navigation link triggers onClose
    const homeLink = screen.getAllByText("Home")[0];
    fireEvent.click(homeLink);
    expect(onClose).toHaveBeenCalledTimes(3);
  });
});

describe("SiteFooter Component", () => {
  it("renders exact company name and dynamic copyright year", async () => {
    await renderWithRouter(<SiteFooter />);

    // Brand and logo
    const emblem = screen.getByAltText(/Vishwa Vaidika Sanatan Hindu Temple Heritage Crest/i);
    expect(emblem).toBeDefined();

    // Full legal name
    const companyMatches = screen.getAllByText(/Vishwa Vaidika Sanatan/i);
    expect(companyMatches.length).toBeGreaterThanOrEqual(1);
    const subtitleMatches = screen.getAllByText(/Hindu Temple Heritage Private Limited/i);
    expect(subtitleMatches.length).toBeGreaterThanOrEqual(1);

    // Dynamic copyright year
    const currentYear = new Date().getFullYear();
    const copyrightRegex = new RegExp(`©\\s*${currentYear}\\s*Vishwa Vaidika Sanatan Hindu Temple Heritage Private Limited`, "i");
    expect(screen.getByText(copyrightRegex)).toBeDefined();
  });
});

import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { BottomNav, MobileHeader, NavDrawer } from "./MobileChrome";

/** Pages whose mobile design ends with its own sign-off, so the site footer hides on phones. */
const MOBILE_SELF_CONTAINED = new Set(["/", "/contact"]);

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Reset menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setMenuOpen(false);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Prevent background scrolling while drawer is open
  useEffect(() => {
    if (menuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [menuOpen]);

  const hideFooterMobile = MOBILE_SELF_CONTAINED.has(pathname.replace(/\/$/, "") || "/");

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <SiteHeader onOpenMenu={toggleMenu} isMenuOpen={menuOpen} />
      <MobileHeader onOpenMenu={toggleMenu} isMenuOpen={menuOpen} />
      <NavDrawer open={menuOpen} onClose={closeMenu} />
      <div className="flex-1 flex flex-col">{children}</div>
      <SiteFooter className={hideFooterMobile ? "hidden md:block" : "pb-16 md:pb-0"} />
      <BottomNav />
    </div>
  );
}

import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { IMG } from "./images";
import { NAV_LINKS, PHONE, PHONE_HREF, PHONE_SECONDARY, PHONE_SECONDARY_HREF, WHATSAPP_HREF } from "./nav-links";

interface MobileHeaderProps {
  onOpenMenu: () => void;
  isMenuOpen?: boolean;
}

export function MobileHeader({ onOpenMenu, isMenuOpen = false }: MobileHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 md:hidden pt-safe bg-surface/95 backdrop-blur-xl border-b border-gold/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-gutter-mobile flex items-center justify-between gap-2">
        <Link
          to="/"
          className="flex items-center gap-2 min-w-0 group focus:outline-hidden"
          aria-label="Vishwa Vaidika Sanatan Hindu Temple Heritage Home"
        >
          <div className="relative h-11 w-auto shrink-0 flex items-center">
            <img
              alt="Vishwa Vaidika Sanatan Hindu Temple Heritage Crest"
              className="h-full w-auto max-h-11 object-contain"
              src={IMG.crest}
              width={66}
              height={44}
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="flex flex-col min-w-0 text-left">
            <span className="font-title-editorial text-[13px] font-bold tracking-[0.06em] uppercase text-primary-container leading-tight truncate">
              VVS Temple Heritage
            </span>
            <span className="font-label-monument text-[8.5px] font-semibold tracking-[0.1em] uppercase text-gold leading-tight truncate">
              Sacred Architecture
            </span>
          </div>
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-drawer"
          onClick={onOpenMenu}
          className="w-11 h-11 shrink-0 flex items-center justify-center rounded-lg text-primary hover:bg-surface-container-high transition-colors focus-visible:outline-2 focus-visible:outline-primary"
        >
          <span className="material-symbols-outlined text-[26px]">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
    </header>
  );
}

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function NavDrawer({ open, onClose }: NavDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // Manage focus trap, Escape key listener, and focus restoration
  useEffect(() => {
    if (open) {
      previousActiveElementRef.current = document.activeElement as HTMLElement | null;

      // Focus the close button once drawer opens
      const timer = window.setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
          return;
        }

        if (event.key === "Tab" && drawerRef.current) {
          const focusableSelectors =
            'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
          const focusableElements = Array.from(
            drawerRef.current.querySelectorAll<HTMLElement>(focusableSelectors),
          ).filter((el) => el.offsetParent !== null);

          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        window.clearTimeout(timer);
        document.removeEventListener("keydown", handleKeyDown);
        // Restore focus to trigger element when drawer closes
        if (
          previousActiveElementRef.current &&
          typeof previousActiveElementRef.current.focus === "function"
        ) {
          previousActiveElementRef.current.focus();
        }
      };
    }
  }, [open, onClose]);

  return (
    <div
      id="mobile-nav-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      className={`fixed inset-0 z-[60] flex justify-end transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-charcoal-monolith/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        className={`relative w-[85%] max-w-[340px] h-full bg-surface text-on-surface shadow-2xl flex flex-col pt-safe pb-safe justify-between overflow-y-auto transition-transform duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-gutter-mobile flex flex-col gap-space-md">
          <div className="flex items-center justify-between pb-space-xs border-b border-gold/25">
            <Link
              to="/"
              onClick={onClose}
              className="flex items-center gap-2.5 min-w-0 focus:outline-hidden"
              tabIndex={open ? 0 : -1}
            >
              <div className="relative h-10 w-auto shrink-0 flex items-center">
                <img
                  alt="Vishwa Vaidika Sanatan Hindu Temple Heritage Crest"
                  className="h-full w-auto max-h-10 object-contain"
                  src={IMG.crest}
                  width={60}
                  height={40}
                />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="font-title-editorial text-[13px] font-bold tracking-wider uppercase text-primary-container truncate">
                  VVS Sanatan
                </span>
                <span className="font-label-monument text-[8.5px] uppercase tracking-widest text-gold font-semibold truncate">
                  Temple Heritage
                </span>
              </div>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close navigation menu"
              className="w-11 h-11 flex items-center justify-center rounded-lg text-primary hover:bg-surface-container transition-colors focus-visible:outline-2 focus-visible:outline-primary"
              onClick={onClose}
              tabIndex={open ? 0 : -1}
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          {/* Primary Navigation - 7 Core Links */}
          <nav
            aria-label="Mobile drawer links"
            className="flex flex-col gap-1 font-title-editorial text-[17px]"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                activeOptions={{ exact: l.to === "/" }}
                className="py-2.5 px-2 rounded-md transition-colors flex items-center justify-between border-l-2"
                activeProps={{
                  className: "text-primary font-bold bg-surface-container-low border-saffron",
                }}
                inactiveProps={{
                  className:
                    "text-on-surface hover:text-primary hover:bg-surface-container-lowest border-transparent",
                }}
              >
                <span>{l.label}</span>
                <span className="material-symbols-outlined text-[18px] text-stone-hairline">
                  chevron_right
                </span>
              </Link>
            ))}
          </nav>

          {/* Secondary Heritage Explorations */}
          <div className="pt-2 border-t border-gold/20">
            <span className="font-label-monument text-[9.5px] uppercase tracking-[0.16em] text-gold font-semibold block px-2 mb-1.5">
              Heritage Archive
            </span>
            <div className="flex flex-col gap-1 text-[14px] font-sans">
              <Link
                to="/temple-anatomy"
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="py-1.5 px-2 rounded text-on-surface-variant hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>Temple Anatomy Explorer</span>
                <span className="material-symbols-outlined text-[16px] text-stone-hairline">
                  open_in_new
                </span>
              </Link>
              <Link
                to="/leadership"
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="py-1.5 px-2 rounded text-on-surface-variant hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>Sthapati Leadership</span>
                <span className="material-symbols-outlined text-[16px] text-stone-hairline">
                  open_in_new
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Drawer Bottom CTA Actions */}
        <div className="p-gutter-mobile flex flex-col gap-2.5 bg-surface-container-low border-t border-gold/20">
          <Link
            to="/contact"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            className="w-full h-11 bg-saffron text-on-primary font-label-ui text-label-ui uppercase tracking-wider font-semibold rounded-lg flex items-center justify-center gap-2 shadow-md hover:bg-on-tertiary-fixed-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            <span>Discuss Your Project</span>
          </Link>

          <a
            className="w-full h-10 bg-primary text-on-primary font-label-ui text-[12px] uppercase tracking-wider font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm hover:bg-primary-container transition-colors"
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp Consultation</span>
          </a>

          <div className="flex flex-col items-center gap-1 pt-1 font-label-monument text-[10px] uppercase tracking-widest text-on-surface-variant">
            <a href={PHONE_HREF} tabIndex={open ? 0 : -1} className="hover:text-primary transition-colors">
              Primary: {PHONE}
            </a>
            <a href={PHONE_SECONDARY_HREF} tabIndex={open ? 0 : -1} className="hover:text-primary transition-colors">
              Secondary: {PHONE_SECONDARY}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const TABS = [
  { to: "/", label: "Home", icon: "temple_hindu" },
  { to: "/architecture", label: "Craft", icon: "architecture" },
  { to: "/projects", label: "Projects", icon: "account_balance" },
  { to: "/contact", label: "Connect", icon: "quickreply" },
] as const;

export function BottomNav() {
  return (
    <nav
      aria-label="Mobile quick tabs"
      className="fixed bottom-0 w-full z-40 md:hidden pb-safe bg-surface/90 backdrop-blur-xl border-t border-gold/20 shadow-[0_-1px_8px_rgba(0,0,0,0.04)]"
    >
      <div className="flex justify-around items-center h-16 px-gutter-mobile">
        {TABS.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            activeOptions={{ exact: t.to === "/" }}
            className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] transition-colors"
            activeProps={{ className: "text-primary font-semibold" }}
            inactiveProps={{ className: "text-on-surface-variant hover:text-on-surface" }}
          >
            <span className="material-symbols-outlined text-[20px]">{t.icon}</span>
            <span className="font-label-monument text-label-monument uppercase">{t.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

import { Link } from "@tanstack/react-router";
import { IMG } from "./images";
import { NAV_LINKS } from "./nav-links";

interface SiteHeaderProps {
  onOpenMenu: () => void;
  isMenuOpen?: boolean;
}

export function SiteHeader({ onOpenMenu, isMenuOpen = false }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-ivory/95 backdrop-blur-md border-b border-gold/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-4 lg:gap-6">
        {/* Brand identity */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 group focus:outline-hidden"
          aria-label="Vishwa Vaidika Sanatan Hindu Temple Heritage Home"
        >
          <div className="relative h-14 lg:h-16 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 flex items-center">
            <img
              alt="Vishwa Vaidika Sanatan Hindu Temple Heritage Crest"
              className="h-full w-auto max-h-16 object-contain"
              src={IMG.crest}
              width={96}
              height={64}
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="hidden 2xl:flex flex-col text-left">
            <span className="font-title-editorial text-[13px] leading-tight tracking-[0.12em] uppercase font-bold text-primary-container whitespace-nowrap">
              Vishwa Vaidika Sanatan
            </span>
            <span className="font-label-monument text-[9.5px] leading-tight tracking-[0.14em] uppercase font-semibold text-gold whitespace-nowrap">
              Hindu Temple Heritage Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Center / Right navigation (desktop xl+) */}
        <nav
          aria-label="Primary navigation"
          className="hidden xl:flex items-center gap-4 2xl:gap-6 shrink-0"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="font-label-ui text-[12px] 2xl:text-label-ui uppercase tracking-wider transition-colors py-1 border-b-2 whitespace-nowrap"
              activeProps={{
                className: "text-primary-container font-semibold border-saffron",
              }}
              inactiveProps={{
                className:
                  "text-on-surface-variant hover:text-primary-container border-transparent",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Far Right CTA + tablet/compact hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2.5 bg-saffron text-on-primary font-label-ui text-[12px] 2xl:text-label-ui uppercase tracking-wider font-semibold rounded-lg border border-gold hover:bg-on-tertiary-fixed-variant hover:text-on-primary transition-all shadow-[0_2px_6px_rgba(232,121,50,0.25)] whitespace-nowrap"
          >
            Discuss Your Project
          </Link>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={onOpenMenu}
            className="xl:hidden w-11 h-11 rounded-lg flex items-center justify-center text-primary-container hover:bg-surface-container-high transition-colors focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span className="material-symbols-outlined text-[26px]">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

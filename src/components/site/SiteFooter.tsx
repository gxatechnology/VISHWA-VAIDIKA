import { Link } from "@tanstack/react-router";
import { IMG } from "./images";
import {
  PHONE,
  PHONE_HREF,
  PHONE_SECONDARY,
  PHONE_SECONDARY_HREF,
  EMAIL,
  EMAIL_HREF,
  ADDRESS_PUNE,
} from "./nav-links";

export function SiteFooter({ className = "" }: { className?: string }) {
  return (
    <footer
      className={`w-full bg-charcoal-monolith text-ivory border-t border-gold/30 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-gutter py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-hairline/20">
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative h-16 md:h-20 w-auto shrink-0 flex items-center">
                <img
                  alt="Vishwa Vaidika Sanatan Hindu Temple Heritage Crest"
                  className="h-full w-auto max-h-20 object-contain"
                  src={IMG.crest}
                  width={120}
                  height={80}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-title-editorial text-[15px] md:text-[16px] leading-tight tracking-[0.16em] uppercase font-bold text-sandstone-surface">
                  Vishwa Vaidika Sanatan
                </span>
                <span className="font-label-monument text-[11px] leading-tight tracking-[0.18em] uppercase font-semibold text-gold">
                  Hindu Temple Heritage Private Limited
                </span>
              </div>
            </div>
            <p className="font-title-editorial italic text-headline-sm text-sandstone-surface pt-1">
              Preserving Sacred Heritage Through Timeless Architecture
            </p>
            <p className="font-body-sm text-body-sm text-stone-hairline max-w-md leading-relaxed">
              Pioneering the renaissance of monumental Shilpa Shastra stone craftsmanship, Dravidian
              and Nagara sanctuaries, and consecrated stone restoration worldwide.
            </p>
            
            {/* Verified Address & Contact Coordinates */}
            <div className="flex flex-col space-y-2 pt-2 text-stone-hairline font-label-ui text-body-sm">
              <div className="flex items-start gap-2 text-sandstone-surface">
                <span className="material-symbols-outlined text-gold text-[18px] shrink-0 mt-0.5">location_on</span>
                <span className="leading-snug">{ADDRESS_PUNE}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-[13px]">
                <a href={PHONE_HREF} className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-gold text-[16px]">call</span>
                  <span>Primary: {PHONE}</span>
                </a>
                <a href={PHONE_SECONDARY_HREF} className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-gold text-[16px]">phone_enabled</span>
                  <span>Secondary: {PHONE_SECONDARY}</span>
                </a>
              </div>
              <div className="pt-0.5">
                <a href={EMAIL_HREF} className="hover:text-gold transition-colors flex items-center gap-1.5 text-[13px]">
                  <span className="material-symbols-outlined text-gold text-[16px]">mail</span>
                  <span>{EMAIL}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="font-label-monument text-label-monument uppercase tracking-[0.16em] text-gold pb-1 border-b border-gold/20">
              Core Pillars
            </span>
            <ul className="flex flex-col space-y-2.5 font-label-ui text-body-sm text-sandstone-surface/90">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-4xl bg-gold"></span>
                <Link to="/" className="hover:text-secondary-fixed transition-colors">
                  Home Overview
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-4xl bg-gold"></span>
                <Link to="/about" className="hover:text-secondary-fixed transition-colors">
                  About Us & Lineage
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-4xl bg-gold"></span>
                <Link to="/services" className="hover:text-secondary-fixed transition-colors">
                  Sanctuary Services
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-4xl bg-gold"></span>
                <Link to="/projects" className="hover:text-secondary-fixed transition-colors">
                  Monumental Projects
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-4xl bg-gold"></span>
                <Link to="/temple-anatomy" className="hover:text-secondary-fixed transition-colors">
                  Temple Anatomy Explorer
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-4xl bg-gold"></span>
                <Link to="/leadership" className="hover:text-secondary-fixed transition-colors">
                  Sthapati Leadership
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-4xl bg-gold"></span>
                <Link to="/contact" className="hover:text-secondary-fixed transition-colors">
                  Patron Liaison & Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <span className="font-label-monument text-label-monument uppercase tracking-[0.16em] text-gold pb-1 border-b border-gold/20">
              Monograph & Governance
            </span>
            <p className="font-body-sm text-body-sm text-stone-hairline leading-relaxed">
              Registered Under the Companies Act, Ministry of Corporate Affairs, Government of
              India. Accredited for Sacred Monumental Architecture, Structural Vastu Engineering,
              and Archaeological Stone Preservation.
            </p>
            <div className="pt-2">
              <div className="p-3.5 bg-on-surface border border-stone-hairline/30 rounded-lg flex items-start gap-3">
                <span className="material-symbols-outlined text-gold text-[22px]">verified</span>
                <div>
                  <div className="font-label-monument text-[11px] uppercase tracking-wider text-sandstone-surface font-semibold">
                    Sanatan Architectural Trust Verified
                  </div>
                  <div className="font-body-sm text-[12px] text-stone-hairline">
                    Certified Shilpa Shastra Compliance & 1000-Year Structural Longevity Standards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-[13px] text-stone-hairline">
          <p>© {new Date().getFullYear()} Vishwa Vaidika Sanatan Hindu Temple Heritage Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-sandstone-surface cursor-pointer transition-colors">
              Architectural Ethics
            </span>
            <span className="hover:text-sandstone-surface cursor-pointer transition-colors">
              Vedic Vastu Guild
            </span>
            <span className="hover:text-sandstone-surface cursor-pointer transition-colors">
              Patron Governance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

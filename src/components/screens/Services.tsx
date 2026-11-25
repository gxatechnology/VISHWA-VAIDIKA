import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { IMG } from "@/components/site/images";
import {
  SERVICE_CATEGORIES,
  ALL_SERVICES,
  getServicesByCategory,
  type ServiceCategory,
  type ServiceItem,
} from "@/data/services-data";
import { PHONE, PHONE_HREF, PHONE_SECONDARY, PHONE_SECONDARY_HREF, EMAIL, EMAIL_HREF, ADDRESS_PUNE } from "@/components/site/nav-links";

export function ServicesScreen() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories = activeTab === "all"
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        {/* ========================================================= */}
        {/* HERO SECTION: Broad Capabilities & Shastric Rigor       */}
        {/* ========================================================= */}
        <section className="relative w-full bg-surface-container-low px-gutter py-space-xl overflow-hidden border-b border-gold/30">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-surface rounded-4xl shadow-xs border border-gold/20">
                <span className="w-2 h-2 rounded-4xl bg-secondary"></span>
                <span className="font-label-monument text-label-monument text-primary uppercase font-bold tracking-wider">
                  Official Client Portfolio & Master Capabilities
                </span>
                <span className="text-stone-hairline text-body-sm">•</span>
                <span className="font-label-ui text-label-ui text-on-surface-variant font-medium">
                  6 Sections • 42 Services
                </span>
              </div>
              <div className="hidden md:flex items-center gap-6 font-label-monument text-label-monument text-stone-hairline uppercase tracking-widest text-[11px]">
                <span>Vedic Shilpa Canon</span>
                <span>•</span>
                <span>Civil & Stone Infrastructure</span>
                <span>•</span>
                <span>Pune Directorate</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-0.5 w-12 bg-secondary"></span>
                  <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary font-bold">
                    Comprehensive Architectural & Engineering Scope
                  </span>
                </div>
                <h1 className="font-display-hero text-display-hero text-primary tracking-tight">
                  Our Complete Services
                </h1>
                <p className="font-title-editorial text-headline-sm text-on-surface-variant italic font-normal">
                  From Sacred Temple Sanctuaries to Heavy Civil Construction, Artisanal Stonework & Civic Infrastructure.
                </p>
              </div>

              <div className="lg:col-span-4 bg-surface p-6 rounded-xl border border-gold/20 shadow-xs flex flex-col justify-between">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  Conforming to classical Shilpa Shastras and modern structural engineering,{" "}
                  <strong className="text-primary font-semibold">Vishwa Vaidika Sanatan Hindu Temple Heritage Private Limited</strong>{" "}
                  delivers 42 specialized disciplines across six core corporate sections.
                </p>
                <div className="pt-4 mt-4 border-t border-stone-hairline/20 flex items-center justify-between font-label-ui text-label-ui text-secondary">
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    1,000-Year Structural Integrity
                  </span>
                  <Link to="/contact" className="hover:text-primary font-semibold underline underline-offset-4">
                    Inquire Now →
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`p-4 rounded-lg text-left transition-all border ${
                    activeTab === cat.id
                      ? "bg-primary text-on-primary border-gold shadow-md"
                      : "bg-surface hover:bg-surface-container border-stone-hairline/20 text-on-surface"
                  }`}
                >
                  <div className="flex items-center justify-between pb-2">
                    <span className="material-symbols-outlined text-[22px]">{cat.icon}</span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${activeTab === cat.id ? "bg-saffron text-white" : "bg-surface-container-high text-primary"}`}>
                      {cat.count} Services
                    </span>
                  </div>
                  <div className="font-title-editorial text-[14px] font-bold leading-snug line-clamp-1">
                    {cat.shortTitle}
                  </div>
                  <div className={`text-[10px] uppercase tracking-wider font-semibold pt-1 ${activeTab === cat.id ? "text-gold" : "text-on-surface-variant"}`}>
                    Section {cat.code}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* STICKY DISCIPLINE FILTER TABS                             */}
        {/* ========================================================= */}
        <nav
          aria-label="Service Category Filters"
          className="w-full bg-surface/95 backdrop-blur-md py-4 px-gutter sticky top-20 z-40 border-b border-gold/25 shadow-xs"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`filter-pill px-4 py-2 rounded-4xl font-label-ui text-label-ui font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === "all"
                    ? "bg-primary text-on-primary shadow-sm border border-gold"
                    : "bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-container-highest"
                }`}
                data-category="all"
              >
                <span>All Services</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeTab === "all" ? "bg-saffron text-white" : "bg-surface text-primary"}`}>
                  42
                </span>
              </button>

              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`filter-pill px-3.5 py-2 rounded-4xl font-label-ui text-label-ui font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === cat.id
                      ? "bg-primary text-on-primary shadow-sm border border-gold"
                      : "bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-container-highest"
                  }`}
                  data-category={cat.id}
                >
                  <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
                  <span>{cat.shortTitle}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeTab === cat.id ? "bg-saffron text-white" : "bg-surface text-primary"}`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2 text-primary font-label-monument text-[11px] uppercase tracking-widest shrink-0">
              <span className="w-2 h-2 rounded-full bg-saffron animate-pulse"></span>
              <span>All 42 Official Client-Approved Services</span>
            </div>
          </div>
        </nav>

        {/* ========================================================= */}
        {/* FLAGSHIP HERO SPOTLIGHT: CATEGORY A (TEMPLE CONSTRUCTION)  */}
        {/* ========================================================= */}
        {activeTab === "all" && (
          <section className="w-full px-gutter py-space-lg bg-surface">
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-charcoal-monolith via-primary-container to-charcoal-monolith text-ivory rounded-2xl overflow-hidden shadow-xl border border-gold/30">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12">
                <div className="lg:col-span-7 flex flex-col space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 rounded-full w-fit border border-gold/40 text-gold font-label-monument text-[10px] uppercase tracking-widest font-bold">
                    <span className="material-symbols-outlined text-[16px]">stars</span>
                    Primary Flagship Heritage Discipline
                  </div>
                  <h2 className="font-display-hero text-headline-lg lg:text-display-hero text-ivory leading-tight">
                    Complete Temple Construction & Sacred Architecture
                  </h2>
                  <p className="font-body-md text-body-md text-sandstone-surface/90 leading-relaxed max-w-xl">
                    Our master Sompuras, Sthapatis, and civil structural engineers deliver monumental stone mandirs rooted in the sacred canons of Shilpa Shastra, Manasara, and Vastu Vidya — from ground plinth to Shikhara Kalash.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      to="/services/temple-construction"
                      className="px-6 py-3 bg-saffron text-on-primary font-label-ui text-label-ui uppercase tracking-wider font-bold rounded-lg border border-gold hover:bg-on-tertiary-fixed-variant transition-all shadow-md flex items-center gap-2"
                    >
                      <span>Explore Turnkey Temple Monograph</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="px-5 py-3 bg-white/10 text-ivory font-label-ui text-label-ui uppercase tracking-wider font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
                    >
                      Confer with Chief Sompura
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-5 relative h-72 lg:h-96 rounded-xl overflow-hidden shadow-inner border border-gold/20">
                  <img
                    alt="Authentic Red Sandstone Temple Sanctuary"
                    className="w-full h-full object-cover"
                    src={IMG.redSandstoneTemple}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-left">
                      <span className="text-gold font-label-monument text-[10px] uppercase tracking-widest font-bold block">
                        Exemplar Architectural Commission
                      </span>
                      <span className="text-ivory font-title-editorial text-[16px] font-bold">
                        Nagara Shikhara & Pillared Mandapa Realization
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* COMPREHENSIVE SERVICE MONOGRAPH SECTIONS (ALL 42 SERVICES) */}
        {/* ========================================================= */}
        <section className="w-full px-gutter py-space-xl bg-surface">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            {filteredCategories.map((cat) => {
              const services = getServicesByCategory(cat.id);
              return (
                <div key={cat.id} id={`category-${cat.id.toLowerCase()}`} className="flex flex-col gap-8 scroll-mt-36">
                  {/* Category Header */}
                  <div className="p-6 md:p-8 rounded-xl bg-surface-container-low border-l-4 border-l-secondary border border-stone-hairline/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex flex-col space-y-2 max-w-3xl">
                      <div className="flex items-center gap-2 text-secondary font-label-monument text-label-monument uppercase tracking-widest font-bold">
                        <span className="material-symbols-outlined text-[20px]">{cat.icon}</span>
                        <span>SECTION {cat.code} • {cat.badge}</span>
                      </div>
                      <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                        {cat.code}. {cat.title}
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {cat.overview}
                      </p>
                    </div>
                    <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between gap-2 border-t md:border-t-0 md:border-l border-stone-hairline/30 pt-4 md:pt-0 md:pl-6">
                      <span className="font-display-hero text-[36px] font-bold text-primary leading-none">
                        {cat.count}
                      </span>
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-on-surface-variant text-right">
                        Official Services
                      </span>
                    </div>
                  </div>

                  {/* Service Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                      <article
                        key={service.id}
                        data-category={cat.id}
                        className="service-card bg-card-elevated rounded-xl border border-stone-hairline/25 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-gold/50"
                      >
                        {/* Image Banner if available, or icon header */}
                        {service.image ? (
                          <div className="relative h-48 w-full overflow-hidden bg-charcoal-monolith">
                            <img
                              alt={service.name}
                              src={service.image}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-3 left-3 bg-primary-container/90 backdrop-blur-xs text-white px-2.5 py-0.5 rounded text-[10px] font-label-monument uppercase tracking-wider font-semibold">
                              {service.disciplineTag}
                            </div>
                            <div className="absolute bottom-2 right-2 bg-charcoal-monolith/80 text-gold px-2 py-0.5 rounded text-[9px] font-label-monument uppercase tracking-wider">
                              #{idx + 1}
                            </div>
                          </div>
                        ) : (
                          <div className="p-5 pb-0 flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary border border-gold/20 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                              <span className="material-symbols-outlined text-[22px]">{service.icon}</span>
                            </div>
                            <span className="text-[10px] font-label-monument uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                              {service.disciplineTag}
                            </span>
                          </div>
                        )}

                        <div className="p-6 flex flex-col flex-1 justify-between">
                          <div className="space-y-3">
                            <h3 className="font-headline-sm text-[20px] text-primary group-hover:text-saffron transition-colors leading-snug">
                              {service.name}
                            </h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                              {service.shortDescription}
                            </p>

                            {/* Scope Highlights */}
                            <div className="pt-2">
                              <span className="font-label-monument text-[9.5px] uppercase tracking-wider text-secondary font-semibold block mb-1.5">
                                Technical Scope & Criteria:
                              </span>
                              <ul className="space-y-1 font-body-sm text-[12.5px] text-on-surface">
                                {service.scopeHighlights.map((highlight, hIdx) => (
                                  <li key={hIdx} className="flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-gold shrink-0"></span>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="pt-6 mt-4 border-t border-stone-hairline/20 flex items-center justify-between">
                            <Link
                              to="/contact"
                              className="font-label-ui text-[12px] font-bold text-primary group-hover:text-saffron uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
                            >
                              <span>Consult on this Service</span>
                              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            </Link>
                            <span className="text-[10px] font-label-monument uppercase tracking-widest text-stone-hairline font-semibold">
                              {cat.code}-0{idx + 1}
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* CANONICAL PROCESS OVERVIEW                                */}
        {/* ========================================================= */}
        <section className="w-full bg-surface-container-lowest py-space-xl px-gutter border-t border-stone-hairline/20">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
            <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
              <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary font-bold">
                Shilpa Shastra Protocol
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Canonical Realization Methodology
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every project, whether a grand community temple or monumental stone civil structure, adheres to unbroken traditional discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4">
              {[
                { step: "01", title: "Canonical Planning", desc: "Vastu Purusha Mandala orientation, micro-level proportioning, and geological soil evaluation." },
                { step: "02", title: "Quarry Extraction", desc: "Ultrasonic testing of certified Bansi Paharpur sandstone, Makrana marble, and black granite blocks." },
                { step: "03", title: "Hand Artisanship", desc: "Generational Sompura chiseling, high-relief frieze carving, and rigorous dry-interlocking test assembly." },
                { step: "04", title: "Dry Interlocking", desc: "Mortar-free mortise-and-tenon structural erection ensuring seismic flexibility and millennial longevity." },
                { step: "05", title: "Consecration", desc: "Prana Pratishtha staging, Kumbhabhishekam liturgy alignment, and final ceremonial handover." },
              ].map((item) => (
                <div key={item.step} className="p-5 rounded-lg bg-surface border border-gold/20 flex flex-col justify-between">
                  <div>
                    <span className="font-label-monument text-[18px] font-bold text-secondary block mb-2">
                      {item.step}
                    </span>
                    <h3 className="font-title-editorial text-[16px] font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-[12.5px] text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CONSULTATION CONTACT CTA BANNER                           */}
        {/* ========================================================= */}
        <section className="w-full bg-primary text-on-primary py-space-xl px-gutter relative overflow-hidden">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 relative z-10">
            <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary-fixed font-bold">
              Initiate Architectural Consultation
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white max-w-2xl">
              Commission a Sacred Landmark or Monumental Civil Project
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed max-w-xl">
              Confer directly with our Chief Sthapati and structural engineering council in Pune or request an on-site masterplan appraisal.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={PHONE_HREF}
                className="px-6 py-3.5 bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim rounded-lg font-label-monument text-label-monument uppercase tracking-wider font-bold transition-all flex items-center gap-2 shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call Primary: {PHONE}</span>
              </a>
              <a
                href={PHONE_SECONDARY_HREF}
                className="px-6 py-3.5 bg-primary-container text-white hover:bg-primary-fixed-dim hover:text-on-primary-fixed rounded-lg font-label-monument text-label-monument uppercase tracking-wider font-bold transition-all flex items-center gap-2 border border-gold/40 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">phone_enabled</span>
                <span>Call Secondary: {PHONE_SECONDARY}</span>
              </a>
              <a
                href={EMAIL_HREF}
                className="px-6 py-3.5 bg-white/10 text-white hover:bg-white/20 rounded-lg font-label-monument text-label-monument uppercase tracking-wider font-semibold transition-all flex items-center gap-2 border border-white/20"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>Email: {EMAIL}</span>
              </a>
            </div>

            <div className="pt-4 text-primary-fixed font-label-ui text-body-sm flex items-center gap-2 justify-center">
              <span className="material-symbols-outlined text-gold text-[18px]">location_on</span>
              <span>{ADDRESS_PUNE}</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

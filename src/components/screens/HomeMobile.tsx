import { Link } from "@tanstack/react-router";
import { IMG } from "@/components/site/images";

/* Generated from the Stitch design export (screen 02). */
export function HomeMobileScreen() {
  return (
    <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface grow">
      <div className="flex flex-col w-full text-on-surface">
        {" "}
        <section className="relative w-full overflow-hidden bg-charcoal-monolith text-inverse-on-surface">
          {" "}
          <div
            className="bg-cover bg-center w-full min-h-[440px] relative flex flex-col justify-end p-margin-mobile"
            data-alt="A grand towering Dravidian and Nagara stone temple shikhara against an ethereal dawn sky with warm morning sunbeams, hand-carved intricate sandstone relief sculptures, sacred monumental Hindu sanctuary architecture, editorial architectural monograph lighting in rich warm ivory and ochre sandstone."
            style={{ backgroundImage: `url(${IMG.heroShikhara})` }}
          >
            {" "}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith via-charcoal-monolith/65 to-charcoal-monolith/20"></div>{" "}
            <div className="relative z-10 flex flex-col gap-space-sm pt-space-lg">
              {" "}
              <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 bg-surface/10 backdrop-blur-md rounded-4xl">
                {" "}
                <span className="w-1.5 h-1.5 rounded-4xl bg-secondary-container"></span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary-container">
                  Temple Construction & Sacred Architecture
                </span>{" "}
              </div>{" "}
              <h1 className="font-display-hero-mobile text-display-hero-mobile text-surface-container-lowest leading-tight tracking-tight">
                {" "}
                Building Sacred Landmarks. Preserving Timeless Heritage.{" "}
              </h1>{" "}
              <p className="font-body-md text-body-md text-surface-container-high font-light max-w-sm">
                {" "}
                Architectural planning, master stone craftsmanship, and traditional temple execution
                across India.{" "}
              </p>{" "}
              <div className="flex flex-col gap-space-xs pt-space-xs">
                {" "}
                <Link
                  to="/services"
                  className="w-full py-3.5 px-space-md bg-secondary-container text-on-secondary-container font-label-ui text-label-ui uppercase tracking-widest font-semibold rounded-lg flex items-center justify-center gap-space-xs shadow-md active:scale-[0.99] transition-transform"
                >
                  {" "}
                  <span>Explore Our Expertise</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>{" "}
                </Link>{" "}
                <Link
                  to="/contact"
                  className="w-full py-3.5 px-space-md bg-surface/10 backdrop-blur-xs text-surface-bright font-label-ui text-label-ui uppercase tracking-widest font-semibold rounded-lg flex items-center justify-center gap-space-xs hover:bg-surface/20 active:scale-[0.99] transition-all"
                >
                  {" "}
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                    edit_calendar
                  </span>{" "}
                  <span>Discuss Your Project</span>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full px-margin-mobile py-space-lg bg-surface flex flex-col items-center text-center">
          {" "}
          <div className="relative w-28 h-auto mb-space-sm bg-surface-container/60 rounded-xl flex items-center justify-center p-2 border border-gold/20">
            <img
              alt="Ornate Vishwa Vaidika Temple Crest"
              className="w-full h-auto max-h-16 object-contain"
              src={IMG.crest}
            />
          </div>{" "}
          <span className="font-label-monument text-label-monument uppercase tracking-widest text-primary font-semibold">
            Vishwa Vaidika Sanatan
          </span>{" "}
          <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">
            Conforming to Shilpa Shastras
          </h2>{" "}
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-space-xs leading-relaxed">
            {" "}
            Harmonizing Vastu Purusha Mandala geometry with contemporary structural engineering to
            construct monumental sanctuaries that endure for centuries.{" "}
          </p>{" "}
          <div className="w-full flex items-center justify-center gap-space-sm mt-space-md opacity-60">
            {" "}
            <div className="h-[1px] w-16 bg-stone-hairline"></div>{" "}
            <div className="w-1.5 h-1.5 rotate-45 bg-secondary"></div>{" "}
            <div className="h-[1px] w-16 bg-stone-hairline"></div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full px-margin-mobile pb-space-lg">
          {" "}
          <div className="grid grid-cols-2 gap-space-sm">
            {" "}
            <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-xs">
              {" "}
              <div className="flex items-center justify-between text-secondary">
                {" "}
                <span className="material-symbols-outlined text-[24px]">history_edu</span>{" "}
                <span className="font-label-monument text-label-monument text-primary uppercase font-bold">
                  Legacy
                </span>{" "}
              </div>{" "}
              <div className="mt-space-sm">
                {" "}
                <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold block leading-none">
                  20+
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface font-medium mt-1 block">
                  Years of Dedication
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-xs">
              {" "}
              <div className="flex items-center justify-between text-secondary">
                {" "}
                <span className="material-symbols-outlined text-[24px]">temple_hindu</span>{" "}
                <span className="font-label-monument text-label-monument text-primary uppercase font-bold">
                  Sanctuaries
                </span>{" "}
              </div>{" "}
              <div className="mt-space-sm">
                {" "}
                <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold block leading-none">
                  36+
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface font-medium mt-1 block">
                  Sacred Temples
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-xs">
              {" "}
              <div className="flex items-center justify-between text-secondary">
                {" "}
                <span className="material-symbols-outlined text-[24px]">map</span>{" "}
                <span className="font-label-monument text-label-monument text-primary uppercase font-bold">
                  Reach
                </span>{" "}
              </div>{" "}
              <div className="mt-space-sm">
                {" "}
                <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold block leading-none">
                  10+
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface font-medium mt-1 block">
                  States Covered
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-xs">
              {" "}
              <div className="flex items-center justify-between text-secondary">
                {" "}
                <span className="material-symbols-outlined text-[24px]">handyman</span>{" "}
                <span className="font-label-monument text-label-monument text-primary uppercase font-bold">
                  Craftsmen
                </span>{" "}
              </div>{" "}
              <div className="mt-space-sm">
                {" "}
                <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold block leading-none">
                  350+
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface font-medium mt-1 block">
                  Master Artisans
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full px-margin-mobile py-space-md bg-surface-container flex flex-col gap-space-md">
          {" "}
          <div className="flex flex-col">
            {" "}
            <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary font-semibold">
              Specialized Disciplines
            </span>{" "}
            <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
              Our Master Craftsmanship
            </h2>{" "}
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              End-to-end realization conforming to canonical Agama treatises.
            </p>{" "}
          </div>{" "}
          <div className="bg-card-elevated rounded-xl overflow-hidden shadow-xs flex flex-col">
            {" "}
            <div
              className="bg-cover bg-center w-full h-44 relative"
              data-alt="Massive sandstone Hindu temple sanctum sanctorum under active traditional construction with master stonemasons chiseling interlocking granite plinths, warm amber sunlight illuminating traditional Vedic architectural frameworks, ultra sharp fine art monograph photography."
              style={{ backgroundImage: `url(${IMG.constructionSite})` }}
            >
              {" "}
              <div className="absolute top-space-xs right-space-xs px-2.5 py-1 bg-charcoal-monolith/80 backdrop-blur-xs rounded-xs text-secondary-fixed font-label-monument text-label-monument uppercase tracking-wider">
                {" "}
                01 / Comprehensive{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-space-md flex flex-col gap-space-xs">
              {" "}
              <h3 className="font-title-editorial text-title-editorial text-primary font-semibold">
                Complete Temple Construction
              </h3>{" "}
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Turnkey design and structural execution from foundation Bhumi Puja to
                Kumbhabhishekam consecration.
              </p>{" "}
              <div className="flex items-center justify-between pt-space-xs">
                {" "}
                <span className="font-label-monument text-label-monument uppercase text-secondary font-bold">
                  Nagara • Dravidian • Vesara
                </span>{" "}
                <Link
                  to="/services"
                  className="w-8 h-8 rounded-4xl bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
                >
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-card-elevated rounded-xl overflow-hidden shadow-xs flex flex-col">
            {" "}
            <div
              className="bg-cover bg-center w-full h-44 relative"
              data-alt="Intricate geometric sacred Vastu Purusha Mandala architectural floor plan drafting on parchment, with antique brass compasses and precision measuring tools, architectural design studio setting with soft side lighting, authentic sacred geometry."
              style={{ backgroundImage: `url(${IMG.vastuBlueprint})` }}
            >
              {" "}
              <div className="absolute top-space-xs right-space-xs px-2.5 py-1 bg-charcoal-monolith/80 backdrop-blur-xs rounded-xs text-secondary-fixed font-label-monument text-label-monument uppercase tracking-wider">
                {" "}
                02 / Vedic Design{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-space-md flex flex-col gap-space-xs">
              {" "}
              <h3 className="font-title-editorial text-title-editorial text-primary font-semibold">
                Architectural Planning & Vastu
              </h3>{" "}
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Rigorous Mandala orientation, canonical dimension ratios (Ayadi calculations), and
                regulatory engineering blueprints.
              </p>{" "}
              <div className="flex items-center justify-between pt-space-xs">
                {" "}
                <span className="font-label-monument text-label-monument uppercase text-secondary font-bold">
                  Ayadi Shadvarga • 3D BIM
                </span>{" "}
                <Link
                  to="/services"
                  className="w-8 h-8 rounded-4xl bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
                >
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-card-elevated rounded-xl overflow-hidden shadow-xs flex flex-col">
            {" "}
            <div
              className="bg-cover bg-center w-full h-44 relative"
              data-alt="Elderly Indian master sthapati artisan delicately carving an exquisite monolithic black granite Murti deity face with traditional hand hammer and fine steel chisel, airborne stone dust illuminated by warm golden workshop sunlight."
              style={{ backgroundImage: `url(${IMG.sculptorGranite})` }}
            >
              {" "}
              <div className="absolute top-space-xs right-space-xs px-2.5 py-1 bg-charcoal-monolith/80 backdrop-blur-xs rounded-xs text-secondary-fixed font-label-monument text-label-monument uppercase tracking-wider">
                {" "}
                03 / Sculptural Art{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-space-md flex flex-col gap-space-xs">
              {" "}
              <h3 className="font-title-editorial text-title-editorial text-primary font-semibold">
                Traditional Stone Carving & Murti
              </h3>{" "}
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Handcrafted sanctum pillars, ornamental toranas, and sacred iconographic deities in
                pristine granite, marble, and sandstone.
              </p>{" "}
              <div className="flex items-center justify-between pt-space-xs">
                {" "}
                <span className="font-label-monument text-label-monument uppercase text-secondary font-bold">
                  Krishna Shila • Makrana • Jaisalmer
                </span>{" "}
                <Link
                  to="/services"
                  className="w-8 h-8 rounded-4xl bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
                >
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-card-elevated rounded-xl overflow-hidden shadow-xs flex flex-col">
            {" "}
            <div
              className="bg-cover bg-center w-full h-44 relative"
              data-alt="Historic ancient Hindu temple stone wall undergoing meticulous conservation and restoration by heritage experts, gentle lime mortar consolidation, weathered antique patina preserved alongside pristine newly hewn structural reinforcement."
              style={{ backgroundImage: `url(${IMG.restoration})` }}
            >
              {" "}
              <div className="absolute top-space-xs right-space-xs px-2.5 py-1 bg-charcoal-monolith/80 backdrop-blur-xs rounded-xs text-secondary-fixed font-label-monument text-label-monument uppercase tracking-wider">
                {" "}
                04 / Conservation{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-space-md flex flex-col gap-space-xs">
              {" "}
              <h3 className="font-title-editorial text-title-editorial text-primary font-semibold">
                Heritage Restoration & Preservation
              </h3>{" "}
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Scientific stone consolidation, anastylosis reassembly, and structural
                rehabilitation for centuries-old sacred monuments.
              </p>{" "}
              <div className="flex items-center justify-between pt-space-xs">
                {" "}
                <span className="font-label-monument text-label-monument uppercase text-secondary font-bold">
                  ASI Norms • Non-Destructive Testing
                </span>{" "}
                <Link
                  to="/services"
                  className="w-8 h-8 rounded-4xl bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
                >
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full px-margin-mobile py-space-md bg-surface flex flex-col gap-space-md" id="craft-heritage">
          {" "}
          <div className="flex flex-col">
            {" "}
            <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary font-semibold">
              Our Craft. Our Heritage.
            </span>{" "}
            <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
              Shilpa Shastra Craftsmanship
            </h2>{" "}
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
              From sacred temple structures to intricate stone detailing, explore the artistry and materials behind timeless craftsmanship.
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 gap-space-sm">
            {/* 1. Red Sandstone Temple */}
            <Link
              to="/services/temple-construction"
              className="bg-card-elevated rounded-xl overflow-hidden shadow-xs flex flex-col group"
            >
              <div
                className="bg-cover bg-center w-full h-36 relative"
                data-alt="Red Sandstone Temple Sanctuary"
                style={{ backgroundImage: `url(${IMG.redSandstoneTemple})` }}
              >
                <div className="absolute top-1 right-1 px-2 py-0.5 bg-charcoal-monolith/80 rounded-xs text-saffron font-label-monument text-[9px] uppercase">
                  Temple
                </div>
              </div>
              <div className="p-2.5">
                <h4 className="font-title-editorial text-[13px] font-semibold text-primary group-hover:text-saffron transition-colors">
                  Red Sandstone Sanctuary
                </h4>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 line-clamp-1">
                  Nagara shikhara & pillars
                </p>
              </div>
            </Link>

            {/* 2. Monumental Temple Gateway */}
            <Link
              to="/projects"
              className="bg-card-elevated rounded-xl overflow-hidden shadow-xs flex flex-col group"
            >
              <div
                className="bg-cover bg-center w-full h-36 relative"
                data-alt="Monumental Temple Entrance Gateway"
                style={{ backgroundImage: `url(${IMG.templeEntranceGateway})` }}
              >
                <div className="absolute top-1 right-1 px-2 py-0.5 bg-charcoal-monolith/80 rounded-xs text-secondary-fixed font-label-monument text-[9px] uppercase">
                  Gateway
                </div>
              </div>
              <div className="p-2.5">
                <h4 className="font-title-editorial text-[13px] font-semibold text-primary group-hover:text-saffron transition-colors">
                  Monumental Gateway
                </h4>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 line-clamp-1">
                  Carved archway portal
                </p>
              </div>
            </Link>

            {/* 3. Stone Jali Screen */}
            <Link
              to="/architecture"
              className="bg-card-elevated rounded-xl overflow-hidden shadow-xs flex flex-col group"
            >
              <div
                className="bg-cover bg-center w-full h-36 relative"
                data-alt="Intricate stone jali lattice screen"
                style={{ backgroundImage: `url(${IMG.stoneJaliWork})` }}
              >
                <div className="absolute top-1 right-1 px-2 py-0.5 bg-charcoal-monolith/80 rounded-xs text-secondary-fixed font-label-monument text-[9px] uppercase">
                  Jali
                </div>
              </div>
              <div className="p-2.5">
                <h4 className="font-title-editorial text-[13px] font-semibold text-primary group-hover:text-saffron transition-colors">
                  Perforated Jali Work
                </h4>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 line-clamp-1">
                  Geometric light diffusion
                </p>
              </div>
            </Link>

            {/* 4. Traditional Stone Jharokha */}
            <Link
              to="/architecture"
              className="bg-card-elevated rounded-xl overflow-hidden shadow-xs flex flex-col group"
            >
              <div
                className="bg-cover bg-center w-full h-36 relative"
                data-alt="Traditional carved stone jharokha balcony"
                style={{ backgroundImage: `url(${IMG.traditionalZarokha})` }}
              >
                <div className="absolute top-1 right-1 px-2 py-0.5 bg-charcoal-monolith/80 rounded-xs text-secondary-fixed font-label-monument text-[9px] uppercase">
                  Jharokha
                </div>
              </div>
              <div className="p-2.5">
                <h4 className="font-title-editorial text-[13px] font-semibold text-primary group-hover:text-saffron transition-colors">
                  Classical Jharokha
                </h4>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 line-clamp-1">
                  Corbel balcony projection
                </p>
              </div>
            </Link>

            {/* 5. Deepmal Pillar */}
            <Link
              to="/architecture"
              className="bg-card-elevated rounded-xl overflow-hidden shadow-xs flex flex-col group"
            >
              <div
                className="bg-cover bg-center w-full h-36 relative"
                data-alt="Monolithic deepmal lamp tower"
                style={{ backgroundImage: `url(${IMG.traditionalDeepmal})` }}
              >
                <div className="absolute top-1 right-1 px-2 py-0.5 bg-charcoal-monolith/80 rounded-xs text-secondary-fixed font-label-monument text-[9px] uppercase">
                  Deepmal
                </div>
              </div>
              <div className="p-2.5">
                <h4 className="font-title-editorial text-[13px] font-semibold text-primary group-hover:text-saffron transition-colors">
                  Tiered Deepmal Tower
                </h4>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 line-clamp-1">
                  Monolithic lamp column
                </p>
              </div>
            </Link>

            {/* 6. Relief Wall Panels */}
            <Link
              to="/architecture"
              className="bg-card-elevated rounded-xl overflow-hidden shadow-xs flex flex-col group"
            >
              <div
                className="bg-cover bg-center w-full h-36 relative"
                data-alt="Ornate Relief Wall Carving"
                style={{ backgroundImage: `url(${IMG.ornateStoneWall})` }}
              >
                <div className="absolute top-1 right-1 px-2 py-0.5 bg-charcoal-monolith/80 rounded-xs text-secondary-fixed font-label-monument text-[9px] uppercase">
                  Relief
                </div>
              </div>
              <div className="p-2.5">
                <h4 className="font-title-editorial text-[13px] font-semibold text-primary group-hover:text-saffron transition-colors">
                  Wall Relief Panels
                </h4>
                <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5 line-clamp-1">
                  Continuous floral frieze
                </p>
              </div>
            </Link>
          </div>{" "}
          <div className="pt-2 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 font-label-ui text-[12px] text-secondary font-semibold uppercase tracking-wider"
            >
              <span>Explore All 40 Portfolio Exemplars</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>
        </section>{" "}
        <section className="w-full px-margin-mobile py-space-lg bg-surface">
          {" "}
          <div className="bg-primary text-on-primary rounded-xl p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
            {" "}
            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-4xl bg-on-primary/5 pointer-events-none"></div>{" "}
            <div className="flex items-center gap-space-xs">
              {" "}
              <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                location_on
              </span>{" "}
              <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary-fixed">
                Pune Consultation Peetham
              </span>{" "}
            </div>{" "}
            <h3 className="font-headline-sm text-headline-sm text-on-primary leading-tight">
              {" "}
              Confer with Our Chief Sompura & Sthapati{" "}
            </h3>{" "}
            <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
              {" "}
              Whether commissioning a new community temple complex or restoring an ancestral shrine,
              our senior architectural council provides authoritative Vedic guidance.{" "}
            </p>{" "}
            <div className="pt-space-xs flex flex-col gap-space-xs">
              <a
                className="w-full py-3 px-space-md bg-secondary-container text-on-secondary-container rounded-lg font-label-ui text-label-ui uppercase tracking-wider font-bold flex items-center justify-center gap-space-xs shadow-xs active:scale-[0.99] transition-transform"
                href="tel:+919941121111"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Primary: +91 99411 21111</span>
              </a>
              <a
                className="w-full py-2.5 px-space-md bg-surface/20 text-on-primary rounded-lg font-label-ui text-[12px] uppercase tracking-wider font-semibold flex items-center justify-center gap-space-xs hover:bg-surface/30 transition-colors"
                href="tel:+917517015555"
              >
                <span className="material-symbols-outlined text-[16px]">phone_enabled</span>
                <span>Secondary: +91 75170 15555</span>
              </a>
              <Link
                to="/contact"
                className="w-full py-2.5 px-space-md bg-surface/10 text-on-primary rounded-lg font-label-ui text-[12px] uppercase tracking-wider text-center hover:bg-surface/20 transition-colors"
              >
                Request In-Person Meeting in Pune
              </Link>
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <aside className="sticky bottom-20 z-40 self-end mr-margin-mobile -mt-space-lg mb-space-sm">
          {" "}
          <a
            aria-label="Direct Phone Consultation"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-charcoal-monolith text-on-tertiary rounded-4xl shadow-xl active:scale-95 transition-transform hover:bg-primary"
            href="tel:+919941121111"
          >
            <div className="w-6 h-6 rounded-4xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                call
              </span>
            </div>
            <div className="flex flex-col text-left pr-1">
              <span className="font-label-monument text-[9px] uppercase tracking-widest text-secondary-fixed leading-none">
                Direct
              </span>
              <span className="font-label-ui text-[12px] font-semibold text-surface-bright leading-tight">
                Call Sthapati
              </span>
            </div>
          </a>{" "}
        </aside>{" "}
      </div>{" "}
      <footer className="w-full bg-charcoal-monolith text-inverse-on-surface mt-space-xl p-gutter-mobile flex flex-col gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary-fixed">
            Architectural Headquarters
          </span>
          <p className="font-body-sm text-body-sm text-surface-container-highest">
            Destination Center 2, Nanded City, Sinhagad Road, Pune – 411068, Maharashtra, India.
          </p>
        </div>
        <div className="flex items-center justify-between pt-space-sm">
          <div className="flex gap-space-md font-label-ui text-label-ui">
            <Link
              to="/projects"
              className="text-surface-container-highest hover:text-card-elevated"
            >
              Projects
            </Link>
            <Link to="/process" className="text-surface-container-highest hover:text-card-elevated">
              Capabilities
            </Link>
            <Link to="/contact" className="text-surface-container-highest hover:text-card-elevated">
              Contact
            </Link>
          </div>
          <a
            className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-highest/10 rounded-lg text-secondary-fixed text-label-monument font-label-monument uppercase tracking-wider"
            href="tel:+919941121111"
          >
            <span className="material-symbols-outlined text-[16px]">call</span>Call Sthapati
          </a>
        </div>
        <p className="font-label-monument text-label-monument text-stone-hairline uppercase pt-space-xs">
          © {new Date().getFullYear()} Vishwa Vaidika Sanatan Hindu Temple Heritage Private Limited. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

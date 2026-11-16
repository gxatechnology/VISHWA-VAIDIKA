import { Link } from "@tanstack/react-router";
import { IMG } from "@/components/site/images";
import { useScreenScript } from "@/components/site/use-screen-script";
import { setup } from "./scripts/TempleConstruction";
import { CraftsmanshipGallery } from "@/components/portfolio/CraftsmanshipGallery";

/* Generated from the Stitch design export (screen 07). */
export function TempleConstructionScreen() {
  const S = useScreenScript(setup);
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        {" "}
        <section className="w-full bg-surface-container-low px-margin-tablet lg:px-margin py-4">
          {" "}
          <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-body-sm text-on-surface-variant font-label-ui">
            {" "}
            <nav className="flex items-center gap-2 text-label-ui uppercase tracking-wider">
              {" "}
              <Link to="/services" className="hover:text-primary transition-colors">
                Services
              </Link>{" "}
              <span className="material-symbols-outlined text-[14px] text-secondary">
                chevron_right
              </span>{" "}
              <Link to="/services" className="hover:text-primary transition-colors">
                Turnkey Construction
              </Link>{" "}
              <span className="material-symbols-outlined text-[14px] text-secondary">
                chevron_right
              </span>{" "}
              <span className="text-primary font-semibold">Complete Temple Construction</span>{" "}
            </nav>{" "}
            <div className="flex items-center gap-4 text-[12px] text-stone-hairline uppercase tracking-widest font-label-monument">
              {" "}
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-4xl bg-secondary"></span>Vaidika Cadre:
                Canonical Turnkey
              </span>{" "}
              <span className="hidden sm:inline text-outline-variant">|</span>{" "}
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-secondary">
                  verified_user
                </span>
                Shilpa Shastra Grade A
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="relative w-full overflow-hidden bg-charcoal-monolith text-on-primary">
          {" "}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
            data-alt="Epic cinematic documentary architectural photograph of an active grand Nagara Hindu temple construction site at dawn. Colossal hand-carved pink sandstone blocks are lifted with precision cranes amidst structural bamboo and steel scaffolding. Skilled master artisans in traditional garb inspect hand-chiseled lotus cornices. Warm golden sunlight pierces morning mist, illuminating intricate Vedic stone carvings with rich sandstone beige, heritage maroon, and antique gold hues."
            style={{ backgroundImage: `url(${IMG.stoneHoisting})` }}
          ></div>{" "}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith via-charcoal-monolith/80 to-transparent"></div>{" "}
          <div className="relative max-w-[1320px] mx-auto px-margin-tablet lg:px-margin pt-20 pb-24 flex flex-col justify-end min-h-[580px]">
            {" "}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {" "}
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/80 backdrop-blur-md rounded-lg text-primary-fixed font-label-monument text-label-monument uppercase tracking-[0.16em]">
                {" "}
                <span className="w-1.5 h-1.5 rounded-4xl bg-secondary-fixed animate-pulse"></span>{" "}
                Monolithic Turnkey Realization{" "}
              </span>{" "}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-highest/20 backdrop-blur-md rounded-lg text-sandstone-surface font-label-monument text-label-monument uppercase tracking-[0.14em]">
                {" "}
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                  hourglass_bottom
                </span>{" "}
                1,000-Year Structural Longevity{" "}
              </span>{" "}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-highest/20 backdrop-blur-md rounded-lg text-sandstone-surface font-label-monument text-label-monument uppercase tracking-[0.14em]">
                {" "}
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                  shield
                </span>{" "}
                Zone-V Seismic Resistance{" "}
              </span>{" "}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-highest/20 backdrop-blur-md rounded-lg text-sandstone-surface font-label-monument text-label-monument uppercase tracking-[0.14em]">
                {" "}
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                  layers
                </span>{" "}
                100% Non-RCC Pure Stone Core{" "}
              </span>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              {" "}
              <div className="lg:col-span-8 flex flex-col space-y-4">
                {" "}
                <p className="font-title-editorial text-title-editorial italic text-secondary-fixed tracking-wide">
                  Pavitra Shilpa Sthapatya Parampara
                </p>{" "}
                <h1 className="font-display-hero text-display-hero leading-tight text-surface-container-lowest font-normal">
                  {" "}
                  From Sacred Vision to Architectural Reality.{" "}
                </h1>{" "}
                <p className="font-body-lg text-body-lg text-sandstone-surface max-w-2xl leading-relaxed pt-2">
                  {" "}
                  Comprehensive turnkey monumental temple realization—harmonizing ancient Shilpa
                  Shastra canons with modern finite-element structural engineering, thousand-year
                  dry-joint interlocking, and consecrated Vedic handover.{" "}
                </p>{" "}
              </div>{" "}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
                {" "}
                <a
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-tertiary-container hover:bg-tertiary text-on-primary font-label-ui text-label-ui uppercase tracking-widest font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  href="#consultation"
                >
                  {" "}
                  <span>Schedule Sthapati Consultation</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>{" "}
                </a>{" "}
                <a
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 backdrop-blur-md text-surface-container-lowest font-label-ui text-label-ui uppercase tracking-wider rounded-lg transition-colors"
                  href="#timeline"
                >
                  {" "}
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                    architecture
                  </span>{" "}
                  <span>Explore 7-Stage Process</span>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface px-margin-tablet lg:px-margin py-20">
          {" "}
          <div className="max-w-[1320px] mx-auto">
            {" "}
            <div className="flex items-center gap-3 mb-10">
              {" "}
              <div className="h-px w-10 bg-secondary"></div>{" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary font-semibold">
                Tattva & Pramana
              </span>{" "}
              <div className="h-px flex-1 bg-surface-container-highest"></div>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {" "}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                {" "}
                <div className="space-y-2">
                  {" "}
                  <span className="text-secondary text-label-ui font-label-ui uppercase tracking-widest font-semibold">
                    Canonical Doctrine
                  </span>{" "}
                  <h2 className="font-headline-lg text-headline-lg text-primary font-normal leading-tight">
                    {" "}
                    Mathematical Resonance & Sthapatya Veda Orthodoxy{" "}
                  </h2>{" "}
                </div>{" "}
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  {" "}
                  A sacred sanctuary is not merely an assemblage of carved stone; it is the physical
                  manifestation of the Cosmic Being, the{" "}
                  <em className="font-title-editorial text-headline-sm text-primary-container">
                    Vastu Purusha
                  </em>
                  . Every temple executed by Vishwa Vaidika Sanatan strictly complies with timeless
                  treatises—primarily the <strong>Manasara</strong>, <strong>Mayamata</strong>, and{" "}
                  <strong>Tantra Samuccaya</strong>.{" "}
                </p>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" "}
                  Central to our architectural theology is the formulation of{" "}
                  <strong>Ayadi Shadvarga Calculations</strong>. By calculating celestial
                  coordinates, planetary nakshatras, and solar declination, our chief Sthapatis
                  govern the perimeter (<em className="italic">Mana</em>), elevation (
                  <em className="italic">Unmana</em>), and volumetric rhythm (
                  <em className="italic">Pramana</em>). This ensures uninterrupted cosmic harmonic
                  resonance between the presiding deity, the sacred geometry, and the patron trust
                  for millennia.{" "}
                </p>{" "}
                <div className="p-6 bg-sandstone-surface/30 rounded-xl flex items-start gap-4">
                  {" "}
                  <span className="material-symbols-outlined text-secondary text-3xl shrink-0 mt-1">
                    format_quote
                  </span>{" "}
                  <div className="space-y-1">
                    {" "}
                    <p className="font-title-editorial italic text-title-editorial text-primary leading-snug">
                      {" "}
                      "Yasmin sthite jagat sarvam tishtatyaksharam avyayam."{" "}
                    </p>{" "}
                    <p className="font-body-sm text-[12px] text-on-surface-variant font-label-ui tracking-wider uppercase">
                      {" "}
                      — That structure which embodies eternal divine permanence becomes a nexus of
                      transcendence.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-5 bg-surface-container-low rounded-xl flex items-center justify-between gap-4">
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-on-primary">
                      {" "}
                      <span className="material-symbols-outlined text-2xl">grid_4x4</span>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <p className="font-headline-sm text-[18px] text-primary">
                        Manduka & Paramasaayika Grids
                      </p>{" "}
                      <p className="font-body-sm text-[13px] text-on-surface-variant">
                        64 and 81 square Vastu matrices mapped to sub-millimeter precision.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    verified
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-6 bg-card-elevated rounded-xl p-8 shadow-xl flex flex-col space-y-6">
                {" "}
                <div className="flex items-center justify-between pb-4 bg-surface-container-low/50 -m-8 p-8 rounded-t-xl">
                  {" "}
                  <div>
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary font-bold">
                      Monograph 07-B
                    </span>{" "}
                    <h3 className="font-headline-md text-headline-md text-primary mt-0.5">
                      Monumental Execution Matrix
                    </h3>{" "}
                  </div>{" "}
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-label-monument text-[11px] uppercase font-bold rounded-xs">
                    Strict Shilpa Compliance
                  </span>{" "}
                </div>{" "}
                <div className="space-y-4 pt-4">
                  {" "}
                  <div className="p-4 bg-surface-container-lowest rounded-lg hover:bg-surface-container-low transition-colors">
                    {" "}
                    <div className="flex items-center justify-between">
                      {" "}
                      <span className="font-label-ui text-body-sm text-secondary font-semibold uppercase tracking-wider">
                        Architectural Typologies
                      </span>{" "}
                      <span className="material-symbols-outlined text-stone-hairline text-[18px]">
                        temple_hindu
                      </span>{" "}
                    </div>{" "}
                    <p className="font-title-editorial text-[17px] text-primary font-semibold mt-1">
                      Nagara, Dravida, and Vesara Orders
                    </p>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Specialized Latina, Sekhari, and Bhumija spires; Southern Kuta and Sala
                      Vimanas with majestic Gopurams.
                    </p>{" "}
                  </div>{" "}
                  <div className="p-4 bg-surface-container-lowest rounded-lg hover:bg-surface-container-low transition-colors">
                    {" "}
                    <div className="flex items-center justify-between">
                      {" "}
                      <span className="font-label-ui text-body-sm text-secondary font-semibold uppercase tracking-wider">
                        Structural System
                      </span>{" "}
                      <span className="material-symbols-outlined text-stone-hairline text-[18px]">
                        foundation
                      </span>{" "}
                    </div>{" "}
                    <p className="font-title-editorial text-[17px] text-primary font-semibold mt-1">
                      Monolithic Interlocking Dry-Stone
                    </p>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Pure mortise-and-tenon compression joinery. Complete elimination of corrosive
                      structural iron and modern concrete cement.
                    </p>{" "}
                  </div>{" "}
                  <div className="p-4 bg-surface-container-lowest rounded-lg hover:bg-surface-container-low transition-colors">
                    {" "}
                    <div className="flex items-center justify-between">
                      {" "}
                      <span className="font-label-ui text-body-sm text-secondary font-semibold uppercase tracking-wider">
                        Permissible Geological Media
                      </span>{" "}
                      <span className="material-symbols-outlined text-stone-hairline text-[18px]">
                        landscape
                      </span>{" "}
                    </div>{" "}
                    <p className="font-title-editorial text-[17px] text-primary font-semibold mt-1">
                      Certified Dense Siliceous Formations
                    </p>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Bansi Paharpur Pink Sandstone, Jodhpur Red/Golden Sandstone, Ambaji White
                      Marble, and Krishna Shila Granite.
                    </p>{" "}
                  </div>{" "}
                  <div className="p-4 bg-surface-container-lowest rounded-lg hover:bg-surface-container-low transition-colors">
                    {" "}
                    <div className="flex items-center justify-between">
                      {" "}
                      <span className="font-label-ui text-body-sm text-secondary font-semibold uppercase tracking-wider">
                        Computational Validation
                      </span>{" "}
                      <span className="material-symbols-outlined text-stone-hairline text-[18px]">
                        query_stats
                      </span>{" "}
                    </div>{" "}
                    <p className="font-title-editorial text-[17px] text-primary font-semibold mt-1">
                      Nonlinear Finite Element Modeling (FEM)
                    </p>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Simulated seismic acceleration (0.36g), shear slip micro-analysis, and thermal
                      expansion modeling over multi-century intervals.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="grid grid-cols-2 gap-4 pt-4 mt-2">
                  {" "}
                  <div className="p-3 bg-surface-container rounded-lg text-center">
                    {" "}
                    <span className="block font-display-hero text-headline-lg text-primary font-normal">
                      1,000+
                    </span>{" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary">
                      Years Structural Guarantee
                    </span>{" "}
                  </div>{" "}
                  <div className="p-3 bg-surface-container rounded-lg text-center">
                    {" "}
                    <span className="block font-display-hero text-headline-lg text-primary font-normal">
                      0.5<span className="text-sm font-sans">mm</span>
                    </span>{" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary">
                      Joint Chiseled Precision
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-sandstone-surface/30 px-margin-tablet lg:px-margin py-20">
          {" "}
          <div className="max-w-[1320px] mx-auto flex flex-col space-y-12">
            {" "}
            <div className="max-w-2xl">
              {" "}
              <span className="text-secondary text-label-ui font-label-ui uppercase tracking-widest font-semibold">
                Engineering Discipline
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-primary font-normal mt-1">
                {" "}
                Four Pillars of Monumental Execution{" "}
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                {" "}
                Bridging Vedic scholastic purity with cutting-edge aerospace-grade 3D measurement
                and century-proven stone artisanal mastery.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {" "}
              <div className="group bg-card-elevated p-8 rounded-xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                {" "}
                <div className="space-y-4">
                  {" "}
                  <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    {" "}
                    <span className="material-symbols-outlined text-3xl">
                      compass_calibration
                    </span>{" "}
                  </div>{" "}
                  <span className="font-label-monument text-[11px] uppercase tracking-widest text-secondary font-bold">
                    Pillar 01
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                    {" "}
                    Vedic Vastu & Ayadi Calculations{" "}
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" "}
                    True solar cardinal alignment determined by shadow gnomon (Shanku Sthapana),
                    ensuring harmonious cosmological resonance through sacred mathematical
                    matrices.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-6 flex items-center gap-2 text-secondary font-label-ui text-[12px] uppercase font-semibold">
                  {" "}
                  <span>Canonical Alignment</span>{" "}
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="group bg-card-elevated p-8 rounded-xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                {" "}
                <div className="space-y-4">
                  {" "}
                  <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    {" "}
                    <span className="material-symbols-outlined text-3xl">view_in_ar</span>{" "}
                  </div>{" "}
                  <span className="font-label-monument text-[11px] uppercase tracking-widest text-secondary font-bold">
                    Pillar 02
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                    {" "}
                    3D BIM & Point Cloud Modeling{" "}
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" "}
                    Every ashlar block is modeled digitally in parametric 3D space prior to quarry
                    cuts, pre-simulating mortise tenons and load distributions under seismic
                    stress.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-6 flex items-center gap-2 text-secondary font-label-ui text-[12px] uppercase font-semibold">
                  {" "}
                  <span>Digital Pre-Assembly</span>{" "}
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="group bg-card-elevated p-8 rounded-xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                {" "}
                <div className="space-y-4">
                  {" "}
                  <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    {" "}
                    <span className="material-symbols-outlined text-3xl">handyman</span>{" "}
                  </div>{" "}
                  <span className="font-label-monument text-[11px] uppercase tracking-widest text-secondary font-bold">
                    Pillar 03
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                    {" "}
                    Hereditary Sompura Artisans{" "}
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" "}
                    Guilds of over 350 multi-generational stone carvers executing micro-chiseled
                    deities, intricate ceiling vitanas, and jali fretwork by hand with sacred
                    focus.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-6 flex items-center gap-2 text-secondary font-label-ui text-[12px] uppercase font-semibold">
                  {" "}
                  <span>Living Lineage</span>{" "}
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="group bg-card-elevated p-8 rounded-xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                {" "}
                <div className="space-y-4">
                  {" "}
                  <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    {" "}
                    <span className="material-symbols-outlined text-3xl">token</span>{" "}
                  </div>{" "}
                  <span className="font-label-monument text-[11px] uppercase tracking-widest text-secondary font-bold">
                    Pillar 04
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                    {" "}
                    Monolithic Zero-RCC Assembly{" "}
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" "}
                    Interlocked stone courses joined by stainless marine-grade steel dowels and
                    lime-pozzolana mortars—completely immune to modern concrete spalling and
                    carbonation.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-6 flex items-center gap-2 text-secondary font-label-ui text-[12px] uppercase font-semibold">
                  {" "}
                  <span>Millennium Core</span>{" "}
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section
          className="w-full bg-surface-container-low px-margin-tablet lg:px-margin py-24"
          id="timeline"
        >
          {" "}
          <div className="max-w-[1320px] mx-auto">
            {" "}
            <div className="text-center max-w-3xl mx-auto mb-16">
              {" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary font-semibold">
                Turnkey Sequence of Consecration
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-primary font-normal mt-2">
                {" "}
                The 7-Stage Canonical Construction Lifecycle{" "}
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant mt-3">
                {" "}
                From primordial soil purification to sovereign finial placement and ceremonial prana
                infusion, our sequence ensures structural and theological flawlessness.{" "}
              </p>{" "}
            </div>{" "}
            <div className="relative flex flex-col space-y-8">
              {" "}
              <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-sandstone-surface -translate-x-1/2"></div>{" "}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {" "}
                <div className="lg:col-span-5 lg:text-right bg-card-elevated p-8 rounded-xl shadow-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary font-bold">
                    Stage 01
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                    Sankalpa & Bhoomi Pariksha
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {" "}
                    Canonical soil testing (smell, taste, color, water permeability), geotechnical
                    borehole density audits, and Shanku solar shadow cardinal orientation before
                    ground breaking.{" "}
                  </p>{" "}
                  <div className="mt-4 flex flex-wrap lg:justify-end gap-2 text-[11px] font-label-monument uppercase text-secondary">
                    {" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      Bhoomi Pujan
                    </span>{" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      {"Geotech SPT > 50"}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="hidden lg:flex lg:col-span-2 justify-center">
                  {" "}
                  <div className="w-12 h-12 rounded-4xl bg-primary text-on-primary flex items-center justify-center font-title-editorial text-title-editorial shadow-md ring-4 ring-surface-container-low">
                    {" "}
                    01{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 text-on-surface-variant font-body-sm">
                  {" "}
                  <div className="p-6 bg-sandstone-surface/40 rounded-xl space-y-2">
                    {" "}
                    <span className="font-label-ui text-[12px] uppercase text-primary font-bold">
                      Deliverable Matrix
                    </span>{" "}
                    <p className="text-body-sm">
                      Certified Soil Geotechnical Dossier & Celestial True-North Alignment
                      Certificate signed by Chief Sthapati.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {" "}
                <div className="lg:col-span-5 order-3 lg:order-1 text-on-surface-variant font-body-sm">
                  {" "}
                  <div className="p-6 bg-sandstone-surface/40 rounded-xl space-y-2 lg:text-right">
                    {" "}
                    <span className="font-label-ui text-[12px] uppercase text-primary font-bold">
                      Deliverable Matrix
                    </span>{" "}
                    <p className="text-body-sm">
                      Comprehensive Ayadi mathematical treatise and full Revit BIM parametric models
                      with exploded stone schedules.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="hidden lg:flex lg:col-span-2 order-2 justify-center">
                  {" "}
                  <div className="w-12 h-12 rounded-4xl bg-secondary text-on-secondary flex items-center justify-center font-title-editorial text-title-editorial shadow-md ring-4 ring-surface-container-low">
                    {" "}
                    02{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 order-1 lg:order-3 bg-card-elevated p-8 rounded-xl shadow-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary font-bold">
                    Stage 02
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                    Ayadi Dimensioning & 3D Blueprinting
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {" "}
                    Harmonic proportional calculations for Garbhagriha, Mandapa, and Shikhara.
                    Complete 3D parametric BIM detailing of each interlocking dry stone with 0.5mm
                    tolerances.{" "}
                  </p>{" "}
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-label-monument uppercase text-secondary">
                    {" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      64-Pad Manduka Grid
                    </span>{" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      Finite Element Stress Maps
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {" "}
                <div className="lg:col-span-5 lg:text-right bg-card-elevated p-8 rounded-xl shadow-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary font-bold">
                    Stage 03
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                    Geological Quarry Stratum Selection
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {" "}
                    Extraction of fault-free boulders from designated veins at Bansi Paharpur,
                    Ambaji, and Kolar. Ultrasonic pulse velocity and water absorption tests certify
                    stone viability.{" "}
                  </p>{" "}
                  <div className="mt-4 flex flex-wrap lg:justify-end gap-2 text-[11px] font-label-monument uppercase text-secondary">
                    {" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      {"UPV > 4,500 m/s"}
                    </span>{" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      Zero Internal Inclusions
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="hidden lg:flex lg:col-span-2 justify-center">
                  {" "}
                  <div className="w-12 h-12 rounded-4xl bg-primary text-on-primary flex items-center justify-center font-title-editorial text-title-editorial shadow-md ring-4 ring-surface-container-low">
                    {" "}
                    03{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 text-on-surface-variant font-body-sm">
                  {" "}
                  <div className="p-6 bg-sandstone-surface/40 rounded-xl space-y-2">
                    {" "}
                    <span className="font-label-ui text-[12px] uppercase text-primary font-bold">
                      Deliverable Matrix
                    </span>{" "}
                    <p className="text-body-sm">
                      Quarry Stratum Provenance Passports and Ultrasonic Velocity Lab Reports for
                      every structural ashlar tier.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {" "}
                <div className="lg:col-span-5 order-3 lg:order-1 text-on-surface-variant font-body-sm">
                  {" "}
                  <div className="p-6 bg-sandstone-surface/40 rounded-xl space-y-2 lg:text-right">
                    {" "}
                    <span className="font-label-ui text-[12px] uppercase text-primary font-bold">
                      Deliverable Matrix
                    </span>{" "}
                    <p className="text-body-sm">
                      Master Iconography Inspection Dossier and dry-dock test fitting logs with RFID
                      barcoded tracking for each carved module.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="hidden lg:flex lg:col-span-2 order-2 justify-center">
                  {" "}
                  <div className="w-12 h-12 rounded-4xl bg-secondary text-on-secondary flex items-center justify-center font-title-editorial text-title-editorial shadow-md ring-4 ring-surface-container-low">
                    {" "}
                    04{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 order-1 lg:order-3 bg-card-elevated p-8 rounded-xl shadow-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary font-bold">
                    Stage 04
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                    Sompura Chiseling & Iconometry
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {" "}
                    Artisan carving in dedicated regional workshops. Master silpis sculpt pillars,
                    devakoshtas (deity niches), gavakshas, and ceiling vitanas adhering to Tala
                    measurements.{" "}
                  </p>{" "}
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-label-monument uppercase text-secondary">
                    {" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      Dasa-Tala Canonical System
                    </span>{" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      Hand-Heated Chisel Finishes
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {" "}
                <div className="lg:col-span-5 lg:text-right bg-card-elevated p-8 rounded-xl shadow-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary font-bold">
                    Stage 05
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                    Adhisthana Plinth Dry-Stone Erection
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {" "}
                    Erection of the massive base mold (Upapitha, Jagati, and Kumuda courses). Heavy
                    dry stone courses are fitted using crane precision, interlocking grooves, and
                    non-corrosive pins.{" "}
                  </p>{" "}
                  <div className="mt-4 flex flex-wrap lg:justify-end gap-2 text-[11px] font-label-monument uppercase text-secondary">
                    {" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      Dry-Interlocking Joints
                    </span>{" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      Precision Laser Leveling
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="hidden lg:flex lg:col-span-2 justify-center">
                  {" "}
                  <div className="w-12 h-12 rounded-4xl bg-primary text-on-primary flex items-center justify-center font-title-editorial text-title-editorial shadow-md ring-4 ring-surface-container-low">
                    {" "}
                    05{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 text-on-surface-variant font-body-sm">
                  {" "}
                  <div className="p-6 bg-sandstone-surface/40 rounded-xl space-y-2">
                    {" "}
                    <span className="font-label-ui text-[12px] uppercase text-primary font-bold">
                      Deliverable Matrix
                    </span>{" "}
                    <p className="text-body-sm">
                      Foundation Plinth Hydrostatic & Compressive Stability Certificate; 0.1 degree
                      vertical plumb validation.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {" "}
                <div className="lg:col-span-5 order-3 lg:order-1 text-on-surface-variant font-body-sm">
                  {" "}
                  <div className="p-6 bg-sandstone-surface/40 rounded-xl space-y-2 lg:text-right">
                    {" "}
                    <span className="font-label-ui text-[12px] uppercase text-primary font-bold">
                      Deliverable Matrix
                    </span>{" "}
                    <p className="text-body-sm">
                      Structural Peak Alignment Inspection & Panchaloha / 24K Gold Plated Kalasha
                      Metallurgical Authenticity Certificate.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="hidden lg:flex lg:col-span-2 order-2 justify-center">
                  {" "}
                  <div className="w-12 h-12 rounded-4xl bg-secondary text-on-secondary flex items-center justify-center font-title-editorial text-title-editorial shadow-md ring-4 ring-surface-container-low">
                    {" "}
                    06{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 order-1 lg:order-3 bg-card-elevated p-8 rounded-xl shadow-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary font-bold">
                    Stage 06
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                    Shikhara Superstructure & Amalaka
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {" "}
                    Tier-by-tier elevation of the sanctum spire, locking inward-corbelled stones.
                    Capping with the monolithic stone Amalaka cushion and gold-gilded copper-alloy
                    Kalasha finial.{" "}
                  </p>{" "}
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-label-monument uppercase text-secondary">
                    {" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      Inward Corbelled Spires
                    </span>{" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      Lightning Arrestor Nexus
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {" "}
                <div className="lg:col-span-5 lg:text-right bg-card-elevated p-8 rounded-xl shadow-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary font-bold">
                    Stage 07
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                    Prana Pratishtha & Handover
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {" "}
                    Grand Kumbhabhishekam rituals conducted by consecrated Vedic priests. Official
                    architectural handover deed, warranty covenants, and lifelong heritage
                    maintenance manual delivered.{" "}
                  </p>{" "}
                  <div className="mt-4 flex flex-wrap lg:justify-end gap-2 text-[11px] font-label-monument uppercase text-secondary">
                    {" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      Kumbhabhishekam
                    </span>{" "}
                    <span className="px-2.5 py-1 bg-surface-container rounded-xs">
                      1,000-Yr Covenant
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="hidden lg:flex lg:col-span-2 justify-center">
                  {" "}
                  <div className="w-12 h-12 rounded-4xl bg-tertiary-container text-on-primary flex items-center justify-center font-title-editorial text-title-editorial shadow-md ring-4 ring-surface-container-low">
                    {" "}
                    07{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 text-on-surface-variant font-body-sm">
                  {" "}
                  <div className="p-6 bg-sandstone-surface/40 rounded-xl space-y-2">
                    {" "}
                    <span className="font-label-ui text-[12px] uppercase text-primary font-bold">
                      Deliverable Matrix
                    </span>{" "}
                    <p className="text-body-sm">
                      Final Sanctum Golden Key handover, complete as-built stone asset registry, and
                      endowment board governance charter.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface px-margin-tablet lg:px-margin py-20">
          {" "}
          <div className="max-w-[1320px] mx-auto flex flex-col space-y-12">
            {" "}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              {" "}
              <div>
                {" "}
                <span className="text-secondary text-label-ui font-label-ui uppercase tracking-widest font-semibold">
                  Tectonic Integrity
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-primary font-normal mt-1">
                  {" "}
                  Material Anatomy & Master Craftsmanship{" "}
                </h2>{" "}
              </div>{" "}
              <p className="text-body-sm text-on-surface-variant max-w-md font-body-sm">
                {" "}
                A visual inventory of non-ferrous joints, hand-carved friezes, and geological
                specimens tested to endure ten continuous centuries of weathering.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {" "}
              <div className="md:col-span-7 bg-card-elevated rounded-xl overflow-hidden shadow-xs flex flex-col">
                {" "}
                <div className="h-80 w-full overflow-hidden relative">
                  {" "}
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    data-alt="Macro architectural detail of massive monolithic sandstone blocks dry-stacked with mortise and tenon joints in temple construction. Intricate interlocking stone channels with zero mortar, hand-chiseled textured surfaces, warm desert pink stone tones, extreme depth and precision, high-contrast natural lighting highlighting centuries-old masonry craftsmanship."
                    src={IMG.interlockingJoint}
                  />{" "}
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-charcoal-monolith/85 backdrop-blur-md text-surface-container-lowest text-[11px] font-label-monument uppercase tracking-wider rounded-xs">
                    {" "}
                    Dry Interlocking Joinery{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-6 bg-surface-container-lowest flex-1 flex flex-col justify-between">
                  {" "}
                  <div>
                    {" "}
                    <h4 className="font-headline-sm text-headline-sm text-primary">
                      Precision Compression Dry-Stacking
                    </h4>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      {" "}
                      Utilizing gravity-locked mortise-and-tenon sockets. Under seismic lateral
                      displacement, the blocks dissipate energy along dry friction planes without
                      fracturing.{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="mt-4 pt-4 flex items-center justify-between text-stone-hairline text-label-monument text-[11px] uppercase tracking-wider">
                    {" "}
                    <span>{"Spec: ASTM C170 Compressive Strength > 110 MPa"}</span>{" "}
                    <span className="text-secondary font-bold">100% Non-RCC</span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="md:col-span-5 flex flex-col gap-6">
                {" "}
                <div className="bg-card-elevated rounded-xl overflow-hidden shadow-xs flex flex-col flex-1">
                  {" "}
                  <div className="h-44 w-full overflow-hidden relative">
                    {" "}
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      data-alt="Close-up fine art photography of an intricately chiseled Bansi Paharpur pink sandstone temple pillar. Ornate dancing celestial apsaras, sacred kirtimukha faces, and sharp floral relief patterns carved by hand. Warm sandstone glow, shallow depth of field, classical Hindu temple architecture style."
                      src={IMG.sandstonePillar}
                    />{" "}
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-charcoal-monolith/85 backdrop-blur-md text-surface-container-lowest text-[10px] font-label-monument uppercase tracking-wider rounded-xs">
                      {" "}
                      Bansi Paharpur Sandstone{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="p-5 bg-surface-container-lowest">
                    {" "}
                    <h4 className="font-title-editorial text-[18px] text-primary font-semibold">
                      Stambha Pillar Carvings
                    </h4>{" "}
                    <p className="font-body-sm text-[13px] text-on-surface-variant mt-1">
                      {" "}
                      Artisans spend over 1,200 hours per monolithic pillar chiseling mythic
                      allegories according to the Agamic canons.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="grid grid-cols-2 gap-4">
                  {" "}
                  <div className="bg-card-elevated rounded-xl overflow-hidden shadow-xs">
                    {" "}
                    <div className="h-32 w-full overflow-hidden relative">
                      {" "}
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        data-alt="Intricate concentric circular stone ceiling dome vitana of a classical Hindu temple mandapa interior. Concentric rings of blooming lotus petals and dangling decorative stone pendants carved from pure white Ambaji marble with warm ambient illumination."
                        src={IMG.marbleDome}
                      />{" "}
                    </div>{" "}
                    <div className="p-3 bg-surface-container-lowest text-center">
                      {" "}
                      <p className="font-label-ui text-[12px] text-primary font-bold uppercase">
                        Mandapa Vitana
                      </p>{" "}
                      <p className="text-[11px] text-stone-hairline">Concentric Stone Domes</p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="bg-card-elevated rounded-xl overflow-hidden shadow-xs">
                    {" "}
                    <div className="h-32 w-full overflow-hidden relative">
                      {" "}
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        data-alt="Radiant hand-beaten copper alloy temple finial kalasha coated in thick 24-karat gold leaf glowing against a dramatic deep blue twilight sky atop a carved stone shikhara pinnacle with traditional sacred flag fluttering."
                        src={IMG.goldenKalasha}
                      />{" "}
                    </div>{" "}
                    <div className="p-3 bg-surface-container-lowest text-center">
                      {" "}
                      <p className="font-label-ui text-[12px] text-primary font-bold uppercase">
                        Golden Kalasha
                      </p>{" "}
                      <p className="text-[11px] text-stone-hairline">
                        24K Gilded Finial Spire
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Structural Engineering & Temple Construction Reference Gallery */}
        <CraftsmanshipGallery
          allowedCategories={[
            "fabrication-construction",
            "models-concepts",
            "temple-architecture",
          ]}
          initialCategory="all"
          title="Temple Structural Frameworks, Fabrication & Concept Visualizations"
          subtitle="Documenting reinforced concrete (RCC) inner structural cores, mass sanctum foundations, classical red sandstone cladding, digital BIM models, scale physical prototypes, and heavy stone fabrication."
          badge="Engineering & Structural Execution"
        />
        <section className="w-full bg-sandstone-surface/20 px-margin-tablet lg:px-margin py-20">
          {" "}
          <div className="max-w-[1320px] mx-auto bg-card-elevated rounded-2xl p-8 lg:p-14 shadow-lg">
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {" "}
              <div className="lg:col-span-7 flex flex-col space-y-4">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary font-bold">
                  Scientific Quality Assurance
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-primary font-normal leading-tight">
                  {" "}
                  Rigorous Non-Destructive Stone Verification{" "}
                </h2>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" "}
                  Every cubic meter of stone is subjected to rigorous laboratory verification before
                  arriving on sanctum grounds. We bridge ancient intuition with aerospace-grade
                  ultrasonic tomography to guarantee an unbroken internal crystal lattice.{" "}
                </p>{" "}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {" "}
                  <div className="flex items-start gap-3 p-4 bg-surface-container-low rounded-lg">
                    {" "}
                    <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5">
                      radar
                    </span>{" "}
                    <div>
                      {" "}
                      <h4 className="font-label-ui text-label-ui uppercase tracking-wide text-primary font-bold">
                        Ultrasonic Pulse Velocity
                      </h4>{" "}
                      <p className="font-body-sm text-[12px] text-on-surface-variant mt-1">
                        Identifies hidden hairline micro-fissures and internal voids before chisel
                        contact.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start gap-3 p-4 bg-surface-container-low rounded-lg">
                    {" "}
                    <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5">
                      scale
                    </span>{" "}
                    <div>
                      {" "}
                      <h4 className="font-label-ui text-label-ui uppercase tracking-wide text-primary font-bold">
                        Sub-Millimeter Plumb Line
                      </h4>{" "}
                      <p className="font-body-sm text-[12px] text-on-surface-variant mt-1">
                        Laser total stations guarantee vertical plumb within 1mm per 15 vertical
                        meters.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start gap-3 p-4 bg-surface-container-low rounded-lg">
                    {" "}
                    <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5">
                      water_drop
                    </span>{" "}
                    <div>
                      {" "}
                      <h4 className="font-label-ui text-label-ui uppercase tracking-wide text-primary font-bold">
                        Hydro-Permeability Rating
                      </h4>{" "}
                      <p className="font-body-sm text-[12px] text-on-surface-variant mt-1">
                        Under 1.2% total absorption, ensuring freeze-thaw cracking resistance in any
                        climate.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start gap-3 p-4 bg-surface-container-low rounded-lg">
                    {" "}
                    <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5">
                      gavel
                    </span>{" "}
                    <div>
                      {" "}
                      <h4 className="font-label-ui text-label-ui uppercase tracking-wide text-primary font-bold">
                        1,000-Year Life Covenant
                      </h4>{" "}
                      <p className="font-body-sm text-[12px] text-on-surface-variant mt-1">
                        Formal contractual covenant backed by endowment structural audits every 50
                        years.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-5 bg-charcoal-monolith rounded-xl p-8 text-on-primary flex flex-col space-y-6">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <span className="font-label-monument text-[11px] uppercase tracking-widest text-secondary-fixed">
                    Inspection Telemetry
                  </span>{" "}
                  <span className="w-2.5 h-2.5 rounded-4xl bg-secondary-container animate-ping"></span>{" "}
                </div>{" "}
                <div className="space-y-3 font-mono text-[12px] text-sandstone-surface">
                  {" "}
                  <div className="flex justify-between py-1.5 bg-surface-container-highest/10 px-3 rounded-xs">
                    {" "}
                    <span>STONE BATCH:</span>{" "}
                    <span className="text-surface-container-lowest font-semibold">
                      BP-2025-VVS-988
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 bg-surface-container-highest/10 px-3 rounded-xs">
                    {" "}
                    <span>DENSITY INDEX:</span>{" "}
                    <span className="text-secondary-fixed font-semibold">2,640 kg/m³</span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 bg-surface-container-highest/10 px-3 rounded-xs">
                    {" "}
                    <span>ULTRASONIC VELOCITY:</span>{" "}
                    <span className="text-surface-container-lowest font-semibold">
                      4,820 m/s [PASS]
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 bg-surface-container-highest/10 px-3 rounded-xs">
                    {" "}
                    <span>MICRO-FISSURE ANOMALIES:</span>{" "}
                    <span className="text-surface-container-lowest font-semibold">
                      0.00% [NULL]
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 bg-surface-container-highest/10 px-3 rounded-xs">
                    {" "}
                    <span>SEISMIC CAPACITY:</span>{" "}
                    <span className="text-secondary-fixed font-semibold">
                      Zone V (Peak PGA 0.40g)
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-4 bg-primary-container rounded-lg flex items-center gap-3">
                  {" "}
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl">
                    verified
                  </span>{" "}
                  <div>
                    {" "}
                    <p className="font-label-ui text-label-ui uppercase tracking-wider text-surface-container-lowest font-bold">
                      Archaeological Certified
                    </p>{" "}
                    <p className="text-[11px] text-surface-variant">
                      Meets Archaeological Survey of India (ASI) conservation & Sthapatya Veda grade
                      specifications.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section
          className="relative w-full bg-primary-container text-on-primary px-margin-tablet lg:px-margin py-24 overflow-hidden"
          id="consultation"
        >
          {" "}
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-4xl bg-tertiary-container/30 blur-3xl pointer-events-none"></div>{" "}
          <div className="relative max-w-[1320px] mx-auto">
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {" "}
              <div className="lg:col-span-7 flex flex-col space-y-6">
                {" "}
                <div className="flex items-center gap-2 text-secondary-fixed font-label-monument text-label-monument uppercase tracking-widest">
                  {" "}
                  <span className="w-2 h-2 rounded-4xl bg-secondary-fixed"></span>{" "}
                  <span>Direct Sthapati Council Directorship</span>{" "}
                </div>{" "}
                <h2 className="font-display-hero text-headline-lg lg:text-display-hero font-normal text-surface-container-lowest leading-tight">
                  {" "}
                  Entrust Your Sacred Sanctuary to Our Master Builders.{" "}
                </h2>{" "}
                <p className="font-body-lg text-body-lg text-sandstone-surface max-w-xl leading-relaxed">
                  {" "}
                  Whether initiating a monumental regional Tirtha or an overseas consecrated temple
                  for a diaspora trust, engage directly with our Sthapatis for site evaluation,
                  Ayadi feasibility, and stone availability forecasts.{" "}
                </p>{" "}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  {" "}
                  <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-tertiary-container hover:bg-tertiary text-on-primary font-label-ui text-label-ui uppercase tracking-widest font-semibold rounded-lg shadow-xl transition-all">
                    {" "}
                    <span>Schedule Sthapati Consultation</span>{" "}
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>{" "}
                  </button>{" "}
                  <button className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 backdrop-blur-md text-surface-container-lowest font-label-ui text-label-ui uppercase tracking-wider rounded-lg transition-colors">
                    {" "}
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                      file_download
                    </span>{" "}
                    <span>Download Service Dossier (PDF)</span>{" "}
                  </button>{" "}
                </div>{" "}
                <div className="pt-6 flex flex-wrap items-center gap-8 text-sandstone-surface font-body-sm text-[13px]">
                  {" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                      phone_in_talk
                    </span>{" "}
                    <span>
                      Liaison Desk: <strong>+91 99411 21111</strong>
                    </span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                      mark_email_read
                    </span>{" "}
                    <span>sthapatya@vishwayvaidika.org</span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-5 bg-card-elevated text-on-surface rounded-xl p-8 shadow-2xl">
                {" "}
                <div className="space-y-1 mb-6">
                  {" "}
                  <span className="font-label-monument text-[11px] uppercase tracking-widest text-secondary font-bold">
                    Fast Advisory Access
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Initiate Temple Monograph
                  </h3>{" "}
                  <p className="font-body-sm text-[13px] text-on-surface-variant">
                    Confidential review under Sanatan Architectural Trust guidelines.
                  </p>{" "}
                </div>{" "}
                <form className="space-y-4" onSubmit={(e) => S.current.h0?.(e)}>
                  {" "}
                  <div>
                    {" "}
                    <label className="block font-label-ui text-[12px] uppercase text-primary font-semibold mb-1">
                      Patron / Trust / Foundation Name
                    </label>{" "}
                    <input
                      className="w-full px-4 py-2.5 bg-surface-container-low text-on-surface rounded-lg text-body-sm focus:outline-hidden focus:ring-1 focus:ring-secondary transition-all"
                      placeholder="e.g. Sri Venkateswara Temple Trust"
                      required
                      type="text"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <label className="block font-label-ui text-[12px] uppercase text-primary font-semibold mb-1">
                      Proposed Geographic Site / Coordinates
                    </label>{" "}
                    <input
                      className="w-full px-4 py-2.5 bg-surface-container-low text-on-surface rounded-lg text-body-sm focus:outline-hidden focus:ring-1 focus:ring-secondary transition-all"
                      placeholder="e.g. Dallas, Texas, USA or Pune, Maharashtra"
                      required
                      type="text"
                    />{" "}
                  </div>{" "}
                  <div className="grid grid-cols-2 gap-4">
                    {" "}
                    <div>
                      {" "}
                      <label className="block font-label-ui text-[12px] uppercase text-primary font-semibold mb-1">
                        Presiding Deity Order
                      </label>{" "}
                      <select className="w-full px-3 py-2.5 bg-surface-container-low text-on-surface rounded-lg text-body-sm focus:outline-hidden focus:ring-1 focus:ring-secondary">
                        {" "}
                        <option>Vaishnava Tradition</option> <option>Shaiva Tradition</option>{" "}
                        <option>Shakta Tradition</option>{" "}
                        <option>Smartism / Multi-Shrine</option>{" "}
                      </select>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <label className="block font-label-ui text-[12px] uppercase text-primary font-semibold mb-1">
                        Approx. Plinth Area
                      </label>{" "}
                      <select className="w-full px-3 py-2.5 bg-surface-container-low text-on-surface rounded-lg text-body-sm focus:outline-hidden focus:ring-1 focus:ring-secondary">
                        {" "}
                        <option>5,000 - 15,000 sq ft</option> <option>15,000 - 50,000 sq ft</option>{" "}
                        <option>50,000+ sq ft (Monumental)</option>{" "}
                      </select>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <label className="block font-label-ui text-[12px] uppercase text-primary font-semibold mb-1">
                      Direct Contact Number / WhatsApp
                    </label>{" "}
                    <input
                      className="w-full px-4 py-2.5 bg-surface-container-low text-on-surface rounded-lg text-body-sm focus:outline-hidden focus:ring-1 focus:ring-secondary transition-all"
                      placeholder="+91 99411 21111"
                      required
                      type="tel"
                    />{" "}
                  </div>{" "}
                  <button
                    className="w-full mt-2 py-3 bg-primary hover:bg-primary-container text-on-primary font-label-ui text-label-ui uppercase tracking-widest font-semibold rounded-lg shadow-md transition-colors"
                    type="submit"
                  >
                    {" "}
                    Dispatch Request to Chief Sthapati{" "}
                  </button>{" "}
                  <p className="text-[11px] text-center text-stone-hairline mt-2">
                    Zero commercial intermediaries. Strict canonical confidentiality.
                  </p>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>
    </main>
  );
}

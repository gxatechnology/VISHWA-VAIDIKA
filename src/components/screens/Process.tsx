import { Link } from "@tanstack/react-router";
import { IMG } from "@/components/site/images";
import { useScreenScript } from "@/components/site/use-screen-script";
import { setup } from "./scripts/Process";
import { CraftsmanshipGallery } from "@/components/portfolio/CraftsmanshipGallery";

/* Generated from the Stitch design export (screen 11). */
export function ProcessScreen() {
  const S = useScreenScript(setup);
  return (
    <main className="w-full pt-20 bg-surface">
      <div className="flex flex-col w-full">
        {" "}
        <section className="w-full bg-charcoal-monolith text-on-primary py-space-sm px-gutter">
          {" "}
          <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-space-xs font-label-monument text-label-monument tracking-widest text-surface-container-high opacity-90">
            {" "}
            <div className="flex items-center gap-space-xs">
              {" "}
              <span className="inline-block w-2 h-2 rounded-4xl bg-on-tertiary-container animate-pulse"></span>{" "}
              <span>VVS ADVANCED ENGINEERING & STHAPATYA DIVISION</span>{" "}
            </div>{" "}
            <div className="hidden md:flex items-center gap-space-md">
              {" "}
              <span>MONOLITHIC DRY-STONE SPECIFICATION</span> <span className="opacity-40">•</span>{" "}
              <span>ISO / IS 516 COMPLIANT PETROLOGY</span> <span className="opacity-40">•</span>{" "}
              <span>MCA INDIA REGISTERED MONUMENT CONTRACTOR</span>{" "}
            </div>{" "}
            <div className="flex items-center gap-space-xs text-secondary-container">
              {" "}
              <span className="material-symbols-outlined text-[16px]">verified</span>{" "}
              <span>1,000-YR CODE CERTIFIED</span>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-space-xl px-gutter bg-surface">
          {" "}
          <div className="max-w-[1320px] mx-auto flex flex-col gap-space-xl">
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
              {" "}
              <div className="lg:col-span-8 flex flex-col gap-space-sm">
                {" "}
                <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded-DEFAULT w-fit">
                  {" "}
                  <span className="w-1.5 h-1.5 rounded-4xl bg-primary"></span>{" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-primary">
                    Sthapatya Precision Architecture
                  </span>{" "}
                </div>{" "}
                <h1 className="font-display-hero text-display-hero text-primary tracking-tight font-headline-lg">
                  {" "}
                  Where Traditional Knowledge Meets Engineering Precision.{" "}
                </h1>{" "}
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                  {" "}
                  Harmonizing centuries-old Shilpa Shastra Agamas with modern 3D LiDAR point-cloud
                  survey, finite-element structural simulation, and multi-axis stone dressing
                  machinery to build monuments that defy millenia.{" "}
                </p>{" "}
              </div>{" "}
              <div className="lg:col-span-4 flex flex-col justify-end">
                {" "}
                <div className="p-space-lg bg-surface-container-low rounded-xl shadow-xs flex flex-col gap-space-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument text-secondary uppercase">
                    Sanctum Structural Protocol
                  </span>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Zero structural cement mortar in core Garbhagriha shikharas. Monolithic gravity
                    interlocking delivers seismic dampening through precision dry-stone friction
                    joints.{" "}
                  </p>{" "}
                  <div className="flex items-center gap-space-md pt-space-xs">
                    {" "}
                    <div>
                      {" "}
                      <span className="font-headline-sm text-headline-sm text-primary block">
                        0.5mm
                      </span>{" "}
                      <span className="font-label-monument text-label-monument text-muted-sage uppercase">
                        Joint Tolerance
                      </span>{" "}
                    </div>{" "}
                    <div className="w-px h-8 bg-surface-variant"></div>{" "}
                    <div>
                      {" "}
                      <span className="font-headline-sm text-headline-sm text-primary block">
                        Zero
                      </span>{" "}
                      <span className="font-label-monument text-label-monument text-muted-sage uppercase">
                        Carbon Rebar
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-md">
              {" "}
              <div className="p-space-md bg-card-elevated rounded-lg shadow-xs flex flex-col gap-1">
                {" "}
                <span className="font-label-monument text-label-monument uppercase text-secondary">
                  Hereditary Guild Force
                </span>{" "}
                <span className="font-headline-md text-headline-md text-primary">350+</span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Master silpis & Sompura carvers
                </span>{" "}
              </div>{" "}
              <div className="p-space-md bg-card-elevated rounded-lg shadow-xs flex flex-col gap-1">
                {" "}
                <span className="font-label-monument text-label-monument uppercase text-secondary">
                  Lithic Fabrication
                </span>{" "}
                <span className="font-headline-md text-headline-md text-primary">4 Ateliers</span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Active yards across Rajasthan & Gujarat
                </span>{" "}
              </div>{" "}
              <div className="p-space-md bg-card-elevated rounded-lg shadow-xs flex flex-col gap-1">
                {" "}
                <span className="font-label-monument text-label-monument uppercase text-secondary">
                  Laser Point-Cloud
                </span>{" "}
                <span className="font-headline-md text-headline-md text-primary">0.02 mm</span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Metrology total-station accuracy
                </span>{" "}
              </div>{" "}
              <div className="p-space-md bg-card-elevated rounded-lg shadow-xs flex flex-col gap-1">
                {" "}
                <span className="font-label-monument text-label-monument uppercase text-secondary">
                  Design Lifespan
                </span>{" "}
                <span className="font-headline-md text-headline-md text-primary">1,000+ Yrs</span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Non-degrading granite & red sandstone
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-space-xl px-gutter bg-surface-container-low">
          {" "}
          <div className="max-w-[1320px] mx-auto flex flex-col gap-space-lg">
            {" "}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
              {" "}
              <div className="flex flex-col gap-space-xs">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary">
                  Core Technical Capabilities
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Dual Mastery: Canonical Shastra & Modern Geotechnical Mechanics
                </h2>{" "}
              </div>{" "}
              <span className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                {" "}
                Every phase operates under joint sign-off: Head Sthapati certifies Agamic sanctum
                compliance, Chief Structural Engineer verifies FEA seismic resistance.{" "}
              </span>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              {" "}
              <div className="bg-card-elevated p-space-lg rounded-xl shadow-xs flex flex-col justify-between gap-space-md transition-all duration-300 hover:shadow-md group">
                {" "}
                <div className="flex flex-col gap-space-sm">
                  {" "}
                  <div className="flex items-center justify-between">
                    {" "}
                    <span className="font-headline-sm text-headline-sm text-secondary-container bg-primary px-space-sm py-0.5 rounded-DEFAULT">
                      01
                    </span>{" "}
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      architecture
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Architectural Planning & Ayadi Computation
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" "}
                    Translating sacred Ayadi Shadvarga formulas (Aya, Vyaya, Yoni, Nakshatra) into
                    parametric 3D BIM models. Solar equinox azimuth calculation ensures exact ray
                    alignment with the Garbhagriha murtis on auspicious lunar dates.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-sm bg-surface-container rounded-lg flex flex-col gap-1">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase text-primary">
                    Engineered Deliverables:
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    • 64 / 81-Pada Vastu Mandala coordinates
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    • Shadow gnomon astronomical alignment report
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated p-space-lg rounded-xl shadow-xs flex flex-col justify-between gap-space-md transition-all duration-300 hover:shadow-md group">
                {" "}
                <div className="flex flex-col gap-space-sm">
                  {" "}
                  <div className="flex items-center justify-between">
                    {" "}
                    <span className="font-headline-sm text-headline-sm text-secondary-container bg-primary px-space-sm py-0.5 rounded-DEFAULT">
                      02
                    </span>{" "}
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      landscape
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Quarry Sourcing & Lithic Petrology
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" "}
                    Direct block extraction from ancient, proven geological formations: Bayana pink
                    sandstone, Makrana pure calcite marble, and Charnockite hard granites. Every
                    monolith is mapped for petrographic grain consistency and core integrity.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-sm bg-surface-container rounded-lg flex flex-col gap-1">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase text-primary">
                    Engineered Deliverables:
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    • Stratum-level ultrasonic velocity testing (UPV)
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    • Zero internal micro-fissure certification
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated p-space-lg rounded-xl shadow-xs flex flex-col justify-between gap-space-md transition-all duration-300 hover:shadow-md group">
                {" "}
                <div className="flex flex-col gap-space-sm">
                  {" "}
                  <div className="flex items-center justify-between">
                    {" "}
                    <span className="font-headline-sm text-headline-sm text-secondary-container bg-primary px-space-sm py-0.5 rounded-DEFAULT">
                      03
                    </span>{" "}
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      handyman
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Hereditary Sompura Hand Chiseling
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" "}
                    Preserving living transmission through 350+ master silpis. Translating classical
                    Dasha-tala canonical proportions into hand-carved celestial devakoshthas, ornate
                    torana arches, and pierced jali stone screens.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-sm bg-surface-container rounded-lg flex flex-col gap-1">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase text-primary">
                    Engineered Deliverables:
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    • Canonical Agamic iconography compliance
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    • In-situ dry-dock pre-fit before site transport
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated p-space-lg rounded-xl shadow-xs flex flex-col justify-between gap-space-md transition-all duration-300 hover:shadow-md group">
                {" "}
                <div className="flex flex-col gap-space-sm">
                  {" "}
                  <div className="flex items-center justify-between">
                    {" "}
                    <span className="font-headline-sm text-headline-sm text-secondary-container bg-primary px-space-sm py-0.5 rounded-DEFAULT">
                      04
                    </span>{" "}
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      domain_verification
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Non-Linear Structural Engineering
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" "}
                    Advanced non-linear Finite Element Analysis (FEA) modeling load paths through
                    multi-tiered shikhara towers. Monolithic base-isolation buffers shockwaves up to
                    Zone V seismic events without relying on corroding carbon steel.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-sm bg-surface-container rounded-lg flex flex-col gap-1">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase text-primary">
                    Engineered Deliverables:
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    • Seismic dynamic spectral acceleration model
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    • SS316 non-ferrous locking pin matrix
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated p-space-lg rounded-xl shadow-xs flex flex-col justify-between gap-space-md transition-all duration-300 hover:shadow-md group">
                {" "}
                <div className="flex flex-col gap-space-sm">
                  {" "}
                  <div className="flex items-center justify-between">
                    {" "}
                    <span className="font-headline-sm text-headline-sm text-secondary-container bg-primary px-space-sm py-0.5 rounded-DEFAULT">
                      05
                    </span>{" "}
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      precision_manufacturing
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Heavy Precision Hoisting & Site Assembly
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" "}
                    Deployment of high-capacity crawler cranes with soft-slung nylon harnesses,
                    safeguarding finely carved stone capitals during 40-meter vertical lifts.
                    Real-time laser plinth alignment locks each course within sub-millimeter
                    tolerances.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-sm bg-surface-container rounded-lg flex flex-col gap-1">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase text-primary">
                    Engineered Deliverables:
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    • 0.5 mm dry-stone mortise & tenon compression
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    • Hydro-pneumatic gentle placement protocol
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated p-space-lg rounded-xl shadow-xs flex flex-col justify-between gap-space-md transition-all duration-300 hover:shadow-md group">
                {" "}
                <div className="flex flex-col gap-space-sm">
                  {" "}
                  <div className="flex items-center justify-between">
                    {" "}
                    <span className="font-headline-sm text-headline-sm text-secondary-container bg-primary px-space-sm py-0.5 rounded-DEFAULT">
                      06
                    </span>{" "}
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      flaky
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Non-Destructive Testing & Calibration
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" "}
                    {
                      "Continuous QA via rebound hammer testing, digital optical plumb-line arrays, and micro-spectroscopy. Stone density, water absorption (<1.2%), and compressive strength exceeding 120 MPa are documented in the Temple Living Deed."
                    }{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-sm bg-surface-container rounded-lg flex flex-col gap-1">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase text-primary">
                    Engineered Deliverables:
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {"• UPV pulse velocity >4,500 m/s verification"}
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    • 1,000-Year Lithic Guarantee Certificate
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-space-xl px-gutter bg-surface">
          {" "}
          <div className="max-w-[1320px] mx-auto flex flex-col gap-space-lg">
            {" "}
            <div className="flex flex-col gap-space-xs">
              {" "}
              <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary">
                Industrial Capacity
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Atelier Infrastructure & Advanced Fabrication Equipment
              </h2>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
              {" "}
              <div className="lg:col-span-5 relative bg-charcoal-monolith rounded-xl overflow-hidden min-h-[360px] flex flex-col justify-end p-space-lg text-on-primary">
                {" "}
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
                  data-alt="Stone carving atelier in Rajasthan with master Sompura craftsman carving intricately decorated pink sandstone pillar next to precision digital surveying equipment and stone blocks, dramatic high-contrast golden hour lighting, cinematic architectural monograph style"
                  src={IMG.artisanCarving}
                />{" "}
                <div className="relative z-10 flex flex-col gap-space-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                    Atelier No. 02 · Bayana Hub
                  </span>{" "}
                  <h4 className="font-headline-sm text-headline-sm">
                    Pindwara & Bharatpur Lithic Reserves
                  </h4>{" "}
                  <p className="font-body-sm text-body-sm text-surface-container-high opacity-90">
                    {" "}
                    Holding over 25,000 metric tons of seasoned block stone ready for canonical
                    dress cutting and architectural assembly.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                {" "}
                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs">
                  {" "}
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[22px]">hardware</span>{" "}
                  </div>{" "}
                  <h5 className="font-title-editorial text-title-editorial text-on-surface">
                    5-Axis CNC Profile Routers
                  </h5>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Utilized strictly for bulk waste removal and primary block profiling, preserving
                    precious silpi hand energy for the divine, non-reproducible final Agamic relief
                    detailing.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs">
                  {" "}
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[22px]">view_in_ar</span>{" "}
                  </div>{" "}
                  <h5 className="font-title-editorial text-title-editorial text-on-surface">
                    Diamond Multi-Wire Gangsaws
                  </h5>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Capable of slicing 60-ton dense granite monoliths with smooth 0.3mm parallel
                    planarity, eliminating micro-fracturing common with percussion blasting
                    techniques.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs">
                  {" "}
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[22px]">sensors</span>{" "}
                  </div>{" "}
                  <h5 className="font-title-editorial text-title-editorial text-on-surface">
                    Sub-mm LiDAR Metrology
                  </h5>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Field scanners capturing 2 million points per second, constructing a digital
                    twin of every shikhara layer before blocks leave the desert atelier for
                    consecration.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs">
                  {" "}
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[22px]">history_edu</span>{" "}
                  </div>{" "}
                  <h5 className="font-title-editorial text-title-editorial text-on-surface">
                    Parametric Ayadi Calculators
                  </h5>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Custom mathematical algorithms engineered in-house to validate the 6 core Vastu
                    proportions in real time across structural CAD iterations.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* From Raw Stone to Crafted Architecture: Industrial Fabrication & Site Execution */}
        <CraftsmanshipGallery
          allowedCategories={["fabrication-construction"]}
          initialCategory="fabrication-construction"
          title="From Raw Stone to Crafted Architecture: Industrial Fabrication & Site Execution"
          subtitle="Documenting the journey from quarry extraction and diamond wire sawing to monolithic fabrication ateliers, precision bridge saws, dressed staging blocks, and on-site crane placement."
          badge="Lithic Fabrication & Site Execution"
          showFilters={false}
        />
        <section className="w-full py-space-xl px-gutter bg-charcoal-monolith text-on-primary">
          {" "}
          <div className="max-w-[1320px] mx-auto flex flex-col gap-space-xl">
            {" "}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              {" "}
              <div className="flex flex-col gap-space-xs">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-widest text-on-tertiary-container">
                  The Canonical Execution Pathway
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-surface-bright">
                  7-Stage Monolithic Temple Construction Cycle
                </h2>{" "}
              </div>{" "}
              <p className="font-body-sm text-body-sm text-surface-container-high opacity-80 max-w-md">
                {" "}
                Explore each operational checkpoint from initial patron vision alignment to the
                sacred Prana Pratishtha consecration ceremony.{" "}
              </p>{" "}
            </div>{" "}
            <div
              className="flex items-center overflow-x-auto pb-space-xs gap-space-xs"
              id="stageTabs"
            >
              {" "}
              <button
                className="stage-tab px-space-md py-space-sm bg-primary text-on-primary rounded-lg font-label-monument text-label-monument uppercase tracking-wider whitespace-nowrap transition-all duration-200"
                id="tab-1"
                onClick={(e) => S.current.h0?.(e)}
              >
                {" "}
                Stage 01 · Consultation{" "}
              </button>{" "}
              <button
                className="stage-tab px-space-md py-space-sm bg-surface-container-highest/20 text-surface-container-high rounded-lg font-label-monument text-label-monument uppercase tracking-wider whitespace-nowrap hover:bg-surface-container-highest/40 transition-all duration-200"
                id="tab-2"
                onClick={(e) => S.current.h1?.(e)}
              >
                {" "}
                Stage 02 · Planning & Ayadi{" "}
              </button>{" "}
              <button
                className="stage-tab px-space-md py-space-sm bg-surface-container-highest/20 text-surface-container-high rounded-lg font-label-monument text-label-monument uppercase tracking-wider whitespace-nowrap hover:bg-surface-container-highest/40 transition-all duration-200"
                id="tab-3"
                onClick={(e) => S.current.h2?.(e)}
              >
                {" "}
                Stage 03 · Quarry Petrology{" "}
              </button>{" "}
              <button
                className="stage-tab px-space-md py-space-sm bg-surface-container-highest/20 text-surface-container-high rounded-lg font-label-monument text-label-monument uppercase tracking-wider whitespace-nowrap hover:bg-surface-container-highest/40 transition-all duration-200"
                id="tab-4"
                onClick={(e) => S.current.h3?.(e)}
              >
                {" "}
                Stage 04 · Sompura Chiseling{" "}
              </button>{" "}
              <button
                className="stage-tab px-space-md py-space-sm bg-surface-container-highest/20 text-surface-container-high rounded-lg font-label-monument text-label-monument uppercase tracking-wider whitespace-nowrap hover:bg-surface-container-highest/40 transition-all duration-200"
                id="tab-5"
                onClick={(e) => S.current.h4?.(e)}
              >
                {" "}
                Stage 05 · Dry-Stone Assembly{" "}
              </button>{" "}
              <button
                className="stage-tab px-space-md py-space-sm bg-surface-container-highest/20 text-surface-container-high rounded-lg font-label-monument text-label-monument uppercase tracking-wider whitespace-nowrap hover:bg-surface-container-highest/40 transition-all duration-200"
                id="tab-6"
                onClick={(e) => S.current.h5?.(e)}
              >
                {" "}
                Stage 06 · Calibration & QA{" "}
              </button>{" "}
              <button
                className="stage-tab px-space-md py-space-sm bg-surface-container-highest/20 text-surface-container-high rounded-lg font-label-monument text-label-monument uppercase tracking-wider whitespace-nowrap hover:bg-surface-container-highest/40 transition-all duration-200"
                id="tab-7"
                onClick={(e) => S.current.h6?.(e)}
              >
                {" "}
                Stage 07 · Consecration & Handover{" "}
              </button>{" "}
            </div>{" "}
            <div className="bg-surface-container-highest/10 p-space-xl rounded-xl">
              {" "}
              <div
                className="stage-panel grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
                id="stage-panel-1"
              >
                {" "}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  {" "}
                  <div className="flex items-center gap-space-xs text-on-tertiary-container">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">groups</span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest">
                      Stage 01 Protocol · Initial Engagement
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-lg text-headline-lg text-surface-bright">
                    Patron Trust Alignment & Astro-Geodetic Survey
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
                    {" "}
                    We begin with a multi-day consultative symposium between your Board of Trustees,
                    Hereditary Sthapatis, and our Chief Geotechnical Engineer. We inspect the sacred
                    geography, determine the true cardinal orientation via classical Shanku
                    shadow-casting, and map the deity sanctum requirements.{" "}
                  </p>{" "}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    {" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Key Deliverable
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        Vastu Site Feasibility Audit & Trust Charter
                      </span>{" "}
                    </div>{" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Engineering Milestone
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        {"Borehole Geotech Soil Bearing Test (>350 kPa)"}
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 relative h-72 rounded-xl overflow-hidden shadow-xl">
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Traditional Indian temple architects and modern engineers reviewing topographic blueprints and Vastu Purusha Mandala diagrams on an elevated outdoor temple site at sunrise, soft golden lighting, architectural photography"
                    src={IMG.engineersReview}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div
                className="stage-panel hidden grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
                id="stage-panel-2"
              >
                {" "}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  {" "}
                  <div className="flex items-center gap-space-xs text-on-tertiary-container">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">calculate</span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest">
                      Stage 02 Protocol · Mathematical Modeling
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-lg text-headline-lg text-surface-bright">
                    Ayadi Shadvarga Computation & 3D Parametric BIM
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
                    {" "}
                    Canonical dimensional formulas from the Brihat Samhita and Manasara are
                    resolved. The dimensions of the Garbhagriha, Jagati plinth, and Shikhara apex
                    are locked into an inseparable mathematical whole, generating the master
                    parametric digital model.{" "}
                  </p>{" "}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    {" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Key Deliverable
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        Validated Ayadi Auspicious Proportions Plate
                      </span>{" "}
                    </div>{" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Engineering Milestone
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        Dynamic 3D Structural BIM with Stone ID Coding
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 relative h-72 rounded-xl overflow-hidden shadow-xl">
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Complex 3D wireframe and architectural CAD model of a grand multi-tiered Nagara temple shikhara glowing on dark architectural workstation screens, high technical detail, blueprint aesthetics"
                    src={IMG.cadModel}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div
                className="stage-panel hidden grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
                id="stage-panel-3"
              >
                {" "}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  {" "}
                  <div className="flex items-center gap-space-xs text-on-tertiary-container">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">terrain</span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest">
                      Stage 03 Protocol · Material Selection
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-lg text-headline-lg text-surface-bright">
                    Quarry Extraction & Ultrasonic Petrologic Screening
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
                    {" "}
                    Blocks are hand-inspected at deep Rajasthan and Deccan granite quarries.
                    Certified lithic technicians perform non-destructive ultrasonic pulse velocity
                    (UPV) tests on every extracted monolith to guarantee 100% absence of hidden
                    internal hairline veins.{" "}
                  </p>{" "}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    {" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Key Deliverable
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        Certified Quarry Provenance Dossier
                      </span>{" "}
                    </div>{" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Engineering Milestone
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        Compressive Testing Exceeding 120 MPa
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 relative h-72 rounded-xl overflow-hidden shadow-xl">
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Enormous blocks of rose-pink sandstone at an open-pit geological quarry under clear desert sky, geotechnical inspector checking stone with testing equipment, cinematic industrial lighting"
                    src={IMG.quarry}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div
                className="stage-panel hidden grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
                id="stage-panel-4"
              >
                {" "}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  {" "}
                  <div className="flex items-center gap-space-xs text-on-tertiary-container">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">draw</span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest">
                      Stage 04 Protocol · Guild Sculpting
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-lg text-headline-lg text-surface-bright">
                    Hereditary Sompura Chiseling & Dry-Dock Pre-Fitting
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
                    {" "}
                    Over 350 silpis carve the raw blocks inside our four regional fabrication
                    ateliers. Intricate ceiling mandapas, lotus medallions, and column capitals are
                    pre-assembled on temporary laser-leveled dry-dock floors to verify joinery
                    before transit.{" "}
                  </p>{" "}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    {" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Key Deliverable
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        Iconometric Agamic Sthapati Approval Stamp
                      </span>{" "}
                    </div>{" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Engineering Milestone
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        Zero-Mortar Dry-Dock Alignment Confirmation
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 relative h-72 rounded-xl overflow-hidden shadow-xl">
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Detailed close-up of an elderly master stone silpi artisan carefully using steel hammer and chisel to carve divine sacred motifs into smooth sandstone pillar, soft sunlight dust motes, documentary craftsmanship"
                    src={IMG.sandstonePillar}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div
                className="stage-panel hidden grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
                id="stage-panel-5"
              >
                {" "}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  {" "}
                  <div className="flex items-center gap-space-xs text-on-tertiary-container">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">foundation</span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest">
                      Stage 05 Protocol · Gravity Plinth Erection
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-lg text-headline-lg text-surface-bright">
                    Interlocking Dry-Stone Assembly & Heavy Hoisting
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
                    {" "}
                    Numbered stones arrive on site in sequenced order. High-tonnage hydraulic cranes
                    lower columns and lintels into keyed mortise-and-tenon sockets with 0.5mm
                    precision. Gravity compression creates a unified, self-dampening stone
                    mass.{" "}
                  </p>{" "}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    {" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Key Deliverable
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        Erection Survey Log & Joint Deviation Map
                      </span>{" "}
                    </div>{" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Engineering Milestone
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        Stainless Steel SS316 Non-Corrosive Doweling
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 relative h-72 rounded-xl overflow-hidden shadow-xl">
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Massive carved temple pillars being lifted into position by specialized crawler cranes onto a multi-tiered sandstone plinth at a grand temple construction site under dramatic skies"
                    src={IMG.stoneHoisting}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div
                className="stage-panel hidden grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
                id="stage-panel-6"
              >
                {" "}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  {" "}
                  <div className="flex items-center gap-space-xs text-on-tertiary-container">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">biotech</span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest">
                      Stage 06 Protocol · Seismic Validation
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-lg text-headline-lg text-surface-bright">
                    Digital Plumb-Line Audit & Resonance Testing
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
                    {" "}
                    Full 3D LiDAR point clouds of the erected superstructure are checked against BIM
                    nominals. We conduct dynamic resonance and wind shear simulations to ensure the
                    completed shikhara tower naturally dissipates environmental kinetic energy.{" "}
                  </p>{" "}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    {" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Key Deliverable
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        Structural Safety Compliance Certification
                      </span>{" "}
                    </div>{" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Engineering Milestone
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        Seismic Zone V Tolerance Verification
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 relative h-72 rounded-xl overflow-hidden shadow-xl">
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Technical engineer operating laser electronic theodolite measuring vertical alignment of a soaring monolithic stone temple shikhara, dusk atmosphere, professional architectural measurement"
                    src={IMG.constructionSite}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div
                className="stage-panel hidden grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
                id="stage-panel-7"
              >
                {" "}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  {" "}
                  <div className="flex items-center gap-space-xs text-on-tertiary-container">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">auto_awesome</span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest">
                      Stage 07 Protocol · Sacred Transition
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-lg text-headline-lg text-surface-bright">
                    Prana Pratishtha Consecration & Monument Deed Transfer
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
                    {" "}
                    With civil construction certified, the complex is handed over for the sacred
                    Kumbhabhishekam or Prana Pratishtha Vedic rites. VVS provides the Temple Trust
                    with the Monument Living Deed, including lifetime maintenance protocols.{" "}
                  </p>{" "}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    {" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Key Deliverable
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        The 1000-Year Temple Monograph & Living Deed
                      </span>{" "}
                    </div>{" "}
                    <div className="p-space-sm bg-charcoal-monolith rounded-lg flex flex-col gap-1">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase text-secondary-container">
                        Engineering Milestone
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-primary">
                        Formal Handover to Patron Trust Council
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-5 relative h-72 rounded-xl overflow-hidden shadow-xl">
                  {" "}
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Solemn Hindu temple consecration Kumbhabhishekam ritual with golden kalasha pots atop stone shikhara, sacred flags waving in gentle wind, divine reverence atmosphere, warm dawn light"
                    src={IMG.goldenKalasha}
                  />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-space-xl px-gutter bg-surface">
          {" "}
          <div className="max-w-[1320px] mx-auto flex flex-col gap-space-lg">
            {" "}
            <div className="bg-surface-container-low p-space-xl rounded-xl shadow-xs flex flex-col lg:flex-row gap-space-xl items-center justify-between">
              {" "}
              <div className="flex flex-col gap-space-sm max-w-2xl">
                {" "}
                <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded-DEFAULT w-fit">
                  {" "}
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    verified
                  </span>{" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary">
                    Non-Destructive Testing Spec
                  </span>{" "}
                </div>{" "}
                <h3 className="font-headline-md text-headline-md text-primary">
                  The VVS Millennial Durability Covenant
                </h3>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" "}
                  Why do standard reinforced concrete temples deteriorate in 70 years while ancient
                  Chola and Chandela shrines endure for millennia? Explore our structural comparison
                  matrix between conventional reinforced concrete and dry-stone interlocking
                  masonry.{" "}
                </p>{" "}
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs font-label-ui text-label-ui uppercase tracking-wider">
                  {" "}
                  <div className="flex items-center gap-space-xs text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>{" "}
                    <span>Zero Rust Jacking</span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-space-xs text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>{" "}
                    <span>Self-Aligning Mortise Joints</span>{" "}
                  </div>{" "}
                  <div className="flex items-center gap-space-xs text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>{" "}
                    <span>Porous Evaporative Breathability</span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="w-full lg:w-96 bg-card-elevated p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm">
                {" "}
                <div className="flex items-center justify-between pb-space-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase text-on-surface-variant">
                    Petrologic Thresholds
                  </span>{" "}
                  <span className="font-label-monument text-label-monument text-secondary uppercase">
                    Code IS 516
                  </span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
                  {" "}
                  <div className="flex justify-between py-1">
                    {" "}
                    <span className="text-on-surface-variant">Compressive Strength</span>{" "}
                    <span className="font-semibold text-primary">{"> 120 N/mm²"}</span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1">
                    {" "}
                    <span className="text-on-surface-variant">Water Absorption Rate</span>{" "}
                    <span className="font-semibold text-primary">{"< 1.2% by weight"}</span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1">
                    {" "}
                    <span className="text-on-surface-variant">Specific Gravity</span>{" "}
                    <span className="font-semibold text-primary">2.65 - 2.75</span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1">
                    {" "}
                    <span className="text-on-surface-variant">Pulse Velocity (UPV)</span>{" "}
                    <span className="font-semibold text-primary">{"> 4,500 m/s"}</span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1">
                    {" "}
                    <span className="text-on-surface-variant">Carbon Footprint Index</span>{" "}
                    <span className="font-semibold text-secondary">-78% vs RCC</span>{" "}
                  </div>{" "}
                </div>{" "}
                <button
                  className="w-full mt-space-xs py-space-sm bg-surface-container hover:bg-surface-variant text-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider flex items-center justify-center gap-space-xs transition-colors"
                  onClick={(e) => S.current.h7?.(e)}
                >
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">download</span>{" "}
                  <span>Technical Lithic Spec Sheet</span>{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-space-xl px-gutter bg-surface-container-high">
          {" "}
          <div className="max-w-[1320px] mx-auto bg-card-elevated rounded-xl shadow-xl p-space-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            {" "}
            <div className="flex flex-col gap-space-sm max-w-2xl">
              {" "}
              <div className="flex items-center gap-space-xs">
                {" "}
                <span className="material-symbols-outlined text-primary text-[24px]">
                  account_balance
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary">
                  Temple Trust Advisory Directorate
                </span>{" "}
              </div>{" "}
              <h2 className="font-headline-md text-headline-md text-primary">
                Consult With Our Chief Structural Engineers & Hereditary Sthapatis
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" "}
                Whether planning a major greenfield pilgrimage complex or restoring an ancient
                vulnerable sanctum, engage our accredited technical council for a comprehensive
                Ayadi alignment and soil feasibility review.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto">
              {" "}
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-primary hover:bg-primary-container text-on-primary rounded-lg shadow-xs transition-all duration-200"
              >
                {" "}
                <span className="font-label-ui text-label-ui uppercase tracking-wider text-on-primary">
                  Schedule Technical Advisory
                </span>{" "}
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>{" "}
              </Link>{" "}
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-surface-container hover:bg-surface-variant text-primary rounded-lg transition-all duration-200"
                onClick={(e) => S.current.h8?.(e)}
              >
                {" "}
                <span className="font-label-ui text-label-ui uppercase tracking-wider">
                  Download Monograph (PDF)
                </span>{" "}
                <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>{" "}
    </main>
  );
}

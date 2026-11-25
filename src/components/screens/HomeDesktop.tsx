import { Link } from "@tanstack/react-router";
import { IMG } from "@/components/site/images";

/* Generated from the Stitch design export (screen 01). */
export function HomeDesktopScreen() {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        {" "}
        <section className="relative w-full -mt-20 overflow-hidden bg-charcoal-monolith min-h-[920px] flex items-center justify-center">
          {" "}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-40 scale-105 transition-transform duration-1000 ease-out"
            data-alt="Magnificent towering carved sandstone temple shikhara reaching into a twilight amber sky during sacred golden hour. Intricate relief sculptures of celestial deities and rhythmic Dravidian and Nagara stone tiers, warm illuminated atmospheric mist, deep cinematic shadows, editorial architectural monograph aesthetic."
            style={{ backgroundImage: `url(${IMG.heroShikhara})` }}
          ></div>{" "}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith via-charcoal-monolith/60 to-charcoal-monolith/80"></div>{" "}
          <div className="absolute inset-0 bg-radial from-transparent via-primary-container/20 to-charcoal-monolith/95 pointer-events-none"></div>{" "}
          <div className="relative z-10 max-w-7xl mx-auto px-gutter pt-36 pb-28 flex flex-col items-center text-center">
            {" "}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-4xl bg-surface/10 backdrop-blur-md mb-8 shadow-xs">
              {" "}
              <span className="w-1.5 h-1.5 rounded-4xl bg-saffron"></span>{" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.25em] text-saffron font-semibold">
                Temple Construction • Sacred Architecture • Heritage
              </span>{" "}
              <span className="w-1.5 h-1.5 rounded-4xl bg-saffron"></span>{" "}
            </div>{" "}
            <h1 className="font-display-hero text-display-hero text-ivory max-w-5xl tracking-tight leading-[1.12] mb-6 drop-shadow-sm">
              {" "}
              Building Sacred Landmarks.
              <br />{" "}
              <span className="italic font-display-hero text-sandstone-surface">
                Preserving Timeless Heritage.
              </span>{" "}
            </h1>{" "}
            <p className="font-body-lg text-body-lg text-ivory/80 max-w-3xl leading-relaxed mb-10 font-light">
              {" "}
              Temple Construction, Architectural Planning, Stone Craftsmanship and Heritage-Focused
              Project Execution rooted in timeless Shilpa Shastras and modern structural
              engineering.{" "}
            </p>{" "}
            <div className="flex flex-wrap items-center justify-center gap-5">
              {" "}
              <a
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-saffron text-on-primary font-label-ui text-label-ui uppercase tracking-wider font-semibold rounded-lg shadow-md hover:bg-on-tertiary-fixed-variant transition-all group"
                href="#disciplines"
              >
                {" "}
                <span>Explore Our Expertise</span>{" "}
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>{" "}
              </a>{" "}
              <a
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-surface/10 hover:bg-surface/20 text-ivory backdrop-blur-md font-label-ui text-label-ui uppercase tracking-wider font-semibold rounded-lg shadow-xs transition-all"
                href="#consultation"
              >
                {" "}
                <span>Discuss Your Project</span>{" "}
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                  temple_hindu
                </span>{" "}
              </a>{" "}
            </div>{" "}
            <div className="mt-20 flex flex-col items-center gap-2 select-none opacity-80 hover:opacity-100 transition-opacity">
              {" "}
              <span className="font-label-monument text-[10px] tracking-[0.22em] text-sandstone-surface uppercase">
                Scroll to Explore
              </span>{" "}
              <div className="w-px h-10 bg-gradient-to-b from-gold via-saffron to-transparent animate-pulse"></div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="relative z-20 max-w-7xl mx-auto px-gutter -mt-12 w-full">
          {" "}
          <div className="bg-card-elevated rounded-xl shadow-xl p-8 lg:p-10">
            {" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 sm:divide-x-0">
              {" "}
              <div className="flex flex-col items-center text-center px-4">
                {" "}
                <div className="flex items-baseline gap-1 text-primary-container">
                  {" "}
                  <span className="font-display-hero text-[46px] leading-none font-bold">
                    20
                  </span>{" "}
                  <span className="font-title-editorial text-[32px] font-bold text-saffron">
                    +
                  </span>{" "}
                </div>{" "}
                <span className="font-title-editorial text-[16px] text-on-surface font-semibold mt-2">
                  Years of Craftsmanship
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Unbroken Vedic lineage and sthapati discipline
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
                {" "}
                <div className="flex items-baseline gap-1 text-primary-container">
                  {" "}
                  <span className="font-display-hero text-[46px] leading-none font-bold">
                    36
                  </span>{" "}
                  <span className="font-title-editorial text-[32px] font-bold text-saffron">
                    +
                  </span>{" "}
                </div>{" "}
                <span className="font-title-editorial text-[16px] text-on-surface font-semibold mt-2">
                  Monumental Sanctuaries
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Executed across major pilgrimage axes
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
                {" "}
                <div className="flex items-baseline gap-1 text-primary-container">
                  {" "}
                  <span className="font-display-hero text-[46px] leading-none font-bold">
                    10
                  </span>{" "}
                  <span className="font-title-editorial text-[32px] font-bold text-saffron">
                    +
                  </span>{" "}
                </div>{" "}
                <span className="font-title-editorial text-[16px] text-on-surface font-semibold mt-2">
                  States Across India
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  From Himalayan shrines to Southern gopurams
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
                {" "}
                <div className="flex items-baseline gap-1 text-primary-container">
                  {" "}
                  <span className="font-display-hero text-[46px] leading-none font-bold">
                    350
                  </span>{" "}
                  <span className="font-title-editorial text-[32px] font-bold text-saffron">
                    +
                  </span>{" "}
                </div>{" "}
                <span className="font-title-editorial text-[16px] text-on-surface font-semibold mt-2">
                  Sompura Artisans & Engineers
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Master sculptors, vastu carvers & CAD masters
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left bg-surface-container-low rounded-lg px-6 py-3">
              {" "}
              <div className="flex items-center gap-2 text-primary-container">
                {" "}
                <span className="material-symbols-outlined text-[20px] text-secondary">
                  verified_user
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-on-surface-variant">
                  Vastu Purusha Mandala Compliant • Non-Destructive Stone Diagnostics
                </span>{" "}
              </div>{" "}
              <span className="font-body-sm text-body-sm text-on-surface-variant italic">
                Documented across 20+ years of dedicated sacred stonework.
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-24 bg-surface">
          {" "}
          <div className="max-w-7xl mx-auto px-gutter">
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {" "}
              <div className="lg:col-span-6 relative">
                {" "}
                <div className="grid grid-cols-12 gap-4">
                  {" "}
                  <div className="col-span-7 bg-surface-container rounded-xl overflow-hidden shadow-md group">
                    {" "}
                    <div
                      className="w-full h-80 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      data-alt="Sepia toned archival Vastu architectural drawing and classical temple elevation blueprint with geometric Mandala grid guidelines, precise Sanskrit sthapati notes, hand-drafted stone joinery measurements."
                      style={{ backgroundImage: `url(${IMG.vastuBlueprint})` }}
                    ></div>{" "}
                    <div className="p-3 bg-card-elevated text-center">
                      {" "}
                      <span className="font-label-monument text-[10px] tracking-widest uppercase text-on-surface-variant">
                        Plate I • Vastu Purusha Mandala Grid Drafting
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-span-5 -mt-6 bg-sandstone-surface rounded-xl overflow-hidden shadow-lg group">
                    {" "}
                    <div
                      className="w-full h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      data-alt="Exquisitely hand-chiseled Bansi Paharpur pink sandstone temple pillar with deep three-dimensional motifs of lotus petals, yakshas, and intricate geometric friezes in razor-sharp focal clarity, studio side lighting."
                      style={{ backgroundImage: `url(${IMG.sandstonePillar})` }}
                    ></div>{" "}
                    <div className="p-3 bg-card-elevated text-center">
                      {" "}
                      <span className="font-label-monument text-[10px] tracking-widest uppercase text-on-surface-variant">
                        Plate II • Hand-Hewn Pink Sandstone Pillar
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="absolute -bottom-6 -left-4 bg-card-elevated p-3.5 rounded-xl shadow-lg flex items-center gap-3 border border-gold/20">
                  <img
                    alt="VVS Corporate Crest"
                    className="w-16 h-12 object-contain"
                    src={IMG.crest}
                  />
                  <div>
                    {" "}
                    <p className="font-title-editorial text-[14px] leading-tight font-bold text-primary-container">
                      Sacred Shilpa Guild
                    </p>{" "}
                    <p className="font-label-monument text-[9px] uppercase tracking-wider text-secondary">
                      Accredited Heritage Builders
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-6 flex flex-col justify-center">
                {" "}
                <div className="inline-flex items-center gap-2 mb-3">
                  {" "}
                  <span className="h-px w-8 bg-secondary"></span>{" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-primary-container font-bold">
                    The Sacred Craft
                  </span>{" "}
                </div>{" "}
                <h2 className="font-headline-lg text-headline-lg text-primary-container leading-tight mb-6">
                  {" "}
                  Where Devotion Meets <br />{" "}
                  <span className="italic text-secondary">Precision Engineering</span>{" "}
                </h2>{" "}
                <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" "}
                  <p>
                    {" "}
                    For centuries, the sacred shrines of Bharat have stood as metaphysical
                    instruments—conduits connecting cosmic geometry with human devotion. At{" "}
                    <strong className="text-on-surface font-semibold">
                      Vishwa Vaidika Sanatan
                    </strong>
                    , we safeguard this sacred lineage not as mere stone masons, but as consecrated
                    custodians of the living Shilpa Shastra tradition.{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    Our master Sthapatis and Sompura craftsmen harmonize the canonical rules of the{" "}
                    <em>Manasara</em> and <em>Mayamata</em> with cutting-edge 3D photogrammetric
                    stone scanning, computerized finite element stress modeling, and dry-joint
                    dry-stone interlocking systems engineered to withstand seismic forces for a
                    millennium.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6">
                  {" "}
                  <div className="flex items-start gap-3">
                    {" "}
                    <span className="material-symbols-outlined text-saffron text-[20px] mt-0.5">
                      check_circle
                    </span>{" "}
                    <div>
                      {" "}
                      <h4 className="font-title-editorial text-[15px] font-bold text-on-surface">
                        1,000-Year Structural Life
                      </h4>{" "}
                      <p className="font-body-sm text-[12px] text-on-surface-variant">
                        Zero structural iron; interlocking stone joints.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start gap-3">
                    {" "}
                    <span className="material-symbols-outlined text-saffron text-[20px] mt-0.5">
                      check_circle
                    </span>{" "}
                    <div>
                      {" "}
                      <h4 className="font-title-editorial text-[15px] font-bold text-on-surface">
                        Geomantic Site Harmonization
                      </h4>{" "}
                      <p className="font-body-sm text-[12px] text-on-surface-variant">
                        True solar azimuth alignment via Vastu Purusha.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mt-8 p-5 bg-sandstone-surface/30 rounded-xl flex items-center gap-4">
                  {" "}
                  <span className="material-symbols-outlined text-primary text-[36px] opacity-70">
                    format_quote
                  </span>{" "}
                  <p className="font-title-editorial italic text-[16px] text-primary-container leading-snug">
                    {" "}
                    “The temple is not merely a hall of prayer; it is the visible body of the Divine
                    manifested in unyielding stone.”{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-24 bg-surface-container-low" id="disciplines">
          {" "}
          <div className="max-w-7xl mx-auto px-gutter">
            {" "}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              {" "}
              <div>
                {" "}
                <div className="inline-flex items-center gap-2 mb-2">
                  {" "}
                  <span className="h-px w-8 bg-saffron"></span>{" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-saffron font-semibold">
                    Specialized Practices
                  </span>{" "}
                </div>{" "}
                <h2 className="font-headline-lg text-headline-lg text-primary-container">
                  {" "}
                  Monumental Disciplines{" "}
                </h2>{" "}
              </div>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                {" "}
                Synthesizing sacred Vedic geometry with quarry-to-sanctum engineering rigor across
                three foundational pillars.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {" "}
              <div className="bg-card-elevated rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 flex flex-col">
                {" "}
                <div className="relative h-64 overflow-hidden bg-charcoal-monolith">
                  {" "}
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    data-alt="Pristine white marble and warm sandstone monolithic temple sanctum under construction with heavy scaffolding, massive stone lintels being hoisted, sunlit marble pillars and intricately carved mandapa ceiling."
                    style={{ backgroundImage: `url(${IMG.constructionSite})` }}
                  ></div>{" "}
                  <div className="absolute top-4 left-4 bg-primary-container/90 backdrop-blur-xs px-3 py-1 rounded-xs text-on-primary font-label-monument text-[10px] uppercase tracking-widest font-semibold">
                    {" "}
                    Shilpa Execution{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-8 flex flex-col flex-1 justify-between">
                  {" "}
                  <div>
                    {" "}
                    <h3 className="font-headline-sm text-headline-sm text-primary-container mb-3 group-hover:text-saffron transition-colors">
                      {" "}
                      Complete Temple Construction{" "}
                    </h3>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                      {" "}
                      Turnkey development of Nagara, Dravidian, and Vesara sanctuaries. From quarry
                      block extraction in Rajasthan to Garbhagriha consecration and
                      Kumbhabhishekam.{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="pt-4 flex items-center justify-between">
                    {" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                      Nagara • Dravidian • Vesara
                    </span>{" "}
                    <Link
                      to="/services/temple-construction"
                      className="inline-flex items-center gap-1.5 font-label-ui text-label-ui text-primary-container font-bold hover:text-saffron transition-colors"
                    >
                      {" "}
                      <span>View Discipline</span>{" "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 flex flex-col">
                {" "}
                <div className="relative h-64 overflow-hidden bg-charcoal-monolith">
                  {" "}
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    data-alt="Majestic multi-tiered south Indian Rajagopuram temple entrance gateway tower rising dramatically into the blue sky, densely ornamented with colorful stucco divine figures and crowned with gilded kalashams."
                    style={{ backgroundImage: `url(${IMG.rajagopuram})` }}
                  ></div>{" "}
                  <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-xs px-3 py-1 rounded-xs text-on-secondary font-label-monument text-[10px] uppercase tracking-widest font-semibold">
                    {" "}
                    Monumental Gateways{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-8 flex flex-col flex-1 justify-between">
                  {" "}
                  <div>
                    {" "}
                    <h3 className="font-headline-sm text-headline-sm text-primary-container mb-3 group-hover:text-saffron transition-colors">
                      {" "}
                      Rajagopuram & Gateway Engineering{" "}
                    </h3>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                      {" "}
                      Structural design and monumental masonry for sky-piercing gateway towers.
                      Specialized in tiered wind-load stabilization, load-bearing granite foundation
                      plinths, and gold-plated Kalash installations.{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="pt-4 flex items-center justify-between">
                    {" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                      Tiered Tower Engineering
                    </span>{" "}
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 font-label-ui text-label-ui text-primary-container font-bold hover:text-saffron transition-colors"
                    >
                      {" "}
                      <span>View Discipline</span>{" "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 flex flex-col">
                {" "}
                <div className="relative h-64 overflow-hidden bg-charcoal-monolith">
                  {" "}
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    data-alt="Conservation master artisan delicately restoring ancient weathered temple sandstone relief using soft natural fiber tools, lime mortar consolidation, and non-invasive stone preservation in a sunlit courtyard."
                    style={{ backgroundImage: `url(${IMG.restoration})` }}
                  ></div>{" "}
                  <div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-xs px-3 py-1 rounded-xs text-on-tertiary font-label-monument text-[10px] uppercase tracking-widest font-semibold">
                    {" "}
                    Archaeological Revival{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-8 flex flex-col flex-1 justify-between">
                  {" "}
                  <div>
                    {" "}
                    <h3 className="font-headline-sm text-headline-sm text-primary-container mb-3 group-hover:text-saffron transition-colors">
                      {" "}
                      Heritage Restoration & Renovation{" "}
                    </h3>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
                      {" "}
                      Archaeological-grade stone consolidation, chemical desalination, anastylosis
                      reassembly, and structural re-anchoring of sacred historic monuments without
                      compromising sanctum sanctity.{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="pt-4 flex items-center justify-between">
                    {" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                      Anastylosis • Stone Preservation
                    </span>{" "}
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 font-label-ui text-label-ui text-primary-container font-bold hover:text-saffron transition-colors"
                    >
                      {" "}
                      <span>View Discipline</span>{" "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-24 bg-charcoal-monolith text-ivory relative overflow-hidden" id="craft-heritage">
          {" "}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-container/20 rounded-4xl blur-3xl pointer-events-none"></div>{" "}
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-saffron/10 rounded-4xl blur-3xl pointer-events-none"></div>{" "}
          <div className="max-w-7xl mx-auto px-gutter relative z-10">
            {" "}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-stone-hairline/20 pb-8">
              {" "}
              <div>
                {" "}
                <div className="inline-flex items-center gap-2 mb-2">
                  {" "}
                  <span className="h-px w-8 bg-saffron"></span>{" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-saffron">
                    Our Craft. Our Heritage.
                  </span>{" "}
                </div>{" "}
                <h2 className="font-headline-lg text-headline-lg text-ivory">
                  {" "}
                  The Art of Monumental Stonecraft{" "}
                </h2>{" "}
              </div>{" "}
              <div className="flex flex-col md:items-end gap-2 max-w-md">
                {" "}
                <p className="font-body-md text-body-md text-sandstone-surface/80 leading-relaxed md:text-right">
                  From sacred temple structures to intricate stone detailing, explore the materials, artistry and architectural elements behind timeless craftsmanship.
                </p>{" "}
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 font-label-ui text-[12px] text-saffron hover:text-secondary-fixed transition-colors uppercase tracking-wider font-semibold"
                >
                  <span>Explore Complete Visual Archive</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Red Sandstone Temple Sanctuary */}
              <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-xl group relative min-h-[340px] flex flex-col justify-end p-6 border border-stone-hairline/20">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  data-alt="Red Sandstone Temple Sanctuary crafted in traditional Nagara style with intricate tiered shikhara, carved mandapa columns and ornamental chhatris."
                  style={{ backgroundImage: `url(${IMG.redSandstoneTemple})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith via-charcoal-monolith/60 to-transparent"></div>
                <div className="relative z-10">
                  <span className="px-2.5 py-0.5 rounded-xs bg-saffron text-on-primary font-label-monument text-[10px] uppercase font-semibold">
                    Temple Architecture
                  </span>
                  <h3 className="font-headline-sm text-[20px] text-ivory font-serif mt-2 mb-1">
                    Red Sandstone Sanctuary
                  </h3>
                  <p className="font-body-sm text-[12px] text-ivory/80 line-clamp-2">
                    Traditional tiered Latina-Sekhari shikhara spires and carved mandapa columns crafted in red sandstone.
                  </p>
                  <Link
                    to="/services/temple-construction"
                    className="inline-flex items-center gap-1 font-label-ui text-[11px] text-secondary-fixed font-semibold mt-3 hover:text-saffron transition-colors uppercase tracking-wider"
                  >
                    <span>View Construction Discipline</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 2: Monumental Temple Gateway */}
              <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-xl group relative min-h-[340px] flex flex-col justify-end p-6 border border-stone-hairline/20">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  data-alt="Monumental stone temple entrance gateway with monumental cusped archways, carved pilasters, and sacred motifs."
                  style={{ backgroundImage: `url(${IMG.templeEntranceGateway})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith via-charcoal-monolith/60 to-transparent"></div>
                <div className="relative z-10">
                  <span className="px-2.5 py-0.5 rounded-xs bg-primary-container text-on-primary font-label-monument text-[10px] uppercase font-semibold">
                    Gateways & Portals
                  </span>
                  <h3 className="font-headline-sm text-[20px] text-ivory font-serif mt-2 mb-1">
                    Monumental Entrance Gateway
                  </h3>
                  <p className="font-body-sm text-[12px] text-ivory/80 line-clamp-2">
                    Monolithic stone entrance gateway featuring monumental cusped arches, carved pilasters, and sacred motifs.
                  </p>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1 font-label-ui text-[11px] text-secondary-fixed font-semibold mt-3 hover:text-saffron transition-colors uppercase tracking-wider"
                  >
                    <span>View in Project Codex</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 3: Classical Stone Jharokha */}
              <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-xl group relative min-h-[340px] flex flex-col justify-end p-6 border border-stone-hairline/20">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  data-alt="Classical carved stone jharokha balcony pavilion with load-bearing stone corbel brackets, ornate balustrades, and cusped arches."
                  style={{ backgroundImage: `url(${IMG.traditionalZarokha})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith via-charcoal-monolith/60 to-transparent"></div>
                <div className="relative z-10">
                  <span className="px-2.5 py-0.5 rounded-xs bg-secondary text-on-secondary font-label-monument text-[10px] uppercase font-semibold">
                    Jharokha Balconies
                  </span>
                  <h3 className="font-headline-sm text-[20px] text-ivory font-serif mt-2 mb-1">
                    Classical Stone Jharokha
                  </h3>
                  <p className="font-body-sm text-[12px] text-ivory/80 line-clamp-2">
                    Cantilevered balcony pavilion with carved corbel brackets, ornate balustrades, and cusped decorative arches.
                  </p>
                  <Link
                    to="/architecture"
                    className="inline-flex items-center gap-1 font-label-ui text-[11px] text-secondary-fixed font-semibold mt-3 hover:text-saffron transition-colors uppercase tracking-wider"
                  >
                    <span>Inspect Stonework Details</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 4: Geometric Stone Jali Screen */}
              <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-xl group relative min-h-[340px] flex flex-col justify-end p-6 border border-stone-hairline/20">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  data-alt="Intricate geometric perforated stone jali lattice screen for sacred light diffusion."
                  style={{ backgroundImage: `url(${IMG.stoneJaliWork})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith via-charcoal-monolith/60 to-transparent"></div>
                <div className="relative z-10">
                  <span className="px-2.5 py-0.5 rounded-xs bg-primary-container text-on-primary font-label-monument text-[10px] uppercase font-semibold">
                    Stone Jali Screens
                  </span>
                  <h3 className="font-headline-sm text-[20px] text-ivory font-serif mt-2 mb-1">
                    Sacred Geometric Jali Work
                  </h3>
                  <p className="font-body-sm text-[12px] text-ivory/80 line-clamp-2">
                    Geometric pierced stone screens chiseled from single monoliths for sanctum light diffusion and ventilation.
                  </p>
                  <Link
                    to="/architecture"
                    className="inline-flex items-center gap-1 font-label-ui text-[11px] text-secondary-fixed font-semibold mt-3 hover:text-saffron transition-colors uppercase tracking-wider"
                  >
                    <span>Explore Lattice Craft</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 5: Monolithic Deepmal Tower */}
              <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-xl group relative min-h-[340px] flex flex-col justify-end p-6 border border-stone-hairline/20">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  data-alt="Monolithic carved deepmal lamp pillar with tiered bracket ledges for oil lamps during festive temple ceremonies."
                  style={{ backgroundImage: `url(${IMG.traditionalDeepmal})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith via-charcoal-monolith/60 to-transparent"></div>
                <div className="relative z-10">
                  <span className="px-2.5 py-0.5 rounded-xs bg-saffron text-on-primary font-label-monument text-[10px] uppercase font-semibold">
                    Deepmal Stambha
                  </span>
                  <h3 className="font-headline-sm text-[20px] text-ivory font-serif mt-2 mb-1">
                    Monolithic Deepmal Pillar
                  </h3>
                  <p className="font-body-sm text-[12px] text-ivory/80 line-clamp-2">
                    Ceremonial stone lamp tower hand-carved with cantilevered bracket ledges for oil lamps during sacred ceremonies.
                  </p>
                  <Link
                    to="/architecture"
                    className="inline-flex items-center gap-1 font-label-ui text-[11px] text-secondary-fixed font-semibold mt-3 hover:text-saffron transition-colors uppercase tracking-wider"
                  >
                    <span>View Stambha Details</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 6: Ornate Wall Relief Panels */}
              <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-xl group relative min-h-[340px] flex flex-col justify-end p-6 border border-stone-hairline/20">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  data-alt="Ornate architectural stone relief frieze with continuous registers of sacred foliate scrolls and traditional motifs."
                  style={{ backgroundImage: `url(${IMG.ornateStoneWall})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith via-charcoal-monolith/60 to-transparent"></div>
                <div className="relative z-10">
                  <span className="px-2.5 py-0.5 rounded-xs bg-secondary text-on-secondary font-label-monument text-[10px] uppercase font-semibold">
                    Carved Wall Panels
                  </span>
                  <h3 className="font-headline-sm text-[20px] text-ivory font-serif mt-2 mb-1">
                    Ornamental Wall Relief Panels
                  </h3>
                  <p className="font-body-sm text-[12px] text-ivory/80 line-clamp-2">
                    Continuous multi-band relief registers depicting sacred flora and traditional auspicious motifs.
                  </p>
                  <Link
                    to="/architecture"
                    className="inline-flex items-center gap-1 font-label-ui text-[11px] text-secondary-fixed font-semibold mt-3 hover:text-saffron transition-colors uppercase tracking-wider"
                  >
                    <span>Inspect Wall Panels</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>{" "}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-inverse-surface/60 rounded-xl">
              {" "}
              <div className="flex items-center gap-3">
                {" "}
                <span className="material-symbols-outlined text-saffron text-[24px]">
                  architecture
                </span>{" "}
                <div>
                  {" "}
                  <div className="font-title-editorial text-[15px] font-bold text-ivory">
                    100% Shilpa Canon
                  </div>{" "}
                  <div className="font-body-sm text-[12px] text-stone-hairline">
                    Zero theological deviation
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                {" "}
                <span className="material-symbols-outlined text-saffron text-[24px]">
                  straighten
                </span>{" "}
                <div>
                  {" "}
                  <div className="font-title-editorial text-[15px] font-bold text-ivory">
                    1mm Stone Tolerance
                  </div>{" "}
                  <div className="font-body-sm text-[12px] text-stone-hairline">
                    Interlocking tenon-mortise
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                {" "}
                <span className="material-symbols-outlined text-saffron text-[24px]">
                  verified
                </span>{" "}
                <div>
                  {" "}
                  <div className="font-title-editorial text-[15px] font-bold text-ivory">
                    Quarry Source Assured
                  </div>{" "}
                  <div className="font-body-sm text-[12px] text-stone-hairline">
                    Bansi, Jodhpur, Makrana
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                {" "}
                <span className="material-symbols-outlined text-saffron text-[24px]">
                  history_edu
                </span>{" "}
                <div>
                  {" "}
                  <div className="font-title-editorial text-[15px] font-bold text-ivory">
                    Pratishtha Support
                  </div>{" "}
                  <div className="font-body-sm text-[12px] text-stone-hairline">
                    Vedic ritual alignment
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-24 bg-surface relative" id="consultation">
          {" "}
          <div className="max-w-5xl mx-auto px-gutter">
            {" "}
            <div className="bg-card-elevated rounded-2xl p-8 md:p-14 shadow-xl relative overflow-hidden text-center">
              {" "}
              <div className="flex items-center justify-center gap-3 mb-6">
                {" "}
                <div className="w-12 h-px bg-secondary"></div>{" "}
                <span className="material-symbols-outlined text-saffron text-[22px]">
                  all_inclusive
                </span>{" "}
                <div className="w-12 h-px bg-secondary"></div>{" "}
              </div>{" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.25em] text-primary-container font-bold mb-3 block">
                {" "}
                Initiate Sacred Architecture{" "}
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-primary-container max-w-2xl mx-auto mb-6">
                {" "}
                Embark on a Sacred <br />{" "}
                <span className="italic text-secondary">Architectural Journey</span>{" "}
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed">
                {" "}
                Whether planning an expansive monumental temple complex, a community shrine, or
                restoring an ancient stone heritage structure, our chief Sthapatis and architectural
                directors are at your service.{" "}
              </p>{" "}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                {" "}
                <Link
                  to="/contact"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-saffron text-on-primary font-label-ui text-label-ui uppercase tracking-wider font-semibold rounded-lg shadow-md hover:bg-on-tertiary-fixed-variant transition-all"
                >
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>{" "}
                  <span>Schedule Sthapati Consultation</span>{" "}
                </Link>{" "}
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-surface-container hover:bg-surface-container-high text-primary-container font-label-ui text-label-ui uppercase tracking-wider font-semibold rounded-lg shadow-xs transition-all"
                  href="tel:+919941121111"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    call
                  </span>
                  <span>Direct Hotline: +91 99411 21111</span>
                </a>{" "}
              </div>{" "}
              <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-on-surface-variant font-body-sm text-[13px]">
                {" "}
                <div className="flex items-center gap-1.5">
                  {" "}
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    lock
                  </span>{" "}
                  <span>Confidential Patron & Trust Governance</span>{" "}
                </div>{" "}
                <span className="hidden sm:inline text-stone-hairline">•</span>{" "}
                <div className="flex items-center gap-1.5">
                  {" "}
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    location_on
                  </span>{" "}
                  <span>Headquarters: Pune, Maharashtra, India</span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>
    </main>
  );
}

import { Link } from "@tanstack/react-router";
import { IMG } from "@/components/site/images";

/* Generated from the Stitch design export (screen 04). */
export function AboutScreen() {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        {" "}
        <div className="relative w-full overflow-hidden">
          {" "}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-secondary-container/20 rounded-4xl blur-3xl pointer-events-none"></div>{" "}
          <section className="relative z-10 max-w-7xl mx-auto px-gutter pt-12 pb-16 w-full">
            {" "}
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {" "}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-4xl bg-surface-container-high/60 shadow-xs mb-6">
                {" "}
                <span className="w-1.5 h-1.5 rounded-4xl bg-on-tertiary-container animate-pulse"></span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-[0.22em] text-on-tertiary-container">
                  {" "}
                  Heritage · Legacy · Architectural Excellence{" "}
                </span>{" "}
              </div>{" "}
              <h1 className="font-display-hero text-display-hero text-primary-container tracking-tight mb-6">
                {" "}
                Heritage in Every Detail.
                <br />
                Excellence in Every Structure.{" "}
              </h1>{" "}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                {" "}
                A premier Indian temple construction and sacred architecture firm uniting ancient
                Vedic Shilpa Shastras with contemporary structural engineering.{" "}
              </p>{" "}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-label-monument text-label-monument text-stone-hairline uppercase tracking-widest">
                {" "}
                <span className="flex items-center gap-1.5">
                  {" "}
                  <span className="material-symbols-outlined text-[15px] text-secondary">
                    explore
                  </span>{" "}
                  Vastu Purusha Mandala{" "}
                </span>{" "}
                <span className="w-1 h-1 rounded-4xl bg-stone-hairline"></span>{" "}
                <span className="flex items-center gap-1.5">
                  {" "}
                  <span className="material-symbols-outlined text-[15px] text-secondary">
                    architecture
                  </span>{" "}
                  1,000-Year Structural Integrity{" "}
                </span>{" "}
                <span className="w-1 h-1 rounded-4xl bg-stone-hairline"></span>{" "}
                <span className="flex items-center gap-1.5">
                  {" "}
                  <span className="material-symbols-outlined text-[15px] text-secondary">
                    verified
                  </span>{" "}
                  Sompura Master Guild Lineage{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
        </div>{" "}
        <section className="w-full bg-surface-container-low py-16 relative">
          {" "}
          <div className="max-w-7xl mx-auto px-gutter">
            {" "}
            <div className="relative bg-card-elevated rounded-xl shadow-md p-10 lg:p-14 flex flex-col items-center text-center overflow-hidden">
              {" "}
              <div className="absolute inset-0 bg-gradient-to-b from-surface-container/40 via-transparent to-surface-container/20 pointer-events-none"></div>{" "}
              <div className="relative z-10 flex flex-col items-center">
                {" "}
                <div className="w-56 h-auto max-w-xs p-4 bg-surface-container-low rounded-2xl shadow-inner flex items-center justify-center mb-6">
                  <img
                    alt="Ornate Vishwa Vaidika Temple Crest"
                    className="w-full h-auto max-h-40 object-contain filter drop-shadow-sm"
                    src={IMG.crest}
                  />
                </div>{" "}
                <div className="flex items-center gap-3 mb-4">
                  {" "}
                  <div className="w-12 h-px bg-secondary/40"></div>{" "}
                  <div className="w-1.5 h-1.5 rotate-45 bg-secondary"></div>{" "}
                  <div className="w-12 h-px bg-secondary/40"></div>{" "}
                </div>{" "}
                <h2 className="font-headline-sm text-headline-sm text-primary-container tracking-wider uppercase font-semibold mb-2">
                  {" "}
                  Vishwa Vaidika Sanatan Hindu Temple Heritage Private Limited{" "}
                </h2>{" "}
                <p className="font-label-ui text-label-ui uppercase tracking-[0.2em] text-secondary font-medium">
                  {" "}
                  Pune, Maharashtra · Architectural Registry & Sanatan Guild{" "}
                </p>{" "}
                <p className="mt-4 font-body-md text-body-md text-on-surface-variant max-w-xl">
                  {" "}
                  Constituted under the sacred mandate of immortalizing canonical Dravidian, Nagara,
                  and Vesara sanctuaries across the Indian subcontinent and global diaspora.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-20 bg-surface">
          {" "}
          <div className="max-w-7xl mx-auto px-gutter">
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {" "}
              <div className="lg:col-span-6 relative">
                {" "}
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl aspect-[4/3] bg-surface-container">
                  {" "}
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    data-alt="Monolithic Indian temple under construction with majestic hand-carved pink sandstone pillars, intricate shikhara tower scaffolds, master artisans chiseling sacred reliefs in golden hour sunlight, architectural drama, cinematic medium format photography, warm sandstone and deep maroon tones."
                    src={IMG.constructionSite}
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/80 via-transparent to-transparent flex items-end p-6">
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest text-sandstone-surface">
                      {" "}
                      Archival Plate: Bansi Paharpur Sandstone Carving Yard{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="absolute -bottom-8 -right-4 w-3/5 rounded-lg overflow-hidden shadow-2xl z-20 hidden sm:block bg-card-elevated p-2">
                  {" "}
                  <div className="aspect-[16/10] overflow-hidden rounded-xs">
                    {" "}
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Close up architectural detail of chisel-hewn ancient granite interlocking joint showing sacred Vastu Purusha Mandala geometry carved by master Sompura sculptor, fine texture, museum monograph lighting, rich amber and slate tones."
                      src={IMG.interlockingJoint}
                    />{" "}
                  </div>{" "}
                  <div className="pt-2 px-1 flex items-center justify-between">
                    {" "}
                    <span className="font-label-monument text-[9px] tracking-widest text-primary-container font-semibold uppercase">
                      Precision Interlocking Joint
                    </span>{" "}
                    <span className="font-label-monument text-[9px] text-stone-hairline">
                      CIRCA 2004
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-6 flex flex-col space-y-6 lg:pl-6">
                {" "}
                <div className="flex items-center gap-3">
                  {" "}
                  <span className="px-3 py-1 rounded-xs bg-secondary-container text-on-secondary-container font-label-monument text-label-monument uppercase tracking-widest font-semibold">
                    {" "}
                    The Lineage Continuum{" "}
                  </span>{" "}
                  <span className="text-stone-hairline font-label-monument text-label-monument uppercase tracking-wider">
                    Est. Decades of Devotion
                  </span>{" "}
                </div>{" "}
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  {" "}
                  Carrying the Torch of Shree Vishweshwar Stone Temple Buildcon{" "}
                </h2>{" "}
                <div className="w-16 h-0.5 bg-secondary"></div>{" "}
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  {" "}
                  The foundation of{" "}
                  <strong className="font-semibold text-primary">
                    Vishwa Vaidika Sanatan
                  </strong>{" "}
                  represents the natural evolution and culmination of our storied preceding
                  enterprise,{" "}
                  <em className="font-title-editorial text-title-editorial text-primary-container not-italic font-bold">
                    Shree Vishweshwar Stone Temple Buildcon Pvt. Ltd.
                  </em>{" "}
                </p>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" "}
                  Carrying forward over two continuous decades of monumental temple construction
                  experience, our organization has earned the trust of revered Mahant councils,
                  historic royal preservation trusts, and spiritual organizations across India. From
                  the arid sandstone terrains of Rajasthan to the torrential ghats of the Deccan,
                  our master builders have erected sanctuaries designed to outlive dynasties.{" "}
                </p>{" "}
                <div className="pt-4 grid grid-cols-2 gap-4">
                  {" "}
                  <div className="p-4 bg-surface-container rounded-lg shadow-xs">
                    {" "}
                    <div className="flex items-center gap-2 text-primary-container mb-1">
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        account_balance
                      </span>{" "}
                      <span className="font-label-ui text-label-ui font-bold">
                        Temple Trusts
                      </span>{" "}
                    </div>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Over 40 trusted relationships with statutory religious boards and spiritual
                      mandalams.
                    </p>{" "}
                  </div>{" "}
                  <div className="p-4 bg-surface-container rounded-lg shadow-xs">
                    {" "}
                    <div className="flex items-center gap-2 text-secondary mb-1">
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        workspace_premium
                      </span>{" "}
                      <span className="font-label-ui text-label-ui font-bold">
                        Royal Councils
                      </span>{" "}
                    </div>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Certified restoration partners for royal heritage and historic sanctum
                      conservation.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-sandstone-surface text-charcoal-monolith py-16 relative shadow-inner">
          {" "}
          <div className="max-w-7xl mx-auto px-gutter">
            {" "}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              {" "}
              <div>
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-primary-container font-semibold">
                  {" "}
                  Institutional Track Record{" "}
                </span>{" "}
                <h3 className="font-headline-md text-headline-md text-primary mt-1">
                  {" "}
                  Two Decades of Monolithic Construction{" "}
                </h3>{" "}
              </div>{" "}
              <p className="font-body-sm text-body-sm text-charcoal-monolith/80 max-w-md">
                {" "}
                Verified milestones executed across major pilgrimage corridors, certified under
                rigorous architectural audits.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {" "}
              <div className="bg-card-elevated rounded-xl p-8 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow">
                {" "}
                <div>
                  {" "}
                  <div className="w-10 h-10 rounded-4xl bg-surface-container flex items-center justify-center text-primary mb-4">
                    {" "}
                    <span className="material-symbols-outlined">history_toggle_off</span>{" "}
                  </div>{" "}
                  <div className="font-display-hero text-display-hero text-primary font-normal tracking-tight">
                    20+
                  </div>{" "}
                </div>{" "}
                <div className="mt-4 pt-4 border-t border-surface-container-high">
                  {" "}
                  <h4 className="font-label-ui text-label-ui uppercase tracking-wider font-semibold text-charcoal-monolith">
                    Years of Craftsmanship
                  </h4>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Uninterrupted monumental temple building leadership.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated rounded-xl p-8 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow">
                {" "}
                <div>
                  {" "}
                  <div className="w-10 h-10 rounded-4xl bg-surface-container flex items-center justify-center text-secondary mb-4">
                    {" "}
                    <span className="material-symbols-outlined">temple_hindu</span>{" "}
                  </div>{" "}
                  <div className="font-display-hero text-display-hero text-primary font-normal tracking-tight">
                    36+
                  </div>{" "}
                </div>{" "}
                <div className="mt-4 pt-4 border-t border-surface-container-high">
                  {" "}
                  <h4 className="font-label-ui text-label-ui uppercase tracking-wider font-semibold text-charcoal-monolith">
                    Temples Erected
                  </h4>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Grand Shikhara sanctuaries and consecrated sanctums.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated rounded-xl p-8 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow">
                {" "}
                <div>
                  {" "}
                  <div className="w-10 h-10 rounded-4xl bg-surface-container flex items-center justify-center text-primary mb-4">
                    {" "}
                    <span className="material-symbols-outlined">map</span>{" "}
                  </div>{" "}
                  <div className="font-display-hero text-display-hero text-primary font-normal tracking-tight">
                    10+
                  </div>{" "}
                </div>{" "}
                <div className="mt-4 pt-4 border-t border-surface-container-high">
                  {" "}
                  <h4 className="font-label-ui text-label-ui uppercase tracking-wider font-semibold text-charcoal-monolith">
                    States with Landmarks
                  </h4>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Spanning Maharashtra, Gujarat, MP, UP, Karnataka & beyond.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated rounded-xl p-8 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow">
                {" "}
                <div>
                  {" "}
                  <div className="w-10 h-10 rounded-4xl bg-surface-container flex items-center justify-center text-secondary mb-4">
                    {" "}
                    <span className="material-symbols-outlined">groups</span>{" "}
                  </div>{" "}
                  <div className="font-display-hero text-display-hero text-primary font-normal tracking-tight">
                    350+
                  </div>{" "}
                </div>{" "}
                <div className="mt-4 pt-4 border-t border-surface-container-high">
                  {" "}
                  <h4 className="font-label-ui text-label-ui uppercase tracking-wider font-semibold text-charcoal-monolith">
                    Sompuras & Artisans
                  </h4>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Master sculptors, structural engineers, and stone masons.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-20 bg-surface">
          {" "}
          <div className="max-w-7xl mx-auto px-gutter">
            {" "}
            <div className="text-center max-w-3xl mx-auto mb-16">
              {" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-on-tertiary-container font-semibold">
                {" "}
                Foundational Rigor{" "}
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-primary mt-2">
                {" "}
                The Four Pillars of Vishwa Vaidika{" "}
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant mt-4">
                {" "}
                Where sacred Vedic canon converges with world-class engineering discipline to build
                stone sanctuaries calculated to stand for millennia.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {" "}
              <div className="bg-card-elevated p-8 rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden group">
                {" "}
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>{" "}
                <div>
                  {" "}
                  <div className="flex items-center justify-between mb-6">
                    {" "}
                    <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                      {" "}
                      <span className="material-symbols-outlined text-[32px]">menu_book</span>{" "}
                    </div>{" "}
                    <span className="font-headline-sm text-headline-sm text-surface-container-highest font-bold">
                      01
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-title-editorial text-title-editorial text-primary-container mb-3 font-bold">
                    {" "}
                    Sacred Sthapatya Veda Adherence{" "}
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" "}
                    Every sanctum design originates from canonical Ayadi shlokas, establishing exact
                    harmonic ratios for length, breadth, perimeter, and elevation. We strictly
                    encode the 64-pada and 81-pada Vastu Purusha Mandala layouts to guarantee
                    spiritual resonance and cosmic alignment for all Garbhagrihas.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="mt-6 pt-4 bg-surface-container-low rounded-lg p-3.5 flex items-center gap-3">
                  {" "}
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    architecture
                  </span>{" "}
                  <span className="font-label-ui text-body-sm text-on-surface font-medium">
                    Ayadi Calculations · Canonical Mandala Grids · Iconometry
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated p-8 rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden group">
                {" "}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>{" "}
                <div>
                  {" "}
                  <div className="flex items-center justify-between mb-6">
                    {" "}
                    <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      {" "}
                      <span className="material-symbols-outlined text-[32px]">handyman</span>{" "}
                    </div>{" "}
                    <span className="font-headline-sm text-headline-sm text-surface-container-highest font-bold">
                      02
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-title-editorial text-title-editorial text-primary-container mb-3 font-bold">
                    {" "}
                    Artisanal Sompura Lineage{" "}
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" "}
                    We sustain direct patron guilds with over 350 hereditary Sompura stone sculptors
                    and Shilpis whose families have handed down sacred chisel wisdom across twelve
                    generations. Their manual artistry ensures that intricate floral friezes,
                    celestial Apsaras, and divine Murtis preserve irreplaceable spiritual soul.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="mt-6 pt-4 bg-surface-container-low rounded-lg p-3.5 flex items-center gap-3">
                  {" "}
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    palette
                  </span>{" "}
                  <span className="font-label-ui text-body-sm text-on-surface font-medium">
                    350+ Hereditary Shilpis · Intricate Jali Carving · Endangered Chiseling
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated p-8 rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden group">
                {" "}
                <div className="absolute top-0 left-0 w-full h-1 bg-on-tertiary-container"></div>{" "}
                <div>
                  {" "}
                  <div className="flex items-center justify-between mb-6">
                    {" "}
                    <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-on-tertiary-container">
                      {" "}
                      <span className="material-symbols-outlined text-[32px]">
                        model_training
                      </span>{" "}
                    </div>{" "}
                    <span className="font-headline-sm text-headline-sm text-surface-container-highest font-bold">
                      03
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-title-editorial text-title-editorial text-primary-container mb-3 font-bold">
                    {" "}
                    Modern Structural Engineering{" "}
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" "}
                    We marry eternal stone craft with aerospace-grade 3D point-cloud drafting,
                    finite element seismic simulations, and non-corrosive marine-grade stainless
                    steel interlocking dowels. Rejecting corrosive reinforced cement concrete, our
                    monolithic dry-interlocking masonry withstands Zone-V earthquake forces.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="mt-6 pt-4 bg-surface-container-low rounded-lg p-3.5 flex items-center gap-3">
                  {" "}
                  <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">
                    view_in_ar
                  </span>{" "}
                  <span className="font-label-ui text-body-sm text-on-surface font-medium">
                    Seismic Simulation · Non-RCC Dry Joints · 1,000-Year Life Cycle
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated p-8 rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden group">
                {" "}
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>{" "}
                <div>
                  {" "}
                  <div className="flex items-center justify-between mb-6">
                    {" "}
                    <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                      {" "}
                      <span className="material-symbols-outlined text-[32px]">landscape</span>{" "}
                    </div>{" "}
                    <span className="font-headline-sm text-headline-sm text-surface-container-highest font-bold">
                      04
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-title-editorial text-title-editorial text-primary-container mb-3 font-bold">
                    {" "}
                    Ethical Stone Procurement{" "}
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" "}
                    Our geologic stewards directly inspect and acquire select grade-A stone blocks
                    directly at the stratum level from sovereign historic quarries: pink sandstone
                    from Bansi Paharpur, golden sandstone from Jodhpur, pure calcitic marble from
                    Makrana, and weather-resistant Deccan crystalline granite.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="mt-6 pt-4 bg-surface-container-low rounded-lg p-3.5 flex items-center gap-3">
                  {" "}
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    diamond
                  </span>{" "}
                  <span className="font-label-ui text-body-sm text-on-surface font-medium">
                    Bansi Paharpur · Jodhpur Sandstone · Makrana White · Basalt Granite
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface-container py-12">
          {" "}
          <div className="max-w-7xl mx-auto px-gutter">
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {" "}
              <div className="relative rounded-lg overflow-hidden shadow-xs aspect-[4/3] bg-card-elevated">
                {" "}
                <img
                  className="w-full h-full object-cover"
                  data-alt="Massive pink sandstone blocks being hand selected at a quarry in Rajasthan with temple architects reviewing geologic grain and density for temple mandapa columns, bright harsh desert sunlight, dust particles shimmering, cinematic wide angle."
                  src={IMG.quarry}
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/80 via-transparent to-transparent flex items-end p-5">
                  {" "}
                  <div>
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary-fixed">
                      Geologic Selection
                    </span>{" "}
                    <p className="font-title-editorial text-title-editorial text-on-primary">
                      Bansi Paharpur Strata Quarry
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative rounded-lg overflow-hidden shadow-xs aspect-[4/3] bg-card-elevated">
                {" "}
                <img
                  className="w-full h-full object-cover"
                  data-alt="A master Sompura sculptor in traditional Indian attire finely carving the divine ornamental crown of a stone deity relief inside a traditional outdoor temple workshop, close shot of chisel meeting sandstone, amber lighting, deep shadows."
                  src={IMG.sculptorGranite}
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/80 via-transparent to-transparent flex items-end p-5">
                  {" "}
                  <div>
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary-fixed">
                      Iconographic Mastery
                    </span>{" "}
                    <p className="font-title-editorial text-title-editorial text-on-primary">
                      Hand Chiseling of Murti Reliefs
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative rounded-lg overflow-hidden shadow-xs aspect-[4/3] bg-card-elevated">
                {" "}
                <img
                  className="w-full h-full object-cover"
                  data-alt="Completed monumental Hindu temple courtyard at dusk with intricately carved stone corridors, glowing oil lamps reflecting against polished granite floors, majestic Nagara spire rising into deep twilight sky, awe-inspiring serenity."
                  src={IMG.pillarCorridor}
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/80 via-transparent to-transparent flex items-end p-5">
                  {" "}
                  <div>
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary-fixed">
                      Consecrated Sanctuaries
                    </span>{" "}
                    <p className="font-title-editorial text-title-editorial text-on-primary">
                      Nagara & Dravidian Spire Complexes
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-charcoal-monolith text-sandstone-surface py-20 relative overflow-hidden">
          {" "}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>{" "}
          <div className="max-w-7xl mx-auto px-gutter relative z-10">
            {" "}
            <div className="text-center max-w-2xl mx-auto mb-14">
              {" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.25em] text-secondary-fixed-dim font-semibold">
                {" "}
                Centennial Mandate{" "}
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest mt-2">
                {" "}
                A Century of Sacred Vision{" "}
              </h2>{" "}
              <div className="w-12 h-0.5 bg-secondary mx-auto mt-4"></div>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {" "}
              <div className="bg-on-surface p-8 lg:p-12 rounded-xl shadow-xl flex flex-col justify-between relative group">
                {" "}
                <div className="mb-6">
                  {" "}
                  <div className="flex items-center gap-3 mb-6">
                    {" "}
                    <span className="p-2.5 rounded-xs bg-charcoal-monolith text-secondary-fixed">
                      {" "}
                      <span className="material-symbols-outlined text-[26px]">visibility</span>{" "}
                    </span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary font-bold">
                      {" "}
                      The 100-Year Architectural Vision{" "}
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-surface-bright mb-4">
                    {" "}
                    To be the Global Citadel of Authentic Sanatan Temple Architecture{" "}
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-stone-hairline leading-relaxed">
                    {" "}
                    We envision a world where sacred Hindu temple architecture thrives not as a
                    relic of the past, but as a living, monumental science. By marrying unyielding
                    canonical Shilpa Shastras with cutting-edge stone conservation engineering, we
                    strive to build temples across continents that will stand unbroken, inspiring
                    spiritual devotion for the next millennium.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-6 border-t border-stone-hairline/20 flex items-center justify-between text-body-sm text-sandstone-surface/80">
                  {" "}
                  <span className="font-title-editorial italic">
                    "Preserving Sacred Spaces for Eternity"
                  </span>{" "}
                  <span className="font-label-monument text-[11px] text-secondary uppercase font-semibold">
                    Vision 2125
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-on-surface p-8 lg:p-12 rounded-xl shadow-xl flex flex-col justify-between relative group">
                {" "}
                <div className="mb-6">
                  {" "}
                  <div className="flex items-center gap-3 mb-6">
                    {" "}
                    <span className="p-2.5 rounded-xs bg-charcoal-monolith text-on-tertiary-container">
                      {" "}
                      <span className="material-symbols-outlined text-[26px]">flag</span>{" "}
                    </span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-on-tertiary-container font-bold">
                      {" "}
                      Our Perpetual Mission{" "}
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-surface-bright mb-4">
                    {" "}
                    To Protect, Construct, and Consecrate Sacred Sanctuaries{" "}
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-stone-hairline leading-relaxed">
                    {" "}
                    Our mission is threefold: first, to safeguard the endangered generational
                    lineage of Sompura artisans by guaranteeing ethical, dignified patronages;
                    second, to deliver absolute structural honesty by eschewing perishable materials
                    in favor of interlocking stone; and third, to serve temple trusts with
                    transparent Vedic governance from the first blueprint to the final Kalash
                    Pratishtha.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-6 border-t border-stone-hairline/20 flex items-center justify-between text-body-sm text-sandstone-surface/80">
                  {" "}
                  <span className="font-title-editorial italic">
                    "Faith Encased in Monolithic Stone"
                  </span>{" "}
                  <span className="font-label-monument text-[11px] text-on-tertiary-container uppercase font-semibold">
                    Active Mandate
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mt-16 bg-surface-container/10 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              {" "}
              <div className="flex items-center gap-4">
                {" "}
                <div className="w-12 h-12 rounded-4xl bg-primary-container flex items-center justify-center text-on-primary">
                  {" "}
                  <span className="material-symbols-outlined text-[24px]">handshake</span>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="font-title-editorial text-title-editorial text-surface-bright font-bold">
                    Entrust Your Mandir Project to the Master Guild
                  </h4>{" "}
                  <p className="font-body-sm text-body-sm text-stone-hairline">
                    Arrange a confidential consultation with our Chief Sthapati and Structural
                    Architects in Pune.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-center gap-4 shrink-0">
                {" "}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-saffron text-on-primary font-label-ui text-label-ui uppercase tracking-wider font-semibold rounded-xs shadow-md hover:bg-on-tertiary-fixed-variant transition-colors"
                >
                  {" "}
                  <span>Schedule Sthapati Consultation</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>
    </main>
  );
}

import { Link } from "@tanstack/react-router";
import { IMG } from "@/components/site/images";

/* Generated from the Stitch design export (screen 10). */
export function ProjectDetailScreen() {
  return (
    <main className="w-full pt-20 bg-surface">
      <div className="flex flex-col w-full">
        {" "}
        <section className="w-full bg-surface-container-low border-b-0 py-space-sm px-gutter">
          {" "}
          <div className="max-w-[1320px] mx-auto flex items-center justify-between">
            {" "}
            <nav className="flex items-center gap-2 font-label-monument text-label-monument uppercase tracking-widest text-on-surface-variant text-[11px]">
              {" "}
              <Link to="/" className="hover:text-primary transition-colors">
                HOME
              </Link>{" "}
              <span className="text-secondary opacity-60">/</span>{" "}
              <Link to="/projects" className="hover:text-primary transition-colors">
                PROJECTS
              </Link>{" "}
              <span className="text-secondary opacity-60">/</span>{" "}
              <Link to="/projects" className="hover:text-primary transition-colors">
                MONUMENTAL STONE TEMPLES
              </Link>{" "}
              <span className="text-secondary opacity-60">/</span>{" "}
              <span className="text-primary font-bold">SHRI MAHALAKSHMI MAHA MANDIR</span>{" "}
            </nav>{" "}
            <div className="hidden md:flex items-center gap-space-xs font-label-ui text-label-ui text-secondary">
              {" "}
              <span className="material-symbols-outlined text-[16px]">verified_user</span>{" "}
              <span>ARCHITECTURAL DOSSIER NO. VVS-MM-0824</span>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="relative w-full overflow-hidden bg-charcoal-monolith">
          {" "}
          <div
            className="w-full h-[620px] bg-cover bg-center relative"
            data-alt="Wide majestic perspective of an expansive Hindu temple sanctuary in Nagara Latina-Sekhari style, carved from warm pink Bansi Paharpur sandstone with grand central 108ft Shikhara and ornate pillared Sabha Mandapa under a dramatic twilight sky with warm golden sun rays radiating across stone carvings, captured in medium format architectural fine-art style"
            style={{ backgroundImage: `url(${IMG.templeComplex})` }}
          >
            {" "}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith via-charcoal-monolith/40 to-black/30"></div>{" "}
            <div className="relative max-w-[1320px] mx-auto h-full px-gutter flex flex-col justify-between pt-space-lg pb-space-xl">
              {" "}
              <div className="flex items-center justify-between">
                {" "}
                <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest/90 backdrop-blur-md px-space-md py-space-xs rounded-xs shadow-md">
                  {" "}
                  <span className="w-2 h-2 rounded-4xl bg-primary animate-pulse"></span>{" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-widest text-primary">
                    PURNA PRANA PRATISHTHA • CONSECRATED
                  </span>{" "}
                </div>{" "}
                <div className="hidden lg:flex items-center gap-space-sm bg-charcoal-monolith/85 backdrop-blur-md px-space-md py-space-xs rounded-xs text-sandstone-surface">
                  {" "}
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                    architecture
                  </span>{" "}
                  <span className="font-label-ui text-label-ui uppercase tracking-wider">
                    Shilpa Shastra: 64-Pada Manduka Mandala
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="max-w-4xl flex flex-col gap-space-sm">
                {" "}
                <div className="flex items-center gap-space-sm">
                  {" "}
                  <span className="h-px w-12 bg-secondary-fixed"></span>{" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary-fixed">
                    FLAGSHIP SACRED MONUMENT
                  </span>{" "}
                </div>{" "}
                <h1 className="font-display-hero text-display-hero text-surface-bright leading-tight drop-shadow-sm">
                  {" "}
                  Shri Mahalakshmi Maha Mandir Sanctuary{" "}
                </h1>{" "}
                <p className="font-body-lg text-body-lg text-surface-container-highest/90 max-w-3xl leading-relaxed">
                  {" "}
                  A monolithic Nagara Latina-Sekhari sanctuary complex carved from Grade-A Bansi
                  Paharpur pink sandstone, engineered for millennium longevity without corrosive
                  steel reinforcement.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-full bg-surface-container-lowest shadow-xl -mt-8 relative z-20 max-w-[1320px] mx-auto rounded-lg overflow-hidden">
            {" "}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x-0 gap-0">
              {" "}
              <div className="p-space-md flex flex-col justify-center bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-widest text-on-surface-variant flex items-center gap-1">
                  {" "}
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    pin_drop
                  </span>{" "}
                  LOCATION{" "}
                </span>{" "}
                <span className="font-title-editorial text-title-editorial text-on-surface mt-1">
                  Western Ghats
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Maharashtra, India
                </span>{" "}
              </div>{" "}
              <div className="p-space-md flex flex-col justify-center bg-surface-container-low/40 hover:bg-surface-container-low transition-colors">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-widest text-on-surface-variant flex items-center gap-1">
                  {" "}
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    account_balance
                  </span>{" "}
                  TYPOLOGY{" "}
                </span>{" "}
                <span className="font-title-editorial text-title-editorial text-on-surface mt-1">
                  Tri-Sanctum Latina
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Rangamandapa & Nandi Hall
                </span>{" "}
              </div>{" "}
              <div className="p-space-md flex flex-col justify-center bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-widest text-on-surface-variant flex items-center gap-1">
                  {" "}
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    diamond
                  </span>{" "}
                  GEOLOGICAL STONE{" "}
                </span>{" "}
                <span className="font-title-editorial text-title-editorial text-on-surface mt-1">
                  Bansi Paharpur
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Pink Sandstone & Makrana
                </span>{" "}
              </div>{" "}
              <div className="p-space-md flex flex-col justify-center bg-surface-container-low/40 hover:bg-surface-container-low transition-colors">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-widest text-on-surface-variant flex items-center gap-1">
                  {" "}
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    straighten
                  </span>{" "}
                  DIMENSIONS{" "}
                </span>{" "}
                <span className="font-title-editorial text-title-editorial text-on-surface mt-1">
                  108 ft Shikhara Apex
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  48,000 sq.ft. Prakaram Grid
                </span>{" "}
              </div>{" "}
              <div className="p-space-md flex flex-col justify-center col-span-2 md:col-span-1 bg-surface-container-low/80 hover:bg-surface-container-low transition-colors">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-widest text-on-surface-variant flex items-center gap-1">
                  {" "}
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    hourglass_bottom
                  </span>{" "}
                  LIFESPAN METRIC{" "}
                </span>{" "}
                <span className="font-title-editorial text-title-editorial text-primary mt-1">
                  1,000+ Years
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Non-Ferrous Dry Stone Joint
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-space-xl bg-surface">
          {" "}
          <div className="max-w-[1320px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {" "}
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              {" "}
              <div className="flex flex-col gap-space-xs">
                {" "}
                <div className="flex items-center gap-space-xs text-secondary">
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">history_edu</span>{" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-widest">
                    CHAPTER I • SACRED ARCHITECTURAL CONCEPTION
                  </span>{" "}
                </div>{" "}
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  {" "}
                  Harmonizing Cosmic Rhythms in Imperishable Pink Sandstone{" "}
                </h2>{" "}
              </div>{" "}
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                {" "}
                Commissioned by the Mahalakshmi Sthapana Sangham, the master sanctuary was conceived
                as an eternal spiritual epicenter dedicated to Sri Sukta cosmological liturgy.
                Rather than adopting ephemeral modern composite framing, the trust mandated absolute
                non-ferrous dry stone joinery guided purely by classical{" "}
                <span className="text-primary font-medium">Shilpa Shastric canons</span>.{" "}
              </p>{" "}
              <div className="p-space-lg bg-surface-container-low rounded-lg shadow-xs flex flex-col gap-space-sm">
                {" "}
                <div className="flex items-center gap-space-xs text-primary font-semibold">
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">explore</span>{" "}
                  <span className="font-label-ui text-label-ui uppercase tracking-wider">
                    Brahmagupta Solar Azimuth Alignment
                  </span>{" "}
                </div>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" "}
                  The Garbhagriha (womb chamber) axis was calculated using ancient Gnomon
                  shadow-stick calculations on the equinox day, establishing absolute heliacal
                  coordinates with 0.04° angular tolerance. Every year during Uttarayana dawn, the
                  sunrise illuminates the sanctum deity through triple peristyle openings in the
                  Rangamandapa.{" "}
                </p>{" "}
              </div>{" "}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                {" "}
                <div className="p-space-md bg-surface-container rounded-lg flex flex-col gap-space-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary">
                    64-PADA MANDUKA MANDALA
                  </span>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Radial spatial distribution with Brahma Sthana centrally balanced. The sanctum
                    walls measure precisely 3 Hastas in thickness to sustain compressive
                    thrust.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-md bg-surface-container rounded-lg flex flex-col gap-space-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary">
                    SOMPURA MASTER GUILD
                  </span>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Executed under Chief Sthapati Sri Vidyadhar Sompura with a dedicated guild of
                    350+ master stone-carvers over 74 consecutive lunar cycles.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {" "}
                The resulting ensemble integrates an outer Prakaram courtyard with 108 subsidiary
                pillared chhatris, a water-harvesting Pushkarini stepped tank carved from Basalt,
                and an ornate Rangamandapa dome crowned with a 24-petal inverted lotus canopy.{" "}
              </p>{" "}
            </div>{" "}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              {" "}
              <div className="p-space-lg bg-surface-container-high rounded-xl shadow-md flex flex-col gap-space-md">
                {" "}
                <div className="flex items-center justify-between pb-space-xs">
                  {" "}
                  <div className="flex items-center gap-space-xs text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">science</span>{" "}
                    <span className="font-label-ui text-label-ui uppercase tracking-wider font-bold">
                      TECTONIC & MATERIAL DOSSIER
                    </span>{" "}
                  </div>{" "}
                  <span className="font-label-monument text-label-monument text-secondary uppercase">
                    SPEC SHEET
                  </span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-space-sm divide-y-0">
                  {" "}
                  <div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-xs">
                    {" "}
                    <div className="flex flex-col">
                      {" "}
                      <span className="font-label-ui text-label-ui font-bold text-on-surface">
                        Compressive Strength
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Bansi Paharpur Quarry Core Test
                      </span>{" "}
                    </div>{" "}
                    <span className="font-headline-sm text-headline-sm text-primary">
                      72.4 MPa
                    </span>{" "}
                  </div>{" "}
                  <div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-xs">
                    {" "}
                    <div className="flex flex-col">
                      {" "}
                      <span className="font-label-ui text-label-ui font-bold text-on-surface">
                        Ultrasonic Pulse Velocity
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Non-destructive monolithic scan
                      </span>{" "}
                    </div>{" "}
                    <span className="font-headline-sm text-headline-sm text-primary">
                      4,820 m/s
                    </span>{" "}
                  </div>{" "}
                  <div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-xs">
                    {" "}
                    <div className="flex flex-col">
                      {" "}
                      <span className="font-label-ui text-label-ui font-bold text-on-surface">
                        Joinery Technology
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Dry interlocking stone dowels
                      </span>{" "}
                    </div>{" "}
                    <span className="font-label-ui text-label-ui font-bold text-secondary text-right">
                      Zero Cement / No Steel
                    </span>{" "}
                  </div>{" "}
                  <div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-xs">
                    {" "}
                    <div className="flex flex-col">
                      {" "}
                      <span className="font-label-ui text-label-ui font-bold text-on-surface">
                        Seismic Resistance
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Indian Standard IS 1893:2016
                      </span>{" "}
                    </div>{" "}
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      Zone IV
                    </span>{" "}
                  </div>{" "}
                  <div className="flex items-center justify-between p-space-sm bg-surface-container-lowest rounded-xs">
                    {" "}
                    <div className="flex flex-col">
                      {" "}
                      <span className="font-label-ui text-label-ui font-bold text-on-surface">
                        Garbhagriha Flooring
                      </span>{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Virgin Calcite Crystalline
                      </span>{" "}
                    </div>{" "}
                    <span className="font-label-ui text-label-ui font-bold text-primary">
                      Makrana White
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-space-md bg-primary-container text-on-primary rounded-lg flex flex-col gap-space-xs mt-space-xs">
                  {" "}
                  <div className="flex items-center gap-space-xs">
                    {" "}
                    <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">
                      verified
                    </span>{" "}
                    <span className="font-label-ui text-label-ui uppercase tracking-wider">
                      Certified Quarry Provenance
                    </span>{" "}
                  </div>{" "}
                  <p className="font-body-sm text-body-sm text-surface-container-high opacity-95">
                    {" "}
                    Every monolithic ashlar block is engraved with serial RFID provenance trace,
                    excavated strictly from ancient certified veins of Rajasthan’s Bayana-Bansi
                    geological rift, selected for zero ferrous pyrite inclusion.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-space-lg bg-surface-container rounded-xl flex items-start gap-space-md">
                {" "}
                <span className="material-symbols-outlined text-[36px] text-secondary">
                  format_quote
                </span>{" "}
                <div className="flex flex-col gap-space-xs">
                  {" "}
                  <p className="font-headline-sm text-headline-sm text-on-surface italic">
                    {" "}
                    "We build not for generations, but for millenia. When steel collapses to rust in
                    two centuries, these precision mortise-tenon stones will sit unyielding."{" "}
                  </p>{" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-primary font-bold">
                    {" "}
                    — ACHARYA PRAHLAD SOMPURA, PRINCIPAL STHAPATI{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-space-xl bg-surface-container-low">
          {" "}
          <div className="max-w-[1320px] mx-auto px-gutter flex flex-col gap-space-lg">
            {" "}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              {" "}
              <div className="flex flex-col gap-space-xs">
                {" "}
                <div className="flex items-center gap-space-xs text-secondary">
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">architecture</span>{" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-widest">
                    TECHNICAL SPECIFICATION PLATE • ELEVATION 01
                  </span>{" "}
                </div>{" "}
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  {" "}
                  Classical Ayadi Proportions & Orthographic Profile{" "}
                </h2>{" "}
              </div>{" "}
              <div className="flex items-center gap-space-sm">
                {" "}
                <button className="px-space-md py-space-xs bg-surface-container-highest hover:bg-surface-container text-on-surface rounded-xs font-label-ui text-label-ui uppercase tracking-wider flex items-center gap-space-xs transition-colors">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">download</span> PDF
                  BLUEPRINT (HIGH-RES){" "}
                </button>{" "}
                <button className="px-space-md py-space-xs bg-primary text-on-primary hover:bg-primary-container rounded-xs font-label-ui text-label-ui uppercase tracking-wider flex items-center gap-space-xs transition-colors">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">view_in_ar</span> 3D BIM
                  MODEL{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-md flex flex-col gap-space-md">
              {" "}
              <div className="relative w-full overflow-hidden rounded-xs bg-surface-container-highest p-space-md flex flex-col items-center">
                {" "}
                <div
                  className="w-full h-[520px] bg-contain bg-center bg-no-repeat relative flex items-end justify-between p-space-md"
                  data-alt="Exquisite detailed architectural blueprint plate drawing of a multi-tiered Hindu temple elevation on antique ivory drafting parchment, with Sanskrit calligraphic annotations, dimensional arrows, showing plinth Adhisthana, ornate carved Jangha wall, soaring curvilinear Shikhara tower and golden Kalasha pinnacle"
                  style={{ backgroundImage: `url(${IMG.vastuBlueprint})` }}
                >
                  {" "}
                  <div className="absolute top-8 left-12 bg-charcoal-monolith/90 text-surface-bright px-space-md py-space-xs rounded-xs shadow-lg backdrop-blur-xs max-w-xs">
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase text-secondary-fixed">
                      APEX TERMINAL
                    </span>{" "}
                    <p className="font-body-sm text-body-sm font-semibold">
                      Gilded Kalasha & Amalasaraka
                    </p>{" "}
                    <span className="text-[10px] text-stone-hairline">
                      Pure Panchadhatu Bronze • 9.5 ft Height
                    </span>{" "}
                  </div>{" "}
                  <div className="absolute top-1/2 right-12 bg-charcoal-monolith/90 text-surface-bright px-space-md py-space-xs rounded-xs shadow-lg backdrop-blur-xs max-w-xs">
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase text-secondary-fixed">
                      VERTICAL RATHAS
                    </span>{" "}
                    <p className="font-body-sm text-body-sm font-semibold">
                      7-Storey Sekhari Urushringas
                    </p>{" "}
                    <span className="text-[10px] text-stone-hairline">
                      Interlocking load-distributing masonry spurs
                    </span>{" "}
                  </div>{" "}
                  <div className="absolute bottom-8 left-1/3 bg-charcoal-monolith/90 text-surface-bright px-space-md py-space-xs rounded-xs shadow-lg backdrop-blur-xs max-w-xs">
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase text-secondary-fixed">
                      PODIUM PLINTH
                    </span>{" "}
                    <p className="font-body-sm text-body-sm font-semibold">
                      Jagati & Adhisthana Substructure
                    </p>{" "}
                    <span className="text-[10px] text-stone-hairline">
                      Solid 12-ft stone layers resisting seismic shear
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md pt-space-xs">
                {" "}
                <div className="flex items-start gap-space-xs">
                  {" "}
                  <span className="font-title-editorial text-title-editorial text-primary font-bold">
                    01
                  </span>{" "}
                  <div className="flex flex-col">
                    {" "}
                    <span className="font-label-ui text-label-ui font-semibold text-on-surface">
                      Pitha & Upapitha
                    </span>{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Basal decorative mouldings featuring Gaja (elephant) friezes.
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start gap-space-xs">
                  {" "}
                  <span className="font-title-editorial text-title-editorial text-primary font-bold">
                    02
                  </span>{" "}
                  <div className="flex flex-col">
                    {" "}
                    <span className="font-label-ui text-label-ui font-semibold text-on-surface">
                      Mandovara & Jangha
                    </span>{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Carved narrative wall niches depicting the 16 manifestations of Devi.
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start gap-space-xs">
                  {" "}
                  <span className="font-title-editorial text-title-editorial text-primary font-bold">
                    03
                  </span>{" "}
                  <div className="flex flex-col">
                    {" "}
                    <span className="font-label-ui text-label-ui font-semibold text-on-surface">
                      Griva & Skandha
                    </span>{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      The neck transition supporting the gargantuan 18-ton Amalaka stone.
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start gap-space-xs">
                  {" "}
                  <span className="font-title-editorial text-title-editorial text-primary font-bold">
                    04
                  </span>{" "}
                  <div className="flex flex-col">
                    {" "}
                    <span className="font-label-ui text-label-ui font-semibold text-on-surface">
                      Ayadi Ratios
                    </span>{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Calculated according to Dhwaja Aya, yielding spiritual harmony.
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-space-xl bg-surface">
          {" "}
          <div className="max-w-[1320px] mx-auto px-gutter flex flex-col gap-space-lg">
            {" "}
            <div className="flex flex-col gap-space-xs">
              {" "}
              <div className="flex items-center gap-space-xs text-secondary">
                {" "}
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-widest">
                  CHAPTER II • ARTISANAL CHRONICLES
                </span>{" "}
              </div>{" "}
              <h2 className="font-headline-lg text-headline-lg text-primary">
                {" "}
                From Rough Quarry Blocks to Consecrated Sanctum{" "}
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                {" "}
                Visual documentation of monumental stone-craft, intricate chiseling, zero-impact
                gantry maneuvers, and the sacred epoch of Purna Prana Pratishtha.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
              {" "}
              <div className="md:col-span-7 group relative overflow-hidden rounded-xl bg-surface-container-high shadow-md h-[460px]">
                {" "}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Intense close-up photograph of an elderly Indian master stone carver in traditional attire meticulously chiseling a high-relief divine Dvarapala temple doorframe in glowing pink sandstone with traditional iron mallet, fine stone dust floating in dramatic diagonal sunbeam"
                  style={{ backgroundImage: `url(${IMG.sculptorGranite})` }}
                ></div>{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-space-lg">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary-fixed">
                    SACRED ICONOGRAPHY
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-surface-bright mt-1">
                    Hand-Chiseling of the Garbhagriha Doorframe
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-surface-dim mt-1 max-w-lg">
                    {" "}
                    Seven concentric Shakhas sculpted with Dvarapalas, Ganga, and Yamuna
                    iconography, each section carved out of a single monolithic 12-ton jamb.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="md:col-span-5 group relative overflow-hidden rounded-xl bg-surface-container-high shadow-md h-[460px]">
                {" "}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Wide angled upward-looking architectural photo inside a grand Hindu temple dome ceiling featuring intricately carved concentric rings of pink sandstone opening into an inverted central lotus medallion padma, illuminated by soft ceremonial warm lighting"
                  style={{ backgroundImage: `url(${IMG.marbleDome})` }}
                ></div>{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-space-lg">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary-fixed">
                    CORBELLED VAULTING
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-surface-bright mt-1">
                    Concentric Sabha Mandapa Dome
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-surface-dim mt-1">
                    {" "}
                    Dry-corbelled rings counterbalanced under gravity with an 8-ton suspended
                    inverted padma stone flower.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="md:col-span-5 group relative overflow-hidden rounded-xl bg-surface-container-high shadow-md h-[400px]">
                {" "}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Technical documentary photograph showing a massive 22-ton pink sandstone carved Shikhara tier stone being delicately placed by a heavy industrial gantry hoist onto temple foundations with zero-vibration hydraulic stabilization in an expansive outdoor sanctuary worksite"
                  style={{ backgroundImage: `url(${IMG.stoneHoisting})` }}
                ></div>{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-space-lg">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary-fixed">
                    PRECISION ENGINEERING
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-surface-bright mt-1">
                    Non-Percussive Stone Hoisting
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-surface-dim mt-1">
                    {" "}
                    Custom specialized gantry cranes ensuring zero impact micro-fracturing during
                    dry-stone alignment.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="md:col-span-7 group relative overflow-hidden rounded-xl bg-surface-container-high shadow-md h-[400px]">
                {" "}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Grand ceremonial photo of temple consecration Maha Kumbhabhishekam with Vedic priests atop temple shikhara scaffolding pouring sanctified water from golden pots over gilded kalasha pinnacle amidst billowing fragrant dhoop smoke and cheering saffron-clad pilgrims below"
                  style={{ backgroundImage: `url(${IMG.goldenKalasha})` }}
                ></div>{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-space-lg">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary-fixed">
                    CEREMONIAL SACRALIZATION
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-surface-bright mt-1">
                    Maha Kumbhabhishekam Consecration
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-surface-dim mt-1">
                    {" "}
                    Sacred waters poured upon the golden Kalashas by revered pontiffs, marking the
                    culmination of 6 years of unbroken sacred construction.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full py-space-lg bg-surface-container-high">
          {" "}
          <div className="max-w-[1320px] mx-auto px-gutter flex flex-col sm:flex-row items-center justify-between gap-space-md">
            {" "}
            <Link
              to="/projects"
              className="group flex items-center gap-space-md p-space-sm rounded-lg hover:bg-surface-container transition-all"
            >
              {" "}
              <div className="w-12 h-12 rounded-4xl bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-xs">
                {" "}
                <span className="material-symbols-outlined text-[24px]">west</span>{" "}
              </div>{" "}
              <div className="flex flex-col text-left">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-widest text-on-surface-variant">
                  PREVIOUS CASE STUDY
                </span>{" "}
                <span className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                  {" "}
                  Raja Gopuram Celestial Gateway{" "}
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Tamil Nadu, India • Dravida Granitic Monolith
                </span>{" "}
              </div>{" "}
            </Link>{" "}
            <Link
              to="/projects"
              className="hidden lg:flex items-center gap-space-xs font-label-ui text-label-ui uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            >
              {" "}
              <span className="material-symbols-outlined text-[18px]">grid_view</span>{" "}
              <span>VIEW ALL MONUMENTS</span>{" "}
            </Link>{" "}
            <Link
              to="/projects"
              className="group flex items-center gap-space-md p-space-sm rounded-lg hover:bg-surface-container transition-all text-right"
            >
              {" "}
              <div className="flex flex-col">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-widest text-on-surface-variant">
                  NEXT CASE STUDY
                </span>{" "}
                <span className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                  {" "}
                  Makrana White Marble Sabha Mandapa{" "}
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Gujarat, India • Maru-Gurjara Pure Calcite
                </span>{" "}
              </div>{" "}
              <div className="w-12 h-12 rounded-4xl bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-xs">
                {" "}
                <span className="material-symbols-outlined text-[24px]">east</span>{" "}
              </div>{" "}
            </Link>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-primary text-on-primary py-space-xl relative overflow-hidden">
          {" "}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            {" "}
            <span className="material-symbols-outlined text-[600px] leading-none select-none">
              temple_hindu
            </span>{" "}
          </div>{" "}
          <div className="relative max-w-[1320px] mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-space-xl">
            {" "}
            <div className="flex flex-col gap-space-sm max-w-2xl">
              {" "}
              <div className="flex items-center gap-space-xs text-secondary-fixed">
                {" "}
                <span className="material-symbols-outlined text-[20px]">architecture</span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-widest">
                  TRANSCENDING EPOCHS WITH MASTER STONE ENGINEERING
                </span>{" "}
              </div>{" "}
              <h2 className="font-headline-lg text-headline-lg text-surface-bright leading-tight">
                {" "}
                Plan an Enduring Sacred Monument{" "}
              </h2>{" "}
              <p className="font-body-lg text-body-lg text-surface-container-highest/90 leading-relaxed">
                {" "}
                Request the full architectural monograph, technical load-bearing stress
                calculations, and certified Bansi Paharpur stone specimens for your temple trust or
                patron council.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex flex-col sm:flex-row items-center gap-space-md w-full md:w-auto">
              {" "}
              <Link
                to="/contact"
                className="w-full sm:w-auto px-space-lg py-space-md bg-secondary hover:bg-on-secondary-container text-on-primary rounded-xs font-label-ui text-label-ui uppercase tracking-wider font-bold shadow-lg transition-all text-center flex items-center justify-center gap-space-xs"
              >
                {" "}
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>{" "}
                <span>SCHEDULE STHAPATI ADVISORY</span>{" "}
              </Link>{" "}
              <a
                className="w-full sm:w-auto px-space-lg py-space-md bg-transparent hover:bg-surface-bright/10 text-surface-bright rounded-xs font-label-ui text-label-ui uppercase tracking-wider transition-colors text-center flex items-center justify-center gap-space-xs"
                href="mailto:contact@vishwaveidika.com?subject=Specimen%20Dossier%20Request"
              >
                {" "}
                <span className="material-symbols-outlined text-[18px]">mail</span>{" "}
                <span>REQUEST SPECIMEN DOSSIER</span>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>
    </main>
  );
}

import { Link } from "@tanstack/react-router";
import { IMG } from "@/components/site/images";
import { useScreenScript } from "@/components/site/use-screen-script";
import { setup } from "./scripts/Architecture";
import { CraftsmanshipGallery } from "@/components/portfolio/CraftsmanshipGallery";

/* Generated from the Stitch design export (screen 08). */
export function ArchitectureScreen() {
  const S = useScreenScript(setup);
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        {" "}
        <section className="w-full bg-surface-container-low px-gutter py-4">
          {" "}
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            {" "}
            <nav className="flex items-center gap-2 font-label-monument text-label-monument uppercase tracking-widest text-on-surface-variant">
              {" "}
              <Link to="/" className="hover:text-primary transition-colors">
                Sanctuary Architecture
              </Link>{" "}
              <span className="text-stone-hairline">/</span>{" "}
              <span className="text-primary font-bold">
                Stone Craftsmanship & Sacred Materials
              </span>{" "}
            </nav>{" "}
            <div className="flex items-center gap-3">
              {" "}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface rounded-4xl text-secondary font-label-monument text-[11px] tracking-wider uppercase font-semibold">
                {" "}
                <span className="w-2 h-2 rounded-4xl bg-secondary"></span> Shilpa Shastra Guild
                Specimen Monograph{" "}
              </span>{" "}
              <span className="font-label-ui text-body-sm text-stone-hairline hidden md:inline">
                Doc ref: VVS-MSS-ARCH-08
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface py-16 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {" "}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              {" "}
              <div className="inline-flex items-center gap-2 text-secondary font-label-monument text-label-monument uppercase tracking-[0.2em]">
                {" "}
                <span className="w-8 h-px bg-secondary"></span> Vaidika Lithic Science • 1000-Year
                Monolithic Integrity{" "}
              </div>{" "}
              <h1 className="font-display-hero text-display-hero text-primary leading-tight font-normal">
                {" "}
                Tradition, Precision and the{" "}
                <span className="italic font-display-hero text-primary-container">
                  Art of Stone.
                </span>{" "}
              </h1>{" "}
              <p className="font-headline-sm text-headline-sm text-on-surface-variant leading-relaxed font-normal">
                {" "}
                An exploration into sacred geology, hereditary Sompura chiseling mastery, and the
                mathematical rigor of timeless stone sanctuaries.{" "}
              </p>{" "}
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed max-w-2xl pt-2">
                {" "}
                In the metaphysical canon of the{" "}
                <span className="italic text-primary font-semibold">Shilpa Prakasha</span>, stone is
                never an inert construction mass. It is dormant cosmic energy. Through precise
                ritual extraction, geometry-governed dressing, and master hand chiseling, raw
                mineral strata awaken into living consecrated abodes capable of sustaining cosmic
                vibration across a millennium.{" "}
              </p>{" "}
              <div className="pt-4 flex flex-wrap items-center gap-6">
                {" "}
                <a
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-primary-container text-on-primary font-label-ui text-label-ui uppercase tracking-widest font-semibold rounded-xs hover:bg-primary transition-all shadow-md"
                  href="#stone-selector"
                >
                  {" "}
                  Examine Sacred Stones{" "}
                </a>{" "}
                <a
                  className="inline-flex items-center gap-2 text-primary font-label-ui text-label-ui uppercase tracking-widest font-semibold hover:text-secondary transition-colors"
                  href="#drawing-archive"
                >
                  {" "}
                  <span>Explore Shikhara Anatomy</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">arrow_downward</span>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="lg:col-span-5 relative">
              {" "}
              <div className="relative bg-surface-container rounded-lg p-3 shadow-lg">
                {" "}
                <div className="relative overflow-hidden rounded-xs">
                  {" "}
                  <img
                    className="w-full h-[460px] object-cover"
                    data-alt="Close-up editorial architectural photograph of intricately hand-carved warm pinkish-sandstone temple pillars and Shikhara spire sections against a luminous ivory background, showing sharp chisel lines, ornamental temple friezes, and warm amber sunlight accentuating Vedic stonework."
                    src={IMG.sandstonePillar}
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/60 via-transparent to-transparent"></div>{" "}
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-surface/95 backdrop-blur-xs rounded-xs">
                    {" "}
                    <div className="flex items-center justify-between">
                      {" "}
                      <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary">
                        Nagara Column Capital
                      </span>{" "}
                      <span className="font-label-ui text-[11px] text-stone-hairline">
                        Talamana Order • Scale 1:12
                      </span>{" "}
                    </div>{" "}
                    <p className="font-title-editorial text-body-md text-primary mt-1 font-semibold">
                      Self-interlocking bracket capital dry-carved without tensile steel
                      reinforcement.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-secondary-container rounded-4xl flex items-center justify-center shadow-md">
                  {" "}
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    architecture
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface-container-low py-20 px-gutter" id="stone-selector">
          {" "}
          <div className="max-w-7xl mx-auto flex flex-col space-y-12">
            {" "}
            <div className="flex flex-col space-y-3 max-w-3xl">
              {" "}
              <div className="inline-flex items-center gap-2 text-secondary font-label-monument text-label-monument uppercase tracking-[0.2em]">
                {" "}
                <span>Classification • Lithic Canon</span>{" "}
              </div>{" "}
              <h2 className="font-headline-lg text-headline-lg text-primary">
                The Four Sacred Temple Stones
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" "}
                Canonical scriptures prescribe specific stones based on the deity’s tattva, seismic
                geography, and desired architectural longevity. Each block undergoes ritual
                classification (Pum-shila, Stri-shila, and Napumsaka-shila) prior to chisel
                dressing.{" "}
              </p>{" "}
            </div>{" "}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-surface p-2 rounded-lg shadow-xs"
              id="stoneTabs"
            >
              {" "}
              <button
                className="flex flex-col text-left p-4 rounded-xs transition-all bg-primary-container text-on-primary shadow-md"
                id="tab-bansi"
                onClick={(e) => S.current.h0?.(e)}
              >
                {" "}
                <div className="flex items-center justify-between w-full mb-1">
                  {" "}
                  <span className="font-label-monument text-[10px] tracking-widest uppercase opacity-80">
                    Primary Sacred Choice
                  </span>{" "}
                  <span className="w-2 h-2 rounded-4xl bg-secondary-container"></span>{" "}
                </div>{" "}
                <span className="font-title-editorial text-title-editorial leading-tight font-semibold">
                  Bansi Paharpur
                </span>{" "}
                <span className="font-label-ui text-[12px] opacity-85 mt-0.5">
                  Pink Sandstone • Rajasthan
                </span>{" "}
              </button>{" "}
              <button
                className="flex flex-col text-left p-4 rounded-xs transition-all bg-surface-container hover:bg-surface-container-high text-on-surface"
                id="tab-makrana"
                onClick={(e) => S.current.h1?.(e)}
              >
                {" "}
                <div className="flex items-center justify-between w-full mb-1">
                  {" "}
                  <span className="font-label-monument text-[10px] tracking-widest uppercase text-secondary">
                    Calcite Marble
                  </span>{" "}
                </div>{" "}
                <span className="font-title-editorial text-title-editorial leading-tight font-semibold text-primary">
                  Makrana Pure White
                </span>{" "}
                <span className="font-label-ui text-[12px] text-on-surface-variant mt-0.5">
                  Crystalline Calcite • Rajasthan
                </span>{" "}
              </button>{" "}
              <button
                className="flex flex-col text-left p-4 rounded-xs transition-all bg-surface-container hover:bg-surface-container-high text-on-surface"
                id="tab-granite"
                onClick={(e) => S.current.h2?.(e)}
              >
                {" "}
                <div className="flex items-center justify-between w-full mb-1">
                  {" "}
                  <span className="font-label-monument text-[10px] tracking-widest uppercase text-secondary">
                    Igneous Plutonic
                  </span>{" "}
                </div>{" "}
                <span className="font-title-editorial text-title-editorial leading-tight font-semibold text-primary">
                  Krishna Shila Granite
                </span>{" "}
                <span className="font-label-ui text-[12px] text-on-surface-variant mt-0.5">
                  Black Charnockite • South India
                </span>{" "}
              </button>{" "}
              <button
                className="flex flex-col text-left p-4 rounded-xs transition-all bg-surface-container hover:bg-surface-container-high text-on-surface"
                id="tab-basalt"
                onClick={(e) => S.current.h3?.(e)}
              >
                {" "}
                <div className="flex items-center justify-between w-full mb-1">
                  {" "}
                  <span className="font-label-monument text-[10px] tracking-widest uppercase text-secondary">
                    Volcanic Shield
                  </span>{" "}
                </div>{" "}
                <span className="font-title-editorial text-title-editorial leading-tight font-semibold text-primary">
                  Deccan Black Basalt
                </span>{" "}
                <span className="font-label-ui text-[12px] text-on-surface-variant mt-0.5">
                  Hemadpanthi Grade • Maharashtra
                </span>{" "}
              </button>{" "}
            </div>{" "}
            <div
              className="block bg-card-elevated rounded-xl p-8 lg:p-10 shadow-md"
              id="content-bansi"
            >
              {" "}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {" "}
                <div className="lg:col-span-6 relative">
                  {" "}
                  <div className="relative overflow-hidden rounded-lg shadow-xs">
                    {" "}
                    <img
                      className="w-full h-[400px] object-cover"
                      data-alt="Tactile macro architectural photography of authentic quarry-sourced Bansi Paharpur yellow-pink sandstone block, showing fine-grained quartz crystal matrix, natural warm patina, and load-bearing density."
                      src={IMG.yellowSandstone}
                    />{" "}
                    <div className="absolute bottom-3 left-3 bg-charcoal-monolith/85 backdrop-blur-md px-3.5 py-1.5 rounded-xs text-sandstone-surface font-label-monument text-[11px] uppercase tracking-wider">
                      {" "}
                      Micro-Structure: 94% Quartz Arenite Matrix{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="mt-4 flex items-center justify-between p-3.5 bg-surface-container-low rounded-xs text-on-surface-variant font-body-sm text-[13px]">
                    {" "}
                    <span className="flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        verified
                      </span>{" "}
                      Certified Quarry Source: Bayana Geological Formation{" "}
                    </span>{" "}
                    <span className="text-primary font-semibold">Batch A-Grade Monolith</span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-6 flex flex-col space-y-6">
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <span className="px-2.5 py-1 bg-secondary-container text-primary font-label-monument text-[10px] uppercase font-bold tracking-wider rounded-xs">
                      {" "}
                      Royal Imperial Guild Spec{" "}
                    </span>{" "}
                    <span className="font-label-ui text-body-sm text-secondary font-semibold">
                      Standard: IS 1706 / Shilpa Shastra Agamas
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Bansi Paharpur Pink Sandstone
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    {" "}
                    Extracted from the ancient stratified deposits of Bharatpur, this quartzitic
                    sandstone has formed the foundation of India’s most revered sacred monuments.
                    Celebrated for its unique natural self-healing patina, it hardens over centuries
                    upon contact with ambient humidity and sunlight.{" "}
                  </p>{" "}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Compressive Strength
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        {"> 65.4 MPa"}
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Exceeds 1000-year load threshold
                      </span>{" "}
                    </div>{" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Water Absorption
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        {"< 1.18%"}
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Impervious to severe monsoon frost
                      </span>{" "}
                    </div>{" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Geological Deposit
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        Bayana Ridge
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Bharatpur District, Rajasthan
                      </span>{" "}
                    </div>{" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Historical Lineage
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        Nagara Sanctuaries
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Ayodhya Ram Mandir, Akshardham
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="p-4 bg-sandstone-surface/30 rounded-xs flex items-start gap-3.5">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[24px] mt-0.5">
                      construction
                    </span>{" "}
                    <div>
                      {" "}
                      <h4 className="font-title-editorial text-[16px] font-bold text-primary">
                        Artisanal Chiseling Behavior
                      </h4>{" "}
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                        {" "}
                        Supple and tender when freshly extracted from underground aquifers, enabling
                        deep multi-layered high-relief carvings of apsaras and lattice jali panels
                        without micro-fracturing. Upon exposure to oxygen, iron oxides form a
                        protective weather-repellent outer shield.{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="hidden bg-card-elevated rounded-xl p-8 lg:p-10 shadow-md"
              id="content-makrana"
            >
              {" "}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {" "}
                <div className="lg:col-span-6 relative">
                  {" "}
                  <div className="relative overflow-hidden rounded-lg">
                    {" "}
                    <img
                      className="w-full h-[400px] object-cover"
                      data-alt="Architectural photograph of authentic crystalline Makrana pure white marble stone block, displaying ultra-pure calcitic matrix, non-porous fine crystal density, and luminous light-dispersing aura."
                      src={IMG.whiteMarbleStone}
                    />{" "}
                    <div className="absolute bottom-3 left-3 bg-charcoal-monolith/85 px-3 py-1 rounded-xs text-sandstone-surface font-label-monument text-[11px] uppercase tracking-wider">
                      {" "}
                      98% Calcite Purity • Zero Iron Leaching{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-6 flex flex-col space-y-6">
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <span className="px-2.5 py-1 bg-secondary-container text-primary font-label-monument text-[10px] uppercase font-bold tracking-wider rounded-xs">
                      Garba Griha Pristine Grade
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Makrana Pure White Marble
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    {" "}
                    Mined continuously for over 2,000 years in the Nagaur district, Makrana marble
                    possesses a crystalline metamorphic matrix that does not absorb oil, milk, or
                    holy abhishek liquids, maintaining pure radiance for millennia.{" "}
                  </p>{" "}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Calcite Content
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        98.2% CaCO₃
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Non-porous crystalline lattice
                      </span>{" "}
                    </div>{" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Thermal Retention
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        Cool In Summer
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Ideal for sacred inner circumambulation
                      </span>{" "}
                    </div>{" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Origin
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        Makrana, Nagaur
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Rajasthan, India
                      </span>{" "}
                    </div>{" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Historical Sanctuaries
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        Dilwara & Somnath
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Transcendent temple interiors
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="p-4 bg-sandstone-surface/30 rounded-xs flex items-start gap-3.5">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      dry_cleaning
                    </span>{" "}
                    <div>
                      {" "}
                      <h4 className="font-title-editorial text-[16px] font-bold text-primary">
                        Sacred Consecration Trait
                      </h4>{" "}
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                        {" "}
                        Naturally translucent when carved to 10mm thickness, Makrana marble
                        disperses internal sanctum oil lamp light with a soft spiritual aura
                        unmatched by any synthetic stone.{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="hidden bg-card-elevated rounded-xl p-8 lg:p-10 shadow-md"
              id="content-granite"
            >
              {" "}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {" "}
                <div className="lg:col-span-6 relative">
                  {" "}
                  <div className="relative overflow-hidden rounded-lg">
                    {" "}
                    <img
                      className="w-full h-[400px] object-cover"
                      data-alt="Deep black lustrous authentic Krishna Shila black granite monolith specimen, demonstrating ultra-dense plutonic interlocking grain structure, high compressive rating, and acoustic resonant qualities."
                      src={IMG.graniteBlackStone}
                    />{" "}
                    <div className="absolute bottom-3 left-3 bg-charcoal-monolith/85 px-3 py-1 rounded-xs text-sandstone-surface font-label-monument text-[11px] uppercase tracking-wider">
                      {" "}
                      Density: 2.85 g/cm³ • Resonant Bell Tone{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-6 flex flex-col space-y-6">
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <span className="px-2.5 py-1 bg-secondary-container text-primary font-label-monument text-[10px] uppercase font-bold tracking-wider rounded-xs">
                      Dravidian Monolithic Pillar
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Krishna Shila Black Granite
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    {" "}
                    The premier material for sacred Murti consecration and massive
                    Brihadeeswara-class foundation plinths. Krishna Shila is an ultra-dense plutonic
                    rock that produces musical notes when struck by consecrated wooden mallets.{" "}
                  </p>{" "}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Compressive Strength
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        {"> 180 MPa"}
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Highest load capacity in architecture
                      </span>{" "}
                    </div>{" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Water Absorption
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        {"< 0.25%"}
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Zero water retention across millennia
                      </span>{" "}
                    </div>{" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Quarry Location
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        Kolar / Salem
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Southern Craton Granites
                      </span>{" "}
                    </div>{" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Acoustic Trait
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        Sapthaswara Pillar
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Musical acoustic tonal harmonics
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="p-4 bg-sandstone-surface/30 rounded-xs flex items-start gap-3.5">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      spatial_audio_off
                    </span>{" "}
                    <div>
                      {" "}
                      <h4 className="font-title-editorial text-[16px] font-bold text-primary">
                        Acoustic Vibration Science
                      </h4>{" "}
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                        {" "}
                        Its tight quartz-feldspar interlocking grains resonate when Vedic chants and
                        mantras are recited, acting as a natural mechanical amplifier for sanctum
                        vibrations.{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="hidden bg-card-elevated rounded-xl p-8 lg:p-10 shadow-md"
              id="content-basalt"
            >
              {" "}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {" "}
                <div className="lg:col-span-6 relative">
                  {" "}
                  <div className="relative overflow-hidden rounded-lg">
                    {" "}
                    <img
                      className="w-full h-[400px] object-cover"
                      data-alt="Architectural photograph of dark weathered Deccan basalt temple masonry from Western Ghats Hemadpanthi temple, showcasing diamond-cut mortise-tenon joinery, heavy moisture resistance, and dark grey earthy volcanic texture."
                      src={IMG.stepwell}
                    />{" "}
                    <div className="absolute bottom-3 left-3 bg-charcoal-monolith/85 px-3 py-1 rounded-xs text-sandstone-surface font-label-monument text-[11px] uppercase tracking-wider">
                      {" "}
                      Deccan Traps • Continental Flood Basalt{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-6 flex flex-col space-y-6">
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <span className="px-2.5 py-1 bg-secondary-container text-primary font-label-monument text-[10px] uppercase font-bold tracking-wider rounded-xs">
                      Hemadpanthi Heritage Standard
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Deccan Weather-Resistant Basalt
                  </h3>{" "}
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    {" "}
                    Forged in ancient volcanic eruptions, Maharashtra’s dark basalt has resisted
                    monsoon lashing for centuries in Ellora, Elephanta, and Trimbakeshwar.
                    Completely immune to acidic degradation and lichen decay.{" "}
                  </p>{" "}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Compressive Strength
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        {"> 110 MPa"}
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Tremendous resistance to seismic shifting
                      </span>{" "}
                    </div>{" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Weather Resistance
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        Grade AA
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Withstands heavy monsoon rainfall
                      </span>{" "}
                    </div>{" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Provenance
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        Western Ghats
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Maharashtra, India
                      </span>{" "}
                    </div>{" "}
                    <div className="p-3.5 bg-surface-container-low rounded-xs">
                      {" "}
                      <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary block mb-1">
                        Architectural Order
                      </span>{" "}
                      <span className="font-title-editorial text-title-editorial font-bold text-primary">
                        Hemadpanthi Style
                      </span>{" "}
                      <span className="font-body-sm text-[12px] text-on-surface-variant block mt-0.5">
                        Mortise-and-tenon interlocking masonry
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="p-4 bg-sandstone-surface/30 rounded-xs flex items-start gap-3.5">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      foundation
                    </span>{" "}
                    <div>
                      {" "}
                      <h4 className="font-title-editorial text-[16px] font-bold text-primary">
                        Dry Masonry Stability
                      </h4>{" "}
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                        {" "}
                        Extremely high specific gravity prevents displacement under gravitational
                        dead loads, allowing massive lintel spans without mortar adhesives.{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-charcoal-monolith text-sandstone-surface py-24 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto flex flex-col space-y-16">
            {" "}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8">
              {" "}
              <div className="flex flex-col space-y-3 max-w-2xl">
                {" "}
                <div className="inline-flex items-center gap-2 text-secondary-fixed font-label-monument text-label-monument uppercase tracking-[0.22em]">
                  {" "}
                  <span className="w-8 h-px bg-secondary-fixed"></span> Generational Lineage •
                  Sompura Master Guild{" "}
                </div>{" "}
                <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest font-normal">
                  {" "}
                  The Chisels of the{" "}
                  <span className="italic font-display-hero text-secondary-fixed">
                    Sompura Lineage
                  </span>{" "}
                </h2>{" "}
                <p className="font-body-lg text-body-lg text-stone-hairline">
                  {" "}
                  Over 350 master artisans practicing unbroken generational Guild masonry across
                  twelve centuries of canonical temple engineering.{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                {" "}
                <div className="px-4 py-2.5 bg-inverse-surface rounded-xs flex items-center gap-3">
                  {" "}
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    handyman
                  </span>{" "}
                  <span className="font-label-ui text-body-sm text-sandstone-surface font-semibold">
                    100% Hand-Chiseled Detailing
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {" "}
              <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-xl flex flex-col justify-between group hover:bg-charcoal-raised transition-all">
                {" "}
                <div>
                  {" "}
                  <div className="relative h-64 overflow-hidden">
                    {" "}
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-alt="Editorial close-up documentary shot of elder master Sthapati architect drafting sacred Ayadi Vastu mandala geometry on parchment alongside modern brass drafting compasses and hand-carved stone scale rulers with warm ambient temple oil lamp lighting."
                      src={IMG.vastuBlueprint}
                    />{" "}
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-charcoal-monolith/90 rounded-xs text-secondary-fixed font-label-monument text-[10px] tracking-wider uppercase font-semibold">
                      {" "}
                      Canon I • Shastra{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="p-6 flex flex-col space-y-3">
                    {" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-widest text-secondary-fixed">
                      01 • Proportional Science
                    </span>{" "}
                    <h3 className="font-title-editorial text-headline-sm text-surface-container-lowest font-semibold">
                      {" "}
                      The Sacred Geometry of Ayadi{" "}
                    </h3>{" "}
                    <p className="font-body-sm text-body-sm text-stone-hairline leading-relaxed">
                      {" "}
                      Hand-drafted palm-leaf and CAD mandala grids determining the exact cosmic
                      vibration of the temple plan. Six mathematical Ayadi tests (Aya, Vyaya, Yoni,
                      Rashi, Varna, and Tithi) ensure the sanctum radiates harmony.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="px-6 pb-6 pt-2">
                  {" "}
                  <div className="p-3 bg-charcoal-monolith/60 rounded-xs flex items-center justify-between text-body-sm font-label-ui text-secondary-fixed">
                    {" "}
                    <span>Tolerance Factor</span>{" "}
                    <span className="font-bold font-title-editorial text-surface-container-lowest">
                      Zero Variance
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-xl flex flex-col justify-between group hover:bg-charcoal-raised transition-all">
                {" "}
                <div>
                  {" "}
                  <div className="relative h-64 overflow-hidden">
                    {" "}
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-alt="Macro documentary photo of two monumental carved sandstone blocks sliding together using dry tenon-and-mortise interlocking joinery with zero cement or mortar, demonstrating razor-sharp 0.5 millimeter tolerance executed by master stonemasons."
                      src={IMG.interlockingJoint}
                    />{" "}
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-charcoal-monolith/90 rounded-xs text-secondary-fixed font-label-monument text-[10px] tracking-wider uppercase font-semibold">
                      {" "}
                      Canon II • Engineering{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="p-6 flex flex-col space-y-3">
                    {" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-widest text-secondary-fixed">
                      02 • Monolithic Assembly
                    </span>{" "}
                    <h3 className="font-title-editorial text-headline-sm text-surface-container-lowest font-semibold">
                      {" "}
                      Tenon-and-Mortise Dry Joinery{" "}
                    </h3>{" "}
                    <p className="font-body-sm text-body-sm text-stone-hairline leading-relaxed">
                      {" "}
                      Zero-cement interlocking sockets carved to 0.5mm tolerance, allowing stone
                      blocks to self-lock under gravitational dead-load. Structural expansion
                      grooves accommodate thermal cycles without stress fractures.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="px-6 pb-6 pt-2">
                  {" "}
                  <div className="p-3 bg-charcoal-monolith/60 rounded-xs flex items-center justify-between text-body-sm font-label-ui text-secondary-fixed">
                    {" "}
                    <span>Mortar Requirement</span>{" "}
                    <span className="font-bold font-title-editorial text-surface-container-lowest">
                      0.0% Mortar
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-xl flex flex-col justify-between group hover:bg-charcoal-raised transition-all">
                {" "}
                <div>
                  {" "}
                  <div className="relative h-64 overflow-hidden">
                    {" "}
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-alt="Action documentary photography of skilled Sompura artisan carving an ornate Apsara celestial dancer into dense sandstone with traditional tempered steel chisel and wooden mallet, fine stone dust catching cinematic shaft of morning light."
                      src={IMG.artisanCarving}
                    />{" "}
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-charcoal-monolith/90 rounded-xs text-secondary-fixed font-label-monument text-[10px] tracking-wider uppercase font-semibold">
                      {" "}
                      Canon III • Shilpa Ratna{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="p-6 flex flex-col space-y-3">
                    {" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-widest text-secondary-fixed">
                      03 • Devotional Sculpture
                    </span>{" "}
                    <h3 className="font-title-editorial text-headline-sm text-surface-container-lowest font-semibold">
                      {" "}
                      Iconographic Talamana Sculpting{" "}
                    </h3>{" "}
                    <p className="font-body-sm text-body-sm text-stone-hairline leading-relaxed">
                      {" "}
                      Carving divine Apsaras, Yalis, and Sanctum Murti according to canonical
                      proportions detailed in the Shilpa Ratna. The sacred Dasha-tala scale dictates
                      exact plumb-line ratios from forehead to paduka plinth.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="px-6 pb-6 pt-2">
                  {" "}
                  <div className="p-3 bg-charcoal-monolith/60 rounded-xs flex items-center justify-between text-body-sm font-label-ui text-secondary-fixed">
                    {" "}
                    <span>Canon Rule</span>{" "}
                    <span className="font-bold font-title-editorial text-surface-container-lowest">
                      Dasha-Tala System
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-8 bg-inverse-surface rounded-xl flex flex-wrap items-center justify-between gap-8">
              {" "}
              <div className="flex flex-col">
                {" "}
                <span className="font-display-hero text-headline-lg font-bold text-secondary-fixed">
                  350+
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-stone-hairline mt-1">
                  Master Sompura Masons
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col">
                {" "}
                <span className="font-display-hero text-headline-lg font-bold text-secondary-fixed">
                  1,000 Yrs
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-stone-hairline mt-1">
                  Engineered Longevity
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col">
                {" "}
                <span className="font-display-hero text-headline-lg font-bold text-secondary-fixed">
                  0.5 mm
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-stone-hairline mt-1">
                  Chisel Joint Tolerance
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col">
                {" "}
                <span className="font-display-hero text-headline-lg font-bold text-secondary-fixed">
                  12 Gen
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-stone-hairline mt-1">
                  Direct Hereditary Lineage
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col">
                {" "}
                <span className="font-display-hero text-headline-lg font-bold text-secondary-fixed">
                  100%
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-stone-hairline mt-1">
                  Shilpa Shastra Consecration
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Authentic Stone Craftsmanship & Architectural Details Showcase */}
        <CraftsmanshipGallery
          allowedCategories={[
            "jali-lattice",
            "wall-panels",
            "ceilings-interiors",
            "jharokha-facades",
            "materials-slabs",
            "sculpture-deepmal",
          ]}
          initialCategory="all"
          title="Shilpa Shastra Architectural Craftsmanship & Stone Detailing"
          subtitle="Explore our comprehensive visual codex spanning hand-carved stone jalis, ornamental wall friezes, concentric ceiling mandalas, cantilevered jharokhas, raw stone materials, and sacred sculptures."
          badge="Authentic Artisanal Stonework"
        />
        <section className="w-full bg-surface py-20 px-gutter" id="drawing-archive">
          {" "}
          <div className="max-w-7xl mx-auto flex flex-col space-y-12">
            {" "}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              {" "}
              <div className="flex flex-col space-y-2 max-w-2xl">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary">
                  Architectural Technical Dossier
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Anatomy of the Classical Shikhara
                </h2>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" "}
                  Technical elevation schematics depicting the three classical Nagara tower
                  classifications and the vertical hierarchy from earth-binding Jagati to the
                  celestial Kalasha finial.{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex items-center gap-2">
                {" "}
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container rounded-xs font-label-ui text-body-sm text-primary font-semibold">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">menu_book</span> Shilpa
                  Drafting Archive{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-surface-container-low rounded-xl p-6 lg:p-10 shadow-xs">
              {" "}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {" "}
                <div className="lg:col-span-8 bg-card-elevated rounded-lg p-6 shadow-md flex flex-col space-y-4">
                  {" "}
                  <div className="flex items-center justify-between pb-3">
                    {" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-wider text-primary font-bold">
                      Plate Ref: SKH-ELEV-104 • Nagara Latina Superstructure
                    </span>{" "}
                    <span className="font-label-ui text-[12px] text-stone-hairline">
                      Imperial Drafting Standard
                    </span>{" "}
                  </div>{" "}
                  <div className="w-full bg-surface-container-lowest rounded-xs p-6 flex flex-col items-center justify-center relative overflow-hidden">
                    {" "}
                    <svg
                      className="w-full h-auto max-h-[460px] text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 800 500"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <line
                        stroke="#c49a52"
                        strokeDasharray="4 4"
                        strokeWidth="1"
                        x1="400"
                        x2="400"
                        y1="20"
                        y2="480"
                      />{" "}
                      <path
                        d="M400 30 L400 55 M395 55 L405 55 M388 65 C388 55 412 55 412 65 C412 75 388 75 388 65 Z"
                        fill="#ffd083"
                        fillOpacity="0.3"
                        stroke="#681b24"
                        strokeWidth="1.8"
                      />{" "}
                      <circle cx="400" cy="50" fill="#681b24" r="4" />{" "}
                      <ellipse
                        cx="400"
                        cy="90"
                        fill="#e5d7c3"
                        fillOpacity="0.4"
                        rx="42"
                        ry="14"
                        stroke="#681b24"
                        strokeWidth="2"
                      />{" "}
                      <path
                        d="M362 90 C362 82 438 82 438 90 C438 98 362 98 362 90 Z"
                        stroke="#681b24"
                        strokeWidth="1.5"
                      />{" "}
                      <line stroke="#887272" strokeWidth="1" x1="380" x2="378" y1="80" y2="98" />{" "}
                      <line stroke="#887272" strokeWidth="1" x1="390" x2="390" y1="78" y2="102" />{" "}
                      <line stroke="#887272" strokeWidth="1" x1="400" x2="400" y1="76" y2="104" />{" "}
                      <line stroke="#887272" strokeWidth="1" x1="410" x2="410" y1="78" y2="102" />{" "}
                      <line stroke="#887272" strokeWidth="1" x1="420" x2="422" y1="80" y2="98" />{" "}
                      <rect
                        fill="#f0eee7"
                        height="12"
                        stroke="#681b24"
                        strokeWidth="1.5"
                        width="36"
                        x="382"
                        y="104"
                      />{" "}
                      <path
                        d="M375 116 Q340 220 310 320 L490 320 Q460 220 425 116 Z"
                        fill="#fcf9f2"
                        stroke="#681b24"
                        strokeWidth="2"
                      />{" "}
                      <path
                        d="M368 150 L432 150 M360 180 L440 180 M350 210 L450 210 M340 240 L460 240 M330 270 L470 270 M320 295 L480 295"
                        stroke="#a39e94"
                        strokeDasharray="2 2"
                        strokeWidth="1"
                      />{" "}
                      <path
                        d="M310 320 Q330 250 345 230 L355 240 Q340 280 330 320 Z"
                        fill="#e5d7c3"
                        stroke="#681b24"
                        strokeWidth="1.5"
                      />{" "}
                      <path
                        d="M490 320 Q470 250 455 230 L445 240 Q460 280 470 320 Z"
                        fill="#e5d7c3"
                        stroke="#681b24"
                        strokeWidth="1.5"
                      />{" "}
                      <line
                        stroke="#c49a52"
                        strokeWidth="1.2"
                        x1="388"
                        x2="382"
                        y1="120"
                        y2="320"
                      />{" "}
                      <line
                        stroke="#c49a52"
                        strokeWidth="1.2"
                        x1="412"
                        x2="418"
                        y1="120"
                        y2="320"
                      />{" "}
                      <rect
                        fill="#ebe8e1"
                        height="70"
                        stroke="#681b24"
                        strokeWidth="2"
                        width="220"
                        x="290"
                        y="320"
                      />{" "}
                      <rect
                        fill="#fcf9f2"
                        height="50"
                        stroke="#7a5816"
                        strokeWidth="1.5"
                        width="50"
                        x="375"
                        y="335"
                      />{" "}
                      <path d="M375 335 Q400 320 425 335" stroke="#7a5816" strokeWidth="1.5" />{" "}
                      <line stroke="#a39e94" strokeWidth="1" x1="330" x2="330" y1="320" y2="390" />{" "}
                      <line stroke="#a39e94" strokeWidth="1" x1="470" x2="470" y1="320" y2="390" />{" "}
                      <rect
                        fill="#e5d7c3"
                        height="25"
                        stroke="#681b24"
                        strokeWidth="1.8"
                        width="260"
                        x="270"
                        y="390"
                      />{" "}
                      <line stroke="#681b24" strokeWidth="1" x1="270" x2="530" y1="402" y2="402" />{" "}
                      <polygon
                        fill="#dcdad3"
                        points="230,460 255,415 545,415 570,460"
                        stroke="#681b24"
                        strokeWidth="2"
                      />{" "}
                      <line stroke="#a39e94" strokeWidth="1" x1="240" x2="560" y1="440" y2="440" />{" "}
                      <line
                        stroke="#7a5816"
                        strokeDasharray="2 2"
                        strokeWidth="1"
                        x1="420"
                        x2="550"
                        y1="45"
                        y2="45"
                      />{" "}
                      <circle cx="550" cy="45" fill="#7a5816" r="3" />{" "}
                      <text
                        fill="#681b24"
                        fontFamily="Manrope"
                        fontSize="11"
                        fontWeight="700"
                        x="560"
                        y="49"
                      >
                        KALASHA (Water-Vessel Pinnacle)
                      </text>{" "}
                      <line
                        stroke="#7a5816"
                        strokeDasharray="2 2"
                        strokeWidth="1"
                        x1="445"
                        x2="550"
                        y1="90"
                        y2="90"
                      />{" "}
                      <circle cx="550" cy="90" fill="#7a5816" r="3" />{" "}
                      <text
                        fill="#681b24"
                        fontFamily="Manrope"
                        fontSize="11"
                        fontWeight="700"
                        x="560"
                        y="94"
                      >
                        AMALAKA (Cosmic Crown Ribbed Disc)
                      </text>{" "}
                      <line
                        stroke="#7a5816"
                        strokeDasharray="2 2"
                        strokeWidth="1"
                        x1="465"
                        x2="550"
                        y1="210"
                        y2="210"
                      />{" "}
                      <circle cx="550" cy="210" fill="#7a5816" r="3" />{" "}
                      <text
                        fill="#681b24"
                        fontFamily="Manrope"
                        fontSize="11"
                        fontWeight="700"
                        x="560"
                        y="214"
                      >
                        SHIKHARA (Nagara Curvilinear Tower)
                      </text>{" "}
                      <line
                        stroke="#7a5816"
                        strokeDasharray="2 2"
                        strokeWidth="1"
                        x1="515"
                        x2="550"
                        y1="355"
                        y2="355"
                      />{" "}
                      <circle cx="550" cy="355" fill="#7a5816" r="3" />{" "}
                      <text
                        fill="#681b24"
                        fontFamily="Manrope"
                        fontSize="11"
                        fontWeight="700"
                        x="560"
                        y="359"
                      >
                        JANGHA (Sanctum Wall with Deva-Koshtha)
                      </text>{" "}
                      <line
                        stroke="#7a5816"
                        strokeDasharray="2 2"
                        strokeWidth="1"
                        x1="230"
                        x2="110"
                        y1="445"
                        y2="445"
                      />{" "}
                      <circle cx="110" cy="445" fill="#7a5816" r="3" />{" "}
                      <text
                        fill="#681b24"
                        fontFamily="Manrope"
                        fontSize="11"
                        fontWeight="700"
                        x="10"
                        y="449"
                      >
                        JAGATI (Elevated Plinth)
                      </text>{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-[12px] pt-1">
                    {" "}
                    <span>Projection Order: Pancharatha (Five-bay plan)</span>{" "}
                    <span>Canon: Manasara Shilpa Sastra • Chapter XX</span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="lg:col-span-4 flex flex-col space-y-4">
                  {" "}
                  <h3 className="font-title-editorial text-headline-sm text-primary font-semibold">
                    Three Classical Typologies
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Depending on geographical mandala prescriptions, the Shikhara takes one of three
                    canonical configurations:{" "}
                  </p>{" "}
                  <div className="p-4 bg-surface rounded-lg shadow-xs">
                    {" "}
                    <div className="flex items-center justify-between">
                      {" "}
                      <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                        Type 01
                      </span>{" "}
                      <span className="font-label-ui text-[11px] text-stone-hairline">
                        Pure Unbroken
                      </span>{" "}
                    </div>{" "}
                    <h4 className="font-title-editorial text-title-editorial text-primary font-bold mt-1">
                      Latina / Rekha-Prasada
                    </h4>{" "}
                    <p className="font-body-sm text-[13px] text-on-surface-variant mt-1">
                      {" "}
                      A single unbroken curvilinear tower rising smoothly to the neck, representing
                      Mount Meru in its pure archetypal form. Typical of early Odisha and Western
                      Indian sanctums.{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="p-4 bg-surface rounded-lg shadow-xs">
                    {" "}
                    <div className="flex items-center justify-between">
                      {" "}
                      <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                        Type 02
                      </span>{" "}
                      <span className="font-label-ui text-[11px] text-stone-hairline">
                        Multi-Spired Cluster
                      </span>{" "}
                    </div>{" "}
                    <h4 className="font-title-editorial text-title-editorial text-primary font-bold mt-1">
                      Sekhari Superstructure
                    </h4>{" "}
                    <p className="font-body-sm text-[13px] text-on-surface-variant mt-1">
                      {" "}
                      A central master tower surrounded by cascading clusters of half-spires
                      (urushringas) that amplify structural mass and seismic interlocking
                      resistance. Seen in Khajuraho and Somnath.{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="p-4 bg-surface rounded-lg shadow-xs">
                    {" "}
                    <div className="flex items-center justify-between">
                      {" "}
                      <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                        Type 03
                      </span>{" "}
                      <span className="font-label-ui text-[11px] text-stone-hairline">
                        Tiered Miniature Spires
                      </span>{" "}
                    </div>{" "}
                    <h4 className="font-title-editorial text-title-editorial text-primary font-bold mt-1">
                      Bhumija Style
                    </h4>{" "}
                    <p className="font-body-sm text-[13px] text-on-surface-variant mt-1">
                      {" "}
                      Characterized by vertical rows of miniature shikharas arranged horizontally
                      across distinct stepped tiers (bhumis), giving the visual impression of
                      spinning divine vortexes.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface-container py-20 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto flex flex-col space-y-12">
            {" "}
            <div className="flex flex-col space-y-3 max-w-3xl">
              {" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary">
                Earth-Honoring Principles
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Ethical Quarry Extraction & Guild Welfare
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" "}
                In alignment with the Vedic Bhoomi Sukta, stone cannot be violently detonated. Our
                heritage extraction methods preserve rock crystal continuity while safeguarding
                artisan generational safety.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {" "}
              <div className="p-6 bg-card-elevated rounded-xl shadow-xs flex flex-col space-y-4">
                {" "}
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  {" "}
                  <span className="material-symbols-outlined text-[26px]">eco</span>{" "}
                </div>{" "}
                <h3 className="font-title-editorial text-headline-sm text-primary font-semibold">
                  Zero-Blasting Diamond Wire Slicing
                </h3>{" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {" "}
                  We strictly forbid dynamite or percussive explosive quarrying. Blasting introduces
                  microscopic shock fractures inside stone blocks that compromise 1000-year
                  longevity. All extraction uses hydro-diamond cable saws.{" "}
                </p>{" "}
                <div className="pt-2 font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                  {" "}
                  Zero Internal Fractures Guaranteed{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-6 bg-card-elevated rounded-xl shadow-xs flex flex-col space-y-4">
                {" "}
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  {" "}
                  <span className="material-symbols-outlined text-[26px]">flaky</span>{" "}
                </div>{" "}
                <h3 className="font-title-editorial text-headline-sm text-primary font-semibold">
                  Stratum-Level Ultrasonic Testing
                </h3>{" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {" "}
                  Every rough block is subjected to Non-Destructive Ultrasonic Pulse Velocity (UPV)
                  scanning in compliance with IS 516 before leaving the quarry, certifying that
                  compressive wave density matches shastra requirements.{" "}
                </p>{" "}
                <div className="pt-2 font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                  {" "}
                  UPV Monolith Density Verification{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-6 bg-card-elevated rounded-xl shadow-xs flex flex-col space-y-4">
                {" "}
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  {" "}
                  <span className="material-symbols-outlined text-[26px]">
                    volunteer_activism
                  </span>{" "}
                </div>{" "}
                <h3 className="font-title-editorial text-headline-sm text-primary font-semibold">
                  Guild Welfare & Health Dignity
                </h3>{" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {" "}
                  Temple craftsmen work in advanced wet-chiseling ateliers with full dust mitigation
                  (preventing silicosis), comprehensive healthcare trusts, fair wage protection, and
                  hereditary apprentice schooling stipends.{" "}
                </p>{" "}
                <div className="pt-2 font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                  {" "}
                  Generational Artisan Security{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-primary-container text-on-primary py-20 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {" "}
            <div className="lg:col-span-8 flex flex-col space-y-4">
              {" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary-fixed">
                Commissioning Liaison
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-on-primary font-normal">
                {" "}
                Commission Sacred Stone Craftsmanship{" "}
              </h2>{" "}
              <p className="font-body-lg text-body-lg text-primary-fixed leading-relaxed max-w-2xl">
                {" "}
                Whether you represent an esteemed temple trust embarking on a monumental multi-acre
                sanctum or a patron council seeking certified stone restoration, our chief sthapatis
                and lithic engineers provide comprehensive counsel.{" "}
              </p>{" "}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {" "}
                <div className="flex items-center gap-2 text-primary-fixed">
                  {" "}
                  <span className="material-symbols-outlined text-secondary-container text-[20px]">
                    location_on
                  </span>{" "}
                  <span className="font-body-sm text-body-sm">
                    Central Peetham: Pune, Maharashtra, India
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center gap-2 text-primary-fixed">
                  {" "}
                  <span className="material-symbols-outlined text-secondary-container text-[20px]">
                    call
                  </span>{" "}
                  <span className="font-body-sm text-body-sm font-semibold tracking-wider">
                    Primary: +91 99411 21111 • Secondary: +91 75170 15555
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col space-y-4 bg-primary p-6 rounded-xl shadow-lg">
              <span className="font-title-editorial text-title-editorial text-on-primary font-semibold">
                Initiate Sthapati Advisory
              </span>
              <p className="font-body-sm text-body-sm text-primary-fixed leading-relaxed">
                Request certified stone samples, quarry chemical assays, or arrange a private
                consultation with our Chief Sthapati council.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-secondary-container text-on-secondary-container font-label-ui text-label-ui uppercase tracking-widest font-bold rounded-xs shadow-sm hover:bg-secondary-fixed transition-colors"
              >
                <span>Schedule Patron Session</span>
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </Link>
              <div className="flex flex-col gap-2">
                <a
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-container text-on-primary font-label-ui text-label-ui uppercase tracking-widest font-semibold rounded-xs hover:bg-charcoal-monolith transition-colors text-[12px]"
                  href="tel:+919941121111"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  <span>Primary: +91 99411 21111</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-container text-on-primary font-label-ui text-label-ui uppercase tracking-widest font-semibold rounded-xs hover:bg-charcoal-monolith transition-colors text-[12px] border border-gold/30"
                  href="tel:+917517015555"
                >
                  <span className="material-symbols-outlined text-[16px]">phone_enabled</span>
                  <span>Secondary: +91 75170 15555</span>
                </a>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>{" "}
    </main>
  );
}

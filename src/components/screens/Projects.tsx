import { Link } from "@tanstack/react-router";
import { IMG } from "@/components/site/images";
import { useScreenScript } from "@/components/site/use-screen-script";
import { setup } from "./scripts/Projects";
import { CraftsmanshipGallery } from "@/components/portfolio/CraftsmanshipGallery";

/* Generated from the Stitch design export (screen 09). */
export function ProjectsScreen() {
  const S = useScreenScript(setup);
  return (
    <main className="w-full pt-20 bg-surface">
      <div className="flex flex-col w-full">
        {" "}
        <section className="w-full bg-surface-container-high py-space-sm">
          {" "}
          <div className="max-w-[1320px] mx-auto px-gutter flex flex-wrap items-center justify-between gap-space-sm">
            {" "}
            <div className="flex items-center gap-space-xs font-label-monument text-label-monument text-secondary">
              {" "}
              <span className="hover:text-primary cursor-pointer transition-colors uppercase">
                ARCHIVE CODEX
              </span>{" "}
              <span className="text-stone-hairline">/</span>{" "}
              <span className="hover:text-primary cursor-pointer transition-colors uppercase">
                MONUMENTAL PORTFOLIO
              </span>{" "}
              <span className="text-stone-hairline">/</span>{" "}
              <span className="text-primary font-bold tracking-wider">
                CODEX VOL. IX · 36+ CONSECRATED SANCTUARIES
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-space-sm">
              {" "}
              <span className="inline-flex items-center gap-1 font-label-monument text-label-monument text-on-surface-variant uppercase">
                {" "}
                <span className="w-2 h-2 rounded-4xl bg-on-tertiary-container animate-pulse"></span>{" "}
                ACTIVE CONSECRATIONS: 8 STATES{" "}
              </span>{" "}
              <span className="text-stone-hairline">·</span>{" "}
              <span className="font-label-monument text-label-monument text-muted-sage uppercase">
                ACCREDITATION: SHILPA SHASTRA COVENANT
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface pt-space-xl pb-space-lg">
          {" "}
          <div className="max-w-[1320px] mx-auto px-gutter flex flex-col gap-space-lg">
            {" "}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
              {" "}
              <div className="max-w-3xl flex flex-col gap-space-xs">
                {" "}
                <div className="flex items-center gap-space-xs text-secondary mb-1">
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    account_balance
                  </span>{" "}
                  <span className="font-label-monument text-label-monument tracking-widest uppercase">
                    MONUMENTAL STONE CODEX · 2012–2025
                  </span>{" "}
                </div>{" "}
                <h1 className="font-display-hero text-display-hero text-primary tracking-tight">
                  {" "}
                  Our Work. Our Architectural Legacy.{" "}
                </h1>{" "}
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs">
                  {" "}
                  A curated monograph of monumental sanctuaries, ornate mandapas, and heritage
                  dry-stone restorations executed across the sacred geography of the Indian
                  subcontinent.{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex items-center gap-space-md p-space-md bg-surface-container rounded-xl shadow-xs self-start lg:self-auto">
                {" "}
                <div className="w-14 h-14 rounded-4xl bg-primary flex items-center justify-center text-secondary-container shadow-inner">
                  {" "}
                  <span
                    className="material-symbols-outlined text-[30px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    temple_hindu
                  </span>{" "}
                </div>{" "}
                <div className="flex flex-col">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase text-secondary font-bold">
                    1,000-YEAR MONOLITHIC COVENANT
                  </span>{" "}
                  <span className="font-title-editorial text-title-editorial text-primary">
                    Interlocking Dry-Stone Jointing
                  </span>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Zero carbon steel · Zero tensile decay
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-md bg-surface-container-low rounded-xl shadow-xs">
              {" "}
              <div className="flex flex-col gap-space-xs p-space-sm bg-surface rounded-lg">
                {" "}
                <div className="flex items-baseline gap-space-xs">
                  {" "}
                  <span className="font-display-hero text-[44px] leading-none text-primary font-serif">
                    36+
                  </span>{" "}
                  <span className="font-label-monument text-label-monument text-secondary uppercase font-bold">
                    Sanctuaries
                  </span>{" "}
                </div>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Consecrated with Prana Pratishtha rites
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col gap-space-xs p-space-sm bg-surface rounded-lg">
                {" "}
                <div className="flex items-baseline gap-space-xs">
                  {" "}
                  <span className="font-display-hero text-[44px] leading-none text-primary font-serif">
                    10+
                  </span>{" "}
                  <span className="font-label-monument text-label-monument text-secondary uppercase font-bold">
                    States
                  </span>{" "}
                </div>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Pan-Indian sacred architectural presence
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col gap-space-xs p-space-sm bg-surface rounded-lg">
                {" "}
                <div className="flex items-baseline gap-space-xs">
                  {" "}
                  <span className="font-display-hero text-[44px] leading-none text-on-tertiary-container font-serif">
                    100%
                  </span>{" "}
                  <span className="font-label-monument text-label-monument text-secondary uppercase font-bold">
                    Zero-RCC
                  </span>{" "}
                </div>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Monolithic granite & sandstone assembly
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col gap-space-xs p-space-sm bg-surface rounded-lg">
                {" "}
                <div className="flex items-baseline gap-space-xs">
                  {" "}
                  <span className="font-display-hero text-[44px] leading-none text-primary font-serif">
                    1,000
                  </span>{" "}
                  <span className="font-label-monument text-label-monument text-secondary uppercase font-bold">
                    Year Life
                  </span>{" "}
                </div>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Shilpa Shastra engineering guarantee
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="sticky top-20 z-40 w-full bg-surface/95 backdrop-blur-md shadow-xs py-space-sm">
          {" "}
          <div className="max-w-[1320px] mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-space-md">
            {" "}
            <div
              className="flex items-center gap-space-xs overflow-x-auto w-full md:w-auto pb-1 md:pb-0"
              id="filterContainer"
            >
              {" "}
              <button
                className="filter-btn px-space-md py-space-xs bg-on-tertiary-container text-on-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider transition-all duration-200 shadow-xs"
                data-category="all"
              >
                {" "}
                ALL WORK{" "}
              </button>{" "}
              <button
                className="filter-btn px-space-md py-space-xs bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider transition-all duration-200"
                data-category="stone-temples"
              >
                {" "}
                STONE TEMPLES{" "}
              </button>{" "}
              <button
                className="filter-btn px-space-md py-space-xs bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider transition-all duration-200"
                data-category="marble-temples"
              >
                {" "}
                MARBLE TEMPLES{" "}
              </button>{" "}
              <button
                className="filter-btn px-space-md py-space-xs bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider transition-all duration-200"
                data-category="gateways"
              >
                {" "}
                TEMPLE GATEWAYS{" "}
              </button>{" "}
              <button
                className="filter-btn px-space-md py-space-xs bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider transition-all duration-200"
                data-category="craftsmanship"
              >
                {" "}
                STONE CRAFTSMANSHIP{" "}
              </button>{" "}
              <button
                className="filter-btn px-space-md py-space-xs bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider transition-all duration-200"
                data-category="heritage"
              >
                {" "}
                HERITAGE RESTORATION{" "}
              </button>{" "}
            </div>{" "}
            <div className="flex items-center gap-space-sm w-full md:w-auto justify-end">
              {" "}
              <div className="relative flex-1 md:w-64">
                {" "}
                <input
                  className="w-full pl-9 pr-space-sm py-1.5 bg-surface-container-lowest text-on-surface rounded-lg font-body-sm text-body-sm shadow-xs focus:outline-hidden focus:bg-surface-bright"
                  id="projectSearch"
                  placeholder="Search by deity, stone, site..."
                  type="text"
                />{" "}
                <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-hairline text-[18px]">
                  search
                </span>{" "}
              </div>{" "}
              <div className="flex items-center bg-surface-container p-0.5 rounded-lg shadow-xs">
                {" "}
                <button
                  className="p-1.5 rounded-xs bg-surface text-primary shadow-xs"
                  id="viewGridBtn"
                  title="Masonry Grid View"
                >
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">grid_view</span>{" "}
                </button>{" "}
                <button
                  className="p-1.5 rounded-xs text-on-surface-variant hover:text-primary transition-colors"
                  id="viewListBtn"
                  title="Monograph Codex List View"
                >
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">view_agenda</span>{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface py-space-xl">
          {" "}
          <div className="max-w-[1320px] mx-auto px-gutter">
            {" "}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg"
              id="monographContainer"
            >
              {" "}
              <article
                className="project-card lg:col-span-8 flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl"
                data-category="stone-temples"
              >
                {" "}
                <div className="relative w-full h-[460px] overflow-hidden bg-surface-container">
                  {" "}
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Majestic high-angle architectural photograph of Shri Mahalakshmi Maha Mandir Sanctuary in Maharashtra Western Ghats, sculpted from hand-hewn pinkish-buff Bansi Paharpur sandstone, intricate dry-stone Nagara Latina-Sekhari shikhara spires glowing under warm golden morning light, surrounded by misty sacred hills, captured with an editorial architectural camera."
                    src={IMG.templeComplex}
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/80 via-charcoal-monolith/20 to-transparent"></div>{" "}
                  <div className="absolute top-space-md left-space-md flex flex-wrap items-center gap-space-xs">
                    {" "}
                    <span className="px-space-sm py-1 bg-surface/90 backdrop-blur-xs text-primary font-label-monument text-label-monument uppercase rounded-lg shadow-xs">
                      {" "}
                      NAGARA LATINA-SEKHARI{" "}
                    </span>{" "}
                    <span className="px-space-sm py-1 bg-primary text-on-primary font-label-monument text-label-monument uppercase rounded-lg shadow-xs">
                      {" "}
                      96,000 CU.FT. STONE{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="absolute top-space-md right-space-md">
                    {" "}
                    <span className="px-space-sm py-1 bg-on-tertiary-container text-on-primary font-label-monument text-label-monument uppercase rounded-lg shadow-xs flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">verified</span>{" "}
                      CONSECRATED{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="absolute bottom-space-md left-space-md right-space-md flex flex-col gap-1 text-on-primary">
                    {" "}
                    <span className="font-label-monument text-label-monument text-secondary-container uppercase tracking-wider">
                      PLATE NO. 01 · SANCTUARY CODEX
                    </span>{" "}
                    <h2 className="font-headline-md text-headline-md text-on-primary">
                      Shri Mahalakshmi Maha Mandir Sanctuary
                    </h2>{" "}
                    <p className="font-body-sm text-body-sm text-surface-container-high line-clamp-1">
                      Western Ghats Sanctuary Ridge, Maharashtra · Bansi Paharpur Sandstone
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-space-lg flex flex-col justify-between gap-space-md flex-1">
                  {" "}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    {" "}
                    <div className="flex flex-col">
                      {" "}
                      <span className="font-label-monument text-label-monument text-muted-sage uppercase">
                        Sthapati Council
                      </span>{" "}
                      <span className="font-title-editorial text-[17px] text-primary">
                        K. R. Sompura & Associates
                      </span>{" "}
                    </div>{" "}
                    <div className="flex flex-col">
                      {" "}
                      <span className="font-label-monument text-label-monument text-muted-sage uppercase">
                        Ayadi Ratio / Mandala
                      </span>{" "}
                      <span className="font-title-editorial text-[17px] text-primary">
                        Manduka Mandala (64 Padas)
                      </span>{" "}
                    </div>{" "}
                    <div className="flex flex-col">
                      {" "}
                      <span className="font-label-monument text-label-monument text-muted-sage uppercase">
                        Dry-Stone Joinery
                      </span>{" "}
                      <span className="font-title-editorial text-[17px] text-primary">
                        Zero Carbon-Steel / Mortise
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="pt-space-md flex items-center justify-between">
                    {" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-lg">
                      {" "}
                      Engineered to withstand seismic loads via counter-weighted gravity
                      interlocking. Features a 108-foot central spire flanked by 24
                      urushringas.{" "}
                    </p>{" "}
                    <button
                      className="inline-flex items-center gap-space-xs font-label-ui text-label-ui uppercase tracking-wider text-primary hover:text-on-tertiary-container transition-colors group/btn"
                      onClick={(e) => S.current.h0?.(e)}
                    >
                      {" "}
                      <span>INSPECT CODEX</span>{" "}
                      <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">
                        arrow_forward
                      </span>{" "}
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </article>{" "}
              <article
                className="project-card lg:col-span-4 flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl"
                data-category="gateways"
              >
                {" "}
                <div className="relative w-full h-[320px] overflow-hidden bg-surface-container">
                  {" "}
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Vertical monument view of a towering 11-tier Raja Gopuram celestial gateway carved from monolithic South Indian gray granite with micro-detailed bas-reliefs of Vedic deities under a dramatic deep amber twilight sky, highlighting sculptural clarity and timeless craftsmanship."
                    src={IMG.rajagopuram}
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/80 via-charcoal-monolith/20 to-transparent"></div>{" "}
                  <div className="absolute top-space-md left-space-md">
                    {" "}
                    <span className="px-space-sm py-1 bg-surface/90 backdrop-blur-xs text-primary font-label-monument text-label-monument uppercase rounded-lg shadow-xs">
                      {" "}
                      11 TALAS (TIERS){" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="absolute bottom-space-md left-space-md right-space-md flex flex-col gap-1 text-on-primary">
                    {" "}
                    <span className="font-label-monument text-label-monument text-secondary-container uppercase tracking-wider">
                      PLATE NO. 02 · CELESTIAL PORTAL
                    </span>{" "}
                    <h3 className="font-headline-sm text-headline-sm text-on-primary">
                      Raja Gopuram Celestial Gateway
                    </h3>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-space-md flex flex-col justify-between gap-space-md flex-1">
                  {" "}
                  <div className="flex flex-col gap-space-xs">
                    {" "}
                    <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                      {" "}
                      <span>Typology</span>{" "}
                      <span className="font-semibold text-on-surface">
                        Dravida Vimana Assembly
                      </span>{" "}
                    </div>{" "}
                    <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                      {" "}
                      <span>Location</span>{" "}
                      <span className="font-semibold text-on-surface">
                        Tamil Nadu Corridor
                      </span>{" "}
                    </div>{" "}
                    <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                      {" "}
                      <span>Medium</span>{" "}
                      <span className="font-semibold text-on-surface">
                        Crystalline Granite Plinth
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <button
                    className="w-full py-space-xs bg-surface-container hover:bg-surface-container-highest text-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider text-center transition-colors"
                    onClick={(e) => S.current.h1?.(e)}
                  >
                    {" "}
                    Monograph Details{" "}
                  </button>{" "}
                </div>{" "}
              </article>{" "}
              <article
                className="project-card lg:col-span-4 flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl"
                data-category="marble-temples"
              >
                {" "}
                <div className="relative w-full h-[280px] overflow-hidden bg-surface-container">
                  {" "}
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Intricate upward view of a Makrana pure white marble Sabha Mandapa ceiling featuring a concentric corbelled dome with an ornate hanging lotus pendant and 1,280 hand-carved dancing Apsaras, bathed in luminous soft architectural illumination, revealing delicate translucent crystalline stone textures."
                    src={IMG.marbleDome}
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/80 via-transparent to-transparent"></div>{" "}
                  <div className="absolute top-space-md left-space-md">
                    {" "}
                    <span className="px-space-sm py-1 bg-surface/90 backdrop-blur-xs text-primary font-label-monument text-label-monument uppercase rounded-lg shadow-xs">
                      {" "}
                      1,280 CARVED APSARAS{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="absolute bottom-space-md left-space-md right-space-md flex flex-col gap-1 text-on-primary">
                    {" "}
                    <span className="font-label-monument text-label-monument text-secondary-container uppercase tracking-wider">
                      PLATE NO. 03 · MARBLE SANCTUM
                    </span>{" "}
                    <h3 className="font-headline-sm text-headline-sm text-on-primary">
                      Makrana White Sabha Mandapa
                    </h3>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-space-md flex flex-col justify-between gap-space-md flex-1">
                  {" "}
                  <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    <div className="flex justify-between">
                      {" "}
                      <span>Provenance</span>{" "}
                      <span className="text-on-surface font-semibold">
                        Makrana Dungri White
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between">
                      {" "}
                      <span>Span / Dia</span>{" "}
                      <span className="text-on-surface font-semibold">
                        48-Foot Pillarless Rotunda
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between">
                      {" "}
                      <span>Assembly</span>{" "}
                      <span className="text-on-surface font-semibold">
                        Lap-Jointed Corbelling
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <button
                    className="w-full py-space-xs bg-surface-container hover:bg-surface-container-highest text-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider text-center transition-colors"
                    onClick={(e) => S.current.h2?.(e)}
                  >
                    {" "}
                    Monograph Details{" "}
                  </button>{" "}
                </div>{" "}
              </article>{" "}
              <article
                className="project-card lg:col-span-4 flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl"
                data-category="craftsmanship"
              >
                {" "}
                <div className="relative w-full h-[280px] overflow-hidden bg-surface-container">
                  {" "}
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Dramatic perspective shot along a monumental Pradakshina stone cloister corridor with rhythmically repeating fluted Jodhpur golden sandstone pillars, casting sharp rhythmic shadows on the polished stone floor, classical Vedic temple architecture captured at sunset."
                    src={IMG.pillarCorridor}
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/80 via-transparent to-transparent"></div>{" "}
                  <div className="absolute top-space-md left-space-md">
                    {" "}
                    <span className="px-space-sm py-1 bg-surface/90 backdrop-blur-xs text-primary font-label-monument text-label-monument uppercase rounded-lg shadow-xs">
                      {" "}
                      108 MONOLITHIC PILLARS{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="absolute bottom-space-md left-space-md right-space-md flex flex-col gap-1 text-on-primary">
                    {" "}
                    <span className="font-label-monument text-label-monument text-secondary-container uppercase tracking-wider">
                      PLATE NO. 04 · AMBULATORY
                    </span>{" "}
                    <h3 className="font-headline-sm text-headline-sm text-on-primary">
                      Pradakshina Stone Cloister
                    </h3>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-space-md flex flex-col justify-between gap-space-md flex-1">
                  {" "}
                  <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    <div className="flex justify-between">
                      {" "}
                      <span>Material</span>{" "}
                      <span className="text-on-surface font-semibold">
                        Jodhpur Chhitar Gold
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between">
                      {" "}
                      <span>Corridor Length</span>{" "}
                      <span className="text-on-surface font-semibold">320 Linear Metres</span>{" "}
                    </div>{" "}
                    <div className="flex justify-between">
                      {" "}
                      <span>Acoustics</span>{" "}
                      <span className="text-on-surface font-semibold">
                        Resonant Vedic Chanting Cavity
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <button
                    className="w-full py-space-xs bg-surface-container hover:bg-surface-container-highest text-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider text-center transition-colors"
                    onClick={(e) => S.current.h3?.(e)}
                  >
                    {" "}
                    Monograph Details{" "}
                  </button>{" "}
                </div>{" "}
              </article>{" "}
              <article
                className="project-card lg:col-span-4 flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl"
                data-category="heritage"
              >
                {" "}
                <div className="relative w-full h-[280px] overflow-hidden bg-surface-container">
                  {" "}
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Atmospheric architectural photography of an ancient stepped Pushkarini temple reservoir kund, built with precision interlocking black Deccan basalt stone blocks forming geometric triangular steps descending into still turquoise sacred holy water, morning mist and temple reflection."
                    src={IMG.stepwell}
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/80 via-transparent to-transparent"></div>{" "}
                  <div className="absolute top-space-md left-space-md">
                    {" "}
                    <span className="px-space-sm py-1 bg-surface/90 backdrop-blur-xs text-primary font-label-monument text-label-monument uppercase rounded-lg shadow-xs">
                      {" "}
                      HYDRAULIC STONEWORK{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="absolute bottom-space-md left-space-md right-space-md flex flex-col gap-1 text-on-primary">
                    {" "}
                    <span className="font-label-monument text-label-monument text-secondary-container uppercase tracking-wider">
                      PLATE NO. 05 · HYDRO-SANCTUARY
                    </span>{" "}
                    <h3 className="font-headline-sm text-headline-sm text-on-primary">
                      Sacred Pushkarini Stepped Kund
                    </h3>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-space-md flex flex-col justify-between gap-space-md flex-1">
                  {" "}
                  <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    <div className="flex justify-between">
                      {" "}
                      <span>Material</span>{" "}
                      <span className="text-on-surface font-semibold">
                        Basalt Masonry Interlock
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between">
                      {" "}
                      <span>Capacity</span>{" "}
                      <span className="text-on-surface font-semibold">
                        1.4 Million Litres Purified
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between">
                      {" "}
                      <span>Filtration</span>{" "}
                      <span className="text-on-surface font-semibold">
                        Bio-Sand & Copper Inlets
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <button
                    className="w-full py-space-xs bg-surface-container hover:bg-surface-container-highest text-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider text-center transition-colors"
                    onClick={(e) => S.current.h4?.(e)}
                  >
                    {" "}
                    Monograph Details{" "}
                  </button>{" "}
                </div>{" "}
              </article>{" "}
              <article
                className="project-card lg:col-span-12 flex flex-col lg:flex-row bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl"
                data-category="heritage"
              >
                {" "}
                <div className="relative w-full lg:w-3/5 h-[340px] lg:h-auto overflow-hidden bg-surface-container">
                  {" "}
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Archaeological temple restoration scene on the Malwa plateau showing master stone masons carefully reassembling 9th-century weathered temple spire stone blocks using anastylosis techniques, non-invasive stainless pin anchors, and specialized stone mortars under warm natural afternoon light."
                    src={IMG.restoration}
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal-monolith/70 via-transparent to-transparent"></div>{" "}
                  <div className="absolute top-space-md left-space-md flex items-center gap-space-xs">
                    {" "}
                    <span className="px-space-sm py-1 bg-surface/90 backdrop-blur-xs text-primary font-label-monument text-label-monument uppercase rounded-lg shadow-xs">
                      {" "}
                      ANASTYLOSIS RESTORATION{" "}
                    </span>{" "}
                    <span className="px-space-sm py-1 bg-secondary text-on-secondary font-label-monument text-label-monument uppercase rounded-lg shadow-xs">
                      {" "}
                      ASI CONSERVATION COMPLIANT{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="absolute bottom-space-md left-space-md flex flex-col gap-1 text-on-primary">
                    {" "}
                    <span className="font-label-monument text-label-monument text-secondary-container uppercase tracking-wider">
                      PLATE NO. 06 · ARCHAEOLOGICAL CODEX
                    </span>{" "}
                    <h2 className="font-headline-md text-headline-md text-on-primary">
                      Historic Sanctum Anastylosis & Preservation
                    </h2>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-space-lg w-full lg:w-2/5 flex flex-col justify-between gap-space-md bg-surface-container-low">
                  {" "}
                  <div className="flex flex-col gap-space-sm">
                    {" "}
                    <div className="flex items-center gap-space-xs text-on-tertiary-container">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        history_edu
                      </span>{" "}
                      <span className="font-label-monument text-label-monument uppercase font-bold">
                        11TH-CENTURY PARAMARA ERA
                      </span>{" "}
                    </div>{" "}
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      {" "}
                      Precision 3D LiDAR point-cloud mapping identified 4,800 scattered temple
                      fragments across the Malwa plateau. Reconstructed with exact lithic matching
                      and zero structural compromise.{" "}
                    </p>{" "}
                    <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                      {" "}
                      <div className="p-space-sm bg-surface rounded-lg">
                        {" "}
                        <span className="font-label-monument text-label-monument text-muted-sage uppercase block">
                          Disassembled
                        </span>{" "}
                        <span className="font-title-editorial text-title-editorial text-primary">
                          4,820 Stones
                        </span>{" "}
                      </div>{" "}
                      <div className="p-space-sm bg-surface rounded-lg">
                        {" "}
                        <span className="font-label-monument text-label-monument text-muted-sage uppercase block">
                          Dimensional Error
                        </span>{" "}
                        <span className="font-title-editorial text-title-editorial text-primary">
                          {"< 0.8 mm"}
                        </span>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-center justify-between pt-space-md">
                    {" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                      Madhya Pradesh Archaeological Axis
                    </span>{" "}
                    <button
                      className="px-space-md py-space-sm bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider transition-colors shadow-xs"
                      onClick={(e) => S.current.h5?.(e)}
                    >
                      {" "}
                      Read Archaeological Log{" "}
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </article>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Master Architectural & Craftsmanship Visual Portfolio Monograph */}
        <CraftsmanshipGallery
          initialCategory="all"
          title="Master Architectural & Craftsmanship Visual Portfolio"
          subtitle="Complete visual archive spanning 40 published works: sacred temple sanctuaries, monumental entrance gateways, intricate stone jalis, relief wall panels, carved ceiling domes, jharokhas, material specimens, 3D concept models, and industrial fabrication."
          badge="Complete Visual Monograph (40 Exemplars)"
        />
        <section className="w-full bg-surface-container-high py-space-xl">
          {" "}
          <div className="max-w-[1320px] mx-auto px-gutter flex flex-col gap-space-lg">
            {" "}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              {" "}
              <div>
                {" "}
                <span className="font-label-monument text-label-monument text-secondary uppercase tracking-widest">
                  METROLOGICAL SCIENCE
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Scientific Rigor in Sacred Stonecraft
                </h2>{" "}
              </div>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                {" "}
                Harmonizing ancient Ayadi mathematical formulas with cutting-edge non-destructive
                ultrasonic stone testing and terrestrial LiDAR scanners.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {" "}
              <div className="p-space-lg bg-surface rounded-xl shadow-md flex flex-col gap-space-md">
                {" "}
                <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
                  {" "}
                  <span className="material-symbols-outlined text-[24px]">square_foot</span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <h3 className="font-title-editorial text-title-editorial text-primary">
                    Ayadi Shadvarga Calculations
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Every sanctum dimension is strictly governed by the 6 sacred Ayadi ratios (Aya,
                    Vyaya, Yoni, Rakshe, Nakshatra, Ayu), guaranteeing energetic harmony with
                    planetary meridians.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-sm bg-surface-container rounded-lg font-body-sm text-body-sm flex justify-between items-center text-primary font-mono">
                  {" "}
                  <span>Yoni Shuddhi: Dhwaja (1)</span>{" "}
                  <span className="text-on-tertiary-container font-bold">
                    1:4:16 Vastu Purusha
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-space-lg bg-surface rounded-xl shadow-md flex flex-col gap-space-md">
                {" "}
                <div className="w-12 h-12 rounded-lg bg-secondary text-on-secondary flex items-center justify-center">
                  {" "}
                  <span className="material-symbols-outlined text-[24px]">view_in_ar</span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <h3 className="font-title-editorial text-title-editorial text-primary">
                    Sub-Millimeter LiDAR Mapping
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    High-density laser scans capture complex carved Murtis and corbelled ceilings
                    down to 0.4mm tolerance, establishing eternal digital twins prior to physical
                    stone extraction.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-sm bg-surface-container rounded-lg font-body-sm text-body-sm flex justify-between items-center text-secondary font-mono">
                  {" "}
                  <span>Scan Density: 80M pts/m²</span>{" "}
                  <span className="text-primary font-bold">Trimble X7 Sensor</span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-space-lg bg-surface rounded-xl shadow-md flex flex-col gap-space-md">
                {" "}
                <div className="w-12 h-12 rounded-lg bg-tertiary-container text-on-tertiary flex items-center justify-center">
                  {" "}
                  <span className="material-symbols-outlined text-[24px]">science</span>{" "}
                </div>{" "}
                <div className="flex flex-col gap-1">
                  {" "}
                  <h3 className="font-title-editorial text-title-editorial text-primary">
                    Quarry Provenance & Petrography
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Ultrasonic pulse velocity testing validates stone internal cohesion, verifying
                    freedom from fissures before blocks are cleaved from certified Rajasthan and
                    Deccan quarries.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-sm bg-surface-container rounded-lg font-body-sm text-body-sm flex justify-between items-center text-primary font-mono">
                  {" "}
                  <span>Compressive Strength</span>{" "}
                  <span className="text-on-tertiary-container font-bold">
                    {"> 140 MPa Verified"}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <div
          className="fixed inset-0 z-50 bg-charcoal-monolith/80 backdrop-blur-xs hidden flex items-center justify-center p-space-md"
          id="monographModal"
        >
          {" "}
          <div className="relative w-full max-w-4xl max-h-[921px] bg-surface rounded-xl shadow-2xl overflow-y-auto flex flex-col">
            {" "}
            <div className="sticky top-0 bg-surface-container-high px-space-lg py-space-md flex items-center justify-between shadow-xs z-10">
              {" "}
              <div className="flex items-center gap-space-sm">
                {" "}
                <span className="material-symbols-outlined text-primary text-[24px]">
                  architecture
                </span>{" "}
                <div className="flex flex-col">
                  {" "}
                  <span
                    className="font-label-monument text-label-monument uppercase text-secondary font-bold"
                    id="modalPlateSubtitle"
                  >
                    MONOGRAPH DOSSIER
                  </span>{" "}
                  <h3
                    className="font-headline-sm text-headline-sm text-primary"
                    id="modalPlateTitle"
                  >
                    Sanctuary Architectural Monograph
                  </h3>{" "}
                </div>{" "}
              </div>{" "}
              <button
                className="w-9 h-9 rounded-4xl bg-surface-container hover:bg-surface-container-highest text-on-surface flex items-center justify-center transition-colors"
                onClick={(e) => S.current.h6?.(e)}
              >
                {" "}
                <span className="material-symbols-outlined text-[20px]">close</span>{" "}
              </button>{" "}
            </div>{" "}
            <div className="p-space-lg flex flex-col gap-space-lg">
              {" "}
              <div className="relative w-full h-[320px] rounded-lg overflow-hidden bg-surface-container">
                {" "}
                <img
                  className="w-full h-full object-cover"
                  data-alt="High resolution architectural detail view showing hand-carved mortise-tenon stone joinery and intricate sanctum shikhara frieze relief on pink sandstone under clear museum lighting."
                  id="modalPlateImage"
                  src={IMG.interlockingJoint}
                />{" "}
                <div className="absolute bottom-space-sm right-space-sm px-space-sm py-1 bg-charcoal-monolith/80 text-surface-bright rounded-xs text-[11px] font-mono">
                  {" "}
                  3D DIGITAL TWIN SCAN: REF-VVS-2024-X9{" "}
                </div>{" "}
              </div>{" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {" "}
                <div className="p-space-md bg-surface-container rounded-lg flex flex-col gap-space-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument text-muted-sage uppercase">
                    Geotechnical Stone Assay
                  </span>{" "}
                  <p className="font-body-md text-body-md text-on-surface" id="modalStoneAssay">
                    {" "}
                    {
                      "Pinkish buff Bansi Paharpur sandstone harvested from depth stratum > 35m. Tested density 2.65 g/cm³ with zero ferrous vein inclusions."
                    }{" "}
                  </p>{" "}
                </div>{" "}
                <div className="p-space-md bg-surface-container rounded-lg flex flex-col gap-space-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument text-muted-sage uppercase">
                    Artisan Guild Execution
                  </span>{" "}
                  <p className="font-body-md text-body-md text-on-surface" id="modalArtisanData">
                    {" "}
                    184 master artisans, 22 Sthapatis, 420,000 chiseling man-hours adhering strictly
                    to Manasara and Shilpa Ratna canonical texts.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-xs">
                {" "}
                <span className="font-label-monument text-label-monument text-secondary uppercase font-bold">
                  Ayadi Proportional Matrix (Canonical Shadvarga)
                </span>{" "}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
                  {" "}
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-[11px] font-body-sm text-on-surface-variant">
                      Aya (Gain Index)
                    </span>{" "}
                    <span className="font-bold text-primary font-mono text-[14px]">
                      8 (Vrishabha)
                    </span>{" "}
                  </div>{" "}
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-[11px] font-body-sm text-on-surface-variant">
                      Vyaya (Expenditure)
                    </span>{" "}
                    <span className="font-bold text-primary font-mono text-[14px]">
                      3 (Controlled)
                    </span>{" "}
                  </div>{" "}
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-[11px] font-body-sm text-on-surface-variant">
                      Yoni (Orientation)
                    </span>{" "}
                    <span className="font-bold text-primary font-mono text-[14px]">
                      1 (East / Solar)
                    </span>{" "}
                  </div>{" "}
                  <div className="flex flex-col">
                    {" "}
                    <span className="text-[11px] font-body-sm text-on-surface-variant">
                      Vastu Mandala
                    </span>{" "}
                    <span className="font-bold text-primary font-mono text-[14px]">
                      Manduka 8x8
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex items-center justify-end gap-space-sm pt-space-sm">
                {" "}
                <button
                  className="px-space-md py-space-xs bg-surface-container hover:bg-surface-container-highest text-on-surface rounded-lg font-label-ui text-label-ui uppercase tracking-wider"
                  onClick={(e) => S.current.h7?.(e)}
                >
                  {" "}
                  Close Codex{" "}
                </button>{" "}
                <Link
                  to="/contact"
                  className="px-space-md py-space-xs bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider shadow-xs"
                >
                  {" "}
                  Inquire About Similar Typology{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <section className="w-full bg-sandstone-surface py-space-xl">
          {" "}
          <div className="max-w-[1320px] mx-auto px-gutter flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            {" "}
            <div className="max-w-2xl flex flex-col gap-space-sm">
              {" "}
              <span className="font-label-monument text-label-monument text-secondary uppercase font-bold tracking-widest">
                {" "}
                COMMISSION A MONUMENTAL SANCTUARY{" "}
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-primary">
                {" "}
                Begin Your Temple Trust's Architectural Legacy{" "}
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                {" "}
                Discuss astronomical site orientation, Ayadi mathematical feasibility, and stone
                quarry provenance allocation directly with the Council of Sthapatis at our Pune
                headquarters.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto">
              {" "}
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-on-tertiary-container hover:bg-primary text-on-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider shadow-md transition-all duration-200"
              >
                {" "}
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>{" "}
                <span>SCHEDULE STHAPATI CONSULTATION</span>{" "}
              </Link>{" "}
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-surface text-primary hover:bg-surface-container rounded-lg font-label-ui text-label-ui uppercase tracking-wider shadow-xs transition-all duration-200"
                href="https://wa.me/919876543210"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span className="material-symbols-outlined text-[18px]">chat</span>{" "}
                <span>WHATSAPP LIAISON</span>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>{" "}
    </main>
  );
}

import { Link } from "@tanstack/react-router";
import { IMG } from "@/components/site/images";
import { useScreenScript } from "@/components/site/use-screen-script";
import { setup } from "./scripts/TempleAnatomy";

/* Generated from the Stitch design export (screen 03). */
export function TempleAnatomyScreen() {
  const S = useScreenScript(setup);
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        {" "}
        <section className="w-full bg-surface-container-high py-3 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            {" "}
            <div className="flex items-center gap-3">
              {" "}
              <span className="inline-block w-2 h-2 rounded-4xl bg-secondary"></span>{" "}
              <span className="font-label-monument text-label-monument uppercase text-primary tracking-widest">
                ARCHITECTURAL CORPUS · CODEX VASTU PURUSHA MANDALA
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-6 font-label-monument text-label-monument text-on-surface-variant uppercase tracking-wider">
              {" "}
              <span>TREATISE: MANASARA · CHAPTER IX</span> <span className="opacity-40">/</span>{" "}
              <span>STANDARDS: MAYAMATA SHILPA</span> <span className="opacity-40">/</span>{" "}
              <span className="text-secondary font-bold">1000-YR DRY-JOINERY PROTOCOL</span>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface py-12 lg:py-16 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
            {" "}
            <div className="max-w-3xl flex flex-col space-y-4">
              {" "}
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-surface-container rounded-4xl w-fit">
                {" "}
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  account_tree
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-[0.18em] text-primary">
                  SACRED ARCHITECTURAL KNOWLEDGE · SHILPA SHASTRA
                </span>{" "}
              </div>{" "}
              <h1 className="font-display-hero text-display-hero text-primary tracking-tight">
                Understanding the Architecture of Sacred Spaces
              </h1>{" "}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                {" "}
                Explore the anatomical, cosmic, and structural components of classical Hindu temple
                architecture from foundational Jagati to celestial Kalasha.{" "}
              </p>{" "}
            </div>{" "}
            <div className="bg-surface-container-low p-6 rounded-xl shadow-xs flex flex-col justify-between min-w-[280px]">
              {" "}
              <div className="flex items-center justify-between mb-4">
                {" "}
                <span className="font-label-monument text-label-monument uppercase text-secondary tracking-widest">
                  CANONICAL PROPORTIONS
                </span>{" "}
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  architecture
                </span>{" "}
              </div>{" "}
              <div className="font-display-hero text-headline-lg text-primary leading-none mb-1">
                1:4:16
              </div>{" "}
              <div className="font-body-sm text-body-sm text-on-surface-variant">
                Ayadi Mathematical Ratio from Garbhagriha to Mastaka
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="max-w-7xl mx-auto mt-12 pt-8">
            {" "}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3">
              {" "}
              <button
                className="group relative px-6 py-4 rounded-xl bg-card-elevated shadow-md flex items-center gap-4 text-left transition-all duration-300"
                id="tab-nagara"
                onClick={(e) => S.current.h0?.(e)}
              >
                {" "}
                <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-display-hero text-headline-sm">
                  {" "}
                  N{" "}
                </div>{" "}
                <div className="flex flex-col">
                  {" "}
                  <span className="font-headline-sm text-title-editorial text-primary tracking-wide">
                    Nagara Tradition
                  </span>{" "}
                  <span className="font-label-monument text-label-monument uppercase text-secondary tracking-wider">
                    Curvilinear Spire · North India
                  </span>{" "}
                </div>{" "}
                <span className="absolute bottom-0 left-6 right-6 h-[3px] bg-secondary rounded-4xl"></span>{" "}
              </button>{" "}
              <button
                className="group relative px-6 py-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-left transition-all duration-300 flex items-center gap-4"
                id="tab-dravida"
                onClick={(e) => S.current.h1?.(e)}
              >
                {" "}
                <div className="w-10 h-10 rounded-lg bg-surface-container text-on-surface-variant group-hover:text-primary flex items-center justify-center font-display-hero text-headline-sm transition-colors">
                  {" "}
                  D{" "}
                </div>{" "}
                <div className="flex flex-col">
                  {" "}
                  <span className="font-headline-sm text-title-editorial text-on-surface-variant group-hover:text-primary tracking-wide transition-colors">
                    Dravida Tradition
                  </span>{" "}
                  <span className="font-label-monument text-label-monument uppercase text-stone-hairline tracking-wider">
                    Pyramidal Vimana · South India
                  </span>{" "}
                </div>{" "}
                <span className="tab-indicator absolute bottom-0 left-6 right-6 h-[3px] bg-transparent rounded-4xl transition-colors"></span>{" "}
              </button>{" "}
              <button
                className="group relative px-6 py-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-left transition-all duration-300 flex items-center gap-4"
                id="tab-vesara"
                onClick={(e) => S.current.h2?.(e)}
              >
                {" "}
                <div className="w-10 h-10 rounded-lg bg-surface-container text-on-surface-variant group-hover:text-primary flex items-center justify-center font-display-hero text-headline-sm transition-colors">
                  {" "}
                  V{" "}
                </div>{" "}
                <div className="flex flex-col">
                  {" "}
                  <span className="font-headline-sm text-title-editorial text-on-surface-variant group-hover:text-primary tracking-wide transition-colors">
                    Vesara Tradition
                  </span>{" "}
                  <span className="font-label-monument text-label-monument uppercase text-stone-hairline tracking-wider">
                    Stellate Synthesis · Deccan Basin
                  </span>{" "}
                </div>{" "}
                <span className="tab-indicator absolute bottom-0 left-6 right-6 h-[3px] bg-transparent rounded-4xl transition-colors"></span>{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface-container-low py-10 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {" "}
            <div className="lg:col-span-7 bg-charcoal-monolith text-on-primary rounded-xl p-6 lg:p-8 shadow-xl flex flex-col relative overflow-hidden">
              {" "}
              <div className="flex items-center justify-between pb-6 mb-6">
                {" "}
                <div className="flex items-center gap-3">
                  {" "}
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    view_in_ar
                  </span>{" "}
                  <div>
                    {" "}
                    <div className="font-label-monument text-label-monument text-secondary-fixed uppercase tracking-widest">
                      ELEVATION SECTION PLATE : SHIKHARA-PRASADA
                    </div>{" "}
                    <div className="font-title-editorial text-title-editorial text-surface">
                      Latina-Sekhari Nagara Typology
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="hidden sm:flex items-center gap-2 bg-charcoal-monolith px-3 py-1.5 rounded-lg text-secondary text-body-sm">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">tune</span>{" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider">
                    10 Canonical Nodes
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative w-full h-[620px] rounded-xl bg-gradient-to-b from-[#1C1D1E] to-[#2B2D30] overflow-hidden flex items-center justify-center p-4">
                {" "}
                <svg
                  className="absolute inset-0 w-full h-full opacity-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <defs>
                    {" "}
                    <pattern height="40" id="vastu-grid" patternUnits="userSpaceOnUse" width="40">
                      {" "}
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#C49A52"
                        strokeWidth="0.75"
                      />{" "}
                    </pattern>{" "}
                  </defs>{" "}
                  <rect fill="url(#vastu-grid)" height="100%" width="100%" />{" "}
                </svg>{" "}
                <div className="relative z-10 w-full max-w-[540px] h-[580px] flex items-center justify-center">
                  {" "}
                  <svg
                    className="w-full h-full text-sandstone-surface fill-none stroke-current stroke-[1.2] drop-shadow-md"
                    viewBox="0 0 540 600"
                  >
                    {" "}
                    <rect
                      className="opacity-90 stroke-sandstone-surface fill-[#31312C]/60"
                      height="40"
                      rx="2"
                      width="480"
                      x="30"
                      y="520"
                    />{" "}
                    <line stroke="#C49A52" strokeWidth="1.5" x1="20" x2="520" y1="560" y2="560" />{" "}
                    <line
                      stroke="#A39E94"
                      strokeDasharray="4 4"
                      x1="50"
                      x2="490"
                      y1="540"
                      y2="540"
                    />{" "}
                    <path
                      d="M 450 560 L 490 560 L 490 520 L 470 520 L 470 535 L 450 535 Z"
                      fill="#E5D7C3"
                      fillOpacity="0.1"
                    />{" "}
                    <path
                      className="opacity-80 stroke-sandstone-surface"
                      d="M 370 520 L 370 410 L 450 450 L 450 520 Z"
                    />{" "}
                    <path
                      d="M 380 430 L 440 455 L 440 520"
                      stroke="#C49A52"
                      strokeDasharray="2 2"
                    />{" "}
                    <path
                      className="opacity-90 stroke-sandstone-surface fill-charcoal-monolith/70"
                      d="M 250 520 L 250 370 L 310 270 L 370 370 L 370 520 Z"
                    />{" "}
                    <line stroke="#A39E94" x1="260" x2="360" y1="360" y2="360" />{" "}
                    <line stroke="#A39E94" x1="270" x2="350" y1="335" y2="335" />{" "}
                    <line stroke="#A39E94" x1="285" x2="335" y1="305" y2="305" />{" "}
                    <line stroke="#A39E94" x1="298" x2="322" y1="280" y2="280" />{" "}
                    <circle cx="310" cy="264" fill="#E87932" r="5" stroke="#C49A52" />{" "}
                    <rect fill="#1C1C18" height="120" stroke="#C49A52" width="30" x="220" y="400" />{" "}
                    <rect
                      fill="#1C1C18"
                      height="140"
                      stroke="#E5D7C3"
                      strokeWidth="1.8"
                      width="130"
                      x="90"
                      y="380"
                    />{" "}
                    <rect fill="#C49A52" height="10" rx="1" width="20" x="145" y="475" />{" "}
                    <path
                      d="M 151 462 C 151 458 159 458 159 462 L 159 475 L 151 475 Z"
                      fill="#E87932"
                    />{" "}
                    <path
                      d="M 70 520 C 75 430 85 360 110 320 L 110 520 Z"
                      fill="#2E2E30"
                      stroke="#E5D7C3"
                    />{" "}
                    <path
                      d="M 200 520 C 195 430 185 360 160 320 L 200 520 Z"
                      fill="#2E2E30"
                      stroke="#E5D7C3"
                    />{" "}
                    <path
                      d="M 90 380 C 95 240 120 150 145 100 L 165 100 C 190 150 215 240 220 380 Z"
                      fill="#26282A]/80"
                      stroke="#E5D7C3"
                      strokeWidth="1.8"
                    />{" "}
                    <line stroke="#A39E94" strokeWidth="0.8" x1="97" x2="213" y1="340" y2="340" />{" "}
                    <line stroke="#A39E94" strokeWidth="0.8" x1="105" x2="205" y1="300" y2="300" />{" "}
                    <line stroke="#A39E94" strokeWidth="0.8" x1="114" x2="196" y1="260" y2="260" />{" "}
                    <line stroke="#A39E94" strokeWidth="0.8" x1="123" x2="187" y1="220" y2="220" />{" "}
                    <line stroke="#A39E94" strokeWidth="0.8" x1="132" x2="178" y1="180" y2="180" />{" "}
                    <line stroke="#A39E94" strokeWidth="0.8" x1="140" x2="170" y1="140" y2="140" />{" "}
                    <rect fill="#E5D7C3" height="8" stroke="#C49A52" width="14" x="148" y="92" />{" "}
                    <ellipse
                      cx="155"
                      cy="84"
                      fill="#3D1700"
                      rx="20"
                      ry="7"
                      stroke="#C49A52"
                      strokeWidth="1.8"
                    />{" "}
                    <path d="M 137 84 C 137 81 173 81 173 84" stroke="#E87932" />{" "}
                    <path
                      d="M 152 77 C 147 73 147 67 152 64 L 158 64 C 163 67 163 73 158 77 Z"
                      fill="#E87932"
                      stroke="#C49A52"
                    />{" "}
                    <line stroke="#E87932" strokeWidth="2" x1="155" x2="155" y1="64" y2="48" />{" "}
                    <circle cx="155" cy="46" fill="#E87932" r="3" />{" "}
                    <line stroke="#E5D7C3" strokeWidth="3" x1="280" x2="280" y1="410" y2="520" />{" "}
                    <line stroke="#E5D7C3" strokeWidth="3" x1="330" x2="330" y1="410" y2="520" />{" "}
                    <line
                      stroke="#E5D7C3"
                      strokeWidth="3"
                      x1="410"
                      x2="410"
                      y1="450"
                      y2="520"
                    />{" "}
                  </svg>{" "}
                  <button
                    aria-label="Kalasha Finial"
                    className="hotspot-pin group absolute left-[28.5%] top-[7%] -translate-x-1/2 -translate-y-1/2 z-30 focus:outline-hidden"
                    id="hotspot-btn-1"
                    onClick={(e) => S.current.h3?.(e)}
                  >
                    {" "}
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      {" "}
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-4xl bg-secondary-container opacity-75"></span>{" "}
                      <span className="relative inline-flex rounded-4xl h-6 w-6 bg-secondary text-on-primary font-label-monument text-[11px] font-bold items-center justify-center shadow-lg ring-2 ring-surface">
                        01
                      </span>{" "}
                    </span>{" "}
                    <span className="absolute left-8 top-1/2 -translate-y-1/2 bg-charcoal-monolith text-secondary-fixed text-label-monument font-label-monument uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-sm pointer-events-none whitespace-nowrap">
                      01 Kalasha
                    </span>{" "}
                  </button>{" "}
                  <button
                    aria-label="Amalaka"
                    className="hotspot-pin group absolute left-[28.5%] top-[14%] -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-hidden"
                    id="hotspot-btn-2"
                    onClick={(e) => S.current.h4?.(e)}
                  >
                    {" "}
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      {" "}
                      <span className="relative inline-flex rounded-4xl h-5 w-5 bg-sandstone-surface text-primary font-label-monument text-[10px] font-bold items-center justify-center hover:bg-secondary hover:text-on-primary transition-all">
                        02
                      </span>{" "}
                    </span>{" "}
                    <span className="absolute left-7 top-1/2 -translate-y-1/2 hidden group-hover:block bg-charcoal-monolith text-surface text-label-monument font-label-monument uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-sm pointer-events-none whitespace-nowrap">
                      02 Amalaka
                    </span>{" "}
                  </button>{" "}
                  <button
                    aria-label="Shikhara Spire"
                    className="hotspot-pin group absolute left-[28.5%] top-[38%] -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-hidden"
                    id="hotspot-btn-3"
                    onClick={(e) => S.current.h5?.(e)}
                  >
                    {" "}
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      {" "}
                      <span className="relative inline-flex rounded-4xl h-5 w-5 bg-sandstone-surface text-primary font-label-monument text-[10px] font-bold items-center justify-center hover:bg-secondary hover:text-on-primary transition-all">
                        03
                      </span>{" "}
                    </span>{" "}
                    <span className="absolute left-7 top-1/2 -translate-y-1/2 hidden group-hover:block bg-charcoal-monolith text-surface text-label-monument font-label-monument uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-sm pointer-events-none whitespace-nowrap">
                      03 Shikhara
                    </span>{" "}
                  </button>{" "}
                  <button
                    aria-label="Urushringa Turrets"
                    className="hotspot-pin group absolute left-[15%] top-[55%] -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-hidden"
                    id="hotspot-btn-4"
                    onClick={(e) => S.current.h6?.(e)}
                  >
                    {" "}
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      {" "}
                      <span className="relative inline-flex rounded-4xl h-5 w-5 bg-sandstone-surface text-primary font-label-monument text-[10px] font-bold items-center justify-center hover:bg-secondary hover:text-on-primary transition-all">
                        04
                      </span>{" "}
                    </span>{" "}
                    <span className="absolute right-7 top-1/2 -translate-y-1/2 hidden group-hover:block bg-charcoal-monolith text-surface text-label-monument font-label-monument uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-sm pointer-events-none whitespace-nowrap">
                      04 Urushringa
                    </span>{" "}
                  </button>{" "}
                  <button
                    aria-label="Garbhagriha Sanctum"
                    className="hotspot-pin group absolute left-[28.5%] top-[76%] -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-hidden"
                    id="hotspot-btn-5"
                    onClick={(e) => S.current.h7?.(e)}
                  >
                    {" "}
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      {" "}
                      <span className="relative inline-flex rounded-4xl h-5 w-5 bg-sandstone-surface text-primary font-label-monument text-[10px] font-bold items-center justify-center hover:bg-secondary hover:text-on-primary transition-all">
                        05
                      </span>{" "}
                    </span>{" "}
                    <span className="absolute left-7 top-1/2 -translate-y-1/2 hidden group-hover:block bg-charcoal-monolith text-surface text-label-monument font-label-monument uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-sm pointer-events-none whitespace-nowrap">
                      05 Garbhagriha
                    </span>{" "}
                  </button>{" "}
                  <button
                    aria-label="Antarala Vestibule"
                    className="hotspot-pin group absolute left-[43.5%] top-[72%] -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-hidden"
                    id="hotspot-btn-6"
                    onClick={(e) => S.current.h8?.(e)}
                  >
                    {" "}
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      {" "}
                      <span className="relative inline-flex rounded-4xl h-5 w-5 bg-sandstone-surface text-primary font-label-monument text-[10px] font-bold items-center justify-center hover:bg-secondary hover:text-on-primary transition-all">
                        06
                      </span>{" "}
                    </span>{" "}
                    <span className="absolute left-7 top-1/2 -translate-y-1/2 hidden group-hover:block bg-charcoal-monolith text-surface text-label-monument font-label-monument uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-sm pointer-events-none whitespace-nowrap">
                      06 Antarala
                    </span>{" "}
                  </button>{" "}
                  <button
                    aria-label="Mandapa Hall"
                    className="hotspot-pin group absolute left-[57.5%] top-[52%] -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-hidden"
                    id="hotspot-btn-7"
                    onClick={(e) => S.current.h9?.(e)}
                  >
                    {" "}
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      {" "}
                      <span className="relative inline-flex rounded-4xl h-5 w-5 bg-sandstone-surface text-primary font-label-monument text-[10px] font-bold items-center justify-center hover:bg-secondary hover:text-on-primary transition-all">
                        07
                      </span>{" "}
                    </span>{" "}
                    <span className="absolute left-7 top-1/2 -translate-y-1/2 hidden group-hover:block bg-charcoal-monolith text-surface text-label-monument font-label-monument uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-sm pointer-events-none whitespace-nowrap">
                      07 Mandapa
                    </span>{" "}
                  </button>{" "}
                  <button
                    aria-label="Ardhamandapa Porch"
                    className="hotspot-pin group absolute left-[76%] top-[72%] -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-hidden"
                    id="hotspot-btn-8"
                    onClick={(e) => S.current.h10?.(e)}
                  >
                    {" "}
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      {" "}
                      <span className="relative inline-flex rounded-4xl h-5 w-5 bg-sandstone-surface text-primary font-label-monument text-[10px] font-bold items-center justify-center hover:bg-secondary hover:text-on-primary transition-all">
                        08
                      </span>{" "}
                    </span>{" "}
                    <span className="absolute left-7 top-1/2 -translate-y-1/2 hidden group-hover:block bg-charcoal-monolith text-surface text-label-monument font-label-monument uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-sm pointer-events-none whitespace-nowrap">
                      08 Ardhamandapa
                    </span>{" "}
                  </button>{" "}
                  <button
                    aria-label="Jagati Plinth"
                    className="hotspot-pin group absolute left-[45%] top-[91%] -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-hidden"
                    id="hotspot-btn-9"
                    onClick={(e) => S.current.h11?.(e)}
                  >
                    {" "}
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      {" "}
                      <span className="relative inline-flex rounded-4xl h-5 w-5 bg-sandstone-surface text-primary font-label-monument text-[10px] font-bold items-center justify-center hover:bg-secondary hover:text-on-primary transition-all">
                        09
                      </span>{" "}
                    </span>{" "}
                    <span className="absolute left-7 top-1/2 -translate-y-1/2 hidden group-hover:block bg-charcoal-monolith text-surface text-label-monument font-label-monument uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-sm pointer-events-none whitespace-nowrap">
                      09 Jagati Base
                    </span>{" "}
                  </button>{" "}
                  <button
                    aria-label="Carved Stambha Pillars"
                    className="hotspot-pin group absolute left-[61%] top-[77%] -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-hidden"
                    id="hotspot-btn-10"
                    onClick={(e) => S.current.h12?.(e)}
                  >
                    {" "}
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      {" "}
                      <span className="relative inline-flex rounded-4xl h-5 w-5 bg-sandstone-surface text-primary font-label-monument text-[10px] font-bold items-center justify-center hover:bg-secondary hover:text-on-primary transition-all">
                        10
                      </span>{" "}
                    </span>{" "}
                    <span className="absolute left-7 top-1/2 -translate-y-1/2 hidden group-hover:block bg-charcoal-monolith text-surface text-label-monument font-label-monument uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-sm pointer-events-none whitespace-nowrap">
                      10 Stambhas
                    </span>{" "}
                  </button>{" "}
                </div>{" "}
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-body-sm font-label-monument text-stone-hairline uppercase tracking-widest opacity-80">
                  {" "}
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-4xl bg-secondary"></span> PRADAKSHINA PATHA
                    AXIS
                  </span>{" "}
                  <span>NORTH-SOUTH ELEVATION SECTION</span> <span>SCALE: 1:100 PRAMANA</span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {" "}
                <span className="font-label-monument text-label-monument uppercase text-sandstone-surface tracking-wider mr-2">
                  Quick Navigate:
                </span>{" "}
                <button
                  className="px-2.5 py-1 text-label-monument font-label-monument rounded-xs bg-secondary text-on-primary"
                  onClick={(e) => S.current.h13?.(e)}
                >
                  01 Kalasha
                </button>{" "}
                <button
                  className="px-2.5 py-1 text-label-monument font-label-monument rounded-xs bg-surface-container text-on-surface hover:bg-sandstone-surface transition-colors"
                  onClick={(e) => S.current.h14?.(e)}
                >
                  02 Amalaka
                </button>{" "}
                <button
                  className="px-2.5 py-1 text-label-monument font-label-monument rounded-xs bg-surface-container text-on-surface hover:bg-sandstone-surface transition-colors"
                  onClick={(e) => S.current.h15?.(e)}
                >
                  03 Shikhara
                </button>{" "}
                <button
                  className="px-2.5 py-1 text-label-monument font-label-monument rounded-xs bg-surface-container text-on-surface hover:bg-sandstone-surface transition-colors"
                  onClick={(e) => S.current.h16?.(e)}
                >
                  05 Garbhagriha
                </button>{" "}
                <button
                  className="px-2.5 py-1 text-label-monument font-label-monument rounded-xs bg-surface-container text-on-surface hover:bg-sandstone-surface transition-colors"
                  onClick={(e) => S.current.h17?.(e)}
                >
                  07 Mandapa
                </button>{" "}
                <button
                  className="px-2.5 py-1 text-label-monument font-label-monument rounded-xs bg-surface-container text-on-surface hover:bg-sandstone-surface transition-colors"
                  onClick={(e) => S.current.h18?.(e)}
                >
                  09 Jagati
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="lg:col-span-5 bg-card-elevated rounded-xl p-8 shadow-xl flex flex-col justify-between transition-all duration-300"
              id="dossier-card"
            >
              {" "}
              <div>
                {" "}
                <div className="flex items-center justify-between pb-4">
                  {" "}
                  <span
                    className="font-label-monument text-label-monument uppercase tracking-[0.16em] text-secondary font-bold"
                    id="dossier-eyebrow"
                  >
                    {" "}
                    PINNACLE SANCTUM ELEMENT · ANATOMY 01{" "}
                  </span>{" "}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container rounded-xs font-label-monument text-[11px] text-primary">
                    {" "}
                    <span className="w-1.5 h-1.5 rounded-4xl bg-secondary"></span>{" "}
                    <span>CANONICAL NODE</span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="py-2">
                  {" "}
                  <h2
                    className="font-headline-lg text-headline-lg text-primary tracking-tight"
                    id="dossier-title"
                  >
                    {" "}
                    Kalasha (कलश) & Amalaka{" "}
                  </h2>{" "}
                  <div
                    className="font-title-editorial italic text-title-editorial text-secondary pt-1"
                    id="dossier-role"
                  >
                    {" "}
                    Cosmic Finial Urn & The Zenith Axis Mundi{" "}
                  </div>{" "}
                </div>{" "}
                <p
                  className="font-body-md text-body-md text-on-surface-variant pt-3 leading-relaxed"
                  id="dossier-description"
                >
                  {" "}
                  The monumental pinnacle urn, cast in gilded copper or hand-carved from
                  single-block dense sandstone, represents the cosmic seed of consciousness and the
                  ultimate apex of the temple’s vertical cosmic axis (Brahmasutra).{" "}
                </p>{" "}
                <div className="mt-6 p-4 rounded-lg bg-surface-container-low flex items-start gap-3">
                  {" "}
                  <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                    format_quote
                  </span>{" "}
                  <div className="flex flex-col">
                    {" "}
                    <span
                      className="font-title-editorial text-headline-sm text-primary tracking-wide"
                      id="dossier-sanskrit"
                    >
                      {" "}
                      कलाशः सर्वदेवानां निवासः{" "}
                    </span>{" "}
                    <span
                      className="font-body-sm text-body-sm text-on-surface-variant pt-1 italic"
                      id="dossier-translation"
                    >
                      {" "}
                      “In the sanctified Kalasha reside all divine potencies and celestial waters.”
                      — Agni Purana{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {" "}
                  <div className="p-3.5 rounded-lg bg-surface-container">
                    {" "}
                    <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary font-bold block mb-1">
                      Sacred Geometry
                    </span>{" "}
                    <span
                      className="font-body-sm text-body-sm text-on-surface font-medium block"
                      id="dossier-spec-geom"
                    >
                      Ayadi Formula (1:4 Shikhara proportion)
                    </span>{" "}
                  </div>{" "}
                  <div className="p-3.5 rounded-lg bg-surface-container">
                    {" "}
                    <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary font-bold block mb-1">
                      Material Integrity
                    </span>{" "}
                    <span
                      className="font-body-sm text-body-sm text-on-surface font-medium block"
                      id="dossier-spec-mat"
                    >
                      Bansi Paharpur Sandstone & 99.8% Gilded Copper
                    </span>{" "}
                  </div>{" "}
                  <div className="sm:col-span-2 p-3.5 rounded-lg bg-surface-container">
                    {" "}
                    <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary font-bold block mb-1">
                      Structural Role & Physics
                    </span>{" "}
                    <span
                      className="font-body-sm text-body-sm text-on-surface font-medium block"
                      id="dossier-spec-phys"
                    >
                      Acts as a master dead-load vertical keystone compression lock across the
                      corbelled stone Shikhara vaulting.
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mt-6 flex items-center gap-4 p-3 bg-surface-container-low rounded-lg">
                  {" "}
                  <img
                    className="w-20 h-20 rounded-md object-cover shadow-xs shrink-0"
                    data-alt="Close-up photograph of a master Indian stone mason in traditional attire hand-chiseling intricate floral and geometric motifs onto a massive pink sandstone Kalasha finial under warm sunlight with stone dust settling on the ancient work table."
                    src={IMG.artisanCarving}
                  />{" "}
                  <div className="flex flex-col">
                    {" "}
                    <span className="font-label-monument text-[10px] uppercase tracking-wider text-primary font-bold">
                      ATELIER ARCHIVE DOCUMENTATION
                    </span>{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant pt-0.5">
                      Master Silpi carving a monolithic Kalasha block in our Dhrangadhra stone
                      yards.
                    </span>{" "}
                    <span className="font-label-monument text-[11px] text-secondary tracking-wide pt-1">
                      TOLERANCE: 0.5MM HAND PRECISION
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="mt-8 pt-6 flex items-center justify-between gap-4">
                {" "}
                <div className="flex items-center gap-2 text-body-sm font-label-monument text-stone-hairline uppercase">
                  {" "}
                  <span className="font-bold text-primary" id="dossier-counter">
                    01
                  </span>{" "}
                  / 10 COMPONENTS{" "}
                </div>{" "}
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-lg font-label-ui text-label-ui uppercase tracking-wider font-semibold hover:bg-primary-container transition-all shadow-md group"
                  id="next-element-btn"
                  onClick={(e) => S.current.h19?.(e)}
                >
                  {" "}
                  <span>Explore Next Element: Shikhara Spire</span>{" "}
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface py-16 lg:py-24 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto flex flex-col space-y-12">
            {" "}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              {" "}
              <div className="flex flex-col space-y-2 max-w-2xl">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary font-bold">
                  CANONICAL COMPARATIVE MATRIX
                </span>{" "}
                <h2 className="font-display-hero text-headline-lg text-primary">
                  The Three Great Traditions of Sacred Architecture
                </h2>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" "}
                  From the mountain-echoing curves of the Himalayas to the skyward tiered pyramids
                  of Tamil Nadu, each temple canonical style embodies a distinct mathematical
                  cosmology.{" "}
                </p>{" "}
              </div>{" "}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-on-primary font-label-ui text-label-ui uppercase tracking-wider font-semibold rounded-lg hover:bg-tertiary transition-colors shadow-xs self-start md:self-auto"
              >
                {" "}
                <span>Consult Our Sthapathis on Temple Proportions</span>{" "}
                <span className="material-symbols-outlined text-[18px]">verified</span>{" "}
              </Link>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {" "}
              <div className="bg-card-elevated rounded-xl p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                {" "}
                <div>
                  {" "}
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-6 bg-surface-container">
                    {" "}
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Dramatic architectural elevation perspective of a classical Nagara sandstone temple with towering curvilinear Shikhara spire, multi-turreted Urushringas, and ornate plinth carved in warm pink sandstone under morning golden hour sky."
                      src={IMG.heroShikhara}
                    />{" "}
                  </div>{" "}
                  <div className="flex items-center justify-between mb-2">
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary">
                      NORTHERN GUILD
                    </span>{" "}
                    <span className="font-label-monument text-label-monument bg-surface-container px-2 py-0.5 rounded-xs text-primary font-bold">
                      LATINA / SEKHARĪ
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                    Nagara Tradition
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                    {" "}
                    Characterized by a square plan with graduated cruciform projections (rathas)
                    that rise into a soaring curvilinear beehive-shaped spire (Shikhara), topped by
                    a disc-like Amalaka and cosmic Kalasha.{" "}
                  </p>{" "}
                  <div className="space-y-2.5 pt-4">
                    {" "}
                    <div className="flex justify-between items-center text-body-sm">
                      {" "}
                      <span className="text-on-surface-variant font-label-monument uppercase text-[11px]">
                        Primary Spire:
                      </span>{" "}
                      <span className="font-semibold text-primary">Curvilinear Shikhara</span>{" "}
                    </div>{" "}
                    <div className="flex justify-between items-center text-body-sm">
                      {" "}
                      <span className="text-on-surface-variant font-label-monument uppercase text-[11px]">
                        Apex Terminal:
                      </span>{" "}
                      <span className="font-semibold text-primary">
                        Fluted Amalaka & Kalash
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between items-center text-body-sm">
                      {" "}
                      <span className="text-on-surface-variant font-label-monument uppercase text-[11px]">
                        Entrance Gate:
                      </span>{" "}
                      <span className="font-semibold text-primary">
                        Direct Ardhamandapa Porch
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between items-center text-body-sm">
                      {" "}
                      <span className="text-on-surface-variant font-label-monument uppercase text-[11px]">
                        Geographic Range:
                      </span>{" "}
                      <span className="font-semibold text-primary">
                        North, Central & Western India
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mt-8 pt-4">
                  {" "}
                  <button
                    className="w-full py-2.5 rounded-lg bg-surface-container-high text-primary hover:bg-secondary hover:text-on-primary transition-colors font-label-ui text-label-ui uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                    onClick={(e) => S.current.h20?.(e)}
                  >
                    {" "}
                    <span>View Nagara Anatomy</span>{" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated rounded-xl p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                {" "}
                <div>
                  {" "}
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-6 bg-surface-container">
                    {" "}
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Majestic granite Dravidian temple complex showing monumental tiered pyramidal Vimana tower and towering ornate Gopuram entrance gate with thousand-pillar halls in Tamil Nadu under clear midday sun."
                      src={IMG.rajagopuram}
                    />{" "}
                  </div>{" "}
                  <div className="flex items-center justify-between mb-2">
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary">
                      SOUTHERN GUILD
                    </span>{" "}
                    <span className="font-label-monument text-label-monument bg-surface-container px-2 py-0.5 rounded-xs text-primary font-bold">
                      KŪṬA / ŚĀLĀ
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                    Dravida Tradition
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                    {" "}
                    Defined by a stepped pyramidal tower (Vimana) rising in regular retreating
                    storeys (talas), culminating in an octagonal or domical Shikhara cap, enclosed
                    by monumental Gopuram gate towers.{" "}
                  </p>{" "}
                  <div className="space-y-2.5 pt-4">
                    {" "}
                    <div className="flex justify-between items-center text-body-sm">
                      {" "}
                      <span className="text-on-surface-variant font-label-monument uppercase text-[11px]">
                        Primary Spire:
                      </span>{" "}
                      <span className="font-semibold text-primary">
                        Stepped Pyramidal Vimana
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between items-center text-body-sm">
                      {" "}
                      <span className="text-on-surface-variant font-label-monument uppercase text-[11px]">
                        Apex Terminal:
                      </span>{" "}
                      <span className="font-semibold text-primary">
                        Stupi Finial over Domical Cap
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between items-center text-body-sm">
                      {" "}
                      <span className="text-on-surface-variant font-label-monument uppercase text-[11px]">
                        Entrance Gate:
                      </span>{" "}
                      <span className="font-semibold text-primary">
                        Monumental Gopuram Towers
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between items-center text-body-sm">
                      {" "}
                      <span className="text-on-surface-variant font-label-monument uppercase text-[11px]">
                        Geographic Range:
                      </span>{" "}
                      <span className="font-semibold text-primary">
                        Tamil Nadu, Kerala, Andhra Pradesh
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mt-8 pt-4">
                  {" "}
                  <button
                    className="w-full py-2.5 rounded-lg bg-surface-container-high text-primary hover:bg-secondary hover:text-on-primary transition-colors font-label-ui text-label-ui uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                    onClick={(e) => S.current.h21?.(e)}
                  >
                    {" "}
                    <span>View Dravida Anatomy</span>{" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated rounded-xl p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                {" "}
                <div>
                  {" "}
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-6 bg-surface-container">
                    {" "}
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Exquisitely detailed chloritic schist stone Hoysala temple in Belur Karnataka featuring a star-shaped stellate plinth with thousands of micro-carved friezes of celestial dancers and deities under atmospheric dusk lighting."
                      src={IMG.vesaraTemple}
                    />{" "}
                  </div>{" "}
                  <div className="flex items-center justify-between mb-2">
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary">
                      HYBRID SYNTHESIS
                    </span>{" "}
                    <span className="font-label-monument text-label-monument bg-surface-container px-2 py-0.5 rounded-xs text-primary font-bold">
                      STELLATE PLANS
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                    Vesara Tradition
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                    {" "}
                    Harmonizes Nagara verticality with Dravidian tiered articulation, flourishing
                    under the Chalukyas, Hoysalas, and Rashtrakutas on stellate (star-shaped)
                    platforms with chloritic schist masonry.{" "}
                  </p>{" "}
                  <div className="space-y-2.5 pt-4">
                    {" "}
                    <div className="flex justify-between items-center text-body-sm">
                      {" "}
                      <span className="text-on-surface-variant font-label-monument uppercase text-[11px]">
                        Primary Spire:
                      </span>{" "}
                      <span className="font-semibold text-primary">
                        Curvilinear-Tiered Synthesis
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between items-center text-body-sm">
                      {" "}
                      <span className="text-on-surface-variant font-label-monument uppercase text-[11px]">
                        Apex Terminal:
                      </span>{" "}
                      <span className="font-semibold text-primary">
                        Fluted Amalaka & Hoysala Crest
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between items-center text-body-sm">
                      {" "}
                      <span className="text-on-surface-variant font-label-monument uppercase text-[11px]">
                        Entrance Gate:
                      </span>{" "}
                      <span className="font-semibold text-primary">
                        Star-Shaped Columned Porch
                      </span>{" "}
                    </div>{" "}
                    <div className="flex justify-between items-center text-body-sm">
                      {" "}
                      <span className="text-on-surface-variant font-label-monument uppercase text-[11px]">
                        Geographic Range:
                      </span>{" "}
                      <span className="font-semibold text-primary">
                        Karnataka, Maharashtra, Deccan
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mt-8 pt-4">
                  {" "}
                  <button
                    className="w-full py-2.5 rounded-lg bg-surface-container-high text-primary hover:bg-secondary hover:text-on-primary transition-colors font-label-ui text-label-ui uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                    onClick={(e) => S.current.h22?.(e)}
                  >
                    {" "}
                    <span>View Vesara Anatomy</span>{" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_outward
                    </span>{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>
    </main>
  );
}

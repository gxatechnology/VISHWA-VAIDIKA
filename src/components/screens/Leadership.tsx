import { Link } from "@tanstack/react-router";
import { IMG } from "@/components/site/images";
import { useScreenScript } from "@/components/site/use-screen-script";
import { setup } from "./scripts/Leadership";

/* Generated from the Stitch design export (screen 05). */
export function LeadershipScreen() {
  const S = useScreenScript(setup);
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        {" "}
        <section className="w-full bg-surface-container-low py-4 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.18em] text-secondary">
                Leadership & Lineage
              </span>{" "}
              <span className="text-stone-hairline text-body-sm">·</span>{" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.14em] text-on-surface-variant">
                Vishwa Vaidika Sanatan Hindu Temple Heritage Private Limited
              </span>{" "}
            </div>{" "}
            <div className="flex items-center gap-3">
              {" "}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-lg text-secondary font-label-monument text-[11px] uppercase tracking-wider">
                {" "}
                <span className="material-symbols-outlined text-[14px]">verified</span> Canonical
                Guild Governance{" "}
              </span>{" "}
              <span className="font-label-monument text-[11px] text-stone-hairline tracking-widest uppercase">
                Reg. MCA India
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface py-16 lg:py-20 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto flex flex-col items-start space-y-6">
            {" "}
            <div className="flex items-center gap-3">
              {" "}
              <span className="w-8 h-0.5 bg-secondary-container"></span>{" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-primary-container font-semibold">
                Founder & Managing Director
              </span>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
              {" "}
              <div className="lg:col-span-8 space-y-4">
                {" "}
                <h1 className="font-display-hero text-display-hero text-primary tracking-tight leading-tight">
                  {" "}
                  Leadership Shaped by Experience and Devotion to Craft.{" "}
                </h1>{" "}
              </div>{" "}
              <div className="lg:col-span-4 pb-2">
                {" "}
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" "}
                  Guiding the sacred confluence of canonical Shilpa Shastras, hereditary stone
                  sculpting guilds, and contemporary structural engineering under the visionary
                  direction of{" "}
                  <strong className="text-primary font-semibold">Umakant Giridhari Jadhav</strong>
                  .{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {" "}
              <div className="p-4 bg-surface-container rounded-lg">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary">
                  Consecrated Temples
                </span>{" "}
                <p className="font-headline-md text-headline-md text-primary font-bold mt-1">36+</p>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Across 10+ Indian States
                </span>{" "}
              </div>{" "}
              <div className="p-4 bg-surface-container rounded-lg">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary">
                  Canonical Lineage
                </span>{" "}
                <p className="font-headline-md text-headline-md text-primary font-bold mt-1">
                  20+ Yrs
                </p>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Sthapatya Veda Mastery
                </span>{" "}
              </div>{" "}
              <div className="p-4 bg-surface-container rounded-lg">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary">
                  Hereditary Sompuras
                </span>{" "}
                <p className="font-headline-md text-headline-md text-primary font-bold mt-1">
                  350+
                </p>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Master Shilpis in Guild
                </span>{" "}
              </div>{" "}
              <div className="p-4 bg-surface-container rounded-lg">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary">
                  Structural Horizon
                </span>{" "}
                <p className="font-headline-md text-headline-md text-primary font-bold mt-1">
                  1000+ Yrs
                </p>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Dry-Stone Monolithic Norm
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface-container-low py-16 lg:py-24 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {" "}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              {" "}
              <div className="relative bg-card-elevated p-4 rounded-xl shadow-md">
                {" "}
                <div className="relative w-full aspect-[4/5] bg-sandstone-surface rounded-lg overflow-hidden flex items-end justify-center">
                  {" "}
                  <img
                    className="w-full h-full object-cover object-top"
                    data-alt="Dignified editorial portrait photograph of Umakant Giridhari Jadhav, visionary Indian master temple patron and builder in traditional elegant silk Kurta with Angavastram, standing reverently beside an intricately hand-carved stone temple pillar capital. Natural warm golden sandstone illumination, subtle temple sanctum depth of field, architectural precision, dignified expression of profound wisdom and sacred heritage guardianship."
                    src={IMG.founderPortrait}
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>{" "}
                  <div className="absolute bottom-0 inset-x-0 p-6 text-on-primary">
                    {" "}
                    <span className="inline-block px-2.5 py-0.5 bg-secondary text-on-primary rounded-xs font-label-monument text-[10px] uppercase tracking-widest mb-1.5">
                      {" "}
                      Master Temple Visionary{" "}
                    </span>{" "}
                    <h2 className="font-headline-sm text-headline-sm font-semibold tracking-wide">
                      {" "}
                      Umakant Giridhari Jadhav{" "}
                    </h2>{" "}
                    <p className="font-body-sm text-body-sm text-surface-container-highest opacity-90 mt-0.5">
                      {" "}
                      Founder & Managing Director{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mt-4 p-4 bg-surface-container rounded-lg space-y-2">
                  {" "}
                  <div className="flex items-center justify-between text-secondary">
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-wider font-bold">
                      Authentication Record
                    </span>{" "}
                    <span className="material-symbols-outlined text-[18px]">
                      verified_user
                    </span>{" "}
                  </div>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                    {" "}
                    Carrying forward the pioneering work of{" "}
                    <strong>Shree Vishweshwar Stone Temple Buildcon Pvt. Ltd.</strong> with deep
                    roots in canonical Vastu engineering.{" "}
                  </p>{" "}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {" "}
                    <span className="px-2 py-0.5 bg-card-elevated text-primary font-label-monument text-[10px] rounded-xs uppercase tracking-wider">
                      {" "}
                      Agama Sastra Certified{" "}
                    </span>{" "}
                    <span className="px-2 py-0.5 bg-card-elevated text-primary font-label-monument text-[10px] rounded-xs uppercase tracking-wider">
                      {" "}
                      Dry-Joint Stone Expert{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-5 bg-card-elevated rounded-xl shadow-xs space-y-2">
                {" "}
                <div className="flex items-center gap-2 text-primary-container">
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">menu_book</span>{" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider font-semibold">
                    Treatise Lineage
                  </span>{" "}
                </div>{" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                  {" "}
                  "Preserving sacred Vedic canonical geometry and monolithic stone craftsmanship for
                  future millennia through unyielding devotion to shastric discipline."{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="lg:col-span-7 flex flex-col space-y-10">
              {" "}
              <div>
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary font-bold">
                  Biography & Shastric Calling
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                  {" "}
                  The Journey of Sacred Construction{" "}
                </h2>{" "}
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed">
                  {" "}
                  Umakant Giridhari Jadhav's architectural life has been an unbroken pilgrimage into
                  the essence of Hindu sacred geometry. Over two decades ago, his journey commenced
                  not from theoretical desks, but amidst the resounding chisels of Sompura sculptors
                  in the quarry towns of Rajasthan and Gujarat. Immersing himself in the profound
                  mathematical verses of <em>Manasara</em>, <em>Mayamata</em>, and the{" "}
                  <em>Isanasivagurudeva Paddhati</em>, he committed his life to preserving temple
                  building as an unbroken spiritual science.{" "}
                </p>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                  {" "}
                  Having stewarded over 36 major consecrated temple projects from conceptual Ayadi
                  orientation to Mahakumbhabhishekam rituals, Shri Jadhav has transformed stone
                  architecture into a living testament of Sanatan permanence.{" "}
                </p>{" "}
              </div>{" "}
              <div className="p-6 bg-card-elevated rounded-xl shadow-xs space-y-3">
                {" "}
                <div className="flex items-center gap-3">
                  {" "}
                  <div className="w-8 h-8 rounded-4xl bg-secondary/15 flex items-center justify-center text-secondary">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      account_balance
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {" "}
                    Philosophy of Sacred Monoliths{" "}
                  </h3>{" "}
                </div>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" "}
                  In Shri Jadhav's doctrine, a temple is never a mere spatial enclosure or
                  decorative civic monument; it is the physical manifestation of the{" "}
                  <strong>Vastu Purusha</strong>—a conscious cosmic entity whose proportions mirror
                  the macrocosm. Under his guardianship, Vishwa Vaidika Sanatan refuses ephemeral
                  structural shortcuts. Every monument utilizes zero-ferrous, dry-stone interlocking
                  tenon-mortise joinery designed to breathe, settle, and withstand dynamic seismic
                  oscillations for 1,000+ years without structural fatigue.{" "}
                </p>{" "}
              </div>{" "}
              <div className="p-6 bg-card-elevated rounded-xl shadow-xs space-y-3">
                {" "}
                <div className="flex items-center gap-3">
                  {" "}
                  <div className="w-8 h-8 rounded-4xl bg-primary/10 flex items-center justify-center text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">biotech</span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {" "}
                    Bridge to Modern Engineering{" "}
                  </h3>{" "}
                </div>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" "}
                  Pioneering a synthesis of antiquity and precision computation, Shri Jadhav
                  integrates millimeter-grade 3D LiDAR point-cloud topography, parametric load
                  simulations, and laser-guided quarry block slicing with centuries-old Ayadi Shad
                  Varga calculations. This scientific calibration guarantees that every carved stone
                  module slots perfectly into place, uniting the intuitive hand of master Sompuras
                  with modern structural resilience.{" "}
                </p>{" "}
              </div>{" "}
              <div className="relative p-8 bg-surface-container rounded-xl">
                {" "}
                <span className="font-headline-lg text-[64px] text-secondary/30 leading-none select-none absolute top-2 left-4">
                  “
                </span>{" "}
                <div className="relative z-10 pl-6 space-y-3">
                  {" "}
                  <p className="font-title-editorial text-title-editorial italic text-primary leading-relaxed">
                    {" "}
                    A Hindu temple is the eternal anchor of dharma. Our sacred duty as builders is
                    not just to assemble stones, but to manifest the divine cosmic proportions that
                    inspire humanity across centuries.{" "}
                  </p>{" "}
                  <div className="flex items-center gap-3 pt-2">
                    {" "}
                    <span className="w-6 h-0.5 bg-secondary"></span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-wider text-on-surface font-semibold">
                      {" "}
                      Umakant Giridhari Jadhav{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface py-20 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto flex flex-col space-y-12">
            {" "}
            <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto">
              {" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary font-bold">
                Institutional Doctrine
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                {" "}
                Four Pillars of Architectural Stewardship{" "}
              </h2>{" "}
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {" "}
                Principles formulated by Founder Umakant Giridhari Jadhav to uphold unbroken Vedic
                integrity across all sanctuary undertakings.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {" "}
              <div className="p-6 bg-card-elevated rounded-xl shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
                {" "}
                <div className="space-y-4">
                  {" "}
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                    {" "}
                    <span className="material-symbols-outlined text-[26px]">temple_hindu</span>{" "}
                  </div>{" "}
                  <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                    Pillar 01
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {" "}
                    Canonical Sthapatya Integrity{" "}
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" "}
                    Uncompromising alignment with sacred treatises including the <em>
                      Manasara
                    </em>, <em>Mayamata</em>, and <em>Agama Shastras</em>. Zero aesthetic drift from
                    classical proportional canons.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-4 bg-surface-container-low px-3 py-2 rounded-xs text-secondary font-label-monument text-[10px] tracking-wider uppercase">
                  {" "}
                  Strict Scriptural Mandate{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-6 bg-card-elevated rounded-xl shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
                {" "}
                <div className="space-y-4">
                  {" "}
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                    {" "}
                    <span className="material-symbols-outlined text-[26px]">groups_3</span>{" "}
                  </div>{" "}
                  <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                    Pillar 02
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {" "}
                    Artisanal Patronage & Dignity{" "}
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" "}
                    Providing sustained livelihoods, generational honor, and safe guild sanctuaries
                    for 350+ hereditary Sompura stone sculptors and their apprentice lineages.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-4 bg-surface-container-low px-3 py-2 rounded-xs text-secondary font-label-monument text-[10px] tracking-wider uppercase">
                  {" "}
                  Sustaining Living Heritage{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-6 bg-card-elevated rounded-xl shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
                {" "}
                <div className="space-y-4">
                  {" "}
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                    {" "}
                    <span className="material-symbols-outlined text-[26px]">explore</span>{" "}
                  </div>{" "}
                  <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                    Pillar 03
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {" "}
                    Geomantic & Vastu Calibration{" "}
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" "}
                    Mathematical solar-lunar azimuth verification, Ayadi Shad Varga harmony
                    formulas, and precise energy gridlines ensuring consecrated life in every
                    Garbhagriha.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-4 bg-surface-container-low px-3 py-2 rounded-xs text-secondary font-label-monument text-[10px] tracking-wider uppercase">
                  {" "}
                  Cosmic Proportionality{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-6 bg-card-elevated rounded-xl shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
                {" "}
                <div className="space-y-4">
                  {" "}
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                    {" "}
                    <span className="material-symbols-outlined text-[26px]">diamond</span>{" "}
                  </div>{" "}
                  <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
                    Pillar 04
                  </span>{" "}
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {" "}
                    1,000-Year Structural Longevity{" "}
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" "}
                    Direct quarry procurement of Grade-A Bansi Paharpur sandstone, Makrana marble,
                    and granite. Zero-cement, zero-steel mortise interlocking engineering.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-4 bg-surface-container-low px-3 py-2 rounded-xs text-secondary font-label-monument text-[10px] tracking-wider uppercase">
                  {" "}
                  Monolithic Permanence{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-charcoal-monolith py-20 px-gutter text-on-tertiary">
          {" "}
          <div className="max-w-7xl mx-auto space-y-12">
            {" "}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
              {" "}
              <div>
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary-container font-semibold">
                  Institutional Horizon
                </span>{" "}
                <h2 className="font-headline-lg text-headline-lg text-surface tracking-tight mt-1">
                  {" "}
                  Vision & Sacred Mission{" "}
                </h2>{" "}
              </div>{" "}
              <p className="font-body-sm text-body-sm text-stone-hairline max-w-md">
                {" "}
                Chartered under the spiritual direction of Umakant Giridhari Jadhav for global
                Sanatan diaspora trusts and preservation councils.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {" "}
              <div className="p-8 bg-charcoal-deep rounded-xl flex flex-col justify-between space-y-6 shadow-md">
                {" "}
                <div className="space-y-4">
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <span className="w-2.5 h-2.5 rounded-4xl bg-secondary-container"></span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary-container font-bold">
                      Our Global Vision
                    </span>{" "}
                  </div>{" "}
                  <p className="font-title-editorial text-title-editorial text-surface-container-lowest leading-relaxed font-normal">
                    {" "}
                    “To be the world’s most revered citadel of authentic Sanatan temple
                    architecture, immortalizing Vedic geometry and sacred stone craftsmanship across
                    the global Hindu diaspora.”{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-4 flex items-center gap-2 text-stone-hairline font-label-monument text-[11px] uppercase tracking-wider">
                  {" "}
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">
                    language
                  </span>{" "}
                  Global Diaspora Presence · Millennial Vision{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-8 bg-charcoal-deep rounded-xl flex flex-col justify-between space-y-6 shadow-md">
                {" "}
                <div className="space-y-4">
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <span className="w-2.5 h-2.5 rounded-4xl bg-secondary-fixed"></span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary-fixed font-bold">
                      Our Sacred Mission
                    </span>{" "}
                  </div>{" "}
                  <p className="font-title-editorial text-title-editorial text-surface-container-lowest leading-relaxed font-normal">
                    {" "}
                    “To construct, consecrate, and preserve grand stone temples with uncompromising
                    scriptural fidelity, generational master craftsmanship, and modern engineering
                    excellence.”{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-4 flex items-center gap-2 text-stone-hairline font-label-monument text-[11px] uppercase tracking-wider">
                  {" "}
                  <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                    architecture
                  </span>{" "}
                  Shilpa Shastra Guild Standard · Zero Compromise{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface-container-low py-20 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto space-y-12">
            {" "}
            <div className="flex flex-col items-start space-y-3 max-w-2xl">
              {" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary font-bold">
                Eminent Conclave
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                {" "}
                Leadership Council & Sthapati Guild Advisors{" "}
              </h2>{" "}
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" "}
                Working under the stewardship of Founder Umakant Jadhav, this interdisciplinary
                conclave combines hereditary artistry with structural science.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {" "}
              <div className="bg-card-elevated rounded-xl p-6 shadow-xs flex flex-col justify-between space-y-4">
                {" "}
                <div className="space-y-3">
                  {" "}
                  <div className="w-14 h-14 rounded-4xl bg-surface-container flex items-center justify-center text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[28px]">handyman</span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-semibold">
                      Guild Master
                    </span>{" "}
                    <h3 className="font-headline-sm text-[20px] text-primary mt-0.5">
                      Chief Sompura Architect
                    </h3>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-medium">
                      Hereditary Sthapati Guild (Gujarat & Rajasthan)
                    </p>{" "}
                  </div>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" "}
                    7th-generation master carver overseeing intricate Shikhara, Mandapa ceilings,
                    and Shilpa Shastra stone detailing.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-3 bg-surface-container px-3 py-1.5 rounded-xs font-label-monument text-[10px] text-secondary uppercase tracking-wider">
                  {" "}
                  Canonical Carving Lead{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated rounded-xl p-6 shadow-xs flex flex-col justify-between space-y-4">
                {" "}
                <div className="space-y-3">
                  {" "}
                  <div className="w-14 h-14 rounded-4xl bg-surface-container flex items-center justify-center text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[28px]">foundation</span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-semibold">
                      Engineering Dean
                    </span>{" "}
                    <h3 className="font-headline-sm text-[20px] text-primary mt-0.5">
                      Chief Structural Engineer
                    </h3>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-medium">
                      Ph.D. IIT Roorkee · Structural Dynamics
                    </p>{" "}
                  </div>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" "}
                    Expert in finite-element stone modeling, seismic base isolation, and
                    thousand-year soil load calibration.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-3 bg-surface-container px-3 py-1.5 rounded-xs font-label-monument text-[10px] text-secondary uppercase tracking-wider">
                  {" "}
                  Seismic Durability Lead{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated rounded-xl p-6 shadow-xs flex flex-col justify-between space-y-4">
                {" "}
                <div className="space-y-3">
                  {" "}
                  <div className="w-14 h-14 rounded-4xl bg-surface-container flex items-center justify-center text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[28px]">
                      brightness_medium
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-semibold">
                      Vedic Vidwan
                    </span>{" "}
                    <h3 className="font-headline-sm text-[20px] text-primary mt-0.5">
                      Head Vastu & Ayadi Vidwan
                    </h3>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-medium">
                      Agama Shastra Parishad, Kanchi
                    </p>{" "}
                  </div>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" "}
                    Calculates Ayadi formulas (Aya, Vya, Yoni, Nakshatra) to mathematically tune
                    each shrine's planetary harmony.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-3 bg-surface-container px-3 py-1.5 rounded-xs font-label-monument text-[10px] text-secondary uppercase tracking-wider">
                  {" "}
                  Ayadi Shad Varga Lead{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-card-elevated rounded-xl p-6 shadow-xs flex flex-col justify-between space-y-4">
                {" "}
                <div className="space-y-4">
                  {" "}
                  <div className="w-14 h-14 rounded-4xl bg-surface-container flex items-center justify-center text-primary">
                    {" "}
                    <span className="material-symbols-outlined text-[28px]">terrain</span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-semibold">
                      Petrology Specialist
                    </span>{" "}
                    <h3 className="font-headline-sm text-[20px] text-primary mt-0.5">
                      Director of Material Geology
                    </h3>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-medium">
                      Geological Survey of India Veteran
                    </p>{" "}
                  </div>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" "}
                    Directs ultrasonic testing, weathering density metrics, and quarry strata
                    validation for Bansi Paharpur sandstone.{" "}
                  </p>{" "}
                </div>{" "}
                <div className="pt-3 bg-surface-container px-3 py-1.5 rounded-xs font-label-monument text-[10px] text-secondary uppercase tracking-wider">
                  {" "}
                  Stone Provenance Lead{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface py-16 px-gutter">
          {" "}
          <div className="max-w-7xl mx-auto p-8 lg:p-12 bg-card-elevated rounded-xl shadow-md">
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {" "}
              <div className="lg:col-span-5 space-y-4">
                {" "}
                <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary font-bold">
                  Unbroken Lineage Chronicle
                </span>{" "}
                <h3 className="font-headline-md text-headline-md text-primary tracking-tight">
                  {" "}
                  Two Decades of Monolithic Dedication{" "}
                </h3>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" "}
                  From the initial sanctums carved under Shree Vishweshwar Stone Temple Buildcon to
                  monumental international shrines under Vishwa Vaidika Sanatan, every chapter
                  reflects sacred perseverance.{" "}
                </p>{" "}
                <div className="pt-2">
                  {" "}
                  <button
                    className="inline-flex items-center gap-2 font-label-ui text-label-ui uppercase tracking-wider text-primary font-semibold hover:text-secondary transition-colors focus:outline-hidden"
                    onClick={(e) => S.current.h0?.(e)}
                  >
                    {" "}
                    <span>View Archival Milestones</span>{" "}
                    <span className="material-symbols-outlined text-[16px]">expand_more</span>{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-7">
                {" "}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {" "}
                  <div className="p-4 bg-surface-container-low rounded-lg space-y-1">
                    {" "}
                    <span className="font-label-monument text-[10px] text-secondary uppercase font-bold">
                      Phase I (2004-2012)
                    </span>{" "}
                    <p className="font-title-editorial text-title-editorial text-primary font-bold">
                      Sanctuary Foundations
                    </p>{" "}
                    <p className="font-body-sm text-[12px] text-on-surface-variant leading-normal">
                      {" "}
                      Early Dravidian & Nagara stone carvings across Western India, mastering
                      traditional interlocking jointing.{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="p-4 bg-surface-container-low rounded-lg space-y-1">
                    {" "}
                    <span className="font-label-monument text-[10px] text-secondary uppercase font-bold">
                      Phase II (2013-2020)
                    </span>{" "}
                    <p className="font-title-editorial text-title-editorial text-primary font-bold">
                      Statewide Monuments
                    </p>{" "}
                    <p className="font-body-sm text-[12px] text-on-surface-variant leading-normal">
                      {" "}
                      Executing large-scale temple complexes in Rajasthan, Maharashtra, and
                      Karnataka with 350+ master sculptors.{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="p-4 bg-surface-container-low rounded-lg space-y-1">
                    {" "}
                    <span className="font-label-monument text-[10px] text-secondary uppercase font-bold">
                      Phase III (Present)
                    </span>{" "}
                    <p className="font-title-editorial text-title-editorial text-primary font-bold">
                      Global Citadel
                    </p>{" "}
                    <p className="font-body-sm text-[12px] text-on-surface-variant leading-normal">
                      {" "}
                      Pioneering monolithic diaspora projects with integrated 3D LiDAR and pure
                      scriptural fidelity.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div
                  className="hidden mt-4 p-4 bg-surface-container rounded-lg space-y-2"
                  id="lineage-details"
                >
                  {" "}
                  <span className="font-label-monument text-[11px] uppercase tracking-wider text-primary font-bold">
                    Archival Registration Monograph
                  </span>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Officially incorporated under the Ministry of Corporate Affairs, India. Vishwa
                    Vaidika Sanatan Hindu Temple Heritage Private Limited is the registered
                    sovereign bearer of this proprietary stonecraft methodology.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-primary py-16 lg:py-20 px-gutter text-on-primary">
          {" "}
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
            {" "}
            <div className="space-y-3">
              {" "}
              <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary-container font-semibold">
                {" "}
                High Patron & Trustee Liaison{" "}
              </span>{" "}
              <h2 className="font-headline-lg text-headline-lg font-normal tracking-tight text-on-primary">
                {" "}
                Confer Directly with Our Leadership & Sthapatis{" "}
              </h2>{" "}
              <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl mx-auto leading-relaxed">
                {" "}
                Whether you are commissioning a grand civic stone sanctuary, restoring an ancient
                heritage mandir, or seeking canonical Vastu consultation, Shri Umakant Jadhav and
                the Sthapati Guild invite your patronage.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {" "}
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-on-tertiary-container hover:bg-tertiary text-on-primary font-label-ui text-label-ui uppercase tracking-wider font-semibold rounded-lg shadow-md transition-all"
              >
                {" "}
                <span className="material-symbols-outlined text-[18px] mr-2">
                  calendar_month
                </span>{" "}
                Schedule Consultation{" "}
              </Link>{" "}
              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-primary-container text-on-primary hover:bg-primary-container/80 font-label-ui text-label-ui uppercase tracking-wider font-semibold rounded-lg transition-all"
              >
                {" "}
                <span className="material-symbols-outlined text-[18px] mr-2">history_edu</span>{" "}
                Explore Heritage Lineage{" "}
              </Link>{" "}
            </div>{" "}
            <div className="flex items-center gap-6 pt-4 text-primary-fixed text-body-sm">
              {" "}
              <div className="flex items-center gap-2">
                {" "}
                <span className="material-symbols-outlined text-[16px] text-secondary-container">
                  shield
                </span>{" "}
                <span>Trustee Confidentiality Ensured</span>{" "}
              </div>{" "}
              <span className="text-stone-hairline">·</span>{" "}
              <div className="flex items-center gap-2">
                {" "}
                <span className="material-symbols-outlined text-[16px] text-secondary-container">
                  verified
                </span>{" "}
                <span>Shilpa Shastra Verified</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>
    </main>
  );
}

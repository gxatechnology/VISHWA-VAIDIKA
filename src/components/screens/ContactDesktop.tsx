import { IMG } from "@/components/site/images";
import { useScreenScript } from "@/components/site/use-screen-script";
import { setup } from "./scripts/ContactDesktop";
import { SERVICE_CATEGORIES, getServicesByCategory } from "@/data/services-data";
import { PHONE_SECONDARY, PHONE_SECONDARY_HREF } from "@/components/site/nav-links";

/* Generated from the Stitch design export (screen 12). */
export function ContactDesktopScreen() {
  const S = useScreenScript(setup);
  return (
    <main className="w-full pt-24 bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        {" "}
        <section className="relative w-full bg-surface-container-low px-gutter py-space-xl overflow-hidden shadow-xs">
          {" "}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            {" "}
            <div className="absolute -right-24 -top-24 w-96 h-96 rounded-4xl bg-primary blur-3xl"></div>{" "}
            <div className="absolute left-1/4 -bottom-16 w-80 h-80 rounded-4xl bg-secondary blur-2xl"></div>{" "}
          </div>{" "}
          <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
            {" "}
            <div className="space-y-space-xs max-w-3xl">
              {" "}
              <div className="inline-flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded-xs">
                {" "}
                <span className="w-1.5 h-1.5 rounded-4xl bg-on-tertiary-container animate-pulse"></span>{" "}
                <span className="font-label-monument text-label-monument text-secondary uppercase tracking-widest">
                  Sanctum Consultation & Sthapati Directorate
                </span>{" "}
              </div>{" "}
              <h1 className="font-display-hero text-display-hero text-primary tracking-tight font-normal">
                {" "}
                Let’s Build Something Timeless.{" "}
              </h1>{" "}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                {" "}
                Tell us about your temple construction, architectural masterplan, or monumental
                stone heritage restoration project. Our Shastric council is at your devotion.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex items-center gap-space-md bg-surface-container-lowest p-space-md rounded-xs shadow-xs">
              {" "}
              <div className="h-14 w-auto rounded-xs bg-surface-container-high/60 flex items-center justify-center p-2 shrink-0 border border-gold/20">
                <img
                  alt="Vishwa Vaidika Crest"
                  className="h-full w-auto max-h-12 object-contain"
                  src={IMG.crest}
                />
              </div>{" "}
              <div className="space-y-0.5">
                {" "}
                <p className="font-label-monument text-label-monument uppercase tracking-wider text-primary font-bold">
                  Temple Architecture & Planning
                </p>{" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Dry-Joint Interlocking Granitic Engineering
                </p>{" "}
                <div className="flex items-center gap-2 pt-1 text-secondary font-label-ui text-label-ui">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">verified</span>{" "}
                  <span>Traditional Craftsmanship & Engineering</span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="max-w-7xl mx-auto w-full px-gutter py-space-xl">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {" "}
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              {" "}
              <div className="bg-card-elevated p-space-lg md:p-space-xl rounded-xs shadow-md relative">
                {" "}
                <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-primary via-secondary to-transparent"></div>{" "}
                <div className="mb-space-lg">
                  {" "}
                  <div className="flex items-center justify-between pb-space-xs mb-space-xs">
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary font-bold">
                      Form VVS-2024 / ARCH-CON-01
                    </span>{" "}
                    <span className="font-label-ui text-label-ui text-on-surface-variant flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[15px] text-muted-sage">
                        lock
                      </span>{" "}
                      WhatsApp Enquiry Handoff{" "}
                    </span>{" "}
                  </div>{" "}
                  <h2 className="font-headline-md text-headline-md text-primary">
                    {" "}
                    Initiate Sacred Architecture Consultation{" "}
                  </h2>{" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {" "}
                    Submit baseline dimensions, spiritual dedications, or site particulars. An
                    accredited Chief Sthapati reviews every sacred docket within 24 operational
                    hours.{" "}
                  </p>{" "}
                </div>{" "}
                <form
                  className="space-y-space-md"
                  id="consultation-form"
                  onSubmit={(e) => S.current.h0?.(e)}
                >
                  {" "}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {" "}
                    <div className="flex flex-col gap-1.5">
                      {" "}
                      <label
                        className="font-label-ui text-label-ui text-primary uppercase tracking-wide"
                        htmlFor="fullName"
                      >
                        {" "}
                        Full Name <span className="text-on-tertiary-container">*</span>{" "}
                      </label>{" "}
                      <div className="relative">
                        {" "}
                        <input
                          className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xs font-body-md text-body-md focus:outline-hidden focus:bg-surface-container-lowest focus:shadow-inner transition-all"
                          id="fullName"
                          placeholder="e.g. Acharya Rajesh Sharma"
                          required
                          type="text"
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="flex flex-col gap-1.5">
                      {" "}
                      <label
                        className="font-label-ui text-label-ui text-primary uppercase tracking-wide"
                        htmlFor="phone"
                      >
                        {" "}
                        Mobile / Direct Liaison Phone{" "}
                        <span className="text-on-tertiary-container">*</span>{" "}
                      </label>{" "}
                      <div className="flex gap-2">
                        {" "}
                        <div className="w-24 shrink-0 bg-surface-container px-3 py-space-sm rounded-xs font-body-md text-body-md text-on-surface-variant flex items-center justify-center">
                          {" "}
                          +91 (IND){" "}
                        </div>{" "}
                        <input
                          className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xs font-body-md text-body-md focus:outline-hidden focus:bg-surface-container-lowest focus:shadow-inner transition-all"
                          id="phone"
                          placeholder="98765 43210"
                          required
                          type="tel"
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    {" "}
                    <div className="flex flex-col gap-1.5">
                      {" "}
                      <label
                        className="font-label-ui text-label-ui text-primary uppercase tracking-wide"
                        htmlFor="email"
                      >
                        {" "}
                        Official Email Address{" "}
                        <span className="text-on-tertiary-container">*</span>{" "}
                      </label>{" "}
                      <input
                        className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xs font-body-md text-body-md focus:outline-hidden focus:bg-surface-container-lowest focus:shadow-inner transition-all"
                        id="email"
                        placeholder="trustee@mandirfoundation.org"
                        required
                        type="email"
                      />{" "}
                    </div>{" "}
                    <div className="flex flex-col gap-1.5">
                      {" "}
                      <label
                        className="font-label-ui text-label-ui text-primary uppercase tracking-wide"
                        htmlFor="trustName"
                      >
                        {" "}
                        Organization / Temple Trust / Patron Name{" "}
                      </label>{" "}
                      <input
                        className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xs font-body-md text-body-md focus:outline-hidden focus:bg-surface-container-lowest focus:shadow-inner transition-all"
                        id="trustName"
                        placeholder="e.g. Sri Venkateswara Dharmic Trust"
                        type="text"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex flex-col gap-2 pt-1">
                    {" "}
                    <div className="flex justify-between items-baseline">
                      {" "}
                      <label className="font-label-ui text-label-ui text-primary uppercase tracking-wide">
                        {" "}
                        Sacred Scope & Project Type{" "}
                        <span className="text-on-tertiary-container">*</span>{" "}
                      </label>{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Select primary directive
                      </span>{" "}
                    </div>{" "}
                    <div className="flex flex-col gap-1.5" id="project-type-selector">
                      <select
                        name="project_type"
                        id="project_type"
                        defaultValue="TEMPLE CONSTRUCTION & SACRED ARCHITECTURE — Complete Temple Construction (Design to Kalasha)"
                        className="w-full bg-surface-container-low text-on-surface px-space-md py-3 rounded-xs font-body-md text-body-md border border-gold/30 focus:outline-hidden focus:bg-surface-container-lowest focus:border-primary transition-all cursor-pointer"
                      >
                        {SERVICE_CATEGORIES.map((cat) => (
                          <optgroup key={cat.id} label={`Section ${cat.code}: ${cat.title}`}>
                            {getServicesByCategory(cat.id).map((s) => (
                              <option key={s.id} value={`${cat.title} — ${s.name}`}>
                                {s.name}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">
                        Select from all 6 corporate sections and 42 official construction, infrastructure & stonework services.
                      </p>
                    </div>{" "}
                  </div>{" "}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-1">
                    {" "}
                    <div className="flex flex-col gap-1.5">
                      {" "}
                      <label
                        className="font-label-ui text-label-ui text-primary uppercase tracking-wide"
                        htmlFor="location"
                      >
                        {" "}
                        Proposed Site Location & State{" "}
                        <span className="text-on-tertiary-container">*</span>{" "}
                      </label>{" "}
                      <input
                        className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xs font-body-md text-body-md focus:outline-hidden focus:bg-surface-container-lowest focus:shadow-inner transition-all"
                        id="location"
                        placeholder="e.g. Ayodhya, Uttar Pradesh, Bharat"
                        required
                        type="text"
                      />{" "}
                    </div>{" "}
                    <div className="flex flex-col gap-1.5">
                      {" "}
                      <label
                        className="font-label-ui text-label-ui text-primary uppercase tracking-wide"
                        htmlFor="dimensions"
                      >
                        {" "}
                        Plot Area / Proposed Vimana Height{" "}
                      </label>{" "}
                      <input
                        className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xs font-body-md text-body-md focus:outline-hidden focus:bg-surface-container-lowest focus:shadow-inner transition-all"
                        id="dimensions"
                        placeholder="e.g. 5 Acres / 108 ft Shikhar height"
                        type="text"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex flex-col gap-1.5 pt-1">
                    {" "}
                    <label className="font-label-ui text-label-ui text-primary uppercase tracking-wide">
                      {" "}
                      Preferred Monolithic Stone Typology{" "}
                    </label>{" "}
                    <div className="grid grid-cols-3 gap-2">
                      {" "}
                      <div
                        className="bg-surface-container-low p-2 rounded-xs text-center cursor-pointer hover:bg-surface-container transition-all"
                        onClick={(e) => S.current.h1?.(e)}
                      >
                        {" "}
                        <div className="w-full h-8 bg-[#DDBBA5] rounded-xs mb-1 opacity-70"></div>{" "}
                        <span className="font-label-monument text-label-monument block text-primary uppercase">
                          Bansi Paharpur
                        </span>{" "}
                        <span className="font-body-sm text-[11px] text-on-surface-variant">
                          Sandstone
                        </span>{" "}
                      </div>{" "}
                      <div
                        className="bg-surface-container-low p-2 rounded-xs text-center cursor-pointer hover:bg-surface-container transition-all"
                        onClick={(e) => S.current.h2?.(e)}
                      >
                        {" "}
                        <div className="w-full h-8 bg-[#EAEAE6] rounded-xs mb-1 opacity-70"></div>{" "}
                        <span className="font-label-monument text-label-monument block text-primary uppercase">
                          Makrana White
                        </span>{" "}
                        <span className="font-body-sm text-[11px] text-on-surface-variant">
                          Vedic Marble
                        </span>{" "}
                      </div>{" "}
                      <div
                        className="bg-surface-container-low p-2 rounded-xs text-center cursor-pointer hover:bg-surface-container transition-all"
                        onClick={(e) => S.current.h3?.(e)}
                      >
                        {" "}
                        <div className="w-full h-8 bg-[#444648] rounded-xs mb-1 opacity-70"></div>{" "}
                        <span className="font-label-monument text-label-monument block text-primary uppercase">
                          Black Granite
                        </span>{" "}
                        <span className="font-body-sm text-[11px] text-on-surface-variant">
                          Charnockite
                        </span>{" "}
                      </div>{" "}
                    </div>{" "}
                    <input
                      id="stone_pref"
                      type="hidden"
                      defaultValue="Pink Bansi Paharpur Sandstone"
                    />{" "}
                  </div>{" "}
                  <div className="flex flex-col gap-1.5 pt-1">
                    {" "}
                    <div className="flex justify-between items-baseline">
                      {" "}
                      <label
                        className="font-label-ui text-label-ui text-primary uppercase tracking-wide"
                        htmlFor="vision"
                      >
                        {" "}
                        Project Requirements & Sacred Vision{" "}
                        <span className="text-on-tertiary-container">*</span>{" "}
                      </label>{" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Deity dedication & Agamic tradition
                      </span>{" "}
                    </div>{" "}
                    <textarea
                      className="w-full bg-surface-container-low text-on-surface px-space-md py-space-sm rounded-xs font-body-md text-body-md focus:outline-hidden focus:bg-surface-container-lowest focus:shadow-inner transition-all"
                      id="vision"
                      placeholder="Specify principal Moolavar deity (e.g., Lord Shiva, Sri Rama, Maha Vishnu), intended architectural style (Nagara, Dravida, Vesara, or Kalinga), scriptural references, and target consecration (Maha Kumbhabhishekam) timeline..."
                      required
                      rows={4}
                    />{" "}
                  </div>{" "}
                  <div className="flex flex-col gap-1.5 pt-1">
                    {" "}
                    <label className="font-label-ui text-label-ui text-primary uppercase tracking-wide">
                      {" "}
                      Architectural Concept or Bhoomi Survey Attachment{" "}
                    </label>{" "}
                    <div
                      className="bg-surface-container-low rounded-xs p-space-md text-center hover:bg-surface-container cursor-pointer transition-colors relative"
                      id="drop-zone"
                    >
                      {" "}
                      <input
                        accept=".pdf,.dwg,.dxf,.jpg,.png"
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        id="file-input"
                        onChange={(e) => S.current.h4?.(e)}
                        type="file"
                      />{" "}
                      <div className="flex flex-col items-center justify-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-secondary text-[32px]">
                          cloud_upload
                        </span>{" "}
                        <span
                          className="font-body-sm text-body-sm text-on-surface font-medium"
                          id="file-chosen-text"
                        >
                          Attach Site Survey, Bhoomi Map, or Trust Resolution (PDF, DWG up to 25MB)
                        </span>{" "}
                        <span className="font-label-monument text-label-monument text-on-surface-variant uppercase tracking-wider">
                          Secured Shastric Vault Storage
                        </span>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    {" "}
                    <button
                      className="w-full sm:w-auto px-space-xl py-space-md bg-primary hover:bg-on-tertiary-container text-on-primary font-label-monument text-label-monument uppercase tracking-widest rounded-xs shadow-md transition-all flex items-center justify-center gap-2 group"
                      type="submit"
                    >
                      {" "}
                      <span>Continue on WhatsApp</span>{" "}
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>{" "}
                    </button>{" "}
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      {" "}
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        verified_user
                      </span>{" "}
                      <p className="font-body-sm text-body-sm leading-snug">
                        {" "}
                        Opens WhatsApp with your enquiry draft; review and press Send there. Attach files in chat.{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div
                    className="hidden mt-space-md p-space-md bg-secondary-fixed text-on-secondary-fixed rounded-xs shadow-xs flex items-start gap-space-sm animate-fade-in"
                    id="success-banner"
                  >
                    {" "}
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      task_alt
                    </span>{" "}
                    <div className="space-y-1">
                      {" "}
                      <h4 className="font-title-editorial text-title-editorial leading-tight">
                        WhatsApp draft prepared — please press Send there
                      </h4>{" "}
                      <p className="font-body-sm text-body-sm">
                        Your enquiry is not sent automatically. Please review the drafted
                        WhatsApp message and press Send. Attachments must be shared there.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </form>{" "}
              </div>{" "}
              <div className="relative bg-charcoal-monolith text-on-primary rounded-xs overflow-hidden shadow-lg p-space-lg flex flex-col md:flex-row items-center gap-space-lg">
                {" "}
                <div
                  className="w-full md:w-48 h-48 rounded-xs bg-cover bg-center shrink-0 shadow-md"
                  data-alt="Close up photograph of a master Indian traditional temple stone carver hand chiseling an intricate dancing apsara vigraha from pink sandstone, warm sunlight casting dramatic shadows on dust and hewn masonry, sacred artisan craftsmanship."
                  style={{ backgroundImage: `url(${IMG.artisanCarving})` }}
                ></div>{" "}
                <div className="space-y-space-xs">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary-container">
                    Guild Directorship
                  </span>{" "}
                  <h3 className="font-title-editorial text-title-editorial text-surface">
                    Sthapati Council & Sompura Guild Lineage
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-surface-variant leading-relaxed">
                    {" "}
                    Every design submitted passes through our hereditary Shilpa Shastris and
                    structural geologists to ensure zero iron reinforcement, 100% stone
                    interlocking, and flawless Ayadi cosmological alignment.{" "}
                  </p>{" "}
                  <div className="pt-2 flex items-center gap-space-md text-secondary-fixed font-label-ui text-label-ui">
                    {" "}
                    <span>900+ Master Craftsmen</span> <span>•</span>{" "}
                    <span>12 Operational Quarries</span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              {" "}
              <div className="bg-card-elevated p-space-lg rounded-xs shadow-md relative overflow-hidden">
                {" "}
                <div className="flex items-center justify-between mb-space-md">
                  {" "}
                  <div className="space-y-0.5">
                    {" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary font-semibold">
                      National Command
                    </span>{" "}
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Headquarters & Central Sthapati Peetham
                    </h3>{" "}
                  </div>{" "}
                  <div className="w-12 h-12 rounded-xs bg-surface-container flex items-center justify-center text-primary shrink-0">
                    {" "}
                    <span className="material-symbols-outlined text-[26px]">
                      account_balance
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="space-y-space-md font-body-md text-body-md text-on-surface">
                  {" "}
                  <div className="flex items-start gap-space-sm">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">
                      location_on
                    </span>{" "}
                    <div>
                      {" "}
                      <p className="font-label-ui text-label-ui text-primary uppercase">
                        Official Directorate Address
                      </p>{" "}
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-0.5">
                        {" "}
                        Destination Center 2, Nanded City, Sinhagad Road,
                        <br /> Pune – 411068, Maharashtra, India.{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">
                      call
                    </span>
                    <div>
                      <p className="font-label-ui text-label-ui text-primary uppercase">
                        Direct Project Switchboard
                      </p>
                      <div className="flex flex-col gap-0.5 mt-0.5">
                        <a
                          className="font-body-md text-body-md text-primary font-semibold hover:text-secondary transition-colors inline-block"
                          href="tel:+919941121111"
                        >
                          Primary: +91 99411 21111
                        </a>
                        <a
                          className="font-body-sm text-body-sm text-primary font-semibold hover:text-secondary transition-colors inline-block"
                          href={PHONE_SECONDARY_HREF}
                        >
                          Secondary: {PHONE_SECONDARY}
                        </a>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] mt-0.5">
                        (Mon–Sat: 09:00 IST – 19:30 IST)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">
                      mark_email_read
                    </span>
                    <div>
                      <p className="font-label-ui text-label-ui text-primary uppercase">
                        Direct Corporate Email
                      </p>
                      <a
                        className="font-body-md text-body-md text-primary font-medium hover:underline inline-block mt-0.5"
                        href="mailto:contact@vishwavaidika.com"
                      >
                        contact@vishwavaidika.com
                      </a>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                        Corporate inquiries, proposals & tenders
                      </p>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-surface-container-high p-space-lg rounded-xs shadow-xs relative overflow-hidden">
                {" "}
                <div className="flex items-center gap-space-sm mb-space-sm">
                  {" "}
                  <div className="w-10 h-10 rounded-4xl bg-[#1F7A42]/15 text-[#1F7A42] flex items-center justify-center shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[22px]">chat</span>
                  </div>
                  <div>
                    <span className="inline-block bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-xs font-label-monument text-[10px] tracking-wider uppercase font-bold">
                      Awaiting Owner Confirmation
                    </span>
                    <h4 className="font-title-editorial text-title-editorial text-primary leading-tight">
                      WhatsApp Liaison Channel
                    </h4>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  Configured with Primary Corporate Line (+91 99411 21111) for quick project drafts. Direct phone calls and official email remain fully confirmed and guaranteed.
                </p>{" "}
                <a
                  className="w-full bg-[#1F7A42] hover:bg-[#185e33] text-white px-space-md py-space-sm rounded-xs font-label-monument text-label-monument tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-xs"
                  href="https://wa.me/919941121111"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">forum</span>{" "}
                  <span>Initiate WhatsApp Dialogue (+91 99411 21111)</span>{" "}
                </a>{" "}
              </div>{" "}
              <div className="bg-card-elevated rounded-xs shadow-md overflow-hidden flex flex-col">
                {" "}
                <div className="p-space-md bg-surface-container-low flex items-center justify-between">
                  {" "}
                  <div className="flex items-center gap-space-xs">
                    {" "}
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      explore
                    </span>{" "}
                    <span className="font-label-monument text-label-monument uppercase tracking-wider text-primary font-bold">
                      Central Studio & Stone Yard
                    </span>{" "}
                  </div>{" "}
                  <span className="font-body-sm text-[12px] text-on-surface-variant font-mono">
                    18.4682° N, 73.7891° E
                  </span>{" "}
                </div>{" "}
                <div className="relative w-full h-56 bg-surface-container overflow-hidden group">
                  {" "}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    data-location="Destination Center 2, Nanded City, Sinhagad Road, Pune, Maharashtra, India"
                    style={{ backgroundImage: `url(${IMG.mapPune})` }}
                  ></div>{" "}
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex items-center justify-center p-space-md">
                    {" "}
                    <div className="bg-surface-container-lowest p-space-sm rounded-xs shadow-lg flex items-center gap-space-sm max-w-xs transform group-hover:scale-105 transition-transform">
                      {" "}
                      <div className="w-9 h-9 rounded-xs bg-primary text-on-primary flex items-center justify-center shrink-0">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          temple_hindu
                        </span>{" "}
                      </div>{" "}
                      <div className="min-w-0">
                        {" "}
                        <p className="font-label-ui text-label-ui text-primary truncate font-bold">
                          Vishwa Vaidika Sanatan HQ
                        </p>{" "}
                        <p className="font-body-sm text-[11px] text-on-surface-variant truncate">
                          Nanded City, Sinhagad Rd, Pune
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-space-md bg-surface-container-lowest flex items-center justify-between">
                  {" "}
                  <div className="space-y-0.5">
                    {" "}
                    <p className="font-body-sm text-body-sm text-on-surface font-medium">
                      Stone Specimen Yard & 3D Drafting Labs
                    </p>{" "}
                    <p className="font-body-sm text-[12px] text-on-surface-variant">
                      Private patron parking and helipad coordination available
                    </p>{" "}
                  </div>{" "}
                  <a
                    className="px-space-sm py-1 bg-surface-container hover:bg-surface-container-high rounded-xs text-primary font-label-ui text-[12px] uppercase tracking-wider flex items-center gap-1 transition-colors"
                    href="https://maps.google.com/?q=Nanded+City+Pune"
                    rel="noopener"
                    target="_blank"
                  >
                    {" "}
                    <span>Directions</span>{" "}
                    <span className="material-symbols-outlined text-[14px]">north_east</span>{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="bg-surface-container-low p-space-lg rounded-xs shadow-xs space-y-space-md">
                {" "}
                <div className="flex items-center gap-space-xs">
                  {" "}
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    assignment_turned_in
                  </span>{" "}
                  <h4 className="font-title-editorial text-title-editorial text-primary">
                    Protocol for Sthapati Feasibility Surveys
                  </h4>{" "}
                </div>{" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" "}
                  To safeguard Agamic integrity prior to foundation laying, our Shastric Directorate
                  observes a strictly codified site evaluation sequence:{" "}
                </p>{" "}
                <ol className="space-y-space-sm">
                  {" "}
                  <li className="flex items-start gap-space-sm bg-surface-container-lowest p-space-sm rounded-xs">
                    {" "}
                    <span className="w-6 h-6 rounded-4xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-label-monument text-label-monument shrink-0 font-bold">
                      1
                    </span>{" "}
                    <div>
                      {" "}
                      <p className="font-label-ui text-label-ui text-primary">
                        Trust Consultation & Scriptural Alignment
                      </p>{" "}
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Initial review of consecrated deity, trust capacity, Agamic canon
                        (Pancharatra, Shaiva, or Vaikhanasa), and proposed Vimana scale.
                      </p>{" "}
                    </div>{" "}
                  </li>{" "}
                  <li className="flex items-start gap-space-sm bg-surface-container-lowest p-space-sm rounded-xs">
                    {" "}
                    <span className="w-6 h-6 rounded-4xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-label-monument text-label-monument shrink-0 font-bold">
                      2
                    </span>{" "}
                    <div>
                      {" "}
                      <p className="font-label-ui text-label-ui text-primary">
                        Geotechnical & Shadow Gnomon Site Visit
                      </p>{" "}
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        On-site cardinal calibration via Shanku Sthapana (solar shadow measurement),
                        subsoil seismic testing, and water source Vastu inspection.
                      </p>{" "}
                    </div>{" "}
                  </li>{" "}
                  <li className="flex items-start gap-space-sm bg-surface-container-lowest p-space-sm rounded-xs">
                    {" "}
                    <span className="w-6 h-6 rounded-4xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-label-monument text-label-monument shrink-0 font-bold">
                      3
                    </span>{" "}
                    <div>
                      {" "}
                      <p className="font-label-ui text-label-ui text-primary">
                        Comprehensive 3D Ayadi Masterplan Deliverable
                      </p>{" "}
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Presentation of consecrated Ayadi 6-formula metrics, stone tonnage bill of
                        quantities, quarry allocation, and an exact construction timetable.
                      </p>{" "}
                    </div>{" "}
                  </li>{" "}
                </ol>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface-container-high py-space-lg shadow-inner">
          {" "}
          <div className="max-w-7xl mx-auto px-gutter">
            {" "}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md items-center text-center">
              {" "}
              <div className="flex flex-col items-center gap-1 p-space-sm">
                {" "}
                <span className="material-symbols-outlined text-primary text-[28px]">
                  shield
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-primary font-bold">
                  100% Zero-Carbon Steel
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Pure interlocking monolithic stonework
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col items-center gap-1 p-space-sm">
                {" "}
                <span className="material-symbols-outlined text-secondary text-[28px]">
                  architecture
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-primary font-bold">
                  Ayadi Shastric Grid
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Cosmological formula compliance
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col items-center gap-1 p-space-sm">
                {" "}
                <span className="material-symbols-outlined text-muted-sage text-[28px]">
                  science
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-primary font-bold">
                  IS 516 Compliant
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Certified petrological fracture testing
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col items-center gap-1 p-space-sm">
                {" "}
                <span className="material-symbols-outlined text-on-tertiary-container text-[28px]">
                  military_tech
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-primary font-bold">
                  Sthapati Council Seal
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Authentic Agamic heritage lineage
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="relative w-full bg-primary text-on-primary py-space-xl overflow-hidden">
          {" "}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            {" "}
            <img
              alt="Crest Watermark"
              className="w-auto max-w-xl h-auto max-h-[500px] object-contain opacity-80"
              src={IMG.crest}
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-gutter text-center space-y-space-md">
            <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary-fixed">
              Global Philanthropic Patron Concierge
            </span>
            <h2 className="font-headline-lg text-headline-lg font-normal text-white">
              Are You a Trustee or Mahant Planning a Monumental Kshetra?
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl mx-auto">
              We arrange confidential in-person audience with our Chief Sthapati and executive
              geotechnical directorate anywhere across Bharat or abroad.
            </p>
            <div className="pt-space-sm flex flex-wrap items-center justify-center gap-space-md">
              <a
                className="px-space-lg py-space-sm bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim rounded-xs font-label-monument text-label-monument uppercase tracking-wider font-semibold transition-colors flex items-center gap-2"
                href="tel:+919941121111"
              >
                <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
                <span>Primary: +91 99411 21111</span>
              </a>
              <a
                className="px-space-lg py-space-sm bg-primary-container text-white hover:bg-primary-fixed-dim hover:text-on-primary-fixed rounded-xs font-label-monument text-label-monument uppercase tracking-wider font-semibold transition-colors flex items-center gap-2 border border-gold/40"
                href={PHONE_SECONDARY_HREF}
              >
                <span className="material-symbols-outlined text-[18px]">phone_enabled</span>
                <span>Secondary: {PHONE_SECONDARY}</span>
              </a>
              <a
                className="px-space-lg py-space-sm bg-primary-container text-white hover:bg-primary-fixed-dim hover:text-on-primary-fixed rounded-xs font-label-monument text-label-monument uppercase tracking-wider font-semibold transition-colors flex items-center gap-2"
                href="mailto:contact@vishwavaidika.com?subject=Confidential%20Temple%20Masterplan%20Enquiry"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>Dispatch Corporate Charter</span>
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>{" "}
    </main>
  );
}

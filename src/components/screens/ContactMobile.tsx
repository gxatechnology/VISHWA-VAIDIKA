import { Link } from "@tanstack/react-router";
import { IMG } from "@/components/site/images";
import { useScreenScript } from "@/components/site/use-screen-script";
import { setup } from "./scripts/ContactMobile";

/* Generated from the Stitch design export (screen 13). */
export function ContactMobileScreen() {
  const S = useScreenScript(setup);
  return (
    <main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface">
      <div className="flex flex-col w-full pb-24">
        {" "}
        <section className="px-margin-mobile pt-space-lg pb-space-md flex flex-col items-center text-center">
          {" "}
          <div className="relative mb-space-sm">
            {" "}
            <div className="w-20 h-20 rounded-4xl bg-surface-container flex items-center justify-center shadow-md p-1">
              {" "}
              <img
                alt="Ornate Vishwa Vaidika Temple Emblem"
                className="w-full h-full object-contain rounded-full aspect-square"
                src={IMG.logo}
              />{" "}
            </div>{" "}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-4xl bg-secondary text-on-secondary flex items-center justify-center shadow-xs">
              {" "}
              <span className="material-symbols-outlined text-[14px]">architecture</span>{" "}
            </div>{" "}
          </div>{" "}
          <span className="font-label-monument text-label-monument uppercase tracking-widest text-secondary font-semibold mb-1">
            {" "}
            Direct Touchpoints for Temple Trustees, Mahants & Patrons{" "}
          </span>{" "}
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight font-medium mb-1">
            {" "}
            Contact & Consultation{" "}
          </h2>{" "}
          <p className="font-title-editorial text-title-editorial italic text-on-surface-variant max-w-xs">
            {" "}
            “Let's Build Something Timeless.”{" "}
          </p>{" "}
          <div className="flex items-center justify-center gap-space-sm w-36 mt-space-sm mb-space-xs">
            {" "}
            <span className="h-[1px] flex-1 bg-outline-variant/60"></span>{" "}
            <span className="w-1.5 h-1.5 rotate-45 bg-secondary"></span>{" "}
            <span className="h-[1px] flex-1 bg-outline-variant/60"></span>{" "}
          </div>{" "}
        </section>{" "}
        <section className="px-margin-mobile mb-space-lg">
          {" "}
          <div className="bg-surface-container-high rounded-xl p-space-sm shadow-xs flex flex-col gap-space-xs">
            {" "}
            <a
              className="flex items-center justify-between w-full px-space-md py-3 rounded-lg bg-primary text-on-primary shadow-xs active:scale-[0.98] transition-transform"
              href="tel:9941121111"
            >
              {" "}
              <div className="flex items-center gap-space-sm">
                {" "}
                <div className="w-8 h-8 rounded-4xl bg-on-primary-fixed-variant/40 flex items-center justify-center text-on-primary">
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">call</span>{" "}
                </div>{" "}
                <div className="flex flex-col text-left">
                  {" "}
                  <span className="font-label-monument text-[10px] uppercase tracking-wider text-primary-fixed-dim">
                    Direct Sanctuary Hotline
                  </span>{" "}
                  <span className="font-label-ui text-label-ui font-semibold">
                    Call Sthapati Council: 9941121111
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <span className="material-symbols-outlined text-primary-fixed-dim text-[20px]">
                arrow_forward
              </span>{" "}
            </a>{" "}
            <a
              className="flex items-center justify-between w-full px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface shadow-xs active:scale-[0.98] transition-transform"
              href="https://wa.me/919941121111?text=Pranam%20Sthapati%20Council,%20we%20wish%20to%20consult%20regarding%20a%20temple%20project."
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <div className="flex items-center gap-space-sm">
                {" "}
                <div className="w-8 h-8 rounded-4xl bg-whatsapp/15 flex items-center justify-center text-success">
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">chat</span>{" "}
                </div>{" "}
                <div className="flex flex-col text-left">
                  {" "}
                  <div className="flex items-center gap-1.5">
                    {" "}
                    <span className="font-label-ui text-label-ui font-semibold text-on-surface">
                      WhatsApp Consultation
                    </span>{" "}
                    <span className="bg-whatsapp/20 text-success text-[10px] font-bold px-1.5 py-0.5 rounded-xs tracking-wide uppercase">
                      Active
                    </span>{" "}
                  </div>{" "}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Instant dispatch for sketches & queries
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <span className="material-symbols-outlined text-secondary text-[20px]">
                open_in_new
              </span>{" "}
            </a>{" "}
          </div>{" "}
        </section>{" "}
        <section className="px-margin-mobile mb-space-lg">
          {" "}
          <div className="relative w-full h-36 rounded-xl overflow-hidden shadow-xs bg-surface-container">
            {" "}
            <img
              className="w-full h-full object-cover"
              data-alt="Exquisite macro shot of hand-carved pink sandstone temple pillar showing delicate celestial figures and Vedic geometric ornamentation under warm natural sunlight, reflecting ancient Shilpa Shastra tradition and timeless royal craftsmanship."
              src={IMG.sandstonePillar}
            />{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/85 via-charcoal-monolith/30 to-transparent flex flex-col justify-end p-space-md">
              {" "}
              <span className="font-label-monument text-label-monument text-secondary-fixed uppercase tracking-widest">
                Shilpa Shastra Precision
              </span>{" "}
              <p className="font-title-editorial text-title-editorial text-card-elevated font-medium">
                Consecrating Sacred Spaces Across Continents
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="px-margin-mobile mb-space-lg">
          {" "}
          <div className="bg-surface-container-low rounded-xl p-space-md shadow-md">
            {" "}
            <div className="flex items-center gap-space-xs mb-1">
              {" "}
              <span className="material-symbols-outlined text-secondary text-[20px]">
                edit_note
              </span>{" "}
              <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary font-semibold">
                Sanctuary Enquiry Dossier
              </span>{" "}
            </div>{" "}
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
              Consult the Master Sthapati
            </h3>{" "}
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              {" "}
              Submit preliminary details. Our Senior Architectural Council reviews Vastu orientation
              and stone feasibility prior to scheduling a video or on-site audience.{" "}
            </p>{" "}
            <form
              className="flex flex-col gap-space-md"
              id="temple-lead-flow"
              onSubmit={(e) => S.current.h0?.(e)}
            >
              {" "}
              <div className="flex flex-col gap-1">
                {" "}
                <label
                  className="font-label-ui text-label-ui text-primary font-medium flex items-center justify-between"
                  htmlFor="full-name"
                >
                  {" "}
                  <span>Full Name & Title</span>{" "}
                  <span className="text-error font-body-sm">*</span>{" "}
                </label>{" "}
                <input
                  className="w-full bg-surface-container-lowest text-on-surface px-space-md py-3 rounded-lg font-body-md text-body-md outline-hidden focus:bg-surface-bright transition-colors shadow-inner"
                  id="full-name"
                  placeholder="e.g., Mahant Rajeshwar Das / Trustee S. Sharma"
                  required
                  type="text"
                />{" "}
              </div>{" "}
              <div className="flex flex-col gap-1">
                {" "}
                <label
                  className="font-label-ui text-label-ui text-primary font-medium flex items-center justify-between"
                  htmlFor="mobile-number"
                >
                  {" "}
                  <span>Mobile Phone (WhatsApp Enabled)</span>{" "}
                  <span className="text-error font-body-sm">*</span>{" "}
                </label>{" "}
                <div className="flex gap-2">
                  {" "}
                  <div className="w-20 bg-surface-container text-on-surface font-body-md flex items-center justify-center rounded-lg shadow-inner">
                    {" "}
                    +91{" "}
                  </div>{" "}
                  <input
                    className="flex-1 bg-surface-container-lowest text-on-surface px-space-md py-3 rounded-lg font-body-md text-body-md outline-hidden focus:bg-surface-bright transition-colors shadow-inner"
                    id="mobile-number"
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    required
                    type="tel"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex flex-col gap-1">
                {" "}
                <label
                  className="font-label-ui text-label-ui text-primary font-medium flex items-center justify-between"
                  htmlFor="trust-name"
                >
                  {" "}
                  <span>Organization / Temple Trust</span>{" "}
                  <span className="font-body-sm text-stone-hairline text-[11px]">
                    (Optional)
                  </span>{" "}
                </label>{" "}
                <input
                  className="w-full bg-surface-container-lowest text-on-surface px-space-md py-3 rounded-lg font-body-md text-body-md outline-hidden focus:bg-surface-bright transition-colors shadow-inner"
                  id="trust-name"
                  placeholder="e.g., Shri Raghavendra Swamy Seva Samiti"
                  type="text"
                />{" "}
              </div>{" "}
              <div className="flex flex-col gap-2">
                {" "}
                <label className="font-label-ui text-label-ui text-primary font-medium">
                  {" "}
                  Project Classification <span className="text-error font-body-sm">*</span>{" "}
                </label>{" "}
                <div className="grid grid-cols-2 gap-2" id="project-type-selector">
                  {" "}
                  <button
                    className="project-pill active-pill py-2.5 px-space-sm rounded-lg bg-primary text-on-primary font-label-ui text-label-ui text-center shadow-xs flex items-center justify-center gap-1.5 transition-all"
                    onClick={(e) => S.current.h1?.(e)}
                    type="button"
                  >
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">domain</span>{" "}
                    <span>Construction</span>{" "}
                  </button>{" "}
                  <button
                    className="project-pill py-2.5 px-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-label-ui text-label-ui text-center shadow-xs flex items-center justify-center gap-1.5 transition-all"
                    onClick={(e) => S.current.h2?.(e)}
                    type="button"
                  >
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">explore</span>{" "}
                    <span>Vastu Planning</span>{" "}
                  </button>{" "}
                  <button
                    className="project-pill py-2.5 px-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-label-ui text-label-ui text-center shadow-xs flex items-center justify-center gap-1.5 transition-all"
                    onClick={(e) => S.current.h3?.(e)}
                    type="button"
                  >
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">handyman</span>{" "}
                    <span>Stone Carving</span>{" "}
                  </button>{" "}
                  <button
                    className="project-pill py-2.5 px-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-label-ui text-label-ui text-center shadow-xs flex items-center justify-center gap-1.5 transition-all"
                    onClick={(e) => S.current.h4?.(e)}
                    type="button"
                  >
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">history_edu</span>{" "}
                    <span>Restoration</span>{" "}
                  </button>{" "}
                </div>{" "}
                <input
                  id="selected-project-type"
                  name="project_type"
                  type="hidden"
                  defaultValue="Temple Construction"
                />{" "}
              </div>{" "}
              <div className="flex flex-col gap-1">
                {" "}
                <label
                  className="font-label-ui text-label-ui text-primary font-medium flex items-center justify-between"
                  htmlFor="project-location"
                >
                  {" "}
                  <span>Proposed Project Location</span>{" "}
                  <span className="text-error font-body-sm">*</span>{" "}
                </label>{" "}
                <input
                  className="w-full bg-surface-container-lowest text-on-surface px-space-md py-3 rounded-lg font-body-md text-body-md outline-hidden focus:bg-surface-bright transition-colors shadow-inner"
                  id="project-location"
                  placeholder="City, State / Country (e.g., Ayodhya, UP or Austin, TX)"
                  required
                  type="text"
                />{" "}
              </div>{" "}
              <div className="flex flex-col gap-1">
                {" "}
                <label
                  className="font-label-ui text-label-ui text-primary font-medium flex items-center justify-between"
                  htmlFor="project-scope"
                >
                  {" "}
                  <span>Deity Dedication & Brief Scope</span>{" "}
                  <span className="font-body-sm text-stone-hairline text-[11px]">
                    (Dimensions, Land Area)
                  </span>{" "}
                </label>{" "}
                <textarea
                  className="w-full bg-surface-container-lowest text-on-surface px-space-md py-3 rounded-lg font-body-md text-body-md outline-hidden focus:bg-surface-bright transition-colors shadow-inner resize-none"
                  id="project-scope"
                  placeholder="Describe presiding deity (e.g., Shri Ram, Shiva), available plot acreage, stone preferences, or target completion muhurat..."
                  rows={3}
                />{" "}
              </div>{" "}
              <div className="pt-space-xs flex flex-col gap-2">
                {" "}
                <button
                  className="w-full py-4 rounded-lg bg-primary text-on-primary font-label-ui text-label-ui font-semibold shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
                  id="submit-btn"
                  type="submit"
                >
                  {" "}
                  <span className="material-symbols-outlined text-[20px] text-secondary-container">
                    shield_with_heart
                  </span>{" "}
                  <span>Continue on WhatsApp</span>{" "}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>{" "}
                </button>{" "}
                <div className="flex items-center justify-center gap-1.5 text-center mt-1 text-on-surface-variant font-body-sm">
                  {" "}
                  <span className="material-symbols-outlined text-[15px] text-secondary">
                    verified_user
                  </span>{" "}
                  <span>Continue in WhatsApp and press Send to submit your enquiry</span>{" "}
                </div>{" "}
              </div>{" "}
              <div
                className="hidden p-space-md rounded-lg bg-secondary-container text-on-secondary-container flex items-start gap-space-sm mt-2 shadow-xs"
                id="form-success-banner"
              >
                {" "}
                <span className="material-symbols-outlined text-[24px] text-secondary">
                  check_circle
                </span>{" "}
                <div className="flex flex-col">
                  {" "}
                  <span className="font-label-ui font-semibold">
                    WhatsApp draft prepared — please press Send there
                  </span>{" "}
                  <span className="font-body-sm mt-0.5">
                    Your details are in a WhatsApp draft, not yet submitted.
                    Review the draft and press Send in WhatsApp.
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </form>{" "}
          </div>{" "}
        </section>{" "}
        <section className="px-margin-mobile mb-space-lg">
          {" "}
          <div className="bg-surface-container rounded-xl p-space-md shadow-xs flex flex-col gap-space-md">
            {" "}
            <div className="flex items-center justify-between">
              {" "}
              <div className="flex items-center gap-2">
                {" "}
                <div className="w-9 h-9 rounded-4xl bg-primary text-on-primary flex items-center justify-center">
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">corporate_fare</span>{" "}
                </div>{" "}
                <div className="flex flex-col">
                  {" "}
                  <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary">
                    Central Directorate
                  </span>{" "}
                  <h4 className="font-title-editorial text-title-editorial text-primary font-semibold">
                    Pune Headquarters
                  </h4>{" "}
                </div>{" "}
              </div>{" "}
              <span className="bg-surface-container-high px-2 py-0.5 rounded-xs text-on-surface font-label-monument text-[10px] uppercase font-bold tracking-wider">
                {" "}
                Maharashtra{" "}
              </span>{" "}
            </div>{" "}
            <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-start gap-space-sm shadow-inner">
              {" "}
              <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">
                location_on
              </span>{" "}
              <div className="flex flex-col text-on-surface font-body-sm">
                {" "}
                <span className="font-semibold text-primary">
                  Vishwa Vaidika Sanatan Hindu Temple Heritage Pvt. Ltd.
                </span>{" "}
                <span>Destination Center 2, Nanded City, Sinhagad Road,</span>{" "}
                <span>Pune – 411068, Maharashtra, India.</span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="grid grid-cols-2 gap-space-sm">
              {" "}
              <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1 shadow-inner">
                {" "}
                <div className="flex items-center gap-1.5 text-secondary">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">schedule</span>{" "}
                  <span className="font-label-monument text-[10px] uppercase font-semibold">
                    Visiting Hours
                  </span>{" "}
                </div>{" "}
                <span className="font-body-sm font-medium text-on-surface">
                  Mon–Sat: 9:00 AM – 7:00 PM
                </span>{" "}
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  IST (By Prior Appointment)
                </span>{" "}
              </div>{" "}
              <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1 shadow-inner">
                {" "}
                <div className="flex items-center gap-1.5 text-secondary">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">ring_volume</span>{" "}
                  <span className="font-label-monument text-[10px] uppercase font-semibold">
                    Direct Desk
                  </span>{" "}
                </div>{" "}
                <a
                  className="font-body-sm font-semibold text-primary underline underline-offset-2"
                  href="tel:9941121111"
                >
                  {" "}
                  9941121111{" "}
                </a>{" "}
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  Council Secretariat
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="w-full h-36 rounded-lg bg-cover bg-center relative overflow-hidden shadow-inner flex items-end p-space-sm"
              data-location="Destination Center 2, Nanded City, Sinhagad Road, Pune, Maharashtra, India"
              style={{ backgroundImage: `url(${IMG.mapPune})` }}
            >
              {" "}
              <div className="w-full bg-surface-container-lowest/95 backdrop-blur-md rounded-xs px-space-sm py-2 flex items-center justify-between">
                {" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    map
                  </span>{" "}
                  <span className="font-label-ui text-label-ui font-semibold text-on-surface">
                    Nanded City Architectural Atelier
                  </span>{" "}
                </div>{" "}
                <span className="font-label-monument text-[10px] uppercase text-secondary font-bold">
                  Directions →
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="px-margin-mobile mb-space-lg">
          {" "}
          <div className="bg-surface-container-high rounded-xl p-space-md shadow-xs">
            {" "}
            <div className="flex items-center justify-between mb-space-xs">
              {" "}
              <div className="flex items-center gap-2">
                {" "}
                <span className="material-symbols-outlined text-primary text-[20px]">
                  account_tree
                </span>{" "}
                <span className="font-label-monument text-label-monument uppercase tracking-wider text-secondary font-semibold">
                  Monograph Sitemap
                </span>{" "}
              </div>{" "}
              <button
                className="font-label-monument text-[11px] text-primary uppercase font-bold tracking-wider flex items-center gap-1"
                id="toggle-drawer-btn"
                onClick={(e) => S.current.h5?.(e)}
                type="button"
              >
                {" "}
                <span id="drawer-btn-label">Show Architecture</span>{" "}
                <span
                  className="material-symbols-outlined text-[16px] transition-transform duration-300"
                  id="drawer-chevron"
                >
                  expand_more
                </span>{" "}
              </button>{" "}
            </div>{" "}
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
              {" "}
              Explore documented disciplines, Shikhara engineering principles, and the 7-stage
              sanctuary lifecycle.{" "}
            </p>{" "}
            <div className="hidden flex-col gap-1.5 pt-space-xs" id="architecture-drawer-content">
              {" "}
              <Link
                to="/"
                className="flex items-center justify-between p-2.5 rounded-xs bg-surface-container-lowest hover:bg-surface-bright text-on-surface transition-colors shadow-xs"
              >
                {" "}
                <div className="flex items-center gap-space-sm">
                  {" "}
                  <span className="font-label-monument text-[11px] text-stone-hairline w-5">
                    01
                  </span>{" "}
                  <span className="font-label-ui text-label-ui font-medium">
                    Home Sanctuary Portal
                  </span>{" "}
                </div>{" "}
                <span className="material-symbols-outlined text-stone-hairline text-[16px]">
                  chevron_right
                </span>{" "}
              </Link>{" "}
              <Link
                to="/about"
                className="flex items-center justify-between p-2.5 rounded-xs bg-surface-container-lowest hover:bg-surface-bright text-on-surface transition-colors shadow-xs"
              >
                {" "}
                <div className="flex items-center gap-space-sm">
                  {" "}
                  <span className="font-label-monument text-[11px] text-stone-hairline w-5">
                    02
                  </span>{" "}
                  <span className="font-label-ui text-label-ui font-medium">
                    About Us (Lineage & Sthapati Founder)
                  </span>{" "}
                </div>{" "}
                <span className="material-symbols-outlined text-stone-hairline text-[16px]">
                  chevron_right
                </span>{" "}
              </Link>{" "}
              <Link
                to="/services"
                className="flex items-center justify-between p-2.5 rounded-xs bg-surface-container-lowest hover:bg-surface-bright text-on-surface transition-colors shadow-xs"
              >
                {" "}
                <div className="flex items-center gap-space-sm">
                  {" "}
                  <span className="font-label-monument text-[11px] text-stone-hairline w-5">
                    03
                  </span>{" "}
                  <span className="font-label-ui text-label-ui font-medium">
                    Services (10 Documented Disciplines)
                  </span>{" "}
                </div>{" "}
                <span className="material-symbols-outlined text-stone-hairline text-[16px]">
                  chevron_right
                </span>{" "}
              </Link>{" "}
              <Link
                to="/architecture"
                className="flex items-center justify-between p-2.5 rounded-xs bg-surface-container-lowest hover:bg-surface-bright text-on-surface transition-colors shadow-xs"
              >
                {" "}
                <div className="flex items-center gap-space-sm">
                  {" "}
                  <span className="font-label-monument text-[11px] text-stone-hairline w-5">
                    04
                  </span>{" "}
                  <span className="font-label-ui text-label-ui font-medium">
                    Architecture & Craft (Stone & Shikhara Anatomy)
                  </span>{" "}
                </div>{" "}
                <span className="material-symbols-outlined text-stone-hairline text-[16px]">
                  chevron_right
                </span>{" "}
              </Link>{" "}
              <Link
                to="/projects"
                className="flex items-center justify-between p-2.5 rounded-xs bg-surface-container-lowest hover:bg-surface-bright text-on-surface transition-colors shadow-xs"
              >
                {" "}
                <div className="flex items-center gap-space-sm">
                  {" "}
                  <span className="font-label-monument text-[11px] text-stone-hairline w-5">
                    05
                  </span>{" "}
                  <span className="font-label-ui text-label-ui font-medium">
                    Projects (Sanctuary Monograph)
                  </span>{" "}
                </div>{" "}
                <span className="material-symbols-outlined text-stone-hairline text-[16px]">
                  chevron_right
                </span>{" "}
              </Link>{" "}
              <Link
                to="/process"
                className="flex items-center justify-between p-2.5 rounded-xs bg-surface-container-lowest hover:bg-surface-bright text-on-surface transition-colors shadow-xs"
              >
                {" "}
                <div className="flex items-center gap-space-sm">
                  {" "}
                  <span className="font-label-monument text-[11px] text-stone-hairline w-5">
                    06
                  </span>{" "}
                  <span className="font-label-ui text-label-ui font-medium">
                    Capabilities & Process (7-Stage Lifecycle)
                  </span>{" "}
                </div>{" "}
                <span className="material-symbols-outlined text-stone-hairline text-[16px]">
                  chevron_right
                </span>{" "}
              </Link>{" "}
              <div className="flex items-center justify-between p-2.5 rounded-xs bg-primary text-on-primary shadow-xs">
                {" "}
                <div className="flex items-center gap-space-sm">
                  {" "}
                  <span className="font-label-monument text-[11px] text-secondary-fixed w-5">
                    07
                  </span>{" "}
                  <div className="flex items-center gap-1.5">
                    {" "}
                    <span className="font-label-ui text-label-ui font-semibold">
                      Contact & Consultation
                    </span>{" "}
                    <span className="w-1.5 h-1.5 rounded-4xl bg-secondary-fixed"></span>{" "}
                  </div>{" "}
                </div>{" "}
                <span className="font-label-monument text-[10px] uppercase font-bold tracking-widest bg-on-primary-fixed-variant/50 px-1.5 py-0.5 rounded-xs text-on-primary">
                  {" "}
                  Active Now{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <div className="fixed bottom-3 inset-x-margin-mobile z-40 max-w-[390px] mx-auto">
          {" "}
          <div className="bg-charcoal-monolith/95 backdrop-blur-md rounded-xl p-2 px-space-md text-on-primary flex items-center justify-between shadow-xl">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <span className="w-2 h-2 rounded-4xl bg-whatsapp animate-pulse"></span>{" "}
              <div className="flex flex-col">
                {" "}
                <span className="font-label-monument text-[9px] uppercase tracking-wider text-secondary-fixed">
                  Live Council Line
                </span>{" "}
                <span className="font-body-sm text-[12px] font-semibold text-card-elevated">
                  +91 9941121111
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-2">
              {" "}
              <a
                aria-label="Call Council"
                className="w-9 h-9 rounded-lg bg-surface-container-high/20 hover:bg-surface-container-high/30 flex items-center justify-center text-card-elevated active:scale-95 transition-all"
                href="tel:9941121111"
              >
                {" "}
                <span className="material-symbols-outlined text-[18px]">call</span>{" "}
              </a>{" "}
              <a
                aria-label="WhatsApp Council"
                className="w-9 h-9 rounded-lg bg-whatsapp text-card-elevated flex items-center justify-center active:scale-95 transition-all shadow-xs"
                href="https://wa.me/919941121111"
                target="_blank"
              >
                {" "}
                <span className="material-symbols-outlined text-[18px]">chat</span>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/architecture", label: "Architecture & Craft" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export const PAGE_TITLES: Record<string, string> = {
  "/": "Home",
  "/about": "About Us",
  "/leadership": "Leadership",
  "/services": "Services",
  "/services/temple-construction": "Construction",
  "/architecture": "Craft",
  "/temple-anatomy": "Anatomy",
  "/projects": "Projects",
  "/projects/mahalakshmi-maha-mandir": "Case Study",
  "/process": "Process",
  "/contact": "Consultation",
};

export const PHONE = "+91 99411 21111";
export const PHONE_HREF = "tel:+919941121111";
export const PHONE_SECONDARY = "+91 75170 15555";
export const PHONE_SECONDARY_HREF = "tel:+917517015555";
export const EMAIL = "contact@vishwavaidika.com";
export const EMAIL_HREF = "mailto:contact@vishwavaidika.com";
export const WHATSAPP_HREF = "https://wa.me/919941121111";
export const ADDRESS_PUNE = "Destination Center 2, Nanded City, Sinhagad Road, Pune – 411068, Maharashtra, India.";

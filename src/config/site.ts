/**
 * Centralized Site and Brand Configuration
 * VISHWA VAIDIKA SANATAN HINDU TEMPLE HERITAGE PRIVATE LIMITED
 *
 * Approved corporate identity, verified contact coordinates, and brand tokens.
 */

export const SITE_CONFIG = {
  // Official Legal Company Name (Spelling: VAIDIKA, NOT VEIDIKA)
  legalName: "VISHWA VAIDIKA SANATAN HINDU TEMPLE HERITAGE PRIVATE LIMITED",
  shortName: "VVS Temple Heritage",
  initials: "VVS",
  tagline: "Preserving Sacred Heritage Through Timeless Architecture",
  subTagline: "Vedic Shilpa Shastra Architecture, Heavy Civil Engineering & Master Stonework",

  // Corporate Contact Coordinates (Client-Approved Retention)
  contact: {
    // Primary phone shown first across all public-facing assets
    primaryPhone: "+91 99411 21111",
    primaryPhoneRaw: "9941121111",
    primaryPhoneTel: "tel:+919941121111",

    // Secondary phone shown second
    secondaryPhone: "+91 75170 15555",
    secondaryPhoneRaw: "7517015555",
    secondaryPhoneTel: "tel:+917517015555",

    // General Corporate Enquiry Email
    email: "contact@vishwavaidika.com",
    emailMailto: "mailto:contact@vishwavaidika.com",

    // Verified WhatsApp Enquiry Destination (Preserves Primary Phone Destination)
    whatsappPhone: "919941121111",
    whatsappHref: "https://wa.me/919941121111",

    // Registered / Operational Office Address in Pune
    address: {
      line1: "Destination Center 2, Nanded City, Sinhagad Road",
      city: "Pune",
      postalCode: "411068",
      state: "Maharashtra",
      country: "India",
      full: "Destination Center 2, Nanded City, Sinhagad Road, Pune – 411068, Maharashtra, India.",
      googleMapsUrl: "https://maps.google.com/?q=Destination+Center+2+Nanded+City+Pune",
    },
  },

  // Approved Ornate Logo Files
  logo: {
    crestPng: "/vvs-approved-crest.png",
    crestWebp: "/vvs-approved-crest.webp",
    crestTightPng: "/vvs-approved-crest-tight.png",
    crestTightWebp: "/vvs-approved-crest-tight.webp",
    crestOriginal: "/vvs-approved-crest-original.png",
    alt: "Vishwa Vaidika Sanatan Hindu Temple Heritage Crest",
  },
} as const;

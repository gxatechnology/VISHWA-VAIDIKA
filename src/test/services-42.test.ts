import { describe, expect, it } from "vitest";
import {
  SERVICE_CATEGORIES,
  ALL_SERVICES,
  getServicesByCategory,
  getCategoryById,
  type CategoryId,
} from "@/data/services-data";

const OFFICIAL_CLIENT_SECTIONS = [
  {
    code: "01",
    title: "TEMPLE CONSTRUCTION & SACRED ARCHITECTURE",
    services: [
      "Complete Temple Construction (Design to Kalasha)",
      "Temple Architecture, Vastu Planning & Design",
      "Shikhara, Vimana & Rajagopuram Construction",
      "Garbhagriha, Mandapa & Sabha Mandap Construction",
      "Temple Complex Planning & Pilgrimage Facilities",
      "Murti Manufacturing & Sacred Installation",
      "Temple Architectural Elements & Decorative Structures",
    ],
  },
  {
    code: "02",
    title: "HERITAGE RESTORATION & CONSERVATION",
    services: [
      "Temple Renovation, Restoration & Conservation",
      "Forts, Palaces & Historic Monument Restoration",
      "British-Era & Colonial Building Restoration",
      "Traditional Haveli & Ancestral Property Restoration",
      "Stepwell, Kund & Ancient Water Structure Restoration",
      "Heritage Bridge & Historic Infrastructure Restoration",
      "Structural Rehabilitation, Retrofitting & Strengthening",
    ],
  },
  {
    code: "03",
    title: "RESIDENTIAL, COMMERCIAL & INSTITUTIONAL CONSTRUCTION",
    services: [
      "Residential Buildings, Apartments & Housing Projects",
      "Luxury Villas, Bungalows & Farmhouses",
      "Commercial Complexes, Offices & Business Centres",
      "Hotels, Resorts & Hospitality Developments",
      "Government & Administrative Buildings",
      "Religious, Cultural & Community Buildings",
      "Banquet Halls, Marriage Halls & Convention Centres",
    ],
  },
  {
    code: "04",
    title: "TRANSPORTATION & WATER INFRASTRUCTURE",
    services: [
      "National Highways, State Highways & Expressways",
      "Urban, Rural & Internal Road Construction",
      "Bridges, Flyovers & Culvert Construction",
      "Road Widening, Upgradation & Rehabilitation",
      "Dams, Barrages & Reservoir Construction",
      "Irrigation Canals & Water Diversion Structures",
      "River Embankments, Flood Protection & Riverfront Development",
    ],
  },
  {
    code: "05",
    title: "CIVIL, INDUSTRIAL & URBAN INFRASTRUCTURE",
    services: [
      "RCC Structures & Building Superstructures",
      "Foundation Engineering, Piling & Deep Excavation",
      "Industrial Buildings, Factories & Manufacturing Facilities",
      "Warehouses, Logistics Parks & Industrial Estates",
      "Drainage, Sewerage & Wastewater Infrastructure",
      "Retaining Walls, Slope Protection & Ground Stabilisation",
      "Land Development, Urban Infrastructure & Site Planning",
    ],
  },
  {
    code: "06",
    title: "STONE SUPPLY, PROCESSING & CRAFTSMANSHIP",
    services: [
      "Natural Stone Supply & Procurement",
      "Granite, Sandstone, Marble & Premium Stone Supply",
      "Stone Cutting, Sizing, Finishing & Processing",
      "Architectural Stone Cladding, Wall Panels & Flooring",
      "Traditional Stone Carving, Sculpting & Murti Craftsmanship",
      "Handcrafted Stone Pillars, Columns, Jalis & Jharokhas",
      "Decorative Stone Structures, Deepmal, Toranas & Architectural Elements",
    ],
  },
];

describe("Official 42 Services Architecture & Verification", () => {
  it("enforces exactly 6 sections in SERVICE_CATEGORIES", () => {
    expect(SERVICE_CATEGORIES).toHaveLength(6);
  });

  it("enforces exactly 7 services per category in SERVICE_CATEGORIES", () => {
    SERVICE_CATEGORIES.forEach((cat) => {
      expect(cat.count).toBe(7);
      const categoryServices = getServicesByCategory(cat.id);
      expect(categoryServices).toHaveLength(7);
    });
  });

  it("enforces exactly 42 total services in ALL_SERVICES with unique IDs and names", () => {
    expect(ALL_SERVICES).toHaveLength(42);

    const ids = ALL_SERVICES.map((s) => s.id);
    const names = ALL_SERVICES.map((s) => s.name);

    expect(new Set(ids).size).toBe(42);
    expect(new Set(names).size).toBe(42);
  });

  it("matches the client-supplied 42 services list exactly across all 6 sections", () => {
    OFFICIAL_CLIENT_SECTIONS.forEach((section, secIdx) => {
      const catId = String(secIdx + 1) as CategoryId;
      const cat = getCategoryById(catId);
      expect(cat).toBeDefined();
      expect(cat?.title).toBe(section.title);
      expect(cat?.code).toBe(section.code);

      const services = getServicesByCategory(catId);
      expect(services).toHaveLength(7);

      section.services.forEach((expectedName, sIdx) => {
        expect(services[sIdx].name).toBe(expectedName);
      });
    });
  });

  it("contains no obsolete, invented, or unapproved service categories", () => {
    const allNamesJoined = ALL_SERVICES.map((s) => s.name.toLowerCase()).join(" | ");
    expect(allNamesJoined).not.toContain("hospital & healthcare");
    expect(allNamesJoined).not.toContain("solar & architectural");
    expect(allNamesJoined).not.toContain("museums & heritage");
  });
});

import { IMG } from "@/components/site/images";

export interface ServiceItem {
  id: string;
  name: string;
  categoryId: "A" | "B" | "C" | "D" | "E";
  categoryCode: string;
  categoryName: string;
  shortDescription: string;
  scopeHighlights: string[];
  icon: string;
  image?: string;
  disciplineTag: string;
  status: "confirmed" | "pending_approval";
}

export interface ServiceCategory {
  id: "A" | "B" | "C" | "D" | "E";
  code: string;
  title: string;
  shortTitle: string;
  badge: string;
  icon: string;
  count: number;
  overview: string;
  isFlagship?: boolean;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "A",
    code: "CAT-A",
    title: "Temple & Sacred Architecture",
    shortTitle: "Sacred Architecture",
    badge: "Flagship Canonical Discipline",
    icon: "temple_hindu",
    count: 7,
    overview:
      "Vedic Shilpa Shastra temple planning, monolithic stone sanctuaries, structural Vastu Purusha Mandala geometry, and consecrated murti installation adhering to 1,000-year longevity standards.",
    isFlagship: true,
  },
  {
    id: "B",
    code: "CAT-B",
    title: "Civil & Building Construction",
    shortTitle: "Civil Construction",
    badge: "Structural & Turnkey Realization",
    icon: "apartment",
    count: 9,
    overview:
      "Engineered reinforced concrete structural works, deep foundations, turnkey project execution, and institutional civil construction integrating modern engineering with monumental durability.",
  },
  {
    id: "C",
    code: "CAT-C",
    title: "Stone & Heritage Craftsmanship",
    shortTitle: "Stone Craftsmanship",
    badge: "Artisanal Lithic Mastery",
    icon: "architecture",
    count: 8,
    overview:
      "Hereditary Sompura stone carving, Makrana marble and Bansi Paharpur sandstone procurement, perforated jali screens, cantilevered jharokhas, and archaeological conservation of historic forts and stepwells.",
  },
  {
    id: "D",
    code: "CAT-D",
    title: "Infrastructure & Development",
    shortTitle: "Infrastructure",
    badge: "Civic & Riverfront Works",
    icon: "domain",
    count: 8,
    overview:
      "Sacred riverfront ghat construction, ceremonial site development, civil drainage infrastructure, monumental stone compound walls, and master-planned stone pathways for pilgrimage complexes.",
  },
  {
    id: "E",
    code: "CAT-E",
    title: "Hospitality & Specialized Spaces",
    shortTitle: "Specialized Spaces",
    badge: "Heritage Retreats & Villas",
    icon: "holiday_village",
    count: 7,
    overview:
      "Eco and heritage wellness resorts, luxury stone farmhouses, traditional mandapa-inspired community halls, and bespoke architectural stone installations blending vernacular grace with modern comfort.",
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  // ==========================================
  // CATEGORY A — TEMPLE & SACRED ARCHITECTURE (7)
  // ==========================================
  {
    id: "complete-temple-construction",
    name: "Complete Temple Construction",
    categoryId: "A",
    categoryCode: "CAT-A",
    categoryName: "Temple & Sacred Architecture",
    shortDescription:
      "Turnkey realization of consecrated Hindu temple complexes from Vastu Bhumi Puja foundation to Shikhara Kalash consecration.",
    scopeHighlights: ["Canonical Vastu orientation", "Monolithic interlocking stone", "Structural core engineering"],
    icon: "temple_hindu",
    image: IMG.redSandstoneTemple,
    disciplineTag: "Vedic Canonical",
    status: "confirmed",
  },
  {
    id: "temple-architecture-planning",
    name: "Temple Architecture & Planning",
    categoryId: "A",
    categoryCode: "CAT-A",
    categoryName: "Temple & Sacred Architecture",
    shortDescription:
      "Comprehensive architectural master planning, Sompura drafting, dimensional proportioning, and 3D liturgical visualization.",
    scopeHighlights: ["Vastu Purusha Mandala layout", "Nagara & Dravidian elevation studies", "Structural CAD blueprints"],
    icon: "design_services",
    image: IMG.templeArchitecturalModel,
    disciplineTag: "Architectural Planning",
    status: "confirmed",
  },
  {
    id: "rajagopuram-entrance-gates",
    name: "Rajagopuram & Entrance Gates",
    categoryId: "A",
    categoryCode: "CAT-A",
    categoryName: "Temple & Sacred Architecture",
    shortDescription:
      "Monumental multi-tiered entrance towers, Dravidian gopurams, and sculpted torana gateways demarcating the sacred threshold.",
    scopeHighlights: ["Tiered stucco/stone shikhara", "Carved dvarapala jamb reliefs", "Heavy timber/brass sanctum doors"],
    icon: "door_front",
    image: IMG.templeEntranceGateway,
    disciplineTag: "Monumental Gateways",
    status: "confirmed",
  },
  {
    id: "murti-manufacturing-installation",
    name: "Murti Manufacturing & Installation",
    categoryId: "A",
    categoryCode: "CAT-A",
    categoryName: "Temple & Sacred Architecture",
    shortDescription:
      "Canonical sculpting, polishing, and consecration staging of sacred stone deities conforming strictly to Shilpa Ratna iconometry.",
    scopeHighlights: ["Krishna Shila black granite carving", "Makrana marble sanctum vigrahas", "Asana and mudra canonical fidelity"],
    icon: "self_improvement",
    image: IMG.sacredSculptureCarving,
    disciplineTag: "Sacred Iconometry",
    status: "confirmed",
  },
  {
    id: "temple-renovation-restoration",
    name: "Temple Renovation & Restoration",
    categoryId: "A",
    categoryCode: "CAT-A",
    categoryName: "Temple & Sacred Architecture",
    shortDescription:
      "Archaeological-grade stone consolidation, lime grouting, structural underpinning, and non-destructive cleansing of ancient shrines.",
    scopeHighlights: ["Anasytlosis reassembly", "Chemical-free stone descaling", "Sanctum structural reinforcement"],
    icon: "handyman",
    image: IMG.pillarSiteInstallation,
    disciplineTag: "Heritage Conservation",
    status: "confirmed",
  },
  {
    id: "mandap-shikhara-sacred-elements",
    name: "Mandap, Shikhara & Sacred Elements",
    categoryId: "A",
    categoryCode: "CAT-A",
    categoryName: "Temple & Sacred Architecture",
    shortDescription:
      "Precision fabrication and hoisting of pillared sabha mandapas, corbelled dome ceilings, urushringa sub-spires, and amalaka finials.",
    scopeHighlights: ["Concentric stone ceiling mandalas", "Interlocking column capitals", "Amalaka & gilded kalash bases"],
    icon: "account_balance",
    image: IMG.intricateStoneCeiling,
    disciplineTag: "Structural Elements",
    status: "confirmed",
  },
  {
    id: "pilgrimage-religious-structures",
    name: "Pilgrimage & Religious Structures",
    categoryId: "A",
    categoryCode: "CAT-A",
    categoryName: "Temple & Sacred Architecture",
    shortDescription:
      "Design and development of pilgrimage peethams, yajnashalas, pradakshina colonnades, dharamshalas, and sacred parikrama pathways.",
    scopeHighlights: ["Pilgrim crowd circulation planning", "Yajnashala smoke ventilation geometry", "Consecrated parikrama colonnades"],
    icon: "church",
    image: IMG.templeMandapaCourtyard,
    disciplineTag: "Civic Sacred Spaces",
    status: "confirmed",
  },

  // ==========================================
  // CATEGORY B — CIVIL & BUILDING CONSTRUCTION (9)
  // ==========================================
  {
    id: "residential-building-construction",
    name: "Residential Building Construction",
    categoryId: "B",
    categoryCode: "CAT-B",
    categoryName: "Civil & Building Construction",
    shortDescription:
      "End-to-end residential construction pairing high-grade reinforced concrete frames with optional natural stone exterior cladding.",
    scopeHighlights: ["Vastu-compliant residential layouts", "Seismic-resistant RCC frames", "Premium thermal stone veneers"],
    icon: "home",
    disciplineTag: "Residential Civil",
    status: "confirmed",
  },
  {
    id: "commercial-building-construction",
    name: "Commercial Building Construction",
    categoryId: "B",
    categoryCode: "CAT-B",
    categoryName: "Civil & Building Construction",
    shortDescription:
      "Robust commercial structures, institutional administrative headquarters, and public assembly buildings engineered for longevity.",
    scopeHighlights: ["Heavy-duty column grid design", "High-traffic stone lobbies", "Energy-efficient building envelopes"],
    icon: "business",
    disciplineTag: "Commercial Civil",
    status: "confirmed",
  },
  {
    id: "institutional-government-buildings",
    name: "Institutional & Government Buildings",
    categoryId: "B",
    categoryCode: "CAT-B",
    categoryName: "Civil & Building Construction",
    shortDescription:
      "Civic monuments, Vedic universities, cultural research institutes, and government commission buildings embodying regional identity.",
    scopeHighlights: ["Monolithic civic presence", "High fire & seismic rating", "Dignified vernacular facades"],
    icon: "account_balance",
    disciplineTag: "Institutional Civil",
    status: "confirmed",
  },
  {
    id: "rcc-structural-works",
    name: "RCC Structural Works",
    categoryId: "B",
    categoryCode: "CAT-B",
    categoryName: "Civil & Building Construction",
    shortDescription:
      "Engineered structural concrete cores that provide concealed seismic resistance and load distribution inside stone-clad sanctuaries.",
    scopeHighlights: ["High-strength M40/M50 concrete", "Corrosion-resistant TMT rebar", "Precision shuttering & curing"],
    icon: "engineering",
    image: IMG.rccTempleStructure,
    disciplineTag: "RCC Engineering",
    status: "confirmed",
  },
  {
    id: "foundations-excavation",
    name: "Foundations & Excavation",
    categoryId: "B",
    categoryCode: "CAT-B",
    categoryName: "Civil & Building Construction",
    shortDescription:
      "Deep bedrock excavation, monolithic raft footings, and stone plinth foundations designed to eliminate differential settling.",
    scopeHighlights: ["Hard-rock controlled excavation", "Monolithic reinforced raft plinths", "Sub-surface moisture mitigation"],
    icon: "landslide",
    image: IMG.stonePlinthLayout,
    disciplineTag: "Geotechnical Works",
    status: "confirmed",
  },
  {
    id: "masonry-finishing-works",
    name: "Masonry & Finishing Works",
    categoryId: "B",
    categoryCode: "CAT-B",
    categoryName: "Civil & Building Construction",
    shortDescription:
      "Precision ashlar block masonry, dry-stone interlocking joints, lime-surkhi mortar finishing, and protective breathable sealants.",
    scopeHighlights: ["Ashlar block dry jointing", "Traditional hydraulic lime pointing", "Breathable natural stone sealants"],
    icon: "format_paint",
    image: IMG.dressedMonolithicBlocks,
    disciplineTag: "Masonry Craft",
    status: "confirmed",
  },
  {
    id: "renovation-repair-works",
    name: "Renovation & Repair Works",
    categoryId: "B",
    categoryCode: "CAT-B",
    categoryName: "Civil & Building Construction",
    shortDescription:
      "Structural rehabilitation, micro-concreting, carbon-fiber composite wrap retrofitting, and weather-damaged building restoration.",
    scopeHighlights: ["Structural crack stitch grouting", "Load-bearing element retrofitting", "Waterproofing membrane remediation"],
    icon: "build",
    disciplineTag: "Structural Repair",
    status: "confirmed",
  },
  {
    id: "interior-exterior-civil-works",
    name: "Interior & Exterior Civil Works",
    categoryId: "B",
    categoryCode: "CAT-B",
    categoryName: "Civil & Building Construction",
    shortDescription:
      "Turnkey civil execution of interior colonnades, ornamental plaster cornices, floor paving, exterior stone aprons, and drainage slopes.",
    scopeHighlights: ["Polished stone floor laying", "Intricate ceiling cornicing", "Perimeter storm runoff channels"],
    icon: "palette",
    disciplineTag: "Finishing Civil",
    status: "confirmed",
  },
  {
    id: "turnkey-project-execution",
    name: "Turnkey Project Execution",
    categoryId: "B",
    categoryCode: "CAT-B",
    categoryName: "Civil & Building Construction",
    shortDescription:
      "Single-point engineering, procurement, and construction (EPC) management from raw land clearance through to ceremonial handover.",
    scopeHighlights: ["Strict milestone tracking", "Integrated supply chain control", "Quality assurance certification"],
    icon: "assignment_turned_in",
    image: IMG.templeSiteConstruction,
    disciplineTag: "EPC Turnkey",
    status: "confirmed",
  },

  // ==========================================
  // CATEGORY C — STONE & HERITAGE CRAFTSMANSHIP (8)
  // ==========================================
  {
    id: "traditional-stone-carving",
    name: "Traditional Stone Carving",
    categoryId: "C",
    categoryCode: "CAT-C",
    categoryName: "Stone & Heritage Craftsmanship",
    shortDescription:
      "Hereditary artisan hand-chiseling of intricate floral arabesques, dvarapalas, vyalas, kalash finials, and bas-relief scriptures.",
    scopeHighlights: ["Generational Sompura chiseling", "High-relief figurative friezes", "Strict canonical tool geometry"],
    icon: "brush",
    image: IMG.ornateStoneWallFrieze,
    disciplineTag: "Master Chiseling",
    status: "confirmed",
  },
  {
    id: "stone-architectural-elements",
    name: "Stone Architectural Elements",
    categoryId: "C",
    categoryCode: "CAT-C",
    categoryName: "Stone & Heritage Craftsmanship",
    shortDescription:
      "Custom fabrication of carved monolithic columns, bracket capitals, chhatris, stone cornices, plinth mouldings, and copings.",
    scopeHighlights: ["Eight-sided and circular column lathes", "Deeply undercut stone brackets", "Water-shedding cornice profiles"],
    icon: "pillar",
    image: IMG.traditionalStoneJharokhaDetail,
    disciplineTag: "Classical Elements",
    status: "confirmed",
  },
  {
    id: "stone-supply-material-procurement",
    name: "Stone Supply & Material Procurement",
    categoryId: "C",
    categoryCode: "CAT-C",
    categoryName: "Stone & Heritage Craftsmanship",
    shortDescription:
      "Direct mine-to-site block procurement and ultrasonic soundness testing of certified Bansi Paharpur sandstone, Makrana marble, and black granite.",
    scopeHighlights: ["Quarry geological ultrasonic testing", "Iron-free pink sandstone blocks", "Crystalline dense white marble"],
    icon: "inventory_2",
    image: IMG.yellowSandstone,
    disciplineTag: "Lithic Procurement",
    status: "confirmed",
  },
  {
    id: "stone-villas-bungalows",
    name: "Stone Villas & Bungalows",
    categoryId: "C",
    categoryCode: "CAT-C",
    categoryName: "Stone & Heritage Craftsmanship",
    shortDescription:
      "Private luxury residences, garden pavilions, and farm bungalows featuring solid carved stone load-bearing walls and jharokha balconies.",
    scopeHighlights: ["Naturally cool stone envelope", "Handcrafted stone entrance porticos", "Courtyard haveli spatial layouts"],
    icon: "villa",
    disciplineTag: "Heritage Residential",
    status: "confirmed",
  },
  {
    id: "marble-natural-stone-works",
    name: "Marble & Natural Stone Works",
    categoryId: "C",
    categoryCode: "CAT-C",
    categoryName: "Stone & Heritage Craftsmanship",
    shortDescription:
      "Diamond gang-saw slab processing, book-matched floor inlays, marble sanctum claddings, and mirror-finish water-jet detailing.",
    scopeHighlights: ["Pure Makrana marble sanctums", "Intricate stone pietre dure inlays", "Honed non-slip mandapa floors"],
    icon: "texture",
    image: IMG.whiteMarbleStone,
    disciplineTag: "Marble Precision",
    status: "confirmed",
  },
  {
    id: "heritage-structures-forts-wells",
    name: "Heritage Structures, Forts & Wells",
    categoryId: "C",
    categoryCode: "CAT-C",
    categoryName: "Stone & Heritage Craftsmanship",
    shortDescription:
      "Preservation, consolidation, and reconstruction of historic fortress ramparts, watchtowers, royal cenotaphs, and masonry water wells.",
    scopeHighlights: ["Archival stone documentation", "Authentic lime mortar formulations", "Structural buttress consolidation"],
    icon: "fort",
    disciplineTag: "Monuments & Forts",
    status: "confirmed",
  },
  {
    id: "stepwells-ghats-water-structures",
    name: "Stepwells, Ghats & Water Structures",
    categoryId: "C",
    categoryCode: "CAT-C",
    categoryName: "Stone & Heritage Craftsmanship",
    shortDescription:
      "Hydraulic stone engineering for tiered kunds, holy riverfront bathing ghats, water reservoirs, and carved stone cisterns.",
    scopeHighlights: ["Submerged water-tight stone joints", "Tiered geometric stepwell flights", "Flood-resistant stepped embankments"],
    icon: "water",
    image: IMG.traditionalKundStepwell,
    disciplineTag: "Hydraulic Stonework",
    status: "confirmed",
  },
  {
    id: "conservation-restoration",
    name: "Conservation & Restoration",
    categoryId: "C",
    categoryCode: "CAT-C",
    categoryName: "Stone & Heritage Craftsmanship",
    shortDescription:
      "Scientific restoration of defaced stone sculptures, micro-abrasive stone cleaning, biocidal treatment, and reversible repair methodologies.",
    scopeHighlights: ["Non-invasive structural endoscopy", "Biocide micro-organism treatment", "Reversible lime-based consolidation"],
    icon: "auto_fix_high",
    disciplineTag: "Scientific Conservation",
    status: "confirmed",
  },

  // ==========================================
  // CATEGORY D — INFRASTRUCTURE & DEVELOPMENT (8)
  // ==========================================
  {
    id: "site-development",
    name: "Site Development",
    categoryId: "D",
    categoryCode: "CAT-D",
    categoryName: "Infrastructure & Development",
    shortDescription:
      "Holistic terrain master planning, bulk grading, contour stabilization, and sacred precinct zoning for large temple campuses.",
    scopeHighlights: ["Contour cut-and-fill balancing", "Precision slope stabilization", "Sacred zoning boundaries"],
    icon: "terrain",
    disciplineTag: "Campus Development",
    status: "confirmed",
  },
  {
    id: "internal-roads-pathways",
    name: "Internal Roads & Pathways",
    categoryId: "D",
    categoryCode: "CAT-D",
    categoryName: "Infrastructure & Development",
    shortDescription:
      "Heavy-duty cobblestone streets, natural flagstone pedestrian avenues, and vehicular service corridors built for heavy pilgrim traffic.",
    scopeHighlights: ["Heavy-axle cobblestone paving", "Thermal-cushioned stone walkways", "Interlocking permeable stone pavers"],
    icon: "alt_route",
    disciplineTag: "Circulation Pathways",
    status: "confirmed",
  },
  {
    id: "compound-walls-boundary-works",
    name: "Compound Walls & Boundary Works",
    categoryId: "D",
    categoryCode: "CAT-D",
    categoryName: "Infrastructure & Development",
    shortDescription:
      "Monumental dressed stone boundary enclosures, fort-style ramparts, and defensive perimeter fencing incorporating security niches.",
    scopeHighlights: ["Dressed ashlar boundary walls", "Decorative carved stone coping", "Integrated security & lighting conduit"],
    icon: "fence",
    disciplineTag: "Perimeter Enclosures",
    status: "confirmed",
  },
  {
    id: "drainage-civil-infrastructure",
    name: "Drainage & Civil Infrastructure",
    categoryId: "D",
    categoryCode: "CAT-D",
    categoryName: "Infrastructure & Development",
    shortDescription:
      "Concealed rainwater harvesting networks, storm runoff channels, sewage treatment plant civil works, and water table recharge pits.",
    scopeHighlights: ["Concealed gravity drainage channels", "Large-scale rainwater recharge aquifers", "Durable stone culverts"],
    icon: "water_drop",
    disciplineTag: "Civil Infrastructure",
    status: "confirmed",
  },
  {
    id: "riverfront-ghat-construction",
    name: "Riverfront Ghat Construction",
    categoryId: "D",
    categoryCode: "CAT-D",
    categoryName: "Infrastructure & Development",
    shortDescription:
      "Massive riverside stepped embankments, ceremonial dip platforms, mooring bollards, and safety railings built on deep pile foundations.",
    scopeHighlights: ["Hydraulic pressure-bearing steps", "Erosion-proof riverbed piling", "Ceremonial aarti pavilions"],
    icon: "waves",
    disciplineTag: "Riverfront Ghats",
    status: "confirmed",
  },
  {
    id: "landscaping-related-civil-works",
    name: "Landscaping-related Civil Works",
    categoryId: "D",
    categoryCode: "CAT-D",
    categoryName: "Infrastructure & Development",
    shortDescription:
      "Carved stone garden fountains, sacred lotus water ponds, retaining walls, stepped terrace planters, and stone amphitheaters.",
    scopeHighlights: ["Carved stone fountain cascades", "Sacred flora stone planters", "Tiered amphitheater stone seating"],
    icon: "park",
    disciplineTag: "Landscape Civil",
    status: "confirmed",
  },
  {
    id: "project-planning-execution",
    name: "Project Planning & Execution",
    categoryId: "D",
    categoryCode: "CAT-D",
    categoryName: "Infrastructure & Development",
    shortDescription:
      "Comprehensive multi-phase CPM/PERT scheduling, resource leveling, stone quarry supply chain tracking, and on-site QA inspection.",
    scopeHighlights: ["Multi-year milestone scheduling", "BIM 4D construction sequencing", "Rigorous material batch testing"],
    icon: "calendar_month",
    disciplineTag: "Project Governance",
    status: "confirmed",
  },
  {
    id: "complete-turnkey-solutions",
    name: "Complete Turnkey Solutions",
    categoryId: "D",
    categoryCode: "CAT-D",
    categoryName: "Infrastructure & Development",
    shortDescription:
      "Comprehensive infrastructure delivery encompassing civil, electrical substation civil works, water supply, and security gating.",
    scopeHighlights: ["End-to-end municipal approvals liaison", "Integrated utility routing", "Fully commissioned operational handovers"],
    icon: "verified",
    disciplineTag: "Turnkey Infrastructure",
    status: "confirmed",
  },

  // ==========================================
  // CATEGORY E — HOSPITALITY & SPECIALIZED SPACES (7)
  // ==========================================
  {
    id: "resorts-retreats",
    name: "Resorts & Retreats",
    categoryId: "E",
    categoryCode: "CAT-E",
    categoryName: "Hospitality & Specialized Spaces",
    shortDescription:
      "Destination wellness retreats and hospitality centers featuring grand stone reception lobbies, open-air mandapas, and serene water bodies.",
    scopeHighlights: ["Vernacular stone reception lobbies", "Open-air reflection mandapas", "Acoustically insulated stone guest suites"],
    icon: "hotel",
    disciplineTag: "Heritage Hospitality",
    status: "confirmed",
  },
  {
    id: "farmhouses-villas",
    name: "Farmhouses & Villas",
    categoryId: "E",
    categoryCode: "CAT-E",
    categoryName: "Hospitality & Specialized Spaces",
    shortDescription:
      "Country estates and weekend villas blending rustic dressed stone facades with expansive glass openings and modern structural comforts.",
    scopeHighlights: ["Exposed dressed stone masonry", "High-ceilinged family mandapas", "Panoramic natural stone verandahs"],
    icon: "cottage",
    disciplineTag: "Luxury Country Homes",
    status: "confirmed",
  },
  {
    id: "eco-heritage-resorts",
    name: "Eco & Heritage Resorts",
    categoryId: "E",
    categoryCode: "CAT-E",
    categoryName: "Hospitality & Specialized Spaces",
    shortDescription:
      "Sustainable resorts built with local quarried stone, passive solar orientations, lime mortars, and natural microclimate cooling.",
    scopeHighlights: ["Low-embodied-carbon local stone", "Passive cross-ventilation jalis", "Rain-fed water features"],
    icon: "eco",
    disciplineTag: "Sustainable Architecture",
    status: "confirmed",
  },
  {
    id: "guest-houses-community-spaces",
    name: "Guest Houses & Community Spaces",
    categoryId: "E",
    categoryCode: "CAT-E",
    categoryName: "Hospitality & Specialized Spaces",
    shortDescription:
      "Samaj community halls, trust dharamshalas, dining satsang bhavans, and guest accommodations accommodating large gatherings.",
    scopeHighlights: ["High-span column-free gathering halls", "Industrial-capacity dining layouts", "Durable stone flooring surfaces"],
    icon: "groups",
    disciplineTag: "Community Spaces",
    status: "confirmed",
  },
  {
    id: "recreational-wellness-spaces",
    name: "Recreational & Wellness Spaces",
    categoryId: "E",
    categoryCode: "CAT-E",
    categoryName: "Hospitality & Specialized Spaces",
    shortDescription:
      "Ayurvedic spa centers, yoga shalas, meditation pavilions, and thermal stone therapy rooms designed with harmonic sacred acoustics.",
    scopeHighlights: ["Reverberation-tuned stone meditation halls", "Natural stone plunge baths", "Shielded tranquil courtyard layouts"],
    icon: "spa",
    disciplineTag: "Wellness Pavilions",
    status: "confirmed",
  },
  {
    id: "traditional-contemporary-design",
    name: "Traditional & Contemporary Design",
    categoryId: "E",
    categoryCode: "CAT-E",
    categoryName: "Hospitality & Specialized Spaces",
    shortDescription:
      "Harmonious architectural fusion incorporating classical stone elements (jali screens, carved brackets, archways) into sleek contemporary villas.",
    scopeHighlights: ["Contemporary cantilevered stone pergolas", "Minimalist stone relief feature walls", "Seamless indoor-outdoor paving"],
    icon: "architecture",
    disciplineTag: "Fusion Architecture",
    status: "confirmed",
  },
  {
    id: "customized-stone-architectural-works",
    name: "Customized Stone & Architectural Works",
    categoryId: "E",
    categoryCode: "CAT-E",
    categoryName: "Hospitality & Specialized Spaces",
    shortDescription:
      "Bespoke stone commissions including ornamental fireplace surrounds, carved entrance pediments, garden deepmals, and ceremonial urns.",
    scopeHighlights: ["Tailored 1-of-1 bespoke carvings", "Client monogram crest inlays", "Art-grade stone sculpture pedestal works"],
    icon: "auto_awesome",
    image: IMG.traditionalDeepmal,
    disciplineTag: "Custom Stonework",
    status: "confirmed",
  },
];

export function getServicesByCategory(categoryId: "A" | "B" | "C" | "D" | "E"): ServiceItem[] {
  return ALL_SERVICES.filter((s) => s.categoryId === categoryId);
}

export function getCategoryById(categoryId: "A" | "B" | "C" | "D" | "E"): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((c) => c.id === categoryId);
}

export function getServiceById(id: string): ServiceItem | undefined {
  return ALL_SERVICES.find((s) => s.id === id);
}

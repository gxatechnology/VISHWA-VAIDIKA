import { IMG } from "@/components/site/images";

export type CategoryId = "1" | "2" | "3" | "4" | "5" | "6";

export interface ServiceItem {
  id: string;
  name: string;
  categoryId: CategoryId;
  categoryCode: string;
  categoryName: string;
  shortDescription: string;
  scopeHighlights: string[];
  icon: string;
  image?: string;
  disciplineTag: string;
}

export interface ServiceCategory {
  id: CategoryId;
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
    id: "1",
    code: "01",
    title: "TEMPLE CONSTRUCTION & SACRED ARCHITECTURE",
    shortTitle: "Temple Construction",
    badge: "Flagship Canonical Discipline",
    icon: "temple_hindu",
    count: 7,
    overview:
      "Vedic Shilpa Shastra temple planning, monolithic stone sanctuaries, structural Vastu Purusha Mandala geometry, soaring Shikharas, Rajagopurams, Garbhagrihas, and consecrated murti installation adhering to 1,000-year longevity standards.",
    isFlagship: true,
  },
  {
    id: "2",
    code: "02",
    title: "HERITAGE RESTORATION & CONSERVATION",
    shortTitle: "Heritage Restoration",
    badge: "Conservation & Structural Restoration",
    icon: "handyman",
    count: 7,
    overview:
      "Archaeological-grade stone consolidation, non-destructive restoration of ancient temples, royal forts, historic palaces, British-era colonial buildings, ancestral havelis, ancient stepwells, kunds, historic bridges, and structural strengthening.",
  },
  {
    id: "3",
    code: "03",
    title: "RESIDENTIAL, COMMERCIAL & INSTITUTIONAL CONSTRUCTION",
    shortTitle: "Residential & Commercial Construction",
    badge: "Turnkey Architecture & Civil Works",
    icon: "apartment",
    count: 7,
    overview:
      "Turnkey civil construction of residential buildings and housing developments, luxury villas and farmhouses, commercial office complexes, hospitality resorts, government administrative buildings, community cultural centres, and convention halls.",
  },
  {
    id: "4",
    code: "04",
    title: "TRANSPORTATION & WATER INFRASTRUCTURE",
    shortTitle: "Transportation & Water Infrastructure",
    badge: "Highways, Bridges & Water Engineering",
    icon: "alt_route",
    count: 7,
    overview:
      "Civil infrastructure works for national and state highways, urban and rural roads, bridges, flyovers, culverts, road rehabilitation, water reservoir structures, irrigation canals, flood protection revetments, and riverfront developments.",
  },
  {
    id: "5",
    code: "05",
    title: "CIVIL, INDUSTRIAL & URBAN INFRASTRUCTURE",
    shortTitle: "Civil & Industrial Infrastructure",
    badge: "Structural, Industrial & Site Engineering",
    icon: "domain",
    count: 7,
    overview:
      "Heavy RCC superstructures, deep foundation piling, industrial factories, manufacturing units, logistics warehouses, drainage and sewerage networks, slope stabilization retaining walls, and comprehensive urban land site development.",
  },
  {
    id: "6",
    code: "06",
    title: "STONE SUPPLY, PROCESSING & CRAFTSMANSHIP",
    shortTitle: "Stone Supply & Craftsmanship",
    badge: "Natural Stone, Carving & Artisanship",
    icon: "architecture",
    count: 7,
    overview:
      "Quarry direct procurement of Makrana marble, Bansi Paharpur sandstone, and granite; diamond gang-saw cutting and sizing; architectural cladding and flooring; hereditary Sompura stone carving; handcrafted pillars, jalis, jharokhas, deepmals, and toranas.",
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  // ==========================================
  // SECTION 01: TEMPLE CONSTRUCTION & SACRED ARCHITECTURE (7)
  // ==========================================
  {
    id: "complete-temple-construction-design-to-kalasha",
    name: "Complete Temple Construction (Design to Kalasha)",
    categoryId: "1",
    categoryCode: "01",
    categoryName: "TEMPLE CONSTRUCTION & SACRED ARCHITECTURE",
    shortDescription:
      "Turnkey realization of consecrated Hindu temple complexes from Vastu Bhumi Puja foundation to Shikhara Kalasha consecration.",
    scopeHighlights: [
      "Canonical Shilpa Shastra compliance",
      "Monolithic dry-joint interlocking stone",
      "Millennium-grade structural core engineering",
    ],
    icon: "temple_hindu",
    image: IMG.redSandstoneTemple,
    disciplineTag: "Vedic Turnkey",
  },
  {
    id: "temple-architecture-vastu-planning-design",
    name: "Temple Architecture, Vastu Planning & Design",
    categoryId: "1",
    categoryCode: "01",
    categoryName: "TEMPLE CONSTRUCTION & SACRED ARCHITECTURE",
    shortDescription:
      "Canonical architectural master planning, Sompura drafting, dimensional proportioning, and 3D liturgical visualization based on Vastu Purusha Mandala.",
    scopeHighlights: [
      "Vastu Purusha Mandala orientation",
      "Nagara, Dravida & Vesara elevation studies",
      "Precision 3D BIM & stone CAD drafting",
    ],
    icon: "design_services",
    image: IMG.templeArchitecturalModel,
    disciplineTag: "Sacred Design",
  },
  {
    id: "shikhara-vimana-rajagopuram-construction",
    name: "Shikhara, Vimana & Rajagopuram Construction",
    categoryId: "1",
    categoryCode: "01",
    categoryName: "TEMPLE CONSTRUCTION & SACRED ARCHITECTURE",
    shortDescription:
      "Engineering and construction of soaring Nagara shikharas, Dravidian vimanas, tiered rajagopurams, and consecrated kalasha sthapana.",
    scopeHighlights: [
      "Tiered stone superstructure geometry",
      "Carved urushringa sub-spire clusters",
      "Consecrated copper/gold kalasha sthapana",
    ],
    icon: "domain",
    image: IMG.heroShikhara,
    disciplineTag: "Monumental Spires",
  },
  {
    id: "garbhagriha-mandapa-sabha-mandap-construction",
    name: "Garbhagriha, Mandapa & Sabha Mandap Construction",
    categoryId: "1",
    categoryCode: "01",
    categoryName: "TEMPLE CONSTRUCTION & SACRED ARCHITECTURE",
    shortDescription:
      "Execution of monolithic sanctum sanctorum (Garbhagriha) chambers, pillared sabha mandapas, and corbelled dome ceiling mandalas.",
    scopeHighlights: [
      "Sanctum acoustic & energy resonance geometry",
      "Concentric carved stone ceiling mandalas",
      "Interlocking column capitals & brackets",
    ],
    icon: "account_balance",
    image: IMG.intricateStoneCeiling,
    disciplineTag: "Sanctum & Mandapa",
  },
  {
    id: "temple-complex-planning-pilgrimage-facilities",
    name: "Temple Complex Planning & Pilgrimage Facilities",
    categoryId: "1",
    categoryCode: "01",
    categoryName: "TEMPLE CONSTRUCTION & SACRED ARCHITECTURE",
    shortDescription:
      "Comprehensive master planning of sacred temple campuses, pradakshina circumambulation colonnades, yajnashalas, and pilgrim reception amenities.",
    scopeHighlights: [
      "Pilgrim flow & queue circulation design",
      "Consecrated parikrama colonnades",
      "Yajnashala ventilation & ritual amenities",
    ],
    icon: "temple_buddhist",
    image: IMG.templeMandapaCourtyard,
    disciplineTag: "Sacred Precincts",
  },
  {
    id: "murti-manufacturing-sacred-installation",
    name: "Murti Manufacturing & Sacred Installation",
    categoryId: "1",
    categoryCode: "01",
    categoryName: "TEMPLE CONSTRUCTION & SACRED ARCHITECTURE",
    shortDescription:
      "Canonical sculpting, polishing, and consecrated Prana Pratishtha staging of sacred stone deities adhering strictly to Pratima Lakshana texts.",
    scopeHighlights: [
      "Krishna Shila black granite sculpting",
      "Makrana pure white marble vigrahas",
      "Shilpa Ratna canonical mudra & asana fidelity",
    ],
    icon: "self_improvement",
    image: IMG.sacredSculptureCarving,
    disciplineTag: "Sacred Iconometry",
  },
  {
    id: "temple-architectural-elements-decorative-structures",
    name: "Temple Architectural Elements & Decorative Structures",
    categoryId: "1",
    categoryCode: "01",
    categoryName: "TEMPLE CONSTRUCTION & SACRED ARCHITECTURE",
    shortDescription:
      "Custom sculpting and installation of carved stone dvarapalas, makara gargoyles, vyala brackets, ornamental mouldings, and chhatris.",
    scopeHighlights: [
      "Hand-chiselled ornamental base mouldings",
      "Deeply undercut stone bracket figures",
      "Classical stone eaves and water spouts",
    ],
    icon: "architecture",
    image: IMG.traditionalStoneJharokhaDetail,
    disciplineTag: "Decorative Stone",
  },

  // ==========================================
  // SECTION 02: HERITAGE RESTORATION & CONSERVATION (7)
  // ==========================================
  {
    id: "temple-renovation-restoration-conservation",
    name: "Temple Renovation, Restoration & Conservation",
    categoryId: "2",
    categoryCode: "02",
    categoryName: "HERITAGE RESTORATION & CONSERVATION",
    shortDescription:
      "Archaeological-grade stone consolidation, non-destructive cleaning, anastylosis reassembly, and structural stabilization of ancient consecrated shrines.",
    scopeHighlights: [
      "Non-destructive stone consolidation",
      "Breathable hydraulic lime grouting",
      "Structural foundation underpinning",
    ],
    icon: "handyman",
    image: IMG.restoration,
    disciplineTag: "Temple Restoration",
  },
  {
    id: "forts-palaces-historic-monument-restoration",
    name: "Forts, Palaces & Historic Monument Restoration",
    categoryId: "2",
    categoryCode: "02",
    categoryName: "HERITAGE RESTORATION & CONSERVATION",
    shortDescription:
      "Comprehensive stabilization and restorative stone masonry for historic fortress ramparts, bastions, royal cenotaphs, and palace monuments.",
    scopeHighlights: [
      "Archival masonry documentation",
      "Traditional lime-surkhi mortar matching",
      "Defensive stone parapet & rampart stabilization",
    ],
    icon: "fort",
    image: IMG.quarry,
    disciplineTag: "Forts & Palaces",
  },
  {
    id: "british-era-colonial-building-restoration",
    name: "British-Era & Colonial Building Restoration",
    categoryId: "2",
    categoryCode: "02",
    categoryName: "HERITAGE RESTORATION & CONSERVATION",
    shortDescription:
      "Specialized restoration of colonial-era heritage buildings, heritage masonry facades, timber roof trusses, and classical imperial stone porticos.",
    scopeHighlights: [
      "Colonial ashlar stone restoration",
      "Porous masonry breathable treatments",
      "Historic architectural joinery conservation",
    ],
    icon: "account_balance",
    image: IMG.stoneVilla,
    disciplineTag: "Colonial Heritage",
  },
  {
    id: "traditional-haveli-ancestral-property-restoration",
    name: "Traditional Haveli & Ancestral Property Restoration",
    categoryId: "2",
    categoryCode: "02",
    categoryName: "HERITAGE RESTORATION & CONSERVATION",
    shortDescription:
      "Revitalization of historic courtyard havelis, carved wooden and stone jharokhas, lime fresco walls, and ancestral heritage residences.",
    scopeHighlights: [
      "Courtyard structural rehabilitation",
      "Carved stone balcony & bracket repair",
      "Authentic lime fresco & plaster preservation",
    ],
    icon: "cottage",
    image: IMG.traditionalStoneJharokha,
    disciplineTag: "Haveli Restoration",
  },
  {
    id: "stepwell-kund-ancient-water-structure-restoration",
    name: "Stepwell, Kund & Ancient Water Structure Restoration",
    categoryId: "2",
    categoryCode: "02",
    categoryName: "HERITAGE RESTORATION & CONSERVATION",
    shortDescription:
      "Hydraulic stone restoration of historic tiered stepwells (baolis), temple pushkarinis, sacred kunds, and ancient stone water catchment cisterns.",
    scopeHighlights: [
      "Submerged water-tight stone jointing",
      "Desilting & structural arch stabilization",
      "Traditional stepped flight realignment",
    ],
    icon: "water",
    image: IMG.traditionalKundStepwell,
    disciplineTag: "Stepwell Restoration",
  },
  {
    id: "heritage-bridge-historic-infrastructure-restoration",
    name: "Heritage Bridge & Historic Infrastructure Restoration",
    categoryId: "2",
    categoryCode: "02",
    categoryName: "HERITAGE RESTORATION & CONSERVATION",
    shortDescription:
      "Engineering preservation and load-bearing rehabilitation of historic stone masonry arch bridges, causeways, and antique civil conduits.",
    scopeHighlights: [
      "Masonry arch structural load assessment",
      "Underwater stone pier pointing & jacketing",
      "Scour protection & abutment reinforcement",
    ],
    icon: "bridge",
    image: IMG.riverGhat,
    disciplineTag: "Historic Bridges",
  },
  {
    id: "structural-rehabilitation-retrofitting-strengthening",
    name: "Structural Rehabilitation, Retrofitting & Strengthening",
    categoryId: "2",
    categoryCode: "02",
    categoryName: "HERITAGE RESTORATION & CONSERVATION",
    shortDescription:
      "Advanced engineering retrofitting, micro-concreting, crack injection grouting, seismic strengthening, and load redistribution for distressed structures.",
    scopeHighlights: [
      "Low-pressure epoxy & lime grout injection",
      "Structural carbon-fiber composite wrap",
      "Seismic tie-beam & load re-balancing",
    ],
    icon: "build",
    image: IMG.precisionStoneSaw,
    disciplineTag: "Structural Retrofit",
  },

  // ==========================================
  // SECTION 03: RESIDENTIAL, COMMERCIAL & INSTITUTIONAL CONSTRUCTION (7)
  // ==========================================
  {
    id: "residential-buildings-apartments-housing-projects",
    name: "Residential Buildings, Apartments & Housing Projects",
    categoryId: "3",
    categoryCode: "03",
    categoryName: "RESIDENTIAL, COMMERCIAL & INSTITUTIONAL CONSTRUCTION",
    shortDescription:
      "End-to-end civil construction of residential developments, multi-family housing complexes, and apartment buildings built with durable materials.",
    scopeHighlights: [
      "Vastu-compliant residential layouts",
      "High-grade engineered RCC framing",
      "Durable facade finishing & waterproofing",
    ],
    icon: "home",
    image: IMG.stoneVilla,
    disciplineTag: "Residential Civil",
  },
  {
    id: "luxury-villas-bungalows-farmhouses",
    name: "Luxury Villas, Bungalows & Farmhouses",
    categoryId: "3",
    categoryCode: "03",
    categoryName: "RESIDENTIAL, COMMERCIAL & INSTITUTIONAL CONSTRUCTION",
    shortDescription:
      "Bespoke private estates, luxury stone villas, and country farmhouses blending vernacular stone craftsmanship with modern living amenities.",
    scopeHighlights: [
      "Natural thermal stone wall envelopes",
      "Handcrafted stone entrance porticos",
      "Spacious courtyard & verandah spatial layouts",
    ],
    icon: "villa",
    image: IMG.stoneVilla,
    disciplineTag: "Luxury Residences",
  },
  {
    id: "commercial-complexes-offices-business-centres",
    name: "Commercial Complexes, Offices & Business Centres",
    categoryId: "3",
    categoryCode: "03",
    categoryName: "RESIDENTIAL, COMMERCIAL & INSTITUTIONAL CONSTRUCTION",
    shortDescription:
      "Structural engineering and construction of commercial office complexes, corporate headquarters, business centres, and retail spaces.",
    scopeHighlights: [
      "Heavy-duty structural column grid layouts",
      "High-traffic natural stone lobbies",
      "Energy-conscious building envelope engineering",
    ],
    icon: "business",
    image: IMG.constructionSite,
    disciplineTag: "Commercial Civil",
  },
  {
    id: "hotels-resorts-hospitality-developments",
    name: "Hotels, Resorts & Hospitality Developments",
    categoryId: "3",
    categoryCode: "03",
    categoryName: "RESIDENTIAL, COMMERCIAL & INSTITUTIONAL CONSTRUCTION",
    shortDescription:
      "Turnkey construction of luxury hotels, heritage retreats, and resort developments integrating architectural stone themes and serene water features.",
    scopeHighlights: [
      "Grand stone reception lobbies & porticos",
      "Acoustically insulated guest suites",
      "Landscape-integrated leisure architecture",
    ],
    icon: "hotel",
    image: IMG.traditionalDeepmalCourtyard,
    disciplineTag: "Hospitality Projects",
  },
  {
    id: "government-administrative-buildings",
    name: "Government & Administrative Buildings",
    categoryId: "3",
    categoryCode: "03",
    categoryName: "RESIDENTIAL, COMMERCIAL & INSTITUTIONAL CONSTRUCTION",
    shortDescription:
      "Civil execution of institutional administrative headquarters, municipal offices, court complexes, and public authority administrative blocks.",
    scopeHighlights: [
      "Monumental civic architectural presence",
      "High fire, safety & structural longevity standards",
      "Dignified stone-clad public facades",
    ],
    icon: "account_balance",
    image: IMG.templeComplex,
    disciplineTag: "Government Civil",
  },
  {
    id: "religious-cultural-community-buildings",
    name: "Religious, Cultural & Community Buildings",
    categoryId: "3",
    categoryCode: "03",
    categoryName: "RESIDENTIAL, COMMERCIAL & INSTITUTIONAL CONSTRUCTION",
    shortDescription:
      "Design and construction of community samaj bhavans, spiritual cultural centres, trust dharamshalas, and congregational assembly facilities.",
    scopeHighlights: [
      "Large-span column-free gathering halls",
      "High-capacity community dining layouts",
      "Long-lasting stone flooring & finishes",
    ],
    icon: "groups",
    image: IMG.templeMandapaCourtyard,
    disciplineTag: "Community Civil",
  },
  {
    id: "banquet-halls-marriage-halls-convention-centres",
    name: "Banquet Halls, Marriage Halls & Convention Centres",
    categoryId: "3",
    categoryCode: "03",
    categoryName: "RESIDENTIAL, COMMERCIAL & INSTITUTIONAL CONSTRUCTION",
    shortDescription:
      "Construction of column-free Kalyan Mandaps, celebratory banquet complexes, convention halls, and cultural exhibition auditoriums.",
    scopeHighlights: [
      "Wide-span engineered roof trusses",
      "Ceremonial mandapa stage installations",
      "Acoustic ceiling & ventilation treatment",
    ],
    icon: "celebration",
    image: IMG.mandapaDomeStudy,
    disciplineTag: "Event Venues",
  },

  // ==========================================
  // SECTION 04: TRANSPORTATION & WATER INFRASTRUCTURE (7)
  // ==========================================
  {
    id: "national-highways-state-highways-expressways",
    name: "National Highways, State Highways & Expressways",
    categoryId: "4",
    categoryCode: "04",
    categoryName: "TRANSPORTATION & WATER INFRASTRUCTURE",
    shortDescription:
      "Civil engineering, earthworks, heavy sub-base preparation, and paving works for highway corridors and expressway networks.",
    scopeHighlights: [
      "Heavy-load sub-base & asphalt/concrete paving",
      "Rigorous soil stabilization & compaction",
      "High-capacity highway drainage systems",
    ],
    icon: "traffic",
    image: IMG.templeEntranceGateway,
    disciplineTag: "Highway Civil",
  },
  {
    id: "urban-rural-internal-road-construction",
    name: "Urban, Rural & Internal Road Construction",
    categoryId: "4",
    categoryCode: "04",
    categoryName: "TRANSPORTATION & WATER INFRASTRUCTURE",
    shortDescription:
      "Construction of durable urban link roads, rural connectivity corridors, heavy-duty paver block streets, and campus internal access ways.",
    scopeHighlights: [
      "Heavy-axle concrete & cobblestone paving",
      "Durable permeable road base preparation",
      "Integrated pedestrian & utility walkways",
    ],
    icon: "alt_route",
    image: IMG.stonePlinthLayout,
    disciplineTag: "Road Infrastructure",
  },
  {
    id: "bridges-flyovers-culvert-construction",
    name: "Bridges, Flyovers & Culvert Construction",
    categoryId: "4",
    categoryCode: "04",
    categoryName: "TRANSPORTATION & WATER INFRASTRUCTURE",
    shortDescription:
      "Reinforced concrete and prestressed bridge construction, urban flyovers, pedestrian overpasses, and box culverts for water drainage.",
    scopeHighlights: [
      "Bored pile & pier cap structural construction",
      "Precast beam hoisting & deck slab casting",
      "Heavy-load box & pipe culvert installation",
    ],
    icon: "bridge",
    image: IMG.templeSiteConstruction,
    disciplineTag: "Bridge Engineering",
  },
  {
    id: "road-widening-upgradation-rehabilitation",
    name: "Road Widening, Upgradation & Rehabilitation",
    categoryId: "4",
    categoryCode: "04",
    categoryName: "TRANSPORTATION & WATER INFRASTRUCTURE",
    shortDescription:
      "Widening existing corridors, subgrade strengthening, overlay paving, shoulder construction, and structural roadway rehabilitation.",
    scopeHighlights: [
      "Pavement milling & asphalt overlaying",
      "Carriageway widening & shoulder stabilization",
      "Geometric alignment & camber correction",
    ],
    icon: "construction",
    image: IMG.dressedMonolithicBlocks,
    disciplineTag: "Road Rehabilitation",
  },
  {
    id: "dams-barrages-reservoir-construction",
    name: "Dams, Barrages & Reservoir Construction",
    categoryId: "4",
    categoryCode: "04",
    categoryName: "TRANSPORTATION & WATER INFRASTRUCTURE",
    shortDescription:
      "Massive hydraulic civil works for earthen and masonry dams, water barrages, weir structures, and storage reservoirs.",
    scopeHighlights: [
      "Impermeable core clay & concrete cutoffs",
      "Mass concrete spillway & weir construction",
      "Seepage barrier grouting & soil compaction",
    ],
    icon: "water",
    image: IMG.traditionalKundStepwell,
    disciplineTag: "Hydraulic Engineering",
  },
  {
    id: "irrigation-canals-water-diversion-structures",
    name: "Irrigation Canals & Water Diversion Structures",
    categoryId: "4",
    categoryCode: "04",
    categoryName: "TRANSPORTATION & WATER INFRASTRUCTURE",
    shortDescription:
      "Lined irrigation canal systems, branch feeder distributaries, cross-drainage siphons, and river diversion sluice gate structures.",
    scopeHighlights: [
      "Concrete canal bed & bank lining",
      "Cross-drainage aqueducts & siphon structures",
      "Water control gates & regulatory headworks",
    ],
    icon: "water_drop",
    image: IMG.constructionSite,
    disciplineTag: "Canal Networks",
  },
  {
    id: "river-embankments-flood-protection-riverfront-development",
    name: "River Embankments, Flood Protection & Riverfront Development",
    categoryId: "4",
    categoryCode: "04",
    categoryName: "TRANSPORTATION & WATER INFRASTRUCTURE",
    shortDescription:
      "Construction of flood-resilient stone riprap embankments, river training groynes, stepped bathing ghats, and riverfront walkways.",
    scopeHighlights: [
      "Hydraulic erosion-proof stone pitching",
      "Deep-pile backed stepped ghat construction",
      "Integrated flood wall protection barriers",
    ],
    icon: "waves",
    image: IMG.riverGhat,
    disciplineTag: "Riverfront Civil",
  },

  // ==========================================
  // SECTION 05: CIVIL, INDUSTRIAL & URBAN INFRASTRUCTURE (7)
  // ==========================================
  {
    id: "rcc-structures-building-superstructures",
    name: "RCC Structures & Building Superstructures",
    categoryId: "5",
    categoryCode: "05",
    categoryName: "CIVIL, INDUSTRIAL & URBAN INFRASTRUCTURE",
    shortDescription:
      "High-strength reinforced cement concrete framed superstructures, shear walls, heavy columns, and post-tensioned slabs.",
    scopeHighlights: [
      "High-grade M40/M50 concrete batching",
      "Corrosion-resistant certified TMT reinforcement",
      "Precision formwork & engineered curing control",
    ],
    icon: "engineering",
    image: IMG.rccTempleStructure,
    disciplineTag: "RCC Superstructures",
  },
  {
    id: "foundation-engineering-piling-deep-excavation",
    name: "Foundation Engineering, Piling & Deep Excavation",
    categoryId: "5",
    categoryCode: "05",
    categoryName: "CIVIL, INDUSTRIAL & URBAN INFRASTRUCTURE",
    shortDescription:
      "Bored cast-in-situ piling, micro-piling, monolithic raft footings, deep bedrock excavation, and rock anchor stabilization.",
    scopeHighlights: [
      "Bored cast-in-situ & driven pile foundations",
      "Monolithic heavy-load raft plinth foundations",
      "Rock anchoring & soil nailing stabilization",
    ],
    icon: "landslide",
    image: IMG.stonePlinthLayout,
    disciplineTag: "Geotechnical Piling",
  },
  {
    id: "industrial-buildings-factories-manufacturing-facilities",
    name: "Industrial Buildings, Factories & Manufacturing Facilities",
    categoryId: "5",
    categoryCode: "05",
    categoryName: "CIVIL, INDUSTRIAL & URBAN INFRASTRUCTURE",
    shortDescription:
      "Civil execution of industrial production sheds, manufacturing plants, machine foundation beds, and processing facilities.",
    scopeHighlights: [
      "Heavy equipment vibration-isolated foundation beds",
      "Pre-engineered building (PEB) structural civil works",
      "Industrial floor hardening & epoxy treatments",
    ],
    icon: "factory",
    image: IMG.stoneFabricationYard,
    disciplineTag: "Industrial Plants",
  },
  {
    id: "warehouses-logistics-parks-industrial-estates",
    name: "Warehouses, Logistics Parks & Industrial Estates",
    categoryId: "5",
    categoryCode: "05",
    categoryName: "CIVIL, INDUSTRIAL & URBAN INFRASTRUCTURE",
    shortDescription:
      "Large-span storage warehouses, logistics distribution parks, freight loading apron bays, and industrial estate infrastructure.",
    scopeHighlights: [
      "Laser-screed FM2 high-tolerance flooring",
      "Heavy-axle freight loading dock aprons",
      "Perimeter security & utility corridor planning",
    ],
    icon: "warehouse",
    image: IMG.dressedMonolithicBlocks,
    disciplineTag: "Logistics Civil",
  },
  {
    id: "drainage-sewerage-wastewater-infrastructure",
    name: "Drainage, Sewerage & Wastewater Infrastructure",
    categoryId: "5",
    categoryCode: "05",
    categoryName: "CIVIL, INDUSTRIAL & URBAN INFRASTRUCTURE",
    shortDescription:
      "Underground stormwater drainage networks, sewage transmission pipelines, sewage treatment plant (STP) civil works, and water harvesting.",
    scopeHighlights: [
      "Gravity storm runoff RCC box drains",
      "Underground sewer mains & inspection chambers",
      "Rainwater catchment & deep recharge pits",
    ],
    icon: "plumbing",
    image: IMG.constructionSite,
    disciplineTag: "Sanitary Civil",
  },
  {
    id: "retaining-walls-slope-protection-ground-stabilisation",
    name: "Retaining Walls, Slope Protection & Ground Stabilisation",
    categoryId: "5",
    categoryCode: "05",
    categoryName: "CIVIL, INDUSTRIAL & URBAN INFRASTRUCTURE",
    shortDescription:
      "RCC cantilever retaining walls, gravity stone masonry walls, gabion structures, and geo-grid reinforced earth slope stabilization.",
    scopeHighlights: [
      "Engineered RCC & stone gravity retaining walls",
      "Gabion mattress hill slope protection",
      "Sub-surface drainage & weep-hole relief networks",
    ],
    icon: "fence",
    image: IMG.balustradeCraftsmanship,
    disciplineTag: "Slope Protection",
  },
  {
    id: "land-development-urban-infrastructure-site-planning",
    name: "Land Development, Urban Infrastructure & Site Planning",
    categoryId: "5",
    categoryCode: "05",
    categoryName: "CIVIL, INDUSTRIAL & URBAN INFRASTRUCTURE",
    shortDescription:
      "Comprehensive site grading, bulk cut-and-fill earthworks, utility corridor ducting, boundary zoning, and urban campus civil master development.",
    scopeHighlights: [
      "Precision topographic grading & contour balancing",
      "Underground utility service conduit grids",
      "Perimeter boundary demarcation & security gating",
    ],
    icon: "terrain",
    image: IMG.stonePlinthLayout,
    disciplineTag: "Site Development",
  },

  // ==========================================
  // SECTION 06: STONE SUPPLY, PROCESSING & CRAFTSMANSHIP (7)
  // ==========================================
  {
    id: "natural-stone-supply-procurement",
    name: "Natural Stone Supply & Procurement",
    categoryId: "6",
    categoryCode: "06",
    categoryName: "STONE SUPPLY, PROCESSING & CRAFTSMANSHIP",
    shortDescription:
      "Mine-to-site block sourcing, quarry geological selection, and ultrasonic integrity testing of authentic natural building stones.",
    scopeHighlights: [
      "Direct mine extraction & block grading",
      "Ultrasonic soundness testing for structural blocks",
      "Bulk logistics coordination for major sites",
    ],
    icon: "inventory_2",
    image: IMG.quarry,
    disciplineTag: "Direct Quarry Supply",
  },
  {
    id: "granite-sandstone-marble-premium-stone-supply",
    name: "Granite, Sandstone, Marble & Premium Stone Supply",
    categoryId: "6",
    categoryCode: "06",
    categoryName: "STONE SUPPLY, PROCESSING & CRAFTSMANSHIP",
    shortDescription:
      "Supplying certified Bansi Paharpur pink sandstone, Makrana white marble, Black Galaxy granite, Kota stone, and exotic lithic varieties.",
    scopeHighlights: [
      "Certified Bansi Paharpur pink & red sandstone",
      "Pure crystalline Makrana white marble",
      "Dense volcanic granite & Kota stone flagstones",
    ],
    icon: "category",
    image: IMG.yellowSandstone,
    disciplineTag: "Premium Stone",
  },
  {
    id: "stone-cutting-sizing-finishing-processing",
    name: "Stone Cutting, Sizing, Finishing & Processing",
    categoryId: "6",
    categoryCode: "06",
    categoryName: "STONE SUPPLY, PROCESSING & CRAFTSMANSHIP",
    shortDescription:
      "Multi-blade gang saw block slicing, precision CNC stone profiling, surface flaming, bush-hammering, honing, and mirror polishing.",
    scopeHighlights: [
      "High-precision multi-blade gang saw sizing",
      "CNC calibrated profiling & chamfering",
      "Honed, flamed, and mirror polished finishes",
    ],
    icon: "cut",
    image: IMG.precisionStoneSaw,
    disciplineTag: "Stone Processing",
  },
  {
    id: "architectural-stone-cladding-wall-panels-flooring",
    name: "Architectural Stone Cladding, Wall Panels & Flooring",
    categoryId: "6",
    categoryCode: "06",
    categoryName: "STONE SUPPLY, PROCESSING & CRAFTSMANSHIP",
    shortDescription:
      "Dry-clad and wet-laid stone facade cladding, carved wall friezes, base mouldings, and book-matched marble/granite floor inlays.",
    scopeHighlights: [
      "Seismic-compliant SS clamp dry cladding",
      "High-traffic book-matched floor inlays",
      "Intricate water-jet stone medallion patterns",
    ],
    icon: "texture",
    image: IMG.whiteMarbleStone,
    disciplineTag: "Stone Cladding",
  },
  {
    id: "traditional-stone-carving-sculpting-murti-craftsmanship",
    name: "Traditional Stone Carving, Sculpting & Murti Craftsmanship",
    categoryId: "6",
    categoryCode: "06",
    categoryName: "STONE SUPPLY, PROCESSING & CRAFTSMANSHIP",
    shortDescription:
      "Hereditary artisan hand-chiseling of intricate temple friezes, dvarapala gate guardians, vyalas, deities, and sacred iconographic sculptures.",
    scopeHighlights: [
      "Generational Sompura chisel mastery",
      "High-relief figurative friezes & motifs",
      "Canonical Pratima Lakshana iconometry",
    ],
    icon: "brush",
    image: IMG.ornateStoneWallFrieze,
    disciplineTag: "Master Chiseling",
  },
  {
    id: "handcrafted-stone-pillars-columns-jalis-jharokhas",
    name: "Handcrafted Stone Pillars, Columns, Jalis & Jharokhas",
    categoryId: "6",
    categoryCode: "06",
    categoryName: "STONE SUPPLY, PROCESSING & CRAFTSMANSHIP",
    shortDescription:
      "Fabrication of lathe-turned monolithic stone pillars, carved bracket capitals, perforated jali screens, and projecting cantilevered jharokhas.",
    scopeHighlights: [
      "Monolithic lathe-turned column shafts",
      "Perforated stone jali airflow screens",
      "Projecting ornamental jharokha balconies",
    ],
    icon: "pillar",
    image: IMG.traditionalStoneJharokha,
    disciplineTag: "Classical Elements",
  },
  {
    id: "decorative-stone-structures-deepmal-toranas-architectural-elements",
    name: "Decorative Stone Structures, Deepmal, Toranas & Architectural Elements",
    categoryId: "6",
    categoryCode: "06",
    categoryName: "STONE SUPPLY, PROCESSING & CRAFTSMANSHIP",
    shortDescription:
      "Crafting of monolithic multi-tiered deepmal lamp pillars, ceremonial carved torana archways, stone cenotaphs, and fountain centerpieces.",
    scopeHighlights: [
      "Free-standing monolithic deepmal lamp towers",
      "Ceremonial carved entrance torana archways",
      "Ornamental stone chhatris & water features",
    ],
    icon: "auto_awesome",
    image: IMG.traditionalDeepmal,
    disciplineTag: "Decorative Works",
  },
];

export function getServicesByCategory(categoryId: CategoryId): ServiceItem[] {
  return ALL_SERVICES.filter((s) => s.categoryId === categoryId);
}

export function getCategoryById(categoryId: CategoryId): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((c) => c.id === categoryId);
}

export function getServiceById(id: string): ServiceItem | undefined {
  return ALL_SERVICES.find((s) => s.id === id);
}

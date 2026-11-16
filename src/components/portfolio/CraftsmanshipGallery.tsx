import { useState } from "react";
import { PORTFOLIO_ITEMS, type PortfolioItem } from "./portfolio-data";
import { PortfolioLightboxModal } from "./PortfolioLightboxModal";

interface GalleryProps {
  initialCategory?: string;
  allowedCategories?: string[];
  title?: string;
  subtitle?: string;
  badge?: string;
  limit?: number;
  showFilters?: boolean;
}

const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "temple-architecture", label: "Temple Architecture" },
  { id: "jali-lattice", label: "Stone Jali & Lattice" },
  { id: "wall-panels", label: "Carved Wall Panels" },
  { id: "ceilings-interiors", label: "Ceilings & Interiors" },
  { id: "jharokha-facades", label: "Jharokha & Balconies" },
  { id: "materials-slabs", label: "Materials & Slabs" },
  { id: "sculpture-deepmal", label: "Sculptures & Deepmal" },
  { id: "models-concepts", label: "Models & Concepts" },
  { id: "fabrication-construction", label: "Fabrication & Site Work" },
];

export function CraftsmanshipGallery({
  initialCategory = "all",
  allowedCategories,
  title = "Master Architectural & Craftsmanship Portfolio",
  subtitle = "Explore our comprehensive visual codex spanning consecrated temples, monolithic stone carving, quarry materials, structural frames, and site fabrication.",
  badge = "Shilpa Shastra Visual Monograph",
  limit,
  showFilters = true,
}: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Filter items
  const baseItems = allowedCategories
    ? PORTFOLIO_ITEMS.filter((item) => allowedCategories.includes(item.category))
    : PORTFOLIO_ITEMS;

  const filteredItems =
    activeCategory === "all"
      ? baseItems
      : baseItems.filter((item) => item.category === activeCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const visibleCategories = allowedCategories
    ? CATEGORIES.filter((c) => c.id === "all" || allowedCategories.includes(c.id))
    : CATEGORIES;

  return (
    <section className="w-full py-16 px-gutter bg-surface" id="master-portfolio-gallery">
      <div className="max-w-[1320px] mx-auto flex flex-col space-y-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-stone-hairline/20">
          <div className="flex flex-col space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-monument text-label-monument uppercase tracking-[0.2em] text-secondary font-bold">
                {badge}
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-normal">
              {title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 bg-surface-container rounded-lg font-label-monument text-[11px] uppercase tracking-wider text-primary font-semibold shadow-xs">
              {displayedItems.length} Exemplars Published
            </span>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        {showFilters && visibleCategories.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {visibleCategories.map((cat) => {
              const count =
                cat.id === "all"
                  ? baseItems.length
                  : baseItems.filter((i) => i.category === cat.id).length;

              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg font-label-ui text-label-ui uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-xs cursor-pointer ${
                    isActive
                      ? "bg-primary text-on-primary font-bold shadow-md"
                      : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? "bg-on-primary/20 text-on-primary" : "bg-surface text-stone-hairline"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Portfolio Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-card-elevated rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-stone-hairline/20 flex flex-col group cursor-pointer"
            >
              {/* Image Thumbnail */}
              <div className="relative h-60 w-full overflow-hidden bg-surface-container">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-monolith/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-charcoal-monolith/80 backdrop-blur-xs text-sandstone-surface text-[10px] font-label-monument uppercase tracking-wider rounded-xs">
                  {item.badge}
                </div>

                {/* Expand Pill */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-surface/90 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex flex-col flex-1 justify-between space-y-2">
                <div>
                  <span className="font-label-monument text-[10px] uppercase tracking-wider text-secondary font-bold">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-title-editorial text-[16px] font-bold text-primary group-hover:text-saffron transition-colors mt-0.5 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-[12px] text-on-surface-variant line-clamp-2 mt-1 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-hairline/20 flex items-center justify-between text-[11px] font-label-monument text-muted-sage uppercase tracking-wider">
                  <span className="truncate max-w-[150px]">{item.discipline}</span>
                  <span className="text-secondary font-semibold group-hover:translate-x-0.5 transition-transform">
                    Inspect →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <PortfolioLightboxModal
          item={selectedItem}
          items={filteredItems}
          onClose={() => setSelectedItem(null)}
          onSelect={(newItem) => setSelectedItem(newItem)}
        />
      )}
    </section>
  );
}

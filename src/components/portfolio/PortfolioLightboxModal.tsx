import { useEffect } from "react";
import type { PortfolioItem } from "./portfolio-data";

interface LightboxProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onSelect: (item: PortfolioItem) => void;
}

export function PortfolioLightboxModal({ item, items, onClose, onSelect }: LightboxProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        const idx = items.findIndex((i) => i.id === item.id);
        if (idx > 0) {
          onSelect(items[idx - 1]);
        } else if (idx === 0) {
          onSelect(items[items.length - 1]);
        }
      } else if (e.key === "ArrowRight") {
        const idx = items.findIndex((i) => i.id === item.id);
        if (idx < items.length - 1) {
          onSelect(items[idx + 1]);
        } else if (idx === items.length - 1) {
          onSelect(items[0]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [item, items, onClose, onSelect]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else {
      onSelect(items[items.length - 1]);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else {
      onSelect(items[0]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-monolith/90 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative w-full max-w-5xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-gold/30 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-surface-container border-b border-stone-hairline/20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse"></span>
            <span className="font-label-monument text-[11px] uppercase tracking-wider text-secondary font-bold">
              {item.categoryLabel}
            </span>
            <span className="text-stone-hairline text-xs">•</span>
            <span className="text-[12px] text-on-surface-variant font-mono">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface flex items-center justify-center transition-colors"
            title="Close Lightbox (Esc)"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto flex-1 flex flex-col lg:flex-row">
          {/* Main Image View */}
          <div className="relative flex-1 bg-charcoal-monolith min-h-[300px] lg:min-h-[460px] flex items-center justify-center overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[68vh] w-full object-contain p-2 transition-transform duration-300"
            />

            {/* Nav Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-monolith/70 hover:bg-charcoal-monolith text-sandstone-surface flex items-center justify-center backdrop-blur-xs transition-transform active:scale-95 shadow-md"
              title="Previous (Left Arrow)"
              aria-label="Previous image"
            >
              <span className="material-symbols-outlined text-[22px]">chevron_left</span>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-monolith/70 hover:bg-charcoal-monolith text-sandstone-surface flex items-center justify-center backdrop-blur-xs transition-transform active:scale-95 shadow-md"
              title="Next (Right Arrow)"
              aria-label="Next image"
            >
              <span className="material-symbols-outlined text-[22px]">chevron_right</span>
            </button>

            {/* Badge overlay */}
            <div className="absolute bottom-3 left-3 px-3 py-1 bg-charcoal-monolith/85 backdrop-blur-xs rounded-xs text-sandstone-surface font-label-monument text-[10px] uppercase tracking-wider">
              {item.badge}
            </div>
          </div>

          {/* Details Sidebar */}
          <div className="w-full lg:w-80 p-6 bg-surface-container-low flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-hairline/20">
            <div className="space-y-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-xs bg-secondary-container text-primary font-label-monument text-[10px] uppercase font-bold tracking-wider inline-block mb-1.5">
                  {item.badge}
                </span>
                <h3 className="font-headline-sm text-[20px] text-primary font-serif font-bold leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                {item.caption}
              </p>

              <div className="pt-3 border-t border-stone-hairline/20 space-y-2.5 text-body-sm">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-label-monument tracking-wider text-muted-sage">
                    Discipline / Order
                  </span>
                  <span className="text-[13px] font-semibold text-primary">
                    {item.discipline}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-label-monument tracking-wider text-muted-sage">
                    Specification
                  </span>
                  <span className="text-[13px] text-on-surface">
                    {item.specification}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-label-monument tracking-wider text-stone-hairline">
                    Archive Source Ref
                  </span>
                  <span className="text-[11px] font-mono text-stone-hairline truncate">
                    {item.sourceFile}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#consultation"
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-primary hover:bg-primary-container text-on-primary font-label-ui text-label-ui uppercase tracking-wider font-semibold rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>Consult on this Discipline</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

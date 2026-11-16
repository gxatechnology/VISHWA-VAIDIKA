// @ts-nocheck
// Interactive behaviour ported from the original design screen (DOM-driven, runs after mount).
import { toast } from "sonner";
import type { ScreenContext } from "@/components/site/use-screen-script";

export function setup(ctx: ScreenContext) {
  const notify = (msg) => toast(msg);
  const onReady = (fn) => fn();

  // Filter Functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-on-tertiary-container', 'text-on-primary');
        b.classList.add('bg-surface-container', 'text-on-surface-variant');
      });
      btn.classList.remove('bg-surface-container', 'text-on-surface-variant');
      btn.classList.add('bg-on-tertiary-container', 'text-on-primary');

      const target = btn.getAttribute('data-category');
      projectCards.forEach(card => {
        if (target === 'all' || card.getAttribute('data-category') === target) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Search Functionality
  const searchInput = document.getElementById('projectSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      projectCards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(query)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  }

  // View Layout Toggle
  const viewGridBtn = document.getElementById('viewGridBtn');
  const viewListBtn = document.getElementById('viewListBtn');
  const monographContainer = document.getElementById('monographContainer');

  if (viewListBtn && viewGridBtn && monographContainer) {
    viewListBtn.addEventListener('click', () => {
      viewListBtn.classList.add('bg-surface', 'text-primary', 'shadow-xs');
      viewListBtn.classList.remove('text-on-surface-variant');
      viewGridBtn.classList.remove('bg-surface', 'text-primary', 'shadow-xs');
      viewGridBtn.classList.add('text-on-surface-variant');

      monographContainer.className = "flex flex-col gap-space-lg";
      projectCards.forEach(c => {
        c.className = "project-card w-full flex flex-col md:flex-row bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl";
      });
    });

    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('bg-surface', 'text-primary', 'shadow-xs');
      viewGridBtn.classList.remove('text-on-surface-variant');
      viewListBtn.classList.remove('bg-surface', 'text-primary', 'shadow-xs');
      viewListBtn.classList.add('text-on-surface-variant');

      monographContainer.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg";
      // Reset original grid classes
      const cards = document.querySelectorAll('.project-card');
      if (cards[0]) cards[0].className = "project-card lg:col-span-8 flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl";
      if (cards[1]) cards[1].className = "project-card lg:col-span-4 flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl";
      if (cards[2]) cards[2].className = "project-card lg:col-span-4 flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl";
      if (cards[3]) cards[3].className = "project-card lg:col-span-4 flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl";
      if (cards[4]) cards[4].className = "project-card lg:col-span-4 flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl";
      if (cards[5]) cards[5].className = "project-card lg:col-span-12 flex flex-col lg:flex-row bg-surface-container-lowest rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl";
    });
  }

  // Monograph Modal Data
  const projectDetails = {
    mahalakshmi: {
      title: "Shri Mahalakshmi Maha Mandir Sanctuary",
      sub: "PLATE NO. 01 · NAGARA LATINA-SEKHARI CODEX",
      assay: "Hand-hewn Bansi Paharpur sandstone harvested at depths > 35m. Uniform pink hue with interlocking dry-stone mortise joints, compressive load > 120 MPa.",
      artisan: "184 stone carvers from Rajasthan guild. 420,000 chiseling man-hours under Chief Sthapati K. R. Sompura."
    },
    rajagopuram: {
      title: "Raja Gopuram Celestial Gateway",
      sub: "PLATE NO. 02 · 11 TALAS CELESTIAL PORTAL",
      assay: "Fine-grained crystalline gray granite mined from Tamil Nadu bedrock. High seismic resistance, weight-stabilized gravity lock.",
      artisan: "68 hereditary Dravida sthapatis; monolithic relief panels depicting 108 Karanas from Natya Shastra."
    },
    sabhamandapa: {
      title: "Makrana White Marble Sabha Mandapa",
      sub: "PLATE NO. 03 · TRANSLUCENT MARBLE ROTUNDA",
      assay: "Grade-A Dungri white marble with 98% calcium carbonate purity. Near-zero porosity and crystalline light transmission.",
      artisan: "Specialized delicate jade-chisel artisans; 1,280 dancing apsaras and 5 concentric corbelled ceiling rings."
    },
    cloister: {
      title: "Pradakshina Stone Cloister & Corridor",
      sub: "PLATE NO. 04 · 108 AMBULATORY PILLARS",
      assay: "Jodhpur Chhitar golden sandstone blocks. Acoustic absorption designed specifically for Sama Veda resonance frequencies.",
      artisan: "45 stone sculptors; 320 linear metres continuous dry-stone roof span with zero expansion joint corrosion."
    },
    pushkarini: {
      title: "Sacred Pushkarini Stepped Kund",
      sub: "PLATE NO. 05 · VEDIC HYDRAULIC RESERVOIR",
      assay: "Dense Deccan basalt masonry. Natural bio-sand sediment chambers and basalt stairs with zero hydraulic mortar wash-out.",
      artisan: "Hydraulic stonemasons experienced in stepwell geometry; 1.4 million litre sacred holding capacity."
    },
    anastylosis: {
      title: "Historic Sanctum Anastylosis & Restoration",
      sub: "PLATE NO. 06 · ARCHAEOLOGICAL ANCHORAGE",
      assay: "Matched 11th-century weathered sandstone using non-invasive sonic diagnostics and micro-mineralogical petrography.",
      artisan: "Conservation architects certified under ASI standards; 4,820 dislodged stones re-anchored with surgical tolerance."
    }
  };

  function openMonographModal(id) {
    const modal = document.getElementById('monographModal');
    const data = projectDetails[id] || projectDetails.mahalakshmi;
    document.getElementById('modalPlateTitle').innerText = data.title;
    document.getElementById('modalPlateSubtitle').innerText = data.sub;
    document.getElementById('modalStoneAssay').innerText = data.assay;
    document.getElementById('modalArtisanData').innerText = data.artisan;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMonographModal() {
    const modal = document.getElementById('monographModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Close on outside click
  document.getElementById('monographModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'monographModal') {
      closeMonographModal();
    }
  });

  return {
    h0: function (event) { ctx.navigate({ to: '/projects/mahalakshmi-maha-mandir' }); },
    h1: function (event) { openMonographModal('rajagopuram'); },
    h2: function (event) { openMonographModal('sabhamandapa'); },
    h3: function (event) { openMonographModal('cloister'); },
    h4: function (event) { openMonographModal('pushkarini'); },
    h5: function (event) { openMonographModal('anastylosis'); },
    h6: function (event) { closeMonographModal(); },
    h7: function (event) { closeMonographModal(); },
  };
}

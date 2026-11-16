// @ts-nocheck
// Interactive behaviour ported from the original design screen (DOM-driven, runs after mount).
import { toast } from "sonner";
import type { ScreenContext } from "@/components/site/use-screen-script";

export function setup(ctx: ScreenContext) {
  const notify = (msg) => toast(msg);
  const onReady = (fn) => fn();

    const hotspotData = {
      1: {
        number: "01",
        eyebrow: "PINNACLE SANCTUM ELEMENT · ANATOMY 01",
        title: "Kalasha (कलश) & Amalaka",
        role: "Cosmic Finial Urn & The Zenith Axis Mundi",
        description: "The monumental pinnacle urn, cast in gilded copper or hand-carved from single-block dense sandstone, represents the cosmic seed of consciousness and the ultimate apex of the temple’s vertical cosmic axis (Brahmasutra).",
        sanskrit: "कलाशः सर्वदेवानां निवासः",
        translation: "“In the sanctified Kalasha reside all divine potencies and celestial waters.” — Agni Purana",
        specGeom: "Ayadi Formula (1:4 Shikhara proportion)",
        specMat: "Bansi Paharpur Sandstone & 99.8% Gilded Copper",
        specPhys: "Acts as a master dead-load vertical keystone compression lock across the corbelled stone Shikhara vaulting.",
        nextLabel: "Explore Next Element: Amalaka Stone Disc →",
        nextId: 2
      },
      2: {
        number: "02",
        eyebrow: "CROWN HORIZONTAL ELEMENT · ANATOMY 02",
        title: "Amalaka (आमलक)",
        role: "Segmented Stone Disc Crown below Kalasha",
        description: "A monumental ribbed, cog-wheel stone ring crowning the Shikhara shoulder (Skandha). It symbolizes the solar disc, open lotus of enlightenment, and acts as the seating pedestal for the golden Kalasha.",
        sanskrit: "सूर्यमण्डलाकारं आमलकं प्रोक्तम्",
        translation: "“The Amalaka is consecrated in the likeness of the solar sphere radiating pranic force.” — Shilpa Ratna",
        specGeom: "Exact diameter equals width of Garbhagriha interior",
        specMat: "Single monolithic carved stone weighing up to 25 metric tons",
        specPhys: "Distributes vertical loads outward to the 4 cardinal ratha buttresses.",
        nextLabel: "Explore Next Element: Shikhara Spire →",
        nextId: 3
      },
      3: {
        number: "03",
        eyebrow: "VERTICAL ASCENSION TOWER · ANATOMY 03",
        title: "Shikhara (शिखर) / Vimana",
        role: "The Curvilinear Mountain Spire of Mount Meru",
        description: "The monumental curvilinear superstructure towering above the inner womb-chamber. Architecturally, it represents Mount Meru—the cosmic axis connecting terrestrial worshippers with celestial realms.",
        sanskrit: "शिखरं मेरुरूपेण जगन्मांगल्यकारकम्",
        translation: "“The Shikhara rises in the majestic countenance of Mount Meru, bestowing auspiciousness upon the cosmos.”",
        specGeom: "Calculated using Rekha-Prasada parabolic arc formulas",
        specMat: "Dry interlocking ashlar masonry without cementitious mortar",
        specPhys: "Self-stabilizing gravity-lock corbelled stone arch system.",
        nextLabel: "Explore Next Element: Urushringa Turrets →",
        nextId: 4
      },
      4: {
        number: "04",
        eyebrow: "STRUCTURAL SATELLITE SPIRES · ANATOMY 04",
        title: "Urushringa (उरुशृङ्ग)",
        role: "Subsidiary Turrets Providing Stability and Rhythm",
        description: "Miniature replicas of the main Shikhara clinging to the central tower’s flanks. In the Sekhari Nagara style, they create a breathtaking mountainous silhouette while reinforcing the lateral thrust of the main spire.",
        sanskrit: "अङ्गशिखरैः शोभितं महाप्रासादम्",
        translation: "“The grand temple sanctuary is adorned with clustered child-spires echoing cosmic plurality.”",
        specGeom: "Half and quarter scale projections of primary Shikhara",
        specMat: "Carved sandstone ashlar blocks with interlocking joggles",
        specPhys: "Buttresses lateral shear wind loads against towering spires.",
        nextLabel: "Explore Next Element: Garbhagriha Sanctum →",
        nextId: 5
      },
      5: {
        number: "05",
        eyebrow: "THE SACRED SANCTUM · ANATOMY 05",
        title: "Garbhagriha (गर्भगृह)",
        role: "The Innermost Sanctum, Womb Chamber of the Deity",
        description: "The unadorned, dark, square inner sanctuary housing the principal consecrated deity (Moolavar). Built with thick, sound-dampening stone walls to preserve uncompromised energetic resonance during Vedic pujas.",
        sanskrit: "गर्भगृहं ब्रह्मस्थानं सर्वमन्त्रसमन्वितम्",
        translation: "“The Garbhagriha is the sacred Brahma-Sthana, the seat of unmanifest primordial consciousness.”",
        specGeom: "Exact Brahma-pada center of the 64 or 81 Manduka Mandala",
        specMat: "Dense non-porous granite or quartzitic sandstone blocks",
        specPhys: "Monolithic thermal and acoustic isolation shielding external entropy.",
        nextLabel: "Explore Next Element: Antarala Passage →",
        nextId: 6
      },
      6: {
        number: "06",
        eyebrow: "TRANSITIONAL PORTAL · ANATOMY 06",
        title: "Antarala (अन्तराल)",
        role: "The Vestibular Intermediate Passage",
        description: "The transitional threshold connecting the active congregational hall (Mandapa) with the silent transcendence of the Garbhagriha. Here, devotees prepare their consciousness before beholding the divine presence.",
        sanskrit: "अन्तरालं समासाद्य मनः शान्तिं प्रपद्यते",
        translation: "“Entering the Antarala threshold, the mind sheds temporal turbulence and assumes tranquil stillness.”",
        specGeom: "Proportioned to 1/2 width of Garbhagriha doorway",
        specMat: "Solid stone doorframes with carved Ganga and Yamuna river iconography",
        specPhys: "Absorbs vibration differential between wide hall and compact sanctum.",
        nextLabel: "Explore Next Element: Mandapa Hall →",
        nextId: 7
      },
      7: {
        number: "07",
        eyebrow: "CONGREGATIONAL HALL · ANATOMY 07",
        title: "Mandapa (मण्डप)",
        role: "Columned Assembly Hall for Devotional Communion",
        description: "A grand pillared hall fronting the sanctum where rituals, sacred dances (Nritya), Vedic chanting, and community congregations take place. Its pyramidally stepped roof (Phamsana) echoes lower Himalayan peaks.",
        sanskrit: "नानाचित्रसमायुक्तं मण्डपं देवसम्मतम्",
        translation: "“The Mandapa is adorned with sacred carvings pleasing to the devas and congregants alike.”",
        specGeom: "Grid of 16, 32, or 64 monolithic columns based on Vastu grids",
        specMat: "Finely carved monolithic stone columns supporting deep stone beams",
        specPhys: "Corbelled lantern ceilings creating vast un-reinforced column spans.",
        nextLabel: "Explore Next Element: Ardhamandapa Porch →",
        nextId: 8
      },
      8: {
        number: "08",
        eyebrow: "ENTRY THRESHOLD · ANATOMY 08",
        title: "Ardhamandapa (अर्धमण्डप)",
        role: "Entrance Porch & Ceremonial Gateway",
        description: "The welcoming portico at the temple entrance featuring ornamental balustrades (Kaksasana), inviting light and mountain air while serving as the ritual transition between the outer world and consecrated grounds.",
        sanskrit: "प्रासादमुखशोभार्थं कर्तव्यमर्धमण्डपम्",
        translation: "“To manifest beauty at the temple’s threshold, the Ardhamandapa shall be erected.”",
        specGeom: "Extends 1/3 depth of the main Mandapa assembly hall",
        specMat: "Polished sandstone bench backs and monolithic entryway pillars",
        specPhys: "Forms the initial seismic stabilization tie-beam for the eastern facade.",
        nextLabel: "Explore Next Element: Jagati Plinth Base →",
        nextId: 9
      },
      9: {
        number: "09",
        eyebrow: "FOUNDATIONAL ELEVATION · ANATOMY 09",
        title: "Jagati / Adhisthana (जगती)",
        role: "Elevated Plinth Platform Symbolizing the Earthly Base",
        description: "The monumental raised stone terrace upon which the entire temple rests. It elevates the sacred structure above mundane ground level, serving as the wide ambulatory path (Pradakshina-patha) for circumambulation.",
        sanskrit: "जगती सर्वसत्त्वानां आधारभूता महोदया",
        translation: "“The Jagati is the foundation of all beings, holding the sacred temple above transient dust.”",
        specGeom: "Extends 1.5x beyond the outer temple perimeter",
        specMat: "Massive solid interlocking stone courses with elephant and lotus mouldings",
        specPhys: "Distributes multi-thousand-ton superstructure weight across deep bedrock.",
        nextLabel: "Explore Next Element: Carved Stambhas →",
        nextId: 10
      },
      10: {
        number: "10",
        eyebrow: "SACRED ICONOMETRIC COLUMNS · ANATOMY 10",
        title: "Carved Pillars & Stambhas (स्तम्भ)",
        role: "Load-Bearing Monolithic Columns with Shilpa Carvings",
        description: "Monolithic stone pillars sculpted with tiered iconography—from square base (Brahma-bhaga) to octagonal shaft (Vishnu-bhaga) and circular capital (Rudra-bhaga)—embodying the sacred trimurti in structural load paths.",
        sanskrit: "स्तम्भाः सर्वसुराक्रान्ताः प्रासादभारवाहिनः",
        translation: "“The Stambhas bear the mass of the sanctum while consecrated deities take abode in their carvings.”",
        specGeom: "Strict 1:7 to 1:9 height-to-girth Shilpa ratio for granite",
        specMat: "Single quarry-split monolithic granite or sandstone cylinders",
        specPhys: "Dynamic vertical load transfer with dry mortise-and-tenon capitals.",
        nextLabel: "Loop to Top Element: Kalasha Finial →",
        nextId: 1
      }
    };

    let currentActiveId = 1;

    function selectHotspot(id) {
      currentActiveId = id;
      const data = hotspotData[id];
      if (!data) return;

      // Update Dossier Content
      document.getElementById('dossier-eyebrow').innerText = data.eyebrow;
      document.getElementById('dossier-title').innerText = data.title;
      document.getElementById('dossier-role').innerText = data.role;
      document.getElementById('dossier-description').innerText = data.description;
      document.getElementById('dossier-sanskrit').innerText = data.sanskrit;
      document.getElementById('dossier-translation').innerText = data.translation;
      document.getElementById('dossier-spec-geom').innerText = data.specGeom;
      document.getElementById('dossier-spec-mat').innerText = data.specMat;
      document.getElementById('dossier-spec-phys').innerText = data.specPhys;
      document.getElementById('dossier-counter').innerText = data.number;
      
      const nextBtn = document.getElementById('next-element-btn');
      nextBtn.innerHTML = `<span>${data.nextLabel}</span><span class="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>`;
      nextBtn.setAttribute('onclick', `selectHotspot(${data.nextId})`);

      // Reset and Update Hotspot Pins Styling
      for (let i = 1; i <= 10; i++) {
        const pin = document.getElementById(`hotspot-btn-${i}`);
        if (!pin) continue;
        if (i === id) {
          pin.className = "hotspot-pin group absolute z-30 focus:outline-none -translate-x-1/2 -translate-y-1/2";
          pin.innerHTML = `
            <span class="relative flex h-8 w-8 items-center justify-center">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
              <span class="relative inline-flex rounded-full h-6 w-6 bg-secondary text-on-primary font-label-monument text-[11px] font-bold items-center justify-center shadow-lg ring-2 ring-surface">${data.number}</span>
            </span>
            <span class="absolute left-8 top-1/2 -translate-y-1/2 bg-charcoal-monolith text-secondary-fixed text-label-monument font-label-monument uppercase tracking-wider px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap">${data.number} ${data.title.split(' ')[0]}</span>
          `;
        } else {
          const numStr = i < 10 ? `0${i}` : `${i}`;
          pin.className = "hotspot-pin group absolute z-20 focus:outline-none -translate-x-1/2 -translate-y-1/2";
          pin.innerHTML = `
            <span class="relative flex h-6 w-6 items-center justify-center">
              <span class="relative inline-flex rounded-full h-5 w-5 bg-sandstone-surface text-primary font-label-monument text-[10px] font-bold items-center justify-center hover:bg-secondary hover:text-on-primary transition-all">${numStr}</span>
            </span>
            <span class="absolute left-7 top-1/2 -translate-y-1/2 hidden group-hover:block bg-charcoal-monolith text-surface text-label-monument font-label-monument uppercase tracking-wider px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap">${numStr} Node</span>
          `;
        }
      }
    }

    function nextHotspot() {
      const nextId = hotspotData[currentActiveId].nextId;
      selectHotspot(nextId);
    }

    function switchTradition(style) {
      const tabs = ['nagara', 'dravida', 'vesara'];
      tabs.forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        if (!btn) return;
        const indicator = btn.querySelector('.tab-indicator') || btn.querySelector('span.absolute.bottom-0');
        if (t === style) {
          btn.className = "group relative px-6 py-4 rounded-xl bg-card-elevated shadow-md flex items-center gap-4 text-left transition-all duration-300";
          if (indicator) {
            indicator.className = "absolute bottom-0 left-6 right-6 h-[3px] bg-secondary rounded-full transition-colors";
          }
        } else {
          btn.className = "group relative px-6 py-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-left transition-all duration-300 flex items-center gap-4";
          if (indicator) {
            indicator.className = "tab-indicator absolute bottom-0 left-6 right-6 h-[3px] bg-transparent rounded-full transition-colors";
          }
        }
      });
      // Scroll to diagram smoothly
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  
  return {
    h0: function (event) { switchTradition('nagara'); },
    h1: function (event) { switchTradition('dravida'); },
    h2: function (event) { switchTradition('vesara'); },
    h3: function (event) { selectHotspot(1); },
    h4: function (event) { selectHotspot(2); },
    h5: function (event) { selectHotspot(3); },
    h6: function (event) { selectHotspot(4); },
    h7: function (event) { selectHotspot(5); },
    h8: function (event) { selectHotspot(6); },
    h9: function (event) { selectHotspot(7); },
    h10: function (event) { selectHotspot(8); },
    h11: function (event) { selectHotspot(9); },
    h12: function (event) { selectHotspot(10); },
    h13: function (event) { selectHotspot(1); },
    h14: function (event) { selectHotspot(2); },
    h15: function (event) { selectHotspot(3); },
    h16: function (event) { selectHotspot(5); },
    h17: function (event) { selectHotspot(7); },
    h18: function (event) { selectHotspot(9); },
    h19: function (event) { nextHotspot(); },
    h20: function (event) { switchTradition('nagara'); },
    h21: function (event) { switchTradition('dravida'); },
    h22: function (event) { switchTradition('vesara'); },
  };
}

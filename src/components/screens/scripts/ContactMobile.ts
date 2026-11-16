// @ts-nocheck
import { continueEnquiryOnWhatsApp } from "@/components/site/consultation-whatsapp";
// Interactive behaviour ported from the original design screen (DOM-driven, runs after mount).
import { toast } from "sonner";
import type { ScreenContext } from "@/components/site/use-screen-script";

export function setup(ctx: ScreenContext) {
  const notify = (msg) => toast(msg);
  const onReady = (fn) => fn();

  function selectProjectType(btn, typeValue) {
    const allPills = document.querySelectorAll('.project-pill');
    allPills.forEach(p => {
      p.classList.remove('bg-primary', 'text-on-primary', 'active-pill');
      p.classList.add('bg-surface-container-lowest', 'text-on-surface');
    });

    btn.classList.remove('bg-surface-container-lowest', 'text-on-surface');
    btn.classList.add('bg-primary', 'text-on-primary', 'active-pill');

    const input = document.getElementById('selected-project-type');
    if (input) {
      input.value = typeValue;
    }
  }

  function toggleArchitectureDrawer() {
    const content = document.getElementById('architecture-drawer-content');
    const chevron = document.getElementById('drawer-chevron');
    const label = document.getElementById('drawer-btn-label');

    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      content.classList.add('flex');
      chevron.style.transform = 'rotate(180deg)';
      label.textContent = 'Collapse';
    } else {
      content.classList.add('hidden');
      content.classList.remove('flex');
      chevron.style.transform = 'rotate(0deg)';
      label.textContent = 'Show Architecture';
    }
  }

  return {
    h0: function (event) { continueEnquiryOnWhatsApp(event); },
    h1: function (event) { selectProjectType(event.currentTarget, 'Temple Construction'); },
    h2: function (event) { selectProjectType(event.currentTarget, 'Planning & Vastu'); },
    h3: function (event) { selectProjectType(event.currentTarget, 'Stone Craftsmanship'); },
    h4: function (event) { selectProjectType(event.currentTarget, 'Restoration & Re-consecration'); },
    h5: function (event) { toggleArchitectureDrawer(); },
  };
}

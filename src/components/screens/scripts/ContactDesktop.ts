// @ts-nocheck
import { continueEnquiryOnWhatsApp } from "@/components/site/consultation-whatsapp";
// Interactive behaviour ported from the original design screen (DOM-driven, runs after mount).
import { toast } from "sonner";
import type { ScreenContext } from "@/components/site/use-screen-script";

export function setup(ctx: ScreenContext) {
  const notify = (msg) => toast(msg);
  const onReady = (fn) => fn();

  // Dynamic UI enhancements for consultation selector
  onReady( () => {
    const radioInputs = document.querySelectorAll('input[name="project_type"]');
    radioInputs.forEach(input => {
      input.addEventListener('change', () => {
        // Subtle haptic response / visual state update
        radioInputs.forEach(r => {
          const parent = r.closest('label');
          if (r.checked) {
            parent.classList.add('bg-secondary-fixed');
          } else {
            parent.classList.remove('bg-secondary-fixed');
          }
        });
      });
    });
  });

  return {
    h0: function (event) { continueEnquiryOnWhatsApp(event); },
    h1: function (event) { document.getElementById('stone_pref').value='Pink Bansi Paharpur Sandstone'; },
    h2: function (event) { document.getElementById('stone_pref').value='Makrana Pure White Marble'; },
    h3: function (event) { document.getElementById('stone_pref').value='Black Charnockite Dravidian Granite'; },
    h4: function (event) { document.getElementById('file-chosen-text').innerText = event.currentTarget.files[0] ? event.currentTarget.files[0].name : 'Attach Site Survey, Bhoomi Map, or Trust Resolution (PDF, DWG up to 25MB)'; },
  };
}

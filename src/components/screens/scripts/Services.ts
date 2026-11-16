// @ts-nocheck
// Interactive behaviour ported from the original design screen (DOM-driven, runs after mount).
import { toast } from "sonner";
import type { ScreenContext } from "@/components/site/use-screen-script";

export function setup(ctx: ScreenContext) {
  const notify = (msg) => toast(msg);
  const onReady = (fn) => fn();

  // Interactive Discipline Filtering Mechanism
  onReady( function () {
    const filterButtons = document.querySelectorAll('.filter-pill');
    const cards = document.querySelectorAll('.service-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Clear active styles from all buttons
        filterButtons.forEach(btn => {
          btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
          btn.classList.add('bg-surface-container-high', 'text-on-surface-variant');
        });

        // Set active styles on clicked button
        button.classList.remove('bg-surface-container-high', 'text-on-surface-variant');
        button.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');

        const selectedCategory = button.getAttribute('data-category');

        cards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });

  return {

  };
}

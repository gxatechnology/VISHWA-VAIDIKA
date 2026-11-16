// @ts-nocheck
// Interactive behaviour ported from the original design screen (DOM-driven, runs after mount).
import { toast } from "sonner";
import type { ScreenContext } from "@/components/site/use-screen-script";

export function setup(ctx: ScreenContext) {
  const notify = (msg) => toast(msg);
  const onReady = (fn) => fn();

  function switchStone(type) {
    const tabs = ['bansi', 'makrana', 'granite', 'basalt'];
    
    tabs.forEach(stone => {
      const tabEl = document.getElementById('tab-' + stone);
      const contentEl = document.getElementById('content-' + stone);
      
      if (stone === type) {
        // Active state
        tabEl.className = 'flex flex-col text-left p-4 rounded transition-all bg-primary-container text-on-primary shadow-md';
        contentEl.classList.remove('hidden');
        contentEl.classList.add('block');
      } else {
        // Inactive state
        tabEl.className = 'flex flex-col text-left p-4 rounded transition-all bg-surface-container hover:bg-surface-container-high text-on-surface';
        contentEl.classList.remove('block');
        contentEl.classList.add('hidden');
      }
    });
  }

  return {
    h0: function (event) { switchStone('bansi'); },
    h1: function (event) { switchStone('makrana'); },
    h2: function (event) { switchStone('granite'); },
    h3: function (event) { switchStone('basalt'); },
  };
}

// @ts-nocheck
// Interactive behaviour ported from the original design screen (DOM-driven, runs after mount).
import { toast } from "sonner";
import type { ScreenContext } from "@/components/site/use-screen-script";

export function setup(ctx: ScreenContext) {
  const notify = (msg) => toast(msg);
  const onReady = (fn) => fn();

  function switchStage(stageNum) {
    // Hide all stage panels
    for (let i = 1; i <= 7; i++) {
      const panel = document.getElementById('stage-panel-' + i);
      const tab = document.getElementById('tab-' + i);
      if (panel) {
        panel.classList.add('hidden');
        panel.classList.remove('grid');
      }
      if (tab) {
        tab.classList.remove('bg-primary', 'text-on-primary');
        tab.classList.add('bg-surface-container-highest/20', 'text-surface-container-high');
      }
    }

    // Show active stage panel
    const activePanel = document.getElementById('stage-panel-' + stageNum);
    const activeTab = document.getElementById('tab-' + stageNum);
    if (activePanel) {
      activePanel.classList.remove('hidden');
      activePanel.classList.add('grid');
    }
    if (activeTab) {
      activeTab.classList.remove('bg-surface-container-highest/20', 'text-surface-container-high');
      activeTab.classList.add('bg-primary', 'text-on-primary');
    }
  }

  function downloadMonograph() {
    notify("VVS Advanced Engineering & Sthapatya Monograph (Rev 2025.4) is generating. Contact direct advisory for licensed CAD drawings.");
  }

  return {
    h0: function (event) { switchStage(1); },
    h1: function (event) { switchStage(2); },
    h2: function (event) { switchStage(3); },
    h3: function (event) { switchStage(4); },
    h4: function (event) { switchStage(5); },
    h5: function (event) { switchStage(6); },
    h6: function (event) { switchStage(7); },
    h7: function (event) { downloadMonograph(); },
    h8: function (event) { downloadMonograph(); },
  };
}

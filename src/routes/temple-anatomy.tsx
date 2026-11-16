import { createFileRoute } from "@tanstack/react-router";
import { TempleAnatomyScreen } from "@/components/screens/TempleAnatomy";

export const Route = createFileRoute("/temple-anatomy")({
  head: () => ({
    meta: [
      { title: "Temple Anatomy Explorer — VVS Temple Heritage" },
      { name: "description", content: "Explore the Kalasha, Shikhara, Mandapa and Garbhagriha of a Hindu temple across the Nagara, Dravida and Vesara traditions." },
      { property: "og:title", content: "Temple Anatomy Explorer — VVS Temple Heritage" },
      { property: "og:description", content: "Explore the Kalasha, Shikhara, Mandapa and Garbhagriha of a Hindu temple across the Nagara, Dravida and Vesara traditions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoutePage,
});

function RoutePage() {
  return (
    <TempleAnatomyScreen />
  );
}

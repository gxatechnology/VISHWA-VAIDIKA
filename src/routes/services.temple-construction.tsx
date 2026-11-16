import { createFileRoute } from "@tanstack/react-router";
import { TempleConstructionScreen } from "@/components/screens/TempleConstruction";

export const Route = createFileRoute("/services/temple-construction")({
  head: () => ({
    meta: [
      { title: "Complete Temple Construction — VVS Temple Heritage" },
      { name: "description", content: "Turnkey Nagara, Dravidian and Vesara temple construction from Bhumi Puja to Kumbhabhishekam consecration." },
      { property: "og:title", content: "Complete Temple Construction — VVS Temple Heritage" },
      { property: "og:description", content: "Turnkey Nagara, Dravidian and Vesara temple construction from Bhumi Puja to Kumbhabhishekam consecration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoutePage,
});

function RoutePage() {
  return (
    <TempleConstructionScreen />
  );
}

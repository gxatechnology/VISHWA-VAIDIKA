import { createFileRoute } from "@tanstack/react-router";
import { ServicesScreen } from "@/components/screens/Services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — VVS Temple Heritage" },
      { name: "description", content: "Ten documented disciplines: temple construction, Vastu planning, gopurams, murti carving, quarrying, ghats, villas and restoration." },
      { property: "og:title", content: "Services — VVS Temple Heritage" },
      { property: "og:description", content: "Ten documented disciplines: temple construction, Vastu planning, gopurams, murti carving, quarrying, ghats, villas and restoration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoutePage,
});

function RoutePage() {
  return (
    <ServicesScreen />
  );
}

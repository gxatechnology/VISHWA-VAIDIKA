import { createFileRoute } from "@tanstack/react-router";
import { ServicesScreen } from "@/components/screens/Services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — VVS Temple Heritage" },
      { name: "description", content: "Official portfolio of 42 services across 6 sections: temple construction, heritage restoration, residential & commercial civil works, transportation, urban infrastructure, and stone craftsmanship." },
      { property: "og:title", content: "Services — VVS Temple Heritage" },
      { property: "og:description", content: "Official portfolio of 42 services across 6 sections: temple construction, heritage restoration, residential & commercial civil works, transportation, urban infrastructure, and stone craftsmanship." },
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

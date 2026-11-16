import { createFileRoute } from "@tanstack/react-router";
import { ArchitectureScreen } from "@/components/screens/Architecture";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "Architecture & Stone Craftsmanship — VVS Temple Heritage" },
      { name: "description", content: "Sacred stones, dry interlocking joinery and canonical proportions behind our hand-carved temple architecture." },
      { property: "og:title", content: "Architecture & Stone Craftsmanship — VVS Temple Heritage" },
      { property: "og:description", content: "Sacred stones, dry interlocking joinery and canonical proportions behind our hand-carved temple architecture." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoutePage,
});

function RoutePage() {
  return (
    <ArchitectureScreen />
  );
}

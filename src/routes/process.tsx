import { createFileRoute } from "@tanstack/react-router";
import { ProcessScreen } from "@/components/screens/Process";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Capabilities & Process — VVS Temple Heritage" },
      { name: "description", content: "Our seven-stage temple lifecycle: consultation, design, quarrying, carving, assembly, inspection and consecration." },
      { property: "og:title", content: "Capabilities & Process — VVS Temple Heritage" },
      { property: "og:description", content: "Our seven-stage temple lifecycle: consultation, design, quarrying, carving, assembly, inspection and consecration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoutePage,
});

function RoutePage() {
  return (
    <ProcessScreen />
  );
}

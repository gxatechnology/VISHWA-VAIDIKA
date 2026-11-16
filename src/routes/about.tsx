import { createFileRoute } from "@tanstack/react-router";
import { AboutScreen } from "@/components/screens/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — VVS Temple Heritage" },
      { name: "description", content: "Our lineage, values and Shilpa Shastra methods for building and restoring sacred stone temples across India." },
      { property: "og:title", content: "About Us — VVS Temple Heritage" },
      { property: "og:description", content: "Our lineage, values and Shilpa Shastra methods for building and restoring sacred stone temples across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoutePage,
});

function RoutePage() {
  return (
    <AboutScreen />
  );
}

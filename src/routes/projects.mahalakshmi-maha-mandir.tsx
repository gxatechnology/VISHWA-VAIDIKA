import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailScreen } from "@/components/screens/ProjectDetail";

export const Route = createFileRoute("/projects/mahalakshmi-maha-mandir")({
  head: () => ({
    meta: [
      { title: "Shri Mahalakshmi Maha Mandir Case Study — VVS Temple Heritage" },
      { name: "description", content: "Case study of a 140-foot pink sandstone Nagara sanctuary in the Western Ghats, from blueprint to consecration." },
      { property: "og:title", content: "Shri Mahalakshmi Maha Mandir Case Study — VVS Temple Heritage" },
      { property: "og:description", content: "Case study of a 140-foot pink sandstone Nagara sanctuary in the Western Ghats, from blueprint to consecration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoutePage,
});

function RoutePage() {
  return (
    <ProjectDetailScreen />
  );
}

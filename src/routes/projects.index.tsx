import { createFileRoute } from "@tanstack/react-router";
import { ProjectsScreen } from "@/components/screens/Projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects Portfolio — VVS Temple Heritage" },
      { name: "description", content: "A monograph of completed sanctuaries, gopurams, mandapas, stepped kunds and archaeological restorations." },
      { property: "og:title", content: "Projects Portfolio — VVS Temple Heritage" },
      { property: "og:description", content: "A monograph of completed sanctuaries, gopurams, mandapas, stepped kunds and archaeological restorations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoutePage,
});

function RoutePage() {
  return (
    <ProjectsScreen />
  );
}

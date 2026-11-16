import { createFileRoute } from "@tanstack/react-router";
import { LeadershipScreen } from "@/components/screens/Leadership";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Founder & Leadership — VVS Temple Heritage" },
      { name: "description", content: "Meet founder Umakant Giridhari Jadhav and the Sthapati council guiding every VVS temple project." },
      { property: "og:title", content: "Founder & Leadership — VVS Temple Heritage" },
      { property: "og:description", content: "Meet founder Umakant Giridhari Jadhav and the Sthapati council guiding every VVS temple project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoutePage,
});

function RoutePage() {
  return (
    <LeadershipScreen />
  );
}

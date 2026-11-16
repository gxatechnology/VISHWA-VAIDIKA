import { createFileRoute } from "@tanstack/react-router";
import { HomeDesktopScreen } from "@/components/screens/HomeDesktop";
import { HomeMobileScreen } from "@/components/screens/HomeMobile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VVS Temple Heritage — Building Sacred Landmarks" },
      { name: "description", content: "Temple construction, Vastu architectural planning, stone craftsmanship and heritage restoration rooted in Shilpa Shastra." },
      { property: "og:title", content: "VVS Temple Heritage — Building Sacred Landmarks" },
      { property: "og:description", content: "Temple construction, Vastu architectural planning, stone craftsmanship and heritage restoration rooted in Shilpa Shastra." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoutePage,
});

function RoutePage() {
  return (
    <>
      <div className="hidden md:flex md:flex-col">
        <HomeDesktopScreen />
      </div>
      <div className="flex flex-col md:hidden">
        <HomeMobileScreen />
      </div>
    </>
  );
}

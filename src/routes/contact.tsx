import { createFileRoute } from "@tanstack/react-router";
import { ContactDesktopScreen } from "@/components/screens/ContactDesktop";
import { ContactMobileScreen } from "@/components/screens/ContactMobile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Project Consultation — VVS Temple Heritage" },
      { name: "description", content: "Request a temple project consultation with the VVS Sthapati council in Pune — call, WhatsApp or send your enquiry." },
      { property: "og:title", content: "Contact & Project Consultation — VVS Temple Heritage" },
      { property: "og:description", content: "Request a temple project consultation with the VVS Sthapati council in Pune — call, WhatsApp or send your enquiry." },
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
        <ContactDesktopScreen />
      </div>
      <div className="flex flex-col md:hidden">
        <ContactMobileScreen />
      </div>
    </>
  );
}

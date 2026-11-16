/** Client-side handoff, NOT a backend submission or upload. */
const PHONE = "919941121111";

function field(form: HTMLFormElement, id: string): string {
  const el = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`#${id}`);
  return el?.value?.trim() ?? "";
}

export function continueEnquiryOnWhatsApp(event: Event): void {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  if (!form || !form.reportValidity()) return;
  const mobile = Boolean(form.querySelector("#full-name"));
  const details: Array<[string, string]> = mobile
    ? [
        ["Name", field(form, "full-name")],
        ["Phone", field(form, "mobile-number")],
        ["Organization / Trust", field(form, "trust-name")],
        ["Project type", field(form, "selected-project-type")],
        ["Location", field(form, "project-location")],
        ["Project requirements", field(form, "project-scope")],
      ]
    : [
        ["Name", field(form, "fullName")],
        ["Phone", field(form, "phone")],
        ["Email", field(form, "email")],
        ["Organization / Trust", field(form, "trustName")],
        ["Project type", String(new FormData(form).get("project_type") ?? "")],
        ["Location", field(form, "location")],
        ["Dimensions", field(form, "dimensions")],
        ["Stone preference", field(form, "stone_pref")],
        ["Project requirements", field(form, "vision")],
      ];
  const message = [
    "Namaste, I would like to discuss a temple/heritage project with VVS Temple Heritage.",
    ...details.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`),
    "Please note: files selected on the website are not uploaded. I can share attachments directly here.",
  ].join("\n");
  // Redirect in the direct user submit event; the user must press Send in WhatsApp.
  window.location.assign(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`);
}

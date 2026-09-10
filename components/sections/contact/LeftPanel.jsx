import { siteConfig } from "@/config/site";

const inquiryTypes = [
  ["Strategic partnerships", "Group-level collaboration, co-investment, and institutional relationships."],
  ["Operating companies", "Questions concerning a subsidiary’s services, markets, or capabilities."],
  ["Media", "Corporate communications, interviews, and verified press enquiries."],
  ["Talent", "Evergreen professional introductions and future operating interest."],
];

export default function LeftPanel() {
  return (
    <aside className="py-8 lg:sticky lg:top-28 lg:self-start lg:py-12" aria-labelledby="contact-desk-title">
      <p className="text-sm font-semibold text-gold-300">Contact desk</p>
      <h2 id="contact-desk-title" className="mt-5 max-w-[12ch] text-4xl font-medium tracking-[-0.04em] text-adesa-50 sm:text-5xl">Route the enquiry clearly.</h2>
      <p className="mt-6 max-w-[48ch] text-base leading-7 text-adesa-300">A concise note with your organisation, context, and intended outcome helps the appropriate team review it efficiently.</p>

      <dl className="mt-10 border-t border-white/12">
        {inquiryTypes.map(([title, description], index) => <div key={title} className="grid gap-3 border-b border-white/12 py-5 sm:grid-cols-[2rem_1fr]"><span className="text-xs tabular-nums text-gold-300">0{index + 1}</span><div><dt className="text-sm font-semibold text-adesa-100">{title}</dt><dd className="mt-2 text-sm leading-6 text-adesa-400">{description}</dd></div></div>)}
      </dl>

      <address className="mt-10 space-y-5 border-l border-gold-400/50 pl-5 not-italic text-sm leading-6 text-adesa-300">
        <div><p className="text-xs text-adesa-500">Email</p><a className="text-adesa-100 transition-colors hover:text-gold-300" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div>
        <div><p className="text-xs text-adesa-500">Headquarters</p><p className="text-adesa-100">{siteConfig.contact.address}</p></div>
        <div><p className="text-xs text-adesa-500">Response window</p><p className="text-adesa-100">Typically within 2-3 business days</p></div>
      </address>
    </aside>
  );
}

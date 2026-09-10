import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import Logo from "@/components/ui/logo";
import { ACTIVE_SUBSIDIARIES, ADESA_INSTAGRAM_URL } from "@/config/brand";
import { siteConfig } from "@/config/site";

const companyLinks = [
  ["About ADESA HQ", "/about"],
  ["Group Structure", "/structure"],
  ["Governance", "/governance"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer className="section-rule bg-adesa-950 text-adesa-100" role="contentinfo">
      <div className="site-container py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="ADESA HQ home">
              <Logo variant="secondary" width={48} height={48} />
              <span className="font-serif text-2xl text-adesa-50">ADESA <span className="font-sans text-xs font-semibold tracking-[0.18em] text-gold-400">HQ</span></span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-adesa-300">
              A builder-operator group creating and strengthening African businesses through disciplined governance and practical operating support.
            </p>
            <Link href={siteConfig.award.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 border-l border-gold-400 pl-3 text-sm font-semibold text-gold-300 hover:text-gold-200">
              {siteConfig.award.title}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <nav aria-label="Footer company navigation">
            <h2 className="font-sans text-sm font-semibold text-adesa-50">Company</h2>
            <ul className="mt-4 space-y-3">
              {companyLinks.map(([name, href]) => (
                <li key={href}><Link href={href} className="text-sm text-adesa-300 transition-colors duration-200 hover:text-gold-300">{name}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer subsidiary navigation">
            <h2 className="font-sans text-sm font-semibold text-adesa-50">Operating companies</h2>
            <ul className="mt-4 space-y-3">
              {ACTIVE_SUBSIDIARIES.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-adesa-300 transition-colors duration-200 hover:text-gold-300">
                    {name}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 grid gap-5 border-t border-white/10 pt-7 text-sm text-adesa-400 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-center">
          <span className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />{siteConfig.contact.address}</span>
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 transition-colors duration-200 hover:text-gold-300"><Mail className="h-4 w-4 text-gold-400" aria-hidden="true" />{siteConfig.contact.email}</a>
          <div className="flex items-center gap-4">
            <Link href={ADESA_INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="ADESA HQ Instagram" className="hover:text-gold-300"><Instagram className="h-4 w-4" /></Link>
            <Link href="https://www.linkedin.com/company/adesa-hq/" target="_blank" rel="noreferrer" aria-label="ADESA HQ LinkedIn" className="hover:text-gold-300"><Linkedin className="h-4 w-4" /></Link>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-adesa-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ADESA HQ Group. All rights reserved.</p>
          <div className="flex gap-5"><Link href="/privacy" className="hover:text-adesa-200">Privacy</Link><Link href="/terms" className="hover:text-adesa-200">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}

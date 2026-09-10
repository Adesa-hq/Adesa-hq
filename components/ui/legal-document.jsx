import { siteConfig } from "@/config/site";

export function LegalDocument({ title, updated, sections }) {
  return (
    <section className="bg-adesa-950 pb-24 pt-12 text-adesa-100 sm:pb-32 sm:pt-16">
      <div className="site-container grid gap-12 lg:grid-cols-[15rem_minmax(0,46rem)] lg:justify-between">
        <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold text-gold-300">In this document</p>
          <nav aria-label={`${title} contents`} className="mt-5 w-full max-w-full overflow-x-auto pb-2 lg:overflow-visible">
            <ol className="flex min-w-max gap-5 text-sm text-adesa-400 lg:min-w-0 lg:flex-col lg:gap-3">
              {sections.map((section, index) => (
                <li key={section.id}><a className="transition-colors hover:text-adesa-100" href={`#${section.id}`}>{String(index + 1).padStart(2, "0")} {section.title}</a></li>
              ))}
            </ol>
          </nav>
          {updated ? <p className="mt-8 hidden border-t border-white/12 pt-5 text-xs leading-5 text-adesa-500 lg:block">Last updated {updated}</p> : null}
        </aside>

        <article className="min-w-0">
          {sections.map((section, index) => (
            <section id={section.id} key={section.id} className="scroll-mt-28 border-t border-white/12 py-9 sm:py-12">
              <div className="grid gap-4 sm:grid-cols-[2.5rem_1fr]">
                <span className="text-xs tabular-nums text-gold-300" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-2xl font-medium tracking-[-0.025em] text-adesa-50 sm:text-3xl">{section.title}</h2>
                  <div className="mt-5 space-y-5 text-base leading-8 text-adesa-300">{section.content}</div>
                </div>
              </div>
            </section>
          ))}
          <footer className="border-t border-white/12 pt-8 text-sm leading-6 text-adesa-400">
            Questions about this document can be sent to <a className="text-gold-300 underline decoration-gold-400/50 underline-offset-4" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
          </footer>
        </article>
      </div>
    </section>
  );
}

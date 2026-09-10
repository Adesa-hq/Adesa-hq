import { cn } from "@/lib/utils";

export function EditorialIntro({ kicker, title, description, className, titleId }) {
  return (
    <header className={cn("grid gap-6 border-t border-white/12 pt-6 lg:grid-cols-12", className)}>
      <p className="text-sm font-semibold text-gold-300 lg:col-span-3">{kicker}</p>
      <div className="lg:col-span-8 lg:col-start-5">
        <h2 id={titleId} className="max-w-[18ch] text-3xl font-medium leading-[1.06] tracking-[-0.04em] text-adesa-50 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? <p className="mt-5 max-w-[62ch] text-base leading-7 text-adesa-300 sm:text-lg">{description}</p> : null}
      </div>
    </header>
  );
}

export function EditorialLedger({ items, className, numbered = true }) {
  return (
    <dl className={cn("border-t border-white/12", className)}>
      {items.map((item, index) => (
        <div key={item.title} className="grid gap-4 border-b border-white/12 py-7 sm:grid-cols-[3rem_minmax(10rem,0.7fr)_1.3fr] sm:gap-7 sm:py-9">
          <span className="text-xs tabular-nums text-gold-300" aria-hidden="true">{numbered ? String(index + 1).padStart(2, "0") : item.label}</span>
          <dt className="text-lg font-medium text-adesa-50 sm:text-xl">{item.title}</dt>
          <dd className="max-w-[58ch] text-sm leading-6 text-adesa-300 sm:text-base sm:leading-7">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}

export function SectionLink({ href, children, external = false, className }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn("inline-flex min-h-11 items-center border-b border-gold-400/60 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200", className)}
    >
      {children}<span className="ml-2" aria-hidden="true">↗</span>
    </a>
  );
}

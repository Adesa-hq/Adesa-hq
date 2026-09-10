import { cn } from "@/lib/utils";

export function Section({ children, className, dark = false, id, title }) {
  return (
    <section
      id={id}
      aria-labelledby={title && id ? `${id}-title` : undefined}
      className={cn(
        "section-space",
        dark ? "bg-adesa-900 text-adesa-100" : "bg-adesa-950 text-adesa-100",
        className,
      )}
    >
      <div className="site-container">{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, description, centered = false, dark = false, id }) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <header className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      {eyebrow && (
        <p className={cn("mb-4 text-sm font-semibold", dark ? "text-gold-300" : "text-adesa-300")}>
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 id={titleId} className={cn("text-3xl font-medium tracking-[-0.035em] sm:text-4xl lg:text-5xl", dark ? "text-white" : "text-adesa-50")}>
          {title}
        </h2>
      )}
      {description && (
        <p className={cn("mt-5 max-w-[62ch] text-base leading-7 sm:text-lg", dark ? "text-adesa-200" : "text-adesa-300")}>
          {description}
        </p>
      )}
    </header>
  );
}

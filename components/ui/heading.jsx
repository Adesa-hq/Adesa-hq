import { cn } from "@/lib/utils";

export function Heading({ title, subtitle, className }) {
  return (
    <header className={cn("mb-12 md:mb-20", className)}>
      {subtitle && (
        <span
          className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4"
          aria-label={subtitle}
        >
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-tight">
        {title}
      </h2>
    </header>
  );
}

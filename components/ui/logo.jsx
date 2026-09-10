import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({
  variant = "secondary", // "secondary" (emblem badge) | "primary" (full brand mark)
  width,
  height,
  className,
  priority = false,
}) {
  const isPrimary = variant === "primary";
  const src = isPrimary
    ? "/Adesa HQ new look.png"
    : "/Adesa HQ new look secondary.png";

  const defaultWidth = isPrimary ? 160 : 48;
  const defaultHeight = isPrimary ? 48 : 48;

  const w = width ?? defaultWidth;
  const h = height ?? defaultHeight;

  return (
    <figure
      className={cn(
        "relative flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105",
        isPrimary ? "rounded-xl bg-transparent" : "rounded-2xl bg-white/5 border border-white/10 p-1 shadow-[0_0_20px_rgba(198,150,45,0.15)]",
        className
      )}
    >
      <Image
        src={src}
        width={w}
        height={h}
        priority={priority}
        alt="ADESA HQ Logo"
        className={cn(
          "object-contain transition-[opacity,transform] duration-300",
          isPrimary ? "h-auto w-auto max-h-12" : "h-10 w-10 sm:h-11 sm:w-11"
        )}
      />
      <figcaption className="sr-only">ADESA HQ Logo</figcaption>
    </figure>
  );
}

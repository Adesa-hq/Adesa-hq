import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandLoader({ className, label = "Loading ADESA HQ" }) {
  return (
    <div
      className={cn("relative flex flex-col items-center justify-center", className)}
      role="status"
      aria-label={label}
    >
      <div className="brand-loader-glow absolute h-28 w-28 rounded-full bg-gold-400/20 blur-3xl" />
      <Image
        src="/Adesa HQ new look secondary.png"
        width={88}
        height={88}
        alt=""
        className="brand-loader-mark relative h-20 w-20 object-contain"
        priority
      />
      <span className="mt-4 font-serif text-xl tracking-tight text-adesa-50">
        ADESA HQ
      </span>
      <span className="brand-loader-line mt-3 h-px w-24 bg-gold-400" />
      <span className="sr-only">{label}</span>
    </div>
  );
}

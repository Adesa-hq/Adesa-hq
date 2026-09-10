import Image from "next/image";
import { cn } from "@/lib/utils";

const treatments = {
  left: "bg-[linear-gradient(90deg,rgba(2,8,20,0.98)_0%,rgba(2,8,20,0.88)_48%,rgba(2,8,20,0.48)_100%)]",
  right: "bg-[linear-gradient(90deg,rgba(2,8,20,0.58)_0%,rgba(2,8,20,0.9)_55%,rgba(2,8,20,0.98)_100%)]",
  full: "bg-[linear-gradient(180deg,rgba(2,8,20,0.72)_0%,rgba(2,8,20,0.9)_76%,rgba(2,8,20,1)_100%)]",
  document: "bg-[linear-gradient(90deg,rgba(2,8,20,0.97)_0%,rgba(2,8,20,0.9)_62%,rgba(2,8,20,0.72)_100%)]",
};

export function PageHero({
  children,
  className,
  labelledBy,
  backgroundImage,
  backgroundPosition = "object-center",
  imageClassName,
  treatment = "left",
}) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-adesa-950 pb-16 pt-28 text-adesa-100 sm:pb-20 sm:pt-32 lg:pb-24", className)} aria-labelledby={labelledBy}>
      {backgroundImage ? (
        <div className="absolute inset-0 -z-30" data-hero-background="true" aria-hidden="true">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className={cn("object-cover opacity-55 saturate-[0.78]", backgroundPosition, imageClassName)}
          />
        </div>
      ) : null}
      <div className={cn("absolute inset-0 -z-20", treatments[treatment])} aria-hidden="true" />
      <div className="adesa-grid-texture absolute inset-0 -z-10 opacity-20" aria-hidden="true" />
      <div className="site-container relative">{children}</div>
    </section>
  );
}

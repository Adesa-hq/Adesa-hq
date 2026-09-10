import { PageHero } from "@/components/ui/page-hero";

export default function HeroSection() {
  const lastUpdated = new Date();

  return (
    <PageHero
      className="pb-12 sm:pb-14"
      labelledBy="privacy-policy-heading"
      backgroundImage="/legacy-in-motion-story.webp"
      backgroundPosition="object-[78%_42%]"
      imageClassName="opacity-35 grayscale-[0.4]"
      treatment="document"
    >
      <div className="max-w-4xl border-b border-white/12 pb-8 sm:pb-10">
        <p className="mb-4 text-sm font-semibold text-gold-300">Legal</p>
        <h1 id="privacy-policy-heading" className="text-4xl font-medium tracking-[-0.04em] text-adesa-50 sm:text-5xl lg:text-6xl">Privacy Policy</h1>
        <p className="mt-5 text-sm text-adesa-400">
          Last updated <time dateTime={lastUpdated.toISOString()}>{lastUpdated.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</time>
        </p>
      </div>
    </PageHero>
  );
}

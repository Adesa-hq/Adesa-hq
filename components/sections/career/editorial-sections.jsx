import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CAREER_SUBSIDIARIES } from "@/config/brand";
import { EditorialIntro } from "@/components/ui/editorial";

export default function CareerEditorialSections() {
  return (
    <>
      <section className="section-space bg-adesa-900 text-adesa-100" aria-labelledby="career-directory-title">
        <div className="site-container">
          <EditorialIntro
            kicker="Subsidiary opportunities"
            title="Choose where you want to build."
            description="Each operating company manages its own vacancies, requirements, and application process. Select a company below to continue to its careers page."
            titleId="career-directory-title"
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {CAREER_SUBSIDIARIES.map((company) => (
              <article
                key={company.name}
                className="flex h-full flex-col border-t border-white/15 bg-adesa-950 p-7 sm:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="relative h-16 w-20 overflow-hidden bg-white/5 p-2">
                    <Image
                      src={company.image}
                      alt={`${company.name} logo`}
                      fill
                      sizes="80px"
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="max-w-[18ch] text-right text-xs font-semibold leading-5 text-gold-300">
                    {company.sector}
                  </span>
                </div>

                <h2 className="mt-12 text-3xl font-medium text-adesa-50 sm:text-4xl">
                  {company.name}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-adesa-300 sm:text-base">
                  {company.description}
                </p>
                <a
                  href={company.careerHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-gold-400 px-6 text-sm font-semibold text-adesa-950 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-4 focus-visible:ring-offset-adesa-950"
                >
                  View careers at {company.name}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-adesa-950 py-16 text-adesa-100" aria-labelledby="application-process-title">
        <div className="site-container grid gap-6 border-t border-white/12 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-gold-300">Application process</p>
            <h2 id="application-process-title" className="mt-4 text-2xl font-medium text-adesa-50 sm:text-3xl">
              Apply directly to the company.
            </h2>
          </div>
          <p className="max-w-[64ch] text-sm leading-7 text-adesa-300 lg:col-span-7 lg:col-start-6 sm:text-base">
            Review available roles, requirements, and application guidance on each subsidiary’s careers page, then complete your application directly with your selected company.
          </p>
        </div>
      </section>
    </>
  );
}

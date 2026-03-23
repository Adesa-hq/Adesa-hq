"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import GridLine from "../../ui/gridLine";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const milestones = [
  {
    year: "2021",
    title: "Foundation",
    description:
      "ADESA HQ established with a vision to transform African business landscapes",
  },
  {
    year: "2022",
    title: "First Subsidiary",
    description: "Launch of Adesa Media, marking entry into the media sector",
  },
  {
    year: "2024",
    title: "Expansion",
    description:
      "Strategic expansion into financial services with Adesa Capital",
  },
  {
    year: "2025",
    title: "Pan-African Scale",
    description:
      "Operations across 15+ African markets with 5+ operating subsidiaries",
  },
];

export default function TimelineSection() {
  return (
    <section
      className="relative py-32 bg-adesa-900 overflow-hidden"
      aria-labelledby="timeline-heading"
    >
      <div className="absolute inset-0">
        <div
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-adesa-700 rounded-full blur-[180px] opacity-40"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-gold-500 rounded-full blur-[160px] opacity-10"
          aria-hidden="true"
        />
      </div>

      <GridLine />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.header
          className="text-center mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2
            id="timeline-heading"
            className="text-4xl sm:text-5xl font-medium text-adesa-50 mb-6 tracking-tight"
          >
            Our Journey
          </h2>
          <p className="text-lg text-adesa-300 max-w-3xl mx-auto">
            Key milestones in building Africa's premier institutional group
          </p>
        </motion.header>

        <motion.div
          className="relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-gold-400/40 via-gold-500 to-gold-400/40"
            aria-hidden="true"
          />

          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                className={cn(
                  "relative flex items-center",
                  index % 2 === 0
                    ? "flex-col md:flex-row"
                    : "flex-col md:flex-row-reverse",
                )}
              >
                <div
                  className={cn(
                    "w-full md:w-1/2 px-6",
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16",
                  )}
                >
                  <div className="relative bg-adesa-800/70 backdrop-blur-xl border border-adesa-700 rounded-2xl p-8 shadow-[0_0_80px_rgba(0,0,0,0.4)] hover:border-gold-400/40 transition-all duration-500">
                    <time
                      className="text-sm tracking-widest text-gold-400 uppercase block"
                      dateTime={milestone.year}
                    >
                      {milestone.year}
                    </time>

                    <h3 className="text-2xl text-adesa-50 mt-3 font-medium">
                      {milestone.title}
                    </h3>

                    <p className="text-adesa-300 mt-4 leading-relaxed">
                      {milestone.description}
                    </p>

                    <div
                      className="mt-6 w-12 h-[2px] bg-gold-400/60"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div
                  className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-6 h-6 rounded-full bg-gold-400 shadow-[0_0_30px_rgba(212,160,23,0.6)] border-4 border-adesa-900" />
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

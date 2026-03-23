"use client";

import GridLine from "@/components/ui/gridLine";
import { motion } from "framer-motion";

export default function JobListings() {
  const jobs = [
    {
      title: "Energy Analyst",
      location: "Lagos",
      description:
        "We are looking for an energy analyst to help us analyze market trends and sustainability opportunities.",
    },
    {
      title: "Project Manager",
      location: "Lagos",
      description:
        "Join our team to manage projects that drive sustainable fuel solutions for Nigeria.",
    },
    {
      title: "Sustainability Expert",
      location: "Remote",
      description:
        "Seeking a sustainability expert to help integrate sustainable practices into our business operations.",
    },
  ];

  return (
    <section
      id="open-positions"
      className="relative py-16 sm:py-24 bg-adesa-800 text-adesa-50 overflow-hidden"
    >
      <GridLine />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
          Open Positions
        </h2>
        <p className="text-adesa-200 text-base sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-16">
          Find a position that fits your skills and help us transform the energy
          industry.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative bg-adesa-700 rounded-[28px] p-6 sm:p-8 shadow-2xl hover:bg-adesa-600 overflow-hidden transition-all cursor-pointer"
            >
              {/* Glow halo */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-gold-400/30 to-gold-300/20 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl" />

              <h3 className="text-xl sm:text-2xl font-semibold text-adesa-50 mb-1 sm:mb-2 relative z-10">
                {job.title}
              </h3>
              <p className="text-adesa-300 text-sm sm:text-base mb-2 sm:mb-4 relative z-10">
                {job.location}
              </p>
              <p className="text-adesa-200 text-sm sm:text-base mb-4 sm:mb-6 relative z-10">
                {job.description}
              </p>

              {/* Apply Now button */}
              <a
                href={`mailto:career@adesahq.com?subject=Application for ${job.title}&body=Hello, I am interested in applying for the ${job.title} position. My name is [Your Name] and I believe my skills match the requirements. Please find my resume attached.`}
                className="relative z-10 inline-block px-5 sm:px-6 py-2 sm:py-2.5 bg-gold-500 hover:bg-gold-400 text-adesa-900 rounded-full font-medium shadow-md transition-all text-sm sm:text-base"
              >
                Apply Now
              </a>

              {/* Animated accent */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-gold-500/20 rounded-full blur-2xl"
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

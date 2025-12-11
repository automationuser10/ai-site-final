"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NumberFlow from "@number-flow/react";

const stats = [
  { value: 200, suffix: "+", label: "Businesses Automated" },
  { value: 100, suffix: "+", label: "Hours Saved Monthly" },
  { value: 50, suffix: "%", label: "Cost Reduction" },
];

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-white py-12 sm:py-16 -mt-16 sm:mt-0">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-black mb-2">
                {inView && (
                  <NumberFlow
                    value={stat.value}
                    format={{ notation: "compact" }}
                    transformTiming={{ duration: 1000, easing: "ease-out" }}
                  />
                )}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm sm:text-base text-black font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
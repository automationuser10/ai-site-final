"use client";

import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";

const stats = [
  { value: 30, label: "Days Partner Guarantee", suffix: "" },
  { value: 100, label: "Businesses Automated", suffix: "+" },
  { value: 40, label: "Hours Saved Per Week", suffix: "+" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full sm:w-auto"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff7a3c] to-[#ffce81] mb-2">
                <NumberFlow
                  value={stat.value}
                  format={{ notation: "compact" }}
                  transformTiming={{ duration: 1000, easing: "ease-out" }}
                />
                {stat.suffix}
              </div>
              <p className="text-sm sm:text-base text-black font-medium max-w-[200px] sm:max-w-none">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
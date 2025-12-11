"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "30 Days", sublabel: "To Full Automation" },
  { label: "<48hr", sublabel: "Response Time" },
  { label: "+100hrs", sublabel: "Saved Monthly" },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full bg-white pt-8 sm:pt-16 md:pt-20 pb-16 sm:pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff7a3c] to-[#ffce81] mb-2">
                {stat.label}
              </div>
              <div className="text-sm sm:text-base text-black font-medium">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
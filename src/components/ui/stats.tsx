"use client";

import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="w-full max-w-4xl mx-auto px-4 py-8"
    >
      {/* Mobile: Vertical Layout */}
      <div className="flex flex-col gap-6 md:hidden">
        {/* 30-Day Partner Guarantee */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl border border-[#ff9a00]/20 bg-white/80 backdrop-blur-sm p-6 shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/[0.03] via-transparent to-orange-400/[0.03]" />
          <div className="relative z-10 text-center">
            <div className="text-5xl font-bold mb-2 text-[#ff7a3c]">
              <NumberFlow
                value={isVisible ? 30 : 0}
                format={{ notation: "standard" }}
              />
            </div>
            <p className="text-sm font-medium text-black/80">
              Day Partner Guarantee
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-4"
        >
          {/* Hours Saved */}
          <div className="relative overflow-hidden rounded-2xl border border-[#ff9a00]/20 bg-white/80 backdrop-blur-sm p-6 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/[0.03] via-transparent to-orange-400/[0.03]" />
            <div className="relative z-10 text-center">
              <div className="text-4xl font-bold mb-2 text-[#ff7a3c]">
                <NumberFlow
                  value={isVisible ? 100 : 0}
                  format={{ notation: "standard" }}
                />
                <span className="text-2xl">+</span>
              </div>
              <p className="text-xs font-medium text-black/80">
                Hours Saved Monthly
              </p>
            </div>
          </div>

          {/* Businesses Automated */}
          <div className="relative overflow-hidden rounded-2xl border border-[#ff9a00]/20 bg-white/80 backdrop-blur-sm p-6 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/[0.03] via-transparent to-orange-400/[0.03]" />
            <div className="relative z-10 text-center">
              <div className="text-4xl font-bold mb-2 text-[#ff7a3c]">
                <NumberFlow
                  value={isVisible ? 200 : 0}
                  format={{ notation: "standard" }}
                />
                <span className="text-2xl">+</span>
              </div>
              <p className="text-xs font-medium text-black/80">
                Businesses Automated
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop: Original Horizontal Layout */}
      <motion.div
        variants={itemVariants}
        className="hidden md:flex items-center gap-6"
      >
        {/* 30-Day Partner Guarantee */}
        <div className="relative overflow-hidden rounded-2xl border border-[#ff9a00]/20 bg-white/80 backdrop-blur-sm p-6 shadow-lg flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/[0.03] via-transparent to-orange-400/[0.03]" />
          <div className="relative z-10 text-center">
            <div className="text-5xl font-bold mb-2 text-[#ff7a3c]">
              <NumberFlow
                value={isVisible ? 30 : 0}
                format={{ notation: "standard" }}
              />
            </div>
            <p className="text-sm font-medium text-black/80">
              Day Partner Guarantee
            </p>
          </div>
        </div>

        {/* Stats Container */}
        <div className="flex items-center gap-6 flex-1">
          {/* Hours Saved */}
          <div className="relative overflow-hidden rounded-2xl border border-[#ff9a00]/20 bg-white/80 backdrop-blur-sm p-6 shadow-lg flex-1">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/[0.03] via-transparent to-orange-400/[0.03]" />
            <div className="relative z-10 text-center">
              <div className="text-4xl font-bold mb-2 text-[#ff7a3c]">
                <NumberFlow
                  value={isVisible ? 100 : 0}
                  format={{ notation: "standard" }}
                />
                <span className="text-2xl">+</span>
              </div>
              <p className="text-xs font-medium text-black/80">
                Hours Saved Monthly
              </p>
            </div>
          </div>

          {/* Businesses Automated */}
          <div className="relative overflow-hidden rounded-2xl border border-[#ff9a00]/20 bg-white/80 backdrop-blur-sm p-6 shadow-lg flex-1">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/[0.03] via-transparent to-orange-400/[0.03]" />
            <div className="relative z-10 text-center">
              <div className="text-4xl font-bold mb-2 text-[#ff7a3c]">
                <NumberFlow
                  value={isVisible ? 200 : 0}
                  format={{ notation: "standard" }}
                />
                <span className="text-2xl">+</span>
              </div>
              <p className="text-xs font-medium text-black/80">
                Businesses Automated
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
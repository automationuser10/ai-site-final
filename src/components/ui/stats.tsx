"use client";

import { motion } from "framer-motion";
import { Shield, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: "30 Days",
    label: "Partner Guarantee",
  },
  {
    icon: Clock,
    value: "2-3 Weeks",
    label: "To Go Live",
  },
  {
    icon: TrendingUp,
    value: "10X ROI",
    label: "Average Return",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row md:justify-center md:items-center gap-6 md:gap-12 lg:gap-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-4 justify-center"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#ff9a00]" />
                </div>
                <div className="text-left">
                  <p className="text-lg md:text-2xl font-bold text-black">{stat.value}</p>
                  <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
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
    label: "Average Setup Time",
  },
  {
    icon: TrendingUp,
    value: "40%+",
    label: "Time Saved on Average",
  },
];

export default function StatsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="hidden md:block w-full max-w-5xl mx-auto px-4 mt-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-orange-200/50 hover:border-orange-300/70 transition-all duration-300 hover:shadow-lg"
          >
            <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-orange-100 to-orange-50">
              <stat.icon className="w-6 h-6 text-[#ff9a00]" />
            </div>
            <div className="text-2xl font-bold text-black mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-black/70">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
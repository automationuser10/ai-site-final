"use client";

import { motion } from "framer-motion";
import { Shield, Users, Zap } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: "30 Days",
    label: "Partner Guarantee",
  },
  {
    icon: Users,
    value: "200+",
    label: "Businesses Automated",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "AI Support",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-[#ff9a00]" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold text-black">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
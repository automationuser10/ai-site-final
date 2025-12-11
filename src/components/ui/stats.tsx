"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StatProps {
  label: string;
  value: string;
  suffix?: string;
  prefix?: string;
  description?: string;
  className?: string;
}

export const Stat = ({
  label,
  value,
  suffix,
  prefix,
  description,
  className,
}: StatProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const endValue = parseInt(value.replace(/[^0-9]/g, ""));
            let currentValue = 0;
            const increment = endValue / 50;
            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= endValue) {
                currentValue = endValue;
                clearInterval(timer);
              }
              setDisplayValue(Math.floor(currentValue).toString());
            }, 30);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [value, hasAnimated]);

  return (
    <div ref={statRef} className={cn("relative", className)}>
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
        {prefix}
        {hasAnimated ? value : displayValue}
        {suffix}
      </div>
      <div className="text-sm sm:text-base text-black mt-2">{label}</div>
      {description && (
        <div className="text-xs sm:text-sm text-black/60 mt-1">{description}</div>
      )}
    </div>
  );
};

export interface StatsProps {
  stats: StatProps[];
  className?: string;
}

export const Stats = ({ stats, className }: StatsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative w-full py-12 sm:py-16 md:py-20", className)}>
      {/* Moving line animation - visible on all screen sizes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0,100 Q 250,50 500,100 T 1000,100"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 0,100 Q 250,150 500,100 T 1000,100"
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff9a00" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ff7a3c" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff9a00" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Stat {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const StatsSection = () => {
  const stats: StatProps[] = [
    {
      label: "Businesses Automated",
      value: "200+",
      description: "Across various industries",
    },
    {
      label: "Hours Saved Monthly",
      value: "10,000+",
      description: "For our clients",
    },
    {
      label: "ROI Achieved",
      value: "300%",
      description: "Average return on investment",
    },
    {
      label: "Support Response Time",
      value: "< 2min",
      description: "Average response time",
    },
  ];

  return <Stats stats={stats} />;
};

export default StatsSection;
"use client";

import { motion, Variants } from "framer-motion";
import { Circle, Navigation, Menu } from "lucide-react";
import * as React from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import StatsSection from "@/components/ui/stats";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

function cn(...inputs: (string | undefined | null | boolean)[]) {
    return inputs.filter(Boolean).join(' ');
}

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                    rotate: [rotate, rotate + 5, rotate],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-black/[0.08]",
                        "shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Put Everything on Autopilot — Save Hours and Eliminate Extra Hires",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
            },
        }),
    };

    return (
        <div className="relative min-h-[85vh] sm:min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-white pt-20 md:pt-24">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/[0.03] via-transparent to-orange-400/[0.03] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-[#ff9a00]/[0.20]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-orange-400/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-[#ff9a00]/[0.20]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-orange-400/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-[#ff9a00]/[0.20]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight mt-8 md:mt-12">
                            <span className="text-black">
                                Put Everything on Autopilot —{" "}
                            </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>
                                Save Hours and Eliminate Extra Hires
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-900"
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-black mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                            We step into your business, find every slow, annoying, repetitive bottlenecks, and turn them into a clean, fast, ruthless automated systems. 
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mt-8 flex justify-center"
                    >
                        <RainbowButton>
                            Book a Free Consultation
                        </RainbowButton>
                    </motion.div>

                    <motion.div
                        custom={4}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mt-12 w-full max-w-3xl"
                    >
                        <HeroVideoDialog
                            videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            thumbnailSrc="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1920"
                            thumbnailAlt="Video Sales Letter"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80 pointer-events-none" />
        </div>
    );
}

const navItems = [
  { name: "Solutions", href: "#solutions" },
  { name: "Results", href: "#testimonials" },
];

const EXPAND_SCROLL_THRESHOLD = 40;

const containerVariants: Variants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      y: { type: "spring" as const, damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem",
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
      when: "afterChildren" as const,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const logoVariants: Variants = {
  expanded: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring" as const, damping: 15 } },
  collapsed: { opacity: 0, x: -25, rotate: -180, transition: { duration: 0.3 } },
};

const itemVariants: Variants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring" as const, damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const collapsedIconVariants: Variants = {
    expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
    collapsed: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 300,
        delay: 0.15,
      }
    },
}

function AnimatedNavFramer() {
  const [isExpanded, setExpanded] = React.useState(true);
  const { scrollY } = typeof window !== 'undefined' ? { scrollY: { on: () => {}, off: () => {} } as any } : { scrollY: { on: () => {}, off: () => {} } as any };
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const latest = window.scrollY;
      const previous = lastScrollY.current;

      if (isExpanded && latest > previous && latest > 150) {
        setExpanded(false);
        scrollPositionOnCollapse.current = latest;
      }
      else if (!isExpanded && latest < previous && (scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD)) {
        setExpanded(true);
      }

      lastScrollY.current = latest;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.stopPropagation();

    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="fixed top-2 md:top-3 left-1/2 -translate-x-1/2 z-50 px-4 sm:px-0">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={cn(
          "flex items-center overflow-hidden rounded-full border border-[#ff9a00]/20 bg-white/80 shadow-lg backdrop-blur-sm",
          "h-14 sm:h-12",
          "min-w-[220px] sm:min-w-0",
          !isExpanded && "cursor-pointer justify-center !min-w-[3.5rem] !h-14"
        )}
      >
        <motion.div
          variants={logoVariants}
          className="flex-shrink-0 flex items-center font-semibold pl-3 sm:pl-3 pr-2 sm:pr-1"
        >
          <img
            src="/Untitled design (5) copy copy copy copy copy.png"
            alt="Company Logo"
            className="h-7 sm:h-7 w-auto object-contain"
          />
        </motion.div>

        <motion.div
          className={cn(
            "flex items-center gap-1 sm:gap-1 pr-3 sm:pr-3",
            !isExpanded && "pointer-events-none"
          )}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-sm font-medium text-black hover:text-[#ff9a00] transition-colors px-2 sm:px-2.5 py-1 whitespace-nowrap"
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
            className="text-[#ff9a00]"
          >
            <Menu className="h-6 w-6" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}

export default function HeroSection() {
    return (
        <>
            <AnimatedNavFramer />
            <div className="flex flex-col text-center items-center justify-center">
                <HeroGeometric
                    title1="Put Everything on Autopilot — Save Hours and Eliminate Extra Hires"
                    title2="" />
                <StatsSection />
            </div>
        </>
    )
}
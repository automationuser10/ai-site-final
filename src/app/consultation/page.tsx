"use client";

import DemoFooter from "@/components/sections/demo-footer";
import { Menu } from "lucide-react";
import { motion, Variants } from "framer-motion";
import * as React from "react";
import Link from "next/link";

function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(' ');
}

const navItems = [
  { name: "Home", href: "/" },
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
    width: "3.5rem",
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
          "h-14 sm:h-14",
          "min-w-[240px] sm:min-w-0",
          !isExpanded && "cursor-pointer justify-center !min-w-[3.5rem] !h-14"
        )}
      >
        <motion.div
          variants={logoVariants}
          className="flex-shrink-0 flex items-center font-semibold pl-3 sm:pl-3 pr-2 sm:pr-2 py-1"
        >
          <Link href="/">
            <img
              src="https://hifio5z61s.ufs.sh/f/UmL4PiAnirXaJkwbh1jbhemILCVWvs4gOpZcoQnMT1923lu0"
              alt="ADYA AI Logo"
              className="h-12 sm:h-12 w-auto object-contain cursor-pointer"
            />
          </Link>
        </motion.div>

        <motion.div
          className={cn(
            "flex items-center gap-1 sm:gap-1 pr-4 sm:pr-4",
            !isExpanded && "pointer-events-none"
          )}
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-sm font-medium text-black hover:text-[#ff9a00] transition-colors px-3 sm:px-3 py-1 whitespace-nowrap"
              >
                {item.name}
              </Link>
            </motion.div>
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

export default function ConsultationPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadError, setLoadError] = React.useState(false);
  const initAttempted = React.useRef(false);

  React.useEffect(() => {
    // Prevent double initialization in development mode
    if (initAttempted.current) return;
    initAttempted.current = true;

    const initializeCal = () => {
      try {
        if (typeof window === 'undefined') return;

        // Clear any existing Cal instance
        if ((window as any).Cal) {
          delete (window as any).Cal;
        }

        // Initialize Cal.com
        (function (C: any, A: string, L: string) {
          let p = function (a: any, ar: any) { a.q.push(ar); };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              const script = d.createElement("script");
              script.src = A;
              script.async = true;
              script.onload = () => {
                setIsLoading(false);
              };
              script.onerror = () => {
                setLoadError(true);
                setIsLoading(false);
              };
              d.head.appendChild(script);
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () { p(api, arguments); };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar);
              return;
            }
            p(cal, ar);
          };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        // Wait a bit for script to load before initializing
        setTimeout(() => {
          if ((window as any).Cal) {
            (window as any).Cal("init", "strategy-call", { origin: "https://app.cal.com" });

            (window as any).Cal.ns["strategy-call"]("inline", {
              elementOrSelector: "#my-cal-inline-strategy-call",
              config: { "layout": "month_view" },
              calLink: "githmi-official-dyxxn3/strategy-call",
            });

            (window as any).Cal.ns["strategy-call"]("ui", { 
              "hideEventTypeDetails": false, 
              "layout": "month_view" 
            });
          }
        }, 500);
      } catch (error) {
        console.error("Error initializing Cal.com:", error);
        setLoadError(true);
        setIsLoading(false);
      }
    };

    initializeCal();

    // Cleanup function
    return () => {
      // Remove Cal script if it exists
      const calScripts = document.querySelectorAll('script[src*="cal.com"]');
      calScripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <>
      <AnimatedNavFramer />
      <main className="min-h-screen bg-white pt-20 pb-16">
        <section className="relative overflow-hidden bg-bg-primary py-8">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/[0.03] via-transparent to-orange-400/[0.03] blur-3xl" />
          
          <div className="relative container">
            {isLoading && !loadError && (
              <div className="flex items-center justify-center" style={{ height: '800px' }}>
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff9a00]"></div>
                  <p className="mt-4 text-black">Loading calendar...</p>
                </div>
              </div>
            )}
            
            {loadError && (
              <div className="flex items-center justify-center" style={{ height: '800px' }}>
                <div className="text-center">
                  <p className="text-red-600 mb-4">Failed to load calendar. Please refresh the page.</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="px-6 py-2 bg-[#ff9a00] text-white rounded-lg hover:bg-[#ff7a3c] transition-colors"
                  >
                    Refresh Page
                  </button>
                </div>
              </div>
            )}
            
            <div 
              style={{ 
                width: '100%', 
                height: '800px', 
                overflow: 'scroll',
                display: isLoading || loadError ? 'none' : 'block'
              }} 
              id="my-cal-inline-strategy-call"
            ></div>
          </div>
        </section>
      </main>
      <DemoFooter />
    </>
  );
}
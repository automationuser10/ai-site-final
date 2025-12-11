"use client";

import DemoFooter from "@/components/sections/demo-footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Users, Menu } from "lucide-react";
import { motion, Variants } from "framer-motion";
import * as React from "react";
import Link from "next/link";

function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(' ');
}

const navItems = [
  { name: "Solutions", href: "/#solutions" },
  { name: "Results", href: "/#testimonials" },
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
    // Let Next.js Link handle navigation
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation form submitted:", { name, email, company, message });
  };

  return (
    <>
      <AnimatedNavFramer />
      <main className="min-h-screen bg-white pt-20 pb-16">
        <section className="relative overflow-hidden bg-bg-primary py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/[0.03] via-transparent to-orange-400/[0.03] blur-3xl" />
          
          <div className="relative container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              {/* Left side - Info */}
              <div className="flex flex-col gap-8">
                <div>
                  <p className="overline mb-4" style={{ color: '#ff9a00' }}>
                    [ BOOK A CONSULTATION ]
                  </p>
                  <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-6">
                    Let's Build Your{" "}
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>
                      Automation System
                    </span>
                  </h1>
                  <p className="text-lg text-black leading-relaxed">
                    Schedule a free 30-minute consultation with our team. We'll analyze your current workflows, identify automation opportunities, and show you exactly how we can save you time and money.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-[#ff9a00]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Free Strategy Session</h3>
                      <p className="text-black">
                        No sales pitch. Just a genuine conversation about your business challenges and how automation can help.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#ff9a00]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Quick Turnaround</h3>
                      <p className="text-black">
                        We'll respond within 24 hours and schedule a call at your convenience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#ff9a00]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Expert Guidance</h3>
                      <p className="text-black">
                        Talk directly with our automation specialists who have helped 200+ businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl border border-border shadow-xl">
                <h2 className="text-2xl font-semibold text-black mb-6">Get Started Today</h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-text-secondary">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-input border-border rounded-lg h-14 px-4 text-base placeholder:text-muted"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-text-secondary">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-input border-border rounded-lg h-14 px-4 text-base placeholder:text-muted"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-text-secondary">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="bg-input border-border rounded-lg h-14 px-4 text-base placeholder:text-muted"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-text-secondary">Tell us about your business *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What challenges are you facing? What processes take up most of your time?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-input border-border rounded-lg min-h-[128px] p-4 text-base placeholder:text-muted"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark transition-colors text-base font-medium rounded-lg px-8 h-auto w-full mt-4"
                  >
                    Book Free Consultation
                  </Button>

                  <p className="text-xs text-text-muted text-center">
                    By submitting, you agree to our Terms and Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DemoFooter />
    </>
  );
}
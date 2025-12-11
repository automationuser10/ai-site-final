"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/#solutions", label: "Solutions" },
  { href: "#testimonials", label: "Results" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) {
      return pathname === "/";
    }
    if (href.startsWith("/")) {
      return pathname === href || pathname.startsWith(href + "/");
    }
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-6">
      <nav className="mx-auto max-w-7xl">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-primary-light transition-colors flex items-center gap-2"
            aria-label="Home"
          >
            <div className="flex items-center">
              <img
                src="/Untitled design (5) copy.png"
                alt="Company Logo"
                className="h-10 w-auto"
              />
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-white bg-white/10"
                    : "text-text-secondary hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#demo"
              className="ml-4 px-6 py-2.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary-light transition-all duration-200 shadow-lg hover:shadow-glow-blue"
            >
              Start For Free
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-6 bg-bg-card/95 backdrop-blur-xl rounded-2xl border border-white/10 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-8 py-3.5 rounded-lg text-base font-medium transition-all w-full ${
                    isActive(item.href)
                      ? "text-white bg-white/10"
                      : "text-text-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-white/10">
                <Link
                  href="/#demo"
                  className="block text-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-light transition-all duration-200"
                >
                  Start For Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

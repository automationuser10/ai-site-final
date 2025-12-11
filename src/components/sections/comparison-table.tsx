"use client";

import * as React from "react";
import { X, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ComparisonItem {
  text: string;
  icon?: "check" | "x";
}

interface ComparisonProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  leftTitle?: string;
  rightTitle?: string;
  leftSubtitle?: string;
  rightSubtitle?: string;
  leftItems?: ComparisonItem[];
  rightItems?: ComparisonItem[];
  leftImage?: string;
  rightImage?: string;
}

function ComparisonFeature({
  badge = "From Chaos to Control",
  title = "Manual Work = Lost Hours",
  subtitle = "We replace time-draining, repetitive work with AI systems that operate 24/7 Faster, smarter, and without errors.",
  leftTitle = "Manual, slow, error-prone process",
  rightTitle = "Fast, automated, and user-friendly",
  leftSubtitle = "Problem",
  rightSubtitle = "Solution",
  leftItems = [
    { text: "Manual data capture and processing", icon: "x" },
    { text: "Data fragmented across apps", icon: "x" },
    { text: "Reports built manually in spreadsheets", icon: "x" },
    { text: "ERP is unusable – no way to act on your data", icon: "x" },
  ],
  rightItems = [
    { text: "AI Agents handle data in the background", icon: "check" },
    { text: "Systems are fully connected and in sync", icon: "check" },
    { text: "Reports auto-generated through workflows", icon: "check" },
    { text: "Unified dashboards with real-time visibility", icon: "check" },
  ],
  leftImage,
  rightImage,
}: ComparisonProps) {
  return (
    <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
      {/* Background radial gradient for the glow effect */}
      <div
        className="absolute inset-x-0 top-[-10rem] -z-0 h-[60rem] overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(156, 163, 175, 0.08), transparent 80%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
            <Badge className="mx-auto text-white border-0 px-6 py-2 text-sm font-semibold" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>
              {badge}
            </Badge>
            <h2 className="text-4xl md:text-6xl tracking-tight font-bold text-black">
              {title}
            </h2>
            <p className="text-xl md:text-2xl text-black">{subtitle}</p>
          </div>

          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-2 gap-8 pt-8 max-w-7xl mx-auto w-full">
            {/* Problem Card */}
            <div className="flex flex-col gap-8 p-10 md:p-12 rounded-3xl border-2 border-orange-200 bg-white shadow-xl">
              <div className="flex flex-col gap-4">
                <Badge variant="outline" className="w-fit text-red-600 border-red-300 bg-red-50 px-4 py-1.5 text-sm font-semibold">
                  {leftSubtitle}
                </Badge>
                {leftImage && (
                  <div className="aspect-video w-full rounded-2xl overflow-hidden bg-orange-100 mb-4">
                    <img
                      src={leftImage}
                      alt="Problem"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
                {leftTitle}
              </h3>
              <div className="flex flex-col gap-5">
                {leftItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center ring-2 ring-red-200">
                        <X className="w-4 h-4 text-red-600 stroke-[3]" />
                      </div>
                    </div>
                    <span className="text-base md:text-lg text-black leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution Card */}
            <div className="flex flex-col gap-8 p-10 md:p-12 rounded-3xl border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50/50 shadow-xl">
              <div className="flex flex-col gap-4">
                <Badge variant="outline" className="w-fit text-green-700 border-green-300 bg-green-50 px-4 py-1.5 text-sm font-semibold">
                  {rightSubtitle}
                </Badge>
                {rightImage && (
                  <div className="aspect-video w-full rounded-2xl overflow-hidden bg-orange-100 mb-4">
                    <img
                      src={rightImage}
                      alt="Solution"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent leading-tight">
                {rightTitle}
              </h3>
              <div className="flex flex-col gap-5">
                {rightItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center ring-2 ring-green-200">
                        <Check className="w-4 h-4 text-green-700 stroke-[3]" />
                      </div>
                    </div>
                    <span className="text-base md:text-lg text-black leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ComparisonTable() {
  return <ComparisonFeature />;
}

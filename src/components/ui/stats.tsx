"use client";

import { Card } from '@/components/ui/card';
import { MovingBorder } from '@/components/ui/moving-border';

type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { value: '30 Days', label: 'Partner Gurantee' },
  { value: '< 48hr', label: 'System Diagnosis & Proposal' },
  { value: '+100hrs', label: 'Saved for Businesses & Teams' },
];

export default function StatsSection() {
  return (
    <>
      {/* Mobile: Vertical Cards */}
      <section className="bg-white py-4 block md:hidden">
        <div className="mx-auto w-full max-w-md px-4 sm:px-6">
          <Card
            role="list"
            aria-label="Key product stats"
            className="flex flex-col gap-0 p-3 divide-y border-orange-200"
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                role="listitem"
                className="flex flex-col items-center justify-center px-3 py-4 text-center"
              >
                <div className="text-black font-semibold tracking-tight whitespace-nowrap text-[2.5rem] leading-none">
                  {s.value}
                </div>
                <p className="text-black mt-1.5 text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </Card>
        </div>
      </section>

      {/* Desktop: Original Horizontal Bar with Moving Border */}
      <section className="hidden md:block bg-white py-6 md:py-8">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="relative p-[1px] overflow-hidden rounded-lg">
            <div className="absolute inset-0" style={{ borderRadius: 'calc(0.5rem * 0.96)' }}>
              <MovingBorder duration={6000} rx="5%" ry="5%">
                <div className="h-40 w-60 opacity-[0.9] bg-[radial-gradient(#ff9a00_30%,transparent_40%)]" />
              </MovingBorder>
            </div>
            <Card
              role="list"
              aria-label="Key product stats"
              className={[
                "relative grid grid-cols-3",
                "gap-2 sm:gap-4 md:gap-6",
                "p-3 sm:p-4 md:p-6",
                "divide-x",
              ].join(' ')}
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  role="listitem"
                  className="flex flex-col items-center justify-center px-1 sm:px-2 md:px-3 text-center"
                >
                  <div
                    className={[
                      "text-black font-semibold tracking-tight whitespace-nowrap",
                      "text-xl sm:text-2xl md:text-[clamp(1.75rem,5vw,2.5rem)] leading-none",
                    ].join(' ')}
                  >
                    {s.value}
                  </div>
                  <p className="text-black mt-2 text-xs sm:text-sm md:text-base">
                    {s.label}
                  </p>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
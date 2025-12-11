"use client";

import { Card } from '@/components/ui/card';

type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { value: '200+', label: 'Businesses Automated' },
  { value: '10X', label: 'Average ROI' },
  { value: '24/7', label: 'AI Support' },
];

export default function StatsSection() {
  return (
    <>
      {/* Mobile: Vertical Cards */}
      <section className="bg-white py-8 block md:hidden">
        <div className="mx-auto w-full max-w-md px-4 sm:px-6">
          <Card
            role="list"
            aria-label="Key product stats"
            className="flex flex-col gap-0 p-4 sm:p-6 divide-y border-orange-200"
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                role="listitem"
                className="flex flex-col items-center justify-center px-4 py-6 text-center"
              >
                <div className="text-black font-semibold tracking-tight whitespace-nowrap text-[clamp(2rem,6vw,3rem)] leading-none">
                  {s.value}
                </div>
                <p className="text-black mt-2 text-sm sm:text-base">
                  {s.label}
                </p>
              </div>
            ))}
          </Card>
        </div>
      </section>

      {/* Desktop: Original Horizontal Bar */}
      <section className="hidden md:block bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-black">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
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
    <section className="bg-white py-8 md:py-12 block md:hidden">
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
  );
}
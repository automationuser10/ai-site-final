"use client";

import { Card } from '@/components/ui/card'

type Stat = {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '100+', label: 'Hours Saved Monthly' },
  { value: '3X', label: 'Faster Operations' },
  { value: '24/7', label: 'AI Automation' },
]

export default function StatsSection() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 border-orange-200 bg-white/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-orange-400 hover:shadow-lg"
            >
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-base font-medium text-black">
                  {stat.label}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
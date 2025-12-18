"use client";

import { Card } from '@/components/ui/card'
import { MovingBorder } from '@/components/ui/moving-border'

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
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-[1px]"
            >
              <div className="absolute inset-0">
                <MovingBorder duration={3000} rx="30%" ry="30%">
                  <div className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(#ff9a00_40%,transparent_60%)]" />
                </MovingBorder>
              </div>
              <Card className="relative border-0 bg-white/90 p-8 transition-all duration-300">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                    {stat.value}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-black">
                    {stat.label}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
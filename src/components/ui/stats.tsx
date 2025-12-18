"use client";
import { Card } from '@/components/ui/card'
import { MovingBorder } from '@/components/ui/moving-border'

type Stat = {
  value: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    value: '10X',
    label: 'Faster Operations',
    description: 'Automate repetitive tasks and speed up your workflows'
  },
  {
    value: '24/7',
    label: 'Always Available',
    description: 'AI systems that work around the clock without breaks'
  },
  {
    value: '90%',
    label: 'Cost Reduction',
    description: 'Eliminate manual work and reduce operational costs'
  }
]

export default function StatsSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <MovingBorder duration={3000} rx="30%" ry="30%">
                <Card className="relative overflow-hidden border-2 border-orange-200 bg-white/50 backdrop-blur-sm p-6 transition-all hover:shadow-lg">
                  <div className="space-y-2">
                    <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                      {stat.value}
                    </h3>
                    <p className="text-lg font-semibold text-black">
                      {stat.label}
                    </p>
                    <p className="text-sm text-black/70">
                      {stat.description}
                    </p>
                  </div>
                </Card>
              </MovingBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
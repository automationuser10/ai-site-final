"use client";
import { Card } from '@/components/ui/card'
import { MovingBorder } from '@/components/ui/moving-border'
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { useRef } from "react"

type Stat = {
  value: string
  label: string
}

const MOBILE_STATS: Stat[] = [
  { value: '30 Days', label: 'Partner Gurantee' },
  { value: '< 48hr', label: 'System Diagnosis & Proposal' },
  { value: '+100hrs', label: 'Saved for Businesses & Teams' },
]

const DESKTOP_STATS: Stat[] = [
  { value: '30 Days', label: 'Partner Gurantee' },
  { value: '< 48hr', label: 'System Diagnosis & Proposal' },
  { value: '+100hrs', label: 'Saved for Businesses & Teams' },
]

const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
  [key: string]: any
}) => {
  const pathRef = useRef<any>(null)
  const progress = useMotionValue<number>(0)

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMillisecond = length / duration
      progress.set((time * pxPerMillisecond) % length)
    }
  })

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  )
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  )

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  )
}

export default function StatsSection() {
  return (
    <>
      {/* Mobile Version */}
      <section className="md:hidden bg-white py-12">
        <div className="mx-auto w-full max-w-md px-4 sm:px-6">
          <div className="relative p-[2px] overflow-hidden rounded-2xl">
            <MovingBorder duration={6000} rx="10%" ry="10%">
              <div className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(#ff9a00_40%,transparent_60%)]" />
            </MovingBorder>
            
            <Card
              role="list"
              aria-label="Key product stats"
              className={[
                // Always vertical stack
                "flex flex-col",
                // No gaps, dividers handle spacing
                "gap-0",
                "p-4 sm:p-6",
                // Horizontal dividers between items
                "divide-y",
                "relative z-10",
              ].join(' ')}
            >
              {MOBILE_STATS.map((s, i) => (
                <div
                  key={i}
                  role="listitem"
                  className="flex flex-col items-center justify-center px-4 py-6 text-center"
                >
                  <div
                    className={[
                      "text-black font-semibold tracking-tight whitespace-nowrap",
                      // Fluid font size
                      "text-[clamp(2rem,6vw,3rem)] leading-none",
                    ].join(' ')}
                  >
                    {s.value}
                  </div>
                  <p className="text-black mt-2 text-sm sm:text-base">
                    {s.label}
                  </p>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </section>

      {/* Desktop Version */}
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
              {DESKTOP_STATS.map((s, i) => (
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
  )
}
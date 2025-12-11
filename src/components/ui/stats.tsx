import { Card } from '@/components/ui/card'
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

const STATS: Stat[] = [
  { value: '200+', label: 'Businesses Automated' },
  { value: '10X', label: 'ROI Achieved' },
  { value: '24/7', label: 'AI Support' },
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
    <section className="bg-white py-12 md:py-20">
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
          {STATS.map((s, i) => (
            <div
              key={i}
              role="listitem"
              className="flex flex-col items-center justify-center px-4 py-6 text-center"
            >
              <div
                className={[
                  "text-foreground font-semibold tracking-tight whitespace-nowrap",
                  // Fluid font size
                  "text-[clamp(2rem,6vw,3rem)] leading-none",
                ].join(' ')}
              >
                {s.value}
              </div>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                {s.label}
              </p>
            </div>
          ))}
          </Card>
        </div>
      </div>
    </section>
  )
}
"use client"

import { cn } from "@/lib/utils"

interface GlowProps {
  variant?: "top" | "bottom" | "center"
  className?: string
}

export function Glow({ variant = "center", className }: GlowProps) {
  const variantStyles = {
    top: "top-0",
    bottom: "bottom-0",
    center: "top-1/2 -translate-y-1/2"
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 -translate-x-1/2",
        variantStyles[variant],
        className
      )}
    >
      <div
        className="h-[600px] w-[1000px] rounded-full opacity-30 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 122, 60, 0.9) 0%, rgba(255, 206, 129, 0.6) 40%, rgba(255, 122, 60, 0.3) 70%, transparent 100%)"
        }}
      />
    </div>
  )
}

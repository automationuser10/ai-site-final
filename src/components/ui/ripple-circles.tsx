"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RippleCirclesProps {
  visible?: boolean;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const RippleCircles: React.FC<RippleCirclesProps> = ({
  visible = true,
  size = 250,
  className,
  style
}) => {
  if (!visible) return null;

  return (
    <div
      className={cn("relative", className)}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        ...style
      }}
    >
      <span
        className="absolute inset-[40%] rounded-full border border-orange-500/80 animate-[ripple_2s_infinite_ease-in-out] bg-gradient-to-tr from-orange-500/10 to-orange-400/10 backdrop-blur-sm"
      />
      <span
        className="absolute inset-[30%] rounded-full border border-orange-500/60 animate-[ripple_2s_infinite_ease-in-out_0.2s] bg-gradient-to-tr from-orange-500/10 to-orange-400/10 backdrop-blur-sm"
      />
      <span
        className="absolute inset-[20%] rounded-full border border-orange-500/40 animate-[ripple_2s_infinite_ease-in-out_0.4s] bg-gradient-to-tr from-orange-500/10 to-orange-400/10 backdrop-blur-sm"
      />
      <span
        className="absolute inset-[10%] rounded-full border border-orange-500/30 animate-[ripple_2s_infinite_ease-in-out_0.6s] bg-gradient-to-tr from-orange-500/10 to-orange-400/10 backdrop-blur-sm"
      />
      <span
        className="absolute inset-0 rounded-full border border-orange-500/20 animate-[ripple_2s_infinite_ease-in-out_0.8s] bg-gradient-to-tr from-orange-500/10 to-orange-400/10 backdrop-blur-sm"
      />
    </div>
  );
};

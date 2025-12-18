"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);
  const [pathLength, setPathLength] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !pathRef.current) return;

    try {
      const length = pathRef.current.getTotalLength();
      if (length && !isNaN(length)) {
        setPathLength(length);
      }
    } catch (error) {
      console.warn("Failed to get path length:", error);
    }
  }, [isMounted]);

  useAnimationFrame((time) => {
    if (!pathLength || pathLength === 0) return;
    
    const pxPerMillisecond = pathLength / duration;
    progress.set((time * pxPerMillisecond) % pathLength);
  });

  const x = useTransform(
    progress,
    (val) => {
      if (!pathRef.current || pathLength === 0) return 0;
      try {
        return pathRef.current.getPointAtLength(val).x;
      } catch {
        return 0;
      }
    }
  );

  const y = useTransform(
    progress,
    (val) => {
      if (!pathRef.current || pathLength === 0) return 0;
      try {
        return pathRef.current.getPointAtLength(val).y;
      } catch {
        return 0;
      }
    }
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  if (!isMounted) {
    return null;
  }

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
  );
}
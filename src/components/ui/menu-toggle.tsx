"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MenuToggleProps extends React.HTMLAttributes<HTMLButtonElement> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  strokeWidth?: number;
}

export function MenuToggle({
  open,
  onOpenChange,
  strokeWidth = 2,
  className,
  ...props
}: MenuToggleProps) {
  return (
    <button
      onClick={() => onOpenChange(!open)}
      className={cn("relative h-6 w-6", className)}
      aria-label="Toggle menu"
      {...props}
    >
      <span className="sr-only">Toggle menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        className="h-full w-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            open
              ? "M6 18L18 6M6 6l12 12"
              : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          }
          className="transition-all duration-300"
        />
      </svg>
    </button>
  );
}

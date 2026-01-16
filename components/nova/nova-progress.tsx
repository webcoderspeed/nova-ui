"use client"

import type * as React from "react"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaProgressVariants = cva("transition-all duration-300", {
  variants: {
    size: {
      sm: "h-1",
      md: "h-2",
      lg: "h-3",
      xl: "h-4",
    },
    color: {
      default: "[&>[data-slot=progress-indicator]]:bg-primary",
      success: "[&>[data-slot=progress-indicator]]:bg-green-500",
      warning: "[&>[data-slot=progress-indicator]]:bg-yellow-500",
      error: "[&>[data-slot=progress-indicator]]:bg-destructive",
      gradient:
        "[&>[data-slot=progress-indicator]]:bg-gradient-to-r [&>[data-slot=progress-indicator]]:from-primary [&>[data-slot=progress-indicator]]:to-cyan-400",
    },
    animation: {
      none: "",
      pulse: "[&>[data-slot=progress-indicator]]:animate-pulse",
      stripe:
        "[&>[data-slot=progress-indicator]]:bg-[length:1rem_1rem] [&>[data-slot=progress-indicator]]:bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] [&>[data-slot=progress-indicator]]:animate-[stripe_1s_linear_infinite]",
    },
    rounded: {
      none: "rounded-none [&>[data-slot=progress-indicator]]:rounded-none",
      sm: "rounded-sm [&>[data-slot=progress-indicator]]:rounded-sm",
      md: "rounded-md [&>[data-slot=progress-indicator]]:rounded-md",
      full: "rounded-full [&>[data-slot=progress-indicator]]:rounded-full",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    animation: "none",
    rounded: "full",
  },
})

export interface NovaProgressProps
  extends React.ComponentProps<typeof Progress>,
    VariantProps<typeof novaProgressVariants> {
  label?: string
  showValue?: boolean
  valuePosition?: "right" | "inside" | "top"
}

function NovaProgress({
  className,
  size,
  color,
  animation,
  rounded,
  label,
  showValue,
  valuePosition = "right",
  value = 0,
  ...props
}: NovaProgressProps) {
  return (
    <div className="w-full">
      {(label || (showValue && valuePosition === "top")) && (
        <div className="flex justify-between mb-1.5">
          {label && <span className="text-sm text-muted-foreground">{label}</span>}
          {showValue && valuePosition === "top" && <span className="text-sm font-medium">{value}%</span>}
        </div>
      )}
      <div className="flex items-center gap-3">
        <Progress
          value={value}
          className={cn(novaProgressVariants({ size, color, animation, rounded }), "flex-1", className)}
          {...props}
        />
        {showValue && valuePosition === "right" && <span className="text-sm font-medium min-w-[3ch]">{value}%</span>}
      </div>
    </div>
  )
}

export { NovaProgress, novaProgressVariants }

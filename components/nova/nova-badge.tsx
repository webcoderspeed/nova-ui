"use client"

import type * as React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

const novaBadgeVariants = cva("transition-all duration-200", {
  variants: {
    animation: {
      none: "",
      pulse: "animate-pulse",
      bounce: "animate-bounce",
      shimmer:
        "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
    },
    size: {
      sm: "text-[10px] px-1.5 py-0",
      md: "text-xs px-2.5 py-0.5",
      lg: "text-sm px-3 py-1",
    },
    rounded: {
      default: "",
      full: "rounded-full",
      none: "rounded-none",
    },
  },
  defaultVariants: {
    animation: "none",
    size: "md",
    rounded: "default",
  },
})

export interface NovaBadgeProps extends React.ComponentProps<typeof Badge>, VariantProps<typeof novaBadgeVariants> {
  removable?: boolean
  onRemove?: () => void
  dot?: boolean
  dotColor?: string
  icon?: React.ReactNode
}

function NovaBadge({
  className,
  animation,
  size,
  rounded,
  removable,
  onRemove,
  dot,
  dotColor = "bg-green-500",
  icon,
  children,
  ...props
}: NovaBadgeProps) {
  return (
    <Badge
      className={cn(novaBadgeVariants({ animation, size, rounded }), "inline-flex items-center gap-1", className)}
      {...props}
    >
      {dot && <span className={cn("h-1.5 w-1.5 rounded-full", dotColor)} />}
      {icon}
      {children}
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1 hover:bg-background/20 rounded-full p-0.5 transition-colors"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </Badge>
  )
}

export { NovaBadge, novaBadgeVariants }

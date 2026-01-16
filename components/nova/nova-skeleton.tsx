"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

const novaSkeletonVariants = cva(
  "animate-pulse rounded-md bg-muted",
  {
    variants: {
      animation: {
        pulse: "animate-pulse",
        shimmer: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        wave: "relative overflow-hidden after:absolute after:inset-0 after:translate-x-full after:animate-[shimmer_1.5s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent",
      },
      variant: {
        default: "",
        card: "rounded-xl border border-muted bg-card",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      animation: "pulse",
      variant: "default",
    },
  }
)

function NovaSkeleton({
  className,
  animation,
  variant,
  ...props
}: React.ComponentProps<typeof Skeleton> &
  VariantProps<typeof novaSkeletonVariants>) {
  return (
    <Skeleton
      className={cn(novaSkeletonVariants({ animation, variant }), className)}
      {...props}
    />
  )
}

export { NovaSkeleton }

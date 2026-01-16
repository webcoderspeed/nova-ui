import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

const novaEmptyVariants = cva("flex flex-col items-center justify-center p-8 text-center", {
  variants: {
    variant: {
      default: "rounded-lg border-2 border-dashed",
      solid: "rounded-lg border bg-card text-card-foreground shadow-sm",
      ghost: "border-none shadow-none",
    },
    size: {
      default: "min-h-[300px]",
      sm: "min-h-[150px] p-4",
      lg: "min-h-[450px] p-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export interface NovaEmptyProps
  extends React.ComponentProps<typeof Empty>,
    VariantProps<typeof novaEmptyVariants> {}

const NovaEmpty = React.forwardRef<
  React.ComponentRef<typeof Empty>,
  NovaEmptyProps
>(({ className, variant, size, ...props }, ref) => (
  <Empty
    ref={ref}
    className={cn(novaEmptyVariants({ variant, size }), className)}
    {...props}
  />
))
NovaEmpty.displayName = "NovaEmpty"

const NovaEmptyHeader = React.forwardRef<
  React.ComponentRef<typeof EmptyHeader>,
  React.ComponentProps<typeof EmptyHeader>
>(({ className, ...props }, ref) => (
  <EmptyHeader
    ref={ref}
    className={cn("mb-4", className)}
    {...props}
  />
))
NovaEmptyHeader.displayName = "NovaEmptyHeader"

const novaEmptyMediaVariants = cva("mb-4", {
  variants: {
    effect: {
      default: "",
      glow: "drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]",
      bounce: "animate-bounce",
    },
  },
  defaultVariants: {
    effect: "default",
  },
})

export interface NovaEmptyMediaProps
  extends React.ComponentProps<typeof EmptyMedia>,
    VariantProps<typeof novaEmptyMediaVariants> {}

const NovaEmptyMedia = React.forwardRef<
  React.ComponentRef<typeof EmptyMedia>,
  NovaEmptyMediaProps
>(({ className, effect, ...props }, ref) => (
  <EmptyMedia
    ref={ref}
    className={cn(novaEmptyMediaVariants({ effect }), className)}
    {...props}
  />
))
NovaEmptyMedia.displayName = "NovaEmptyMedia"

const NovaEmptyTitle = React.forwardRef<
  React.ComponentRef<typeof EmptyTitle>,
  React.ComponentProps<typeof EmptyTitle>
>(({ className, ...props }, ref) => (
  <EmptyTitle
    ref={ref}
    className={cn("text-xl font-bold tracking-tight", className)}
    {...props}
  />
))
NovaEmptyTitle.displayName = "NovaEmptyTitle"

const NovaEmptyDescription = React.forwardRef<
  React.ComponentRef<typeof EmptyDescription>,
  React.ComponentProps<typeof EmptyDescription>
>(({ className, ...props }, ref) => (
  <EmptyDescription
    ref={ref}
    className={cn("text-muted-foreground mt-2 max-w-sm", className)}
    {...props}
  />
))
NovaEmptyDescription.displayName = "NovaEmptyDescription"

const NovaEmptyContent = React.forwardRef<
  React.ComponentRef<typeof EmptyContent>,
  React.ComponentProps<typeof EmptyContent>
>(({ className, ...props }, ref) => (
  <EmptyContent
    ref={ref}
    className={cn("mt-6", className)}
    {...props}
  />
))
NovaEmptyContent.displayName = "NovaEmptyContent"

export {
  NovaEmpty,
  NovaEmptyHeader,
  NovaEmptyTitle,
  NovaEmptyDescription,
  NovaEmptyContent,
  NovaEmptyMedia,
}

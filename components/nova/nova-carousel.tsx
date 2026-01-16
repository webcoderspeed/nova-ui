import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const novaCarouselVariants = cva("relative", {
  variants: {
    variant: {
      default: "",
      cards: "perspective-1000",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NovaCarouselProps
  extends React.ComponentProps<typeof Carousel>,
    VariantProps<typeof novaCarouselVariants> {}

const NovaCarousel = React.forwardRef<
  React.ComponentRef<typeof Carousel>,
  NovaCarouselProps
>(({ className, variant, ...props }, ref) => (
  <Carousel
    ref={ref}
    className={cn(novaCarouselVariants({ variant }), className)}
    {...props}
  />
))
NovaCarousel.displayName = "NovaCarousel"

const novaCarouselContentVariants = cva("", {
  variants: {
    effect: {
      default: "",
      fade: "opacity-100 transition-opacity",
    },
  },
  defaultVariants: {
    effect: "default",
  },
})

export interface NovaCarouselContentProps
  extends React.ComponentProps<typeof CarouselContent>,
    VariantProps<typeof novaCarouselContentVariants> {}

const NovaCarouselContent = React.forwardRef<
  React.ComponentRef<typeof CarouselContent>,
  NovaCarouselContentProps
>(({ className, effect, ...props }, ref) => (
  <CarouselContent
    ref={ref}
    className={cn(novaCarouselContentVariants({ effect }), className)}
    {...props}
  />
))
NovaCarouselContent.displayName = "NovaCarouselContent"

const novaCarouselItemVariants = cva("", {
  variants: {
    effect: {
      default: "",
      zoom: "hover:scale-105 transition-transform duration-300",
    },
  },
  defaultVariants: {
    effect: "default",
  },
})

export interface NovaCarouselItemProps
  extends React.ComponentProps<typeof CarouselItem>,
    VariantProps<typeof novaCarouselItemVariants> {}

const NovaCarouselItem = React.forwardRef<
  React.ComponentRef<typeof CarouselItem>,
  NovaCarouselItemProps
>(({ className, effect, ...props }, ref) => (
  <CarouselItem
    ref={ref}
    className={cn(novaCarouselItemVariants({ effect }), className)}
    {...props}
  />
))
NovaCarouselItem.displayName = "NovaCarouselItem"

const NovaCarouselPrevious = React.forwardRef<
  React.ComponentRef<typeof CarouselPrevious>,
  React.ComponentProps<typeof CarouselPrevious>
>(({ className, ...props }, ref) => (
  <CarouselPrevious
    ref={ref}
    className={cn("hover:bg-primary hover:text-primary-foreground", className)}
    {...props}
  />
))
NovaCarouselPrevious.displayName = "NovaCarouselPrevious"

const NovaCarouselNext = React.forwardRef<
  React.ComponentRef<typeof CarouselNext>,
  React.ComponentProps<typeof CarouselNext>
>(({ className, ...props }, ref) => (
  <CarouselNext
    ref={ref}
    className={cn("hover:bg-primary hover:text-primary-foreground", className)}
    {...props}
  />
))
NovaCarouselNext.displayName = "NovaCarouselNext"

export {
  NovaCarousel,
  NovaCarouselContent,
  NovaCarouselItem,
  NovaCarouselPrevious,
  NovaCarouselNext,
  type CarouselApi,
}

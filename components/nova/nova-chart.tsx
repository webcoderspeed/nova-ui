import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const novaChartContainerVariants = cva("mx-auto aspect-square max-h-[250px]", {
  variants: {
    variant: {
      default: "",
      bordered: "border rounded-xl p-4 bg-card text-card-foreground shadow-sm",
      glass: "bg-background/50 backdrop-blur-sm border rounded-xl p-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NovaChartContainerProps
  extends React.ComponentProps<typeof ChartContainer>,
    VariantProps<typeof novaChartContainerVariants> {}

const NovaChartContainer = React.forwardRef<
  React.ComponentRef<typeof ChartContainer>,
  NovaChartContainerProps
>(({ className, variant, ...props }, ref) => (
  <ChartContainer
    ref={ref}
    className={cn(novaChartContainerVariants({ variant }), className)}
    {...props}
  />
))
NovaChartContainer.displayName = "NovaChartContainer"

const NovaChartTooltip = ChartTooltip

const novaChartTooltipContentVariants = cva("", {
  variants: {
    variant: {
      default: "",
      glass: "bg-background/80 backdrop-blur-md border-primary/20 shadow-xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NovaChartTooltipContentProps
  extends React.ComponentProps<typeof ChartTooltipContent>,
    VariantProps<typeof novaChartTooltipContentVariants> {}

const NovaChartTooltipContent = React.forwardRef<
  React.ComponentRef<typeof ChartTooltipContent>,
  NovaChartTooltipContentProps
>(({ className, variant, ...props }, ref) => (
  <ChartTooltipContent
    ref={ref}
    className={cn(novaChartTooltipContentVariants({ variant }), className)}
    {...props}
  />
))
NovaChartTooltipContent.displayName = "NovaChartTooltipContent"

const NovaChartLegend = ChartLegend

const NovaChartLegendContent = React.forwardRef<
  React.ComponentRef<typeof ChartLegendContent>,
  React.ComponentProps<typeof ChartLegendContent>
>(({ className, ...props }, ref) => (
  <ChartLegendContent
    ref={ref}
    className={cn("pt-4", className)}
    {...props}
  />
))
NovaChartLegendContent.displayName = "NovaChartLegendContent"

const NovaChartStyle = ChartStyle

export {
  NovaChartContainer,
  NovaChartTooltip,
  NovaChartTooltipContent,
  NovaChartLegend,
  NovaChartLegendContent,
  NovaChartStyle,
  type ChartConfig,
}

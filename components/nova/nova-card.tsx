"use client"

import type * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaCardVariants = cva("transition-all duration-300", {
  variants: {
    variant: {
      default: "",
      glass: "bg-background/60 backdrop-blur-md border-white/10",
      gradient: "bg-gradient-to-br from-background via-background to-secondary/50",
      outline: "bg-transparent border-2",
      elevated: "shadow-lg hover:shadow-xl",
      interactive: "cursor-pointer hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]",
    },
    glow: {
      none: "",
      subtle: "hover:shadow-[0_0_15px_rgba(var(--primary),0.15)]",
      medium: "hover:shadow-[0_0_25px_rgba(var(--primary),0.25)]",
      strong: "hover:shadow-[0_0_40px_rgba(var(--primary),0.4)]",
    },
    padding: {
      none: "[&>*]:p-0",
      sm: "[&>*]:p-3",
      md: "",
      lg: "[&>*]:p-8",
    },
    hover: {
      none: "",
      lift: "hover:-translate-y-1 hover:shadow-lg transition-all duration-300",
      scale: "hover:scale-[1.02] transition-transform duration-300",
      glow: "hover:shadow-[0_0_20px_rgba(var(--primary),0.2)] transition-shadow duration-300",
      border: "hover:border-primary transition-colors duration-300",
    },
  },
  defaultVariants: {
    variant: "default",
    glow: "none",
    padding: "md",
    hover: "none",
  },
})

export interface NovaCardProps extends React.ComponentProps<typeof Card>, VariantProps<typeof novaCardVariants> {
  hoverable?: boolean
  loading?: boolean
}

function NovaCard({ className, variant, glow, padding, hover, hoverable, loading, children, ...props }: NovaCardProps) {
  return (
    <Card
      className={cn(
        novaCardVariants({ variant, glow, padding, hover }),
        hoverable && !hover && "hover:border-primary/50 transition-colors",
        loading && "animate-pulse",
        className,
      )}
      {...props}
    >
      {loading ? (
        <CardContent className="space-y-4 p-6">
          <div className="h-4 bg-muted rounded w-3/4" />
          <div className="h-4 bg-muted rounded w-1/2" />
          <div className="h-20 bg-muted rounded" />
        </CardContent>
      ) : (
        children
      )}
    </Card>
  )
}

const NovaCardHeader = CardHeader
const NovaCardTitle = CardTitle
const NovaCardDescription = CardDescription
const NovaCardContent = CardContent
const NovaCardFooter = CardFooter

export {
  NovaCard,
  NovaCardHeader,
  NovaCardTitle,
  NovaCardDescription,
  NovaCardContent,
  NovaCardFooter,
  novaCardVariants,
}

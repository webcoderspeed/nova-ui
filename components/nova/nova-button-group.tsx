import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"

const novaButtonGroupVariants = cva("flex w-fit items-stretch", {
  variants: {
    variant: {
      default: "",
      solid: "bg-muted p-1 rounded-lg",
      outline: "border border-border p-1 rounded-lg",
    },
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
})

export interface NovaButtonGroupProps
  extends React.ComponentProps<typeof ButtonGroup>,
    VariantProps<typeof novaButtonGroupVariants> {}

const NovaButtonGroup = React.forwardRef<
  React.ComponentRef<typeof ButtonGroup>,
  NovaButtonGroupProps
>(({ className, variant, orientation, ...props }, ref) => (
  <ButtonGroup
    ref={ref}
    orientation={orientation}
    className={cn(novaButtonGroupVariants({ variant, orientation }), className)}
    {...props}
  />
))
NovaButtonGroup.displayName = "NovaButtonGroup"

const novaButtonGroupSeparatorVariants = cva("", {
  variants: {
    variant: {
      default: "bg-border",
      ghost: "bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NovaButtonGroupSeparatorProps
  extends React.ComponentProps<typeof ButtonGroupSeparator>,
    VariantProps<typeof novaButtonGroupSeparatorVariants> {}

const NovaButtonGroupSeparator = React.forwardRef<
  React.ComponentRef<typeof ButtonGroupSeparator>,
  NovaButtonGroupSeparatorProps
>(({ className, variant, ...props }, ref) => (
  <ButtonGroupSeparator
    ref={ref}
    className={cn(novaButtonGroupSeparatorVariants({ variant }), className)}
    {...props}
  />
))
NovaButtonGroupSeparator.displayName = "NovaButtonGroupSeparator"

const novaButtonGroupTextVariants = cva("text-sm font-medium", {
  variants: {
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NovaButtonGroupTextProps
  extends React.ComponentProps<typeof ButtonGroupText>,
    VariantProps<typeof novaButtonGroupTextVariants> {}

const NovaButtonGroupText = React.forwardRef<
  React.ComponentRef<typeof ButtonGroupText>,
  NovaButtonGroupTextProps
>(({ className, variant, ...props }, ref) => (
  <ButtonGroupText
    ref={ref}
    className={cn(novaButtonGroupTextVariants({ variant }), className)}
    {...props}
  />
))
NovaButtonGroupText.displayName = "NovaButtonGroupText"

export { NovaButtonGroup, NovaButtonGroupSeparator, NovaButtonGroupText }

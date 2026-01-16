import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

const novaItemVariants = cva("", {
  variants: {
    effect: {
      default: "",
      hover: "hover:bg-accent/50 hover:scale-[1.01] transition-all duration-200",
      glow: "hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-shadow duration-300",
    },
  },
  defaultVariants: {
    effect: "default",
  },
})

export interface NovaItemProps
  extends React.ComponentProps<typeof Item>,
    VariantProps<typeof novaItemVariants> {}

const NovaItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  NovaItemProps
>(({ className, effect, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(novaItemVariants({ effect }), className)}
    {...props}
  />
))
NovaItem.displayName = "NovaItem"

const NovaItemGroup = ItemGroup
const NovaItemSeparator = ItemSeparator
const NovaItemContent = ItemContent
const NovaItemTitle = ItemTitle
const NovaItemDescription = ItemDescription
const NovaItemActions = ItemActions
const NovaItemHeader = ItemHeader
const NovaItemFooter = ItemFooter

const novaItemMediaVariants = cva("", {
  variants: {
    effect: {
      default: "",
      zoom: "group-hover/item:scale-110 transition-transform duration-300",
    },
  },
  defaultVariants: {
    effect: "default",
  },
})

export interface NovaItemMediaProps
  extends React.ComponentProps<typeof ItemMedia>,
    VariantProps<typeof novaItemMediaVariants> {}

const NovaItemMedia = React.forwardRef<
  React.ElementRef<typeof ItemMedia>,
  NovaItemMediaProps
>(({ className, effect, ...props }, ref) => (
  <ItemMedia
    ref={ref}
    className={cn(novaItemMediaVariants({ effect }), className)}
    {...props}
  />
))
NovaItemMedia.displayName = "NovaItemMedia"

export {
  NovaItem,
  NovaItemMedia,
  NovaItemContent,
  NovaItemActions,
  NovaItemGroup,
  NovaItemSeparator,
  NovaItemTitle,
  NovaItemDescription,
  NovaItemHeader,
  NovaItemFooter,
}

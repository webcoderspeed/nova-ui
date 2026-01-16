"use client"

import * as React from "react"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerOverlay,
  DrawerPortal,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaDrawerContentVariants = cva("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", {
  variants: {
    variant: {
      default: "",
      glass: "bg-background/80 backdrop-blur-md border-primary/20",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NovaDrawerContentProps
  extends React.ComponentProps<typeof DrawerContent>,
    VariantProps<typeof novaDrawerContentVariants> {
  glass?: boolean
}

function NovaDrawerContent({ className, variant, glass, children, ...props }: NovaDrawerContentProps) {
  const finalVariant = glass ? "glass" : variant
  return (
    <DrawerContent
      className={cn(novaDrawerContentVariants({ variant: finalVariant }), className)}
      {...props}
    >
      {children}
    </DrawerContent>
  )
}

export {
  Drawer as NovaDrawer,
  DrawerTrigger as NovaDrawerTrigger,
  NovaDrawerContent,
  DrawerHeader as NovaDrawerHeader,
  DrawerFooter as NovaDrawerFooter,
  DrawerTitle as NovaDrawerTitle,
  DrawerDescription as NovaDrawerDescription,
  DrawerClose as NovaDrawerClose,
  DrawerOverlay as NovaDrawerOverlay,
  DrawerPortal as NovaDrawerPortal,
  novaDrawerContentVariants,
}

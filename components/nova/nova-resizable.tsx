"use client"

import * as React from "react"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaResizableHandleVariants = cva("", {
  variants: {
    variant: {
      default: "bg-border",
      glass: "bg-primary/20 backdrop-blur-sm",
      primary: "bg-primary/50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NovaResizableHandleProps
  extends React.ComponentProps<typeof ResizableHandle>,
    VariantProps<typeof novaResizableHandleVariants> {}

const NovaResizableHandle = ({ className, variant, ...props }: NovaResizableHandleProps) => {
  return (
    <ResizableHandle
      className={cn(novaResizableHandleVariants({ variant }), className)}
      {...props}
    />
  )
}

export {
  ResizablePanelGroup as NovaResizablePanelGroup,
  ResizablePanel as NovaResizablePanel,
  NovaResizableHandle,
  novaResizableHandleVariants,
}

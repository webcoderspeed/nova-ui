"use client"

import * as React from "react"
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaCommandVariants = cva("flex h-full w-full flex-col overflow-hidden rounded-md", {
  variants: {
    variant: {
      default: "bg-popover text-popover-foreground",
      glass: "bg-popover/80 backdrop-blur-md border-primary/20",
      bordered: "border border-border bg-popover",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NovaCommandProps
  extends React.ComponentProps<typeof Command>,
    VariantProps<typeof novaCommandVariants> {}

const NovaCommand = React.forwardRef<React.ElementRef<typeof Command>, NovaCommandProps>(
  ({ className, variant, ...props }, ref) => (
    <Command
      ref={ref}
      className={cn(novaCommandVariants({ variant }), className)}
      {...props}
    />
  )
)
NovaCommand.displayName = "NovaCommand"

export {
  NovaCommand,
  CommandDialog as NovaCommandDialog,
  CommandInput as NovaCommandInput,
  CommandList as NovaCommandList,
  CommandEmpty as NovaCommandEmpty,
  CommandGroup as NovaCommandGroup,
  CommandItem as NovaCommandItem,
  CommandShortcut as NovaCommandShortcut,
  CommandSeparator as NovaCommandSeparator,
  novaCommandVariants,
}

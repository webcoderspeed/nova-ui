"use client"

import * as React from "react"
import { InputGroup, InputGroupAddon, InputGroupButton } from "@/components/ui/input-group"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const novaInputGroupVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        glow: "focus-within:shadow-[0_0_10px_rgba(var(--primary),0.5)] focus-within:border-primary",
        glass: "bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20",
        neon: "focus-within:border-primary focus-within:shadow-[0_0_5px_theme(colors.primary.DEFAULT),0_0_10px_theme(colors.primary.DEFAULT)]",
        floating: "shadow-lg border-transparent bg-background",
        filled: "bg-muted border-transparent focus-within:bg-background focus-within:border-primary",
        outline: "border-2 focus-within:border-primary",
        neumorphic: "shadow-[-5px_-5px_10px_rgba(255,255,255,0.8),5px_5px_10px_rgba(0,0,0,0.1)] dark:shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_10px_rgba(0,0,0,0.3)] border-transparent bg-background/50",
      },
      size: {
        default: "h-9",
        sm: "h-8 text-xs",
        lg: "h-11 text-lg",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NovaInputGroupProps
  extends React.ComponentProps<typeof InputGroup>,
    VariantProps<typeof novaInputGroupVariants> {}

function NovaInputGroup({ className, variant, size, ...props }: NovaInputGroupProps) {
  return (
    <InputGroup
      className={cn(novaInputGroupVariants({ variant, size }), className)}
      {...props}
    />
  )
}

const novaInputGroupAddonVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "",
        filled: "bg-muted text-muted-foreground",
        glass: "bg-white/10 text-white border-white/20 backdrop-blur-md",
        gradient: "bg-gradient-to-r from-primary to-secondary text-primary-foreground",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface NovaInputGroupAddonProps
  extends React.ComponentProps<typeof InputGroupAddon>,
    VariantProps<typeof novaInputGroupAddonVariants> {}

function NovaInputGroupAddon({ className, variant, ...props }: NovaInputGroupAddonProps) {
    return (
        <InputGroupAddon
            className={cn(novaInputGroupAddonVariants({ variant }), className)}
            {...props}
        />
    )
}

export interface NovaInputGroupButtonProps extends React.ComponentProps<typeof InputGroupButton> {
    loading?: boolean
}

function NovaInputGroupButton({ className, loading, children, ...props }: NovaInputGroupButtonProps) {
    return (
        <InputGroupButton className={className} disabled={loading || props.disabled} {...props}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </InputGroupButton>
    )
}

export { NovaInputGroup, NovaInputGroupAddon, NovaInputGroupButton }

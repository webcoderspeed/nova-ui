"use client"

import * as React from "react"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const novaInputOTPVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        glow: "[&_[data-slot=input-otp-slot][data-active=true]]:shadow-[0_0_10px_rgba(var(--primary),0.5)] [&_[data-slot=input-otp-slot][data-active=true]]:border-primary",
        glass: "[&_[data-slot=input-otp-slot]]:bg-white/10 [&_[data-slot=input-otp-slot]]:backdrop-blur-md [&_[data-slot=input-otp-slot]]:border-white/20",
        neon: "[&_[data-slot=input-otp-slot][data-active=true]]:border-primary [&_[data-slot=input-otp-slot][data-active=true]]:shadow-[0_0_5px_theme(colors.primary.DEFAULT),0_0_10px_theme(colors.primary.DEFAULT)]",
      },
      size: {
        default: "",
        lg: "[&_[data-slot=input-otp-slot]]:h-12 [&_[data-slot=input-otp-slot]]:w-12 [&_[data-slot=input-otp-slot]]:text-lg",
        sm: "[&_[data-slot=input-otp-slot]]:h-8 [&_[data-slot=input-otp-slot]]:w-8 [&_[data-slot=input-otp-slot]]:text-xs",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type NovaInputOTPProps = React.ComponentProps<typeof InputOTP> &
  VariantProps<typeof novaInputOTPVariants>

function NovaInputOTP({ className, variant, size, ...props }: NovaInputOTPProps) {
  return (
    <InputOTP
      className={cn(novaInputOTPVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { NovaInputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

const novaButtonVariants = cva("relative overflow-hidden transition-all duration-300", {
  variants: {
    animation: {
      none: "",
      pulse: "hover:animate-pulse",
      bounce: "hover:animate-bounce",
      shine:
        "after:absolute after:inset-0 after:-translate-x-full hover:after:translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:transition-transform after:duration-500",
      glow: "hover:shadow-[0_0_20px_rgba(var(--primary),0.5)]",
      scale: "hover:scale-105 active:scale-95",
      ripple: "",
    },
    rounded: {
      default: "",
      full: "rounded-full",
      none: "rounded-none",
    },
  },
  defaultVariants: {
    animation: "scale",
    rounded: "default",
  },
})

export interface NovaButtonProps extends React.ComponentProps<typeof Button>, VariantProps<typeof novaButtonVariants> {
  loading?: boolean
  loadingText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  animate?: boolean
}

function NovaButton({
  className,
  children,
  animation,
  rounded,
  loading = false,
  loadingText,
  leftIcon,
  rightIcon,
  disabled,
  animate,
  ...props
}: NovaButtonProps) {
  const [ripples, setRipples] = React.useState<{ x: number; y: number; id: number }[]>([])

  const finalAnimation = animate === false ? "none" : animation

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (finalAnimation === "ripple") {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = Date.now()
      setRipples((prev) => [...prev, { x, y, id }])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 600)
    }
    props.onClick?.(e)
  }

  return (
    <Button
      className={cn(novaButtonVariants({ animation: finalAnimation, rounded }), className)}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {!loading && leftIcon}
      {loading && loadingText ? loadingText : children}
      {!loading && rightIcon}
      {finalAnimation === "ripple" &&
        ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute animate-ping rounded-full bg-white/30"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
          />
        ))}
    </Button>
  )
}

export { NovaButton, novaButtonVariants }

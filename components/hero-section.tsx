"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Copy, Check } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const copyCommand = () => {
    navigator.clipboard.writeText("git submodule add https://github.com/nova-ui/core components/nova-ui")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(74, 222, 190, ${particle.opacity})`
        ctx.fill()
      })

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(74, 222, 190, ${0.1 * (1 - distance / 120)})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Now available as Git submodule
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Nova.UI: The Modular Design System for <span className="text-primary">Modern Web Apps</span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Built for developers, powered by shadcn, Framer Motion, GSAP, and more. Type-safe, animation-rich, and
            accessible out of the box.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2">
              Explore Components
              <ArrowRight className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
              <code className="text-sm text-muted-foreground font-mono">git submodule add nova-ui</code>
              <button
                onClick={copyCommand}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Copy command"
              >
                {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="mb-8 text-center text-sm text-muted-foreground">Powered by industry-leading technologies</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["shadcn/ui", "Framer Motion", "GSAP", "TypeScript", "Tailwind CSS", "Zod"].map((tech) => (
              <div key={tech} className="text-sm font-medium text-muted-foreground">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

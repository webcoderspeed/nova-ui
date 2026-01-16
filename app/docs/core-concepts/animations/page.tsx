"use client"

import { useState } from "react"
import { CodeBlock } from "@/components/docs/code-block"
import {
  NovaCard as Card,
  NovaCardContent as CardContent,
  NovaButton as Button,
  NovaTabs as Tabs,
  NovaTabsContent as TabsContent,
  NovaTabsList as TabsList,
  NovaTabsTrigger as TabsTrigger
} from "@/components/nova"
import { ArrowRight, Sparkles, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function AnimationsPage() {
  const [showBox, setShowBox] = useState(true)
  const [tapScale, setTapScale] = useState(false)

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Core Concepts</span>
          <ArrowRight className="h-3 w-3" />
          <span className="text-foreground">Animations</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Animations</h1>
        <p className="text-lg text-muted-foreground">
          Nova.UI comes with built-in animation utilities powered by Framer Motion, enabling smooth, performant
          animations with minimal code.
        </p>
      </div>

      {/* Framer Motion Basics */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Framer Motion Basics</h2>
        <p className="text-muted-foreground">
          Nova.UI uses Framer Motion as its animation engine. The{" "}
          <code className="text-xs bg-accent px-1.5 py-0.5 rounded">motion</code> component wraps any HTML element to
          make it animatable:
        </p>
        <Tabs defaultValue="code" className="w-full">
          <TabsList>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="code" className="mt-4">
            <CodeBlock
              code={`import { motion } from "framer-motion"

// Simple fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Hello, I fade in!
</motion.div>

// Scale on hover
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Hover & Click me
</motion.button>

// Slide in from left
<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 100 }}
>
  I slide in!
</motion.div>`}
              language="tsx"
            />
          </TabsContent>
          <TabsContent value="preview" className="mt-4">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Scale on tap:</p>
                  <motion.button
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setTapScale(!tapScale)}
                  >
                    Hover & Click me
                  </motion.button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* AnimatePresence */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Enter/Exit Animations</h2>
        <p className="text-muted-foreground">
          Use <code className="text-xs bg-accent px-1.5 py-0.5 rounded">AnimatePresence</code> to animate elements when
          they mount and unmount:
        </p>
        <Tabs defaultValue="code" className="w-full">
          <TabsList>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="code" className="mt-4">
            <CodeBlock
              code={`import { motion, AnimatePresence } from "framer-motion"

function ToggleBox() {
  const [show, setShow] = useState(true)
  
  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key="box"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="w-20 h-20 bg-primary rounded-lg"
          />
        )}
      </AnimatePresence>
    </>
  )
}`}
              language="tsx"
            />
          </TabsContent>
          <TabsContent value="preview" className="mt-4">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-6 space-y-4">
                <Button onClick={() => setShowBox(!showBox)} size="sm">
                  <Play className="h-4 w-4 mr-2" />
                  Toggle Box
                </Button>
                <div className="h-24 flex items-center">
                  <AnimatePresence mode="wait">
                    {showBox && (
                      <motion.div
                        key="box"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="w-20 h-20 bg-primary rounded-lg"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Stagger Children */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Staggered Animations</h2>
        <p className="text-muted-foreground">Create staggered list animations with variants:</p>
        <CodeBlock
          code={`const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map((item) => (
    <motion.li key={item.id} variants={item}>
      {item.content}
    </motion.li>
  ))}
</motion.ul>`}
          language="tsx"
        />
      </section>

      {/* Nova.UI Animation Presets */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Nova.UI Animation Presets</h2>
        <p className="text-muted-foreground">Nova.UI includes pre-built animation presets for common use cases:</p>
        <CodeBlock
          code={`// components/nova/animations.ts
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

export const slideFromLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
}

// Usage with spread operator
import { slideUp } from "@/components/nova/animations"

<motion.div {...slideUp} transition={{ duration: 0.3 }}>
  Animated content
</motion.div>`}
          language="tsx"
        />
      </section>

      {/* Spring Physics */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Spring Physics</h2>
        <p className="text-muted-foreground">Use spring transitions for natural, physics-based motion:</p>
        <CodeBlock
          code={`// Default spring (recommended for most cases)
<motion.div
  animate={{ scale: 1.2 }}
  transition={{ type: "spring" }}
/>

// Custom spring parameters
<motion.div
  animate={{ x: 100 }}
  transition={{
    type: "spring",
    stiffness: 100,   // How "stiff" the spring is
    damping: 10,      // How much friction
    mass: 1,          // Weight of the object
  }}
/>

// Bouncy spring
<motion.div
  animate={{ y: 0 }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 10,
  }}
/>

// Smooth, no bounce
<motion.div
  animate={{ opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 20,
  }}
/>`}
          language="tsx"
        />
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <div className="grid gap-3">
          {[
            {
              title: "Use transform properties",
              desc: "Animate transform (x, y, scale, rotate) and opacity for best performance",
            },
            { title: "Prefer springs over duration", desc: "Springs feel more natural and don't need precise timing" },
            { title: "Keep animations short", desc: "Most UI animations should be 150-300ms" },
            {
              title: "Use layoutId for shared layouts",
              desc: "Framer Motion can animate between components with matching layoutId",
            },
          ].map((practice) => (
            <Card key={practice.title} className="bg-card/50 border-border">
              <CardContent className="p-4">
                <h3 className="font-medium flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  {practice.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{practice.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

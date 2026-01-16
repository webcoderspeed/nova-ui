"use client"

import {
  NovaDrawer,
  NovaDrawerTrigger,
  NovaDrawerContent,
  NovaDrawerHeader,
  NovaDrawerFooter,
  NovaDrawerTitle,
  NovaDrawerDescription,
  NovaDrawerClose,
} from "@/components/nova/nova-drawer"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { NovaButton } from "@/components/nova/nova-button"
import { Minus, Plus } from "lucide-react"
import React from "react"

export default function DrawerDocsV1() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <ComponentDocTemplate
      badgeText="Overlays"
      title="Drawer"
      description="A drawer component for React."
      whenToUse={[
        "To display content that complements the main screen.",
        "For mobile-first navigation or settings panels.",
        "When you want to show additional details without leaving the context."
      ]}
      hints={[
        { type: "info", content: "Built on top of `vaul` by emilkowalski." },
        { type: "info", content: "Supports `glass` variant on `NovaDrawerContent`." },
        { type: "info", content: "Responsive by default." }
      ]}
      preview={
        <NovaDrawer>
          <NovaDrawerTrigger asChild>
            <NovaButton variant="outline">Open Drawer</NovaButton>
          </NovaDrawerTrigger>
          <NovaDrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <NovaDrawerHeader>
                <NovaDrawerTitle>Move Goal</NovaDrawerTitle>
                <NovaDrawerDescription>Set your daily activity goal.</NovaDrawerDescription>
              </NovaDrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <NovaButton
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => onClick(-10)}
                    disabled={goal <= 200}
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease</span>
                  </NovaButton>
                  <div className="flex-1 text-center">
                    <div className="text-7xl font-bold tracking-tighter">
                      {goal}
                    </div>
                    <div className="text-[0.70rem] uppercase text-muted-foreground">
                      Calories/day
                    </div>
                  </div>
                  <NovaButton
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => onClick(10)}
                    disabled={goal >= 400}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase</span>
                  </NovaButton>
                </div>
                <div className="mt-3 h-[120px]">
                  {/* Chart would go here */}
                  <div className="flex items-end justify-center gap-2 h-full pb-2">
                     <div className="w-4 bg-primary/20 h-10 rounded-t"></div>
                     <div className="w-4 bg-primary/40 h-16 rounded-t"></div>
                     <div className="w-4 bg-primary/60 h-24 rounded-t"></div>
                     <div className="w-4 bg-primary h-20 rounded-t"></div>
                     <div className="w-4 bg-primary/60 h-14 rounded-t"></div>
                     <div className="w-4 bg-primary/40 h-8 rounded-t"></div>
                     <div className="w-4 bg-primary/20 h-12 rounded-t"></div>
                  </div>
                </div>
              </div>
              <NovaDrawerFooter>
                <NovaButton>Submit</NovaButton>
                <NovaDrawerClose asChild>
                  <NovaButton variant="outline">Cancel</NovaButton>
                </NovaDrawerClose>
              </NovaDrawerFooter>
            </div>
          </NovaDrawerContent>
        </NovaDrawer>
      }
      installCommand="npx nova-ui@latest add drawer"
      importCode={`import {
  NovaDrawer,
  NovaDrawerTrigger,
  NovaDrawerContent,
  NovaDrawerHeader,
  NovaDrawerFooter,
  NovaDrawerTitle,
  NovaDrawerDescription,
  NovaDrawerClose,
} from "@/components/nova/nova-drawer"`}
      usageCode={`<NovaDrawer>
  <NovaDrawerTrigger>Open</NovaDrawerTrigger>
  <NovaDrawerContent>
    <NovaDrawerHeader>
      <NovaDrawerTitle>Are you absolutely sure?</NovaDrawerTitle>
      <NovaDrawerDescription>This action cannot be undone.</NovaDrawerDescription>
    </NovaDrawerHeader>
    <NovaDrawerFooter>
      <NovaButton>Submit</NovaButton>
      <NovaDrawerClose>
        <NovaButton variant="outline">Cancel</NovaButton>
      </NovaDrawerClose>
    </NovaDrawerFooter>
  </NovaDrawerContent>
</NovaDrawer>`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass"',
          defaultValue: '"default"',
          description: "Visual style of the drawer content.",
        },
        {
          name: "glass",
          type: "boolean",
          defaultValue: "false",
          description: "Shorthand to enable glassmorphism effect.",
        },
      ]}
      examples={[
        {
          title: "Glass Drawer",
          description: "A drawer with a glassmorphism effect.",
          code: `<NovaDrawer>
  <NovaDrawerTrigger>Open Glass Drawer</NovaDrawerTrigger>
  <NovaDrawerContent variant="glass">
    {/* ... content ... */}
  </NovaDrawerContent>
</NovaDrawer>`,
          preview: (
            <div className="p-8 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg">
                <NovaDrawer>
                <NovaDrawerTrigger asChild>
                    <NovaButton variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white">
                    Open Glass Drawer
                    </NovaButton>
                </NovaDrawerTrigger>
                <NovaDrawerContent variant="glass">
                    <div className="mx-auto w-full max-w-sm">
                    <NovaDrawerHeader>
                        <NovaDrawerTitle>Glass Effect</NovaDrawerTitle>
                        <NovaDrawerDescription>This drawer uses a backdrop blur.</NovaDrawerDescription>
                    </NovaDrawerHeader>
                    <div className="p-4 h-[200px] flex items-center justify-center">
                        Content
                    </div>
                    <NovaDrawerFooter>
                        <NovaDrawerClose asChild>
                        <NovaButton variant="outline">Close</NovaButton>
                        </NovaDrawerClose>
                    </NovaDrawerFooter>
                    </div>
                </NovaDrawerContent>
                </NovaDrawer>
            </div>
          )
        }
      ]}
    />
  )
}

"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Plus, Minus, HelpCircle, Settings, Shield } from "lucide-react"

export default function AccordionDocsV2Beta() {
  return (
    <ComponentDocTemplate
      title="Accordion"
      description="V2 accordion with custom icons, nested accordions, animated transitions, and variant styles."
      preview={
        <div className="space-y-6 w-full max-w-md">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <span>Getting Started</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>Learn how to get started with Nova.UI components.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-4 mt-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>Configuration</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>Configure your components with our flexible API.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-4 mt-2">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Security</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>Security best practices and guidelines.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { NovaAccordion } from "@/nova-ui"

// V2 exports additional variants
import { 
  NovaAccordion,
  AnimatedAccordion,
  CardAccordion,
  NestedAccordion 
} from "@/nova-ui"`}
      usageCode={`import { NovaAccordion } from "@/nova-ui"

// With custom icons (NEW in v2.0.0)
export function IconAccordion() {
  return (
    <NovaAccordion
      variant="card"
      iconPosition="left"
      expandIcon={<Plus />}
      collapseIcon={<Minus />}
      items={[
        { value: "1", title: "FAQ 1", icon: <HelpCircle />, content: "Answer 1" },
        { value: "2", title: "FAQ 2", icon: <HelpCircle />, content: "Answer 2" },
      ]}
    />
  )
}

// Nested accordion (NEW in v2.0.0)
export function NestedExample() {
  return (
    <NovaAccordion
      items={[
        { 
          value: "parent", 
          title: "Parent Item",
          content: (
            <NovaAccordion
              items={[
                { value: "child1", title: "Child 1", content: "Nested content" }
              ]}
            />
          )
        },
      ]}
    />
  )
}

// With animation variants (NEW in v2.0.0)
export function AnimatedExample() {
  return (
    <NovaAccordion
      animation="spring" // none, default, spring, smooth
      items={[...]}
    />
  )
}`}
      props={[
        {
          name: "type",
          type: '"single" | "multiple"',
          default: '"single"',
          description: "Single or multiple open items",
        },
        { name: "collapsible", type: "boolean", default: "false", description: "Allow collapsing all items" },
        { name: "defaultValue", type: "string | string[]", description: "Default open items" },
        { name: "items", type: "AccordionItem[]", description: "Array of accordion items" },
        { name: "disabled", type: "boolean", default: "false", description: "Disable all items" },
        {
          name: "variant",
          type: '"default" | "card" | "separated" | "bordered"',
          default: '"default"',
          description: "Visual variant (NEW in v2.0.0)",
        },
        {
          name: "iconPosition",
          type: '"left" | "right"',
          default: '"right"',
          description: "Icon position (NEW in v2.0.0)",
        },
        { name: "expandIcon", type: "ReactNode", description: "Custom expand icon (NEW in v2.0.0)" },
        { name: "collapseIcon", type: "ReactNode", description: "Custom collapse icon (NEW in v2.0.0)" },
        {
          name: "animation",
          type: '"none" | "default" | "spring" | "smooth"',
          default: '"default"',
          description: "Animation type (NEW in v2.0.0)",
        },
      ]}
      examples={[
        {
          title: "Card Variant",
          description: "Accordion with card-style items.",
          code: `<NovaAccordion
  variant="card"
  items={[
    { value: "1", title: "Card Item 1", icon: <Settings />, content: "Content" },
    { value: "2", title: "Card Item 2", icon: <Shield />, content: "Content" },
  ]}
/>`,
          preview: (
            <Accordion type="single" collapsible className="w-full max-w-md space-y-2">
              <AccordionItem value="item-1" className="border rounded-lg px-4 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Settings className="h-4 w-4" />
                    Card Item 1
                  </div>
                </AccordionTrigger>
                <AccordionContent>Card style content</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg px-4 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4" />
                    Card Item 2
                  </div>
                </AccordionTrigger>
                <AccordionContent>Card style content</AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
        {
          title: "Custom Icons",
          description: "Accordion with plus/minus icons.",
          code: `<NovaAccordion
  expandIcon={<Plus />}
  collapseIcon={<Minus />}
  items={[...]}
/>`,
          preview: (
            <Accordion type="single" collapsible className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger className="[&[data-state=open]>svg]:hidden [&[data-state=closed]>svg:last-child]:hidden">
                  <span>Custom Icon Item</span>
                  <Plus className="h-4 w-4 shrink-0" />
                  <Minus className="h-4 w-4 shrink-0" />
                </AccordionTrigger>
                <AccordionContent>Content with custom icons</AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
        {
          title: "Left Icon Position",
          description: "Icons on the left side.",
          code: `<NovaAccordion
  iconPosition="left"
  items={[
    { value: "1", title: "Left Icon", content: "Content" },
  ]}
/>`,
          preview: (
            <Accordion type="single" collapsible className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex-row-reverse justify-end gap-3">Left Icon Position</AccordionTrigger>
                <AccordionContent>Content with left-positioned icon</AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Collapsible", href: "/docs/components/collapsible" },
        { name: "Tabs", href: "/docs/components/tabs" },
        { name: "Card", href: "/docs/components/card" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}

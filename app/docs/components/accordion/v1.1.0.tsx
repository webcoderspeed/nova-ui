"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function AccordionDocsV1_1() {
  return (
    <ComponentDocTemplate
      title="Accordion"
      description="A vertically stacked set of interactive headings. Enhanced with better animations and disabled states."
      preview={
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>Yes. It comes with default styles that can be customized.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" disabled>
            <AccordionTrigger>Disabled Item</AccordionTrigger>
            <AccordionContent>This item is disabled.</AccordionContent>
          </AccordionItem>
        </Accordion>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { NovaAccordion } from "@/nova-ui"

// Or individual components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/nova-ui/accordion"`}
      usageCode={`import { NovaAccordion } from "@/nova-ui"

// Using NovaAccordion wrapper (NEW in v1.1.0)
export function MyAccordion() {
  return (
    <NovaAccordion
      type="single"
      collapsible
      items={[
        { value: "1", title: "Section 1", content: "Content 1" },
        { value: "2", title: "Section 2", content: "Content 2" },
        { value: "3", title: "Disabled", content: "Content 3", disabled: true },
      ]}
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
        { name: "items", type: "AccordionItem[]", description: "Array of accordion items (NEW in v1.1.0)" },
        { name: "disabled", type: "boolean", default: "false", description: "Disable all items (NEW in v1.1.0)" },
      ]}
      examples={[
        {
          title: "Multiple Open",
          description: "Allow multiple items to be open.",
          code: `<NovaAccordion
  type="multiple"
  items={[
    { value: "1", title: "Item 1", content: "Content 1" },
    { value: "2", title: "Item 2", content: "Content 2" },
  ]}
/>`,
          preview: (
            <Accordion type="multiple" className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>Item 1</AccordionTrigger>
                <AccordionContent>Content 1 - can be open with others</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Item 2</AccordionTrigger>
                <AccordionContent>Content 2 - can be open with others</AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
        {
          title: "With Disabled Item",
          description: "Accordion with disabled item.",
          code: `<NovaAccordion
  items={[
    { value: "1", title: "Active", content: "Active content" },
    { value: "2", title: "Disabled", content: "Disabled", disabled: true },
  ]}
/>`,
          preview: (
            <Accordion type="single" collapsible className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>Active</AccordionTrigger>
                <AccordionContent>This item is active</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" disabled>
                <AccordionTrigger className="opacity-50 cursor-not-allowed">Disabled</AccordionTrigger>
                <AccordionContent>This is disabled</AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Collapsible", href: "/docs/components/collapsible" },
        { name: "Tabs", href: "/docs/components/tabs" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}

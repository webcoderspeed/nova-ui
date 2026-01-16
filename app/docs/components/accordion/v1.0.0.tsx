"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function AccordionDocsV1() {
  return (
    <ComponentDocTemplate
      title="Accordion"
      description="A vertically stacked set of interactive headings that reveal content sections."
      preview={
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>Yes. It comes styled by default.</AccordionContent>
          </AccordionItem>
        </Accordion>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/nova-ui/accordion"`}
      usageCode={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/nova-ui/accordion"

export function MyAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content 1</AccordionContent>
      </AccordionItem>
    </Accordion>
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
      ]}
      examples={[
        {
          title: "Single",
          description: "Only one item open at a time.",
          code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Item 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>`,
          preview: (
            <Accordion type="single" collapsible className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>Item 1</AccordionTrigger>
                <AccordionContent>Content for item 1</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Item 2</AccordionTrigger>
                <AccordionContent>Content for item 2</AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Collapsible", href: "/docs/components/collapsible" },
        { name: "Tabs", href: "/docs/components/tabs" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}

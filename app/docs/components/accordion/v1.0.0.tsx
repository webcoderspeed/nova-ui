"use client"

import { NovaAccordion, NovaAccordionItem, NovaAccordionTrigger, NovaAccordionContent } from "@/components/nova/nova-accordion"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function AccordionDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Accordion"
      description="A vertically stacked set of interactive headings that each reveal a section of content."
      whenToUse={[
        "To organize large amounts of content into collapsible sections.",
        "When space is limited and you want to reduce scrolling.",
        "For FAQ sections."
      ]}
      hints={[
        {
          type:'info',
          content:'Supports `bordered`, `separated`, and `flush` variants.',
          title:'Variants'
        },
        {
          type:'info',
          content:'Can be controlled via `value` and `onValueChange` props.',
          title:'Controlled State'
        }
      ]}
      preview={
        <div className="w-full max-w-sm">
          <NovaAccordion
            type="single"
            collapsible
            items={[
              {
                value: "item-1",
                trigger: "Is it accessible?",
                content: "Yes. It adheres to the WAI-ARIA design pattern."
              },
              {
                value: "item-2",
                trigger: "Is it styled?",
                content: "Yes. It comes with default styles that matches the other components' aesthetic."
              },
              {
                value: "item-3",
                trigger: "Is it animated?",
                content: "Yes. It's animated by default, but you can disable it if you prefer."
              }
            ]}
          />
        </div>
      }
      installCommand="npx shadcn@latest add accordion"
      importCode={`import { NovaAccordion } from "@/components/nova/nova-accordion"`}
      usageCode={`<NovaAccordion
  type="single"
  collapsible
  items={[
    {
      value: "item-1",
      trigger: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern."
    }
  ]}
/>`}
      props={[
        {
          name: "variant",
          type: '"default" | "bordered" | "separated" | "flush"',
          defaultValue: '"default"',
          description: "Visual style of the accordion."
        },
        {
          name: "items",
          type: "Array<{ value: string; trigger: React.ReactNode; content: React.ReactNode; disabled?: boolean }>",
          defaultValue: "undefined",
          description: "Array of items to render (optional alternative to children)."
        }
      ]}
      examples={[
        {
          title: "Variants",
          description: "Different visual styles for the accordion.",
          code: `<div className="space-y-8">
  <NovaAccordion variant="bordered" type="single" collapsible items={[{ value: "1", trigger: "Bordered", content: "Content" }]} />
  <NovaAccordion variant="separated" type="single" collapsible items={[{ value: "2", trigger: "Separated", content: "Content" }]} />
  <NovaAccordion variant="flush" type="single" collapsible items={[{ value: "3", trigger: "Flush", content: "Content" }]} />
</div>`,
          preview: (
            <div className="space-y-8 w-full max-w-sm">
              <NovaAccordion variant="bordered" type="single" collapsible items={[{ value: "1", trigger: "Bordered", content: "Content" }]} />
              <NovaAccordion variant="separated" type="single" collapsible items={[{ value: "2", trigger: "Separated", content: "Content" }]} />
              <NovaAccordion variant="flush" type="single" collapsible items={[{ value: "3", trigger: "Flush", content: "Content" }]} />
            </div>
          )
        },
        {
          title: "Custom Content",
          description: "Using children instead of the items prop for more control.",
          code: `<NovaAccordion type="single" collapsible>
  <NovaAccordionItem value="item-1">
    <NovaAccordionTrigger>Custom Trigger</NovaAccordionTrigger>
    <NovaAccordionContent>
      You can put any content here.
    </NovaAccordionContent>
  </NovaAccordionItem>
</NovaAccordion>`,
          preview: (
            <div className="w-full max-w-sm">
              <NovaAccordion type="single" collapsible>
                <NovaAccordionItem value="item-1">
                  <NovaAccordionTrigger>Custom Trigger</NovaAccordionTrigger>
                  <NovaAccordionContent>
                    You can put any content here.
                  </NovaAccordionContent>
                </NovaAccordionItem>
              </NovaAccordion>
            </div>
          )
        }
      ]}
    />
  )
}

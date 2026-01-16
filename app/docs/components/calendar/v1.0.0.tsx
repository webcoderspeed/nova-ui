"use client"

import * as React from "react"
import { NovaCalendar } from "@/components/nova/nova-calendar"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function CalendarDocsV1() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Calendar"
      description="A calendar component used to select a date."
      whenToUse={[
        "When users need to pick a date from a calendar view.",
        "For scheduling or booking interfaces.",
        "To display a month view."
      ]}
      hints={[
        { type: "info", content: "Built on top of `react-day-picker`." },
        { type: "info", content: "Supports `glass`, `gradient`, and `neon` variants." },
        { type: "info", content: "Can be localized and customized." }
      ]}
      preview={
        <div className="flex flex-col gap-8 items-center">
          <NovaCalendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      }
      installCommand="npx shadcn@latest add calendar"
      importCode={`import { NovaCalendar } from "@/components/nova/nova-calendar"`}
      usageCode={`<NovaCalendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "gradient" | "neon"',
          defaultValue: '"default"',
          description: "Visual style of the calendar."
        }
      ]}
      examples={[
        {
          title: "Variants",
          description: "Different visual styles for the calendar.",
          code: `<div className="flex flex-wrap gap-8 justify-center">
  <NovaCalendar mode="single" selected={new Date()} variant="glass" />
  <NovaCalendar mode="single" selected={new Date()} variant="gradient" />
  <NovaCalendar mode="single" selected={new Date()} variant="neon" />
</div>`,
          preview: (
            <div className="flex flex-wrap gap-8 justify-center">
              <NovaCalendar mode="single" selected={new Date()} variant="glass" />
              <NovaCalendar mode="single" selected={new Date()} variant="gradient" />
              <NovaCalendar mode="single" selected={new Date()} variant="neon" />
            </div>
          )
        }
      ]}
    />
  )
}

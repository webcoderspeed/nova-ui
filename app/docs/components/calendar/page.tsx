"use client"

import { useState } from "react"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = useState<{ from: Date; to?: Date } | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  })

  return (
    <ComponentDocTemplate
      title="Calendar"
      description="A date picker component with range and multi-select support. Built on top of react-day-picker."
      preview={<Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />}
      installCommand="npx nova-ui@latest add calendar"
      importCode={`import { Calendar } from "@/components/ui/calendar"`}
      usageCode={`import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function MyComponent() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`}
      props={[
        {
          name: "mode",
          type: '"single" | "multiple" | "range"',
          default: '"single"',
          description: "The selection mode",
        },
        { name: "selected", type: "Date | Date[] | DateRange", description: "The selected date(s)" },
        { name: "onSelect", type: "function", description: "Callback when date is selected" },
        { name: "disabled", type: "Matcher | Matcher[]", description: "Dates to disable" },
        { name: "initialFocus", type: "boolean", description: "Focus calendar on mount" },
        { name: "numberOfMonths", type: "number", default: "1", description: "Number of months to display" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "Date Range",
          description: "Select a range of dates.",
          code: `const [date, setDate] = useState<DateRange | undefined>({
  from: new Date(),
  to: addDays(new Date(), 7),
})

<Calendar
  mode="range"
  selected={date}
  onSelect={setDate}
  numberOfMonths={2}
/>`,
          preview: (
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={(range) => setDateRange(range as { from: Date; to?: Date })}
              numberOfMonths={1}
              className="rounded-md border"
            />
          ),
        },
        {
          title: "Disabled Dates",
          description: "Disable specific dates or date ranges.",
          code: `<Calendar
  mode="single"
  disabled={{ before: new Date() }}
/>`,
          preview: <Calendar mode="single" disabled={{ before: new Date() }} className="rounded-md border" />,
        },
      ]}
      relatedComponents={[
        { name: "Popover", href: "/docs/components/popover" },
        { name: "Input", href: "/docs/components/input" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/calendar.tsx"
    />
  )
}

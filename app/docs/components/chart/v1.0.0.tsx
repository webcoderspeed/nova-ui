"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  NovaChartContainer,
  NovaChartLegend,
  NovaChartLegendContent,
  NovaChartTooltip,
  NovaChartTooltipContent,
  type ChartConfig,
} from "@/components/nova/nova-chart"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function ChartDocsV1() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig

  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Chart"
      description="Beautiful charts built with Recharts and styled with Tailwind CSS."
      whenToUse={[
        "To visualize data trends.",
        "To display statistics.",
        "When you need interactive and responsive charts."
      ]}
      hints={[
        { type: "info", content: "Built on top of Recharts." },
        { type: "info", content: "Supports `glass` and `bordered` container variants." },
        { type: "info", content: "Tooltips can also be styled with variants." }
      ]}
      preview={
        <div className="w-full max-w-sm">
          <NovaChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <NovaChartTooltip content={<NovaChartTooltipContent />} />
              <NovaChartLegend content={<NovaChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </NovaChartContainer>
        </div>
      }
      installCommand="npx shadcn@latest add chart"
      importCode={`import { NovaChartContainer, NovaChartTooltip, NovaChartTooltipContent } from "@/components/nova/nova-chart"`}
      usageCode={`<NovaChartContainer config={chartConfig} className="min-h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</NovaChartContainer>`}
      props={[
        {
          name: "variant",
          type: '"default" | "bordered" | "glass"',
          defaultValue: '"default"',
          description: "Visual style of the chart container."
        }
      ]}
      examples={[
        {
          title: "Variants",
          description: "Different visual styles for the chart container.",
          code: `<NovaChartContainer variant="glass" config={chartConfig} className="min-h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
  </BarChart>
</NovaChartContainer>`,
          preview: (
            <div className="w-full max-w-sm">
              <NovaChartContainer variant="glass" config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                </BarChart>
              </NovaChartContainer>
            </div>
          )
        }
      ]}
    />
  )
}

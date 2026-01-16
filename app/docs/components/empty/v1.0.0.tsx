"use client"

import * as React from "react"
import { PackageOpen } from "lucide-react"
import { NovaEmpty, NovaEmptyHeader, NovaEmptyMedia, NovaEmptyTitle } from "@/components/nova/nova-empty"
import { NovaButton } from "@/components/nova/nova-button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { EmptyDescription } from "@/components/ui/empty"

export default function EmptyDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Empty"
      description="A placeholder component for empty states."
      whenToUse={[
        "When there is no data to display.",
        "To guide users to create content.",
        "To handle 404 or error states."
      ]}
      hints={[
        { type: "info", content: "Supports `solid` and `ghost` variants." },
        { type: "info", content: "Media can have effects like `glow` or `bounce`." },
        { type: "info", content: "Includes subcomponents for header, media, title, and description." }
      ]}
      preview={
        <div className="w-full max-w-sm">
          <NovaEmpty>
            <NovaEmptyHeader>
              <NovaEmptyMedia effect="bounce">
                <PackageOpen className="h-12 w-12 text-muted-foreground" />
              </NovaEmptyMedia>
              <NovaEmptyTitle>No Products Found</NovaEmptyTitle>
              <EmptyDescription>
                You haven't added any products yet. Start by creating one.
              </EmptyDescription>
            </NovaEmptyHeader>
            <NovaButton>Create Product</NovaButton>
          </NovaEmpty>
        </div>
      }
      installCommand="npx shadcn@latest add empty"
      importCode={`import { NovaEmpty, NovaEmptyHeader, NovaEmptyMedia, NovaEmptyTitle } from "@/components/nova/nova-empty"`}
      usageCode={`<NovaEmpty>
  <NovaEmptyHeader>
    <NovaEmptyMedia>
      <PackageOpen />
    </NovaEmptyMedia>
    <NovaEmptyTitle>No Data</NovaEmptyTitle>
  </NovaEmptyHeader>
  <NovaButton>Action</NovaButton>
</NovaEmpty>`}
      props={[
        {
          name: "variant",
          type: '"default" | "solid" | "ghost"',
          defaultValue: '"default"',
          description: "Visual style of the empty container."
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg"',
          defaultValue: '"default"',
          description: "Size of the empty container."
        }
      ]}
      examples={[
        {
          title: "Solid Variant",
          description: "Empty state with a solid background.",
          code: `<NovaEmpty variant="solid">
  <NovaEmptyHeader>
    <NovaEmptyTitle>Solid Variant</NovaEmptyTitle>
    <EmptyDescription>This variant has a background color.</EmptyDescription>
  </NovaEmptyHeader>
</NovaEmpty>`,
          preview: (
            <div className="w-full max-w-sm">
              <NovaEmpty variant="solid">
                <NovaEmptyHeader>
                  <NovaEmptyTitle>Solid Variant</NovaEmptyTitle>
                  <EmptyDescription>This variant has a background color.</EmptyDescription>
                </NovaEmptyHeader>
              </NovaEmpty>
            </div>
          )
        }
      ]}
    />
  )
}

"use client"

import * as React from "react"
import { NovaInputGroup, NovaInputGroupText } from "@/components/nova/nova-input-group"
import { NovaInput } from "@/components/nova/nova-input"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Search, Mail, Globe, Lock, CreditCard } from "lucide-react"

export default function InputGroupDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Form"
      title="Input Group"
      description="Containers for grouping inputs with icons, text, or buttons."
      whenToUse={[
        "When adding context to an input (e.g., currency symbol, email icon).",
        "When grouping an input with a button (e.g., search bar).",
        "When creating complex form layouts."
      ]}
      hints={[
        { type: "info", content: "Use `NovaInputGroupText` for static text or icons." },
        { type: "info", content: "Supports various variants including `neumorphic`, `glass`, and `neon`." },
        { type: "info", content: "Can be set to `full` width or `auto`." }
      ]}
      preview={
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <NovaInputGroup>
            <NovaInputGroupText>
              <Mail className="h-4 w-4" />
            </NovaInputGroupText>
            <NovaInput placeholder="Email" />
          </NovaInputGroup>
          
          <NovaInputGroup variant="glow">
            <NovaInputGroupText>
              <Lock className="h-4 w-4" />
            </NovaInputGroupText>
            <NovaInput placeholder="Password" type="password" />
          </NovaInputGroup>

          <NovaInputGroup variant="glass">
            <NovaInputGroupText>https://</NovaInputGroupText>
            <NovaInput placeholder="example.com" />
            <NovaInputGroupText>
              <Globe className="h-4 w-4" />
            </NovaInputGroupText>
          </NovaInputGroup>
        </div>
      }
      installCommand="npx shadcn@latest add input"
      importCode={`import { NovaInputGroup, NovaInputGroupText } from "@/components/nova/nova-input-group"
import { NovaInput } from "@/components/nova/nova-input"`}
      usageCode={`<NovaInputGroup>
  <NovaInputGroupText>@</NovaInputGroupText>
  <NovaInput placeholder="Username" />
</NovaInputGroup>`}
      props={[
        {
          name: "variant",
          type: '"default" | "filled" | "outline" | "ghost" | "neumorphic" | "glass" | "glow" | "neon"',
          defaultValue: '"default"',
          description: "Visual style of the input group."
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg"',
          defaultValue: '"default"',
          description: "Size of the input group components."
        },
        {
          name: "width",
          type: '"auto" | "full"',
          defaultValue: '"full"',
          description: "Width of the container."
        }
      ]}
      examples={[
        {
          title: "Variants",
          description: "Different visual styles for the input group.",
          code: `<div className="space-y-4">
  <NovaInputGroup variant="filled">
    <NovaInputGroupText>Filled</NovaInputGroupText>
    <NovaInput placeholder="Filled variant" />
  </NovaInputGroup>
  <NovaInputGroup variant="outline">
    <NovaInputGroupText>Outline</NovaInputGroupText>
    <NovaInput placeholder="Outline variant" />
  </NovaInputGroup>
  <NovaInputGroup variant="neumorphic">
    <NovaInputGroupText>Neu</NovaInputGroupText>
    <NovaInput placeholder="Neumorphic variant" />
  </NovaInputGroup>
   <NovaInputGroup variant="neon">
    <NovaInputGroupText>Neon</NovaInputGroupText>
    <NovaInput placeholder="Neon variant" />
  </NovaInputGroup>
</div>`,
          preview: (
            <div className="space-y-4 w-full max-w-sm">
              <NovaInputGroup variant="filled">
                <NovaInputGroupText>Filled</NovaInputGroupText>
                <NovaInput placeholder="Filled variant" />
              </NovaInputGroup>
              <NovaInputGroup variant="outline">
                <NovaInputGroupText>Outline</NovaInputGroupText>
                <NovaInput placeholder="Outline variant" />
              </NovaInputGroup>
              <NovaInputGroup variant="neumorphic">
                <NovaInputGroupText>Neu</NovaInputGroupText>
                <NovaInput placeholder="Neumorphic variant" />
              </NovaInputGroup>
               <NovaInputGroup variant="neon">
                <NovaInputGroupText>Neon</NovaInputGroupText>
                <NovaInput placeholder="Neon variant" />
              </NovaInputGroup>
            </div>
          )
        },
        {
          title: "Sizes",
          description: "Available sizes for the input group.",
          code: `<div className="space-y-4">
  <NovaInputGroup size="sm">
    <NovaInputGroupText>SM</NovaInputGroupText>
    <NovaInput placeholder="Small" />
  </NovaInputGroup>
  <NovaInputGroup size="default">
    <NovaInputGroupText>DEF</NovaInputGroupText>
    <NovaInput placeholder="Default" />
  </NovaInputGroup>
  <NovaInputGroup size="lg">
    <NovaInputGroupText>LG</NovaInputGroupText>
    <NovaInput placeholder="Large" />
  </NovaInputGroup>
</div>`,
          preview: (
            <div className="space-y-4 w-full max-w-sm">
              <NovaInputGroup size="sm">
                <NovaInputGroupText>SM</NovaInputGroupText>
                <NovaInput placeholder="Small" />
              </NovaInputGroup>
              <NovaInputGroup size="default">
                <NovaInputGroupText>DEF</NovaInputGroupText>
                <NovaInput placeholder="Default" />
              </NovaInputGroup>
              <NovaInputGroup size="lg">
                <NovaInputGroupText>LG</NovaInputGroupText>
                <NovaInput placeholder="Large" />
              </NovaInputGroup>
            </div>
          )
        },
        {
          title: "With Icons",
          description: "Using icons within the input group.",
          code: `<div className="space-y-4">
  <NovaInputGroup>
    <NovaInputGroupText><Search className="h-4 w-4" /></NovaInputGroupText>
    <NovaInput placeholder="Search..." />
  </NovaInputGroup>
  <NovaInputGroup>
    <NovaInput placeholder="Card number" />
    <NovaInputGroupText><CreditCard className="h-4 w-4" /></NovaInputGroupText>
  </NovaInputGroup>
</div>`,
          preview: (
            <div className="space-y-4 w-full max-w-sm">
              <NovaInputGroup>
                <NovaInputGroupText><Search className="h-4 w-4" /></NovaInputGroupText>
                <NovaInput placeholder="Search..." />
              </NovaInputGroup>
              <NovaInputGroup>
                <NovaInput placeholder="Card number" />
                <NovaInputGroupText><CreditCard className="h-4 w-4" /></NovaInputGroupText>
              </NovaInputGroup>
            </div>
          )
        }
      ]}
    />
  )
}

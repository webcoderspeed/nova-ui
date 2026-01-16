"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function TabsDocsV1() {
  return (
    <ComponentDocTemplate
      title="Tabs"
      description="A set of layered sections of content that display one panel at a time."
      preview={
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Account settings here.</TabsContent>
          <TabsContent value="password">Password settings here.</TabsContent>
        </Tabs>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/nova-ui/tabs"`}
      usageCode={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/nova-ui/tabs"

export function MyTabs() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  )
}`}
      props={[
        { name: "defaultValue", type: "string", description: "Default active tab" },
        { name: "value", type: "string", description: "Controlled active tab" },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback on tab change" },
      ]}
      examples={[
        {
          title: "Basic Tabs",
          description: "Simple tab navigation.",
          code: `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="analytics">Analytics content</TabsContent>
</Tabs>`,
          preview: (
            <Tabs defaultValue="overview" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">Overview content</TabsContent>
              <TabsContent value="analytics">Analytics content</TabsContent>
            </Tabs>
          ),
        },
      ]}
      relatedComponents={[{ name: "Accordion", href: "/docs/components/accordion" }]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}

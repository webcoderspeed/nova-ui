"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function TabsDocsV1_1() {
  return (
    <ComponentDocTemplate
      title="Tabs"
      description="A set of layered sections of content. Enhanced with better keyboard navigation and disabled states."
      preview={
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Make changes to your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current</Label>
                  <Input id="current" type="password" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { NovaTabs } from "@/nova-ui"

// Or individual components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/nova-ui/tabs"`}
      usageCode={`import { NovaTabs } from "@/nova-ui"

// Using NovaTabs wrapper (NEW in v1.1.0)
export function MyTabs() {
  return (
    <NovaTabs 
      defaultValue="tab1"
      tabs={[
        { value: "tab1", label: "Tab 1", content: <div>Content 1</div> },
        { value: "tab2", label: "Tab 2", content: <div>Content 2</div> },
        { value: "tab3", label: "Tab 3", content: <div>Content 3</div>, disabled: true },
      ]}
    />
  )
}`}
      props={[
        { name: "defaultValue", type: "string", description: "Default active tab" },
        { name: "value", type: "string", description: "Controlled active tab" },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback on tab change" },
        { name: "tabs", type: "TabItem[]", description: "Array of tab items (NEW in v1.1.0)" },
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          default: '"horizontal"',
          description: "Tab orientation",
        },
      ]}
      examples={[
        {
          title: "With Cards",
          description: "Tabs with card content.",
          code: `<NovaTabs 
  defaultValue="account"
  tabs={[
    { 
      value: "account", 
      label: "Account", 
      content: <Card>...</Card> 
    },
    { 
      value: "settings", 
      label: "Settings", 
      content: <Card>...</Card> 
    },
  ]}
/>`,
          preview: (
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                  </CardHeader>
                </Card>
              </TabsContent>
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Settings</CardTitle>
                  </CardHeader>
                </Card>
              </TabsContent>
            </Tabs>
          ),
        },
        {
          title: "Disabled Tab",
          description: "Tab with disabled state.",
          code: `<Tabs defaultValue="active">
  <TabsList>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
  </TabsList>
</Tabs>`,
          preview: (
            <Tabs defaultValue="active" className="w-[300px]">
              <TabsList>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="disabled" disabled>
                  Disabled
                </TabsTrigger>
              </TabsList>
              <TabsContent value="active">Active tab content</TabsContent>
            </Tabs>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Accordion", href: "/docs/components/accordion" },
        { name: "Card", href: "/docs/components/card" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}

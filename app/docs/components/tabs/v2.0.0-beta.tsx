"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Settings, User, Bell } from "lucide-react"

export default function TabsDocsV2Beta() {
  return (
    <ComponentDocTemplate
      title="Tabs"
      description="V2 tabs with animations, icons, badges, vertical orientation, and lazy loading support."
      preview={
        <div className="space-y-6">
          <Tabs defaultValue="account" className="w-[500px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Account
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notifications
                <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">3</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="animate-in fade-in-50 duration-200">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                </CardHeader>
                <CardContent>Manage your account settings.</CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="animate-in fade-in-50 duration-200">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent>Configure notifications.</CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings" className="animate-in fade-in-50 duration-200">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                </CardHeader>
                <CardContent>App settings here.</CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { NovaTabs } from "@/nova-ui"

// V2 exports additional variants
import { 
  NovaTabs,
  AnimatedTabs,
  VerticalTabs,
  IconTabs 
} from "@/nova-ui"`}
      usageCode={`import { NovaTabs } from "@/nova-ui"

// With icons and badges (NEW in v2.0.0)
export function IconTabsExample() {
  return (
    <NovaTabs 
      defaultValue="account"
      animated
      tabs={[
        { 
          value: "account", 
          label: "Account", 
          icon: <User className="h-4 w-4" />,
          content: <div>Account content</div> 
        },
        { 
          value: "notifications", 
          label: "Notifications", 
          icon: <Bell className="h-4 w-4" />,
          badge: 3,
          content: <div>Notifications</div> 
        },
      ]}
    />
  )
}

// Vertical tabs (NEW in v2.0.0)
export function VerticalExample() {
  return (
    <NovaTabs 
      orientation="vertical"
      tabs={[...]}
    />
  )
}

// With lazy loading (NEW in v2.0.0)
export function LazyExample() {
  return (
    <NovaTabs 
      lazyLoad
      tabs={[
        { value: "heavy", label: "Heavy", content: <HeavyComponent /> },
      ]}
    />
  )
}`}
      props={[
        { name: "defaultValue", type: "string", description: "Default active tab" },
        { name: "value", type: "string", description: "Controlled active tab" },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback on tab change" },
        { name: "tabs", type: "TabItem[]", description: "Array of tab items" },
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          default: '"horizontal"',
          description: "Tab orientation",
        },
        {
          name: "animated",
          type: "boolean",
          default: "false",
          description: "Enable content animations (NEW in v2.0.0)",
        },
        { name: "lazyLoad", type: "boolean", default: "false", description: "Lazy load tab content (NEW in v2.0.0)" },
        {
          name: "variant",
          type: '"default" | "pills" | "underline"',
          default: '"default"',
          description: "Tab style variant (NEW in v2.0.0)",
        },
      ]}
      examples={[
        {
          title: "With Icons and Badges",
          description: "Tabs with icons and notification badges.",
          code: `<NovaTabs 
  animated
  tabs={[
    { value: "user", label: "Profile", icon: <User /> },
    { value: "bell", label: "Alerts", icon: <Bell />, badge: 5 },
    { value: "settings", label: "Settings", icon: <Settings /> },
  ]}
/>`,
          preview: (
            <Tabs defaultValue="user" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="user" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="bell" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Alerts
                  <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">5</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>
          ),
        },
        {
          title: "Vertical Orientation",
          description: "Tabs arranged vertically.",
          code: `<NovaTabs 
  orientation="vertical"
  tabs={[
    { value: "general", label: "General" },
    { value: "security", label: "Security" },
    { value: "billing", label: "Billing" },
  ]}
/>`,
          preview: (
            <Tabs defaultValue="general" orientation="vertical" className="flex w-[400px] gap-4">
              <TabsList className="flex flex-col h-auto">
                <TabsTrigger value="general" className="justify-start">
                  General
                </TabsTrigger>
                <TabsTrigger value="security" className="justify-start">
                  Security
                </TabsTrigger>
                <TabsTrigger value="billing" className="justify-start">
                  Billing
                </TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="flex-1">
                General settings
              </TabsContent>
              <TabsContent value="security" className="flex-1">
                Security settings
              </TabsContent>
              <TabsContent value="billing" className="flex-1">
                Billing settings
              </TabsContent>
            </Tabs>
          ),
        },
        {
          title: "Animated Content",
          description: "Tabs with smooth content transitions.",
          code: `<NovaTabs 
  animated
  animationType="fade" // fade, slide, scale
  tabs={[...]}
/>`,
          preview: (
            <Tabs defaultValue="first" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="first">First</TabsTrigger>
                <TabsTrigger value="second">Second</TabsTrigger>
              </TabsList>
              <TabsContent value="first" className="animate-in fade-in-50 slide-in-from-left-2 duration-200">
                <Card>
                  <CardHeader>
                    <CardTitle>First Tab</CardTitle>
                  </CardHeader>
                  <CardContent>Animated content</CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="second" className="animate-in fade-in-50 slide-in-from-right-2 duration-200">
                <Card>
                  <CardHeader>
                    <CardTitle>Second Tab</CardTitle>
                  </CardHeader>
                  <CardContent>Also animated</CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Accordion", href: "/docs/components/accordion" },
        { name: "Card", href: "/docs/components/card" },
        { name: "Navigation Menu", href: "/docs/components/navigation-menu" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}

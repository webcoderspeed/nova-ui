"use client"

import { NovaTabs, NovaTabsList, NovaTabsTrigger, NovaTabsContent } from "@/components/nova/nova-tabs"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { User, Settings, Lock } from "lucide-react"

export default function TabsDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Tabs"
      description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
      whenToUse={[
        "To organize content into categories.",
        "When space is limited and you want to switch between views.",
        "To allow users to manage related but distinct tasks."
      ]}
      hints={[
        { type: "info", content: "Supports `pills`, `underline`, and `outline` variants." },
        { type: "info", content: "Can be configured with a `tabs` prop for simpler usage or children for full control." },
        { type: "info", content: "Responsive `fullWidth` mode available." }
      ]}
      preview={
        <div className="w-full max-w-[400px]">
          <NovaTabs defaultValue="account" className="w-full">
            <NovaTabsList className="grid w-full grid-cols-2">
              <NovaTabsTrigger value="account">Account</NovaTabsTrigger>
              <NovaTabsTrigger value="password">Password</NovaTabsTrigger>
            </NovaTabsList>
            <NovaTabsContent value="account">
              <div className="p-4 border rounded-md mt-2">
                <h3 className="font-medium">Account</h3>
                <p className="text-sm text-muted-foreground">Manage your account settings here.</p>
              </div>
            </NovaTabsContent>
            <NovaTabsContent value="password">
              <div className="p-4 border rounded-md mt-2">
                <h3 className="font-medium">Password</h3>
                <p className="text-sm text-muted-foreground">Change your password here.</p>
              </div>
            </NovaTabsContent>
          </NovaTabs>
        </div>
      }
      installCommand="npx nova-ui@latest add tabs"
      importCode={`import { NovaTabs, NovaTabsList, NovaTabsTrigger, NovaTabsContent } from "@/components/nova/nova-tabs"`}
      usageCode={`<NovaTabs defaultValue="account">
  <NovaTabsList>
    <NovaTabsTrigger value="account">Account</NovaTabsTrigger>
    <NovaTabsTrigger value="password">Password</NovaTabsTrigger>
  </NovaTabsList>
  <NovaTabsContent value="account">Account settings...</NovaTabsContent>
  <NovaTabsContent value="password">Password settings...</NovaTabsContent>
</NovaTabs>`}
      props={[
        {
          name: "variant",
          type: '"default" | "pills" | "underline" | "outline"',
          defaultValue: '"default"',
          description: "Visual style of the tabs.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg"',
          defaultValue: '"md"',
          description: "Size of the tab triggers.",
        },
        {
          name: "fullWidth",
          type: "boolean",
          defaultValue: "false",
          description: "If true, tabs take up the full width of the container.",
        },
        {
          name: "tabs",
          type: "Array<{ value: string, label: ReactNode, content: ReactNode, icon?: ReactNode }>",
          description: "Optional data-driven approach to rendering tabs.",
        },
      ]}
      examples={[
        {
          title: "Pills Variant",
          description: "Tabs styled as pill-shaped buttons.",
          code: `<NovaTabs variant="pills" defaultValue="music" className="w-[400px]">
  <NovaTabsList>
    <NovaTabsTrigger value="music">Music</NovaTabsTrigger>
    <NovaTabsTrigger value="podcasts">Podcasts</NovaTabsTrigger>
    <NovaTabsTrigger value="live">Live</NovaTabsTrigger>
  </NovaTabsList>
  {/* Content... */}
</NovaTabs>`,
          preview: (
            <NovaTabs variant="pills" defaultValue="music" className="w-full max-w-[400px]">
              <NovaTabsList>
                <NovaTabsTrigger value="music">Music</NovaTabsTrigger>
                <NovaTabsTrigger value="podcasts">Podcasts</NovaTabsTrigger>
                <NovaTabsTrigger value="live">Live</NovaTabsTrigger>
              </NovaTabsList>
              <NovaTabsContent value="music" className="p-4 border rounded-md mt-2">Music Content</NovaTabsContent>
              <NovaTabsContent value="podcasts" className="p-4 border rounded-md mt-2">Podcasts Content</NovaTabsContent>
              <NovaTabsContent value="live" className="p-4 border rounded-md mt-2">Live Content</NovaTabsContent>
            </NovaTabs>
          )
        },
        {
          title: "Data-Driven Prop",
          description: "Render tabs using the `tabs` prop for cleaner code.",
          code: `<NovaTabs
  variant="underline"
  defaultValue="user"
  tabs={[
    { value: "user", label: "Profile", icon: <User className="h-4 w-4" />, content: "Profile Content" },
    { value: "settings", label: "Settings", icon: <Settings className="h-4 w-4" />, content: "Settings Content" },
    { value: "security", label: "Security", icon: <Lock className="h-4 w-4" />, content: "Security Content" },
  ]}
/>`,
          preview: (
            <div className="w-full max-w-[400px]">
              <NovaTabs
                variant="underline"
                defaultValue="user"
                tabs={[
                  { value: "user", label: "Profile", icon: <User className="h-4 w-4" />, content: <div className="p-4">Profile Content</div> },
                  { value: "settings", label: "Settings", icon: <Settings className="h-4 w-4" />, content: <div className="p-4">Settings Content</div> },
                  { value: "security", label: "Security", icon: <Lock className="h-4 w-4" />, content: <div className="p-4">Security Content</div> },
                ]}
              />
            </div>
          )
        }
      ]}
    />
  )
}

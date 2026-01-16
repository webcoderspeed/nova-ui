"use client"

import { 
  NovaSidebar, 
  NovaSidebarProvider, 
  NovaSidebarContent, 
  NovaSidebarGroup, 
  NovaSidebarGroupContent, 
  NovaSidebarGroupLabel, 
  NovaSidebarMenu, 
  NovaSidebarMenuButton, 
  NovaSidebarMenuItem,
  NovaSidebarHeader,
  NovaSidebarFooter
} from "@/components/nova/nova-sidebar"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Calendar, Home, Inbox, Search, Settings, User } from "lucide-react"

export default function SidebarDocsV1() {
  const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]

  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Sidebar"
      description="A composable, mobile-friendly, and collapsible sidebar component."
      whenToUse={[
        "For main application navigation.",
        "To organize complex menus and actions.",
        "When you need a responsive drawer on mobile devices."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaSidebar adds an `effect` prop for 'glass' or 'solid' styling, seamlessly integrating with the Nova design language."
        }
      ]}
      preview={
        <div className="h-[400px] w-full border rounded-lg overflow-hidden relative">
          <NovaSidebarProvider className="h-full min-h-[400px]">
            <NovaSidebar effect="glass" className="h-full">
              <NovaSidebarHeader>
                 <div className="flex items-center gap-2 px-4 py-2">
                   <div className="h-6 w-6 rounded bg-primary" />
                   <span className="font-bold">Acme Inc</span>
                 </div>
              </NovaSidebarHeader>
              <NovaSidebarContent>
                <NovaSidebarGroup>
                  <NovaSidebarGroupLabel>Application</NovaSidebarGroupLabel>
                  <NovaSidebarGroupContent>
                    <NovaSidebarMenu>
                      {items.map((item) => (
                        <NovaSidebarMenuItem key={item.title}>
                          <NovaSidebarMenuButton asChild>
                            <a href={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </a>
                          </NovaSidebarMenuButton>
                        </NovaSidebarMenuItem>
                      ))}
                    </NovaSidebarMenu>
                  </NovaSidebarGroupContent>
                </NovaSidebarGroup>
              </NovaSidebarContent>
              <NovaSidebarFooter>
                 <div className="p-4 text-xs text-muted-foreground">
                   © 2024 Nova UI
                 </div>
              </NovaSidebarFooter>
            </NovaSidebar>
            <main className="flex-1 p-6">
              <div className="h-full rounded-lg border border-dashed p-4 flex items-center justify-center text-muted-foreground">
                Main Content Area
              </div>
            </main>
          </NovaSidebarProvider>
        </div>
      }
      installCommand="npx nova-ui@latest add sidebar"
      importCode={`import { 
  NovaSidebar, 
  NovaSidebarProvider, 
  NovaSidebarContent, 
  NovaSidebarGroup, 
  NovaSidebarMenu, 
  NovaSidebarMenuItem, 
  NovaSidebarMenuButton 
} from "@/components/nova/nova-sidebar"`}
      usageCode={`import { NovaSidebarProvider, NovaSidebarTrigger } from "@/components/nova/nova-sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NovaSidebarProvider>
      <AppSidebar />
      <main>
        <NovaSidebarTrigger />
        {children}
      </main>
    </NovaSidebarProvider>
  )
}`}
      props={[
        {
          name: "effect",
          type: '"default" | "glass" | "solid"',
          defaultValue: '"default"',
          description: "Visual style of the sidebar background.",
        }
      ]}
      examples={[
        {
          title: "Glass Effect",
          description: "A sidebar with a glassmorphism background.",
          code: `<NovaSidebar effect="glass">
  {/* Sidebar content */}
</NovaSidebar>`,
          preview: (
            <div className="h-[200px] w-full border rounded-lg overflow-hidden relative">
               <NovaSidebarProvider className="h-full min-h-[200px]">
                 <NovaSidebar effect="glass" className="h-full w-[200px]">
                    <NovaSidebarContent>
                      <NovaSidebarMenu>
                        <NovaSidebarMenuItem>
                          <NovaSidebarMenuButton>
                             <Home />
                             <span>Home</span>
                          </NovaSidebarMenuButton>
                        </NovaSidebarMenuItem>
                      </NovaSidebarMenu>
                    </NovaSidebarContent>
                 </NovaSidebar>
                 <div className="flex-1 p-4">Content</div>
               </NovaSidebarProvider>
            </div>
          )
        }
      ]}
    />
  )
}

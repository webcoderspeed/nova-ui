"use client"

import {
  NovaMenubar,
  NovaMenubarMenu,
  NovaMenubarTrigger,
  NovaMenubarContent,
  NovaMenubarItem,
  NovaMenubarSeparator,
  NovaMenubarLabel,
  NovaMenubarCheckboxItem,
  NovaMenubarRadioGroup,
  NovaMenubarRadioItem,
  NovaMenubarPortal,
  NovaMenubarSubContent,
  NovaMenubarSubTrigger,
  NovaMenubarSub,
} from "@/components/nova/nova-menubar"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function MenubarDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Navigation"
      title="Menubar"
      description="A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands."
      whenToUse={[
        "To provide a top-level navigation structure similar to desktop apps.",
        "When you have complex nested menus.",
        "To organize global application commands."
      ]}
      hints={[
        { type: "info", content: "Supports `glass` and `floating` variants." },
        { type: "info", content: "Can contain submenus, checkboxes, and radio items." }
      ]}
      preview={
        <NovaMenubar>
          <NovaMenubarMenu>
            <NovaMenubarTrigger>File</NovaMenubarTrigger>
            <NovaMenubarContent>
              <NovaMenubarItem>
                New Tab <span className="ml-auto text-xs tracking-widest text-muted-foreground">⌘T</span>
              </NovaMenubarItem>
              <NovaMenubarItem>
                New Window <span className="ml-auto text-xs tracking-widest text-muted-foreground">⌘N</span>
              </NovaMenubarItem>
              <NovaMenubarItem disabled>New Incognito Window</NovaMenubarItem>
              <NovaMenubarSeparator />
              <NovaMenubarSub>
                <NovaMenubarSubTrigger>Share</NovaMenubarSubTrigger>
                <NovaMenubarSubContent>
                  <NovaMenubarItem>Email link</NovaMenubarItem>
                  <NovaMenubarItem>Messages</NovaMenubarItem>
                  <NovaMenubarItem>Notes</NovaMenubarItem>
                </NovaMenubarSubContent>
              </NovaMenubarSub>
              <NovaMenubarSeparator />
              <NovaMenubarItem>
                Print... <span className="ml-auto text-xs tracking-widest text-muted-foreground">⌘P</span>
              </NovaMenubarItem>
            </NovaMenubarContent>
          </NovaMenubarMenu>
          <NovaMenubarMenu>
            <NovaMenubarTrigger>Edit</NovaMenubarTrigger>
            <NovaMenubarContent>
              <NovaMenubarItem>
                Undo <span className="ml-auto text-xs tracking-widest text-muted-foreground">⌘Z</span>
              </NovaMenubarItem>
              <NovaMenubarItem>
                Redo <span className="ml-auto text-xs tracking-widest text-muted-foreground">⇧⌘Z</span>
              </NovaMenubarItem>
              <NovaMenubarSeparator />
              <NovaMenubarSub>
                <NovaMenubarSubTrigger>Find</NovaMenubarSubTrigger>
                <NovaMenubarSubContent>
                  <NovaMenubarItem>Search the web</NovaMenubarItem>
                  <NovaMenubarSeparator />
                  <NovaMenubarItem>Find...</NovaMenubarItem>
                  <NovaMenubarItem>Find Next</NovaMenubarItem>
                  <NovaMenubarItem>Find Previous</NovaMenubarItem>
                </NovaMenubarSubContent>
              </NovaMenubarSub>
              <NovaMenubarSeparator />
              <NovaMenubarItem>Cut</NovaMenubarItem>
              <NovaMenubarItem>Copy</NovaMenubarItem>
              <NovaMenubarItem>Paste</NovaMenubarItem>
            </NovaMenubarContent>
          </NovaMenubarMenu>
          <NovaMenubarMenu>
            <NovaMenubarTrigger>View</NovaMenubarTrigger>
            <NovaMenubarContent>
              <NovaMenubarCheckboxItem>Always Show Bookmarks Bar</NovaMenubarCheckboxItem>
              <NovaMenubarCheckboxItem checked>Always Show Full URLs</NovaMenubarCheckboxItem>
              <NovaMenubarSeparator />
              <NovaMenubarItem inset>
                Reload <span className="ml-auto text-xs tracking-widest text-muted-foreground">⌘R</span>
              </NovaMenubarItem>
              <NovaMenubarItem disabled inset>
                Force Reload <span className="ml-auto text-xs tracking-widest text-muted-foreground">⇧⌘R</span>
              </NovaMenubarItem>
              <NovaMenubarSeparator />
              <NovaMenubarItem inset>Toggle Fullscreen</NovaMenubarItem>
              <NovaMenubarSeparator />
              <NovaMenubarItem inset>Hide Sidebar</NovaMenubarItem>
            </NovaMenubarContent>
          </NovaMenubarMenu>
          <NovaMenubarMenu>
            <NovaMenubarTrigger>Profiles</NovaMenubarTrigger>
            <NovaMenubarContent>
              <NovaMenubarRadioGroup value="benoit">
                <NovaMenubarRadioItem value="andy">Andy</NovaMenubarRadioItem>
                <NovaMenubarRadioItem value="benoit">Benoit</NovaMenubarRadioItem>
                <NovaMenubarRadioItem value="Luis">Luis</NovaMenubarRadioItem>
              </NovaMenubarRadioGroup>
              <NovaMenubarSeparator />
              <NovaMenubarItem inset>Edit...</NovaMenubarItem>
              <NovaMenubarSeparator />
              <NovaMenubarItem inset>Add Profile...</NovaMenubarItem>
            </NovaMenubarContent>
          </NovaMenubarMenu>
        </NovaMenubar>
      }
      installCommand="npx nova-ui@latest add menubar"
      importCode={`import {
  NovaMenubar,
  NovaMenubarMenu,
  NovaMenubarTrigger,
  NovaMenubarContent,
  NovaMenubarItem,
  NovaMenubarSeparator,
} from "@/components/nova/nova-menubar"`}
      usageCode={`<NovaMenubar>
  <NovaMenubarMenu>
    <NovaMenubarTrigger>File</NovaMenubarTrigger>
    <NovaMenubarContent>
      <NovaMenubarItem>New Tab</NovaMenubarItem>
      <NovaMenubarItem>New Window</NovaMenubarItem>
      <NovaMenubarSeparator />
      <NovaMenubarItem>Share</NovaMenubarItem>
      <NovaMenubarSeparator />
      <NovaMenubarItem>Print</NovaMenubarItem>
    </NovaMenubarContent>
  </NovaMenubarMenu>
</NovaMenubar>`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "floating"',
          defaultValue: '"default"',
          description: "Visual style of the menubar.",
        },
      ]}
      examples={[
        {
          title: "Glass Variant",
          description: "A translucent menubar.",
          code: `<NovaMenubar variant="glass">
  <NovaMenubarMenu>
    <NovaMenubarTrigger>File</NovaMenubarTrigger>
    <NovaMenubarContent>
      <NovaMenubarItem>New Tab</NovaMenubarItem>
    </NovaMenubarContent>
  </NovaMenubarMenu>
</NovaMenubar>`,
          preview: (
            <div className="p-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg w-full">
              <NovaMenubar variant="glass">
                <NovaMenubarMenu>
                  <NovaMenubarTrigger>File</NovaMenubarTrigger>
                  <NovaMenubarContent>
                    <NovaMenubarItem>New Tab</NovaMenubarItem>
                    <NovaMenubarItem>New Window</NovaMenubarItem>
                  </NovaMenubarContent>
                </NovaMenubarMenu>
                <NovaMenubarMenu>
                  <NovaMenubarTrigger>Edit</NovaMenubarTrigger>
                  <NovaMenubarContent>
                    <NovaMenubarItem>Undo</NovaMenubarItem>
                    <NovaMenubarItem>Redo</NovaMenubarItem>
                  </NovaMenubarContent>
                </NovaMenubarMenu>
              </NovaMenubar>
            </div>
          )
        },
        {
          title: "Floating Variant",
          description: "A floating menubar with a shadow.",
          code: `<NovaMenubar variant="floating">
  <NovaMenubarMenu>
    <NovaMenubarTrigger>File</NovaMenubarTrigger>
    <NovaMenubarContent>
      <NovaMenubarItem>New Tab</NovaMenubarItem>
    </NovaMenubarContent>
  </NovaMenubarMenu>
</NovaMenubar>`,
          preview: (
            <div className="p-8 bg-muted rounded-lg w-full">
              <NovaMenubar variant="floating">
                <NovaMenubarMenu>
                  <NovaMenubarTrigger>File</NovaMenubarTrigger>
                  <NovaMenubarContent>
                    <NovaMenubarItem>New Tab</NovaMenubarItem>
                    <NovaMenubarItem>New Window</NovaMenubarItem>
                  </NovaMenubarContent>
                </NovaMenubarMenu>
                <NovaMenubarMenu>
                  <NovaMenubarTrigger>Edit</NovaMenubarTrigger>
                  <NovaMenubarContent>
                    <NovaMenubarItem>Undo</NovaMenubarItem>
                    <NovaMenubarItem>Redo</NovaMenubarItem>
                  </NovaMenubarContent>
                </NovaMenubarMenu>
              </NovaMenubar>
            </div>
          )
        }
      ]}
    />
  )
}

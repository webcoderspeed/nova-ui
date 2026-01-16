"use client"

import { ComponentDoc } from "./component-doc"
import { NovaButton } from "@/components/nova/nova-button"
import { NovaInput } from "@/components/nova/nova-input"
import {
  NovaCard,
  NovaCardHeader,
  NovaCardTitle,
  NovaCardDescription,
  NovaCardContent,
} from "@/components/nova/nova-card"
import { NovaBadge } from "@/components/nova/nova-badge"
import { NovaDialog } from "@/components/nova/nova-dialog"
import { NovaAccordion } from "@/components/nova/nova-accordion"
import { NovaAlert } from "@/components/nova/nova-alert"
import { NovaAvatar, NovaAvatarGroup } from "@/components/nova/nova-avatar"
import { NovaCheckbox } from "@/components/nova/nova-checkbox"
import { NovaProgress } from "@/components/nova/nova-progress"
import { NovaSwitch } from "@/components/nova/nova-switch"
import { NovaTabs } from "@/components/nova/nova-tabs"
import { NovaTooltip } from "@/components/nova/nova-tooltip"
import { NovaSelect } from "@/components/nova/nova-select"
import { NovaSlider } from "@/components/nova/nova-slider"
import { NovaTextarea } from "@/components/nova/nova-textarea"
import { Mail, Star, Home, Settings, User } from "lucide-react"

export function NovaExtras() {
  return (
    <div className="space-y-4">
      <div data-section="nova-extras" className="scroll-mt-20 pt-12 mb-8">
        <h2 className="text-2xl font-bold mb-2">Nova.UI Enhanced Components</h2>
        <p className="text-muted-foreground">
          Extended versions of shadcn components with additional features like animations, loading states, variants, and
          more.
        </p>
      </div>

      {/* Nova Button */}
      <ComponentDoc
        id="nova-button"
        title="NovaButton"
        description="Enhanced button with loading states, animations, icons, and ripple effects."
        isNova
        preview={
          <div className="flex flex-wrap gap-4">
            <NovaButton animation="scale">Scale Effect</NovaButton>
            <NovaButton animation="shine" variant="secondary">
              Shine Effect
            </NovaButton>
            <NovaButton animation="ripple" variant="outline">
              Ripple Effect
            </NovaButton>
            <NovaButton loading loadingText="Saving...">
              Save
            </NovaButton>
            <NovaButton leftIcon={<Mail className="h-4 w-4" />}>With Icon</NovaButton>
            <NovaButton rounded="full" animation="glow">
              Rounded
            </NovaButton>
          </div>
        }
        code={`import { NovaButton } from "@/components/nova/nova-button"

<NovaButton animation="scale">Scale Effect</NovaButton>
<NovaButton animation="shine">Shine Effect</NovaButton>
<NovaButton animation="ripple">Ripple Effect</NovaButton>
<NovaButton loading loadingText="Saving...">Save</NovaButton>
<NovaButton leftIcon={<Mail />}>With Icon</NovaButton>
<NovaButton rounded="full" animation="glow">Rounded</NovaButton>`}
        props={[
          {
            name: "animation",
            type: '"none" | "pulse" | "bounce" | "shine" | "glow" | "scale" | "ripple"',
            default: '"scale"',
            description: "Hover/click animation",
          },
          { name: "loading", type: "boolean", default: "false", description: "Show loading spinner" },
          { name: "loadingText", type: "string", description: "Text shown during loading" },
          { name: "leftIcon", type: "ReactNode", description: "Icon on the left" },
          { name: "rightIcon", type: "ReactNode", description: "Icon on the right" },
          { name: "rounded", type: '"default" | "full" | "none"', default: '"default"', description: "Border radius" },
        ]}
      />

      {/* Nova Input */}
      <ComponentDoc
        id="nova-input"
        title="NovaInput"
        description="Enhanced input with floating labels, validation states, clearable, and password toggle."
        isNova
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <NovaInput label="Floating Label" variant="floating" placeholder=" " />
            <NovaInput label="With Helper" helperText="This is helper text" />
            <NovaInput label="With Error" error="This field is required" />
            <NovaInput label="Success State" success defaultValue="Valid input" />
            <NovaInput label="Clearable" clearable defaultValue="Clear me" />
            <NovaInput label="Password" type="password" showPasswordToggle />
            <NovaInput variant="underline" placeholder="Underline variant" />
          </div>
        }
        code={`import { NovaInput } from "@/components/nova/nova-input"

<NovaInput label="Floating Label" variant="floating" />
<NovaInput label="With Error" error="Required" />
<NovaInput label="Password" type="password" showPasswordToggle />
<NovaInput clearable defaultValue="Clear me" />`}
        props={[
          {
            name: "variant",
            type: '"default" | "floating" | "underline" | "filled"',
            default: '"default"',
            description: "Visual variant",
          },
          { name: "label", type: "string", description: "Label text" },
          { name: "helperText", type: "string", description: "Helper text below input" },
          { name: "error", type: "string", description: "Error message" },
          { name: "success", type: "boolean", description: "Show success state" },
          { name: "clearable", type: "boolean", description: "Show clear button" },
          { name: "showPasswordToggle", type: "boolean", description: "Show password visibility toggle" },
        ]}
      />

      {/* Nova Card */}
      <ComponentDoc
        id="nova-card"
        title="NovaCard"
        description="Enhanced card with glass morphism, gradients, glow effects, and loading states."
        isNova
        preview={
          <div className="grid gap-4 sm:grid-cols-2">
            <NovaCard variant="glass" glow="subtle">
              <NovaCardHeader>
                <NovaCardTitle>Glass Card</NovaCardTitle>
                <NovaCardDescription>With subtle glow</NovaCardDescription>
              </NovaCardHeader>
              <NovaCardContent>Glass morphism effect</NovaCardContent>
            </NovaCard>
            <NovaCard variant="interactive">
              <NovaCardHeader>
                <NovaCardTitle>Interactive</NovaCardTitle>
                <NovaCardDescription>Hover to see effect</NovaCardDescription>
              </NovaCardHeader>
              <NovaCardContent>Click and hover effects</NovaCardContent>
            </NovaCard>
            <NovaCard variant="elevated" hoverable>
              <NovaCardHeader>
                <NovaCardTitle>Elevated</NovaCardTitle>
              </NovaCardHeader>
              <NovaCardContent>With shadow and hover</NovaCardContent>
            </NovaCard>
            <NovaCard loading />
          </div>
        }
        code={`import { NovaCard, NovaCardHeader, NovaCardTitle } from "@/components/nova/nova-card"

<NovaCard variant="glass" glow="subtle">
  <NovaCardHeader>
    <NovaCardTitle>Glass Card</NovaCardTitle>
  </NovaCardHeader>
</NovaCard>

<NovaCard variant="interactive" />
<NovaCard loading />`}
        props={[
          {
            name: "variant",
            type: '"default" | "glass" | "gradient" | "outline" | "elevated" | "interactive"',
            default: '"default"',
            description: "Visual variant",
          },
          {
            name: "glow",
            type: '"none" | "subtle" | "medium" | "strong"',
            default: '"none"',
            description: "Glow effect intensity",
          },
          { name: "hoverable", type: "boolean", description: "Add hover border effect" },
          { name: "loading", type: "boolean", description: "Show skeleton loading" },
        ]}
      />

      {/* Nova Badge */}
      <ComponentDoc
        id="nova-badge"
        title="NovaBadge"
        description="Enhanced badge with animations, status dots, icons, and removable functionality."
        isNova
        preview={
          <div className="flex flex-wrap gap-3">
            <NovaBadge animation="shimmer">Shimmer</NovaBadge>
            <NovaBadge animation="pulse" variant="secondary">
              Pulse
            </NovaBadge>
            <NovaBadge dot dotColor="bg-green-500">
              Online
            </NovaBadge>
            <NovaBadge dot dotColor="bg-red-500" variant="outline">
              Offline
            </NovaBadge>
            <NovaBadge removable onRemove={() => {}}>
              Removable
            </NovaBadge>
            <NovaBadge icon={<Star className="h-3 w-3" />} size="lg">
              Featured
            </NovaBadge>
            <NovaBadge rounded="full" variant="destructive">
              New
            </NovaBadge>
          </div>
        }
        code={`import { NovaBadge } from "@/components/nova/nova-badge"

<NovaBadge animation="shimmer">Shimmer</NovaBadge>
<NovaBadge dot dotColor="bg-green-500">Online</NovaBadge>
<NovaBadge removable onRemove={() => {}}>Tag</NovaBadge>
<NovaBadge icon={<Star />}>Featured</NovaBadge>`}
        props={[
          {
            name: "animation",
            type: '"none" | "pulse" | "bounce" | "shimmer"',
            default: '"none"',
            description: "Animation type",
          },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Badge size" },
          { name: "removable", type: "boolean", description: "Show remove button" },
          { name: "dot", type: "boolean", description: "Show status dot" },
          { name: "dotColor", type: "string", description: "Dot color class" },
          { name: "icon", type: "ReactNode", description: "Icon element" },
        ]}
      />

      {/* Nova Dialog */}
      <ComponentDoc
        id="nova-dialog"
        title="NovaDialog"
        description="Enhanced dialog with animations, sizes, positions, and confirm dialog variant."
        isNova
        preview={
          <div className="flex gap-3">
            <NovaDialog
              trigger={<NovaButton variant="outline">Default Dialog</NovaButton>}
              title="Dialog Title"
              description="This is a description of the dialog."
            >
              <p>Dialog content goes here.</p>
            </NovaDialog>
            <NovaDialog
              trigger={<NovaButton variant="outline">Slide Animation</NovaButton>}
              title="Slide In"
              animation="slide"
              size="lg"
            >
              <p>This dialog slides in from the bottom.</p>
            </NovaDialog>
          </div>
        }
        code={`import { NovaDialog, NovaConfirmDialog } from "@/components/nova/nova-dialog"

<NovaDialog
  trigger={<NovaButton>Open</NovaButton>}
  title="Title"
  description="Description"
>
  Content
</NovaDialog>

<NovaConfirmDialog
  trigger={<NovaButton>Delete</NovaButton>}
  title="Are you sure?"
  destructive
  onConfirm={() => {}}
/>`}
        props={[
          {
            name: "animation",
            type: '"default" | "slide" | "scale" | "fade"',
            default: '"default"',
            description: "Animation type",
          },
          {
            name: "size",
            type: '"sm" | "md" | "lg" | "xl" | "full"',
            default: '"md"',
            description: "Dialog size",
          },
          {
            name: "position",
            type: '"center" | "top" | "bottom"',
            default: '"center"',
            description: "Dialog position",
          },
          { name: "title", type: "string", description: "Dialog title" },
          { name: "description", type: "string", description: "Dialog description" },
        ]}
      />

      {/* Nova Accordion */}
      <ComponentDoc
        id="nova-accordion"
        title="NovaAccordion"
        description="Enhanced accordion with variants like bordered, separated, and flush styles."
        isNova
        preview={
          <div className="w-full max-w-md space-y-6">
            <NovaAccordion
              type="single"
              collapsible
              variant="bordered"
              items={[
                { value: "1", trigger: "Bordered Style", content: "This accordion has borders around each item." },
                { value: "2", trigger: "Expandable", content: "Click to expand and collapse." },
              ]}
            />
            <NovaAccordion
              type="single"
              collapsible
              variant="separated"
              items={[
                { value: "1", trigger: "Separated Style", content: "Items have background and spacing." },
                { value: "2", trigger: "Modern Look", content: "Great for FAQs and settings." },
              ]}
            />
          </div>
        }
        code={`import { NovaAccordion } from "@/components/nova/nova-accordion"

<NovaAccordion
  type="single"
  collapsible
  variant="bordered"
  items={[
    { value: "1", trigger: "Title", content: "Content" },
  ]}
/>`}
        props={[
          {
            name: "variant",
            type: '"default" | "bordered" | "separated" | "flush"',
            default: '"default"',
            description: "Visual variant",
          },
          {
            name: "items",
            type: "Array<{ value, trigger, content, disabled? }>",
            description: "Accordion items config",
          },
        ]}
      />

      {/* Nova Alert */}
      <ComponentDoc
        id="nova-alert"
        title="NovaAlert"
        description="Enhanced alert with status variants, dismissible, and action support."
        isNova
        preview={
          <div className="flex flex-col gap-4 w-full">
            <NovaAlert status="success" title="Success!" description="Your changes have been saved." dismissible />
            <NovaAlert status="warning" title="Warning" description="This action cannot be undone." />
            <NovaAlert status="error" title="Error" description="Something went wrong." dismissible />
            <NovaAlert
              status="info"
              title="Info"
              description="New features available."
              action={<NovaButton size="sm">Learn More</NovaButton>}
            />
          </div>
        }
        code={`import { NovaAlert } from "@/components/nova/nova-alert"

<NovaAlert 
  status="success" 
  title="Success!" 
  description="Saved." 
  dismissible 
/>
<NovaAlert 
  status="error" 
  title="Error" 
  action={<NovaButton>Retry</NovaButton>} 
/>`}
        props={[
          {
            name: "status",
            type: '"default" | "success" | "warning" | "error" | "info"',
            default: '"default"',
            description: "Alert status",
          },
          { name: "title", type: "string", description: "Alert title" },
          { name: "description", type: "string", description: "Alert description" },
          { name: "dismissible", type: "boolean", description: "Show dismiss button" },
          { name: "action", type: "ReactNode", description: "Action button" },
        ]}
      />

      {/* Nova Avatar */}
      <ComponentDoc
        id="nova-avatar"
        title="NovaAvatar"
        description="Enhanced avatar with sizes, shapes, status indicators, and avatar groups."
        isNova
        preview={
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <NovaAvatar size="xs" fallback="XS" />
              <NovaAvatar size="sm" fallback="SM" />
              <NovaAvatar size="md" fallback="MD" />
              <NovaAvatar size="lg" fallback="LG" />
              <NovaAvatar size="xl" fallback="XL" />
            </div>
            <div className="flex items-center gap-4">
              <NovaAvatar shape="circle" fallback="C" />
              <NovaAvatar shape="square" fallback="S" />
              <NovaAvatar shape="squircle" fallback="Q" />
            </div>
            <div className="flex items-center gap-4">
              <NovaAvatar fallback="ON" status="online" showStatus />
              <NovaAvatar fallback="OF" status="offline" showStatus />
              <NovaAvatar fallback="BU" status="busy" showStatus />
              <NovaAvatar fallback="AW" status="away" showStatus />
            </div>
            <NovaAvatarGroup
              avatars={[{ fallback: "A" }, { fallback: "B" }, { fallback: "C" }, { fallback: "D" }, { fallback: "E" }]}
              max={3}
            />
          </div>
        }
        code={`import { NovaAvatar, NovaAvatarGroup } from "@/components/nova/nova-avatar"

<NovaAvatar size="lg" fallback="JD" />
<NovaAvatar shape="square" status="online" showStatus />

<NovaAvatarGroup 
  avatars={[{ fallback: "A" }, { fallback: "B" }]} 
  max={3} 
/>`}
        props={[
          {
            name: "size",
            type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
            default: '"md"',
            description: "Avatar size",
          },
          { name: "shape", type: '"circle" | "square" | "squircle"', default: '"circle"', description: "Avatar shape" },
          {
            name: "status",
            type: '"online" | "offline" | "busy" | "away"',
            description: "Status indicator",
          },
          { name: "showStatus", type: "boolean", description: "Show status indicator" },
          { name: "ring", type: '"none" | "primary" | "success" | "warning" | "error"', description: "Ring color" },
        ]}
      />

      {/* Nova Checkbox */}
      <ComponentDoc
        id="nova-checkbox"
        title="NovaCheckbox"
        description="Enhanced checkbox with labels, descriptions, sizes, and color variants."
        isNova
        preview={
          <div className="flex flex-col gap-4">
            <NovaCheckbox label="Default checkbox" />
            <NovaCheckbox label="With description" description="This is a helpful description" />
            <NovaCheckbox label="Success color" color="success" defaultChecked />
            <NovaCheckbox label="With error" error="You must accept the terms" />
            <NovaCheckbox label="Large size" size="lg" />
          </div>
        }
        code={`import { NovaCheckbox } from "@/components/nova/nova-checkbox"

<NovaCheckbox label="Accept terms" />
<NovaCheckbox label="With description" description="Info" />
<NovaCheckbox label="Success" color="success" />
<NovaCheckbox label="Error" error="Required" />`}
        props={[
          { name: "label", type: "string", description: "Label text" },
          { name: "description", type: "string", description: "Description text" },
          { name: "error", type: "string", description: "Error message" },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Checkbox size" },
          {
            name: "color",
            type: '"default" | "success" | "warning" | "error"',
            default: '"default"',
            description: "Color variant",
          },
        ]}
      />

      {/* Nova Progress */}
      <ComponentDoc
        id="nova-progress"
        title="NovaProgress"
        description="Enhanced progress with colors, animations, sizes, and value display."
        isNova
        preview={
          <div className="flex flex-col gap-6 w-full max-w-md">
            <NovaProgress value={33} label="Default" showValue />
            <NovaProgress value={66} color="success" size="lg" showValue />
            <NovaProgress value={50} color="gradient" animation="stripe" />
            <NovaProgress value={80} color="warning" showValue valuePosition="top" label="Upload Progress" />
          </div>
        }
        code={`import { NovaProgress } from "@/components/nova/nova-progress"

<NovaProgress value={33} label="Progress" showValue />
<NovaProgress value={50} color="gradient" animation="stripe" />
<NovaProgress value={80} showValue valuePosition="top" />`}
        props={[
          { name: "value", type: "number", description: "Progress value (0-100)" },
          { name: "label", type: "string", description: "Label text" },
          { name: "showValue", type: "boolean", description: "Show percentage value" },
          { name: "valuePosition", type: '"right" | "inside" | "top"', description: "Value position" },
          {
            name: "color",
            type: '"default" | "success" | "warning" | "error" | "gradient"',
            description: "Progress color",
          },
          { name: "animation", type: '"none" | "pulse" | "stripe"', description: "Animation type" },
          { name: "size", type: '"sm" | "md" | "lg" | "xl"', description: "Progress height" },
        ]}
      />

      {/* Nova Switch */}
      <ComponentDoc
        id="nova-switch"
        title="NovaSwitch"
        description="Enhanced switch with labels, descriptions, sizes, and color variants."
        isNova
        preview={
          <div className="flex flex-col gap-4">
            <NovaSwitch label="Notifications" />
            <NovaSwitch label="Dark mode" description="Toggle dark mode on/off" />
            <NovaSwitch label="Success color" color="success" defaultChecked />
            <NovaSwitch label="Label on left" labelPosition="left" />
            <NovaSwitch label="Large size" size="lg" />
          </div>
        }
        code={`import { NovaSwitch } from "@/components/nova/nova-switch"

<NovaSwitch label="Notifications" />
<NovaSwitch label="With description" description="Info" />
<NovaSwitch label="Success" color="success" />
<NovaSwitch label="Left label" labelPosition="left" />`}
        props={[
          { name: "label", type: "string", description: "Label text" },
          { name: "description", type: "string", description: "Description text" },
          { name: "labelPosition", type: '"left" | "right"', default: '"right"', description: "Label position" },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Switch size" },
          { name: "color", type: '"default" | "success" | "warning" | "error"', description: "Color when checked" },
        ]}
      />

      {/* Nova Tabs */}
      <ComponentDoc
        id="nova-tabs"
        title="NovaTabs"
        description="Enhanced tabs with pills, underline, and outline variants."
        isNova
        preview={
          <div className="flex flex-col gap-8 w-full">
            <NovaTabs
              defaultValue="home"
              variant="pills"
              tabs={[
                { value: "home", label: "Home", icon: <Home className="h-4 w-4" />, content: <p>Home content</p> },
                {
                  value: "settings",
                  label: "Settings",
                  icon: <Settings className="h-4 w-4" />,
                  content: <p>Settings content</p>,
                },
                {
                  value: "profile",
                  label: "Profile",
                  icon: <User className="h-4 w-4" />,
                  content: <p>Profile content</p>,
                },
              ]}
            />
            <NovaTabs
              defaultValue="tab1"
              variant="underline"
              tabs={[
                { value: "tab1", label: "Overview", content: <p>Overview content</p> },
                { value: "tab2", label: "Analytics", content: <p>Analytics content</p> },
                { value: "tab3", label: "Reports", content: <p>Reports content</p> },
              ]}
            />
          </div>
        }
        code={`import { NovaTabs } from "@/components/nova/nova-tabs"

<NovaTabs
  defaultValue="home"
  variant="pills"
  tabs={[
    { value: "home", label: "Home", icon: <Home />, content: <p>Content</p> },
    { value: "settings", label: "Settings", content: <p>Content</p> },
  ]}
/>`}
        props={[
          {
            name: "variant",
            type: '"default" | "pills" | "underline" | "outline"',
            default: '"default"',
            description: "Visual variant",
          },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Tab size" },
          { name: "fullWidth", type: "boolean", description: "Full width tabs" },
          {
            name: "tabs",
            type: "Array<{ value, label, content, icon?, disabled? }>",
            description: "Tab items config",
          },
        ]}
      />

      {/* Nova Tooltip */}
      <ComponentDoc
        id="nova-tooltip"
        title="NovaTooltip"
        description="Enhanced tooltip with variants, sizes, and positioning."
        isNova
        preview={
          <div className="flex gap-4">
            <NovaTooltip content="Default tooltip">
              <NovaButton variant="outline">Hover me</NovaButton>
            </NovaTooltip>
            <NovaTooltip content="Light variant" variant="light">
              <NovaButton variant="outline">Light</NovaButton>
            </NovaTooltip>
            <NovaTooltip content="Dark variant" variant="dark">
              <NovaButton variant="outline">Dark</NovaButton>
            </NovaTooltip>
            <NovaTooltip content="Large tooltip with more content" size="lg" side="bottom">
              <NovaButton variant="outline">Large</NovaButton>
            </NovaTooltip>
          </div>
        }
        code={`import { NovaTooltip } from "@/components/nova/nova-tooltip"

<NovaTooltip content="Tooltip text">
  <NovaButton>Hover me</NovaButton>
</NovaTooltip>

<NovaTooltip content="Dark" variant="dark" side="bottom">
  <NovaButton>Dark</NovaButton>
</NovaTooltip>`}
        props={[
          { name: "content", type: "ReactNode", required: true, description: "Tooltip content" },
          {
            name: "variant",
            type: '"default" | "light" | "dark"',
            default: '"default"',
            description: "Visual variant",
          },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Tooltip size" },
          { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: "Position" },
          { name: "delayDuration", type: "number", default: "200", description: "Show delay (ms)" },
        ]}
      />

      {/* Nova Select */}
      <ComponentDoc
        id="nova-select"
        title="NovaSelect"
        description="Enhanced select with labels, validation, sizes, and grouped options."
        isNova
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <NovaSelect
              label="Choose a fruit"
              placeholder="Select fruit"
              options={[
                { value: "apple", label: "Apple" },
                { value: "banana", label: "Banana" },
                { value: "orange", label: "Orange" },
              ]}
            />
            <NovaSelect
              label="With error"
              error="Please select an option"
              placeholder="Select..."
              options={[{ value: "1", label: "Option 1" }]}
            />
            <NovaSelect
              label="Grouped options"
              placeholder="Select..."
              groups={[
                {
                  label: "Fruits",
                  options: [
                    { value: "apple", label: "Apple" },
                    { value: "banana", label: "Banana" },
                  ],
                },
                {
                  label: "Vegetables",
                  options: [
                    { value: "carrot", label: "Carrot" },
                    { value: "broccoli", label: "Broccoli" },
                  ],
                },
              ]}
            />
          </div>
        }
        code={`import { NovaSelect } from "@/components/nova/nova-select"

<NovaSelect
  label="Choose"
  options={[
    { value: "a", label: "Option A" },
    { value: "b", label: "Option B" },
  ]}
/>

<NovaSelect
  label="Grouped"
  groups={[
    { label: "Group 1", options: [...] },
  ]}
/>`}
        props={[
          { name: "options", type: "Array<{ value, label, disabled? }>", description: "Select options" },
          { name: "groups", type: "Array<{ label, options }>", description: "Grouped options" },
          { name: "label", type: "string", description: "Label text" },
          { name: "error", type: "string", description: "Error message" },
          { name: "helperText", type: "string", description: "Helper text" },
          { name: "size", type: '"sm" | "md" | "lg"', description: "Select size" },
        ]}
      />

      {/* Nova Slider */}
      <ComponentDoc
        id="nova-slider"
        title="NovaSlider"
        description="Enhanced slider with labels, value display, marks, and formatting."
        isNova
        preview={
          <div className="flex flex-col gap-8 w-full max-w-md">
            <NovaSlider defaultValue={[50]} label="Volume" showValue />
            <NovaSlider defaultValue={[75]} label="Brightness" showValue color="warning" size="lg" />
            <NovaSlider
              defaultValue={[25]}
              label="Price"
              showValue
              formatValue={(v) => `$${v}`}
              marks={[
                { value: 0, label: "$0" },
                { value: 50, label: "$50" },
                { value: 100, label: "$100" },
              ]}
            />
          </div>
        }
        code={`import { NovaSlider } from "@/components/nova/nova-slider"

<NovaSlider defaultValue={[50]} label="Volume" showValue />
<NovaSlider 
  label="Price" 
  showValue 
  formatValue={(v) => \`$\${v}\`}
  marks={[{ value: 0, label: "$0" }]}
/>`}
        props={[
          { name: "label", type: "string", description: "Label text" },
          { name: "showValue", type: "boolean", description: "Show current value" },
          { name: "formatValue", type: "(value: number) => string", description: "Value formatter" },
          { name: "marks", type: "Array<{ value, label? }>", description: "Slider marks" },
          { name: "color", type: '"default" | "success" | "warning" | "error"', description: "Slider color" },
          { name: "size", type: '"sm" | "md" | "lg"', description: "Slider size" },
        ]}
      />

      {/* Nova Textarea */}
      <ComponentDoc
        id="nova-textarea"
        title="NovaTextarea"
        description="Enhanced textarea with labels, validation, character count, and resize options."
        isNova
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <NovaTextarea label="Message" placeholder="Type your message..." />
            <NovaTextarea label="With counter" showCount maxLength={100} placeholder="Limited to 100 chars..." />
            <NovaTextarea label="With error" error="Message is required" />
            <NovaTextarea variant="filled" placeholder="Filled variant" />
          </div>
        }
        code={`import { NovaTextarea } from "@/components/nova/nova-textarea"

<NovaTextarea label="Message" placeholder="Type..." />
<NovaTextarea label="Limited" showCount maxLength={100} />
<NovaTextarea label="Error" error="Required" />
<NovaTextarea variant="filled" />`}
        props={[
          { name: "label", type: "string", description: "Label text" },
          { name: "error", type: "string", description: "Error message" },
          { name: "helperText", type: "string", description: "Helper text" },
          { name: "showCount", type: "boolean", description: "Show character count" },
          { name: "maxLength", type: "number", description: "Max character limit" },
          { name: "variant", type: '"default" | "filled" | "underline"', description: "Visual variant" },
          { name: "resize", type: '"none" | "vertical" | "horizontal" | "both"', description: "Resize behavior" },
        ]}
      />
    </div>
  )
}

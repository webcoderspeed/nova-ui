import { CodeBlock } from "./code-block"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const apiDocs = [
  {
    id: "api-nova-button",
    name: "NovaButton",
    description: "Enhanced button with loading states, animations, and icon support.",
    props: [
      {
        name: "variant",
        type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"',
        default: '"default"',
        description: "Visual style variant",
      },
      { name: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: "Button size" },
      {
        name: "animation",
        type: '"none" | "pulse" | "bounce" | "shine" | "glow" | "scale" | "ripple"',
        default: '"scale"',
        description: "Hover/click animation effect",
      },
      { name: "rounded", type: '"default" | "full" | "none"', default: '"default"', description: "Border radius" },
      { name: "loading", type: "boolean", default: "false", description: "Show loading spinner" },
      { name: "loadingText", type: "string", description: "Text displayed during loading state" },
      { name: "leftIcon", type: "ReactNode", description: "Icon rendered before children" },
      { name: "rightIcon", type: "ReactNode", description: "Icon rendered after children" },
    ],
    interface: `interface NovaButtonProps extends ButtonProps {
  animation?: "none" | "pulse" | "bounce" | "shine" | "glow" | "scale" | "ripple"
  rounded?: "default" | "full" | "none"
  loading?: boolean
  loadingText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}`,
  },
  {
    id: "api-nova-input",
    name: "NovaInput",
    description: "Enhanced input with floating labels, validation states, and password toggle.",
    props: [
      {
        name: "variant",
        type: '"default" | "floating" | "underline" | "filled"',
        default: '"default"',
        description: "Visual style variant",
      },
      { name: "inputSize", type: '"sm" | "md" | "lg"', default: '"md"', description: "Input size" },
      { name: "label", type: "string", description: "Label text (floating for floating variant)" },
      { name: "helperText", type: "string", description: "Helper text below input" },
      { name: "error", type: "string", description: "Error message (shows error styling)" },
      { name: "success", type: "boolean", default: "false", description: "Show success state" },
      { name: "clearable", type: "boolean", default: "false", description: "Show clear button" },
      { name: "showPasswordToggle", type: "boolean", default: "false", description: "Show password visibility toggle" },
      { name: "leftIcon", type: "ReactNode", description: "Icon on the left side" },
      { name: "rightIcon", type: "ReactNode", description: "Icon on the right side" },
    ],
    interface: `interface NovaInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "floating" | "underline" | "filled"
  inputSize?: "sm" | "md" | "lg"
  label?: string
  helperText?: string
  error?: string
  success?: boolean
  clearable?: boolean
  showPasswordToggle?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClear?: () => void
}`,
  },
  {
    id: "api-nova-card",
    name: "NovaCard",
    description: "Enhanced card with glass morphism, gradients, and glow effects.",
    props: [
      {
        name: "variant",
        type: '"default" | "glass" | "gradient" | "outline" | "elevated" | "interactive"',
        default: '"default"',
        description: "Visual style variant",
      },
      {
        name: "glow",
        type: '"none" | "subtle" | "medium" | "strong"',
        default: '"none"',
        description: "Glow effect on hover",
      },
      { name: "padding", type: '"none" | "sm" | "md" | "lg"', default: '"md"', description: "Internal padding" },
      { name: "hoverable", type: "boolean", default: "false", description: "Add hover border effect" },
      { name: "loading", type: "boolean", default: "false", description: "Show skeleton loading state" },
    ],
    interface: `interface NovaCardProps extends CardProps {
  variant?: "default" | "glass" | "gradient" | "outline" | "elevated" | "interactive"
  glow?: "none" | "subtle" | "medium" | "strong"
  padding?: "none" | "sm" | "md" | "lg"
  hoverable?: boolean
  loading?: boolean
}`,
  },
  {
    id: "api-nova-badge",
    name: "NovaBadge",
    description: "Enhanced badge with animations, status dots, and removable functionality.",
    props: [
      {
        name: "animation",
        type: '"none" | "pulse" | "bounce" | "shimmer"',
        default: '"none"',
        description: "Animation type",
      },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Badge size" },
      { name: "rounded", type: '"default" | "full" | "none"', default: '"default"', description: "Border radius" },
      { name: "removable", type: "boolean", default: "false", description: "Show remove button" },
      { name: "onRemove", type: "() => void", description: "Callback when remove is clicked" },
      { name: "dot", type: "boolean", default: "false", description: "Show status dot" },
      { name: "dotColor", type: "string", default: '"bg-green-500"', description: "Dot color class" },
      { name: "icon", type: "ReactNode", description: "Icon element" },
    ],
    interface: `interface NovaBadgeProps extends BadgeProps {
  animation?: "none" | "pulse" | "bounce" | "shimmer"
  size?: "sm" | "md" | "lg"
  rounded?: "default" | "full" | "none"
  removable?: boolean
  onRemove?: () => void
  dot?: boolean
  dotColor?: string
  icon?: React.ReactNode
}`,
  },
  {
    id: "api-nova-dialog",
    name: "NovaDialog",
    description: "Enhanced dialog with animations, sizes, and confirm dialog variant.",
    props: [
      { name: "trigger", type: "ReactNode", description: "Element that triggers the dialog" },
      { name: "title", type: "string", description: "Dialog title" },
      { name: "description", type: "string", description: "Dialog description" },
      {
        name: "animation",
        type: '"default" | "slide" | "scale" | "fade"',
        default: '"default"',
        description: "Open/close animation",
      },
      { name: "size", type: '"sm" | "md" | "lg" | "xl" | "full"', default: '"md"', description: "Dialog size" },
      {
        name: "position",
        type: '"center" | "top" | "bottom"',
        default: '"center"',
        description: "Dialog position",
      },
      { name: "showClose", type: "boolean", default: "true", description: "Show close button" },
      { name: "footer", type: "ReactNode", description: "Footer content" },
    ],
    interface: `interface NovaDialogProps extends DialogProps {
  trigger?: React.ReactNode
  title?: string
  description?: string
  footer?: React.ReactNode
  showClose?: boolean
  animation?: "default" | "slide" | "scale" | "fade"
  size?: "sm" | "md" | "lg" | "xl" | "full"
  position?: "center" | "top" | "bottom"
}`,
  },
  {
    id: "api-nova-avatar",
    name: "NovaAvatar",
    description: "Enhanced avatar with sizes, shapes, status indicators, and group support.",
    props: [
      {
        name: "size",
        type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
        default: '"md"',
        description: "Avatar size",
      },
      { name: "shape", type: '"circle" | "square" | "squircle"', default: '"circle"', description: "Avatar shape" },
      {
        name: "ring",
        type: '"none" | "primary" | "success" | "warning" | "error"',
        default: '"none"',
        description: "Ring color",
      },
      { name: "src", type: "string", description: "Image source URL" },
      { name: "alt", type: "string", description: "Alt text for image" },
      { name: "fallback", type: "string", description: "Fallback text (usually initials)" },
      {
        name: "status",
        type: '"online" | "offline" | "busy" | "away"',
        description: "Status indicator",
      },
      { name: "showStatus", type: "boolean", default: "false", description: "Show status indicator" },
    ],
    interface: `interface NovaAvatarProps extends AvatarProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  shape?: "circle" | "square" | "squircle"
  ring?: "none" | "primary" | "success" | "warning" | "error"
  src?: string
  alt?: string
  fallback?: string
  status?: "online" | "offline" | "busy" | "away"
  showStatus?: boolean
}

interface NovaAvatarGroupProps {
  avatars: NovaAvatarProps[]
  max?: number
  size?: NovaAvatarProps["size"]
}`,
  },
  {
    id: "api-nova-alert",
    name: "NovaAlert",
    description: "Enhanced alert with status variants, dismissible, and action support.",
    props: [
      {
        name: "status",
        type: '"default" | "success" | "warning" | "error" | "info"',
        default: '"default"',
        description: "Alert status (determines color and icon)",
      },
      { name: "animation", type: '"none" | "fade" | "slide"', default: '"fade"', description: "Enter animation" },
      { name: "title", type: "string", description: "Alert title" },
      { name: "description", type: "string", description: "Alert description" },
      { name: "dismissible", type: "boolean", default: "false", description: "Show dismiss button" },
      { name: "onDismiss", type: "() => void", description: "Callback when dismissed" },
      { name: "icon", type: "ReactNode", description: "Custom icon (overrides status icon)" },
      { name: "showIcon", type: "boolean", default: "true", description: "Show icon" },
      { name: "action", type: "ReactNode", description: "Action button/element" },
    ],
    interface: `interface NovaAlertProps extends AlertProps {
  status?: "default" | "success" | "warning" | "error" | "info"
  animation?: "none" | "fade" | "slide"
  title?: string
  description?: string
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
  showIcon?: boolean
  action?: React.ReactNode
}`,
  },
  {
    id: "api-nova-progress",
    name: "NovaProgress",
    description: "Enhanced progress bar with colors, animations, and value display.",
    props: [
      { name: "value", type: "number", default: "0", description: "Progress value (0-100)" },
      { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: "Progress bar height" },
      {
        name: "color",
        type: '"default" | "success" | "warning" | "error" | "gradient"',
        default: '"default"',
        description: "Progress color",
      },
      { name: "animation", type: '"none" | "pulse" | "stripe"', default: '"none"', description: "Animation type" },
      { name: "rounded", type: '"none" | "sm" | "md" | "full"', default: '"full"', description: "Border radius" },
      { name: "label", type: "string", description: "Label text" },
      { name: "showValue", type: "boolean", default: "false", description: "Show percentage value" },
      { name: "valuePosition", type: '"right" | "inside" | "top"', default: '"right"', description: "Value position" },
    ],
    interface: `interface NovaProgressProps extends ProgressProps {
  size?: "sm" | "md" | "lg" | "xl"
  color?: "default" | "success" | "warning" | "error" | "gradient"
  animation?: "none" | "pulse" | "stripe"
  rounded?: "none" | "sm" | "md" | "full"
  label?: string
  showValue?: boolean
  valuePosition?: "right" | "inside" | "top"
}`,
  },
]

export function ApiReference() {
  return (
    <section data-section="api-reference" id="api-reference" className="mt-16 scroll-mt-20">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">API Reference</h2>
        <p className="text-muted-foreground">
          Detailed TypeScript interfaces and props for Nova.UI enhanced components.
        </p>
      </div>

      <div className="space-y-8">
        {apiDocs.map((doc) => (
          <Card key={doc.id} data-section={doc.id} id={doc.id} className="scroll-mt-20 bg-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle className="font-mono">{doc.name}</CardTitle>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Nova.UI
                </Badge>
              </div>
              <p className="text-muted-foreground">{doc.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-3 text-sm font-semibold text-foreground">TypeScript Interface</h4>
                <CodeBlock code={doc.interface} language="tsx" />
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold text-foreground">Props</h4>
                <div className="overflow-x-auto rounded-lg border border-border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-secondary/50">
                        <TableHead className="font-semibold">Prop</TableHead>
                        <TableHead className="font-semibold">Type</TableHead>
                        <TableHead className="font-semibold hidden sm:table-cell">Default</TableHead>
                        <TableHead className="font-semibold hidden md:table-cell">Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {doc.props.map((prop) => (
                        <TableRow key={prop.name}>
                          <TableCell>
                            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs text-primary">
                              {prop.name}
                            </code>
                          </TableCell>
                          <TableCell>
                            <code className="font-mono text-xs text-muted-foreground">{prop.type}</code>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <code className="font-mono text-xs">{prop.default || "-"}</code>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground hidden md:table-cell">
                            {prop.description}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

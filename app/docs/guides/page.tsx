import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Moon, Palette, FileCheck, Accessibility, ArrowRight } from "lucide-react"

const guides = [
  {
    title: "i18n & RTL",
    description: "Learn how to internationalize your app and support right-to-left languages.",
    href: "/docs/guides/i18n-rtl",
    icon: Globe,
  },
  {
    title: "Dark Mode",
    description: "Implement dark mode with automatic system preference detection.",
    href: "/docs/guides/dark-mode",
    icon: Moon,
  },
  {
    title: "Custom Themes",
    description: "Create and apply custom color themes to match your brand.",
    href: "/docs/guides/custom-themes",
    icon: Palette,
  },
  {
    title: "Form Validation",
    description: "Build robust forms with validation using React Hook Form and Zod.",
    href: "/docs/guides/form-validation",
    icon: FileCheck,
  },
  {
    title: "Accessibility",
    description: "Best practices for building accessible, inclusive user interfaces.",
    href: "/docs/guides/accessibility",
    icon: Accessibility,
  },
]

export default function GuidesPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm font-medium text-primary">Guides</p>
        <h1 className="text-4xl font-bold tracking-tight">Guides</h1>
        <p className="text-lg text-muted-foreground">
          Step-by-step tutorials for common patterns and advanced features. Learn how to get the most out of Nova.UI.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {guides.map((guide) => {
          const Icon = guide.icon
          return (
            <Link key={guide.href} href={guide.href}>
              <Card className="h-full bg-card/50 border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-200 group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{guide.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{guide.description}</CardDescription>
                  <div className="mt-4 flex items-center text-sm text-primary">
                    Read guide
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

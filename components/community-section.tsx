import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, BookOpen, MessageSquare, Bug } from "lucide-react"

const links = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides and API references",
    href: "#",
    cta: "Read Docs",
  },
  {
    icon: Github,
    title: "GitHub Repository",
    description: "Star us, fork us, or contribute",
    href: "#",
    cta: "View Source",
  },
  {
    icon: MessageSquare,
    title: "Discord Community",
    description: "Join 2,000+ developers building with Nova.UI",
    href: "#",
    cta: "Join Discord",
  },
  {
    icon: Bug,
    title: "Report Issues",
    description: "Found a bug? Let us know",
    href: "#",
    cta: "Open Issue",
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Documentation & Community</h2>
          <p className="mt-4 text-lg text-muted-foreground">Everything you need to succeed with Nova.UI.</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Card key={link.title} className="group border-border bg-background transition-all hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <link.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{link.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{link.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={link.href}>{link.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-background p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground">Ready to contribute?</h3>
          <p className="mt-2 text-muted-foreground">Nova.UI is open source. We welcome contributions of all kinds.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="gap-2">
              <Github className="h-4 w-4" />
              Contribute on GitHub
            </Button>
            <Button variant="outline">Read Contribution Guide</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

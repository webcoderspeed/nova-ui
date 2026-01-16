import Link from "next/link"
import { Github, Twitter } from "lucide-react"

const footerLinks = {
  Product: ["Components", "Documentation", "Examples", "Changelog"],
  Resources: ["Getting Started", "API Reference", "Blog", "Showcase"],
  Community: ["GitHub", "Discord", "Twitter", "Contributing"],
  Legal: ["Privacy Policy", "Terms of Service", "License"],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">N</span>
              </div>
              <span className="text-lg font-semibold text-foreground">Nova.UI</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The modular design system for modern web apps. Built with shadcn, Framer Motion, GSAP, and TypeScript.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold text-foreground">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nova.UI. Open source under MIT License.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "./code-block"
import { MessageSquare, Github, BookOpen } from "lucide-react"

const commonIssues = [
  {
    question: "Components are not styled correctly",
    answer:
      "Ensure you've imported the Nova.UI styles in your globals.css and that Tailwind is configured to scan the nova-ui directory. Check that your Tailwind config includes the path to Nova.UI components.",
    code: `// tailwind.config.ts
content: [
  "./components/nova-ui/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
]`,
  },
  {
    question: "TypeScript errors with component props",
    answer:
      "Make sure you're using TypeScript 5.0 or higher. Nova.UI uses advanced type inference that may not work with older versions. Also check your tsconfig.json settings.",
    code: `// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "bundler",
    "paths": {
      "@/components/nova-ui/*": ["./components/nova-ui/*"]
    }
  }
}`,
  },
  {
    question: "Animations not working",
    answer:
      "Framer Motion and GSAP need to be installed as peer dependencies. For GSAP, ensure you've registered any plugins (like ScrollTrigger) before using them.",
    code: `// Register GSAP plugins at app entry
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)`,
  },
  {
    question: "Git submodule not updating",
    answer:
      "Git submodules need to be explicitly updated. Use the following commands to pull the latest Nova.UI changes.",
    code: `# Update submodule to latest
git submodule update --remote --merge

# Or update to specific version
cd components/nova-ui
git checkout v1.2.0
cd ../..
git add components/nova-ui
git commit -m "Update Nova.UI to v1.2.0"`,
  },
]

const faqs = [
  {
    question: "Can I use Nova.UI with plain React (no Next.js)?",
    answer:
      "Yes! Nova.UI works with any React 18+ project. Just skip the Server Component features and use client-side rendering throughout.",
  },
  {
    question: "How do I update Nova.UI to a new version?",
    answer:
      "Since Nova.UI uses Git submodules, you can update by running `git submodule update --remote`. For major versions, check the migration guide in the release notes.",
  },
  {
    question: "Is Nova.UI production-ready?",
    answer:
      "Yes, Nova.UI is used in production by multiple companies. The components are thoroughly tested and follow accessibility best practices.",
  },
  {
    question: "Can I contribute to Nova.UI?",
    answer:
      "We welcome contributions. Check out the Contributing Guide on GitHub for details on submitting pull requests, reporting issues, and requesting features.",
  },
  {
    question: "Does Nova.UI support SSR/SSG?",
    answer:
      "Yes! Nova.UI components are designed to work with Server-Side Rendering and Static Site Generation. Use the 'use client' directive for interactive components.",
  },
]

export function Troubleshooting() {
  return (
    <section data-section="troubleshooting" id="troubleshooting" className="mt-16 scroll-mt-20">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">Troubleshooting & FAQ</h2>
        <p className="text-muted-foreground">Solutions to common issues and frequently asked questions.</p>
      </div>

      {/* Common Issues */}
      <Card data-section="common-issues" id="common-issues" className="mb-8 scroll-mt-20 bg-card">
        <CardHeader>
          <CardTitle>Common Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {commonIssues.map((issue, index) => (
              <AccordionItem key={index} value={`issue-${index}`}>
                <AccordionTrigger className="text-left">{issue.question}</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-muted-foreground">{issue.answer}</p>
                  {issue.code && <CodeBlock code={issue.code} language="tsx" />}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card data-section="faq" id="faq" className="mb-8 scroll-mt-20 bg-card">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Community Support */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Need More Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            Connect with the Nova.UI community for support, feature requests, and discussions.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 p-4 transition-colors hover:bg-secondary"
            >
              <Github className="h-5 w-5 text-foreground" />
              <div>
                <p className="font-medium text-foreground">GitHub Issues</p>
                <p className="text-sm text-muted-foreground">Report bugs & features</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 p-4 transition-colors hover:bg-secondary"
            >
              <MessageSquare className="h-5 w-5 text-foreground" />
              <div>
                <p className="font-medium text-foreground">Discord</p>
                <p className="text-sm text-muted-foreground">Join the community</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 p-4 transition-colors hover:bg-secondary"
            >
              <BookOpen className="h-5 w-5 text-foreground" />
              <div>
                <p className="font-medium text-foreground">Blog</p>
                <p className="text-sm text-muted-foreground">Tutorials & updates</p>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

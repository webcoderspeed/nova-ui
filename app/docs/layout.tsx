import type { ReactNode } from "react"
import { DocsLayoutWrapper } from "@/components/docs/docs-layout-wrapper"

export const metadata = {
  title: "Documentation - Nova.UI",
  description: "Comprehensive documentation for Nova.UI - the modular design system for modern web apps.",
}

export default function DocsLayout({ children }: { children: ReactNode }) {
  return <DocsLayoutWrapper>{children}</DocsLayoutWrapper>
}

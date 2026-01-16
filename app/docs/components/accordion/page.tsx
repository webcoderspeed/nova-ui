"use client"

import { useVersion } from "@/components/version-provider"
import AccordionDocsV1 from "./v1.0.0"

export default function AccordionPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <AccordionDocsV1 />
    default:
      return <AccordionDocsV1 />
  }
}

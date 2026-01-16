"use client"

import { VersionedDocLoader } from "@/components/docs/versioned-doc-loader"
import AccordionDocsV1 from "./v1.0.0"

export default function AccordionPage() {
  return (
    <VersionedDocLoader
      componentName="Accordion"
      versions={{
        "1.0.0": AccordionDocsV1,
      }}
    />
  )
}

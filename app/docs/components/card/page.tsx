"use client"

import { VersionedDocLoader } from "@/components/docs/versioned-doc-loader"
import CardDocsV1 from "./v1.0.0"
import CardDocsV1_1 from "./v1.1.0"
import CardDocsV2Beta from "./v2.0.0-beta"

export default function CardPage() {
  return (
    <VersionedDocLoader
      componentName="Card"
      versions={{
        "1.0.0": CardDocsV1,
        "1.1.0": CardDocsV1_1,
        "2.0.0-beta": CardDocsV2Beta,
      }}
    />
  )
}

"use client"

import { VersionedDocLoader } from "@/components/docs/versioned-doc-loader"
import BadgeDocsV1 from "./v1.0.0"
import BadgeDocsV1_1 from "./v1.1.0"
import BadgeDocsV2Beta from "./v2.0.0-beta"

export default function BadgePage() {
  return (
    <VersionedDocLoader
      componentName="Badge"
      versions={{
        "1.0.0": BadgeDocsV1,
        "1.1.0": BadgeDocsV1_1,
        "2.0.0-beta": BadgeDocsV2Beta,
      }}
    />
  )
}

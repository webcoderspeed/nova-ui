"use client"

import { VersionedDocLoader } from "@/components/docs/versioned-doc-loader"
import TabsDocsV1 from "./v1.0.0"
import TabsDocsV1_1 from "./v1.1.0"
import TabsDocsV2Beta from "./v2.0.0-beta"

export default function TabsPage() {
  return (
    <VersionedDocLoader
      componentName="Tabs"
      versions={{
        "1.0.0": TabsDocsV1,
        "1.1.0": TabsDocsV1_1,
        "2.0.0-beta": TabsDocsV2Beta,
      }}
    />
  )
}

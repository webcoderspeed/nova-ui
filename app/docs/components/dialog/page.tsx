"use client"

import { VersionedDocLoader } from "@/components/docs/versioned-doc-loader"
import DialogDocsV1 from "./v1.0.0"
import DialogDocsV1_1 from "./v1.1.0"
import DialogDocsV2Beta from "./v2.0.0-beta"

export default function DialogPage() {
  return (
    <VersionedDocLoader
      componentName="Dialog"
      versions={{
        "1.0.0": DialogDocsV1,
        "1.1.0": DialogDocsV1_1,
        "2.0.0-beta": DialogDocsV2Beta,
      }}
    />
  )
}

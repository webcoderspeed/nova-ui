"use client"

import { VersionedDocLoader } from "@/components/docs/versioned-doc-loader"
import SelectDocsV1 from "./v1.0.0"
import SelectDocsV1_1 from "./v1.1.0"
import SelectDocsV2Beta from "./v2.0.0-beta"

export default function SelectPage() {
  return (
    <VersionedDocLoader
      componentName="Select"
      versions={{
        "1.0.0": SelectDocsV1,
        "1.1.0": SelectDocsV1_1,
        "2.0.0-beta": SelectDocsV2Beta,
      }}
    />
  )
}

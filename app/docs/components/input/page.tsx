"use client"

import { VersionedDocLoader } from "@/components/docs/versioned-doc-loader"
import InputDocsV1 from "./v1.0.0"
import InputDocsV1_1 from "./v1.1.0"
import InputDocsV2Beta from "./v2.0.0-beta"

export default function InputPage() {
  return (
    <VersionedDocLoader
      componentName="Input"
      versions={{
        "1.0.0": InputDocsV1,
        "1.1.0": InputDocsV1_1,
        "2.0.0-beta": InputDocsV2Beta,
      }}
    />
  )
}

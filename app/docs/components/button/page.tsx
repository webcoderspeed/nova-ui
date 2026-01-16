"use client"

import { VersionedDocLoader } from "@/components/docs/versioned-doc-loader"
import ButtonDocsV1 from "./v1.0.0"
import ButtonDocsV1_1 from "./v1.1.0"
import ButtonDocsV2Beta from "./v2.0.0-beta"

export default function ButtonPage() {
  return (
    <VersionedDocLoader
      componentName="Button"
      versions={{
        "1.0.0": ButtonDocsV1,
        "1.1.0": ButtonDocsV1_1,
        "2.0.0-beta": ButtonDocsV2Beta,
      }}
    />
  )
}

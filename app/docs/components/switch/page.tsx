"use client"

import { VersionedDocLoader } from "@/components/docs/versioned-doc-loader"
import SwitchDocsV1 from "./v1.0.0"
import SwitchDocsV1_1 from "./v1.1.0"
import SwitchDocsV2Beta from "./v2.0.0-beta"

export default function SwitchPage() {
  return (
    <VersionedDocLoader
      componentName="Switch"
      versions={{
        "1.0.0": SwitchDocsV1,
        "1.1.0": SwitchDocsV1_1,
        "2.0.0-beta": SwitchDocsV2Beta,
      }}
    />
  )
}

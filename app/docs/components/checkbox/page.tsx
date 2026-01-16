"use client"

import { VersionedDocLoader } from "@/components/docs/versioned-doc-loader"
import CheckboxDocsV1 from "./v1.0.0"
import CheckboxDocsV1_1 from "./v1.1.0"
import CheckboxDocsV2Beta from "./v2.0.0-beta"

export default function CheckboxPage() {
  return (
    <VersionedDocLoader
      componentName="Checkbox"
      versions={{
        "1.0.0": CheckboxDocsV1,
        "1.1.0": CheckboxDocsV1_1,
        "2.0.0-beta": CheckboxDocsV2Beta,
      }}
    />
  )
}

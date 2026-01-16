"use client"

import { useVersion } from "@/components/version-provider"
import CheckboxDocsV1 from "./v1.0.0"

export default function CheckboxPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <CheckboxDocsV1 />
    default:
      return <CheckboxDocsV1 />
  }
}

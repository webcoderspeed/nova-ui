"use client"

import { useVersion } from "@/components/version-provider"
import FormDocsV1 from "./v1.0.0"

export default function FormPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <FormDocsV1 />
    default:
      return <FormDocsV1 />
  }
}

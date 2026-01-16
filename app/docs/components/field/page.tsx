"use client"

import { useVersion } from "@/components/version-provider"
import FieldDocsV1 from "./v1.0.0"

export default function FieldPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <FieldDocsV1 />
    default:
      return <FieldDocsV1 />
  }
}

"use client"

import { useVersion } from "@/components/version-provider"
import BreadcrumbDocsV1 from "./v1.0.0"

export default function BreadcrumbPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <BreadcrumbDocsV1 />
    default:
      return <BreadcrumbDocsV1 />
  }
}
